# hub-desktop-mockup

A Claude Code skill for designing **HTML and Figma mockups** of our .NET WPF desktop app (Hub). It contains only design references and templates. No application code or data.

## Use it

The skill is in `.claude/skills/hub-desktop-mockup/`. Claude Code loads it automatically when you work in this repo, so you can ask for mockups directly:

> Mock up the Event Form "Key dates" section in edit mode with a validation error on the start date.

> Design a process form to assign volunteers to accommodations, with criteria for event and week.

From a Codespace terminal:

```bash
npm install -g @anthropic-ai/claude-code
```

```bash
claude
```

Mockups are written to `mockups/<screen-name>/` (HTML + `hub.css`). Open them in the browser, or import them into Figma (see `references/figma.md`).

## Contents

| Path | What it is |
|---|---|
| `SKILL.md` | When the skill triggers, the workflow, and the rules |
| `references/screen-patterns.md` | Screen kinds (Home, Report, Search, Record form, Process form, Reference form) and all standard controls |
| `references/shell-layout.md` | Window chrome: tabs, header panel, footer action bar, right rail |
| `references/design-tokens.md` | Colors, type, spacing |
| `references/event-form.md` | Structure of the Event Search / Event Form |
| `references/figma.md` | How to get mockups into Figma and structure components |
| `assets/hub.css` | Shared styles |
| `assets/template-*.html` | Starting templates per screen kind, plus a components gallery |

## Teach it new patterns

When a mockup needs a control the skill doesn't know yet, share a screenshot and ask Claude to add it to `references/screen-patterns.md`, `hub.css` and `template-components.html`. Screenshots are used only for how a control looks and behaves. Templates always use made-up data.
