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
| Text button | `.btn-text` | Borderless action: "Collapse all", "Show all", "Add file 📎", grid tools. |
| Chip button | `.btn-chip` | Small green quick action, e.g. inline in a collapsible bar ("Load all", "In the last year"). |
| Button with menu | `.btn` > `.btn-menu` | Chevron segment after the label = the button opens a menu (More ⌄, Watch ⌄). |
| Direction icon | `.i.dir-out` (green ↗) / `.i.dir-in` (blue ↘) | Outgoing / incoming item. |
| Marker | `.marker` (`--marker` color) | Small colored square before a label (category, privacy). |
| File icon | `.file-icon` | Letter in a box (W, X, P…) for file type. |
| Value text | `.value-text` | Read-only value shown as plain text (no box), e.g. Active: Yes. |
| Input icon | `.input` > `.input-icon` | Trailing icon in an input, e.g. calendar on a date input. `.sel` = selected text. |
| Multiline sizes | `.input.multiline` (64px), `.multiline.short` (58px), `.multiline.tall` (138px) | Notes, descriptions, long text. |
| Small select | `.select.sm` | Compact select in pane footers. |
| Two-line clamp | `.clamp-2` | Long text in grid cells, cut after two lines. |
| Status icon: new | `.status-icon.new` | Yellow ✱, e.g. inside a status select. |
| Backdrop | `.backdrop` | Dims the page under a modal (not the tab strip or rail). |

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
| Segmented filter | `.segmented` > `.segment` (`.is-active`) | e.g. Comments (n) · Actions (n) · All. |
| File chip / file row | `.file-chip` (`.is-selected`), `.file-row` (`.is-selected`) | Attachment as a chip (name + size, `⋯` when selected) or as a row in a list. |
| Entry | `.entry` > `.entry-title` + `.entry-sub` + `.entry-meta` (+ `.entry-children`, `.entry-group-title`, `.entry-ref`) | Item in a related list: chevron, direction icon, bold title, route, meta right, nested files/references. |
| Tree node | `.tree-node` (`.is-selected`), `style="--level:n"` | Chevron (open / closed / blank), doc icon, wrapped label, divider; selected = green left bar + bold. |
| Comment | `.comment` (`.is-selected`) > `.comment-head` + `.comment-text` (+ `.comment-actions`) | Selected comment is outlined and shows Delete / Copy / … actions. |
| Empty state | `.empty-state` > `.i` + `.t` + `.s` | Large green icon, bold message, detail line. |
| Range chip | `.chip` > `.chip-value.has-caret` + `.chip-value.boxed` + `.dash` + `.chip-value.boxed` | Preset + from/to values in one filter chip. |
| Breadcrumb | `.crumbs` > `.crumb` (`.is-current`, `.is-dirty`) | Arrow steps; earlier levels green, current outlined, `*` = unsaved. |
| Grid tools | `.grid-tools` > `.filter-link` + `.btn-text`… | Filter · Show row details · Float. |

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
| Tree nav | `.tree-nav` > `.tree-nav-header` + `.tree-node`… | Hierarchy of a record and its children; goes in the shell sidebar. |
| Pane | `.pane` > `.pane-header` (+ `.tools`) + `.pane-toolbar` + `.pane-body` + `.pane-footer` | Column with its own header/toolbar; e.g. a related-entries list in the sidebar. |
| Preview | `.preview` > `.preview-head` + `.preview-files` + `.preview-body` (`.preview-page` or `.empty-state`) | White document viewer with title, status, file chips. |
| Activity | `.activity` > `.tab-pills` + `.activity-filters` (segmented + gear) + comment input + `.comment`… | |
| Modal | `.backdrop` + `.modal` > `.modal-crumbs` + `.modal-body` + `.modal-actions` | Sheet over the page for creating/editing a child item; own breadcrumb and action bar (Save · Undo · Back). |
| Active grid row | `table.data-grid tr.is-active` | Selected + current row: solid green, white text. |
| Inline grid editing | `td.is-editing` (holds `.input` / `.select` / `.lookup` at 24px), `tr.is-new`, `td.fill.has-error-tip` | The row being edited shows controls in its cells; the last row is an italic "Type to add …" placeholder; an invalid cell's error tip sits in the fill column so it covers no other control. |
| List in a pane | `.pane-body > .tile-list`, `.pane-body > .empty-state` | Fills the pane body and scrolls on its own. `.scrollbar-v.is-scrolled` draws a scrolled thumb in static pictures. |

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
