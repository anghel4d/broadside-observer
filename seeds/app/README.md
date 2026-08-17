# Seed card browser

A tiny, self-contained TypeScript app for browsing the uniform markdown cards in [`../cards/`](../cards/). No backend, auth, database, or LLM features. A build step parses every card through a Zod schema and packs the validated catalog into JSON; the UI is a pure query over that in-memory corpus.

## Run

From this directory:

```bash
npm install
npm run dev
```

`npm run dev` regenerates `src/generated/cards.json`, `src/generated/cards.json.gz.b64`, and `public/cards.json` from `../cards/*.md`, then starts Vite. Open the printed local URL (usually `http://localhost:5173`).

## Build a static bundle

```bash
npm install
npm run build
```

This:

1. Parses and schema-validates every `seeds/cards/*.md` file (build fails on violations)
2. Writes `src/generated/cards.json`, gzip+base64 `src/generated/cards.json.gz.b64` (inlined into the app), **and** `public/cards.json` (copied to `dist/cards.json` for GitHub Pages / remote MCP)
3. Typechecks the client
4. Emits a single-file app at `dist/index.html` (catalog inlined; no extra network fetch)

Open `dist/index.html` in a browser, including via `file://`, or drop `dist/` into Codex / any static host. `npm run preview` serves the same build locally.

Rebuild whenever cards are added or edited. The JSON artifact is generated, not hand-maintained.

`npm test` runs a few pure-domain checks (parse + query + MCP response shapes) without a test framework.

## MCP server

Agents can query the same packed catalog over MCP. No LLM, no database — stdio (required) plus optional Streamable HTTP.

```bash
npm install
npm run pack && npm run mcp          # stdio (Cursor / Claude Desktop / Codex)
PORT=3000 npm run mcp:http           # Streamable HTTP at /mcp
```

The process loads cards, in order: local `src/generated/cards.json.gz.b64`, then plain `public/cards.json` / `src/generated/cards.json` / `dist/cards.json`, then the `SEEDS_CARDS_JSON` env path/URL (JSON or `.gz.b64`), then `https://anghel4d.github.io/broadside-observer/cards.json`.

Tools:

- `query_seeds {"query":"<tokens>"}` — AND search over title, authors, topics, takeaway, lineage. Optional `id`, `topic`, `lineage`, `year_min`, `year_max`, `limit` (default 20, max 50). **0 hits** return usage + copy-pasteable calls; **1 hit** (or a unique `#123` / `107` id, or a found file stem) returns the full card; **2+ hits** return a compact list with `NEXT: call get_seed {"id":"..."}`.
- `get_seed {"id":"<card-id>"}` — entire card by file stem (no `.md`). Copy `id` from a list hit.

Cursor `mcp.json` snippet (after `npm install` in `seeds/app`):

```json
{
  "mcpServers": {
    "broadside-seeds": {
      "command": "npx",
      "args": ["tsx", "src/mcp/stdio.ts"],
      "cwd": "/absolute/path/to/broadside-observer/seeds/app"
    }
  }
}
```

Rebuild the packed JSON after new cards (`npm run pack`). The hosted catalog is `https://anghel4d.github.io/broadside-observer/cards.json` (emitted as `public/cards.json` → `dist/cards.json` on Pages).

## GitHub Pages

The hosted app is at **https://anghel4d.github.io/broadside-observer/**.

After this lands on `main`, every push to `main` that touches `seeds/app/**`, `seeds/cards/**`, `seeds/canvases/**`, `seeds/lineages/**`, or `.github/workflows/deploy-seed-browser.yml` rebuilds the single-file bundle and deploys it via GitHub Actions (Pages source: GitHub Actions, not a branch). You can also run the **Deploy seed browser** workflow manually from the Actions tab.

Deep links stay hash routes, e.g. `https://anghel4d.github.io/broadside-observer/#card/<file-stem>`. Cards view: `https://anghel4d.github.io/broadside-observer/?view=cards#card/<file-stem>`. Canvas view: `https://anghel4d.github.io/broadside-observer/?view=canvas`.

The Pages build sets `GITHUB_PAGES=true` so Vite uses `base: '/broadside-observer/'`. Local `npm run build` keeps `base: './'` so `file://` still works. The packed catalog is also published at **https://anghel4d.github.io/broadside-observer/cards.json** for remote MCP.

## Architecture

The program is a small morphism pipeline with an impure shell:

```
CardFile  →  ParseResult  →  SeedCard
[SeedCard]  →  Corpus
Corpus × Query  →  [SeedCard]
```

- **`src/domain/schema.ts`** — Zod schemas are the denotation of a card. Branded types (`CardId`, `Topic`, `Year`, `Lineage`, …) keep ids from mixing. Sort keys and section names are finite unions. Filter state is an ADT (`All | One | None`), not a pile of nullable strings. Optional `pool` / `relevance_score` / `lineage` are normalized to `null`, and optional `cites` / `see` to `[]`, so missing vs empty is not a third state. Each cite is bibliography-only (`title`, optional `url` / `year` / `arxiv` / `doi`). In-library stems live on sibling `see`, not nested under cites. Leftover YAML `card:` on a cite is stripped.
- **`src/domain/lineageLabels.ts`** — display titles for known lineage (and pool) slugs. Filter values stay the raw slug; unknown slugs get a light prettify.
- **`src/domain/parse.ts`** — `parseCard: CardSource → Result<ParseError, SeedCard>`. YAML and markdown quirks are normalized (empty `venue`, `null` arxiv/doi, singleton author/topic, missing optional keys including `lineage` / `cites` / `see`), then decoded. No throwing in the domain core; the packer prints every `Err` and exits non-zero.
- **`src/domain/corpus.ts` / `query.ts`** — immutable index (haystacks, topic/batch/pool/lineage catalogs, `byArxiv`) and a total `applyQuery`. Search is tokenized AND over a precomputed lowercase haystack (title, authors, topics, lineage, cite titles, takeaway) with a title-weighted score as tie-breaker. In-library links are `see` stems that exist in the corpus, plus a fallback join on matching `arxiv` ids.
- **`src/mcp/`** — stdio (and optional Streamable HTTP) tools `query_seeds` / `get_seed` over the same `Corpus × Query → [SeedCard]` morphism. Responses are agent-facing text with explicit `NEXT:` / JSON-shaped calls. Full-card dumps include `see: [...]` when non-empty and never emit `card:` on cites. The MCP process prefers the packer's gzip+base64 catalog, then plain packed JSON; it does not parse markdown at runtime.
- **`src/shell/`** — IO: packer, DOM. The UI is a tiny Elm loop (`Model × Msg → Model`) whose `update` is pure. The shell is a fixed `100dvh` workspace: search stays put; extra filters collapse on narrow viewports; browse and detail panes scroll independently. The browse pane is windowed (list rows and the Cards grid) so only nearby items are in the DOM. Rendering patches those panes (and a List / Cards view mode stored in `localStorage`, with `?view=cards` in the URL when Cards is active). A draggable splitter resizes browse vs detail. List detail is a centered ~46rem reading column. Compact Cards (≤980px) opens detail as a sheet over the grid instead of a stacked side pane.

Deep links: `#card/<file-stem>`. Cards mode is `?view=cards` (omitted for List). Bibliography is always shown from `cites`. In-library chips come from `see` ∪ arxiv-join and use the same hash route.

## Views

The app is a locked viewport (`100dvh`, no document scroll). Header + search stay in the shell; the browse pane and the detail pane each scroll on their own. Selecting a row never moves the detail pane off-screen.

- **Canvas** — third view (`?view=canvas`) for packed `seeds/canvases/*.canvas.tsx`. Same list row chrome and search/sort bar (card facets hidden). The middle pane is a Raw | Render toggle like Light/Dark; last buffer stays in `localStorage`.
- **List** — master-detail rows + preview (default). The detail pane centers a ~46rem reading column (wiki/blog measure); the sticky title and out-of-filter banner sit in that same column, not stretched across a wide pane or stuck flush-left. Browse defaults to a ~24rem rail.
- **Cards** — dense fixed-size tile grid (title, year, topics/lineage, takeaway, id) with a wider pinned detail pane on the right (about 42% of the workspace, clamped to ~28–34rem). That leaves a usable multi-column grid on a typical laptop; the old 16–18rem rail is gone. After first paint, a column appears and disappears at the same ~5% sliver (the splitter may cover up to ~95% of the rightmost card). First paint waits for a full tile so a typical load does not clip. Tiles stay a fixed size and clip rather than stretch. On viewports ≤980px the grid takes the whole workspace; clicking a card (or landing on `#card/<id>`) opens a near-fullscreen detail sheet over the grid. **Back to grid** or `Esc` dismisses the sheet and keeps the selection/hash. Growing past 980px returns to the right-pane layout (the sheet closes).
  - **Splitter** — drag the border between browse and detail to resize (pointer capture, `col-resize` cursor, hover highlight). List and Cards remember separate widths in `localStorage` (`broadside.seed-browser.paneSplit`). Double-click the edge to restore that view’s default; `Shift+←`/`Shift+→` or `Shift+H`/`Shift+L` nudge the split (plain arrows stay on the card grid). Compact layout (≤980px) hides the splitter: List stacks, Cards uses the sheet.

Toggle Canvas/List/Cards with the segmented control in the top bar. Light/Dark sits beside it and is stored in `localStorage` (`broadside.seed-browser.theme`); with no stored value the UI follows the OS. Cards is shareable as `?view=cards` (works with `#card/<file-stem>`). The last mode is also stored in `localStorage` (`broadside.seed-browser.view`); a URL `view` param wins on load. Keyboard: `j`/`k` or arrows move the selection; `/` focuses search; `Esc` dismisses a compact Cards sheet, then clears search, then closes the filter disclosure. In compact Cards, `Enter` opens the sheet for the current selection. **Id** in the filter row jumps to that numeric id (Enter). Browse rows/cards are windowed (not all ~571 nodes at once); `j`/`k`, click, and hash deep-links stay in sync.

On viewports ≤980px, topic/batch/pool/lineage/year/sort/id collapse behind a **Filters** disclosure so the panes keep height; search and Reset stay visible. Active facets render as dismissible pills under the chrome (clear one or Reset). If the open card is excluded by the current filter, the detail banner offers **Clear filters** (`c`) and **Show first match** (`Enter`); those buttons are in tab order (browse items use `j`/`k` rather than Tab). **Show first match** scrolls to the card and flashes it.

Detail keeps a compact sticky title (id + up to 3 lines, full title on hover). File stem and authors sit in the scrolling body so they leave as you read — the pinned chrome no longer eats a sixth of the pane. The out-of-filter banner, when present, stays in that sticky bar (one row). Topic/lineage chips are the primary tags; batch/pool/id/year/venue sit in a quieter provenance row. Topic chips omit a slug that already appears as the lineage (no doubled `radiance-cascades`). Cards titles clamp to 3 lines with a `title` tooltip for the rest.

## Lineage, cites, and see

Optional frontmatter on every card (see [`../README.md`](../README.md)):

| Field | Shape | Meaning |
|-------|--------|---------|
| `lineage` | one string slug | At most one primary thread (`lock-free-queues`, `work-stealing`, …). Omit if the card is not on a thread. |
| `cites` | list of objects | Bibliography only. `title` is required. `url` when known (arXiv abs URL when the work is on arXiv). `arxiv` is the id (e.g. `2401.14183`) whenever the cited work has one. `year` and `doi` are optional. There is no `card` key — do not nest library pointers here. A `cites` entry is never dropped because its target card was culled. |
| `see` | list of card stems | In-library pointers: stems currently in `../cards/` that this paper cites (no `.md`). Example: `see: ["031-michael-scott-lock-free-queue", "942-deepseek-v3-technical-report"]`. On cull, drop the matching stem from other cards’ `see` lists and leave `cites` untouched. |

Cards without these keys still pack. When present, the packer keeps them in `cards.json`. Nested `cites[].card` leftover in YAML is ignored (stripped), not a pack failure.

The catalog filter has a **Lineage** dropdown of slugs observed in the corpus (`All` / `No lineage` / one slug). Known slugs show a human title from `src/domain/lineageLabels.ts` (e.g. `concurrent-data-structures` → “Concurrent data structures”); unknown slugs still work as filter values and get a light prettify. Pool options use a smaller title map the same way. Card detail always shows a **Cites** bibliography (title, year, url / arXiv / DOI) when `cites` is non-empty. A **See** chip list deep-links to `#card/<stem>` for live `see` stems, plus any cite whose `arxiv` matches a packed card. Dead `see` stems are omitted, not shown as broken links.

Narrative thread pages live at `seeds/lineages/<slug>.md`. The packer records which of those files exist; the detail view links out to the GitHub copy when a matching doc is present.
