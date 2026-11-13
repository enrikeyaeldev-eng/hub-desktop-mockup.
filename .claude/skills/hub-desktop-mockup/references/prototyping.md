# Prototyping

Mockups are meant to be **used**: someone opens `index.html` in a browser and clicks through the flow. A prototype only needs to fake what the user will try. Nothing is saved.

## Folder structure

```
mockups/<feature>/                 one design
  index.html                       start screen
  <screen>.html                    other screens, e.g. recipe--read.html, recipe--edit.html
  hub.css                          copied unchanged from assets/
  prototype.js                     copied unchanged from assets/

mockups/<feature>/option-a/        several designs: one self-contained folder each,
mockups/<feature>/option-b/        same files as above in every folder
```

- File names: `<thing>--<state>.html` (`recipe--read.html`, `recipe--edit.html`, `recipe-book--empty.html`). The start screen is always `index.html`.
- Every folder must open on its own (relative links only), so it can be served from a Codespace, zipped, or published as is.
- No screenshots in the folder unless the user asks for them.

## Making it clickable

`assets/prototype.js` (load it at the end of every page with `<script src="prototype.js"></script>`) already gives every page:

| Behaviour | How to use it |
|---|---|
| Fit to window | Automatic: the 1920×1030 window scales down to the browser, never up. |
| Navigate | Put `data-href="other.html"` on any element (button, tab, row, tile, crumb). Plain `<a href>` also works. |
| Collapsibles | Clicking a collapsible bar opens/closes it (bodies are always in the markup). |
| Jump nav | Clicking a link opens and scrolls to the collapsible with that title. |
| Select | Clicking a list tile, tree node, segment, tab pill, file chip, menu item or grid row selects it (one per group). Add `data-static` to opt out. |
| Checkboxes & radios | Toggle on click (not inside `.is-readonly`). |

Page-specific behaviour goes in a small inline `<script>` after `prototype.js`:

- **Swapping content**: keep a JS object with the sample records (e.g. 4–15 recipes with their rows) and re-render the detail area when a tile or row is selected. Pass the selected record between pages in the URL (`recipe--read.html?r=R-0003`) and read it with `URLSearchParams`.
- **Inline grid editing**: clicking a row turns its cells into `td.is-editing` controls; the last row `tr.is-new` adds a line; show validation with `.is-invalid` + `.error-tip` (`td.fill.has-error-tip`).
- **Modals**: a separate page that shows the parent dimmed underneath; Back/Save go back with `data-href`.

Keep scripts short and readable, with no frameworks. Buttons that would need a real backend (Print, Export, Delete…) can stay inert; list them in the hand-off.

## Page height

`.page-body` hides overflow, so content taller than the window is cut off silently. Budget the height: the page body is about 850px tall under a 55–80px header, and about 790px under a search header. Collapse secondary collapsibles, or let lists scroll inside their pane (`.pane-body > .tile-list` scrolls on its own).

## Checking

- With a browser (Claude Code, Playwright with Chromium): load every page, listen for page errors, click through each link and interaction, and look at screenshots at 1920×1030 and at a laptop size (e.g. 1366×768). Save screenshots outside the repo.
- Without a browser (e.g. claude.ai): check every `data-href` target exists, every page loads `hub.css` and `prototype.js`, and the content fits the height budget.

## Hand-off

Tell the user:
- the start file (and how to open it, e.g. `python3 -m http.server` in the mockups folder, then open the forwarded port in a Codespace);
- what can be clicked, and which buttons are inert;
- the organisms used, any new components, and any assumptions.
