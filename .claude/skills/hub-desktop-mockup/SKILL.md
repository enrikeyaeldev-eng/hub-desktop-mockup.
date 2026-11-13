---
name: hub-desktop-mockup
description: Design HTML and Figma mockups for the organization's .NET WPF desktop application ("Hub": CORE USA home tab, dark-green right rail, menu cards, tabbed pages). Use whenever the user asks to mock up, sketch, prototype, redesign or add a screen, form, search, section, panel, dialog, grid, field or component to the desktop app (especially the Event module), or asks for a Figma version of one. Builds static HTML from an atomic component library (atoms → molecules → organisms → layouts) that matches the real app, plus guidance for moving it into Figma.
---

# Hub Desktop Mockup

Mockups for a WPF desktop app. The output is **static HTML (and optionally Figma)**, never XAML or production code. A mockup should look like a screenshot of the real app, so reviewers judge the *content*, not an unfamiliar style.

The library is **atomic**: atoms → molecules → organisms, placed with layout primitives inside the shell. Components are named for what they are, never for a screen ("panel", "stat equation", "lookup", not "report panel" or "overview card").

## Read first

1. `references/components.md`: every atom, molecule, organism and layout primitive, with classes and naming rules. **Always read.**
2. `references/layouts.md`: how organisms combine into pages, plus the example layouts.
3. `references/shell.md`: tab strip, page header variants, page body, action bar, rail.
4. `references/tokens.md`: colors, type, spacing. Never invent colors.
5. `references/event-form.md`: when the request involves the Event module.
6. `references/figma.md`: only when a Figma version is wanted.

`assets/components.html` is the visual catalogue: every component with its states and class names. Open it whenever you're unsure how something looks.

## Workflow

1. **Decompose the request.** List the organisms the screen needs (e.g. chip bar + filter editor, split sidebar, tile list, panel with embedded grid), then the page-header variant and the action-bar buttons. Name the states to show (read / edit / invalid / empty / selected / disabled). If the user only names a form, infer plausible content and list your assumptions.
2. **Start from the closest `assets/layout-*.html`** (they are named by structure, see `layouts.md`). Copy it **and** `hub.css` into `mockups/<feature>/`. Keep the icon sprite at the top of the page.
3. **Compose with existing classes only.** Swap organisms in and out, and copy markup from `components.html`. If something is genuinely new, build it from existing atoms and molecules. Give it a neutral, structural name, put its style in a `<style>` block using the CSS variables, and tell the user so it can be added to `hub.css`, `components.md` and `components.html`.
4. **Use made-up but realistic data.** Never copy real names, codes or records from screenshots. Screenshots show how components look and behave, not content to reuse.
5. **Show states deliberately**, one HTML file per state (`<feature>--<state>.html`) when several are asked for.
6. **Verify by rendering.** Screenshot at 1920×1030 with Playwright (Chromium is preinstalled; `require('playwright')` works) and look at it. Check that nothing overflows or wraps unexpectedly, the shell is intact, and text isn't clipped.
7. **Hand off** the file paths, screenshot(s), the list of organisms used, and any assumptions or new components.

## Hard rules

- Canvas 1920×1030 (maximized on 1080p). Not responsive.
- Shell always present: tab strip with `CORE USA` first, page header, action bar, rail. The rail never changes.
- Action bar: outline buttons left, primary buttons right, each with an icon.
- Panel headers are grey by default; `.accent` (green) only for the single primary panel of a side-by-side layout.
- Lookups are always inline search with a popup grid, never plain dropdowns.
- Required = bold label + `•`. Invalid = red border + `▲` after the dot + red error tip.
- Headless panels with identity header / stats / stat equation are for at-a-glance summaries only. Everything else uses standard panels.
- States use `is-*` classes; variants use modifier classes (see `components.md`).
- Segoe UI, dense 12–13px content. Don't "modernize" spacing or sizes.
- One HTML file + `hub.css`. No build step, no framework, no external JS or fonts.

## When something is missing

Build it from the closest atoms and molecules, mark it as an assumption, and ask the user for a screenshot. When they provide one, add the component at the right atomic level in `hub.css`, `components.md` and `components.html`, with a neutral name.
