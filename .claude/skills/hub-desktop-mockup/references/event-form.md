# Event Form (the team's main form)

The team mainly maintains the **Event** module. This file records its *structure* only — not data. Use made-up sample values in mockups.

## Flow

1. Home → card item opens the **Events** tab = **Event Search** (`template-search-cards.html` / `template-search-grid.html`).
2. Search with free text + criteria chips (default chip: `Canceled = No`). Results show in `All results (n)` (usually as grid) and `Recent (n)` (usually as cards).
3. Opening a result adds a tab `CODE Name` with the **Event Form** (`template-record.html`).

## Event Form sections (in order)

These appear both as jump links in the header and as collapsible section bars:

General · Person resources · Key dates · Disaster surveys · Disaster statistics · Reports · Budget · Risk incident reports · Projects · Financial · Accommodations · Congregations and groups · Documents

### General (shape)
- Left column: **Main** (name, local name, type, series, host branch, geo location, city, start–end date, closed/canceled date, latitude–longitude), **Website details**.
- Right column: smaller panels (intensity, venue/attendance numbers, codes, a committees grid).
- Full width below: a cost summary grid with Excel export and a currency-view radio.

### Disaster statistics (shape) — reference for dense numeric sections
- Group panels titled `Condition of … as of <date>`, two columns with a splitter.
- Each panel has **sub-groups** (bold sub-title, indented 3-column grid of right-aligned numeric fields).
- Values may carry a secondary count: `1 (0)`.

## Footer (Event Form)
Right side: `Drive` (disabled when no folder), `Google Earth`, `Show on map`, `✎ Edit`.

## Process forms related to events
Launched from an **Event Management** card (⚡ items). Example shape: a selection process with criteria (event series, event, All/Yes/No filters), a week tile list + progress on the left, applicant grid on the right, `Select / Unselect / Remove final selection` and `⚡ Update` in the footer. See `template-process.html`.
