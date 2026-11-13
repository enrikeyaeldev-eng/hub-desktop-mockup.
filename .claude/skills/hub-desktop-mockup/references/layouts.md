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

### Action bar
- The **action bar** is always there; the **page header** too, except on a bare page (three panes), where the preview carries the title.
- **Left, outline buttons**: actions on the *selected rows or items* of a list or grid, or that leave the page: Open, Export, Google Earth / Show on map (for selected results), Select, Unselect, Clear, Back. Typical on search and selection screens.
- **Right, primary buttons**: actions on the *page or record itself*: Edit, Save, Undo, New, Delete, Duplicate, Print, Preview, Update. Record pages often have only right-side buttons (their external links such as Google Earth are then primary too).
- A button that opens a menu gets `.btn-menu`. A button that can't run yet is `disabled` (not hidden).

### Read and edit mode
- **Read**: inputs `.is-readonly`, grey panels, **Edit** on the right.
- **Edit**: normal inputs, the main panel gets `.accent`, and Edit is replaced by **Save** (disabled until something changes) and **Undo**. Record-level actions (Delete, New, …) stay on the right.
- **Create**: same as edit, with empty required fields and Save disabled until they are filled.

### Child rows (lines of a record)
- **Inline in the grid** when rows are short and entered in bulk (ingredients, order lines, simple lists): the active row's cells become `td.is-editing` controls, a final `tr.is-new` row adds a line, grid tools offer Add row / Remove / Move up / Move down, and an invalid cell shows its error tip in the fill column.
- **Modal per row** when a row has many fields, its own lookups or its own sections (applicants, versions): a modal over the dimmed parent with breadcrumb `Parent › * New child (new)` and Save / Undo / Back.

### Pages and sections
- **Collapsibles**: one per area of a record, all collapsible, each with a matching link in the jump nav. All collapsed is a valid state.
- Inside a collapsible: default to `.split.halves` with grey panels; wide panels below with `.full-width`.
- **Headless panels** with identity header / stats / stat equation are for at-a-glance summaries. Use them in a collapsible, usually the first one. Everything else stays in standard grey panels.
- **Simple lists** (code + description): use the single-grid sheet. Don't add search or collapsibles they don't need.
- **Action-oriented flows** (select, assign, approve): a chip bar + filter editor header, and `.split.sidebar` for a list/progress beside the main grid. Disable the primary action until there is something to apply.
- **Hierarchies** (a record with nested children, e.g. versions → variants → translations): shell sidebar with a tree nav; the page shows the selected node.
- **Browsing many small records** (pick one, see it right away): shell sidebar with a pane holding a tile list, a normal page header for the selected record.
- **Reading/working on one item with context**: three panes. Related entries in the sidebar, the item preview in the middle, activity/comments on the right.
- **Search results with many matches**: a message in the collapsible bar plus chip buttons for quick refinements, and "Show all" on secondary collapsibles.
- **Empty / first use**: show the layout with an `.empty-state` where the list or content would be, and the action that creates the first item (e.g. New) enabled.

### Sidebar
- Width: 283px for a tree nav, about 350–520px for a pane with a list (517px when it holds entries with meta lines). Set it with `style="--sidebar-w:NNNpx"` on `.window`.
- A sidebar works with any page header, or with a bare page.
- The action bar runs the full width under the sidebar. Use `.sidebar-full` (sidebar reaches the bottom) only when the user asks for it.

## Menu item icons (which layout a menu item opens)

| Icon | Opens |
|---|---|
| grid | a search layout (then a collapsible-sections layout per record) or a single grid |
| report (magnifier) | panels side by side with Preview / Print |
| ⚡ bolt | a filter-bar + sidebar style flow |
| none | any other layout |
