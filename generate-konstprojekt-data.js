#!/usr/bin/env node
/*
 * generate-konstprojekt-data.js
 *
 * Regenerates konstprojekt-data.json from the "Konstprojekten" Excel export.
 * Uses the exact same parser/mapping as the in-app import, so the bundled
 * starter dataset and a fresh in-app import stay identical.
 *
 * Usage:
 *   node generate-konstprojekt-data.js <path-to.xlsx> [output.json]
 */
const fs = require('fs');
const path = require('path');
const Konst = require('./konstprojekt-import.js');

async function main() {
    const input = process.argv[2];
    const output = process.argv[3] || path.join(__dirname, 'konstprojekt-data.json');
    if (!input) {
        console.error('Usage: node generate-konstprojekt-data.js <path-to.xlsx> [output.json]');
        process.exit(1);
    }

    const buf = fs.readFileSync(input);
    const arrayBuffer = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);

    // Use a fixed reference date so regeneration is deterministic.
    const data = await Konst.importXlsxToTimeline(arrayBuffer, {
        referenceDate: new Date(Date.UTC(2026, 5, 1))
    });

    fs.writeFileSync(output, JSON.stringify(data, null, 2) + '\n');
    console.log('Wrote ' + output);
    console.log('Projects: ' + data.projects.length + ', events: ' + data.events.length +
                ', range: ' + data.timelineRange.startYear + '-' + data.timelineRange.endYear);
}

main().catch(err => { console.error(err); process.exit(1); });
