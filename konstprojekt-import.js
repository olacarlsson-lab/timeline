/*
 * konstprojekt-import.js
 *
 * Dependency-free reader for the "Konstprojekten" Excel export (.xlsx) used by
 * the art unit, plus the logic that turns those rows into timeline projects
 * with phases (faser).
 *
 * The same code runs in two places so the in-app import and the pre-generated
 * konstprojekt-data.json never drift apart:
 *   - In the browser: window.KonstprojektImport (used by app.js)
 *   - In Node:        require('./konstprojekt-import.js') (used by the
 *                     generate-konstprojekt-data.js build script)
 *
 * No third-party libraries: .xlsx is just a ZIP of XML, and both modern
 * browsers and Node 18+ expose DecompressionStream('deflate-raw').
 */
(function (root, factory) {
    const api = factory();
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = api;
    } else {
        root.KonstprojektImport = api;
    }
})(typeof self !== 'undefined' ? self : this, function () {
    'use strict';

    // ---- Phases (faser) and current-stage (Stadie) definitions ----------

    // The art-project lifecycle. These are the segments drawn inside each
    // project bar. `months` is the rough default duration used when we have to
    // schedule a project from sparse Excel data; everything is editable in-app.
    const PHASES = [
        { id: 'tidigt',       sv: 'Tidigt skede',     en: 'Early stage',          color: '#9AA5B1', months: 12 },
        { id: 'konstprogram', sv: 'Konstprogram',     en: 'Art programme',        color: '#31567D', months: 9 },
        { id: 'upphandling',  sv: 'Upphandling',      en: 'Procurement',          color: '#E8BC1C', months: 6 },
        { id: 'produktion',   sv: 'Produktion',       en: 'Production',           color: '#BA4A71', months: 18 },
        { id: 'visning',      sv: 'Visning/Avslut',   en: 'Exhibition/Closing',   color: '#37B94B', months: 4 }
    ];

    // The "Stadie" column. A superset of the work phases above: it also has
    // "Kommande" (upcoming, not yet started) which is a status rather than a
    // drawn phase. Used for the project status chip / current stage.
    const STADIE = [
        { id: 'tidigt',       sv: 'Tidigt skede',     en: 'Early stage',          color: '#9AA5B1' },
        { id: 'kommande',     sv: 'Kommande',         en: 'Upcoming',             color: '#6B7280' },
        { id: 'konstprogram', sv: 'Konstprogram',     en: 'Art programme',        color: '#31567D' },
        { id: 'upphandling',  sv: 'Upphandling',      en: 'Procurement',          color: '#E8BC1C' },
        { id: 'produktion',   sv: 'Produktion',       en: 'Production',           color: '#BA4A71' },
        { id: 'visning',      sv: 'Visning/Avslut',   en: 'Exhibition/Closing',   color: '#37B94B' }
    ];

    // Map raw Excel "Stadie" text -> stage id.
    function normalizeStadie(raw) {
        const s = (raw || '').toString().trim().toLowerCase();
        if (!s) return 'tidigt';
        if (s.indexOf('produktion') !== -1) return 'produktion';
        if (s.indexOf('upphandling') !== -1) return 'upphandling';
        if (s.indexOf('konstprogram') !== -1) return 'konstprogram';
        if (s.indexOf('kommande') !== -1) return 'kommande';
        if (s.indexOf('visning') !== -1 || s.indexOf('avslut') !== -1) return 'visning';
        if (s.indexOf('tidig') !== -1) return 'tidigt';
        return 'tidigt';
    }

    // Colour palette assigned per project lead (Konstprojektledare) so the
    // colour dimension of the timeline shows who owns each project.
    const LEAD_PALETTE = [
        '#BA4A71', '#31567D', '#E8BC1C', '#37B94B',
        '#FA4D2D', '#7C3AED', '#0EA5A4', '#D97706'
    ];

    // ---- Date helpers ----------------------------------------------------

    function pad(n) { return n < 10 ? '0' + n : '' + n; }

    function toISO(d) {
        return d.getUTCFullYear() + '-' + pad(d.getUTCMonth() + 1) + '-' + pad(d.getUTCDate());
    }

    function addMonths(d, months) {
        const r = new Date(d.getTime());
        const day = r.getUTCDate();
        r.setUTCMonth(r.getUTCMonth() + months);
        // Clamp to end of month if we overflowed (e.g. Jan 31 + 1 month).
        if (r.getUTCDate() < day) r.setUTCDate(0);
        return r;
    }

    // Excel serial date (1900 date system) -> Date. Excel's day 1 is
    // 1900-01-01 and it wrongly treats 1900 as a leap year, so the epoch we
    // count days from is 1899-12-30.
    function excelSerialToDate(serial) {
        const ms = Math.round(serial) * 86400000;
        return new Date(Date.UTC(1899, 11, 30) + ms);
    }

    // ---- Minimal ZIP reader (central directory based) --------------------

    async function inflateRaw(bytes) {
        const ds = new DecompressionStream('deflate-raw');
        const stream = new Response(bytes).body.pipeThrough(ds);
        const buf = await new Response(stream).arrayBuffer();
        return new Uint8Array(buf);
    }

    async function unzip(arrayBuffer) {
        const data = new Uint8Array(arrayBuffer);
        const view = new DataView(arrayBuffer);
        const td = new TextDecoder('utf-8');

        // Locate End Of Central Directory record (scan backwards for signature).
        let eocd = -1;
        for (let i = data.length - 22; i >= 0; i--) {
            if (view.getUint32(i, true) === 0x06054b50) { eocd = i; break; }
        }
        if (eocd === -1) throw new Error('Inte en giltig .xlsx-fil (zip saknas).');

        const count = view.getUint16(eocd + 10, true);
        let offset = view.getUint32(eocd + 16, true);

        const files = {};
        for (let n = 0; n < count; n++) {
            if (view.getUint32(offset, true) !== 0x02014b50) break;
            const method = view.getUint16(offset + 10, true);
            const compSize = view.getUint32(offset + 20, true);
            const nameLen = view.getUint16(offset + 28, true);
            const extraLen = view.getUint16(offset + 30, true);
            const commentLen = view.getUint16(offset + 32, true);
            const localOffset = view.getUint32(offset + 42, true);
            const name = td.decode(data.subarray(offset + 46, offset + 46 + nameLen));

            // Read the local header to find where the actual data starts.
            const lhNameLen = view.getUint16(localOffset + 26, true);
            const lhExtraLen = view.getUint16(localOffset + 28, true);
            const dataStart = localOffset + 30 + lhNameLen + lhExtraLen;
            const compBytes = data.subarray(dataStart, dataStart + compSize);

            files[name] = { method, bytes: compBytes };
            offset += 46 + nameLen + extraLen + commentLen;
        }

        // Lazily decode only the entries we need.
        return {
            async read(name) {
                const f = files[name];
                if (!f) return null;
                const raw = f.method === 0 ? f.bytes : await inflateRaw(f.bytes);
                return td.decode(raw);
            }
        };
    }

    // ---- XLSX -> rows ----------------------------------------------------

    function colToIndex(ref) {
        // "AB12" -> column index (0-based) from the letter part.
        let i = 0, c = 0;
        while (i < ref.length && ref[i] >= 'A' && ref[i] <= 'Z') {
            c = c * 26 + (ref.charCodeAt(i) - 64);
            i++;
        }
        return c - 1;
    }

    function decodeXmlEntities(s) {
        return s.replace(/&lt;/g, '<').replace(/&gt;/g, '>')
                .replace(/&quot;/g, '"').replace(/&apos;/g, "'")
                .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(+d))
                .replace(/&#x([0-9a-fA-F]+);/g, (_, h) => String.fromCodePoint(parseInt(h, 16)))
                .replace(/&amp;/g, '&');
    }

    function parseSharedStrings(xml) {
        if (!xml) return [];
        const strings = [];
        const siRe = /<si\b[^>]*>([\s\S]*?)<\/si>/g;
        let m;
        while ((m = siRe.exec(xml)) !== null) {
            // Concatenate all <t> runs inside the shared-string item.
            const inner = m[1];
            let text = '';
            const tRe = /<t\b[^>]*>([\s\S]*?)<\/t>/g;
            let t;
            while ((t = tRe.exec(inner)) !== null) text += t[1];
            strings.push(decodeXmlEntities(text));
        }
        return strings;
    }

    // Parse the first worksheet into a 2D array of trimmed cell strings.
    // Date-formatted numbers are converted to ISO date strings.
    function parseSheet(xml, shared) {
        const rows = [];
        const rowRe = /<row\b[^>]*>([\s\S]*?)<\/row>/g;
        let rm;
        while ((rm = rowRe.exec(xml)) !== null) {
            const cells = [];
            const cellRe = /<c\b([^>]*?)(?:\/>|>([\s\S]*?)<\/c>)/g;
            let cm;
            while ((cm = cellRe.exec(rm[1])) !== null) {
                const attrs = cm[1];
                const body = cm[2] || '';
                const refMatch = /r="([A-Z]+)\d+"/.exec(attrs);
                const idx = refMatch ? colToIndex(refMatch[1]) : cells.length;
                const typeMatch = /t="([^"]+)"/.exec(attrs);
                const type = typeMatch ? typeMatch[1] : 'n';
                const styleMatch = /s="(\d+)"/.exec(attrs);

                let value = '';
                if (type === 's') {
                    const vMatch = /<v>([\s\S]*?)<\/v>/.exec(body);
                    if (vMatch) value = shared[parseInt(vMatch[1], 10)] || '';
                } else if (type === 'inlineStr') {
                    const tMatch = /<t\b[^>]*>([\s\S]*?)<\/t>/.exec(body);
                    if (tMatch) value = decodeXmlEntities(tMatch[1]);
                } else {
                    const vMatch = /<v>([\s\S]*?)<\/v>/.exec(body);
                    if (vMatch) {
                        const num = parseFloat(vMatch[1]);
                        // Heuristic: a styled number in the date range is a date.
                        if (styleMatch && !isNaN(num) && num > 35000 && num < 80000) {
                            value = toISO(excelSerialToDate(num));
                        } else {
                            value = vMatch[1];
                        }
                    }
                }
                while (cells.length < idx) cells.push('');
                cells[idx] = (value || '').toString().trim();
            }
            rows.push(cells);
        }
        return rows;
    }

    async function parseXlsx(arrayBuffer) {
        const zip = await unzip(arrayBuffer);
        const shared = parseSharedStrings(await zip.read('xl/sharedStrings.xml'));
        // The query export keeps its data on sheet1.
        let sheetXml = await zip.read('xl/worksheets/sheet1.xml');
        if (!sheetXml) {
            // Fall back: find the first worksheet part.
            for (let i = 1; i <= 20; i++) {
                sheetXml = await zip.read('xl/worksheets/sheet' + i + '.xml');
                if (sheetXml) break;
            }
        }
        if (!sheetXml) throw new Error('Hittade inget kalkylblad i filen.');
        const grid = parseSheet(sheetXml, shared);
        if (!grid.length) return { headers: [], rows: [] };
        return { headers: grid[0].map(h => (h || '').trim()), rows: grid.slice(1) };
    }

    // ---- rows -> timeline ------------------------------------------------

    function firstLead(raw) {
        if (!raw) return null;
        // SharePoint multi-value fields are separated by ";#".
        const parts = raw.split(';#').map(s => s.trim()).filter(Boolean);
        return parts.length ? parts[0] : null;
    }

    function parseBudget(raw) {
        if (!raw) return null;
        const n = parseFloat(raw.toString().replace(/[^\d.,-]/g, '').replace(/\s/g, '').replace(',', '.'));
        return isNaN(n) ? null : Math.round(n);
    }

    function parseYear(raw) {
        const m = /\b(20\d{2})\b/.exec((raw || '').toString());
        return m ? parseInt(m[1], 10) : null;
    }

    function isISODate(raw) {
        return /^\d{4}-\d{2}-\d{2}$/.test((raw || '').toString().trim());
    }

    // Build the phase segments for one project given an anchor strategy.
    function schedulePhases(stadieId, endAnchorDate, referenceDate, explicitStart) {
        const order = PHASES;
        const total = order.reduce((s, p) => s + p.months, 0);

        let projectStart;
        let totalMs = null; // when set, phases are scaled to fit start..end exactly
        if (explicitStart && endAnchorDate && endAnchorDate.getTime() > explicitStart.getTime()) {
            // Explicit start AND end: scale the standard phases to fit the span.
            projectStart = explicitStart;
            totalMs = endAnchorDate.getTime() - explicitStart.getTime();
        } else if (explicitStart) {
            // Explicit start only: lay phases forward with default durations.
            projectStart = explicitStart;
        } else if (endAnchorDate) {
            // Lay phases so the final "Visning/Avslut" ends at the anchor.
            projectStart = addMonths(endAnchorDate, -total);
        } else {
            // No date anchor: position around the current stage relative to today.
            const currentWorkId = stadieId === 'kommande' ? null : stadieId;
            if (currentWorkId) {
                let cumBefore = 0;
                for (const p of order) {
                    if (p.id === currentWorkId) break;
                    cumBefore += p.months;
                }
                const cur = order.find(p => p.id === currentWorkId) || order[0];
                // Current phase is roughly half-way through right now.
                const curStart = addMonths(referenceDate, -Math.round(cur.months / 2));
                projectStart = addMonths(curStart, -cumBefore);
            } else {
                // Upcoming / unscheduled: start a little after today.
                projectStart = addMonths(referenceDate, 3);
            }
        }

        const phases = [];
        let cursor = projectStart;
        for (const p of order) {
            const start = cursor;
            const end = (totalMs != null)
                ? new Date(start.getTime() + (p.months / total) * totalMs)
                : addMonths(cursor, p.months);
            phases.push({
                id: p.id,
                name: p.sv,
                start: toISO(start),
                end: toISO(end),
                color: p.color
            });
            cursor = end;
        }
        return phases;
    }

    /**
     * Convert parsed Excel rows into a timeline data object ready for import.
     * @param {{headers:string[], rows:string[][]}} parsed
     * @param {Object} [opts]
     * @param {Date}   [opts.referenceDate] "today" used for scheduling.
     */
    // Mappable target fields. `keywords` drive auto-detection from headers.
    const FIELDS = [
        { key: 'rubrik',   label: 'Projektnamn',                required: true, keywords: ['rubrik', 'projektnamn', 'namn', 'titel på projekt'] },
        { key: 'budget',   label: 'Investeringsbudget',         keywords: ['investeringsbudget', 'budget', 'belopp', 'kostnad'] },
        { key: 'lead',     label: 'Projektledare',              keywords: ['konstprojektledare', 'projektledare', 'ledare', 'ansvarig'] },
        { key: 'konstnar', label: 'Konstnär / titel',           keywords: ['titel - konstnär', 'konstnär', 'artist', 'verk'] },
        { key: 'omrade',   label: 'Område (förvaltningsobjekt)', keywords: ['förvaltningsobjekt', 'område', 'plats', 'objekt', 'byggnad'] }
    ];

    // Auto-detect a field -> column-index mapping from the header row. Each
    // column is assigned to at most one field (first matching keyword wins).
    function detectMapping(headers) {
        const used = new Set();
        const map = {};
        FIELDS.forEach(f => {
            let found = -1;
            for (const kw of f.keywords) {
                const needle = kw.toLowerCase();
                const i = headers.findIndex((h, hi) =>
                    !used.has(hi) && h && h.toLowerCase().indexOf(needle) !== -1);
                if (i !== -1) { found = i; break; }
            }
            map[f.key] = found;
            if (found !== -1) used.add(found);
        });
        return map;
    }

    function buildTimeline(parsed, opts) {
        opts = opts || {};
        const reference = opts.referenceDate || new Date();
        const headers = parsed.headers || [];
        const rows = parsed.rows || [];

        // Column mapping: either supplied by the user (field key -> column index)
        // or auto-detected from the header names.
        const idx = opts.mapping || detectMapping(headers);

        const get = (row, i) => (i >= 0 && i < row.length ? (row[i] || '').toString().trim() : '');

        const areaNames = [];      // ordered unique områden (förvaltningsobjekt)
        const areaColor = {};
        const projects = [];
        let minYear = reference.getUTCFullYear();
        let maxYear = reference.getUTCFullYear();

        rows.forEach((row, n) => {
            const name = get(row, idx.rubrik);
            if (!name) return;

            const lead = firstLead(get(row, idx.lead));

            // Område drives the colour / area dimension.
            const omrade = get(row, idx.omrade) || null;
            if (omrade && !areaColor[omrade]) {
                areaColor[omrade] = LEAD_PALETTE[areaNames.length % LEAD_PALETTE.length];
                areaNames.push(omrade);
            }

            const stadieId = normalizeStadie(get(row, idx.stadie));

            // Determine end anchor. The export stores the inauguration as a real
            // date in "Invigning" (rare), and a target completion *year* in
            // "Preliminärt avslut" (common). Prefer the most precise signal.
            const invRaw = get(row, idx.invigning);
            const avslutRaw = get(row, idx.avslut);
            let endAnchor = null;
            let invigningDate = null;   // real inauguration date, if any
            let anchorYear = null;      // year-only target, if any
            if (isISODate(invRaw)) {
                invigningDate = invRaw;
                endAnchor = new Date(invRaw + 'T00:00:00Z');
            } else if (isISODate(avslutRaw)) {
                endAnchor = new Date(avslutRaw + 'T00:00:00Z');
            } else if (parseYear(avslutRaw)) {
                anchorYear = parseYear(avslutRaw);
                endAnchor = new Date(Date.UTC(anchorYear, 11, 15));
            } else if (parseYear(invRaw)) {
                anchorYear = parseYear(invRaw);
                endAnchor = new Date(Date.UTC(anchorYear, 11, 15));
            }

            // Optional explicit start date column.
            const startRaw = get(row, idx.start);
            let explicitStart = null;
            if (isISODate(startRaw)) {
                explicitStart = new Date(startRaw + 'T00:00:00Z');
            } else if (parseYear(startRaw)) {
                explicitStart = new Date(Date.UTC(parseYear(startRaw), 0, 1));
            }

            const phases = schedulePhases(stadieId, endAnchor, reference, explicitStart);
            const start = phases[0].start;
            const end = phases[phases.length - 1].end;

            // Build a readable comment from the mapped extra fields.
            const desc = get(row, idx.besk);
            const formedling = get(row, idx.formedling);
            const artist = get(row, idx.konstnar);
            const commentParts = [];
            if (desc) commentParts.push(desc);
            if (artist) commentParts.push('Konstnär/titel: ' + artist);
            if (formedling) commentParts.push('Förmedlingsinsatser:\n' + formedling);

            projects.push({
                id: 'konst-' + (n + 1),
                name: name,
                lead: lead || null,
                status: stadieId,
                start: start,
                startType: 'date',
                end: end,
                endType: 'date',
                color: omrade ? areaColor[omrade] : '#6B7280',
                budget: parseBudget(get(row, idx.budget)),
                projectCode: get(row, idx.kod) || null,
                phases: phases,
                comment: commentParts.length ? commentParts.join('\n\n') : null,
                _invigningDate: invigningDate,
                _anchorYear: anchorYear
            });

            minYear = Math.min(minYear, parseInt(start.slice(0, 4), 10));
            maxYear = Math.max(maxYear, parseInt(end.slice(0, 4), 10));
        });

        // Build milestone events: a real inauguration date where we have one,
        // otherwise a preliminary-completion marker for the target year.
        const eventsOut = [];
        projects.forEach(p => {
            if (p._invigningDate) {
                eventsOut.push({
                    id: p.id + '-invigning',
                    name: 'Invigning: ' + p.name,
                    start: p._invigningDate,
                    startType: 'date',
                    end: null,
                    endType: null,
                    projectId: p.id,
                    symbol: 'star',
                    comment: null
                });
            } else if (p._anchorYear) {
                eventsOut.push({
                    id: p.id + '-avslut',
                    name: 'Prel. avslut: ' + p.name,
                    start: p._anchorYear + '-12-15',
                    startType: 'year',
                    end: null,
                    endType: null,
                    projectId: p.id,
                    symbol: 'flag',
                    comment: null
                });
            }
            delete p._invigningDate;
            delete p._anchorYear;
        });

        const areas = areaNames.map(n => ({ name: n, color: areaColor[n] }));
        // Ensure an "Övrigt" bucket exists for projects without an område.
        if (projects.some(p => p.color === '#6B7280')) {
            areas.push({ name: 'Övrigt', color: '#6B7280' });
        }

        return {
            version: 1,
            exportDate: new Date().toISOString(),
            timelineRange: { startYear: minYear, endYear: maxYear },
            areas: areas,
            statuses: STADIE.map(s => ({ id: s.id, name: s.sv })),
            phaseDefinitions: PHASES.map(p => ({ id: p.id, name: p.sv, color: p.color })),
            projects: projects,
            events: eventsOut
        };
    }

    async function importXlsxToTimeline(arrayBuffer, opts) {
        const parsed = await parseXlsx(arrayBuffer);
        return buildTimeline(parsed, opts);
    }

    return {
        PHASES,
        STADIE,
        LEAD_PALETTE,
        FIELDS,
        normalizeStadie,
        detectMapping,
        parseXlsx,
        buildTimeline,
        importXlsxToTimeline
    };
});
