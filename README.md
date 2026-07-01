# Timeline

A visual project planning tool that runs entirely in your browser. Create and manage projects and events on an interactive timeline with drag-and-drop support.

## Features

- **Visual Timeline** - See all your projects and events on an interactive timeline
- **Multiple Zoom Levels** - View 3 months, 1 year, or 2 years at a time
- **Drag & Drop** - Move and resize projects directly on the timeline
- **Phases (faser)** - Give each project its own timed phases (e.g. Early stage → Art programme → Procurement → Production → Exhibition/Closing). Drag phases to move them and drag their edges to resize, directly on the timeline. Display them either as coloured segments **inside** the project bar or as a compact track **below** the project (Settings → Faser).
- **Backward planning** - Set only the deadline (end date) and click *"Planera bakåt från slut"* to lay out the standard phases ending exactly there; the project start is derived automatically. Matches how art projects are planned ("the building opens then — work back").
- **Fuzzy dates** - Set start/end as an exact **Date**, a **Week**, a **Month**, or a **Quarter** (Q1–Q4) — useful when planning is only known to the quarter.
- **Load forecast (Belastningsprognos)** - See the full active project value per year, set a warning threshold (mkr/year), and get **crunch years** highlighted both in the forecast and live on the timeline's load ribbon as you drag projects.
- **Areas & Statuses** - Organize projects by custom areas (departments/workstreams) and statuses
- **Project metadata** - Track investment budget and project code per project
- **Events** - Add single-day events with custom icons
- **Import/Export** - Save your data as JSON, import from iCal calendars, or import the "Konstprojekten" Excel (.xlsx) export directly. **Drag & drop** a `.xlsx`, `.json` or `.ics` file anywhere onto the window to import it, and get an **import receipt** afterwards showing exactly what changed (new / refreshed / unchanged / missing from source).
- **Offline Support** - Works offline as a Progressive Web App (PWA)
- **Privacy First** - All data is stored locally in your browser, nothing is sent to any server
- **Dark/Light Theme** - Choose your preferred color scheme
- **Bilingual** - Available in Swedish and English

## Getting Started

### Option 1: Open directly
Simply open `index.html` in your web browser.

### Option 2: Local server
For the best experience (especially for PWA features), run a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

Then open `http://localhost:8000` in your browser.

## Usage

1. **Add a Project** - Click "Project" button to create a new project with start and end dates
2. **Add an Event** - Click "Event" button to add a single-day event
3. **Navigate** - Scroll horizontally to move through time, or click "Today" to jump to current date
4. **Edit** - Click any project or event to edit its details
5. **Drag & Drop** - Drag projects to move them, or drag edges to resize
6. **Filter** - Use the filter panel to show/hide specific areas or statuses
7. **Export** - Save your timeline data as JSON for backup or sharing

## Art projects (Konstprojekt)

The app understands the "Konstprojekten" SharePoint Excel export used by the
art unit and can build a phased timeline from it.

### Import an Excel export in the app
1. Open **Öppna ▾ → Importera Excel (konstprojekt)...**
2. Pick the `.xlsx` file. Each row becomes a project with:
   - **Faser** scheduled across the project span (anchored on the
     *Preliminärt avslut* year or *Invigning* date where available)
   - **Investeringsbudget** and **Projektkod**
   - **Stadie** mapped to the project status / current stage
   - **Konstprojektledare** used as the colour-coded area (workstream)
   - A milestone event for the inauguration / preliminary completion

The reader is dependency-free: an `.xlsx` is a ZIP of XML, parsed with the
browser's built-in `DecompressionStream`.

### Pre-generated starter dataset
`konstprojekt-data.json` is a ready-to-import timeline generated from the
export. Import it via **Öppna → Öppna fil...**.

To regenerate it from a fresh export (Node 18+):

```bash
node generate-konstprojekt-data.js path/to/projekten.xlsx
```

`generate-konstprojekt-data.js` and the in-app import share the same parser
and mapping (`konstprojekt-import.js`), so the bundled dataset and a live
import stay identical.

## Source ⊕ planning model

When the master data lives in a spreadsheet (Excel/SharePoint), the app keeps
two layers apart so a re-import never overwrites your work:

- **Source fields** (name, lead, budget, area/colour, code) are refreshed from
  each import — unless you have explicitly overridden them in the app.
- **Planning fields** (phases, dates, status, comment) are always preserved.

On re-import, projects are matched by code (or name), source facts are
refreshed, new rows are added, and rows that vanished from the source are
flagged (not deleted). The logic lives in `data-model.js` as pure,
unit-tested functions (`mergeImport`, `recordOverrides`, `initSource`).

## Shared file (sync via your own folder)

In Chrome/Edge you can connect the timeline to a single JSON file kept in a
synced folder (OneDrive, SharePoint, Dropbox, …) so a small team shares one
plan — no server involved. Use **Settings → Delad fil**:

- **Skapa delad...** writes a new file; **Öppna delad...** connects to an
  existing one. Edits auto-save back to the file.
- **Conflict guard**: before overwriting, the app checks whether the file was
  changed by someone else since you last read it. If so it pauses auto-save,
  shows a banner, and lets you choose **Läs in deras** (load their version) or
  **Behåll mina** (overwrite with yours) instead of silently clobbering their
  work.

The file handle is remembered between sessions via IndexedDB; re-granting
permission after a browser restart needs one click (**Återanslut**). When
connected, the status shows **when the file was last synced**.

## Report / print view

**Settings → Rapport / utskrift** opens a clean, self-contained report: a
timeline grouped by område (with phase segments) plus the load-per-year
chart and its warning threshold. Colours are baked in and the canvas is
white, so it looks the same regardless of the app theme. From there you can
**Skriv ut / PDF** (print or save as PDF) or **Ladda ner bild** to save it
as a scalable SVG — handy for meeting slides and planning documents.

## Getting started screen

An empty timeline shows a short onboarding card with the three ways in
(import Excel, create a project, try sample data) plus a few tips for
features that aren't obvious (drag-and-drop import, backward planning,
dragging phases). It disappears as soon as there is anything to show.

## Technology

This is a standalone web application built with:
- Vanilla JavaScript (no frameworks)
- HTML5 & CSS3
- LocalStorage for data persistence
- Service Worker for offline support

## License

MIT License - see [LICENSE](LICENSE) for details.
