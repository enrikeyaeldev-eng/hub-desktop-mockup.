# Event module (the team's main area)

The team mainly maintains the **Event** module. This file records its *structure* only, not data. Use made-up sample values in mockups. Component names come from `components.md`; layouts from `layouts.md`.

## Flow

1. A grid menu item opens the **Events** tab: search layout (`layout-search-cards.html` / `layout-search-grid.html`). Default chip `Canceled = No`; collapsibles `All results (n)` (usually base data grid) and `Recent (n)` (usually info cards).
2. Opening a result adds a tab `CODE Name` with the event record: collapsible-sections layout (`layout-collapsible-sections.html`).
3. ⚡ menu items in the event menu card open action flows: filter-bar + sidebar layout (`layout-filter-sidebar.html`).

## Event record: collapsibles (in order)

Each also appears in the jump nav:

General · Person resources · Key dates · Disaster surveys · Disaster statistics · Reports · Budget · Risk incident reports · Projects · Financial · Accommodations · Congregations and groups · Documents

- **General**: split halves. Left: panels *Main* (names, type, series, host branch, geo location, city, date ranges, latitude–longitude) and *Website details*. Right: smaller panels (intensity, venue/attendance numbers, codes, an embedded grid). Below, full width: a panel with an embedded grid, Excel export icon button and a currency option group.
- **Disaster statistics**: split halves of panels titled `Condition of … as of <date>`, each made of **field groups** with right-aligned numeric inputs, some with a secondary value `n (n)`.

## Action bar
Right side: `Drive` (disabled when there is no folder), `Google Earth`, `Show on map`, `Edit`.

## Action flows
Example: a selection flow. Chip bar + filter editor (event series and event lookups, `All / Yes / No` option groups); sidebar with a tile list (one tile per week) and a progress bar; main panel with grid toolbar and embedded compact grid. Outline `Open / Select / Unselect / Remove final selection`, primary `Update`.
