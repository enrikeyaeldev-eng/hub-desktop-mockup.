# hub-desktop-mockup

A Claude Code skill for designing **HTML and Figma mockups** of our .NET WPF desktop app (Hub). It contains only design references and an atomic component library. No application code or data.

## Use it

The skill is in `.claude/skills/hub-desktop-mockup/`. Claude Code loads it automatically when you work in this repo, so you can ask for mockups directly:

> Mock up the Event "Key dates" section in edit mode with a validation error on the start date.

> Design a flow to assign volunteers to accommodations: filters for event and week, a list of weeks on the side and a grid of applicants.

From a Codespace terminal:

```bash
npm install -g @anthropic-ai/claude-code
```

```bash
claude
```

Mockups are written to `mockups/<feature>/` (HTML + `hub.css`). Open them in the browser, or import them into Figma (see `references/figma.md`).

## How it's organised

Components follow **atomic design** and are named for what they are, not where they appear:

- **Atoms**: icon, button, input, select, checkbox, radio, tag, status icon, avatar, tooltip, progress, splitter…
- **Molecules**: field, range, option group, checkbox tree, lookup, chip, search input, stat, list tile, tab pills…
- **Organisms**: panel, field group, collapsible, data grid, chip bar, filter editor, info card, menu card, identity header, stat equation, contact card, tile list, jump nav…
- **Layouts**: example pages composed from organisms inside the shell.

| Path | What it is |
|---|---|
| `SKILL.md` | When the skill triggers, the workflow, and the rules |
| `references/components.md` | Atomic catalogue: every component, its classes, variants and states |
| `references/layouts.md` | How organisms combine into pages; the example layouts |
| `references/shell.md` | Tab strip, page header variants, action bar, rail |
| `references/tokens.md` | Colors, type, spacing |
| `references/event-form.md` | Structure of the Event module |
| `references/figma.md` | How to get mockups into Figma, mirroring the atomic levels |
| `assets/hub.css` | Styles, organised Tokens → Atoms → Molecules → Organisms → Layout → Shell |
| `assets/components.html` | Visual catalogue of every component and state |
| `assets/layout-*.html` | Example layouts, named by structure |

## Teach it new components

When a mockup needs something the skill doesn't know yet, share a screenshot and ask Claude to add it. It goes in at the right atomic level, with a neutral name, in `hub.css`, `components.md` and `components.html`. Screenshots are used only for how a component looks and behaves. Examples always use made-up data.
