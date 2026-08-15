# Seed cards

Each file in [`cards/`](cards/) is one self-contained seed: same YAML frontmatter, same five body sections, one work per file. That uniformity is intentional — cards are meant to be grepped, indexed, diffed, and eventually browsed in an app without special cases.

Seeds are **denser than bookmarks** and **lighter than** the full analytical digests in [`../summaries/`](../summaries/). Promote a seed to `summaries/NN-slug.md` when it deserves a deep read; do not delete the seed card when you promote it (the card stays as the stable compact entry).

## Ongoing practice (not a one-off)

Future research passes **continue to append** seed cards in this format. Prefill batches (agents-heavy, then systems-heavy) were only the opening library; live cards are densely numbered **1–1000**. Every radar sweep, archive night, craft dive, or themed haul that keeps a work should mint (or refresh) a card under `cards/` and list it in [`INDEX.md`](INDEX.md).

Conventions for new passes:

1. **Same schema** — do not invent parallel card formats. New fields may be added to frontmatter only when they help every card; prefer topics and `seed_batch` over one-off keys.
2. **Append numbering** — live catalog is dense global INDEX order `001`–`1000`. Next card after the current max (`1000`). Never reuse a number.
3. **Name the batch** — set `seed_batch` to a stable slug for the pass (e.g. `frontier-2026-08-14`, `craft-allocators-…`) and `reviewed` to the ISO date.
4. **Update the index** — every pass that adds cards also updates `INDEX.md` (section per batch or a regenerated full table).
5. **Dedupe** — skip works already represented in `cards/` / `radar/seen.json` unless you are deliberately revising a card in place.
6. **Keep rate** — from a wide candidate pool, keep roughly the best ~25% as seeds (same spirit as the deep-digest filter). Themed passes may bias topics; they should not fork the file format.
7. **Lineage edges** — when a keeper sits on a known thread, set `lineage`, populate `cites` (bibliography only), and list live in-library targets in `see`. Deep threads also get `lineages/<slug>.md`.
8. **Pool artifacts optional** — shortlists and merge scripts may live under `_pools/`; only `cards/`, `INDEX.md`, and this README are the human-facing contract.

Scheduled Broadside dayparts (Frontier / Craft / Curiosity / Archive) should default to **seed card first** for keepers that are not yet worth a full `summaries/` digest. Deep digests remain the upgrade path.

## Card format

```yaml
---
title: "..."
authors: ["..."]
year: 1994
venue: "..."
arxiv: null          # or id
doi: null
source: "https://..."
topics: [region-memory-capabilities]
seed_rank: 1         # global INDEX id (unique 1–1000)
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"      # optional: systems | graphics | realtime | engines | game-ai | agents | languages | maths-foundations | ...
relevance_score: 9   # optional: 1–10 for Anghel / Anoptic / ano / RTS fit
lineage: concurrent-data-structures   # optional: single primary thread slug (see Lineage below)
cites:                      # optional: bibliography only (never a nested card key)
  - title: "Simple, Fast, and Practical Non-Blocking and Blocking Concurrent Queue Algorithms"
    url: "https://doi.org/10.1145/248052.248106"
    year: 1996
    arxiv: null          # arXiv id string when the cited work has one; required whenever it does
    doi: "10.1145/248052.248106"
see:                        # optional: filename stems currently in cards/ that this paper cites
  - "031-michael-scott-lock-free-queue"
---
```

Body sections (exact headings):

1. `## One-sentence takeaway`
2. `## Why it matters here` — concrete bridge to Anoptic / ano / GRID COMMAND / Broadside
3. `## Key ideas` — 3–6 bullets, specific
4. `## Caveats` — what not to overclaim
5. `## Links` — PDF/HTML/DOI/arXiv


## Lineage and cites

Optional frontmatter fields turn the library from a flat pile into a graph you can walk. Bibliography and in-library pointers are **siblings**, not nested:

| Field | Shape | Meaning |
|-------|--------|---------|
| `lineage` | one string slug | The **single** primary thread this card belongs to (e.g. `concurrent-data-structures`, `work-stealing-schedulers`, `memory-allocators`, `ecs-data-oriented`, `radiance-cascades`). A card has at most one lineage. |
| `cites` | list of objects | Bibliography only. Each entry is a citation (predecessor, successor, or key related work). Never a nested `card` key. |
| `see` | list of strings | Filename stems (`NNN-slug`, no `.md`) for cards that **currently exist** in `cards/` **and** that this paper cites. Omit if none are live. |

`cites` entry fields:

- `title` (required)
- `url` (required when known; use `https://arxiv.org/abs/<id>` when the work is on arXiv)
- `year`, `arxiv`, `doi` (optional)
- Every cited work that has an arXiv id **must** have `arxiv:` set **and** `url:` pointing at the abs page

`see` is the only in-library pointer. Empty or missing `see` is fine. Do not invent a third related-papers schema.

**Cull rule:** citations must never disappear when a card is culled. Delete the card file, drop that stem from other cards’ `see` lists, and do not touch `cites`.

Narrative write-ups for deep threads live under [`lineages/`](lineages/) as `lineages/<slug>.md` (ordered epistemology of the thread). Cards still carry `lineage: <slug>` so the app can group them. When a successor is important enough, **mint a new seed card** (append numbering), add a `cites` entry both ways as appropriate, and list the live stem in `see`.

Future research passes should fill `lineage` / `cites` / `see` when the edge is obvious.

## Layout

| Path | Role |
|------|------|
| `cards/` | One markdown card per work (the product) |
| `INDEX.md` | Browsable table of all seeds across batches |
| `_pools/` | Scratch shortlists / merge inputs for a pass (not required to read cards) |
| `../radar/seen.json` | Stable ids already considered |
| `../radar/seed-pass.md` | Notes on completed prefill / themed passes |

## Browsing

`INDEX.md` is the current human surface. Because every card shares one schema, a small local or web app can treat `cards/*.md` as a document database (filter by `topics`, `seed_batch`, `year`, `pool`). The TypeScript browser in [`app/`](app/) packs cards to JSON; [`app/README.md`](app/README.md) also documents an MCP server (`query_seeds` / `get_seed`) over that catalog.
