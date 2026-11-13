# Design tokens

Sampled from screenshots of the real app. All are defined as CSS variables in `assets/hub.css` — use the variables, not raw hex values.

## Color

| Token | Hex | Used for |
|---|---|---|
| `--primary` | #3B5D55 | Home tab, card headers, primary panel headers, primary buttons, tab top border, tooltips |
| `--primary-dark` | #2D4741 | Hover/pressed primary, top of rail gradient |
| `--rail-top` | #2D4741 | Rail gradient start |
| `--rail-bottom` | #5B8077 | Rail gradient end |
| `--shell-bg` | #D4D4D4 | Tab strip background |
| `--canvas` | #D1D1D1 | Background behind panels |
| `--surface` | #FAFAFA | Header panel, cards, group panel bodies, footer, active tab |
| `--content-bg` | #F5F5F5 | Content panel |
| `--tab-bg` | #E5E5E5 | Inactive tabs |
| `--secondary-header` | #D4D4D4 | Secondary group panel header (Output) |
| `--input-bg` | #FFFFFF | Inputs, dropdowns, checkboxes |
| `--border` | #C8C8C8 | Input borders, outlined buttons |
| `--border-light` | #E2E2E2 | Dividers, grid lines |
| `--text` | #222222 | Body text, field values |
| `--text-muted-strong` | #444444 | Form title |
| `--text-muted` | #6B6B6B | Hints (`Ctrl+T`), secondary header text, window controls |
| `--on-primary` | #FFFFFF | Text/icons on green |
| (record group header) | #DCDCDC | Grey group headers in record/process forms, result-card headers |
| (selected grid row) | #DCE0DF | Selected row in result grids |
| (progress track) | #7F9A93 | Unfilled part of `.progress` (filled part is `--primary`) |
| (disabled primary) | #B9C2BF | Disabled primary buttons (`Update`, `Drive`) |
| (validation red) | #D0021B | Invalid border, ▲ marker, error tip background |
| (illustration blue) | #1F5A96 | Only inside option preview illustrations |
| `--link` | #4D8CAD | Text links (`See more`) |
| `--ok` | #019E13 | Green ✓ status icon |
| `--bad` | #FF0000 | Red ! status icon |
| `--text-soft` | #525252 | Overview labels, subtitles, KPI labels |
| `--text-faint` | #7F7F7F | Contact card name/subtitle/labels |

## Typography

- Family: `"Segoe UI", "Segoe UI Variable", system-ui, sans-serif`.
- Form title: 20px / 400 / `--text-muted-strong`.
- Card header: 16px / 600 / white, centered.
- Group panel header: 14px / 700 / white (primary) or `--text-muted` (secondary), left aligned, 20px padding.
- Field label: 12px / 400; **required** labels are 600 weight followed by a small dot `•`.
- Body, list items, input text: 13px / 400.
- Tabs: 12px; Home tab 12px / 600 uppercase.
- Buttons: 13px / 600.
- Overview: profile name 20px / 600 green; subtitles 18px / 300; KPI numbers 40px / 300 green with 20px grey decimals.

## Spacing & sizing

- Base unit 4px. Common values: 8, 12, 16/17, 20, 24, 36.
- Input height 26px; dropdown same, with a small solid caret.
- Checkbox / radio: 16px.
- Field grid: 2 columns inside a group panel, 20px column gap, 14px row gap.
- Cards (Home): 288px wide, ~383px tall, 36px apart, header 36px.
- Group panels: header 40px, body padding 20px 24px 40px.

## Radius & elevation

- Cards: 6px radius. Group panels, header/content panels: 2px. Buttons/inputs: 3–4px.
- Shadow (cards, panels): `0 2px 6px rgba(0,0,0,.16)`.
