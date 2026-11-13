# Layouts

A layout = **shell** (`shell.md`) + a **page-header variant** + organisms arranged with layout primitives (`components.md`). The example files in `assets/` are named by structure. Start from the closest one and swap organisms in and out. Any organism can go in any layout.

| Example | Page header | Page body | Typical action bar |
|---|---|---|---|
| `layout-menu-cards.html` | `.has-quick-search` | `.card-wrap` of menu cards | Open · Edit |
| `layout-panels-side-by-side.html` | title only | `.panel-grid`: accent panel + default panel | Preview · Print |
| `layout-search-cards.html` | `.has-search` (search input + chip bar) | `.stack` of collapsibles; `.card-grid` of info cards | Open, Export, Google Earth, Show on map, Clear · New |
| `layout-search-grid.html` | `.has-search` | `.stack`; collapsible with base `data-grid` | same |
| `layout-collapsible-sections.html` | `.has-nav` (title + jump nav) | `.stack` of collapsibles; `.split.halves` of panels; field groups; embedded grids | Drive (disabled), Google Earth, Show on map · Edit |
| `layout-collapsible-sections-stats.html` | `.has-nav.long-nav` (wrapping nav) | collapsibles holding headless panels with identity header / stat equation, plus a contact card panel | Edit |
| `layout-filter-sidebar.html` | `.has-search` (chip bar + filter editor) | `.split.sidebar`: tile list + progress / panel with grid toolbar and grid | Open, Select, Unselect, Remove… · Update |
| `layout-single-grid.html` | title only | `.sheet` with one striped grid | Edit |
| `layout-tree-sidebar.html` | `.has-nav` + shell **sidebar** with tree nav | `.stack` of collapsibles; panels with value text, long notes, embedded grids with clamped cells | Open (outline) · Edit |
| `layout-three-panes.html` | none (`.page.bare`) + shell **sidebar** with a pane of entries | `.panes`: preview + activity pane | More ⌄, AI suggestions, Duplicate, Watch ⌄, Notify, Reply, Forward ⌄, New |
| `layout-edit-mode.html` | `.has-nav` | collapsibles in **edit state**: editable inputs, date input with selection, grid tools, active grid row | More ⌄, New applicant, Update selection ⌄, Delete, New, Save (disabled until changed), Undo |
| `layout-modal.html` | same page dimmed | `.backdrop` + `.modal` with breadcrumb and its own action bar | Save · Undo · Back (inside the modal) |

## Composition rules

- The **action bar** is always there; the **page header** too, except on a bare page (three panes), where the preview carries the title. Primary buttons go on the right of the action bar; outline buttons go on the left.
- **Collapsibles**: one per area of a record, all collapsible, each with a matching link in the jump nav. All collapsed is a valid state.
- Inside a collapsible: default to `.split.halves` with grey panels, wide panels below with `.full-width`.
- **Headless panels** with identity header / stats / stat equation are for at-a-glance summaries. Use them in a collapsible, usually the first one. Everything else stays in standard grey panels.
- **Read mode vs edit mode**: read = `.is-readonly` inputs + Edit button; edit = normal inputs + Cancel (outline) / Save (primary).
- **Simple lists** (code + description): use the single-grid sheet. Don't add search or collapsibles they don't need.
- **Action-oriented flows** (select, assign, approve): a chip bar + filter editor header, and `.split.sidebar` for a list/progress beside the main grid. Disable the primary action until there is something to apply.
- **Hierarchies** (a record with nested children, e.g. versions → variants → translations): shell sidebar with a tree nav; the page shows the selected node.
- **Reading/working on one item with context**: three panes. Related entries in the sidebar, the item preview in the middle, activity/comments on the right.
- **Creating or editing a child item without leaving the parent**: a modal over the dimmed parent, with a breadcrumb `Parent › * New child (new)` and Save / Undo / Back. Show the parent in its current state underneath.
- **Search results with many matches**: a message in the collapsible bar plus chip buttons for quick refinements, and "Show all" on secondary collapsibles.

## Menu item icons (which layout a menu item opens)

| Icon | Opens |
|---|---|
| grid | a search layout (then a collapsible-sections layout per record) or a single grid |
| report (magnifier) | panels side by side with Preview / Print |
| ⚡ bolt | a filter-bar + sidebar style flow |
| none | any other layout |
