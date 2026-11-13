---
name: hub-desktop-mockup
description: Design clickable HTML prototypes and Figma mockups for the organization's .NET WPF desktop application ("Hub": CORE USA home tab, dark-green right rail, menu cards, tabbed pages). Use whenever the user asks to mock up, sketch, prototype, redesign or add a screen, form, search, section, panel, dialog, grid, field or component to the desktop app (especially the Event module), or asks for a Figma version of one. Builds HTML from an atomic component library (atoms, molecules, organisms, layouts) that matches the real app.
---

# Hub Desktop Mockup

Prototypes for a WPF desktop app. The output is **HTML that people can click through in a browser (and optionally Figma)**, never XAML or production code. A prototype should look like the real app, so reviewers judge the *content and flow*, not an unfamiliar style.

The library is **atomic**: atoms → molecules → organisms, placed with layout primitives inside the shell. Components are named for what they are, never for a screen ("panel", "stat equation", "lookup", not "report panel" or "overview card").

## Read first

1. `references/components.md`: every atom, molecule, organism and layout primitive, with classes and naming rules. **Always read.**
2. `references/layouts.md`: how organisms combine into pages, the example layouts, and the rules for action bars, edit mode and panels.
3. `references/prototyping.md`: folder structure, making pages clickable, and checking them. **Always read.**
4. `references/shell.md`: tab strip, page header variants, sidebar, page body, action bar, rail.
5. `references/tokens.md`: colors, type, spacing. Never invent colors.
6. `references/event-form.md`: only when the request involves the Event module.
7. `references/figma.md`: only when a Figma version is wanted.

`assets/components.html` is the visual catalogue: every component with its states and class names. Open it whenever you're unsure how something looks.

## Workflow

1. **Decompose the request.** List the screens of the flow, then for each screen the organisms it needs (e.g. chip bar + filter editor, split sidebar, tile list, panel with embedded grid), the page-header variant and the action-bar buttons. Name the states to show (read / edit / invalid / empty / selected / disabled). If the user only names a feature, infer plausible content and list your assumptions.
2. **Set up the folder** as described in `prototyping.md`: `mockups/<feature>/` (or `mockups/<feature>/<option>/` per design option), each with `hub.css`, `prototype.js` and an `index.html` start screen.
3. **Start each screen from the closest `assets/layout-*.html`** (named by structure, see `layouts.md`). Keep the icon sprite at the top of the page and the `prototype.js` script at the end.
4. **Compose with existing classes only.** Swap organisms in and out, and copy markup from `components.html`. If something is genuinely new, build it from existing atoms and molecules. Give it a neutral, structural name, put its style in a `<style>` block using the CSS variables, and tell the user so it can be added to `hub.css`, `components.md` and `components.html`.
5. **Use made-up but realistic data.** Never copy real names, codes or records from screenshots. Screenshots show how components look and behave, not content to reuse.
6. **Wire the flow** (`prototyping.md`): links between screens, selections, and small inline scripts for the interactions the user will try.
7. **Check it.** If a browser is available (Playwright with Chromium in Claude Code), load every page, click through the flow, and look at screenshots at 1920×1030. Keep screenshots out of the mockups folder unless the user asks for them. Without a browser, re-read the markup for broken links and clipped content instead.
8. **Hand off**: how to open the prototype (start file), what can be clicked, the organisms used, and any assumptions or new components.

## Hard rules

- Canvas 1920×1030 (maximized on 1080p), scaled down to fit the browser by `prototype.js`. Not responsive.
- Shell always present: tab strip with `CORE USA` first, action bar, rail (never changes). Page header on every page except a bare three-pane page. An optional sidebar (tree nav or pane) sits left of the page; the action bar runs the full width under it.
- Action bar (`layouts.md` has the full rule): **left, outline** = actions on the selected rows/items or that leave the page (Open, Export, Select, Clear, Back). **Right, primary** = actions on the page or record itself (Edit, Save, Undo, New, Delete, Print). A page may have only right-side buttons. Every button has an icon.
- Edit mode replaces **Edit** with **Save** (disabled until something changes) and **Undo**.
- Panel headers are grey. `.accent` (green) marks the one main panel the user is filling in: report criteria, or the Main panel of a record being created or edited (on the page or in a modal).
- Lookups are always inline search with a popup grid, never plain dropdowns.
- Required = bold label + `•`. Invalid = red border + `▲` after the dot + red error tip.
- Child rows (lines, ingredients, items) are edited either **inline in the grid** or **one at a time in a modal**. See `layouts.md` for when to use which.
- Modals open over a dimmed page (tab strip and rail stay visible) and carry their own breadcrumb and action bar.
- Headless panels with identity header / stats / stat equation are for at-a-glance summaries only. Everything else uses standard panels.
- States use `is-*` classes; variants use modifier classes (see `components.md`).
- Segoe UI, dense 12–13px content. Don't "modernize" spacing or sizes.
- Plain files only: HTML per screen + `hub.css` + `prototype.js`. No build step, no framework, no CDN scripts or web fonts.

## When something is missing

Build it from the closest atoms and molecules, mark it as an assumption, and ask the user for a screenshot. When they provide one, add the component at the right atomic level in `hub.css`, `components.md` and `components.html`, with a neutral name.
