# Timeline

A visual project planning tool that runs entirely in your browser. Create and manage projects and events on an interactive timeline with drag-and-drop support.

## Features

- **Visual Timeline** - See all your projects and events on an interactive timeline
- **Multiple Zoom Levels** - View 3 months, 1 year, or 2 years at a time
- **Drag & Drop** - Move and resize projects directly on the timeline
- **Areas & Statuses** - Organize projects by custom areas (departments/workstreams) and statuses
- **Events** - Add single-day events with custom icons
- **Import/Export** - Save your data as JSON or import from iCal calendars
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

## Technology

This is a standalone web application built with:
- Vanilla JavaScript (no frameworks)
- HTML5 & CSS3
- LocalStorage for data persistence
- Service Worker for offline support

## License

MIT License - see [LICENSE](LICENSE) for details.
