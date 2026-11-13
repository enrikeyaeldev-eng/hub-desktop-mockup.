---
name: hub-desktop-mockup
description: Design HTML and Figma mockups for the organization's .NET WPF desktop application ("Hub": CORE USA home tab, dark-green right rail, form-card launcher, tabbed forms). Use whenever the user asks to mock up, sketch, prototype, redesign or add a screen, form, search, report, process form, section, panel, dialog, grid or field to the desktop app (especially the Event Search / Event Form and event process forms), or asks for a Figma version of one. Produces static HTML that matches the real app's chrome, controls and states, plus guidance for moving it into Figma.
---

# Hub Desktop Mockup

Mockups for a WPF desktop app. The output is **static HTML (and optionally Figma)**, never XAML or production code. A mockup should look like a screenshot of the real app, so reviewers judge the *content* of a screen, not an unfamiliar style.

## Before you start

Read these (short) files:

1. `references/screen-patterns.md`: the six screen kinds and every standard control with its states. **Always read this.**
2. `references/shell-layout.md`: the window chrome (tab strip, header panel, content, footer action bar, right rail).
3. `references/design-tokens.md`: colors, type, spacing. Never invent colors.
4. `references/event-form.md`: when the request involves events (the team's main module).
5. `references/figma.md`: only when the user wants a Figma version.

## Workflow

1. **Classify the request.** Which screen kind is it: Home, Report, Search, Record form, Process form or Reference form (simple code list)? Which section is open, and which state (read / edit / invalid / empty / loaded)? What goes in the footer? If the user only names a form, infer plausible sections and fields from the name and list your assumptions.
2. **Start from a template** in `assets/`, never from a blank file:

   | Need | Template |
   |---|---|
   | Launcher | `template-home.html` |
   | Report | `template-report.html` |
   | Search results as cards / grid | `template-search-cards.html` / `template-search-grid.html` |
   | Record form (sections, columns, sub-groups, embedded grids) | `template-record.html` |
   | Process / action form | `template-process.html` |
   | Simple code list (statuses, types…) | `template-reference.html` |
   | Any single control or state | copy from `template-components.html` |

   Copy the template **and** `hub.css` into the output folder (default `mockups/<screen-name>/`). Keep the icon sprite at the top of the file; it is used everywhere.
3. **Fill in content** with the classes in `hub.css` only. If something new is needed, add a small `<style>` block using the CSS variables, and tell the user so it can be promoted into `hub.css`.
4. **Use made-up but realistic data.** Never copy real names, codes or records from screenshots the user shares. Screenshots show how components work, not content to reuse.
5. **Show states deliberately.** Required = bold label + `•`. Invalid = red border + `▲` after the dot + red tip. Read mode vs edit mode. Disabled buttons. Empty grids show `Records (0)`. For several states, make one HTML file per state (`<screen>--<state>.html`), never one crowded screen.
6. **Verify by rendering.** Screenshot at 1920×1030 with Playwright (Chromium is preinstalled; `require('playwright')` works) and look at it. Check that nothing overflows or wraps unexpectedly, the rail and footer are intact, and text isn't clipped.
7. **Hand off** the file paths, the screenshot(s), and a short list of assumptions/open questions.

## Hard rules

- Canvas = the app window, **1920×1030** (maximized on 1080p). Not responsive. Change it only if asked.
- Tab strip, right rail and footer action bar are always present and unchanged unless the request is about them. The **Home tab (`CORE USA`) is always first**; opened forms are tabs after it.
- Footer: primary filled green buttons on the **right** (Edit, Save, New, Update, Print). Secondary/navigation actions as outlined buttons on the **left** (Open, Select, Export, Clear, Cancel). Every button has an icon.
- Group panel headers: **green** only for report criteria; **grey** in record and process forms.
- Record-form sections are **collapsible bars** with matching **jump links** in the header. Sections contain **two columns of group panels with a splitter**.
- Lookups are **inline search** fields (× ⓘ green `…`) that open a **popup grid**, never a plain dropdown.
- Font Segoe UI; dense sizes (12–13px content). Don't "modernize" spacing or sizes.
- Thin line icons; reuse the sprite symbols and add new ones in the same style.
- One HTML file + `hub.css`. No build step, no framework, no external JS or fonts, so it opens offline.

## When information is missing

If a request depends on something not documented (a dialog, a rail flyout, a wizard step), build it from the closest documented building blocks, mark it as an assumption in the handoff, and ask the user for a screenshot. When they provide one, update `references/` and `hub.css`/templates so the skill learns it.
