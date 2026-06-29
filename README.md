# Timeline

A visual project planning tool that runs entirely in your browser. Create and manage projects and events on an interactive timeline with drag-and-drop support.

## Features

- **Visual Timeline** - See all your projects and events on an interactive timeline
- **Multiple Zoom Levels** - View 3 months, 1 year, or 2 years at a time
- **Drag & Drop** - Move and resize projects directly on the timeline
- **Phases (faser)** - Give each project its own timed phases (e.g. Early stage → Art programme → Procurement → Production → Exhibition/Closing). Drag phases to move them and drag their edges to resize, directly on the timeline. Display them either as coloured segments **inside** the project bar or as a compact track **below** the project (Settings → Faser).
- **Areas & Statuses** - Organize projects by custom areas (departments/workstreams) and statuses
- **Project metadata** - Track investment budget and project code per project
- **Events** - Add single-day events with custom icons
- **Import/Export** - Save your data as JSON, import from iCal calendars, or import the "Konstprojekten" Excel (.xlsx) export directly
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

## Technology

This is a standalone web application built with:
- Vanilla JavaScript (no frameworks)
- HTML5 & CSS3
- LocalStorage for data persistence
- Service Worker for offline support

## License

MIT License - see [LICENSE](LICENSE) for details.
