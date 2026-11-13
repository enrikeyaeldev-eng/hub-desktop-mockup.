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

Prototypes are written to `mockups/<feature>/` (one folder per design option when you ask for several). Each folder has an `index.html` start screen plus `hub.css` and `prototype.js`. To click through one in a Codespace:

```bash
python3 -m http.server 8000 --directory mockups/<feature>
```

Then open the forwarded port 8000 in the browser. They can also be imported into Figma (see `references/figma.md`).

## Install it in your Claude organization account (claude.ai)

1. Build the zip (the zip must contain the `hub-desktop-mockup/` folder with `SKILL.md` inside):

   ```bash
   cd .claude/skills && zip -r ../../hub-desktop-mockup.zip hub-desktop-mockup && cd ../..
   ```

2. Download `hub-desktop-mockup.zip` from the Codespace (right-click it in the Explorer → Download).
3. In claude.ai: **Settings → Capabilities → Skills → Upload skill**, and pick the zip. Code execution must be turned on for skills to run. On a Team or Enterprise plan an owner may need to allow skills first, and owners can share a skill with the whole organization.

**Updating:** claude.ai does not sync with GitHub. After you change the skill here, build a new zip and upload it again over the existing skill. Don't commit the zip.

In Claude Code nothing needs installing: anyone who clones this repo gets the skill from `.claude/skills/`, and `git pull` brings the latest version.


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
| `references/layouts.md` | How organisms combine into pages; rules for action bars, edit mode, child rows, sidebars |
| `references/prototyping.md` | Folder structure, making prototypes clickable, checking them |
| `references/shell.md` | Tab strip, page header variants, action bar, rail |
| `references/tokens.md` | Colors, type, spacing |
| `references/event-form.md` | Structure of the Event module |
| `references/figma.md` | How to get mockups into Figma, mirroring the atomic levels |
| `assets/hub.css` | Styles, organised Tokens → Atoms → Molecules → Organisms → Layout → Shell |
| `assets/components.html` | Visual catalogue of every component and state |
| `assets/layout-*.html` | Example layouts, named by structure |
| `assets/prototype.js` | Shared script: fit to window, navigation, collapsibles, selection |

## Teach it new components

When a mockup needs something the skill doesn't know yet, share a screenshot and ask Claude to add it. It goes in at the right atomic level, with a neutral name, in `hub.css`, `components.md` and `components.html`. Screenshots are used only for how a component looks and behaves. Examples always use made-up data.
