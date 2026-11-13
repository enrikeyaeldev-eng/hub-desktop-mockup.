# Shell

The window chrome that wraps every layout. Canvas 1920×1030. Measurements come from 1080p screenshots of the real app.

```
┌──────────────────────────────────────────────────────────────┬──────┐
│ .tabstrip  [⌂ CORE USA][🔍 Tab][Active tab ×]        .titlebar  │  42px
├──────────────────────────────────────────────────────────────┼──────┤
│ .page                                                        │.rail │
│   .page-header   (variant: default / has-quick-search /      │ 74px │
│                   has-nav / has-search)                      │      │
│   .page-body     (surface, or .stack of collapsibles)        │      │
├──────────────────────────────────────────────────────────────┤      │
│ .action-bar  [outline buttons]  .spacer  [primary buttons]   │ 62px │
└──────────────────────────────────────────────────────────────┴──────┘
```

## Tab strip — `.tabstrip` > `.tab`
- Background `--shell-bg`. Tabs 34px tall, 200px wide, 3px green top border, 12px text with optional leading icon. Long titles cut off (`.t`).
- `.tab.home` is always first: green fill, white home icon, UPPERCASE `CORE USA`, never closable (stays green when active).
- `.tab.is-active`: surface background, semibold title, `✕` close. Optional `.tooltip.has-arrow` under it with the full title.
- Tab titles can carry a kind suffix in brackets, e.g. `Name [Report]`, `NAME [User Preferences]`.
- `.titlebar` on the right: recording icon, user avatar, window controls (`.winctl`).

## Right rail — `.rail` (never changes)
Gradient `--rail-top` → `--rail-bottom`. White line icons ~77px apart: task list with italic count (`.rail-count`), wrench, warning, flag with `9+` (`.rail-badge`), help, `AI BETA` (`.rail-ai`), find/inspect. Brand mark at the bottom (`.rail-logo`).

## Page — `.page` > `.page-header` + `.page-body`
- 17px side padding, 25px gap, background `--canvas`.
- `.page-header` variants:
  - default: `.page-title` (20px) + `.page-actions` (share ↗, optionally ⚙).
  - `.has-quick-search`: 90px, quick search + `Ctrl+T` hint.
  - `.has-nav`: 80px, title top-left, ⚙ ↗ top-right, `.jump-nav` bottom-right. Add `.long-nav` when the links wrap onto two lines.
  - `.has-search`: column of search input and/or chip bar (+ filter editor); share ↗ top-right.
- `.page-body`: `--content-bg` surface with shadow. `.page-body.stack` is transparent and holds a `.stack` of collapsibles.

## Action bar — `.action-bar`
62px, surface background. `.btn.outline` on the left, then `.spacer`, then `.btn.primary` on the right. Buttons are 40px tall, 8px apart, always icon + label.
