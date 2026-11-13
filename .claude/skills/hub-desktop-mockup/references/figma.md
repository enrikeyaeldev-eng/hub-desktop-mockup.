# Figma mockups

HTML is the source of truth; Figma is a copy for review and commenting. Always build and verify the HTML first.

## Getting the HTML into Figma

Pick the first option that is available in the session:

1. **Figma connector / MCP tools are available** (tools named `mcp__…figma…`): use them to create the file/frames directly, following the structure below. Check with ToolSearch for "figma" before assuming they are missing. If the server shows as failed to connect, tell the user so they can reconnect it — don't silently fall back.
2. **No connector:** tell the user to import the rendered HTML with a Figma HTML-import plugin (e.g. *html.to.design*): publish or open the HTML at a URL (or upload the file), run the plugin, and import at 1920×1030. Then tidy the result using the structure below.
3. As a last resort, provide the 1920×1030 PNG screenshot (2× scale) so it can be placed in Figma as a reference image.

## File structure

- Page per module (e.g. `Kitchen`), plus a `🧱 Components` page and a `🎨 Tokens` page.
- One frame per screen/state, 1920×1030, named `<Form> / <Section> / <State>`, e.g. `Kitchen Setup / General / Edit – validation error`.
- Frames placed left-to-right in flow order, 200px apart.

## Variables and styles

Create Figma **variables** with exactly the token names from `design-tokens.md` (drop the `--`: `primary`, `surface`, `canvas`, …) in a `Hub` collection. Text styles: `Title/20`, `Card header/16`, `Panel header/14`, `Body/13`, `Label/12`, `Label/12 required`.

## Components

Build once on the Components page, then use instances. Import `assets/template-components.html` first; it holds every control and state on one page.

- `Shell` (tab strip + rail + footer) with a slot for the content and variant props for the footer buttons.
- `Tab` — variants: `home`, `inactive`, `active`, with `closable` boolean.
- `Card` (home launcher), `Card item` — variants by icon: `grid`, `report`, `wizard`, `none`; `selected` boolean.
- `Group panel` — variant `primary` / `secondary`.
- `Field` — variants: `text`, `dropdown`, `lookup`, `date range`, `checkbox`, `radio`, `option list`, `checkbox tree`; booleans `required`, `invalid`, `read mode`, `focused`.
- `Lookup popup`, `Error tip`, `Tooltip`, `Criteria bar` (empty / with chips), `Chip`, `Pill tabs`.
- `Section bar` — `collapsed` / `open`; `Splitter`.
- `Result card`, `Data grid` (header, row: default / selected / focused), `Mini grid`, `Tile`, `Progress`.
- `Button` — `primary` / `outline`, with icon swap.

Use auto layout everywhere so content changes don't break spacing.
