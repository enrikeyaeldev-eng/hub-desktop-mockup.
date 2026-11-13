# Components (atomic)

Every component is named for **what it is**, never for the screen where it was first seen. A stat equation is a "stat equation" whether it sits on a person, an event or a budget. All classes live in `assets/hub.css`. `assets/components.html` shows each one with its states and class names.

## Naming rules

- Block: `.panel`, `.chip`, `.data-grid`. Parts: `.panel-header`, `.chip-value`. Variants: plain extra class (`.accent`, `.compact`, `.vertical`, `.sm`).
- **States always use `is-*`**: `is-checked`, `is-selected`, `is-active`, `is-open`, `is-current`, `is-readonly`, `is-focused`, `is-invalid`, `is-placeholder`, `is-empty`, `is-pinned`, `is-blank`. Disabled buttons use the `disabled` attribute.
- `.is-readonly` works on a single control **or** on any container (then every option and checkbox inside fades).
- New components follow the same rules. Pick the lowest level that fits, add the class to the right section of `hub.css`, and add a card to `components.html`.

---

## Atoms

| Atom | Class | Notes |
|---|---|---|
| Icon | `.i` (`.fill`, `.is-blank`) | `<svg class="i"><use href="#i-name"/></svg>`, from the sprite at the top of every page. Thin 1.5px line style. |
| Button | `.btn.primary`, `.btn.outline`, `[disabled]`, `<u>` | Always icon + label. `<u>` underlines the access-key letter. |
| Icon button | `.btn-icon` | Small outlined square, e.g. export / copy in a panel header. |
| Square button | `.btn-square` (`.wide`, `.sm`) | Filled green square attached to inputs and bars (search, clear, more `…`). |
| Text input | `.input` (`.is-readonly`, `.is-focused`, `.is-invalid`, `.num`, `.multiline`, `.is-placeholder`) | 26px. Read mode = light border. `.num` right-aligns; `.secondary-value` shows `(n)`. |
| Select | `.select` + `.caret` | Static box with small solid caret. |
| Checkbox / radio | `.checkbox`, `.radio` (`.is-checked`) | |
| Label parts | `label.is-required`, `.label-icon.lead` / `.trail`, `.error-mark` | Required = bold + `•`. Invalid = red `▲` after the dot. Info icon leads, help icon trails. |
| Tag | `.tag` | Small boxed word next to a name (e.g. a status). |
| Pill | `.pill` (`.muted`) | Rounded status label inside grids. |
| Status icon | `.status-icon.ok` / `.bad` (`.lg`) | Green ✓ / red ! circles that flag a value. |
| Avatar | `.avatar` (`.sm`) | Round placeholder with silhouette. |
| Tooltip | `.tooltip` (`.has-arrow`) | Dark green; full text of truncated labels/tab titles. |
| Error tip | `.error-tip` | Red box to the right of an invalid input with the message. |
| Dash | `.dash` | Separator in ranges. |
| Progress | `.progress` > `.progress-fill` + `.progress-text` | |
| Splitter | `.splitter` | Draggable divider with grip between columns. |
| Scroll indicators | `.scroll-hint`, `.scrollbar-v`, `.scrollbar-h` | |
| Text | `.link`, `.hint`, `.dots` | `.dots` = column-menu `•••` in grid headers. |

## Molecules

| Molecule | Class | Notes |
|---|---|---|
| Field | `.field` > `label` + control (`.span-2`, `.span-3`) | Label 12px above the control. |
| Range | `.range` (two inputs in one field) / `.range-fields` (two labelled fields + dash, spans 2 columns) | |
| Option group | `.option-group` (`.vertical`) > `.option` | `All / Yes / No` is the standard tri-state filter. Vertical = settings-style list. |
| Checkbox tree | `.check-tree` > `.checkbox` + `.option-group.vertical` | Parent toggles indented children. |
| Lookup | `.lookup` > `.input` + `.lookup-adorn` (+ `.error-tip`, `.lookup-popup`) | Inline search: `×` `ⓘ` and green `…`. Typing (or `*`) opens a popup **grid**; selected row solid green. Never draw a lookup as a plain dropdown. |
| Chip | `.chip` > `.chip-value` (`.has-caret`) + `.chip-remove`; `.chip.is-empty` | Active filter `[Label │ value │ ×]`; empty = dashed "Criteria not set". |
| Search input | `.search-input` | Wide box, placeholder, `×` `ⓘ`, then square buttons search / clear / more. |
| Quick search | `.quick-search` | Compact, green underline, clear + filter funnel, `Ctrl+T` hint next to it. |
| Grid helpers | `.filter-link`, `.grid-footer` (`.is-pinned`), `.view-toggle` | `▽ Filter` above grids, italic `Records (n)` below, list/tiles toggle. |
| Key/value | `.kv-list` (dl), `.kv-pairs` > `.kv-pair` | |
| Total list | `.total-list` (`.n`, `.rule`) | Lines, a rule, then the total. |
| Stat | `.stat` > `.stat-value` (`small`) + `.stat-label` | Big light green number, small grey decimals. |
| Stat text | `.stat-text` > `.stat-text-label` + `.stat-text-value` | Bold label, large light value. |
| Contact item | `.contact-item` > `.i` + `.l`/`.v` (+ `.link`) | |
| List tile | `.list-tile` (`.is-active`) | Title + summary line. |
| Menu item | `.menu-item` (`.is-selected`) > `.i` + `.t` | Icon tells the kind of form it opens: report / grid / ⚡ bolt / none. |
| Tab pills | `.tab-pills` > `.tab-pill` (`.is-active`) + `.pin` | Small in-panel tabs with a pointer. |
| Option preview | `.option-preview` | Illustration above an option group showing what a setting does. |
| Feedback | `.feedback` | ☹ 😐 ☺ in a corner. |

## Organisms

| Organism | Class | Notes |
|---|---|---|
| Panel | `.panel` > `.panel-header` (`.accent`) (+ `.panel-actions`) + `.panel-body` (`.tight`); `.panel.headless` | Header grey by default; `.accent` (green) only for the one primary panel of a side-by-side layout. Headless = plain white card. |
| Field group | `.field-group` > `.field-group-title` + `.field-grid` | Bold title, indented fields; for dense numeric breakdowns. |
| Collapsible | `.collapsible` (`.is-open`) > `.collapsible-bar` (+ `.collapsible-tools`) + `.collapsible-body` (`.flush`) | Chevron + bold title; 📌 pin / view toggle on the right. |
| Data grid | `table.data-grid` (`.embedded`, `.compact`, `.striped`); rows `.is-selected` / `.is-focused`; cells `.center` `.num` `.fill` | Base = large results grid (fixed columns, checkbox column, dashed focused row). Embedded = inside a panel, columns hug content + `.fill`. Striped = zebra rows. |
| Chip bar | `.chip-bar` (`.tall`) > `.chip-bar-toggle` + chips (+ square buttons) | Grey strip; toggle `>` closed / `⌄` open. |
| Filter editor | `.filter-editor` > `.tab-pills` + `.field-grid` | Opens under a chip bar; 3 columns of lookups and option groups. |
| Info card | `.info-card` (`.is-selected`) > `.info-card-header` + `.info-card-body` | Grey truncated title, key/value pairs; selected = checkbox + border. |
| Menu card | `.menu-card` > `.menu-card-header` + `.menu-card-body` | Green centered title, list of menu items. |
| Identity header | `.avatar` + `.identity` > `.identity-name` (+ `.tag`s) + `.identity-sub` + `.identity-stats` | Usually inside a headless panel. |
| Stat equation | `.stat-equation` > `.stat-breakdown` (`.plain`) + `.stat-operator` | Breakdown = label, big centered value (+ status icon), rows of label → value. |
| Contact card | `.contact-head` + `.contact-columns` > `.contact-item` | |
| Tile list | `.tile-list` > `.list-tile` + `.scrollbar-v` | |
| Grid toolbar | `.grid-toolbar` > `.context` + fields | Context text left, filter fields right. |
| Jump nav | `.jump-nav` (`.wrap`) > `a` (`.is-current`) | One link per collapsible. |

## Layout primitives

| Primitive | Class | Notes |
|---|---|---|
| Field grid | `.field-grid` (`.cols-1`, `.cols-3`, `.cols-4`) | 20px column gap, 14px row gap. |
| Panel grid | `.panel-grid` (`> .span-2`) | Panels side by side, 30px gaps. |
| Split | `.split.halves` / `.split.sidebar` > `.split-col` + `.splitter` + `.split-col` | `.panel.grow` fills a column; `.full-width` for a panel under a split. |
| Card wrap / card grid | `.card-wrap`, `.card-grid` | Wrapping menu cards / 3 info cards per row. |
| Stack | `.stack` | Vertical list of collapsibles. |
| Sheet | `.sheet` | One surface filling the page body (e.g. a single grid). |

The shell (window, tab strip, page header, page body, action bar, rail) is described in `shell.md`.
