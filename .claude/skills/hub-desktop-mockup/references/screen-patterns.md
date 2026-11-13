# Screen patterns

The app has six kinds of screens. Pick one before you start; each has a template in `assets/`.

| Kind | Launcher icon | Template | Typical footer |
|---|---|---|---|
| Home launcher | — | `template-home.html` | `→ Open` · `✎ Edit` |
| Report | magnifier | `template-report.html` | `Preview` `Print` |
| Search (entry point of a record form) | grid | `template-search-cards.html`, `template-search-grid.html` | `Open` `Export` `Google Earth` `Show on map` `Clear` · `+ New` |
| Record form | (opened from a search) | `template-record.html` | `Drive`(disabled) `Google Earth` `Show on map` `✎ Edit` |
| Process form | lightning ⚡ | `template-process.html` | `Open` `Select` `Unselect` `Remove…` · `⚡ Update` |
| Reference form (simple lookup table) | grid | `template-reference.html` | `✎ Edit` only |

`template-components.html` is a gallery of every standard control and its states. Use it as a parts bin, and as the source for Figma components.

> The templates contain **made-up sample data**. They describe how the components look and behave, not real records. Keep it that way: never copy real names, numbers or business data from screenshots into mockups.

---

## 1. Home launcher

The first screen. Shows **cards of the forms the current user has access to**, grouped by module.

- Header panel: search box (typing filters the cards live) + filter funnel + `Ctrl+T` hint.
- Content: wrapping row of `.card`s (288×383, 36px gap). Header = module name. Body = list of `.card-item`s; long names truncate with `…`.
- Item icon tells the form kind: grid = maintenance form with a search, magnifier = report, ⚡ lightning = process form, none = plain.
- Selected item: light green row. Opening an item adds a tab and switches to it.

## 2. Report

Tab title `Name [Report]`. Header panel shows the report name.
Two group panels side by side: **Report Criteria** (green header, primary) with filters, and **Output** (grey header) with output options. Footer: `Preview`, `Print`.

## 3. Search (e.g. Event Search)

Opening a record-form module first shows its search. Tab has a search icon (`Events`).

- **Search panel** (header panel, ~124px): a full-width search box (`Search events` placeholder, `×` clear, `ⓘ` info) followed by three square green buttons: **search**, **clear**, **more (…)**. Below it, the **criteria chip row** (grey strip): green `>` expander and a chip per active filter: `[Label | value ▾ | ×]`.
- **Result sections**, each a collapsible bar (`.section`): `No results`, `All results (77)`, `Recent (15)`. Only the relevant ones are open.
- Each result section can show **cards** or a **grid**; the toggle (☰ / ▦) is on the right of the section bar.
  - Cards (`.rcard`, 3 per row, 430px): grey header `CODE Name` truncated with `…`; body with label/value pairs in two columns. Hover/selected card shows a checkbox in the header and a darker border.
  - Grid (`table.dgrid`): checkbox column, column headers with vertical separators, 30px rows, ✓ for booleans, selected row grey-green, focused row dashed outline, horizontal scrollbar at the bottom.
- Double-click / `Open` opens the record form in a new tab. `+ New` creates a record.

## 4. Record form (e.g. Event Form)

The main maintenance screen. Tab title = record code + name (truncated).

- **Header panel** (~80px): title `Entity: CODE Name` (20px). Top-right: ⚙ settings, ↗ share. Bottom-right: **jump links**, one per section (12px). Clicking one scrolls to and expands that section.
- **Sections** = the form's top-level areas (General, Key dates, Budget, …). Each is a **collapsible bar** (`.section`, add `.open` to expand): chevron + bold name. When open, a 📌 pin appears on the right (pins the section open).
  - All-collapsed is a valid state: a stack of bars, one per section (useful to show the form's structure).
- **Inside an open section**: two **resizable columns** of group panels separated by a **splitter** with a grip (`.columns` > `.col` + `.splitter` + `.col`). Wide panels (grids, summaries) go full width below (`.group.full`).
- **Group panels** in record forms have **grey headers** (`#DCDCDC`, dark text). Header may carry an action button on the right (e.g. export to Excel `.icon-btn`). Header text can include context, e.g. `Condition of X as of March 4, 2025`.
- **Fields**: 2–4 column grid. Read mode shows values inside light-bordered boxes (`.input.ro`); edit mode uses normal borders; the focused field has a darker border. Numbers are right-aligned. Ranges (`Start date — End date`, `Latitude — Longitude`) are two fields with a dash.
- **Sub-groups** (statistics style, see *Disaster statistics*): a bold sub-title (`.subgroup-title`) followed by an **indented** 3-column grid of numeric fields. A value may show a secondary count in parentheses: `7 (2)`. Use this for any dense numeric breakdown.
- **Embedded grids** (`table.mini`): `▽ Filter` link above, bold headers with separators, `Records (n)` italic footer row. Optional controls above the grid on the right (e.g. `Currency view: ○ Geo currency ● USD`).
- Footer: external actions on the right (`Drive` disabled when there is no link, `Google Earth`, `Show on map`) and `✎ Edit`. In edit mode: `Cancel` (outline, left) + `Save` (primary, right).

### Settings-style record forms (e.g. User Preferences)
Same record-form shell (header `Entity: NAME`, tab `NAME [User Preferences]`, jump links, collapsible sections, two columns + splitter, `✎ Edit` only in the footer). The panels use settings controls: option previews, vertical radio lists, checkbox trees. In read mode everything is shown with the `.ro` look.

## 5. Process form (e.g. a selection/assignment process)

Action-oriented forms with no record search. They are the most interactive screens; take care with states (empty → criteria set → results → selection in progress → ready to update).

- **Criteria panel** (header panel):
  - **Criteria bar**: green `⌄` expander (expanded) or `>` (collapsed), then chips for the set criteria (`[Label | value | ×]`, no caret), or a dashed `Criteria not set` placeholder when empty. On the right: square green **search / clear / more** buttons.
  - **Criteria editor** (shown when expanded): small green **pill tabs** (`General`, …) with a pointer below the active one and a line under the row; 📌 pin on the right. Fields in a 3-column grid: inline-search lookups, `All / Yes / No` radio groups.
- **Body**: narrow left column (~394px) + splitter + wide right column.
  - Left: a grey-header group holding a **scrollable tile list** (`.tile`, e.g. one per week with a summary line); below it a **progress panel** (no header bar: title, bold label, `.progress` bar with `33%  2/6` centered).
  - Right: a grey-header group with a **context line** (the chosen record) on the left, **filter fields** on the right (`ⓘ Week`, `Status`), then `▽ Filter` + grid with checkbox column and `!` (warnings) column, `Records (n)` at the bottom.
- Footer: outline action buttons on the left (`Open`, `Select`, `Unselect`, `Remove final selection`), with the **access key letter underlined**; primary `⚡ Update` on the right. Disabled until there is something to apply.

## 6. Reference form (simple lookup table)

Many sections/modules are just a maintained list of codes (statuses, types, categories). No search, no sections, little logic.

- Header panel: title only (+ share arrow). Tab title = the list name.
- Content panel holds one **sheet** (`.ref-sheet`) filling the panel (30px margin): `▽ Filter`, then a grid (`table.mini.ref`) with a checkbox column, columns that **hug their content** (an empty filler column takes the rest), **zebra rows** (34px, white / #F5F5F5), a `•••` column-menu on the sort column header, and `Records (n)` at the bottom of the sheet.
- Footer: only `✎ Edit`. In edit mode the grid cells become inputs and the footer shows `Cancel` + `Save`.
- Prefer this pattern whenever the request is "a list of X with code + description". Don't add search or sections it doesn't need.

---

## Standard controls (all in `template-components.html`)

| Control | Markup | Behaviour to show |
|---|---|---|
| Field label | `.field > label` | 12px. Optional leading `ⓘ` (`.info`) or trailing `?` (`.help`) icon. |
| **Required** | `label.required` | Bold label followed by a small dot `•`. Same rule in search criteria and in form sections. |
| **Invalid** | `.input.invalid` + `<span class="err">` in the label + `.error-tip` | Red border, red ▲ after the dot (`Event • ▲`), red tip box to the right of the input with the message (`Event is required.`). |
| Text input | `.input` / `.input.ro` / `.input.focus` / `.input.num` | Read / edit / focused / right-aligned numeric (`.sub` for `(n)`). |
| Dropdown | `.select` + `.caret` | Static box with small solid caret. |
| **Inline search (lookup)** | `.lookup` > `.input` + `.adorn` (× ⓘ green `…`) + `.lookup-popup` | Typing (or `*` for everything) opens a popup **grid** under the field with the matching records; selected row is solid green with white text. `…` opens the full search. |
| Date / number range | two fields + dash | |
| Checkbox / radio group | `.check`, `.radio` (`.checked`) | `All / Yes / No` is the standard tri-state filter. |
| Criteria chip | `.chip` (+ `.chip-value`, `.chip-x`), `.chip.placeholder` | |
| Collapsible section | `.section(.open)` > `.section-bar` + `.section-body` | Chevron rotates; pin when open. |
| Group panel | `.group` > `.group-header(.secondary)` + `.group-body` | Green = primary (reports), grey = default in record/process forms. |
| Sub-group | `.subgroup` > `.subgroup-title` + `.fields` | Indented fields. |
| Grids | `table.dgrid` (search results), `table.mini` (embedded), `table.mini.ref` (reference sheet), `.lookup-popup table` | |
| Vertical option list | `.option-list` of `.option` (radio or check) | Settings-style choices stacked vertically, 12px text. |
| Checkbox tree | `.check-tree` > parent `.check` + indented `.option-list` | Parent toggles a group of child options. |
| Option preview | `.preview-thumb` (+ `.accent`, `.panel`, `.note`) | Small illustration above an option group showing what the setting does. |
| Read mode | wrap a group body in `.ro` | Unselected options fade (light boxes, grey text); selected ones keep the green dot/tick and dark text; a checked checkbox shows only the tick. |
| Tile, progress | `.tile`, `.progress` | |
| Tooltip | `.tooltip`, `.tab-tooltip` | Dark green; shows the full text of truncated labels and tab titles. |
| Buttons | `.btn.primary`, `.btn.outline`, `[disabled]`, `<u>` access key, `.icon-btn` | |
