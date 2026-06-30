import M from './data-model.js';

let pass = 0, fail = 0;
const ok = (cond, msg) => { if (cond) { pass++; } else { fail++; console.log('  ✗ FAIL:', msg); } };

// --- Helpers
const mkImported = (over) => Object.assign({
    id: 'imp', name: 'Projekt A', lead: 'Ola', budget: 1000000, color: '#111111', projectCode: '86056',
    status: 'tidigt', start: '2026-01-01', end: '2028-01-01',
    phases: [{ name: 'Tidigt skede', start: '2026-01-01', end: '2027-01-01', color: '#9AA5B1' }]
}, over || {});

// 1) First import seeds _source / _overrides
{
    const projects = M.initSource([mkImported()]);
    ok(projects[0]._source && projects[0]._source.budget === 1000000, '1: _source seeded with budget');
    ok(Array.isArray(projects[0]._overrides) && projects[0]._overrides.length === 0, '1: _overrides empty');
}

// 2) Re-import refreshes SOURCE fields but PRESERVES planning (phases/dates)
{
    let existing = M.initSource([mkImported()]);
    // user adjusts planning: drag a phase + change project dates
    existing[0].phases[0].start = '2020-05-05';
    existing[0].start = '2025-09-09';
    existing[0].status = 'produktion';
    // source changes in Excel: budget + lead updated
    const imported = [mkImported({ budget: 4000000, lead: 'Emelie' })];
    const { projects, stats } = M.mergeImport(existing, imported);
    const p = projects[0];
    ok(p.budget === 4000000, '2: budget refreshed from source');
    ok(p.lead === 'Emelie', '2: lead refreshed from source');
    ok(p.phases[0].start === '2020-05-05', '2: user phase date preserved');
    ok(p.start === '2025-09-09', '2: user project start preserved');
    ok(p.status === 'produktion', '2: planning status preserved');
    ok(stats.updated === 1 && stats.added === 0, '2: stats updated=1');
}

// 3) User-overridden SOURCE field is NOT reverted by re-import
{
    let existing = M.initSource([mkImported()]);
    // user edits budget in the app, then records the override
    existing[0].budget = 999;
    M.recordOverrides(existing[0]);
    ok(existing[0]._overrides.includes('budget'), '3: budget marked overridden');
    const imported = [mkImported({ budget: 4000000 })];
    const { projects } = M.mergeImport(existing, imported);
    ok(projects[0].budget === 999, '3: overridden budget NOT reverted by import');
    // but a non-overridden field still refreshes
    const imported2 = [mkImported({ budget: 4000000, lead: 'Nina' })];
    const r2 = M.mergeImport(projects, imported2);
    ok(r2.projects[0].lead === 'Nina', '3: non-overridden lead still refreshes');
    ok(r2.projects[0].budget === 999, '3: budget still pinned');
}

// 4) New source rows are added; existing planning kept
{
    let existing = M.initSource([mkImported()]);
    const imported = [mkImported(), mkImported({ projectCode: '86099', name: 'Projekt B' })];
    const { projects, stats } = M.mergeImport(existing, imported);
    ok(projects.length === 2, '4: new project added');
    ok(stats.added === 1, '4: stats added=1');
    ok(projects.find(p => p.name === 'Projekt B'), '4: project B present');
}

// 5) Removed source row => flagged orphan, NOT deleted
{
    let existing = M.initSource([mkImported(), mkImported({ projectCode: '86099', name: 'Projekt B' })]);
    const imported = [mkImported()]; // B disappeared from Excel
    const { projects, stats } = M.mergeImport(existing, imported);
    ok(projects.length === 2, '5: orphan kept, not deleted');
    const b = projects.find(p => p.name === 'Projekt B');
    ok(b && b._orphan === true, '5: B flagged _orphan');
    ok(stats.orphaned === 1, '5: stats orphaned=1');
}

// 6) Matching by name when no project code
{
    let existing = M.initSource([mkImported({ projectCode: null, name: 'Namnlöst' })]);
    const imported = [mkImported({ projectCode: null, name: 'Namnlöst', budget: 5 })];
    const { projects, stats } = M.mergeImport(existing, imported);
    ok(stats.updated === 1 && projects.length === 1, '6: matched by name (no dupe)');
    ok(projects[0].budget === 5, '6: budget refreshed via name match');
}

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
