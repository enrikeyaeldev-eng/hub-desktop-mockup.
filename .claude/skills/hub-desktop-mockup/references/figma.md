# Figma mockups

HTML is the source of truth; Figma is a copy for review and commenting. Always build and verify the HTML first.

## Getting the HTML into Figma

Pick the first option that is available in the session:

1. **Figma connector / MCP tools are available** (tools named `mcp__…figma…`): use them to create the file/frames directly, following the structure below. Check with ToolSearch for "figma" before assuming they are missing. If the server shows as failed to connect, tell the user so they can reconnect it. Don't silently fall back.
2. **No connector:** tell the user to import the rendered HTML with a Figma HTML-import plugin (e.g. *html.to.design*): open the HTML at a URL (or upload the file), run the plugin, import at 1920×1030. Then tidy the result using the structure below.
3. Last resort: provide the 1920×1030 PNG screenshot (2× scale) as a reference image.

## File structure (mirrors the atomic levels)

- `🎨 Tokens`: variables collection `Hub` with exactly the names in `tokens.md` (without `--`), plus text styles.
- `⚛ Atoms`, `🧬 Molecules`, `🧩 Organisms`: one component set per entry in `components.md`, named exactly like the CSS block (`Panel`, `Data grid`, `Stat equation`, …). Import `assets/components.html` first; it already lays them out in this order.
- `🖥 Shell`: tab strip, rail, page header variants, action bar.
- `📐 Layouts`: the example layouts, built only from instances.
- One page per feature being designed, with frames 1920×1030 named `<Feature> / <Area> / <State>`, placed left-to-right in flow order, 200px apart.

## Component properties

Map CSS to Figma properties the same way everywhere:
- Variant classes → **variant** properties (`Panel header: default | accent`, `Button: primary | outline`, `Data grid: base | embedded | striped`).
- `is-*` states → **boolean or state** properties (`checked`, `selected`, `open`, `readonly`, `focused`, `invalid`, `disabled`).
- Icons → **instance swap**; labels and values → **text** properties.

Use auto layout everywhere so content changes don't break spacing.
