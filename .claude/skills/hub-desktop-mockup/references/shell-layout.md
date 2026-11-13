# Shell layout (window chrome)

Every screen is drawn inside the same window. Measurements are from 1916×1028 screenshots of the real app; the mockup canvas is 1920×1030.

```
┌──────────────────────────────────────────────────────────────┬──────┐
│ [⌂ CORE USA][🔍 Event Reports][Kitchen Menu [Report] ×]   ▮ 👤 – ▢ × │  ← tab strip, 42px, bg --shell-bg
├──────────────────────────────────────────────────────────────┼──────┤
│ ┌──────────────────── header panel ──────────────────────┐   │ rail │
│ │ search box  (Home)   |   Form title ......... ↗ (form) │   │ 74px │
│ └────────────────────────────────────────────────────────┘   │      │
│ ┌──────────────────── content panel ─────────────────────┐   │ icons│
│ │ cards / group panels / sections                        │   │      │
│ │                                                        │   │      │
│ └────────────────────────────────────────────────────────┘   │      │
├──────────────────────────────────────────────────────────────┤      │
│ [→ Open]                              [Preview] [Print]      │ logo │  ← footer bar, 62px
└──────────────────────────────────────────────────────────────┴──────┘
```

## Tab strip (top, full width, 42px)

- Background `--shell-bg` (#D4D4D4). Tabs start 17px from the left, top 8px, height 34px.
- **Home tab:** filled `--primary` (#3B5D55), white home icon + label in UPPERCASE, 12px semibold (e.g. `CORE USA` — the company/site name). Always first, never closable.
- **Other tabs:** ~200px wide, `--tab-bg` (#E5E5E5), 3px `--primary` top border, 12px text with a leading icon (search icon for search/list screens). Tabs for opened forms show a `×` on the right.
- Tab titles carry a suffix for the form kind: `Name [Report]`, `NAME [User Preferences]`. Search tabs have a search icon. Long titles are cut off at the tab width.
- **Active tab:** background `--surface` (#FAFAFA) so it merges with the header panel below. On hover/just-opened, a dark-green tooltip bubble with the full tab title appears under it.
- Right side of the strip: screen-recording icon, user avatar (circle outline, 30px), then the Windows window controls (– ▢ ×) in grey.

## Right rail (74px wide, from below the tab strip to the bottom)

- Vertical gradient `--rail-top` (#2D4741) → `--rail-bottom` (#5B8077).
- White line icons, ~28px, centered, ~77px apart, in this order:
  1. Task list with a small italic count underneath (e.g. `1646`) — the work queue.
  2. Wrench — tools/settings.
  3. Warning triangle — alerts.
  4. Flag with a `9+` superscript badge — notifications.
  5. Question mark in circle — help.
  6. `AI` with a small `BETA` + sparkle — AI assistant.
  7. Screen with magnifier — find/inspect.
  - Bottom: the brand mark (a stylised waveform in brackets) on a lighter area.
- Do not change the rail unless the mockup is about it.

## Main column

- Background `--canvas` (#D1D1D1), 17px outer padding (11px is also seen; use 17px).
- **Header panel:** `--surface` (#FAFAFA), soft shadow.
  - Home: 90px tall, contains the search box (360×40) with clear `×` and filter funnel, then a grey `Ctrl+T` hint.
  - Report: 55px tall, form title at 20px regular `--text-muted-strong` (#444); share arrow on the far right.
  - Search: ~124px, full-width search box + criteria chip row (see screen-patterns.md).
  - Record form: ~80px, title `Entity: CODE Name`, ⚙ + ↗ top-right, jump links bottom-right.
  - Process form: criteria bar + collapsible criteria editor (height grows with the criteria).
- 25px gap.
- **Content panel:** `--content-bg` (#F5F5F5), soft shadow, fills down to ~18px above the footer. Scrolls vertically; on Home, small chevron scroll hints (⌃ ⌄) appear at the top/bottom right.
  - On search and record forms the content is a **stack of collapsible section bars** instead of one panel (`.content-panel.stack`).

## Footer action bar (62px, bottom, main column width)

- `--surface` background, separated from the content by the canvas color.
- Buttons are 40px tall, 4px radius, 17px from the edges, 8px apart.
- Left: outlined secondary buttons (`→ Open`), grey 1.5px border, grey semibold text.
- Right: filled primary buttons with white icon + semibold label (`✎ Edit`, `Preview`, `🖨 Print`, `Save`).
