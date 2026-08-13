# Seed card browser

A tiny, self-contained TypeScript app for browsing the uniform markdown cards in [`../cards/`](../cards/). No backend, auth, database, or LLM features. A build step parses every card through a Zod schema and packs the validated catalog into JSON; the UI is a pure query over that in-memory corpus.

## Run

From this directory:

```bash
npm install
npm run dev
```

`npm run dev` regenerates `src/generated/cards.json` from `../cards/*.md`, then starts Vite. Open the printed local URL (usually `http://localhost:5173`).

## Build a static bundle

```bash
npm install
npm run build
```

This:

1. Parses and schema-validates every `seeds/cards/*.md` file (build fails on violations)
2. Writes `src/generated/cards.json`
3. Typechecks the client
4. Emits a single-file app at `dist/index.html` (catalog inlined; no extra network fetch)

Open `dist/index.html` in a browser, including via `file://`, or drop `dist/` into Codex / any static host. `npm run preview` serves the same build locally.

Rebuild whenever cards are added or edited. The JSON artifact is generated, not hand-maintained.

`npm test` runs a few pure-domain checks (parse + query) without a test framework.

## GitHub Pages

The hosted app is at **https://anghel4d.github.io/broadside-observer/**.

After this lands on `main`, every push to `main` that touches `seeds/app/**`, `seeds/cards/**`, `seeds/lineages/**`, or `.github/workflows/deploy-seed-browser.yml` rebuilds the single-file bundle and deploys it via GitHub Actions (Pages source: GitHub Actions, not a branch). You can also run the **Deploy seed browser** workflow manually from the Actions tab.

Deep links stay hash routes, e.g. `https://anghel4d.github.io/broadside-observer/#card/<file-stem>`. Cards view: `https://anghel4d.github.io/broadside-observer/?view=cards#card/<file-stem>`.

The Pages build sets `GITHUB_PAGES=true` so Vite uses `base: '/broadside-observer/'`. Local `npm run build` keeps `base: './'` so `file://` still works.

## Architecture

The program is a small morphism pipeline with an impure shell:

```
CardFile  →  ParseResult  →  SeedCard
[SeedCard]  →  Corpus
Corpus × Query  →  [SeedCard]
```

- **`src/domain/schema.ts`** — Zod schemas are the denotation of a card. Branded types (`CardId`, `Topic`, `Year`, `Lineage`, …) keep ids from mixing. Sort keys and section names are finite unions. Filter state is an ADT (`All | One | None`), not a pile of nullable strings. Optional `pool` / `relevance_score` / `lineage` are normalized to `null`, and optional `cites` to `[]`, so missing vs empty is not a third state. Each cite is a small struct (`title`, optional `url` / `year` / `arxiv` / `doi`, optional `card` FK).
- **`src/domain/lineageLabels.ts`** — display titles for known lineage (and pool) slugs. Filter values stay the raw slug; unknown slugs get a light prettify.
- **`src/domain/parse.ts`** — `parseCard: CardSource → Result<ParseError, SeedCard>`. YAML and markdown quirks are normalized (empty `venue`, `null` arxiv/doi, singleton author/topic, missing optional keys including `lineage` / `cites`), then decoded. No throwing in the domain core; the packer prints every `Err` and exits non-zero.
- **`src/domain/corpus.ts` / `query.ts`** — immutable index (haystacks, topic/batch/pool/lineage catalogs) and a total `applyQuery`. Search is tokenized AND over a precomputed lowercase haystack (title, authors, topics, lineage, cite titles, takeaway) with a title-weighted score as tie-breaker.
- **`src/shell/`** — IO: packer, DOM. The UI is a tiny Elm loop (`Model × Msg → Model`) whose `update` is pure. The shell is a fixed `100dvh` workspace: search stays put; extra filters collapse on narrow viewports; browse and detail panes scroll independently. The browse pane is windowed (list rows and the Cards grid) so only nearby items are in the DOM. Rendering patches those panes (and a List / Cards view mode stored in `localStorage`, with `?view=cards` in the URL when Cards is active). **Focus detail** (also `localStorage`) widens the reading pane; Cards keeps ≥3 columns when it is off. List detail is a centered ~46rem reading column. Compact Cards (≤980px) opens detail as a sheet over the grid instead of a stacked side pane.

Deep links: `#card/<file-stem>`. Cards mode is `?view=cards` (omitted for List). Cite entries that set `card` to a stem present in the corpus render as the same hash route.

## Views

The app is a locked viewport (`100dvh`, no document scroll). Header + search stay in the shell; the browse pane and the detail pane each scroll on their own. Selecting a row never moves the detail pane off-screen.

- **List** — master-detail rows + preview (default). The detail pane centers a ~46rem reading column (wiki/blog measure); the sticky title and out-of-filter banner sit in that same column, not stretched across a wide pane or stuck flush-left.
- **Cards** — dense `auto-fill` grid (title, year, topics/lineage, takeaway, rank) with a narrower pinned detail pane on the right (`minmax(16rem, 18rem)`). At ~1042px that leaves ~754px for browse, so `minmax(14.5rem, 1fr)` lands **3 card columns**. On viewports ≤980px the grid takes the whole workspace; clicking a card (or landing on `#card/<id>`) opens a near-fullscreen detail sheet over the grid. **Back to grid** or `Esc` dismisses the sheet and keeps the selection/hash. Growing past 980px returns to the right-pane layout (the sheet does not trap you).
- **Focus detail** — top-bar toggle (persisted as `broadside.seed-browser.detailFocus`; shortcut `]`). Browse becomes a ~20rem rail and detail takes the rest so reading is not stuck in the Cards column. Escape turns it off (after dismissing a Cards sheet, if one is open). Unfocused Cards still targets ≥3 columns.

Toggle List/Cards with the segmented control in the top bar. Cards is shareable as `?view=cards` (works with `#card/<file-stem>`). The last mode is also stored in `localStorage` (`broadside.seed-browser.view`); a URL `view` param wins on load. Keyboard: `j`/`k` or arrows move the selection; `/` focuses search; `Esc` dismisses a compact Cards sheet, then clears search, then collapses focus, then closes the filter disclosure. In compact Cards, `Enter` opens the sheet for the current selection. **Rank** in the filter row jumps to that `seed_rank` (Enter). Browse rows/cards are windowed (not all ~571 nodes at once); `j`/`k`, click, and hash deep-links still scroll the selected item into view.

On viewports ≤980px, topic/batch/pool/lineage/year/sort/rank collapse behind a **Filters** disclosure so the panes keep height; search and Reset stay visible. Active facets render as dismissible pills under the chrome (clear one or Reset). If the open card is excluded by the current filter, the detail banner offers **Clear filters** (`c`) and **Show first match** (`Enter`); those buttons are in tab order (browse items use `j`/`k` rather than Tab). **Show first match** scrolls to the card and flashes it.

Detail keeps a compact sticky title (rank + up to 3 lines, full title on hover). File stem and authors sit in the scrolling body so they leave as you read — the pinned chrome no longer eats a sixth of the pane. The out-of-filter banner, when present, stays in that sticky bar (one row). Topic/lineage chips are the primary tags; batch/pool/rank/year/venue sit in a quieter provenance row. Topic chips omit a slug that already appears as the lineage (no doubled `radiance-cascades`). Cards titles clamp to 3 lines with a `title` tooltip for the rest.

## Lineage and cites

Optional frontmatter on every card (see [`../README.md`](../README.md)):

| Field | Shape | Meaning |
|-------|--------|---------|
| `lineage` | one string slug | At most one primary thread (`lock-free-queues`, `work-stealing`, …). Omit if the card is not on a thread. |
| `cites` | list of objects | Bibliographic edges. `title` is required. `url` should be set when known; `year`, `arxiv`, `doi` are optional. `card` is the stem of a file in `../cards/` (no `.md`) when that work already has a seed. |

Cards without these keys still pack. When present, the packer keeps them in `cards.json`.

The catalog filter has a **Lineage** dropdown of slugs observed in the corpus (`All` / `No lineage` / one slug). Known slugs show a human title from `src/domain/lineageLabels.ts` (e.g. `concurrent-data-structures` → “Concurrent data structures”); unknown slugs still work as filter values and get a light prettify. Pool options use a smaller title map the same way. Card detail shows a lineage chip (click to filter) and a **Cites** section (title, year, external URL). If `card` points at an id in the packed corpus, that cite deep-links to `#card/<stem>`.

Narrative thread pages live at `seeds/lineages/<slug>.md`. The packer records which of those files exist; the detail view links out to the GitHub copy when a matching doc is present.
