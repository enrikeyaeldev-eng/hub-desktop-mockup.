# Tokens

Sampled from screenshots of the real app and defined as CSS variables in section 0 of `assets/hub.css`. Always use the variable, never a raw hex value. Figma variables use the same names without `--`.

## Color

| Token | Hex | Used for |
|---|---|---|
| `--primary` | #3B5D55 | Home tab, menu card header, accent panel header, primary buttons, square buttons, chips, tab top border, tooltips, stat numbers |
| `--primary-dark` | #2D4741 | Pressed primary, home tab border |
| `--primary-tint` | #DCE8E4 | Selected menu item, pill background |
| `--primary-disabled` | #B9C2BF | Disabled primary button |
| `--rail-top` / `--rail-bottom` | #2D4741 / #5B8077 | Rail gradient |
| `--shell-bg` | #D4D4D4 | Tab strip, chip bar |
| `--canvas` | #D1D1D1 | Behind the page header/body |
| `--surface` | #FAFAFA | Page header, panels, cards, action bar, active tab |
| `--content-bg` | #F5F5F5 | Page body, collapsible body |
| `--white` | #FFFFFF | Inputs, stats, grid rows |
| `--tab-bg` | #E5E5E5 | Inactive tabs |
| `--panel-header-bg` | #DCDCDC | Default panel header, info card header |
| `--row-selected` | #DCE0DF | Selected grid row |
| `--zebra` | #F5F5F5 | Alternate rows in striped grids |
| `--progress-track` | #7F9A93 | Unfilled progress |
| `--border` | #C8C8C8 | Input borders |
| `--border-light` | #E2E2E2 | Dividers, read-only option boxes |
| `--border-readonly` | #E3E3E3 | Read-only input border |
| `--border-strong` | #999999 | Grid header rule, lookup popup |
| `--text` | #222222 | Body text, values |
| `--text-muted-strong` | #444444 | Page title, panel header text, grid headers |
| `--text-soft` | #525252 | Stat labels, identity subtitles, totals |
| `--text-muted` | #6B6B6B | Hints, unselected tab pills, window controls |
| `--text-faint` | #7F7F7F | Contact card name/labels |
| `--on-primary` | #FFFFFF | Text/icons on green |
| `--link` | #4D8CAD | Text links |
| `--danger` | #D0021B | Invalid border, error mark, error tip |
| `--status-bad` / `--status-ok` | #FF0000 / #019E13 | Status icons |
| `--illustration` | #1F5A96 | Only inside option previews |

## Typography

- Family: `"Segoe UI", "Segoe UI Variable", system-ui, sans-serif` (`--font`).
- Page title 20 / 400. Menu card header 16 / 600 white. Panel header 14 / 700.
- Field label 12 / 400; required 12 / 600 + `•`. Body, inputs, list items 13 / 400. Grid headers 12–14 / 600. Tabs 12.
- Buttons 13 / 600.
- Identity name 20 / 600 green; identity subtitle 18 / 300; stat value 40 / 300 green with 20px grey decimals.

## Spacing & sizing

- Base unit 4px; common values 8, 12, 14, 16/17, 20, 24, 30, 36.
- Input/select 26px; checkbox 18px; radio 13px; button 40px; square button 28px; panel header 40px; collapsible bar 32px; grid rows 30–34px.
- Field grid gaps 20px / 14px; panel grid gap 30px.

## Radius & elevation

- Menu cards 6px. Panels, page header/body 2px. Buttons/inputs 2–4px.
- Shadow `--shadow`: `0 2px 6px rgba(0,0,0,.16)`.
