/*
 * data-model.js
 *
 * Pillar 1 of the "source ⊕ planning overlay" model.
 *
 * A project mixes two kinds of fields:
 *   - SOURCE fields  : facts that come from the master (Excel/SharePoint).
 *                      Refreshed on every re-import — UNLESS the user has
 *                      explicitly overridden them.
 *   - PLANNING fields: everything the user owns in the app (phases, dates,
 *                      status, comment). A re-import never touches these.
 *
 * Each project carries:
 *   _source    : the last imported snapshot of its SOURCE fields
 *   _overrides : list of SOURCE field names the user has manually changed
 *
 * This module is generic (no art-project specifics) and runs in the browser
 * (window.TimelineModel) and in Node (require) so it can be unit-tested.
 */
(function (root, factory) {
    const api = factory();
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = api;
    } else {
        root.TimelineModel = api;
    }
})(typeof self !== 'undefined' ? self : this, function () {
    'use strict';

    // Fields owned by the source (the spreadsheet). Everything else a project
    // holds (phases, start, end, status, comment, id) is planning-owned.
    const SOURCE_FIELDS = ['name', 'lead', 'budget', 'color', 'projectCode'];

    // Stable identity for matching a project across imports: the project code
    // (first run of 4+ digits) if present, otherwise the trimmed lower-case name.
    function sourceKeyOf(project) {
        const code = project && project.projectCode;
        if (code) {
            const m = /\d{4,}/.exec(String(code));
            if (m) return 'code:' + m[0];
            const t = String(code).trim().toLowerCase();
            if (t) return 'code:' + t;
        }
        return 'name:' + String((project && project.name) || '').trim().toLowerCase();
    }

    function pickSource(project) {
        const snap = {};
        SOURCE_FIELDS.forEach(f => { snap[f] = project ? project[f] : undefined; });
        return snap;
    }

    // Seed _source/_overrides on freshly imported projects (first import).
    function initSource(projects) {
        (projects || []).forEach(p => {
            if (!p._source) p._source = pickSource(p);
            if (!Array.isArray(p._overrides)) p._overrides = [];
        });
        return projects;
    }

    // Compare a project's current SOURCE field values against its _source
    // snapshot and record any that the user changed as overrides. Call this
    // after the user edits a project so a later import won't revert them.
    function recordOverrides(project) {
        if (!project || !project._source) return project;
        const ov = new Set(project._overrides || []);
        SOURCE_FIELDS.forEach(f => {
            const cur = project[f] == null ? null : project[f];
            const src = project._source[f] == null ? null : project._source[f];
            if (cur !== src) ov.add(f);
        });
        project._overrides = Array.from(ov);
        return project;
    }

    function newId() {
        return 't' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
    }

    /**
     * Merge a freshly imported set into the existing projects.
     *   - Matched projects: refresh SOURCE fields from the import (skipping any
     *     the user overrode) and update their _source snapshot. Planning fields
     *     (phases, start, end, status, comment) are left untouched.
     *   - New source rows: added as new projects (with _source seeded).
     *   - Existing projects whose source row vanished: flagged _orphan, NOT
     *     deleted (planning is preserved; user decides).
     *
     * Returns { projects, stats:{updated, added, orphaned, unchanged} }.
     * Pure: does not mutate the `imported` array's objects beyond reading them.
     */
    function mergeImport(existing, imported, opts) {
        opts = opts || {};
        const out = (existing || []).map(p => Object.assign({}, p));
        const byKey = new Map();
        out.forEach(p => byKey.set(sourceKeyOf(p), p));

        const seenKeys = new Set();
        let updated = 0, added = 0, unchanged = 0;

        (imported || []).forEach(imp => {
            const key = sourceKeyOf(imp);
            seenKeys.add(key);
            const match = byKey.get(key);
            if (match) {
                const ov = new Set(match._overrides || []);
                let changed = false;
                SOURCE_FIELDS.forEach(f => {
                    if (ov.has(f)) return;             // user owns this field now
                    if (match[f] !== imp[f]) { match[f] = imp[f]; changed = true; }
                });
                match._source = pickSource(imp);
                if (!Array.isArray(match._overrides)) match._overrides = [];
                delete match._orphan;
                if (changed) updated++; else unchanged++;
            } else {
                const np = Object.assign({}, imp);
                np.id = newId();
                np._source = pickSource(imp);
                np._overrides = [];
                out.push(np);
                byKey.set(key, np);
                added++;
            }
        });

        // Flag projects whose source no longer exists (kept, not deleted).
        let orphaned = 0;
        out.forEach(p => {
            if (p._source && !seenKeys.has(sourceKeyOf(p))) {
                // Only flag projects that ever came from a source.
                if (!opts.ignoreOrphans) { p._orphan = true; orphaned++; }
            }
        });

        return { projects: out, stats: { updated, added, orphaned, unchanged } };
    }

    return {
        SOURCE_FIELDS,
        sourceKeyOf,
        pickSource,
        initSource,
        recordOverrides,
        mergeImport
    };
});
