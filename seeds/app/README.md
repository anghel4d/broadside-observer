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

After this lands on `main`, every push to `main` that touches `seeds/app/**`, `seeds/cards/**`, or `.github/workflows/deploy-seed-browser.yml` rebuilds the single-file bundle and deploys it via GitHub Actions (Pages source: GitHub Actions, not a branch). You can also run the **Deploy seed browser** workflow manually from the Actions tab.

Deep links stay hash routes, e.g. `https://anghel4d.github.io/broadside-observer/#card/<file-stem>`.

The Pages build sets `GITHUB_PAGES=true` so Vite uses `base: '/broadside-observer/'`. Local `npm run build` keeps `base: './'` so `file://` still works.

## Architecture

The program is a small morphism pipeline with an impure shell:

```
CardFile  →  ParseResult  →  SeedCard
[SeedCard]  →  Corpus
Corpus × Query  →  [SeedCard]
```

- **`src/domain/schema.ts`** — Zod schemas are the denotation of a card. Branded types (`CardId`, `Topic`, `Year`, …) keep ids from mixing. Sort keys and section names are finite unions. Filter state is an ADT (`All | One | None`), not a pile of nullable strings. Optional `pool` / `relevance_score` are normalized to `null`, so missing vs empty is not a third state.
- **`src/domain/parse.ts`** — `parseCard: CardSource → Result<ParseError, SeedCard>`. YAML and markdown quirks are normalized (empty `venue`, `null` arxiv/doi, singleton author/topic, missing optional keys), then decoded. No throwing in the domain core; the packer prints every `Err` and exits non-zero.
- **`src/domain/corpus.ts` / `query.ts`** — immutable index (haystacks, topic/batch/pool catalogs) and a total `applyQuery`. Search is tokenized AND over a precomputed lowercase haystack (title, authors, topics, takeaway) with a title-weighted score as tie-breaker.
- **`src/shell/`** — IO: packer, DOM. The UI is a tiny Elm loop (`Model × Msg → Model`) whose `update` is pure; rendering is a patch of list + detail.

Deep links: `#card/<file-stem>`.
