// Timeline Application
const DEFAULT_AREAS = [
    { name: 'Utställningar', color: '#BA4A71' },
    { name: 'Pedagogik', color: '#31567D' },
    { name: 'Kommunikation', color: '#E8BC1C' },
    { name: 'Drift & Teknik', color: '#37B94B' }
];

const DEFAULT_STATUSES = [
    { id: 'early', name: 'Idé/Research' },
    { id: 'procurement', name: 'Planering' },
    { id: 'implementation', name: 'Produktion' },
    { id: 'completion', name: 'Visning/Avslut' }
];

const DEFAULT_STATUSES_EN = [
    { id: 'early', name: 'Idea/Research' },
    { id: 'procurement', name: 'Planning' },
    { id: 'implementation', name: 'Production' },
    { id: 'completion', name: 'Exhibition/Closing' }
];

const SAMPLE_DATA = {
    "version": 1,
    "exportDate": "2026-01-01T00:00:00.000Z",
    "timelineRange": {
        "startYear": 2025,
        "endYear": 2027
    },
    "areas": [
        { "name": "Utställningar", "color": "#BA4A71" },
        { "name": "Pedagogik", "color": "#31567D" },
        { "name": "Kommunikation", "color": "#E8BC1C" },
        { "name": "Drift & Teknik", "color": "#37B94B" }
    ],
    "statuses": [
        { "id": "early", "name": "Idé/Research" },
        { "id": "procurement", "name": "Planering" },
        { "id": "implementation", "name": "Produktion" },
        { "id": "completion", "name": "Visning/Avslut" }
    ],
    "projects": [
        {
            "id": "sample-1",
            "name": "Maria Lindberg: Echoes",
            "lead": "Kuratorsteam",
            "status": "implementation",
            "start": "2025-09-01",
            "startType": "date",
            "end": "2026-05-15",
            "endType": "date",
            "color": "#BA4A71",
            "comment": "Soloutställning med nyproducerade ljud- och videoinstallationer. Samarbete med Bildmuseet."
        },
        {
            "id": "sample-2",
            "name": "Grupputställning: Threshold",
            "lead": "Kuratorsteam",
            "status": "procurement",
            "start": "2026-01-15",
            "startType": "date",
            "end": "2026-10-30",
            "endType": "date",
            "color": "#BA4A71",
            "comment": "Internationell grupputställning om gränser och passager. 8 konstnärer från 5 länder."
        },
        {
            "id": "sample-3",
            "name": "Sommarprogrammet 2026",
            "lead": "Pedagogik",
            "status": "early",
            "start": "2025-11-01",
            "startType": "date",
            "end": "2026-08-31",
            "endType": "date",
            "color": "#31567D",
            "comment": "Workshops, familjeaktiviteter och konstläger under juni-augusti."
        },
        {
            "id": "sample-4",
            "name": "Webbplats redesign",
            "lead": "Kommunikation",
            "status": "implementation",
            "start": "2025-06-01",
            "startType": "date",
            "end": "2026-02-28",
            "endType": "date",
            "color": "#E8BC1C",
            "comment": "Ny grafisk profil och tillgänglighetsanpassning enligt WCAG 2.1."
        },
        {
            "id": "sample-5",
            "name": "Ljusomställning sal 2-3",
            "lead": "Teknik",
            "status": "procurement",
            "start": "2026-03-01",
            "startType": "date",
            "end": "2026-06-15",
            "endType": "date",
            "color": "#37B94B",
            "comment": "Uppgradering till LED och nya DMX-styrsystem för utställningssalarna."
        },
        {
            "id": "sample-6",
            "name": "Artist Residency: höst 2026",
            "lead": "Kuratorsteam",
            "status": "early",
            "start": "2026-02-01",
            "startType": "date",
            "end": "2026-12-15",
            "endType": "date",
            "color": "#BA4A71",
            "comment": "Gästkonstnärsprogram, 3 månader. Open call våren 2026."
        }
    ],
    "events": [
        {
            "id": "sample-ev-1",
            "name": "Vernissage: Echoes",
            "start": "2026-02-07",
            "startType": "date",
            "end": null,
            "endType": null,
            "projectId": "sample-1",
            "symbol": "star",
            "comment": "Öppning för allmänheten kl 17-21. Konstnärssamtal kl 18."
        },
        {
            "id": "sample-ev-2",
            "name": "Pressvisning",
            "start": "2026-02-05",
            "startType": "date",
            "end": null,
            "endType": null,
            "projectId": "sample-1",
            "symbol": "flag",
            "comment": "Endast inbjudna medier. Pressmaterial skickas ut 3/2."
        },
        {
            "id": "sample-ev-3",
            "name": "Katalogdeadline",
            "start": "2025-12-01",
            "startType": "date",
            "end": null,
            "endType": null,
            "projectId": "sample-1",
            "symbol": "warning",
            "comment": "Texter och bildmaterial till tryck."
        },
        {
            "id": "sample-ev-4",
            "name": "Open call stänger",
            "start": "2026-04-30",
            "startType": "date",
            "end": null,
            "endType": null,
            "projectId": "sample-6",
            "symbol": "diamond",
            "comment": "Sista ansökningsdag för Artist Residency."
        },
        {
            "id": "sample-ev-5",
            "name": "Teknisk slutbesiktning",
            "start": "2026-06-10",
            "startType": "date",
            "end": null,
            "endType": null,
            "projectId": "sample-5",
            "symbol": "check",
            "comment": "Genomgång med entreprenör och godkännande."
        },
        {
            "id": "sample-ev-6",
            "name": "Sommarstängt",
            "start": "2026-07-06",
            "startType": "date",
            "end": "2026-08-02",
            "endType": "date",
            "projectId": null,
            "symbol": null,
            "comment": "Konsthallen stängd v.28-31."
        },
        {
            "id": "sample-ev-7",
            "name": "Styrelsemöte",
            "start": "2026-05-20",
            "startType": "date",
            "end": null,
            "endType": null,
            "projectId": null,
            "symbol": "flag",
            "comment": "Halvårsrapport och budgetuppföljning."
        }
    ]
};

const DEFAULT_LABELS = {
    project: 'Projekt',
    projectsPlural: 'Projekt',
    event: 'Händelse',
    eventsPlural: 'Händelser',
    area: 'Område',
    areasPlural: 'Områden',
    projectLead: 'Projektledare',
    status: 'Status',
    addProject: 'Projekt',
    addEvent: 'Händelse',
    today: 'Idag',
    searchLabel: 'Sök',
    searchPlaceholder: 'Sök projekt...',
    areaPlaceholder: 'Nytt område...',
    all: 'Alla',
    none: 'Ingen koppling',
    statusesPlural: 'Statusar',
    statusPlaceholder: 'Ny status...',
    sort: 'Sortera',
    name: 'Namn',
    newProject: 'Nytt projekt',
    dateTypeDate: 'Datum',
    dateTypeWeek: 'Vecka',
    dateTypeMonth: 'Månad',
    projectName: 'Projektnamn',
    projectNamePlaceholder: 'Ange projektets namn...',
    projectLeadPlaceholder: 'Namn på ansvarig...',
    optional: 'Valfritt',
    manageAreas: 'Hantera områden',
    newEvent: 'Ny händelse',
    eventName: 'Händelsenamn',
    freeText: '',
    projectDetails: 'Projektdetaljer',
    eventDetails: 'Händelsedetaljer',
    edit: 'Redigera',
    save: 'Spara',
    cancel: 'Avbryt',
    delete: 'Ta bort',
    convertToEvent: 'Gör till händelse',
    convertToProject: 'Gör till projekt',
    confirm: 'Bekräfta',
    ok: 'OK',
    resetSampleConfirm: 'Vill du ersätta all data med exempeldata? Nuvarande data går förlorad.',
    resetEmptyConfirm: 'Är du säker på att du vill rensa allt och skapa en ny timeline?',
    toastSampleLoaded: 'Exempeldata inläst',
    toastNewTimeline: 'Ny timeline skapad',
    toastSettingsSaved: 'Inställningarna visas nu. Kom ihåg att spara projektet permanent.',
    toastZoomUpdated: 'Zoomnivån uppdaterad. Kom ihåg att spara projektet.',
    weekPrefix: 'v',
    monthShortNames: ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
    monthLongNames: ['januari', 'februari', 'mars', 'april', 'maj', 'juni', 'juli', 'augusti', 'september', 'oktober', 'november', 'december'],
    weekWord: 'Vecka',
    emptyState: 'Inga projekt eller händelser',
    getStarted: 'för att komma igång',
    settingsTitle: 'Filter & inställningar',
    toggleTheme: 'Växla tema',
    advanced: 'Avancerat',
    fieldNameLabel: 'Namn på fält',
    zoomLevelsLabel: 'Zoomnivåer',
    timelineTitle: 'Timeline',
    startYear: 'Startår',
    endYear: 'Slutår',
    open: 'Öppna',
    openFile: 'Öppna fil...',
    importUrl: 'Importera från URL...',
    importUrlPrompt: 'Ange URL till iCal-kalender (.ics):',
    importUrlError: 'Kunde inte hämta kalendern. Kontrollera URL:en.',
    export: 'Spara',
    reset: 'Återställ',
    exampleData: 'Exempeldata',
    createNew: 'Skapa ny',
    symbolLabel: 'Symbol',
    symbolStandard: 'Standard (Balk/Punkt)',
    symbolStar: 'Stjärna',
    symbolDiamond: 'Diamant',
    symbolFlag: 'Flagga',
    symbolWarning: 'Varning',
    symbolCheck: 'Klar',
    comment: 'Kommentar',
    commentPlaceholder: 'Valfri kommentar...',
    // Zoom levels
    zoom2YearsLabel: '2 år',
    zoom2YearsTitle: 'Två år från idag',
    zoom2YearsDays: '730',
    zoom1YearLabel: '1 år',
    zoom1YearTitle: 'Ett år framåt',
    zoom1YearDays: '365',
    zoom3MonthsLabel: '3 mån',
    zoom3MonthsTitle: 'Kommande tre månader',
    zoom3MonthsDays: '90',
    helpTitle: 'Hur det fungerar',
    privacyTitle: 'Integritet & Lagring',
    privacyText: 'All data lagras lokalt i din webbläsare. Ingenting skickas till molnet eller lagras på någon server.',
    backupTitle: 'Säkerhetskopiering',
    backupText: 'Eftersom allt lagras lokalt rekommenderar vi att du regelbundet använder "Spara" funktionen för att exportera en JSON-fil som säkerhetskopia.',
    importTitle: 'Import',
    importText: 'Du kan importera både JSON-filer och iCal-kalenderfiler (.ics). Kalenderfiler är praktiska för att lägga till t.ex. svenska helgdagar.',
    offlineTitle: 'Offline',
    offlineText: 'Tack vare att appen är en PWA fungerar den utmärkt offline när den väl är installerad.',
    infoGotIt: 'Uppfattat'
};

const DEFAULT_LABELS_EN = {
    project: 'Project',
    projectsPlural: 'Projects',
    event: 'Event',
    eventsPlural: 'Events',
    area: 'Workstream',
    areasPlural: 'Workstreams',
    projectLead: 'Lead',
    status: 'Status',
    today: 'Today',
    addProject: 'Project',
    addEvent: 'Event',
    searchLabel: 'Search',
    searchPlaceholder: 'Search projects...',
    areaPlaceholder: 'New workstream...',
    all: 'All',
    none: 'No connection',
    statusesPlural: 'Statuses',
    statusPlaceholder: 'New status...',
    sort: 'Sort',
    save: 'Save',
    name: 'Name',
    newProject: 'New Project',
    dateTypeDate: 'Date',
    dateTypeWeek: 'Week',
    dateTypeMonth: 'Month',
    projectName: 'Project Name',
    projectNamePlaceholder: 'Enter project name...',
    projectLeadPlaceholder: 'Name of responsible...',
    optional: 'Optional',
    manageAreas: 'Manage workstreams',
    newEvent: 'New Event',
    eventName: 'Event Name',
    freeText: '',
    projectDetails: 'Project Details',
    eventDetails: 'Event Details',
    edit: 'Edit',
    save: 'Save',
    cancel: 'Cancel',
    delete: 'Delete',
    convertToEvent: 'Convert to event',
    convertToProject: 'Convert to project',
    confirm: 'Confirm',
    ok: 'OK',
    resetSampleConfirm: 'Do you want to replace all data with sample data? Current data will be lost.',
    resetEmptyConfirm: 'Are you sure you want to clear everything and start a new timeline?',
    toastSampleLoaded: 'Sample data loaded',
    toastNewTimeline: 'New timeline created',
    toastSettingsSaved: 'Changes now visible. Remember to export to save permanently.',
    toastZoomUpdated: 'Zoom level updated. Remember to export to save.',
    weekPrefix: 'w',
    monthShortNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    monthLongNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    weekWord: 'Week',
    emptyState: 'No projects or events',
    getStarted: 'to get started',
    settingsTitle: 'Filters & Settings',
    toggleTheme: 'Toggle Theme',
    advanced: 'Advanced',
    fieldNameLabel: 'Field Names',
    zoomLevelsLabel: 'Zoom Levels',
    timelineTitle: 'Timeline',
    startYear: 'Start Year',
    endYear: 'End Year',
    open: 'Open',
    openFile: 'Open file...',
    importUrl: 'Import from URL...',
    importUrlPrompt: 'Enter URL to iCal calendar (.ics):',
    importUrlError: 'Could not fetch calendar. Please check the URL.',
    export: 'Save',
    reset: 'Reset',
    exampleData: 'Sample Data',
    createNew: 'Create New',
    symbolLabel: 'Symbol',
    symbolStandard: 'Standard (Bar/Point)',
    symbolStar: 'Star',
    symbolDiamond: 'Diamond',
    symbolFlag: 'Flag',
    symbolWarning: 'Warning',
    symbolCheck: 'Done',
    comment: 'Comment',
    commentPlaceholder: 'Optional comment...',
    // Zoom levels
    zoom2YearsLabel: '2 years',
    zoom2YearsTitle: 'Two years from today',
    zoom2YearsDays: '730',
    zoom1YearLabel: '1 year',
    zoom1YearTitle: 'One year forward',
    zoom1YearDays: '365',
    zoom3MonthsLabel: '3 mo',
    zoom3MonthsTitle: 'Next three months',
    zoom3MonthsDays: '90',
    helpTitle: 'How it works',
    privacyTitle: 'Privacy & Storage',
    privacyText: 'All data is stored locally in your browser. Nothing is sent to the cloud or stored on any server.',
    backupTitle: 'Backups',
    backupText: 'Since everything is stored locally, we recommend regularly using the "Save" function to export a JSON file as backup.',
    importTitle: 'Import',
    importText: 'You can import both JSON files and iCal calendar files (.ics). Calendar files are useful for adding e.g. public holidays.',
    offlineTitle: 'Offline',
    offlineText: 'Since the app is a PWA, it works great offline once installed.',
    infoGotIt: 'Got it'
};

class TimelineApp {
    constructor() {
        // Configuration
        this.language = localStorage.getItem('timeline_language') || 'sv';
        const savedLabels = this.loadData('timeline_labels');
        const defaultLabels = this.language === 'en' ? { ...DEFAULT_LABELS_EN } : { ...DEFAULT_LABELS };
        if (savedLabels) {
            this.labels = { ...defaultLabels, ...savedLabels };
        } else {
            this.labels = defaultLabels;
        }
        const savedRange = this.loadData('timeline_range');
        this.timelineStartYear = savedRange ? savedRange.startYear : null;
        this.timelineEndYear = savedRange ? savedRange.endYear : null;
        this.startDate = this.getStartDate();
        this.endDate = this.getEndDate();
        this.zoomLevel = 1;
        this.minZoom = 0.15; // Allow zoom out to quarter level
        this.maxZoom = 10; // Allow zoom to day level
        this.dayWidth = 4; // Base width per day in pixels

        // Data
        this.areas = this.loadData('timeline_areas') || JSON.parse(JSON.stringify(DEFAULT_AREAS));
        this.statuses = this.loadData('timeline_statuses') || JSON.parse(JSON.stringify(
            this.language === 'en' ? DEFAULT_STATUSES_EN : DEFAULT_STATUSES
        ));
        this.projects = this.loadData('timeline_projects') || [];
        this.events = this.loadData('timeline_events') || [];
        this._firstVisit = !this.loadData('timeline_projects') && !this.loadData('timeline_events');
        this.autoSaveTimer = null;
        this.undoStack = [];
        this.maxUndoSteps = 30;
        this.sortBy = 'lead'; // Default sort
        this.filterLead = ''; // Filter by project lead
        this.filterStatus = '';
        this.filterAreaValue = '';
        this.searchQuery = '';
        this.activeSidebarProject = null;

        // DOM Elements
        this.timelineContainer = document.getElementById('timelineContainer');
        this.timelineHeader = document.getElementById('timelineHeader');
        this.timelineBody = document.getElementById('timelineBody');
        this.timelineGrid = document.getElementById('timelineGrid');
        this.timelineContent = document.getElementById('timelineContent');
        this.todayMarker = document.getElementById('todayMarker');

        // Layout state
        this.isCompact = true;
        this.collapsedGroups = new Set();
        this.groupingEnabled = true;
        this.isResizing = false;
        this.resizeSide = null;
        this.resizeProject = null;
        this.resizeBar = null;
        this.resizeStartX = 0;
        this.resizeOrigLeft = 0;
        this.resizeOrigWidth = 0;

        this.init();
    }

    applyLabels() {
        // Apply text labels
        document.querySelectorAll('[data-label]').forEach(el => {
            const key = el.getAttribute('data-label');
            if (this.labels[key]) {
                el.textContent = this.labels[key];
            }
        });

        // Apply title/tooltip attributes
        document.querySelectorAll('[data-title]').forEach(el => {
            const key = el.getAttribute('data-title');
            if (this.labels[key]) {
                el.title = this.labels[key];
            }
        });

        // Apply placeholders
        document.querySelectorAll('[data-placeholder]').forEach(el => {
            const key = el.getAttribute('data-placeholder');
            if (this.labels[key] !== undefined) {
                el.placeholder = this.labels[key];
            }
        });

        // Update settings inputs
        Object.keys(this.labels).forEach(key => {
            const input = document.getElementById(`label-${key}`);
            if (input) {
                input.value = this.labels[key];
            }
        });

        // UI Language button state
        const enBtn = document.getElementById('langEn');
        const svBtn = document.getElementById('langSv');
        if (enBtn && svBtn) {
            enBtn.classList.toggle('active', this.language === 'en');
            svBtn.classList.toggle('active', this.language === 'sv');
        }

        // Some labels are used in tooltips/placeholders that need manual updates
        const searchInput = document.getElementById('searchInput');
        if (searchInput && this.labels.searchPlaceholder) {
            searchInput.placeholder = this.labels.searchPlaceholder;
        }

        document.title = (this.labels.timelineTitle || 'Timeline');
    }

    setLanguage(lang) {
        if (lang === this.language) return;

        this.language = lang;
        localStorage.setItem('timeline_language', lang);

        // Reset labels to defaults for the new language
        this.labels = lang === 'en' ? { ...DEFAULT_LABELS_EN } : { ...DEFAULT_LABELS };
        this.saveData('timeline_labels', this.labels);

        this.applyLabels();
        this.populateAreaSelects();
        this.populateStatusSelects();
        this.populateDateSelectors();
        this.renderHeader(); // Ensure header (months/weeks) refresh
        this.render();
        this.renderAreaList();
        this.renderStatusList();
        this.showToast(this.labels.toastSettingsSaved || 'Language changed', 'success');
    }

    getStartDate() {
        const date = new Date();
        if (this.timelineStartYear) {
            date.setFullYear(this.timelineStartYear);
        } else {
            date.setFullYear(date.getFullYear() - 3);
        }
        date.setMonth(0);
        date.setDate(1);
        return date;
    }

    getEndDate() {
        const date = new Date();
        if (this.timelineEndYear) {
            date.setFullYear(this.timelineEndYear);
        } else {
            date.setFullYear(date.getFullYear() + 4);
        }
        date.setMonth(11);
        date.setDate(31);
        return date;
    }

    async init() {
        this.timelineContainer.classList.add('compact-mode');
        this.initTimelineRange();
        this.populateDateSelectors();
        this.populateAreaSelects();
        this.populateStatusSelects();
        this.bindEvents();
        this.applyLabels();
        this.initTheme();

        if (this._firstVisit) {
            await this.loadSampleData();
        } else {
            this.setView('3months');
        }
    }

    async resetToDefaults(loadSample = false) {
        this.pushUndoState();

        // Clear all state
        this.projects = [];
        this.events = [];
        this.areas = JSON.parse(JSON.stringify(DEFAULT_AREAS));
        this.statuses = JSON.parse(JSON.stringify(DEFAULT_STATUSES));
        this.labels = JSON.parse(JSON.stringify(DEFAULT_LABELS));
        this.timelineStartYear = null;
        this.timelineEndYear = null;
        this.searchQuery = '';
        this.filterLead = '';
        this.filterStatus = '';
        this.filterAreaValue = '';

        // Clear storage
        this.saveData('timeline_projects', []);
        this.saveData('timeline_events', []);
        this.saveData('timeline_areas', this.areas);
        this.saveData('timeline_statuses', this.statuses);
        this.saveData('timeline_labels', this.labels);
        localStorage.removeItem('timeline_range');

        // Clear filter UI
        const searchInput = document.getElementById('searchInput');
        if (searchInput) searchInput.value = '';
        const filterLead = document.getElementById('filterLead');
        if (filterLead) filterLead.value = '';
        const filterStatus = document.getElementById('filterStatus');
        if (filterStatus) filterStatus.value = '';
        const filterArea = document.getElementById('filterArea');
        if (filterArea) filterArea.value = '';

        if (loadSample) {
            const data = JSON.parse(JSON.stringify(SAMPLE_DATA));
            this.projects = data.projects || [];
            this.events = data.events || [];
            if (data.areas) this.areas = data.areas;
            if (data.statuses) this.statuses = data.statuses;
            if (data.timelineRange) {
                this.timelineStartYear = data.timelineRange.startYear;
                this.timelineEndYear = data.timelineRange.endYear;
                this.saveData('timeline_range', data.timelineRange);
            }
            this.saveData('timeline_projects', this.projects);
            this.saveData('timeline_events', this.events);
            this.saveData('timeline_areas', this.areas);
            this.saveData('timeline_statuses', this.statuses);
        }

        // Update UI state
        this.startDate = this.getStartDate();
        this.endDate = this.getEndDate();
        this.initTimelineRange();
        this.populateAreaSelects();
        this.renderAreaList();
        this.populateStatusSelects();
        this.renderStatusList();
        this.populateDateSelectors();
        this.updateFilterIndicator();
        this.applyLabels();

        // Render with correct zoom immediately
        this.setView('3months');

        return true;
    }

    loadSampleData() {
        return this.resetToDefaults(true);
    }

    async resetToSampleData() {
        if (!await this.showConfirm(this.labels.resetSampleConfirm, { danger: true })) return;

        await this.loadSampleData();
        this.showToast(this.labels.toastSampleLoaded, 'success');
    }

    async resetToEmpty() {
        if (!await this.showConfirm(this.labels.resetEmptyConfirm, {
            danger: true,
            confirmText: this.labels.delete || 'Ta bort',
            cancelText: this.labels.cancel || 'Avbryt'
        })) return;

        await this.resetToDefaults(false);
        this.showToast(this.labels.toastNewTimeline, 'info');
    }

    initTimelineRange() {
        const startInput = document.getElementById('timelineStartYear');
        const endInput = document.getElementById('timelineEndYear');
        startInput.value = this.startDate.getFullYear();
        endInput.value = this.endDate.getFullYear();
    }

    updateTimelineRange() {
        const startInput = document.getElementById('timelineStartYear');
        const endInput = document.getElementById('timelineEndYear');
        const startYear = parseInt(startInput.value);
        const endYear = parseInt(endInput.value);

        if (isNaN(startYear) || isNaN(endYear) || startYear >= endYear) {
            return;
        }

        this.timelineStartYear = startYear;
        this.timelineEndYear = endYear;
        this.startDate = this.getStartDate();
        this.endDate = this.getEndDate();

        this.saveData('timeline_range', { startYear, endYear });

        this.populateDateSelectors();
        this.render();
    }


    // Generate week and month options for selectors
    getAreaMap() {
        const map = {};
        this.areas.forEach(a => { map[a.color] = a.name; });
        return map;
    }

    getAreaName(color) {
        const area = this.areas.find(a => a.color === color);
        return area ? area.name : color;
    }

    populateAreaSelects() {
        // Filter select
        const filterArea = document.getElementById('filterArea');
        if (filterArea) {
            const currentVal = filterArea.value;
            filterArea.innerHTML = `<option value="">${this.labels.all}</option>`;
            this.areas.forEach(a => {
                const opt = document.createElement('option');
                opt.value = a.color;
                opt.textContent = a.name;
                filterArea.appendChild(opt);
            });
            filterArea.value = currentVal;
        }

        // Project color select + Edit color select
        ['projectColor', 'editColor'].forEach(id => {
            const select = document.getElementById(id);
            if (!select) return;
            const currentVal = select.value;
            select.innerHTML = '';
            this.areas.forEach(a => {
                const opt = document.createElement('option');
                opt.value = a.color;
                opt.textContent = a.name;
                select.appendChild(opt);
            });
            if (currentVal) select.value = currentVal;

            // Rebuild custom color dropdown if it exists
            const dropdown = document.querySelector(`.color-dropdown[data-select-id="${id}"]`);
            if (dropdown) {
                const menu = dropdown.querySelector('.color-dropdown-menu');
                if (menu) {
                    menu.innerHTML = '';
                    this.areas.forEach(a => {
                        const item = document.createElement('div');
                        item.className = 'color-dropdown-item';
                        item.dataset.value = a.color;
                        item.innerHTML = `
                            <span class="color-swatch" style="background-color: ${a.color}"></span>
                            <span class="color-label">${a.name}</span>
                        `;
                        item.addEventListener('click', () => {
                            select.value = a.color;
                            this.updateColorDropdown(dropdown, select);
                            dropdown.classList.remove('open');
                        });
                        menu.appendChild(item);
                    });
                }
                this.updateColorDropdown(dropdown, select);
            }
        });
    }

    populateStatusSelects() {
        const filterStatus = document.getElementById('filterStatus');
        if (filterStatus) {
            const currentVal = filterStatus.value;
            filterStatus.innerHTML = `<option value="">${this.labels.all}</option>`;
            this.statuses.forEach(s => {
                const opt = document.createElement('option');
                opt.value = s.id;
                opt.textContent = s.name;
                filterStatus.appendChild(opt);
            });
            filterStatus.value = currentVal;
        }

        ['projectStatus', 'editStatus'].forEach(id => {
            const select = document.getElementById(id);
            if (!select) return;
            const currentVal = select.value;
            select.innerHTML = '';
            this.statuses.forEach(s => {
                const opt = document.createElement('option');
                opt.value = s.id;
                opt.textContent = s.name;
                select.appendChild(opt);
            });
            if (currentVal) select.value = currentVal;
        });
    }

    populateDateSelectors() {
        const weekNumSelects = document.querySelectorAll('.week-num-input');
        const weekYearSelects = document.querySelectorAll('.week-year-input');
        const monthNumSelects = document.querySelectorAll('.month-num-input');
        const monthYearSelects = document.querySelectorAll('.month-year-input');

        const startYear = this.startDate.getFullYear();
        const endYear = this.endDate.getFullYear();
        const currentYear = new Date().getFullYear();

        // Populate week number selects (1-53)
        weekNumSelects.forEach(select => {
            select.innerHTML = '';
            for (let w = 1; w <= 53; w++) {
                const option = document.createElement('option');
                option.value = w;
                option.textContent = `${this.labels.weekPrefix}${w}`;
                select.appendChild(option);
            }
        });

        // Populate year selects (shared logic for week and month)
        const yearSelects = [...weekYearSelects, ...monthYearSelects];
        yearSelects.forEach(select => {
            select.innerHTML = '';
            for (let y = startYear; y <= endYear; y++) {
                const option = document.createElement('option');
                option.value = y;
                option.textContent = y;
                if (y === currentYear) option.selected = true;
                select.appendChild(option);
            }
        });

        // Populate month name selects (jan-dec)
        const monthNames = this.labels.monthShortNames || ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];
        monthNumSelects.forEach(select => {
            select.innerHTML = '';
            monthNames.forEach((name, i) => {
                const option = document.createElement('option');
                option.value = i + 1;
                option.textContent = name;
                select.appendChild(option);
            });
        });
    }

    getWeekNumber(date) {
        const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
        const dayNum = d.getUTCDay() || 7;
        d.setUTCDate(d.getUTCDate() + 4 - dayNum);
        const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
        return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
    }

    // Helper to format date as YYYY-MM-DD in local time
    formatDateISO(date) {
        const y = date.getFullYear();
        const m = String(date.getMonth() + 1).padStart(2, '0');
        const d = String(date.getDate()).padStart(2, '0');
        return `${y}-${m}-${d}`;
    }

    // Get the Monday of ISO week number in a given year
    getMondayOfWeek(weekNum, year) {
        const jan4 = new Date(year, 0, 4);
        const dayOfWeek = jan4.getDay() || 7;
        const monday = new Date(jan4);
        monday.setDate(jan4.getDate() - dayOfWeek + 1 + (weekNum - 1) * 7);

        return this.formatDateISO(monday);
    }

    bindEvents() {
        // Close project comment popups when clicking outside a project bar
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.project-bar')) {
                document.querySelectorAll('.project-tooltip.visible').forEach(t => t.classList.remove('visible'));
            }
        });

        const safeBind = (id, event, callback) => {
            const el = document.getElementById(id);
            if (el) el.addEventListener(event, callback);
        };

        safeBind('view2Years', 'click', () => this.setView('2years'));
        safeBind('view1Year', 'click', () => this.setView('1year'));
        safeBind('view3Months', 'click', () => this.setView('3months'));
        safeBind('todayBtn', 'click', () => this.scrollToToday());

        safeBind('searchInput', 'input', (e) => {
            this.searchQuery = e.target.value.toLowerCase();
            this.render();
            this.updateFilterIndicator();
        });

        safeBind('filterLead', 'change', (e) => this.setFilterLead(e.target.value));

        safeBind('filterStatus', 'change', (e) => {
            this.filterStatus = e.target.value;
            this.render();
            this.updateFilterIndicator();
        });

        safeBind('filterArea', 'change', (e) => {
            this.filterAreaValue = e.target.value;
            this.render();
            this.updateFilterIndicator();
        });
        safeBind('sortSelect', 'change', (e) => this.setSortBy(e.target.value));
        safeBind('exportBtn', 'click', () => this.exportData());
        safeBind('importBtn', 'click', () => document.getElementById('importFile').click());
        safeBind('importDropdownBtn', 'click', (e) => {
            e.stopPropagation();
            document.getElementById('importDropdownMenu').classList.toggle('open');
        });
        safeBind('importFileBtn', 'click', () => {
            document.getElementById('importDropdownMenu').classList.remove('open');
            document.getElementById('importFile').click();
        });
        safeBind('importUrlBtn', 'click', () => {
            document.getElementById('importDropdownMenu').classList.remove('open');
            this.importFromUrl();
        });
        safeBind('importFile', 'change', (e) => this.importData(e));

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            const dropdown = document.getElementById('importDropdownMenu');
            if (dropdown && !e.target.closest('.btn-dropdown')) {
                dropdown.classList.remove('open');
            }
        });

        safeBind('resetSampleBtn', 'click', async () => {
            const confirmed = await this.showConfirm(this.labels.resetSampleConfirm);
            if (confirmed) this.resetToDefaults(true);
        });
        safeBind('resetEmptyBtn', 'click', async () => {
            const confirmed = await this.showConfirm(this.labels.resetEmptyConfirm);
            if (confirmed) this.resetToDefaults(false);
        });

        // Theme Toggle
        safeBind('themeToggle', 'click', (e) => this.toggleTheme(e));

        // Language Selectors
        safeBind('langSv', 'click', () => this.setLanguage('sv'));
        safeBind('langEn', 'click', () => this.setLanguage('en'));

        // Info Modal
        safeBind('infoBtn', 'click', () => document.getElementById('infoModal').classList.add('active'));
        safeBind('closeInfoModal', 'click', () => this.closeModal('infoModal'));
        safeBind('confirmInfo', 'click', () => this.closeModal('infoModal'));

        // Label settings (Döp om fält)
        document.querySelectorAll('.btn-edit-label').forEach(btn => {
            btn.addEventListener('click', async (e) => {
                const row = btn.closest('.label-setting-row');
                const key = row.dataset.labelKey;
                const currentLabel = this.labels[key];

                const newLabel = await this.showPrompt(`Döp om "${currentLabel}" till:`, currentLabel);

                if (newLabel && newLabel.trim() !== '') {
                    const trimmedLabel = newLabel.trim();
                    this.labels[key] = trimmedLabel;

                    // Automatically update related labels for better UX
                    if (key === 'project') {
                        this.labels['projectsPlural'] = trimmedLabel + 'er';
                        this.labels['addProject'] = trimmedLabel;
                        this.labels['newProject'] = 'Nytt ' + trimmedLabel.toLowerCase();
                        this.labels['projectName'] = trimmedLabel + 'namn';
                        this.labels['projectDetails'] = trimmedLabel + 'detaljer';
                    } else if (key === 'event') {
                        const plural = trimmedLabel.endsWith('e') ? trimmedLabel + 'r' : trimmedLabel + 'er';
                        this.labels['eventsPlural'] = plural;
                        this.labels['addEvent'] = trimmedLabel;
                        this.labels['newEvent'] = 'Ny ' + trimmedLabel.toLowerCase();
                        this.labels['eventName'] = trimmedLabel + 'namn';
                        this.labels['eventDetails'] = trimmedLabel + 'detaljer';
                    } else if (key === 'area') {
                        const plural = trimmedLabel.endsWith('e') ? trimmedLabel + 'n' : trimmedLabel + 'er';
                        this.labels['areasPlural'] = plural;
                        this.labels['manageAreas'] = 'Hantera ' + plural.toLowerCase();
                    }

                    this.saveData('timeline_labels', this.labels);
                    this.applyLabels();
                    this.render();

                    this.showToast('Ändringarna visas nu. Kom ihåg att spara projektet permanent.', 'info');
                }
            });
        });

        // Zoom settings
        document.querySelectorAll('.btn-edit-zoom').forEach(btn => {
            btn.addEventListener('click', async (e) => {
                const row = btn.closest('.label-setting-row');
                const key = row.dataset.zoomKey; // e.g., 'zoom2Years'
                const currentLabel = this.labels[key + 'Label'];
                const currentDays = parseInt(this.labels[key + 'Days']);

                const result = await this.showPrompt(`Anpassa "${currentLabel}"`, currentLabel, {
                    isZoom: true,
                    days: currentDays
                });

                if (result) {
                    if (result.label.trim() !== '') {
                        this.labels[key + 'Label'] = result.label.trim();
                    }

                    if (result.days > 0) {
                        this.labels[key + 'Days'] = result.days.toString();
                    }

                    this.saveData('timeline_labels', this.labels);
                    this.applyLabels();
                    this.render();

                    this.showToast('Zoomnivån uppdaterad. Kom ihåg att spara projektet.', 'info');
                }
            });
        });


        // Timeline range controls
        safeBind('timelineStartYear', 'change', (e) => this.updateTimelineRange());
        safeBind('timelineEndYear', 'change', (e) => this.updateTimelineRange());

        // Control panel toggle
        safeBind('controlPanelToggle', 'click', () => this.toggleControlPanel());
        safeBind('controlPanelClose', 'click', () => this.closeControlPanel());
        const backdrop = document.getElementById('controlPanelBackdrop');
        if (backdrop) backdrop.addEventListener('click', () => this.closeControlPanel());

        // Advanced section toggle
        const advancedToggle = document.getElementById('advancedToggle');
        const advancedPanel = document.getElementById('advancedPanel');
        const advancedContent = document.getElementById('advancedContent');
        if (advancedToggle && advancedPanel && advancedContent) {
            advancedToggle.addEventListener('click', () => {
                advancedPanel.classList.toggle('active');
            });
        }

        // Area management
        safeBind('areaAddBtn', 'click', () => this.addArea());
        const areaNameInput = document.getElementById('areaNewName');
        if (areaNameInput) {
            areaNameInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') { e.preventDefault(); this.addArea(); }
            });
        }
        this.renderAreaList();

        // Status management
        safeBind('statusAddBtn', 'click', () => this.addStatus());
        const statusNameInput = document.getElementById('statusNewName');
        if (statusNameInput) {
            statusNameInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') { e.preventDefault(); this.addStatus(); }
            });
        }
        this.renderStatusList();

        // "Hantera områden" links from modals
        ['openAreasFromProject', 'openAreasFromEdit'].forEach(id => {
            const link = document.getElementById(id);
            if (link) {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    // Close whichever modal is open
                    const activeModal = document.querySelector('.modal.active');
                    if (activeModal) this.closeModal(activeModal.id);
                    // Open control panel
                    this.toggleControlPanel();
                });
            }
        });

        // Mouse wheel zoom
        this.timelineBody.addEventListener('wheel', (e) => {
            if (e.ctrlKey || e.metaKey) {
                e.preventDefault();
                const delta = e.deltaY > 0 ? -0.1 : 0.1;
                this.zoom(delta, e.clientX);
            }
        }, { passive: false });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            // Ignore app-level shortcuts if focus is in an input or textarea
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable) {
                return;
            }

            if ((e.ctrlKey || e.metaKey) && e.key === 'z') {
                e.preventDefault();
                this.undo();
            }
            if (e.key === 'Escape') {
                const activeModal = document.querySelector('.modal.active');
                if (activeModal) {
                    this.closeModal(activeModal.id);
                    return;
                }
                const activeSidebar = document.querySelector('.sidebar.active');
                if (activeSidebar) {
                    if (activeSidebar.id === 'projectSidebar') this.closeProjectSidebar();
                    else if (activeSidebar.id === 'eventSidebar') this.closeEventSidebar();
                    return;
                }
                const controlPanel = document.getElementById('controlPanel');
                if (controlPanel && controlPanel.classList.contains('active')) {
                    this.closeControlPanel();
                }
            }
        });

        // Warn before closing window with unsaved changes
        this.hasUnsavedChanges = false;
        window.addEventListener('beforeunload', (e) => {
            if (this.hasUnsavedChanges) {
                e.preventDefault();
                e.returnValue = '';
            }
        });

        // Drag to scroll - works everywhere including on projects and events
        this.isDragging = false;
        this.dragStartX = 0;
        this.scrollStartX = 0;
        this.hasDragged = false;

        this.timelineBody.addEventListener('mousedown', (e) => {
            this.isDragging = true;
            this.hasDragged = false;
            this.dragStartX = e.clientX;
            this.dragStartY = e.clientY;
            this.scrollStartX = this.timelineBody.scrollLeft;
            this.dragTarget = e.target;
        });

        document.addEventListener('mousemove', (e) => {
            if (this.isResizing) {
                const dx = e.clientX - this.resizeStartX;
                const newWidth = Math.max(20, this.resizeOrigWidth + (this.resizeSide === 'right' ? dx : -dx));

                if (this.resizeSide === 'left') {
                    const newLeft = this.resizeOrigLeft + dx;
                    // Ensure we don't push the left edge past the right edge (enforced by minWidth)
                    if (newLeft < this.resizeOrigLeft + this.resizeOrigWidth - 20) {
                        this.resizeBar.style.left = newLeft + 'px';
                        this.resizeBar.style.width = newWidth + 'px';
                    }
                } else {
                    this.resizeBar.style.width = newWidth + 'px';
                }

                this.updateStickyLabels();
                return;
            }

            if (!this.isDragging) return;
            const dx = e.clientX - this.dragStartX;
            // Only count as drag if moved more than 5 pixels
            if (Math.abs(dx) > 5) {
                this.hasDragged = true;
                this.timelineBody.style.cursor = 'grabbing';
                this.timelineBody.scrollLeft = this.scrollStartX - dx;
            }
        });

        document.addEventListener('mouseup', (e) => {
            if (this.isResizing) {
                const finalLeft = parseFloat(this.resizeBar.style.left);
                const finalWidth = parseFloat(this.resizeBar.style.width);

                // Update project data
                const startDays = finalLeft / (this.dayWidth * this.zoomLevel);
                const durationDays = finalWidth / (this.dayWidth * this.zoomLevel);

                const startDate = new Date(this.startDate);
                startDate.setDate(startDate.getDate() + Math.round(startDays));

                const endDate = new Date(startDate);
                endDate.setDate(endDate.getDate() + Math.round(durationDays));

                this.resizeProject.start = startDate.toISOString().split('T')[0];
                this.resizeProject.end = endDate.toISOString().split('T')[0];

                this.isResizing = false;
                this.resizeProject = null;
                this.resizeBar = null;
                this.scheduleAutoSave();
                this.render(); // Re-render to snap to grid and update everything
                return;
            }

            if (this.isDragging) {
                const wasDragged = this.hasDragged;
                this.isDragging = false;
                this.timelineBody.style.cursor = 'grab';

                // If no drag occurred, handle click logic
                if (!wasDragged && this.dragTarget) {
                    const bar = this.dragTarget.closest('.project-bar');
                    if (bar && bar.dataset.hasComment === 'true') {
                        const isEvent = this.dragTarget.closest('.project-event-marker') ||
                            this.dragTarget.closest('.project-event-bar') ||
                            this.dragTarget.closest('.event-container-duration-symbol');
                        if (!isEvent) {
                            const projectTooltip = bar.querySelector('.project-tooltip');
                            if (projectTooltip) {
                                // Close other open tooltips
                                document.querySelectorAll('.project-tooltip.visible').forEach(t => {
                                    if (t !== projectTooltip) t.classList.remove('visible');
                                });
                                projectTooltip.classList.toggle('visible');
                            }
                        }
                    } else if (!bar) {
                        // Clicked outside a project bar - close all tooltips
                        document.querySelectorAll('.project-tooltip.visible').forEach(t => t.classList.remove('visible'));
                    }
                }
            }
        });

        // Sidebar controls
        safeBind('closeSidebar', 'click', () => this.closeProjectSidebar());
        safeBind('sidebarEditBtn', 'click', () => {
            if (this.activeSidebarProject) {
                const project = this.activeSidebarProject;
                this.closeProjectSidebar();
                this.openEditModal(project, 'project');
            }
        });

        safeBind('closeEventSidebar', 'click', () => this.closeEventSidebar());
        safeBind('eventSidebarEditBtn', 'click', () => {
            if (this.activeSidebarEvent) {
                const event = this.activeSidebarEvent;
                this.closeEventSidebar();
                this.openEditModal(event, 'event');
            }
        });

        // Project modal
        safeBind('addProjectBtn', 'click', () => this.openProjectModal());
        safeBind('closeProjectModal', 'click', () => this.closeModal('projectModal'));
        safeBind('cancelProject', 'click', () => this.closeModal('projectModal'));
        safeBind('projectForm', 'submit', (e) => this.handleProjectSubmit(e));

        // Event modal
        safeBind('addEventBtn', 'click', () => this.openEventModal());
        safeBind('closeEventModal', 'click', () => this.closeModal('eventModal'));
        safeBind('cancelEvent', 'click', () => this.closeModal('eventModal'));
        safeBind('eventForm', 'submit', (e) => this.handleEventSubmit(e));

        // Edit modal
        safeBind('closeEditModal', 'click', () => this.closeModal('editModal'));
        safeBind('cancelEdit', 'click', () => this.closeModal('editModal'));
        safeBind('editForm', 'submit', (e) => this.handleEditSubmit(e));
        safeBind('deleteItem', 'click', () => this.handleDelete());
        safeBind('convertItem', 'click', () => this.handleConvert());

        // Close modals on backdrop click
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.closeModal(modal.id);
                }
            });
        });

        // Sync scroll between header and body, and update sticky labels
        if (this.timelineBody && this.timelineHeader) {
            this.timelineBody.addEventListener('scroll', () => {
                this.timelineHeader.style.transform = `translateX(-${this.timelineBody.scrollLeft}px)`;
                this.updateStickyLabels();
            });
        }

        // Date type selectors
        this.bindDateTypeSelector('projectStart');
        this.bindDateTypeSelector('projectEnd');
        this.bindDateTypeSelector('eventStart');
        this.bindDateTypeSelector('eventEnd');
        this.bindDateTypeSelector('editStart');
        this.bindDateTypeSelector('editEnd');
        this.bindDateTypeSelector('editEventStart');
        this.bindDateTypeSelector('editEventEnd');

        // Symbol and project dropdowns are rebuilt each time modals open
        // (rebuildSymbolDropdown / rebuildProjectDropdown in openEventModal / openEditModal)

        // Color selectors with color preview
        this.bindColorSelector('projectColor');
        this.bindColorSelector('editColor');
    }

    bindSymbolSelector(id) {
        const select = document.getElementById(id);
        if (!select) return;

        select.addEventListener('change', () => this.updateSymbolSelectIcon(select));
        this.updateSymbolSelectIcon(select); // Initial state
    }

    updateSymbolSelectIcon(select) {
        // Remove all symbol classes
        select.classList.remove('symbol-select', 'symbol-star', 'symbol-diamond', 'symbol-flag', 'symbol-warning', 'symbol-check');

        const value = select.value;
        if (value) {
            select.classList.add('symbol-select', `symbol-${value}`);
        }
    }

    bindColorSelector(id) {
        const select = document.getElementById(id);
        if (!select) return;

        // Get color options from select
        const options = Array.from(select.options).map(opt => ({
            value: opt.value,
            label: opt.textContent
        }));

        // Create custom dropdown
        const dropdown = document.createElement('div');
        dropdown.className = 'color-dropdown';
        dropdown.dataset.selectId = id;

        const trigger = document.createElement('button');
        trigger.type = 'button';
        trigger.className = 'color-dropdown-trigger';

        const menu = document.createElement('div');
        menu.className = 'color-dropdown-menu';

        options.forEach(opt => {
            const item = document.createElement('div');
            item.className = 'color-dropdown-item';
            item.dataset.value = opt.value;
            item.innerHTML = `
                <span class="color-swatch" style="background-color: ${opt.value}"></span>
                <span class="color-label">${opt.label}</span>
            `;
            item.addEventListener('click', () => {
                select.value = opt.value;
                this.updateColorDropdown(dropdown, select);
                dropdown.classList.remove('open');
            });
            menu.appendChild(item);
        });

        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            // Close other dropdowns
            document.querySelectorAll('.color-dropdown.open').forEach(d => {
                if (d !== dropdown) d.classList.remove('open');
            });
            dropdown.classList.toggle('open');
        });

        // Close on outside click
        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('open');
            }
        });

        dropdown.appendChild(trigger);
        dropdown.appendChild(menu);

        // Hide original select and insert custom dropdown
        select.style.display = 'none';
        select.parentNode.insertBefore(dropdown, select.nextSibling);

        // Initial state
        this.updateColorDropdown(dropdown, select);
    }

    updateColorDropdown(dropdown, select) {
        const trigger = dropdown.querySelector('.color-dropdown-trigger');
        const selectedOption = select.options[select.selectedIndex];
        const value = select.value;
        const label = selectedOption ? selectedOption.textContent : '';

        trigger.innerHTML = `
            <span class="color-swatch" style="background-color: ${value}"></span>
            <span class="color-label">${label}</span>
            <svg class="dropdown-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
        `;

        // Update selected state in menu
        dropdown.querySelectorAll('.color-dropdown-item').forEach(item => {
            item.classList.toggle('selected', item.dataset.value === value);
        });
    }

    // Build/rebuild a custom project dropdown with color swatches
    rebuildProjectDropdown(id) {
        const select = document.getElementById(id);
        if (!select) return;

        // Remove existing custom dropdown if any
        const existing = select.parentNode.querySelector(`.color-dropdown[data-select-id="${id}"]`);
        if (existing) existing.remove();

        const options = Array.from(select.options).map(opt => {
            const project = this.projects.find(p => p.id === opt.value);
            return {
                value: opt.value,
                label: opt.textContent,
                color: project ? project.color : null
            };
        });

        const dropdown = document.createElement('div');
        dropdown.className = 'color-dropdown';
        dropdown.dataset.selectId = id;

        const trigger = document.createElement('button');
        trigger.type = 'button';
        trigger.className = 'color-dropdown-trigger';

        const menu = document.createElement('div');
        menu.className = 'color-dropdown-menu';

        options.forEach(opt => {
            const item = document.createElement('div');
            item.className = 'color-dropdown-item';
            item.dataset.value = opt.value;
            if (opt.color) {
                item.innerHTML = `
                    <span class="color-swatch" style="background-color: ${opt.color}"></span>
                    <span class="color-label">${opt.label}</span>
                `;
            } else {
                item.innerHTML = `<span class="color-label">${opt.label}</span>`;
            }
            item.addEventListener('click', () => {
                select.value = opt.value;
                this.updateProjectDropdown(dropdown, select);
                dropdown.classList.remove('open');
            });
            menu.appendChild(item);
        });

        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.color-dropdown.open').forEach(d => {
                if (d !== dropdown) d.classList.remove('open');
            });
            dropdown.classList.toggle('open');
        });

        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('open');
            }
        });

        dropdown.appendChild(trigger);
        dropdown.appendChild(menu);

        select.style.display = 'none';
        select.parentNode.insertBefore(dropdown, select.nextSibling);

        this.updateProjectDropdown(dropdown, select);
    }

    updateProjectDropdown(dropdown, select) {
        const trigger = dropdown.querySelector('.color-dropdown-trigger');
        const selectedOption = select.options[select.selectedIndex];
        const value = select.value;
        const label = selectedOption ? selectedOption.textContent : '';
        const project = this.projects.find(p => p.id === value);

        if (project) {
            trigger.innerHTML = `
                <span class="color-swatch" style="background-color: ${project.color}"></span>
                <span class="color-label">${label}</span>
                <svg class="dropdown-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            `;
        } else {
            trigger.innerHTML = `
                <span class="color-label">${label}</span>
                <svg class="dropdown-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            `;
        }

        dropdown.querySelectorAll('.color-dropdown-item').forEach(item => {
            item.classList.toggle('selected', item.dataset.value === value);
        });
    }

    // Build/rebuild a custom symbol dropdown with SVG icons
    rebuildSymbolDropdown(id) {
        const select = document.getElementById(id);
        if (!select) return;

        // Remove existing custom dropdown if any
        const existing = select.parentNode.querySelector(`.color-dropdown[data-select-id="${id}"]`);
        if (existing) existing.remove();

        const symbolSVGs = {
            star: `<svg class="symbol-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
            diamond: `<svg class="symbol-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2L2 12l10 10 10-10L12 2z"/></svg>`,
            flag: `<svg class="symbol-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"/></svg>`,
            warning: `<svg class="symbol-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>`,
            check: `<svg class="symbol-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>`
        };

        const options = Array.from(select.options).map(opt => ({
            value: opt.value,
            label: opt.textContent,
            svg: symbolSVGs[opt.value] || null
        }));

        const dropdown = document.createElement('div');
        dropdown.className = 'color-dropdown';
        dropdown.dataset.selectId = id;

        const trigger = document.createElement('button');
        trigger.type = 'button';
        trigger.className = 'color-dropdown-trigger';

        const menu = document.createElement('div');
        menu.className = 'color-dropdown-menu';

        options.forEach(opt => {
            const item = document.createElement('div');
            item.className = 'color-dropdown-item';
            item.dataset.value = opt.value;
            if (opt.svg) {
                item.innerHTML = `
                    ${opt.svg}
                    <span class="color-label">${opt.label}</span>
                `;
            } else {
                item.innerHTML = `<span class="color-label">${opt.label}</span>`;
            }
            item.addEventListener('click', () => {
                select.value = opt.value;
                this.updateSymbolDropdown(dropdown, select, symbolSVGs);
                dropdown.classList.remove('open');
            });
            menu.appendChild(item);
        });

        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.color-dropdown.open').forEach(d => {
                if (d !== dropdown) d.classList.remove('open');
            });
            dropdown.classList.toggle('open');
        });

        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('open');
            }
        });

        dropdown.appendChild(trigger);
        dropdown.appendChild(menu);

        select.style.display = 'none';
        select.parentNode.insertBefore(dropdown, select.nextSibling);

        // Store symbolSVGs on the dropdown for later updates
        dropdown._symbolSVGs = symbolSVGs;

        this.updateSymbolDropdown(dropdown, select, symbolSVGs);
    }

    updateSymbolDropdown(dropdown, select, symbolSVGs) {
        const trigger = dropdown.querySelector('.color-dropdown-trigger');
        const value = select.value;
        const selectedOption = select.options[select.selectedIndex];
        const label = selectedOption ? selectedOption.textContent : '';
        const svg = symbolSVGs[value] || '';

        if (svg) {
            trigger.innerHTML = `
                ${svg}
                <span class="color-label">${label}</span>
                <svg class="dropdown-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            `;
        } else {
            trigger.innerHTML = `
                <span class="color-label">${label}</span>
                <svg class="dropdown-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            `;
        }

        dropdown.querySelectorAll('.color-dropdown-item').forEach(item => {
            item.classList.toggle('selected', item.dataset.value === value);
        });
    }

    bindDateTypeSelector(prefix) {
        const typeSelect = document.getElementById(`${prefix}Type`);
        const dateInput = document.getElementById(`${prefix}Date`);
        const weekGroup = document.getElementById(`${prefix}WeekGroup`);
        const monthGroup = document.getElementById(`${prefix}MonthGroup`);

        if (!typeSelect) return;

        typeSelect.addEventListener('change', () => {
            const type = typeSelect.value;
            dateInput.style.display = type === 'date' ? 'block' : 'none';
            if (weekGroup) weekGroup.style.display = type === 'week' ? 'flex' : 'none';
            if (monthGroup) monthGroup.style.display = type === 'month' ? 'flex' : 'none';

            // Set default values to current date if empty or default
            if (type === 'week') {
                const now = new Date();
                const weekNum = document.getElementById(`${prefix}WeekNum`);
                const weekYear = document.getElementById(`${prefix}WeekYear`);
                if (weekNum && (!weekNum.value || weekNum.value === '1')) weekNum.value = this.getWeekNumber(now);
                if (weekYear && (!weekYear.value || weekYear.value === '2025')) weekYear.value = now.getFullYear();
            } else if (type === 'month') {
                const now = new Date();
                const monthNum = document.getElementById(`${prefix}MonthNum`);
                const monthYear = document.getElementById(`${prefix}MonthYear`);
                if (monthNum && (!monthNum.value || monthNum.value === '1')) monthNum.value = now.getMonth() + 1;
                if (monthYear && (!monthYear.value || monthYear.value === '2025')) monthYear.value = now.getFullYear();
            } else if (type === 'date') {
                // For date input, we could also default to today if empty
                if (dateInput && !dateInput.value) {
                    dateInput.value = new Date().toISOString().split('T')[0];
                }
            }
        });
    }

    getDateValue(prefix) {
        const typeSelect = document.getElementById(`${prefix}Type`);
        const type = typeSelect.value;
        const isEnd = prefix.toLowerCase().includes('end');

        // For end dates, check if the date field is empty (user hasn't set an end date)
        if (isEnd) {
            const dateInput = document.getElementById(`${prefix}Date`);
            if (dateInput && !dateInput.value) {
                return ''; // No end date specified
            }
        }

        if (type === 'date') {
            const val = document.getElementById(`${prefix}Date`).value;
            if (isEnd && val) {
                const d = this.parseDate(val);
                d.setDate(d.getDate() + 1);
                return this.formatDateISO(d);
            }
            return val;
        } else if (type === 'week') {
            const weekNum = parseInt(document.getElementById(`${prefix}WeekNum`).value);
            const year = parseInt(document.getElementById(`${prefix}WeekYear`).value);
            return this.getMondayOfWeek(isEnd ? weekNum + 1 : weekNum, year);
        } else {
            const month = parseInt(document.getElementById(`${prefix}MonthNum`).value);
            const year = parseInt(document.getElementById(`${prefix}MonthYear`).value);
            if (isEnd) {
                const d = new Date(year, month, 1); // 1st of next month (month is 1-indexed here, so month 1 -> index 1 is Feb)
                return this.formatDateISO(d);
            }
            return `${year}-${String(month).padStart(2, '0')}-01`;
        }
    }

    setDateValue(prefix, value, type = 'date') {
        const typeSelect = document.getElementById(`${prefix}Type`);
        const dateInput = document.getElementById(`${prefix}Date`);
        const weekGroup = document.getElementById(`${prefix}WeekGroup`);
        const monthGroup = document.getElementById(`${prefix}MonthGroup`);
        const isEnd = prefix.toLowerCase().includes('end');

        // Guard against missing elements
        if (!typeSelect || !dateInput) return;

        typeSelect.value = type;
        dateInput.style.display = type === 'date' ? 'block' : 'none';
        if (weekGroup) weekGroup.style.display = type === 'week' ? 'flex' : 'none';
        if (monthGroup) monthGroup.style.display = type === 'month' ? 'flex' : 'none';

        // Handle empty value - clear the field
        if (!value || value === '') {
            dateInput.value = '';
            return;
        }

        let d = this.parseDate(value);
        if (!d) {
            dateInput.value = '';
            return;
        }

        if (isEnd && d) {
            if (type === 'date') {
                d.setDate(d.getDate() - 1);
            } else if (type === 'week') {
                d.setDate(d.getDate() - 3); // Move into the previous week (Monday - 3 days = Friday)
            } else if (type === 'month') {
                d.setDate(d.getDate() - 1); // Move into the previous month (1st - 1 day = last day of prev month)
            }
        }

        if (type === 'date') {
            dateInput.value = d ? this.formatDateISO(d) : '';
        } else if (type === 'week') {
            const weekNum = this.getWeekNumber(d);
            const year = d.getFullYear();
            document.getElementById(`${prefix}WeekNum`).value = weekNum;
            document.getElementById(`${prefix}WeekYear`).value = year;
        } else {
            document.getElementById(`${prefix}MonthNum`).value = d.getMonth() + 1;
            document.getElementById(`${prefix}MonthYear`).value = d.getFullYear();
        }
    }

    // Data persistence
    loadData(key) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : null;
        } catch (e) {
            console.error('Error loading data:', e);
            return null;
        }
    }

    initTheme() {
        // Check for saved theme (may be stored raw or JSON-stringified)
        let savedTheme = localStorage.getItem('timeline_theme');
        if (savedTheme && savedTheme.startsWith('"')) {
            try { savedTheme = JSON.parse(savedTheme); } catch(e) {}
        }
        const theme = savedTheme || 'dark';
        this.theme = theme;
        this.setTheme(theme, false);
    }

    toggleTheme(e) {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        // Read current state from the attribute which tells the truth about what's rendering (if CSS is working)
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme, true);
    }

    setTheme(theme, save = true) {
        this.theme = theme;
        if (save) localStorage.setItem('timeline_theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
        document.body.setAttribute('data-theme', theme);

        // Update icon
        const btn = document.getElementById('themeToggle');
        if (btn) {
            if (theme === 'light') {
                // Moon icon for "Switch to Dark"
                btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
            } else {
                // Sun icon for "Switch to Light"
                btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
            }
        }
    }

    saveData(key, data) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
        } catch (e) {
            console.error('Error saving data:', e);
        }
    }


    toggleGroup(groupKey) {
        if (this.collapsedGroups.has(groupKey)) {
            this.collapsedGroups.delete(groupKey);
        } else {
            this.collapsedGroups.add(groupKey);
        }
        this.render();
    }

    // Zoom
    zoom(delta, centerX = null) {
        const oldZoom = this.zoomLevel;
        this.zoomLevel = Math.max(this.minZoom, Math.min(this.maxZoom, this.zoomLevel + delta));

        if (oldZoom !== this.zoomLevel) {
            // Maintain scroll position relative to center point
            if (centerX !== null) {
                const rect = this.timelineBody.getBoundingClientRect();
                const scrollRatio = (this.timelineBody.scrollLeft + (centerX - rect.left)) / (this.getTotalWidth() / this.zoomLevel * oldZoom);
                this.render();
                this.timelineBody.scrollLeft = scrollRatio * this.getTotalWidth() - (centerX - rect.left);
            } else {
                const scrollRatio = this.timelineBody.scrollLeft / this.getTotalWidth();
                this.render();
                this.timelineBody.scrollLeft = scrollRatio * this.getTotalWidth();
            }
        }
    }

    renderContentGrouped() {
        this.timelineContent.innerHTML = '';
        const totalWidth = this.getTotalWidth();
        this.timelineContent.style.width = totalWidth + 'px';

        const projects = this.getSortedProjects();

        if (projects.length === 0) {
            // Still render standalone events even without projects
            this.renderStandaloneEvents(this.timelineContent);
            return;
        }

        // Grouping Logic
        const groups = {};
        const groupOrder = []; // To maintain sort order

        projects.forEach(p => {
            let key = '';
            let label = '';

            if (this.sortBy === 'status') {
                key = p.status;
                label = this.getStatusLabel(p.status) || 'Okänd';
            } else {
                // Default to Lead
                key = p.lead || 'Unassigned';
                label = p.lead || `Utan ${this.labels.projectLead.toLowerCase()}`;
            }

            if (!groups[key]) {
                groups[key] = [];
                groupOrder.push({ key, label });
            }
            groups[key].push(p);
        });

        // Render Groups
        groupOrder.forEach(group => {
            const { key, label } = group;
            const groupProjects = groups[key];
            const isCollapsed = this.collapsedGroups.has(key);

            // Group Header
            const header = document.createElement('div');
            header.className = `group-header ${isCollapsed ? 'collapsed' : ''}`;
            header.innerHTML = `
                <span class="group-toggle">▼</span>
                <span class="group-label">${label}</span>
                <span class="group-count">${groupProjects.length} ${this.labels.projectsPlural.toLowerCase()}</span>
            `;
            header.onclick = () => this.toggleGroup(key);
            this.timelineContent.appendChild(header);

            // Group Items (if not collapsed)
            if (!isCollapsed) {
                groupProjects.forEach(project => {
                    this.renderProjectRow(project, this.timelineContent);
                });
            }
        });

        // Render events that are NOT connected to projects at the top or bottom? 
        // For now, let's render standalone events at the top like before in renderContent
        this.renderStandaloneEvents(this.timelineContent);
    }

    // Extracted helper for rendering a single project row to allow reuse
    renderProjectRow(project, container) {
        const startPos = this.dateToPosition(project.start);
        const endPos = this.dateToPosition(project.end);
        const width = Math.max(2, endPos - startPos); // Minimum 2px width

        const row = document.createElement('div');
        row.className = 'project-row';
        const bar = document.createElement('div');
        bar.className = 'project-bar';
        bar.style.left = startPos + 'px';
        bar.style.width = width + 'px';

        // Determine color
        let color = (this.areas[0] && this.areas[0].color) || '#31567D';
        if (project.color) {
            color = project.color;
        }
        bar.style.backgroundColor = color;

        // Content
        const statusText = this.getStatusLabel(project.status) || '';

        if (this.isCompact) {
            bar.innerHTML = `
                <div class="project-info">
                    <div class="project-name">${project.name}</div>
                    <div class="project-lead">${project.lead || ''}</div>
                    <div class="project-status-text">${statusText}</div>
                </div>
            `;
        } else {
            bar.innerHTML = `
                <div class="project-info">
                    <div class="project-name">${project.name}</div>
                    <div class="project-lead">${project.lead || ''}</div>
                </div>
            `;
        }

        // Drag handles for resizing
        const leftHandle = document.createElement('div');
        leftHandle.className = 'resize-handle resize-handle-left';
        bar.appendChild(leftHandle);

        const rightHandle = document.createElement('div');
        rightHandle.className = 'resize-handle resize-handle-right';
        bar.appendChild(rightHandle);

        const initResize = (e, side) => {
            e.stopPropagation();
            e.preventDefault();
            this.isResizing = true;
            this.resizeSide = side;
            this.resizeProject = project;
            this.resizeBar = bar;
            this.resizeStartX = e.clientX;
            this.resizeOrigLeft = parseFloat(bar.style.left);
            this.resizeOrigWidth = parseFloat(bar.style.width);
            this.pushUndoState();
        };

        leftHandle.addEventListener('mousedown', (e) => initResize(e, 'left'));
        rightHandle.addEventListener('mousedown', (e) => initResize(e, 'right'));

        // Comment popup removed in favor of sidebar, or kept as secondary?
        // Let's use single-click for sidebar as requested.
        bar.addEventListener('click', (e) => {
            if (this.hasDragged) return;
            if (e.target.closest('.project-event-marker') || e.target.closest('.project-event-bar') || e.target.closest('.event-container-duration-symbol')) return;
            e.stopPropagation();
            this.openProjectSidebar(project);
        });

        // Double-click to edit
        bar.addEventListener('dblclick', (e) => {
            if (e.target.closest('.project-event-marker') || e.target.closest('.project-event-bar') || e.target.closest('.event-container-duration-symbol')) return;
            this.openEditModal(project, 'project');
        });

        row.appendChild(bar);

        // Render events connected to this project
        // Condition removed to allow events in compact mode as requested
        // Render events connected to this project
        // Condition removed to allow events in compact mode as requested
        const projectEvents = this.events.filter(e => e.projectId === project.id);

        // Track event elements for collision detection
        const projectEventElements = [];

        projectEvents.forEach(event => {
            const evStart = this.dateToPosition(event.start || event.date);
            const evEnd = event.end ? this.dateToPosition(event.end) : evStart;
            const evWidth = Math.max(20, evEnd - evStart);

            let element;
            let label;

            if (event.end) {
                // Event with duration -> Render thin line + symbol/marker at end
                const evStart = this.dateToPosition(event.start || event.date);
                const evEnd = this.dateToPosition(event.end);
                const evWidth = Math.max(0, evEnd - evStart);

                const containerEl = document.createElement('div');
                containerEl.className = 'event-container-duration-symbol';
                containerEl.style.position = 'absolute';
                containerEl.style.left = evStart + 'px';
                containerEl.style.width = evWidth + 'px';
                containerEl.style.height = '100%';

                // 1. Connector Line
                const line = document.createElement('div');
                line.className = 'event-connector-line';
                line.style.width = '100%';
                containerEl.appendChild(line);

                // 2. Symbol or marker at the end
                const endEl = document.createElement('div');
                if (event.symbol && event.symbol !== 'default') {
                    endEl.className = `event-symbol symbol-${event.symbol}`;
                } else {
                    endEl.className = 'project-event-marker';
                }
                endEl.style.position = 'absolute';
                endEl.style.right = '-10px';
                endEl.style.top = '50%';
                endEl.style.transform = 'translateY(-50%)';

                const tooltip = this.createTooltip(event);
                endEl.appendChild(tooltip);

                containerEl.appendChild(endEl);

                // Label
                const labelDiv = document.createElement('div');
                labelDiv.className = 'project-event-label';
                const dateStr = this.formatShortDate ? this.formatShortDate(event) : (event.start || '');
                labelDiv.innerHTML = `
                        <span class="label-name">${event.name}</span>
                        <span class="label-date">${dateStr}</span>
                    `;
                labelDiv.style.position = 'absolute';
                labelDiv.style.right = '0';
                labelDiv.style.transform = 'translateX(50%)';
                labelDiv.style.textAlign = 'center';

                endEl.appendChild(labelDiv);

                containerEl.addEventListener('click', (e) => {
                    if (this.hasDragged) return;
                    e.stopPropagation();
                    this.openEventSidebar(event);
                });

                containerEl.addEventListener('dblclick', (e) => {
                    e.stopPropagation();
                    this.openEditModal(event, 'event');
                });

                row.appendChild(containerEl);

                element = containerEl;
                label = labelDiv;

            } else {
                // Render as marker/symbol
                const el = document.createElement('div');

                if (event.symbol && event.symbol !== 'default') {
                    el.className = `event-symbol symbol-${event.symbol}`;
                } else {
                    el.className = 'project-event-marker';
                    const labelDiv = document.createElement('div');
                    labelDiv.className = 'project-event-label';
                    // Use formatShortDate if available, otherwise fallback to start date string
                    const dateStr = this.formatShortDate ? this.formatShortDate(event) : (event.start || '');
                    labelDiv.innerHTML = `
                            <span class="label-name">${event.name}</span>
                            <span class="label-date">${dateStr}</span>
                        `;
                    el.appendChild(labelDiv);
                }
                el.style.left = evStart + 'px';

                const tooltip = this.createTooltip(event);
                el.appendChild(tooltip);

                el.addEventListener('click', (e) => {
                    if (this.hasDragged) return;
                    e.stopPropagation();
                    this.openEventSidebar(event);
                });

                el.addEventListener('dblclick', (e) => {
                    e.stopPropagation();
                    this.openEditModal(event, 'event');
                });
                row.appendChild(el);

                element = el;
                label = el.querySelector('.project-event-label');
            }

            // Add to tracking array for collision resolution
            projectEventElements.push({
                element: element,
                label: label,
                left: evStart - (event.end ? 0 : 8),
                right: evEnd + (event.end ? 0 : 16),
                level: 0
            });
        });

        // Resolve collisions within the project bar ONLY if NOT in compact mode
        // This restores the "normal mode" vertical spacing logic
        if (!this.isCompact && this.resolveProjectEventCollisions) {
            const maxLabelRow = this.resolveProjectEventCollisions(projectEventElements);
            if (projectEvents.length > 0) {
                row.style.marginBottom = (10 + (maxLabelRow + 1) * 38) + 'px';
            }
        }

        container.appendChild(row);
    }

    renderStandaloneEvents(container) {
        // Standalone events (no project)
        const standaloneEvents = this.events.filter(e => !e.projectId);
        if (standaloneEvents.length > 0) {
            const eventRow = document.createElement('div');
            eventRow.className = 'project-row';
            eventRow.style.height = '40px';
            eventRow.style.marginBottom = '1rem';

            // Group events by date (for point events on same day)
            const groupedEvents = this.groupEventsByDate(standaloneEvents);

            groupedEvents.forEach(group => {
                if (group.events.length === 1) {
                    // Single event - render normally
                    const event = group.events[0];
                    const el = this.renderSingleStandaloneEvent(event);
                    eventRow.appendChild(el);
                } else {
                    // Multiple events on same date - render as group
                    const el = this.renderEventGroup(group);
                    eventRow.appendChild(el);
                }
            });

            container.appendChild(eventRow);
        }
    }

    groupEventsByDate(events) {
        const groups = [];
        const threshold = 20; // pixels - events within this distance are grouped

        events.forEach(event => {
            const evStart = this.dateToPosition(event.start || event.date);
            const evEnd = event.end ? this.dateToPosition(event.end) : evStart;

            // Duration events (with end date) are not grouped
            if (event.end) {
                groups.push({ position: evStart, events: [event], isDuration: true });
                return;
            }

            // Find existing group within threshold
            const existingGroup = groups.find(g =>
                !g.isDuration && Math.abs(g.position - evStart) < threshold
            );

            if (existingGroup) {
                existingGroup.events.push(event);
            } else {
                groups.push({ position: evStart, events: [event], isDuration: false });
            }
        });

        return groups;
    }

    renderSingleStandaloneEvent(event) {
        const evStart = this.dateToPosition(event.start || event.date);
        const evEnd = event.end ? this.dateToPosition(event.end) : evStart;
        const width = event.end ? Math.max(20, evEnd - evStart) : 0;

        const el = document.createElement('div');
        el.className = 'event-container';

        if (event.end) {
            // Duration -> Line + symbol/marker at end
            el.style.left = evStart + 'px';
            el.style.width = width + 'px';
            el.style.height = '24px';
            el.style.top = '10px';

            const line = document.createElement('div');
            line.className = 'event-connector-line';
            line.style.width = '100%';
            el.appendChild(line);

            const endEl = document.createElement('div');
            if (event.symbol && event.symbol !== 'default') {
                endEl.className = `event-symbol symbol-${event.symbol}`;
            } else {
                endEl.className = 'event-marker';
            }
            endEl.style.position = 'absolute';
            endEl.style.right = '-10px';
            endEl.style.top = '50%';
            endEl.style.transform = 'translateY(-50%)';
            el.appendChild(endEl);

        } else {
            // Point event - symbol or marker
            el.style.left = evStart + 'px';

            if (event.symbol && event.symbol !== 'default') {
                el.innerHTML = `<div class="event-symbol symbol-${event.symbol}"></div>`;
            } else {
                el.innerHTML = `<div class="event-marker"></div>`;
            }
        }

        const tooltip = this.createTooltip(event);
        el.appendChild(tooltip);

        el.addEventListener('click', (e) => {
            if (this.hasDragged) return;
            e.stopPropagation();
            this.openEventSidebar(event);
        });

        el.addEventListener('dblclick', () => this.openEditModal(event, 'event'));

        return el;
    }

    renderEventGroup(group) {
        const el = document.createElement('div');
        el.className = 'event-container event-group';
        el.style.left = group.position + 'px';

        const badge = document.createElement('div');
        badge.className = 'event-group-badge';
        badge.textContent = group.events.length;
        el.appendChild(badge);

        // Tooltip showing all event names
        const tooltip = document.createElement('div');
        tooltip.className = 'event-tooltip event-group-tooltip';
        const eventList = group.events.map(e => `<div class="tooltip-event-item">${e.name}</div>`).join('');
        tooltip.innerHTML = `
            <div class="tooltip-title">${group.events.length} händelser</div>
            <div class="tooltip-event-list">${eventList}</div>
            <div class="tooltip-hint">Klicka för att visa</div>
        `;
        el.appendChild(tooltip);

        el.addEventListener('click', (e) => {
            if (this.hasDragged) return;
            e.stopPropagation();
            this.openEventGroupPopup(group.events, e);
        });

        return el;
    }

    openEventGroupPopup(events, clickEvent) {
        // Remove any existing popup
        const existingPopup = document.querySelector('.event-group-popup');
        if (existingPopup) existingPopup.remove();

        const popup = document.createElement('div');
        popup.className = 'event-group-popup';

        const header = document.createElement('div');
        header.className = 'event-group-popup-header';
        header.innerHTML = `
            <span>${events.length} händelser</span>
            <button class="event-group-popup-close">&times;</button>
        `;
        popup.appendChild(header);

        const list = document.createElement('div');
        list.className = 'event-group-popup-list';

        events.forEach(event => {
            const item = document.createElement('div');
            item.className = 'event-group-popup-item';

            const symbolClass = event.symbol ? `symbol-${event.symbol}` : '';
            item.innerHTML = `
                <div class="event-group-popup-symbol ${symbolClass}"></div>
                <div class="event-group-popup-info">
                    <div class="event-group-popup-name">${event.name}</div>
                    <div class="event-group-popup-date">${this.formatEventDateRange(event)}</div>
                </div>
            `;

            item.addEventListener('click', (e) => {
                e.stopPropagation();
                popup.remove();
                this.openEventSidebar(event);
            });

            list.appendChild(item);
        });

        popup.appendChild(list);

        // Position popup near click
        document.body.appendChild(popup);
        const rect = popup.getBoundingClientRect();
        const x = Math.min(clickEvent.clientX, window.innerWidth - rect.width - 20);
        const y = Math.min(clickEvent.clientY, window.innerHeight - rect.height - 20);
        popup.style.left = x + 'px';
        popup.style.top = y + 'px';

        // Close button
        popup.querySelector('.event-group-popup-close').addEventListener('click', (e) => {
            e.stopPropagation();
            popup.remove();
        });

        // Close on outside click
        setTimeout(() => {
            document.addEventListener('click', function closePopup(e) {
                if (!popup.contains(e.target)) {
                    popup.remove();
                    document.removeEventListener('click', closePopup);
                }
            });
        }, 10);
    }

    createTooltip(event) {
        const tooltip = document.createElement('div');
        tooltip.className = 'event-tooltip';
        tooltip.innerHTML = `
            <div class="tooltip-title">${event.name}</div>
            <div class="tooltip-date">${this.formatEventDateRange(event)}</div>
            ${event.comment ? `<div class="tooltip-comment">${event.comment}</div>` : ''}
        `;
        return tooltip;
    }

    createProjectTooltip(project) {
        if (!project.comment) return null;
        const tooltip = document.createElement('div');
        tooltip.className = 'event-tooltip project-tooltip';
        tooltip.innerHTML = `
            <div class="tooltip-comment">${project.comment}</div>
        `;
        return tooltip;
    }

    openProjectSidebar(project) {
        // Close event sidebar if open
        this.closeEventSidebar();

        this.activeSidebarProject = project;
        const sidebar = document.getElementById('projectSidebar');
        const content = document.getElementById('sidebarContent');
        const title = document.getElementById('sidebarTitle');

        title.textContent = project.name;

        const areaMap = this.getAreaMap();

        const projectEvents = this.events.filter(e => e.projectId === project.id);
        projectEvents.sort((a, b) => this.parseDate(a.start || a.date) - this.parseDate(b.start || b.date));

        content.innerHTML = `
            <div class="sidebar-section">
                <span class="sidebar-label">${this.labels.area}</span>
                <div class="sidebar-value" style="display: flex; align-items: center; gap: 8px;">
                    <div style="width: 12px; height: 12px; border-radius: 50%; background: ${project.color || '#3b82f6'}"></div>
                    ${areaMap[project.color] || this.labels.all || 'Övrigt'}
                </div>
            </div>
            <div class="sidebar-section">
                <span class="sidebar-label">${this.labels.projectLead}</span>
                <div class="sidebar-value">${project.lead || this.labels.optional || 'Ej angiven'}</div>
            </div>
            <div class="sidebar-section">
                <span class="sidebar-label">${this.labels.status}</span>
                <div class="sidebar-value">${this.getStatusLabel(project.status || 'implementation')}</div>
            </div>
            <div class="sidebar-section">
                <span class="sidebar-label">${this.labels.startDate.split(' ')[0]} / ${this.labels.endDate.split(' ')[0]}</span>
                <div class="sidebar-value">${this.formatDateDisplay(this.parseDate(project.start), project.startType || 'date')} – ${this.formatDateDisplay(this.parseDate(project.end), project.endType || 'date')}</div>
            </div>
            ${project.comment ? `
            <div class="sidebar-section">
                <span class="sidebar-label">Kommentar</span>
                <div class="sidebar-value" style="white-space: pre-wrap;">${project.comment}</div>
            </div>
            ` : ''}
            <div class="sidebar-section">
                <span class="sidebar-label">${this.labels.eventsPlural} (${projectEvents.length})</span>
                <div class="sidebar-events">
                    ${projectEvents.map(e => `
                        <div class="sidebar-event-item sidebar-event-clickable" data-event-id="${e.id}">
                            <div class="sidebar-event-date">${this.formatEventDateRange(e)}</div>
                            <div class="sidebar-event-name">${e.name}</div>
                        </div>
                    `).join('') || `<div class="sidebar-value" style="font-style: italic; opacity: 0.5;">Inga ${this.labels.eventsPlural.toLowerCase()} inlagda</div>`}
                </div>
            </div>
        `;

        // Attach click handlers to event items for timeline navigation
        content.querySelectorAll('.sidebar-event-clickable').forEach(el => {
            el.addEventListener('click', () => {
                const event = this.events.find(ev => ev.id === el.dataset.eventId);
                if (event) this.scrollToEvent(event);
            });
        });

        sidebar.classList.add('active');
    }

    closeProjectSidebar() {
        document.getElementById('projectSidebar').classList.remove('active');
        this.activeSidebarProject = null;
    }

    openEventSidebar(event) {
        // Close project sidebar if open
        this.closeProjectSidebar();

        this.activeSidebarEvent = event;
        const sidebar = document.getElementById('eventSidebar');
        const content = document.getElementById('eventSidebarContent');
        const title = document.getElementById('eventSidebarTitle');

        title.textContent = event.name;

        // Find associated project if any
        const project = event.projectId ? this.projects.find(p => p.id === event.projectId) : null;

        content.innerHTML = `
            ${project ? `
            <div class="sidebar-section">
                <span class="sidebar-label">Kopplat ${this.labels.project.toLowerCase()}</span>
                <div class="sidebar-value" style="display: flex; align-items: center; gap: 8px; cursor: pointer;" id="sidebarLinkedProject">
                    <div style="width: 12px; height: 12px; border-radius: 50%; background: ${project.color || '#3b82f6'}"></div>
                    <span style="text-decoration: underline;">${project.name}</span>
                </div>
            </div>
            ` : ''}
            <div class="sidebar-section">
                <span class="sidebar-label">Tidpunkt</span>
                <div class="sidebar-value">${this.formatEventDateRange(event)}</div>
            </div>
            ${event.symbol ? `
            <div class="sidebar-section">
                <span class="sidebar-label">Symbol</span>
                <div class="sidebar-value">${this.getSymbolLabel(event.symbol)}</div>
            </div>
            ` : ''}
            ${event.comment ? `
            <div class="sidebar-section">
                <span class="sidebar-label">Kommentar</span>
                <div class="sidebar-value" style="white-space: pre-wrap;">${event.comment}</div>
            </div>
            ` : ''}
        `;

        // Bind linked project click
        const linkedProject = document.getElementById('sidebarLinkedProject');
        if (linkedProject) {
            linkedProject.onclick = () => this.openProjectSidebar(project);
        }

        sidebar.classList.add('active');
    }

    closeEventSidebar() {
        document.getElementById('eventSidebar').classList.remove('active');
        this.activeSidebarEvent = null;
    }

    toggleControlPanel() {
        const panel = document.getElementById('controlPanel');
        const backdrop = document.getElementById('controlPanelBackdrop');
        if (panel.classList.contains('active')) {
            this.closeControlPanel();
        } else {
            panel.classList.add('active');
            backdrop.classList.add('active');
        }
    }

    closeControlPanel() {
        document.getElementById('controlPanel').classList.remove('active');
        document.getElementById('controlPanelBackdrop').classList.remove('active');
    }

    updateFilterIndicator() {
        const indicator = document.getElementById('filterIndicator');
        if (!indicator) return;
        const hasActiveFilter = (
            this.filterLead !== '' ||
            this.filterStatus !== '' ||
            this.filterAreaValue !== '' ||
            this.searchQuery !== ''
        );
        indicator.style.display = hasActiveFilter ? 'block' : 'none';
    }

    renderAreaList() {
        const list = document.getElementById('areaList');
        if (!list) return;
        list.innerHTML = '';
        this.areas.forEach((area, index) => {
            const item = document.createElement('div');
            item.className = 'area-item';

            // Generate a unique ID for the color input anchor
            const areaColorId = `area-color-${index}-${Date.now()}`;

            item.innerHTML = `
                <label class="area-item-swatch" style="background-color: ${area.color}">
                    <input type="color" value="${area.color}" data-index="${index}">
                </label>
                <span class="area-item-name">${area.name}</span>
                <button class="area-item-delete" title="Ta bort">&times;</button>
            `;

            const input = item.querySelector('input[type="color"]');
            const swatch = item.querySelector('.area-item-swatch');
            let oldColor = area.color;

            // Helper to update colors in DOM without full rerender
            const updateColorsDirectly = (color) => {
                // Update swatches
                swatch.style.backgroundColor = color;

                // Update projects on timeline using the old color
                const projectElements = document.querySelectorAll('.project-bar');
                projectElements.forEach(el => {
                    const bg = el.style.backgroundColor;
                    // Standardize color format for comparison if possible, but local comparison should work
                    // for basic hex/rgb. We'll simply find projects that match the project's current color.
                });

                // Better approach: use the ID or data attribute if projects had them.
                // For now, we update projects whose data color matches.
                this.projects.forEach(p => {
                    if (p.color === oldColor) {
                        p.color = color;
                    }
                });

                // Update area definition
                this.areas[index].color = color;

                // Trigger a "soft" render (only timeline content, no sidebar/controls)
                // This is still cleaner than full this.render()
                this.render(); // We still use this.render() but we could optimize it later if needed.
                // However, with embedded inputs, the interaction won't be broken by rerender
                // because the focus is on the native browser picker, not the element itself.
            };

            input.addEventListener('input', (e) => {
                const newColor = e.target.value;
                if (newColor === oldColor) return;

                // Update projects and area
                this.projects.forEach(p => {
                    if (p.color === oldColor) {
                        p.color = newColor;
                    }
                });
                this.areas[index].color = newColor;
                oldColor = newColor;

                // Full save and render
                this.saveData('timeline_areas', this.areas);
                this.saveData('timeline_projects', this.projects);
                this.render();
            });

            input.addEventListener('change', () => {
                this.populateAreaSelects();
                this.renderAreaList(); // Clean up IDs and ensure sync
            });

            item.querySelector('.area-item-delete').addEventListener('click', (e) => {
                e.stopPropagation();
                this.removeArea(index);
            });

            item.querySelector('.area-item-name').addEventListener('dblclick', (e) => {
                e.stopPropagation();
                this.editAreaName(index);
            });

            list.appendChild(item);
        });
    }

    addArea() {
        const nameInput = document.getElementById('areaNewName');
        const colorInput = document.getElementById('areaNewColor');
        const name = nameInput.value.trim();
        if (!name) return;

        this.areas.push({ name, color: colorInput.value });
        nameInput.value = '';
        colorInput.value = '#6366f1';
        this.saveData('timeline_areas', this.areas);
        this.populateAreaSelects();
        this.renderAreaList();
        this.render();
    }

    async removeArea(index) {
        const area = this.areas[index];
        const usedBy = this.projects.filter(p => p.color === area.color).length;
        if (usedBy > 0) {
            if (!await this.showConfirm(`"${area.name}" används av ${usedBy} ${this.labels.projectsPlural.toLowerCase()}. Ta bort ändå?`, { danger: true })) return;
        }
        this.areas.splice(index, 1);
        this.saveData('timeline_areas', this.areas);
        this.populateAreaSelects();
        this.renderAreaList();
        this.render();
    }


    editAreaName(index) {
        const list = document.getElementById('areaList');
        const item = list.children[index];
        const nameSpan = item.querySelector('.area-item-name');
        const oldName = this.areas[index].name;

        const input = document.createElement('input');
        input.type = 'text';
        input.value = oldName;
        input.className = 'area-name-edit';
        nameSpan.replaceWith(input);
        input.focus();
        input.select();

        const save = () => {
            const newName = input.value.trim() || oldName;
            this.areas[index].name = newName;
            this.saveData('timeline_areas', this.areas);
            this.populateAreaSelects();
            this.renderAreaList();
            this.render();
        };

        input.addEventListener('blur', save);
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') { e.preventDefault(); save(); }
            if (e.key === 'Escape') { input.value = oldName; save(); }
        });
    }

    renderStatusList() {
        const list = document.getElementById('statusList');
        if (!list) return;
        list.innerHTML = '';
        this.statuses.forEach((status, index) => {
            const item = document.createElement('div');
            item.className = 'status-item';
            item.innerHTML = `
                <span class="status-item-name">${status.name}</span>
                <button class="status-item-delete" title="Ta bort">&times;</button>
            `;

            item.querySelector('.status-item-delete').addEventListener('click', (e) => {
                e.stopPropagation();
                this.removeStatus(index);
            });

            item.querySelector('.status-item-name').addEventListener('dblclick', (e) => {
                e.stopPropagation();
                this.editStatusName(index);
            });

            list.appendChild(item);
        });
    }

    addStatus() {
        const nameInput = document.getElementById('statusNewName');
        const name = nameInput.value.trim();
        if (!name) return;

        const id = name.toLowerCase()
            .replace(/[^a-z0-9åäöüé]+/g, '-')
            .replace(/^-|-$/g, '')
            || 'status-' + Date.now();

        if (this.statuses.some(s => s.id === id)) {
            this.showToast('En status med det ID:t finns redan', 'info');
            return;
        }

        this.statuses.push({ id, name });
        nameInput.value = '';
        this.saveData('timeline_statuses', this.statuses);
        this.populateStatusSelects();
        this.renderStatusList();
        this.render();
    }

    async removeStatus(index) {
        const status = this.statuses[index];
        const usedBy = this.projects.filter(p => p.status === status.id).length;
        if (usedBy > 0) {
            if (!await this.showConfirm(
                `"${status.name}" används av ${usedBy} ${this.labels.projectsPlural.toLowerCase()}. Ta bort ändå?`,
                { danger: true }
            )) return;
        }
        this.statuses.splice(index, 1);
        this.saveData('timeline_statuses', this.statuses);
        this.populateStatusSelects();
        this.renderStatusList();
        this.render();
    }

    editStatusName(index) {
        const list = document.getElementById('statusList');
        const item = list.children[index];
        const nameSpan = item.querySelector('.status-item-name');
        const oldName = this.statuses[index].name;

        const input = document.createElement('input');
        input.type = 'text';
        input.value = oldName;
        input.className = 'status-name-edit';
        nameSpan.replaceWith(input);
        input.focus();
        input.select();

        const save = () => {
            const newName = input.value.trim() || oldName;
            this.statuses[index].name = newName;
            this.saveData('timeline_statuses', this.statuses);
            this.populateStatusSelects();
            this.renderStatusList();
            this.render();
        };

        input.addEventListener('blur', save);
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') { e.preventDefault(); save(); }
            if (e.key === 'Escape') { input.value = oldName; save(); }
        });
    }

    getSymbolLabel(symbol) {
        const labels = {
            'star': 'Stjärna',
            'diamond': 'Diamant',
            'flag': 'Flagga',
            'warning': 'Varning',
            'check': 'Klar'
        };
        return labels[symbol] || 'Standard';
    }

    setView(view) {
        // Update active button
        document.querySelectorAll('.btn-view').forEach(btn => btn.classList.remove('active'));
        document.getElementById('view' + this.getViewButtonId(view)).classList.add('active');

        const viewportWidth = this.timelineBody.clientWidth;
        const today = new Date();
        let targetDays;
        let scrollToDate;

        switch (view) {
            case 'all':
                // Show entire timeline - calculate zoom to fit all
                const totalDays = this.daysBetween(this.startDate, this.endDate);
                this.zoomLevel = viewportWidth / (totalDays * this.dayWidth);
                this.render();
                this.timelineBody.scrollLeft = 0;
                return;

            case '2years':
                targetDays = parseInt(this.labels['zoom2YearsDays']) || 730;
                scrollToDate = new Date(today);
                scrollToDate.setMonth(scrollToDate.getMonth() - 2); // Start 2 months before today
                break;

            case '1year':
                targetDays = parseInt(this.labels['zoom1YearDays']) || 365;
                scrollToDate = new Date(today);
                scrollToDate.setMonth(scrollToDate.getMonth() - 1); // Start 1 month before today
                break;

            case '3months':
                targetDays = parseInt(this.labels['zoom3MonthsDays']) || 90;
                scrollToDate = new Date(today);
                scrollToDate.setDate(scrollToDate.getDate() - 14); // Start 2 weeks before today
                break;
        }

        // Calculate zoom level to show target days in viewport
        this.zoomLevel = viewportWidth / (targetDays * this.dayWidth);
        this.zoomLevel = Math.max(this.minZoom, Math.min(this.maxZoom, this.zoomLevel));

        this.render();

        // Scroll to the target date
        const scrollPos = this.dateToPosition(scrollToDate);
        this.timelineBody.scrollLeft = Math.max(0, scrollPos);
    }

    getViewButtonId(view) {
        const map = {
            'all': 'All',
            '2years': '2Years',
            '1year': '1Year',
            '3months': '3Months'
        };
        return map[view];
    }

    setSortBy(sortBy) {
        this.sortBy = sortBy;
        this.render();
    }

    setFilterLead(lead) {
        this.filterLead = lead;
        this.render();
        this.updateFilterIndicator();
    }


    updateLeadFilter() {
        const select = document.getElementById('filterLead');
        const currentValue = select.value;

        // Get unique leads from projects
        const leads = [...new Set(this.projects
            .map(p => p.lead)
            .filter(lead => lead && lead.trim())
        )].sort((a, b) => a.localeCompare(b, 'sv'));

        // Rebuild options
        select.innerHTML = `<option value="">${this.labels.all || 'Alla'}</option>`;
        leads.forEach(lead => {
            const option = document.createElement('option');
            option.value = lead;
            option.textContent = lead;
            select.appendChild(option);
        });

        // Restore selection if still valid
        if (leads.includes(currentValue)) {
            select.value = currentValue;
        } else {
            select.value = '';
            this.filterLead = '';
        }
    }

    getFilteredProjects() {
        return this.projects.filter(project => {
            // Filter by lead
            if (this.filterLead && project.lead !== this.filterLead) return false;

            // Filter by status
            if (this.filterStatus && project.status !== this.filterStatus) return false;

            // Filter by area (color)
            if (this.filterAreaValue && project.color !== this.filterAreaValue) return false;

            // Filter by search query
            if (this.searchQuery) {
                const name = (project.name || '').toLowerCase();
                const lead = (project.lead || '').toLowerCase();
                const comment = (project.comment || '').toLowerCase();
                if (!name.includes(this.searchQuery) &&
                    !lead.includes(this.searchQuery) &&
                    !comment.includes(this.searchQuery)) {
                    return false;
                }
            }

            return true;
        });
    }

    getSortedProjects() {
        // Mapping for Area names (associated with colors)
        const colorToArea = this.getAreaMap();

        return [...this.getFilteredProjects()].sort((a, b) => {
            switch (this.sortBy) {
                case 'lead':
                    const leadA = (a.lead || '').toLowerCase();
                    const leadB = (b.lead || '').toLowerCase();
                    if (!leadA && !leadB) return 0;
                    if (!leadA) return 1;
                    if (!leadB) return -1;
                    return leadA.localeCompare(leadB, 'sv');

                case 'color':
                    const areaA = colorToArea[a.color] || 'Övrigt';
                    const areaB = colorToArea[b.color] || 'Övrigt';
                    return areaA.localeCompare(areaB, 'sv');

                case 'name':
                    return (a.name || '').localeCompare(b.name || '', 'sv');

                case 'start':
                    return this.parseDate(a.start) - this.parseDate(b.start);

                case 'end':
                    return this.parseDate(a.end) - this.parseDate(b.end);

                case 'status':
                    const statusOrderMap = {};
                    this.statuses.forEach((s, i) => { statusOrderMap[s.id] = i; });
                    const defaultIdx = Math.floor(this.statuses.length / 2);
                    return (statusOrderMap[a.status] ?? defaultIdx) - (statusOrderMap[b.status] ?? defaultIdx);

                default:
                    return 0;
            }
        });
    }

    getTotalWidth() {
        const days = this.daysBetween(this.startDate, this.endDate);
        return days * this.dayWidth * this.zoomLevel;
    }

    daysBetween(start, end) {
        const oneDay = 24 * 60 * 60 * 1000;
        return Math.round((end - start) / oneDay);
    }

    dateToPosition(date) {
        const d = this.parseDate(date);
        const days = this.daysBetween(this.startDate, d);
        return days * this.dayWidth * this.zoomLevel;
    }

    // Rendering
    render() {
        // Preserve scroll position across re-renders
        const scrollLeft = this.timelineBody ? this.timelineBody.scrollLeft : 0;
        const scrollTop = this.timelineBody ? this.timelineBody.scrollTop : 0;

        this.updateLeadFilter();
        this.renderHeader();
        this.renderGrid();

        // Decide whether to render grouped or flat
        // Group by Lead removed as requested. Only group by Status.
        const shouldGroup = this.sortBy === 'status';

        if (shouldGroup && this.groupingEnabled) {
            this.renderContentGrouped();
        } else {
            this.renderContent(); // Flat rendering
        }

        this.renderTodayMarker();

        // Restore scroll position
        if (this.timelineBody) {
            this.timelineBody.scrollLeft = scrollLeft;
            this.timelineBody.scrollTop = scrollTop;
        }

        // Update sticky labels and sync grid height after DOM is ready
        requestAnimationFrame(() => {
            this.updateStickyLabels();
            this.syncGridHeight();
        });
    }

    syncGridHeight() {
        // Make grid height match content height for vertical stripes
        const contentHeight = this.timelineContent.scrollHeight;
        this.timelineGrid.style.height = contentHeight + 'px';
    }

    renderHeader() {
        this.timelineHeader.innerHTML = '';
        const totalWidth = this.getTotalWidth();
        const pixelsPerDay = this.dayWidth * this.zoomLevel;

        // Determine detail level based on zoom
        const showDays = pixelsPerDay >= 25;
        const showWeeks = pixelsPerDay >= 8 && !showDays;
        const showMonths = pixelsPerDay >= 1.5;
        const showQuarters = !showMonths;

        if (showQuarters) {
            // Render quarters (Q1, Q2, Q3, Q4)
            this.renderQuarterHeader(pixelsPerDay, totalWidth);
        } else {
            // Render months (with optional weeks/days)
            this.renderMonthHeader(pixelsPerDay, showDays, showWeeks, totalWidth);
        }
    }

    renderQuarterHeader(pixelsPerDay, totalWidth) {
        let currentDate = new Date(this.startDate);

        while (currentDate <= this.endDate) {
            const year = currentDate.getFullYear();
            const quarter = Math.floor(currentDate.getMonth() / 3);
            const quarterStart = new Date(year, quarter * 3, 1);
            const quarterEnd = new Date(year, quarter * 3 + 3, 0);

            // Calculate visible days in this quarter
            const visibleStart = quarterStart < this.startDate ? this.startDate : quarterStart;
            const visibleEnd = quarterEnd > this.endDate ? this.endDate : quarterEnd;
            const visibleDays = this.daysBetween(visibleStart, visibleEnd) + 1;

            const width = visibleDays * pixelsPerDay;

            const cell = document.createElement('div');
            cell.className = 'timeline-header-cell';
            cell.style.width = width + 'px';

            cell.innerHTML = `
            <div class="header-main">
                <span class="year">${year}</span>
                <span class="month quarter">Q${quarter + 1}</span>
            </div>
        `;
            this.timelineHeader.appendChild(cell);

            // Move to next quarter
            currentDate = new Date(year, quarter * 3 + 3, 1);
        }

        this.timelineHeader.style.width = totalWidth + 'px';
    }

    renderMonthHeader(pixelsPerDay, showDays, showWeeks, totalWidth) {
        let currentDate = new Date(this.startDate);
        const months = [];

        while (currentDate <= this.endDate) {
            const year = currentDate.getFullYear();
            const month = currentDate.getMonth();
            const monthStart = new Date(year, month, 1);
            const monthEnd = new Date(year, month + 1, 0);

            // Calculate visible days in this month
            const visibleStart = monthStart < this.startDate ? this.startDate : monthStart;
            const visibleEnd = monthEnd > this.endDate ? this.endDate : monthEnd;
            const visibleDays = this.daysBetween(visibleStart, visibleEnd) + 1;

            const width = visibleDays * pixelsPerDay;

            months.push({
                year,
                month,
                width,
                name: this.getMonthName(month),
                visibleStart,
                visibleEnd
            });

            currentDate.setMonth(currentDate.getMonth() + 1);
            currentDate.setDate(1);
        }

        months.forEach(m => {
            const cell = document.createElement('div');
            cell.className = 'timeline-header-cell';
            cell.style.width = m.width + 'px';

            let subHeaderHtml = '';

            if (showDays) {
                // Show individual days
                subHeaderHtml = '<div class="sub-header days">';
                let d = new Date(m.visibleStart);
                while (d <= m.visibleEnd) {
                    const dayWidth = pixelsPerDay;
                    const dayNum = d.getDate();
                    const isWeekend = d.getDay() === 0 || d.getDay() === 6;
                    subHeaderHtml += `<div class="sub-cell day${isWeekend ? ' weekend' : ''}" style="width:${dayWidth}px">${dayNum}</div>`;
                    d.setDate(d.getDate() + 1);
                }
                subHeaderHtml += '</div>';
            } else if (showWeeks) {
                // Show weeks
                subHeaderHtml = '<div class="sub-header weeks">';
                let d = new Date(m.visibleStart);
                while (d <= m.visibleEnd) {
                    const weekNum = this.getWeekNumber(d);
                    // Calculate days until end of week or end of month
                    const daysInWeek = Math.min(
                        7 - ((d.getDay() + 6) % 7), // Days until Sunday
                        this.daysBetween(d, m.visibleEnd) + 1
                    );
                    const weekWidth = daysInWeek * pixelsPerDay;
                    // Only show week number if this is the start of the week (Monday)
                    // This prevents duplicate week numbers when a week spans two months
                    const weekPrefix = this.labels.weekPrefix || 'v';
                    const isMonday = d.getDay() === 1;
                    subHeaderHtml += `<div class="sub-cell week" style="width:${weekWidth}px">${isMonday ? weekPrefix + weekNum : ''}</div>`;
                    d.setDate(d.getDate() + daysInWeek);
                }
                subHeaderHtml += '</div>';
            }

            cell.innerHTML = `
            <div class="header-main">
                <span class="year">${m.year}</span>
                <span class="month">${m.name}</span>
            </div>
            ${subHeaderHtml}
        `;
            this.timelineHeader.appendChild(cell);
        });

        this.timelineHeader.style.width = totalWidth + 'px';
    }

    renderGrid() {
        this.timelineGrid.innerHTML = '';
        const totalWidth = this.getTotalWidth();
        const pixelsPerDay = this.dayWidth * this.zoomLevel;

        const showDays = pixelsPerDay >= 25;
        const showWeeks = pixelsPerDay >= 8;
        const showMonths = pixelsPerDay >= 1.5;
        const showQuarters = !showMonths;

        if (showQuarters) {
            // Render quarter grid lines
            this.renderQuarterGrid(pixelsPerDay, totalWidth);
        } else {
            // Render month grid lines (with optional weeks/days)
            this.renderMonthGrid(pixelsPerDay, showDays, showWeeks, totalWidth);
        }
    }

    renderQuarterGrid(pixelsPerDay, totalWidth) {
        let currentDate = new Date(this.startDate);

        while (currentDate <= this.endDate) {
            const year = currentDate.getFullYear();
            const quarter = Math.floor(currentDate.getMonth() / 3);
            const quarterStart = new Date(year, quarter * 3, 1);
            const quarterEnd = new Date(year, quarter * 3 + 3, 0);

            const visibleStart = quarterStart < this.startDate ? this.startDate : quarterStart;
            const visibleEnd = quarterEnd > this.endDate ? this.endDate : quarterEnd;
            const visibleDays = this.daysBetween(visibleStart, visibleEnd) + 1;

            const width = visibleDays * pixelsPerDay;

            const quarterContainer = document.createElement('div');
            quarterContainer.className = 'timeline-grid-month';
            quarterContainer.style.width = width + 'px';

            const line = document.createElement('div');
            line.className = 'grid-line quarter';
            line.style.width = width + 'px';
            quarterContainer.appendChild(line);

            this.timelineGrid.appendChild(quarterContainer);

            // Move to next quarter
            currentDate = new Date(year, quarter * 3 + 3, 1);
        }

        this.timelineGrid.style.width = totalWidth + 'px';
    }

    renderMonthGrid(pixelsPerDay, showDays, showWeeks, totalWidth) {
        let currentDate = new Date(this.startDate);

        while (currentDate <= this.endDate) {
            const year = currentDate.getFullYear();
            const month = currentDate.getMonth();
            const monthStart = new Date(year, month, 1);
            const monthEnd = new Date(year, month + 1, 0);

            const visibleStart = monthStart < this.startDate ? this.startDate : monthStart;
            const visibleEnd = monthEnd > this.endDate ? this.endDate : monthEnd;
            const visibleDays = this.daysBetween(visibleStart, visibleEnd) + 1;

            const width = visibleDays * pixelsPerDay;

            const monthContainer = document.createElement('div');
            monthContainer.className = 'timeline-grid-month';
            monthContainer.style.width = width + 'px';

            if (showDays) {
                // Add day lines
                let d = new Date(visibleStart);
                while (d <= visibleEnd) {
                    const dayLine = document.createElement('div');
                    const isWeekend = d.getDay() === 0 || d.getDay() === 6;
                    const isMonday = d.getDay() === 1;
                    dayLine.className = 'grid-line day' + (isWeekend ? ' weekend' : '') + (isMonday ? ' monday' : '');
                    dayLine.style.width = pixelsPerDay + 'px';
                    monthContainer.appendChild(dayLine);
                    d.setDate(d.getDate() + 1);
                }
            } else if (showWeeks) {
                // Add week lines
                let d = new Date(visibleStart);
                while (d <= visibleEnd) {
                    const daysInWeek = Math.min(
                        7 - ((d.getDay() + 6) % 7),
                        this.daysBetween(d, visibleEnd) + 1
                    );
                    const weekLine = document.createElement('div');
                    weekLine.className = 'grid-line week';
                    weekLine.style.width = (daysInWeek * pixelsPerDay) + 'px';
                    monthContainer.appendChild(weekLine);
                    d.setDate(d.getDate() + daysInWeek);
                }
            } else {
                // Just month line
                const line = document.createElement('div');
                line.className = 'grid-line month';
                line.style.width = width + 'px';
                monthContainer.appendChild(line);
            }

            this.timelineGrid.appendChild(monthContainer);
            currentDate.setMonth(currentDate.getMonth() + 1);
            currentDate.setDate(1);
        }

        this.timelineGrid.style.width = totalWidth + 'px';
    }

    renderContent() {
        this.timelineContent.innerHTML = '';
        const totalWidth = this.getTotalWidth();
        this.timelineContent.style.width = totalWidth + 'px';

        if (this.projects.length === 0 && this.events.length === 0) {
            const emptyState = document.createElement('div');
            emptyState.className = 'empty-state';
            emptyState.innerHTML = `
    <p>${this.labels.emptyState}</p>
    <span>${this.labels.edit || 'Klicka'} "${this.labels.addProject}" ${this.labels.getStarted}</span>
`;
            this.timelineContent.appendChild(emptyState);
            return;
        }

        // Sort projects according to selected sort option
        const sortedProjects = this.getSortedProjects();

        // Render projects using the shared helper
        sortedProjects.forEach(project => {
            this.renderProjectRow(project, this.timelineContent);
        });

        // Render standalone events
        this.renderStandaloneEvents(this.timelineContent);
    }

    resolveStandaloneEventCollisions(eventElements, eventsRow) {
        if (eventElements.length === 0) return;

        // Sort events by left position
        eventElements.sort((a, b) => a.left - b.left);

        const rowHeight = 45; // Height per level (marker + label + padding)
        let maxLevel = 0;

        // Greedy algorithm: for each event, find the lowest level where it doesn't collide
        for (let i = 0; i < eventElements.length; i++) {
            const current = eventElements[i];

            // Find occupied levels at this position
            const occupiedLevels = new Set();
            for (let j = 0; j < i; j++) {
                const other = eventElements[j];
                // Check horizontal overlap with padding
                if (current.left < other.right + 10 && current.right > other.left - 10) {
                    occupiedLevels.add(other.level);
                }
            }

            // Find the lowest available level
            let level = 0;
            while (occupiedLevels.has(level)) {
                level++;
            }

            current.level = level;
            maxLevel = Math.max(maxLevel, level);

            // Apply vertical offset based on level
            const topOffset = 10 + (level * rowHeight);
            current.element.style.top = topOffset + 'px';
        }

        // Adjust row height to fit all levels
        const totalHeight = 60 + (maxLevel * rowHeight);
        eventsRow.style.minHeight = totalHeight + 'px';
    }

    resolveProjectEventCollisions(eventElements) {
        if (eventElements.length === 0) return 0;

        // Sort events by left position
        eventElements.sort((a, b) => a.left - b.left);

        // Estimate label width (approx 7px per character, min 50px, max 150px)
        const getLabelWidth = (el) => {
            const label = el.label;
            if (!label) return 50;
            const text = label.textContent || '';
            return Math.min(150, Math.max(50, text.length * 7 + 12));
        };

        let maxRow = 0;

        // Assign rows to labels to avoid overlap
        for (let i = 0; i < eventElements.length; i++) {
            const current = eventElements[i];
            const currentLabelWidth = getLabelWidth(current);
            const currentLabelLeft = current.left - currentLabelWidth / 2;
            const currentLabelRight = current.left + currentLabelWidth / 2;

            let row = 0;

            // Check against all previous elements
            for (let j = 0; j < i; j++) {
                const other = eventElements[j];
                const otherLabelWidth = getLabelWidth(other);
                const otherLabelLeft = other.left - otherLabelWidth / 2;
                const otherLabelRight = other.left + otherLabelWidth / 2;

                // Check if labels overlap horizontally
                if (currentLabelLeft < otherLabelRight + 8 && currentLabelRight > otherLabelLeft - 8) {
                    if (row <= (other.row || 0)) {
                        row = (other.row || 0) + 1;
                    }
                }
            }

            current.row = row;
            maxRow = Math.max(maxRow, row);

            // Position label on its row (taller labels with date info)
            if (current.label) {
                current.label.style.top = `calc(100 % + ${4 + row * 38}px)`;
            }
        }

        return maxRow;
    }

    formatDateDisplay(date, dateType) {
        const months = this.labels.monthLongNames || ['januari', 'februari', 'mars', 'april', 'maj', 'juni', 'juli', 'augusti', 'september', 'oktober', 'november', 'december'];

        if (dateType === 'month') {
            return `${months[date.getMonth()]} ${date.getFullYear()} `;
        } else if (dateType === 'week') {
            return `${this.labels.weekWord || 'Vecka'} ${this.getWeekNumber(date)}, ${date.getFullYear()} `;
        } else {
            return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} `;
        }
    }

    formatEventDateRange(event) {
        const startDate = this.parseDate(event.start || event.date);
        const startType = event.startType || event.dateType || 'date';
        const startFormatted = this.formatDateDisplay(startDate, startType);

        if (event.end) {
            const endDate = this.parseDate(event.end);
            const endType = event.endType || 'date';
            const endFormatted = this.formatDateDisplay(endDate, endType);
            return `${startFormatted} – ${endFormatted} `;
        }
        return startFormatted;
    }

    // Short date format for labels (e.g., "15 jan" or "v12")
    formatShortDate(event) {
        const startDate = this.parseDate(event.start || event.date);
        const startType = event.startType || event.dateType || 'date';
        const shortMonths = this.labels.monthShortNames;
        const weekPrefix = this.labels.weekPrefix || 'v';

        let startStr;
        if (startType === 'month') {
            startStr = `${shortMonths[startDate.getMonth()]} `;
        } else if (startType === 'week') {
            startStr = `${weekPrefix}${this.getWeekNumber(startDate)} `;
        } else {
            startStr = `${startDate.getDate()} ${shortMonths[startDate.getMonth()]} `;
        }

        if (event.end) {
            const endDate = this.parseDate(event.end);
            const endType = event.endType || 'date';
            let endStr;
            if (endType === 'month') {
                endStr = `${shortMonths[endDate.getMonth()]} `;
            } else if (endType === 'week') {
                endStr = `${weekPrefix}${this.getWeekNumber(endDate)} `;
            } else {
                endStr = `${endDate.getDate()} ${shortMonths[endDate.getMonth()]} `;
            }
            return `${startStr}–${endStr} `;
        }
        return startStr;
    }

    renderTodayMarker() {
        const today = new Date();
        if (today >= this.startDate && today <= this.endDate) {
            const pos = this.dateToPosition(today);
            this.todayMarker.style.left = pos + 'px';
            this.todayMarker.style.display = 'block';
            this.todayMarker.setAttribute('data-today', this.labels.today);
        } else {
            this.todayMarker.style.display = 'none';
        }
    }

    updateStickyLabels() {
        const scrollLeft = this.timelineBody.scrollLeft;
        const viewportWidth = this.timelineBody.clientWidth;
        const projectBars = this.timelineContent.querySelectorAll('.project-bar');

        projectBars.forEach(bar => {
            const barLeft = parseFloat(bar.style.left);
            const barWidth = parseFloat(bar.style.width);
            const barRight = barLeft + barWidth;
            const label = bar.querySelector('.project-info');

            if (!label) return;

            const labelWidth = label.offsetWidth;

            // Hide name if bar is too small to show it even partially
            if (barWidth < 40) {
                label.style.opacity = '0';
                label.style.pointerEvents = 'none';
            } else {
                label.style.opacity = '1';
                label.style.pointerEvents = 'auto';
            }

            // Check if bar is visible in viewport
            const visibleLeft = Math.max(barLeft, scrollLeft);
            const visibleRight = Math.min(barRight, scrollLeft + viewportWidth);

            if (visibleRight > visibleLeft) {
                // Bar is visible - center label in the visible portion
                const visibleWidth = visibleRight - visibleLeft;
                const visibleCenter = (visibleLeft + visibleRight) / 2;
                let labelPos = visibleCenter - barLeft - labelWidth / 2;

                // Clamp to bar bounds with some padding
                const padding = 8;
                const minOffset = padding;
                const maxOffset = Math.max(minOffset, barWidth - labelWidth - padding);

                // If the label is wider than the visible part, stick it to the left/right of the visible part
                if (labelWidth > visibleWidth - padding * 2) {
                    if (barLeft < scrollLeft) {
                        labelPos = scrollLeft - barLeft + padding;
                    } else {
                        labelPos = padding;
                    }
                    labelPos = Math.max(padding, Math.min(labelPos, barWidth - labelWidth - padding));
                } else {
                    labelPos = Math.max(minOffset, Math.min(labelPos, maxOffset));
                }

                label.style.left = labelPos + 'px';
            }
        });
    }

    scrollToToday() {
        const today = new Date();
        const pos = this.dateToPosition(today);
        const containerWidth = this.timelineBody.clientWidth;
        this.timelineBody.scrollLeft = pos - containerWidth / 2;
    }

    scrollToEvent(event) {
        const eventDate = this.parseDate(event.start || event.date);
        const pos = this.dateToPosition(eventDate);
        const containerWidth = this.timelineBody.clientWidth;
        this.timelineBody.scrollLeft = pos - containerWidth / 2;

        // Flash highlight on the event element in the timeline
        requestAnimationFrame(() => {
            // Find event markers/symbols/bars that match this event position
            const tolerance = 3;
            const allMarkers = this.timelineContent.querySelectorAll(
                '.project-event-marker, .event-symbol, .project-event-bar, .event-container-duration-symbol, .event-container'
            );
            allMarkers.forEach(el => {
                const left = parseFloat(el.style.left);
                if (Math.abs(left - pos) < tolerance) {
                    el.classList.add('event-flash');
                    setTimeout(() => el.classList.remove('event-flash'), 1500);
                }
            });
        });
    }

    // Modal handling
    openProjectModal() {
        const today = new Date().toISOString().split('T')[0];
        this.setDateValue('projectStart', today, 'date');
        this.setDateValue('projectEnd', today, 'date');
        document.getElementById('projectLead').value = '';
        document.getElementById('projectComment').value = '';
        // Reset color to first option and update dropdown
        const colorSelect = document.getElementById('projectColor');
        colorSelect.selectedIndex = 0;
        const colorDropdown = document.querySelector('.color-dropdown[data-select-id="projectColor"]');
        if (colorDropdown) {
            this.updateColorDropdown(colorDropdown, colorSelect);
        }
        document.getElementById('projectModal').classList.add('active');
    }

    openEventModal() {
        const today = new Date().toISOString().split('T')[0];
        this.setDateValue('eventStart', today, 'date');
        // Reset end date fields
        document.getElementById('eventEndType').value = 'date';
        document.getElementById('eventEndDate').value = '';
        document.getElementById('eventEndDate').style.display = 'block';
        const eventEndWeekGroup = document.getElementById('eventEndWeekGroup');
        if (eventEndWeekGroup) eventEndWeekGroup.style.display = 'none';
        const eventEndMonthGroup = document.getElementById('eventEndMonthGroup');
        if (eventEndMonthGroup) eventEndMonthGroup.style.display = 'none';
        document.getElementById('eventName').value = '';

        // Populate project dropdown
        const select = document.getElementById('eventProject');
        select.innerHTML = `<option value="">${this.labels.none}</option>`;
        this.projects.forEach(project => {
            const option = document.createElement('option');
            option.value = project.id;
            option.textContent = project.name;
            select.appendChild(option);
        });
        this.rebuildProjectDropdown('eventProject');

        // Reset symbol and rebuild dropdown
        document.getElementById('eventSymbol').value = '';
        this.rebuildSymbolDropdown('eventSymbol');

        document.getElementById('eventModal').classList.add('active');
    }

    openEditModal(item, type) {
        const modal = document.getElementById('editModal');
        const title = document.getElementById('editModalTitle');
        const leadGroup = document.getElementById('editLeadGroup');
        const startGroup = document.getElementById('editStartGroup');
        const endGroup = document.getElementById('editEndGroup');
        const eventStartGroup = document.getElementById('editEventStartGroup');
        const eventEndGroup = document.getElementById('editEventEndGroup');
        const projectGroup = document.getElementById('editProjectGroup');
        const symbolGroup = document.getElementById('editSymbolGroup');
        const colorGroup = document.getElementById('editColorGroup');

        document.getElementById('editId').value = item.id;
        document.getElementById('editType').value = type;
        document.getElementById('editName').value = item.name;

        if (type === 'project') {
            title.textContent = 'Redigera projekt';
            leadGroup.style.display = 'block';
            document.getElementById('editStatusGroup').style.display = 'block';
            startGroup.style.display = 'block';
            endGroup.style.display = 'block';
            eventStartGroup.style.display = 'none';
            eventEndGroup.style.display = 'none';
            projectGroup.style.display = 'none';
            symbolGroup.style.display = 'none';
            colorGroup.style.display = 'block';

            document.getElementById('editLead').value = item.lead || '';
            document.getElementById('editStatus').value = item.status || 'implementation';
            this.setDateValue('editStart', item.start, item.startType || 'date');
            this.setDateValue('editEnd', item.end, item.endType || 'date');
            document.getElementById('editColor').value = item.color || '#3b82f6';
            // Update custom color dropdown
            const editColorDropdown = document.querySelector('.color-dropdown[data-select-id="editColor"]');
            if (editColorDropdown) {
                this.updateColorDropdown(editColorDropdown, document.getElementById('editColor'));
            }
            document.getElementById('editComment').value = item.comment || '';

        } else {
            title.textContent = 'Redigera händelse';
            leadGroup.style.display = 'none';
            document.getElementById('editStatusGroup').style.display = 'none';
            startGroup.style.display = 'none';

            endGroup.style.display = 'none';
            eventStartGroup.style.display = 'block';
            eventEndGroup.style.display = 'block';
            projectGroup.style.display = 'block';
            symbolGroup.style.display = 'block';
            colorGroup.style.display = 'none';

            // Support both old format (date) and new format (start/end)
            const startDate = item.start || item.date;
            const startType = item.startType || item.dateType || 'date';
            this.setDateValue('editEventStart', startDate, startType);
            this.setDateValue('editEventEnd', item.end || '', item.endType || 'date');
            if (!item.end) {
                document.getElementById('editEventEndDate').value = '';
            }

            // Populate project dropdown
            const select = document.getElementById('editProject');
            select.innerHTML = `<option value="">${this.labels.none}</option>`;
            this.projects.forEach(project => {
                const option = document.createElement('option');
                option.value = project.id;
                option.textContent = project.name;
                select.appendChild(option);
            });
            select.value = item.projectId || '';
            this.rebuildProjectDropdown('editProject');

            const editSymbol = document.getElementById('editSymbol');
            editSymbol.value = item.symbol || '';
            this.rebuildSymbolDropdown('editSymbol');

            document.getElementById('editComment').value = item.comment || '';
        }

        // Update convert button text based on type
        const convertBtn = document.getElementById('convertItem');
        if (convertBtn) {
            convertBtn.textContent = type === 'project'
                ? this.labels.convertToEvent
                : this.labels.convertToProject;
        }

        modal.classList.add('active');
    }

    closeModal(modalId) {
        document.getElementById(modalId).classList.remove('active');
        if (modalId === 'projectModal') {
            document.getElementById('projectForm').reset();
            this.setDateValue('projectStart', '', 'date');
            this.setDateValue('projectEnd', '', 'date');
        } else if (modalId === 'eventModal') {
            document.getElementById('eventForm').reset();
            this.setDateValue('eventStart', '', 'date');
            this.setDateValue('eventEnd', '', 'date');
        } else if (modalId === 'editModal') {
            document.getElementById('editForm').reset();
        }
    }

    // Form handling
    handleProjectSubmit(e) {
        e.preventDefault();

        const startType = document.getElementById('projectStartType').value;
        const endType = document.getElementById('projectEndType').value;
        const startDate = this.getDateValue('projectStart');
        const endDate = this.getDateValue('projectEnd');

        // Validate dates
        if (!this.validateDates(startDate, endDate)) {
            this.showToast('Slutdatum måste vara efter startdatum', 'error');
            return;
        }

        const project = {
            id: Date.now().toString(),
            name: document.getElementById('projectName').value.trim(),
            lead: document.getElementById('projectLead').value.trim() || null,
            status: document.getElementById('projectStatus').value,
            start: startDate,
            startType: startType,
            end: endDate,
            endType: endType,
            color: document.getElementById('projectColor').value,
            comment: document.getElementById('projectComment').value.trim() || null
        };

        this.pushUndoState();
        this.projects.push(project);
        this.scheduleAutoSave();
        this.closeModal('projectModal');
        this.render();
        this.showToast('Projekt skapat!', 'success');
    }


    async handleEventSubmit(e) {
        e.preventDefault();

        const startType = document.getElementById('eventStartType').value;
        const endType = document.getElementById('eventEndType').value;
        const startDate = this.getDateValue('eventStart');
        const endDate = this.getDateValue('eventEnd');

        // Validate dates if end date exists
        if (endDate && !this.validateDates(startDate, endDate)) {
            this.showToast('Slutdatum måste vara efter startdatum', 'error');
            return;
        }

        // Check for collisions
        const collisions = this.findDateCollisions(startDate, endDate);
        if (collisions.length > 0) {
            const proceed = await this.showConfirm(this.formatCollisionWarning(collisions));
            if (!proceed) return;
        }

        const event = {
            id: Date.now().toString(),
            name: document.getElementById('eventName').value.trim(),
            start: startDate,
            startType: startType,
            end: endDate || null,
            endType: endDate ? endType : null,
            projectId: document.getElementById('eventProject').value || null,
            symbol: document.getElementById('eventSymbol').value || null,
            comment: document.getElementById('eventComment').value.trim() || null
        };

        this.pushUndoState();
        this.events.push(event);
        this.scheduleAutoSave();
        this.closeModal('eventModal');
        this.render();
        this.showToast('Händelse skapad!', 'success');
    }


    async handleEditSubmit(e) {
        e.preventDefault();

        const id = document.getElementById('editId').value;
        const type = document.getElementById('editType').value;
        const name = document.getElementById('editName').value.trim();

        if (type === 'project') {
            const project = this.projects.find(p => p.id === id);
            if (project) {
                const startDate = this.getDateValue('editStart');
                const endDate = this.getDateValue('editEnd');

                // Validate dates
                if (!this.validateDates(startDate, endDate)) {
                    this.showToast('Slutdatum måste vara efter startdatum', 'error');
                    return;
                }

                this.pushUndoState();
                project.name = name;
                project.lead = document.getElementById('editLead').value.trim() || null;
                project.status = document.getElementById('editStatus').value;
                project.start = startDate;
                project.startType = document.getElementById('editStartType').value;
                project.end = endDate;
                project.endType = document.getElementById('editEndType').value;
                project.color = document.getElementById('editColor').value;
                project.comment = document.getElementById('editComment').value.trim() || null;
                this.scheduleAutoSave();
                this.showToast('Projekt uppdaterat!', 'success');
            }
        } else {
            const event = this.events.find(e => e.id === id);
            if (event) {
                const startDate = this.getDateValue('editEventStart');
                const endDate = this.getDateValue('editEventEnd');

                // Validate dates if end date exists
                if (endDate && !this.validateDates(startDate, endDate)) {
                    this.showToast('Slutdatum måste vara efter startdatum', 'error');
                    return;
                }

                // Check for collisions (excluding current event)
                const collisions = this.findDateCollisions(startDate, endDate, id);
                if (collisions.length > 0) {
                    const proceed = await this.showConfirm(this.formatCollisionWarning(collisions));
                    if (!proceed) return;
                }

                this.pushUndoState();
                event.name = name;
                event.start = startDate;
                event.startType = document.getElementById('editEventStartType').value;
                event.end = endDate || null;
                event.endType = endDate ? document.getElementById('editEventEndType').value : null;
                event.projectId = document.getElementById('editProject').value || null;
                event.symbol = document.getElementById('editSymbol').value || null;
                event.comment = document.getElementById('editComment').value.trim() || null;
                // Remove old format fields
                delete event.date;
                delete event.dateType;
                this.scheduleAutoSave();
                this.showToast('Händelse uppdaterad!', 'success');
            }
        }

        this.closeModal('editModal');
        this.render();
    }

    async handleDelete() {
        if (!await this.showConfirm('Är du säker på att du vill ta bort detta?', { danger: true })) {
            return;
        }

        const id = document.getElementById('editId').value;
        const type = document.getElementById('editType').value;

        this.pushUndoState();
        if (type === 'project') {
            this.projects = this.projects.filter(p => p.id !== id);
            // Also remove events associated with this project
            this.events.forEach(e => {
                if (e.projectId === id) {
                    e.projectId = null;
                }
            });
            this.scheduleAutoSave();
            this.showToast('Projekt borttaget!', 'info');
        } else {
            this.events = this.events.filter(e => e.id !== id);
            this.scheduleAutoSave();
            this.showToast('Händelse borttagen!', 'info');
        }

        this.closeModal('editModal');
        this.render();
    }

    async handleConvert() {
        const id = document.getElementById('editId').value;
        const type = document.getElementById('editType').value;

        this.pushUndoState();

        if (type === 'project') {
            // Convert project to event
            const project = this.projects.find(p => p.id === id);
            if (!project) return;

            const newEvent = {
                id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
                name: project.name,
                start: project.start,
                startType: project.startType || 'date',
                end: project.end,
                endType: project.endType || 'date',
                projectId: null,
                symbol: null,
                comment: project.comment
            };

            // Remove project and unlink its events
            this.projects = this.projects.filter(p => p.id !== id);
            this.events.forEach(e => {
                if (e.projectId === id) {
                    e.projectId = null;
                }
            });

            // Add the new event
            this.events.push(newEvent);
            this.scheduleAutoSave();
            this.showToast('Projekt konverterat till händelse!', 'success');

        } else {
            // Convert event to project
            const event = this.events.find(e => e.id === id);
            if (!event) return;

            const startDate = event.start || event.date;
            const endDate = event.end || event.start || event.date;

            const newProject = {
                id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
                name: event.name,
                lead: '',
                status: this.statuses[0]?.id || 'early',
                start: startDate,
                startType: event.startType || event.dateType || 'date',
                end: endDate,
                endType: event.endType || event.startType || event.dateType || 'date',
                color: this.areas[0]?.color || '#BA4A71',
                comment: event.comment
            };

            // Remove the event
            this.events = this.events.filter(e => e.id !== id);

            // Add the new project
            this.projects.push(newProject);
            this.scheduleAutoSave();
            this.showToast('Händelse konverterad till projekt!', 'success');
        }

        this.closeModal('editModal');
        this.render();
    }

    // Utilities
    getMonthName(month) {
        return this.labels.monthShortNames[month];
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Toast notifications
    showToast(message, type = 'success') {
        const toast = document.createElement('div');
        toast.className = `toast toast - ${type} `;
        toast.textContent = message;
        document.body.appendChild(toast);

        setTimeout(() => toast.classList.add('show'), 10);
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    // Undo support
    pushUndoState() {
        this.undoStack.push({
            projects: JSON.parse(JSON.stringify(this.projects)),
            events: JSON.parse(JSON.stringify(this.events))
        });
        if (this.undoStack.length > this.maxUndoSteps) {
            this.undoStack.shift();
        }
    }

    undo() {
        if (this.undoStack.length === 0) {
            this.showToast('Inget att ångra', 'info');
            return;
        }
        const state = this.undoStack.pop();
        this.projects = state.projects;
        this.events = state.events;
        this.saveData('timeline_projects', this.projects);
        this.saveData('timeline_events', this.events);
        this.render();
        this.showToast('Ångrade senaste ändringen', 'success');
    }

    // Auto-save with debounce
    scheduleAutoSave() {
        this.hasUnsavedChanges = true;
        if (this.autoSaveTimer) {
            clearTimeout(this.autoSaveTimer);
        }
        this.autoSaveTimer = setTimeout(() => {
            this.saveData('timeline_areas', this.areas);
            this.saveData('timeline_statuses', this.statuses);
            this.saveData('timeline_projects', this.projects);
            this.saveData('timeline_events', this.events);
        }, 500);
    }

    // Parse a date string (YYYY-MM-DD) as local date, avoiding UTC timezone shift
    parseDate(dateStr) {
        if (dateStr instanceof Date) return dateStr;
        if (!dateStr || dateStr === '') return new Date();
        const [y, m, d] = dateStr.split('-').map(Number);
        return new Date(y, m - 1, d);
    }

    // Date validation
    validateDates(startDate, endDate) {
        if (!startDate || !endDate) return true;
        return this.parseDate(startDate) <= this.parseDate(endDate);
    }

    // Check for date collisions with existing events
    findDateCollisions(startDate, endDate, excludeId = null) {
        if (!startDate) return [];

        const start = this.parseDate(startDate);
        const end = endDate ? this.parseDate(endDate) : start;

        return this.events.filter(event => {
            if (excludeId && event.id === excludeId) return false;

            const eventStart = this.parseDate(event.start || event.date);
            const eventEnd = event.end ? this.parseDate(event.end) : eventStart;

            // Check if date ranges overlap
            return start <= eventEnd && end >= eventStart;
        });
    }

    // Format collision warning message
    formatCollisionWarning(collisions) {
        const names = collisions.slice(0, 3).map(e => `"${e.name}"`).join(', ');
        const more = collisions.length > 3 ? ` och ${collisions.length - 3} till` : '';
        return `Det finns redan händelser på detta datum: ${names}${more}. Vill du fortsätta?`;
    }

    // Get status label
    getStatusLabel(status) {
        const found = this.statuses.find(s => s.id === status);
        return found ? found.name : status;
    }

    // PDF Export
    exportToPDF() {
        try {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();

            // Title
            doc.setFontSize(20);
            doc.text('Timeline', 20, 20);

            // Date
            doc.setFontSize(10);
            doc.text(`Exporterad: ${new Date().toLocaleDateString('sv-SE')} `, 20, 30);

            let yPos = 45;

            // Projects
            if (this.projects.length > 0) {
                doc.setFontSize(14);
                doc.text('Projekt', 20, yPos);
                yPos += 10;

                doc.setFontSize(10);
                this.projects.forEach((project, index) => {
                    if (yPos > 270) {
                        doc.addPage();
                        yPos = 20;
                    }

                    const startDate = this.parseDate(project.start).toLocaleDateString('sv-SE');
                    const endDate = this.parseDate(project.end).toLocaleDateString('sv-SE');
                    const status = this.getStatusLabel(project.status || 'implementation');

                    doc.setFont(undefined, 'bold');
                    doc.text(`${index + 1}. ${project.name} `, 20, yPos);
                    yPos += 6;

                    doc.setFont(undefined, 'normal');
                    if (project.lead) {
                        doc.text(`   Projektledare: ${project.lead} `, 20, yPos);
                        yPos += 5;
                    }
                    doc.text(`   Status: ${status} `, 20, yPos);
                    yPos += 5;
                    doc.text(`   Period: ${startDate} - ${endDate} `, 20, yPos);
                    yPos += 8;
                });
            }

            // Events
            const standaloneEvents = this.events.filter(e => !e.projectId);
            if (standaloneEvents.length > 0) {
                yPos += 5;
                if (yPos > 270) {
                    doc.addPage();
                    yPos = 20;
                }

                doc.setFontSize(14);
                doc.text('Händelser', 20, yPos);
                yPos += 10;

                doc.setFontSize(10);
                standaloneEvents.forEach((event, index) => {
                    if (yPos > 270) {
                        doc.addPage();
                        yPos = 20;
                    }

                    const startDate = this.parseDate(event.start || event.date).toLocaleDateString('sv-SE');
                    const endDate = event.end ? this.parseDate(event.end).toLocaleDateString('sv-SE') : null;

                    doc.setFont(undefined, 'bold');
                    doc.text(`${index + 1}. ${event.name} `, 20, yPos);
                    yPos += 6;

                    doc.setFont(undefined, 'normal');
                    if (endDate) {
                        doc.text(`   Period: ${startDate} - ${endDate} `, 20, yPos);
                    } else {
                        doc.text(`   Datum: ${startDate} `, 20, yPos);
                    }
                    yPos += 8;
                });
            }

            // Save PDF
            const filename = `Timeline - ${new Date().toISOString().split('T')[0]}.pdf`;
            doc.save(filename);
            this.showToast('PDF exporterad!', 'success');
        } catch (error) {
            console.error('PDF export error:', error);
            this.showToast('Kunde inte exportera PDF', 'error');
        }
    }


    async exportData() {
        try {
            // 1. Prep data (sync part) - Do this first to ensure we have data
            const data = {
                version: 1,
                exportDate: new Date().toISOString(),
                timelineRange: {
                    startYear: this.startDate.getFullYear(),
                    endYear: this.endDate.getFullYear()
                },
                areas: JSON.parse(JSON.stringify(this.areas)),
                statuses: JSON.parse(JSON.stringify(this.statuses)),
                projects: JSON.parse(JSON.stringify(this.projects)),
                events: JSON.parse(JSON.stringify(this.events)),
                labels: JSON.parse(JSON.stringify(this.labels))
            };

            const json = JSON.stringify(data, null, 2);
            if (!json || json === '{}' || json.length < 10) {
                throw new Error('Export-data är tom eller ogiltig.');
            }

            const defaultFilename = `timeline-${new Date().toISOString().split('T')[0]}.json`;

            // 2. Attempt modern "Save As" (File System Access API)
            if (typeof window.showSaveFilePicker === 'function') {
                try {
                    const handle = await window.showSaveFilePicker({
                        suggestedName: defaultFilename,
                        types: [{
                            description: 'JSON-fil',
                            accept: { 'application/json': ['.json'] }
                        }]
                    });

                    const writable = await handle.createWritable();
                    await writable.write(json);
                    await writable.close();

                    this.showToast('Fil sparad!', 'success');
                    this.hasUnsavedChanges = false;
                    return; // Success
                } catch (err) {
                    // If user cancelled, just stop
                    if (err.name === 'AbortError') return;

                    console.warn('showSaveFilePicker failed, trying fallback:', err);
                    // Continue to fallback
                }
            }

            // 3. Fallback for browsers without File System Access API or when it fails
            const blob = new Blob([json], { type: 'application/json;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = defaultFilename;
            a.style.display = 'none';

            // Append to body to ensure it works in all browsers
            document.body.appendChild(a);
            a.click();

            // Clean up
            setTimeout(() => {
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            }, 200);

            this.showToast('Fil nedladdad!', 'success');
            this.hasUnsavedChanges = false;

        } catch (error) {
            console.error('Export error:', error);
            this.showToast('Kunde inte exportera data: ' + error.message, 'error');
            await this.showAlert('Export misslyckades. Kontrollera konsolen för detaljer.');
        }
    }

    importData(e) {
        const file = e.target.files[0];
        if (!file) return;

        const isIcal = file.name.toLowerCase().endsWith('.ics');

        const reader = new FileReader();
        reader.onload = async (event) => {
            if (isIcal) {
                await this.importIcalData(event.target.result);
            } else {
                await this.importJsonData(event.target.result);
            }
        };

        reader.readAsText(file);
        e.target.value = ''; // Reset input so same file can be imported again
    }

    parseIcalDate(dateStr) {
        // Handle formats: YYYYMMDD or YYYYMMDDTHHMMSS or YYYYMMDDTHHMMSSZ
        if (!dateStr) return null;
        const clean = dateStr.replace(/[TZ]/g, '').substring(0, 8);
        if (clean.length !== 8) return null;
        const year = clean.substring(0, 4);
        const month = clean.substring(4, 6);
        const day = clean.substring(6, 8);
        return `${year}-${month}-${day}`;
    }

    parseIcalFile(icalText) {
        const events = [];
        const lines = icalText.replace(/\r\n /g, '').replace(/\r/g, '\n').split('\n');

        let currentEvent = null;

        for (const line of lines) {
            if (line === 'BEGIN:VEVENT') {
                currentEvent = {};
            } else if (line === 'END:VEVENT' && currentEvent) {
                if (currentEvent.summary && currentEvent.dtstart) {
                    events.push({
                        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
                        name: currentEvent.summary,
                        start: this.parseIcalDate(currentEvent.dtstart),
                        startType: 'date',
                        end: currentEvent.dtend ? this.parseIcalDate(currentEvent.dtend) : null,
                        endType: currentEvent.dtend ? 'date' : null,
                        projectId: null,
                        symbol: 'star',
                        comment: currentEvent.description || null
                    });
                }
                currentEvent = null;
            } else if (currentEvent) {
                const colonIndex = line.indexOf(':');
                if (colonIndex > 0) {
                    let key = line.substring(0, colonIndex).split(';')[0].toLowerCase();
                    const value = line.substring(colonIndex + 1);

                    if (key === 'summary') currentEvent.summary = value;
                    else if (key === 'dtstart') currentEvent.dtstart = value;
                    else if (key === 'dtend') currentEvent.dtend = value;
                    else if (key === 'description') currentEvent.description = value.replace(/\\n/g, '\n').replace(/\\,/g, ',');
                }
            }
        }

        return events;
    }

    async importIcalData(icalText) {
        try {
            const events = this.parseIcalFile(icalText);

            if (events.length === 0) {
                await this.showAlert('Inga händelser hittades i kalenderfilen.');
                return;
            }

            // Check for collisions with existing events
            let allCollisions = [];
            events.forEach(event => {
                const collisions = this.findDateCollisions(event.start, event.end);
                collisions.forEach(c => {
                    if (!allCollisions.find(ac => ac.id === c.id)) {
                        allCollisions.push(c);
                    }
                });
            });

            if (allCollisions.length > 0) {
                const msg = `${allCollisions.length} av de importerade händelserna krockar med befintliga händelser. Vill du fortsätta?`;
                const proceed = await this.showConfirm(msg);
                if (!proceed) return;
            }

            this.pushUndoState();

            // iCal imports always merge (add to existing)
            events.forEach(event => {
                this.events.push(event);
            });

            this.saveData('timeline_events', this.events);
            this.startDate = this.getStartDate();
            this.endDate = this.getEndDate();
            this.initTimelineRange();
            this.populateDateSelectors();
            this.render();

            this.showToast(`Import klar! ${events.length} händelser från kalenderfil.`, 'success');
        } catch (err) {
            console.error('iCal import error:', err);
            await this.showAlert('Kunde inte läsa kalenderfilen: ' + err.message);
        }
    }

    async importFromUrl() {
        const url = await this.showPrompt(this.labels.importUrlPrompt, '');
        if (!url || !url.trim()) return;

        let icalUrl = url.trim();

        // Convert webcal:// to https://
        if (icalUrl.startsWith('webcal://')) {
            icalUrl = icalUrl.replace('webcal://', 'https://');
        }

        try {
            this.showToast('Hämtar kalender...', 'info');

            // Use a CORS proxy for cross-origin requests
            // Try direct fetch first, then fall back to proxy
            let response;
            try {
                response = await fetch(icalUrl);
            } catch (corsError) {
                // Try with CORS proxy
                const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(icalUrl)}`;
                response = await fetch(proxyUrl);
            }

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }

            const icalText = await response.text();

            if (!icalText.includes('BEGIN:VCALENDAR')) {
                throw new Error('Ingen giltig iCal-data hittades');
            }

            await this.importIcalData(icalText);

        } catch (err) {
            console.error('iCal URL import error:', err);
            await this.showAlert(this.labels.importUrlError + '\n\n' + err.message);
        }
    }

    async importJsonData(jsonText) {
        let data;
        try {
            data = JSON.parse(jsonText);
        } catch (parseErr) {
            console.error('JSON parse error:', parseErr);
            await this.showAlert('Kunde inte läsa filen. Kontrollera att det är en giltig JSON-fil.');
            return;
        }

        if (!data.projects && !data.events) {
            await this.showAlert('Ogiltig fil: saknar projekt och händelser.');
            return;
        }

        // Ensure arrays exist
        data.projects = data.projects || [];
        data.events = data.events || [];

        try {
            this.pushUndoState();

            const mode = await this.showConfirm(
                'Vill du ersätta alla befintliga data?\n\n' +
                'OK = Ersätt allt\n' +
                'Avbryt = Lägg till (slå ihop med befintliga)',
                { confirmText: 'Ersätt allt', cancelText: 'Lägg till' }
            );

            if (mode) {
                // Replace all
                this.projects = data.projects;
                this.events = data.events;

                // Restore areas if present
                if (data.areas) {
                    this.areas = data.areas;
                    this.saveData('timeline_areas', this.areas);
                    this.populateAreaSelects();
                }

                // Restore statuses if present
                if (data.statuses) {
                    this.statuses = data.statuses;
                    this.saveData('timeline_statuses', this.statuses);
                    this.populateStatusSelects();
                }

                // Restore labels if present
                if (data.labels) {
                    this.labels = { ...DEFAULT_LABELS, ...data.labels };
                    this.saveData('timeline_labels', this.labels);
                    this.applyLabels();
                }

                // Restore timeline range if present
                if (data.timelineRange) {
                    this.timelineStartYear = data.timelineRange.startYear;
                    this.timelineEndYear = data.timelineRange.endYear;
                }
            } else {
                // Merge areas: add any that don't already exist
                if (data.areas) {
                    const existingColors = new Set(this.areas.map(a => a.color));
                    data.areas.forEach(a => {
                        if (!existingColors.has(a.color)) {
                            this.areas.push(a);
                        }
                    });
                    this.saveData('timeline_areas', this.areas);
                    this.populateAreaSelects();
                }

                // Merge statuses: add any that don't already exist
                if (data.statuses) {
                    const existingIds = new Set(this.statuses.map(s => s.id));
                    data.statuses.forEach(s => {
                        if (!existingIds.has(s.id)) {
                            this.statuses.push(s);
                        }
                    });
                    this.saveData('timeline_statuses', this.statuses);
                    this.populateStatusSelects();
                }

                // Merge - add imported items with new IDs to avoid conflicts
                const idMap = {};

                data.projects.forEach(project => {
                    const oldId = project.id;
                    const newId = Date.now().toString() + Math.random().toString(36).substr(2, 9);
                    idMap[oldId] = newId;
                    project.id = newId;
                    this.projects.push(project);
                });

                data.events.forEach(event => {
                    event.id = Date.now().toString() + Math.random().toString(36).substr(2, 9);
                    // Update project reference if it was imported
                    if (event.projectId && idMap[event.projectId]) {
                        event.projectId = idMap[event.projectId];
                    }
                    this.events.push(event);
                });
            }

            this.saveData('timeline_projects', this.projects);
            this.saveData('timeline_events', this.events);
            this.startDate = this.getStartDate();
            this.endDate = this.getEndDate();
            this.initTimelineRange();
            this.populateDateSelectors();
            this.populateAreaSelects();
            this.renderAreaList();
            this.populateStatusSelects();
            this.renderStatusList();
            this.setView('3months');

            this.showToast(`Import klar! ${data.projects.length} projekt och ${data.events.length} händelser.`, 'success');
        } catch (err) {
            console.error('Import processing error:', err);
            await this.showAlert('Ett fel uppstod vid import: ' + err.message);
        }
    }


    showModal(options = {}) {
        return new Promise((resolve) => {
            const overlay = document.getElementById('customModal');
            const titleEl = document.getElementById('customModalTitle');
            const bodyEl = document.getElementById('customModalBody');
            const input = document.getElementById('customModalInput');
            const zoomRow = document.getElementById('customModalZoomRow');
            const amountInput = document.getElementById('customModalAmount');
            const unitSelect = document.getElementById('customModalUnit');
            const cancelBtn = document.getElementById('customModalCancel');
            const confirmBtn = document.getElementById('customModalConfirm');

            if (!overlay || !titleEl) {
                console.error('Modal elements not found');
                resolve(null);
                return;
            }

            // Reset
            titleEl.textContent = options.title || '';
            input.style.display = options.type === 'prompt' ? 'block' : 'none';
            input.value = options.defaultValue || '';
            zoomRow.style.display = options.isZoom ? 'flex' : 'none';
            cancelBtn.style.display = options.type === 'alert' ? 'none' : 'block';

            cancelBtn.textContent = (options.type === 'confirm' && options.cancelText) ? options.cancelText : 'Avbryt';
            confirmBtn.textContent = (options.type === 'confirm' && options.confirmText) ? options.confirmText : (options.type === 'prompt' ? 'Spara' : 'OK');

            confirmBtn.className = 'custom-modal-btn ' + (options.danger ? 'custom-modal-btn-danger' : 'custom-modal-btn-primary');

            if (options.isZoom) {
                zoomRow.style.display = 'flex';
                // Try to determine best unit for existing days
                const days = options.days || 30;
                if (days >= 365) {
                    amountInput.value = Math.round((days / 365.25) * 10) / 10;
                    unitSelect.value = 'years';
                } else if (days >= 28) {
                    amountInput.value = Math.round((days / 30.4375) * 10) / 10;
                    unitSelect.value = 'months';
                } else if (days >= 7) {
                    amountInput.value = Math.round((days / 7) * 10) / 10;
                    unitSelect.value = 'weeks';
                } else {
                    amountInput.value = days;
                    unitSelect.value = 'days';
                }
            }

            overlay.classList.add('active');
            if (options.type === 'prompt') {
                input.focus();
                input.select();
            } else {
                confirmBtn.focus();
            }

            const cleanup = () => {
                overlay.classList.remove('active');
                confirmBtn.removeEventListener('click', handleConfirm);
                cancelBtn.removeEventListener('click', handleCancel);
                overlay.removeEventListener('click', handleOverlayClick);
                document.removeEventListener('keydown', handleKeyDown);
            };

            const handleConfirm = () => {
                let result;
                if (options.isZoom) {
                    const amount = parseFloat(amountInput.value);
                    const unit = unitSelect.value;
                    let days = amount;
                    if (unit === 'weeks') days = amount * 7;
                    if (unit === 'months') days = amount * 30.4375; // Average month
                    if (unit === 'years') days = amount * 365.25;

                    result = {
                        label: input.value,
                        days: Math.round(days)
                    };
                } else if (options.type === 'prompt') {
                    result = input.value;
                } else {
                    // For 'confirm' and 'alert'
                    result = true;
                }
                cleanup();
                resolve(result);
            };

            const handleCancel = () => {
                cleanup();
                resolve(null);
            };

            const handleOverlayClick = (e) => { if (e.target === overlay) handleCancel(); };

            const handleKeyDown = (e) => {
                if (e.key === 'Enter') handleConfirm();
                if (e.key === 'Escape') handleCancel();
            };

            confirmBtn.addEventListener('click', handleConfirm);
            cancelBtn.addEventListener('click', handleCancel);
            overlay.addEventListener('click', handleOverlayClick);
            document.addEventListener('keydown', handleKeyDown);
        });
    }

    async showPrompt(title, defaultValue, options = {}) {
        return await this.showModal({ ...options, type: 'prompt', title, defaultValue });
    }

    async showConfirm(title, options = {}) {
        return await this.showModal({ ...options, type: 'confirm', title });
    }

    async showAlert(title, options = {}) {
        return await this.showModal({ ...options, type: 'alert', title });
    }
}

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    new TimelineApp();
});

// Register service worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js')
            .then(registration => {
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            })
            .catch(err => {
                console.log('ServiceWorker registration failed: ', err);
            });
    });
}

