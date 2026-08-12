# Seed cards

Each file in [`cards/`](cards/) is one self-contained seed: same YAML frontmatter, same five body sections, one work per file. That uniformity is intentional — cards are meant to be grepped, indexed, diffed, and eventually browsed in an app without special cases.

Seeds are **denser than bookmarks** and **lighter than** the full analytical digests in [`../summaries/`](../summaries/). Promote a seed to `summaries/NN-slug.md` when it deserves a deep read; do not delete the seed card when you promote it (the card stays as the stable compact entry).

## Ongoing practice (not a one-off)

Future research passes **continue to append** seed cards in this format. Prefill batches (001–250 agents-heavy, 251–500 systems-heavy) were only the opening library. Every radar sweep, archive night, craft dive, or themed haul that keeps a work should mint (or refresh) a card under `cards/` and list it in [`INDEX.md`](INDEX.md).

Conventions for new passes:

1. **Same schema** — do not invent parallel card formats. New fields may be added to frontmatter only when they help every card; prefer topics and `seed_batch` over one-off keys.
2. **Append numbering** — next card after the current max `NNN-*.md` in `cards/` (today: through `500`). Never reuse a number.
3. **Name the batch** — set `seed_batch` to a stable slug for the pass (e.g. `frontier-2026-08-14`, `craft-allocators-…`) and `reviewed` to the ISO date.
4. **Update the index** — every pass that adds cards also updates `INDEX.md` (section per batch or a regenerated full table).
5. **Dedupe** — skip works already represented in `cards/` / `radar/seen.json` unless you are deliberately revising a card in place.
6. **Keep rate** — from a wide candidate pool, keep roughly the best ~25% as seeds (same spirit as the deep-digest filter). Themed passes may bias topics; they should not fork the file format.
7. **Pool artifacts optional** — shortlists and merge scripts may live under `_pools/`; only `cards/`, `INDEX.md`, and this README are the human-facing contract.

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
seed_rank: 1         # rank within its batch (or global order in INDEX)
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "engine"       # optional: hpc | graphics | realtime | engine | gameai | agents | language | ...
relevance_score: 9   # optional: 1–10 for Anghel / Anoptic / ano / RTS fit
---
```

Body sections (exact headings):

1. `## One-sentence takeaway`
2. `## Why it matters here` — concrete bridge to Anoptic / ano / GRID COMMAND / Broadside
3. `## Key ideas` — 3–6 bullets, specific
4. `## Caveats` — what not to overclaim
5. `## Links` — PDF/HTML/DOI/arXiv

## Layout

| Path | Role |
|------|------|
| `cards/` | One markdown card per work (the product) |
| `INDEX.md` | Browsable table of all seeds across batches |
| `_pools/` | Scratch shortlists / merge inputs for a pass (not required to read cards) |
| `../radar/seen.json` | Stable ids already considered |
| `../radar/seed-pass.md` | Notes on completed prefill / themed passes |

## Browsing

`INDEX.md` is the current human surface. The static app in [`app/`](app/) parses `cards/*.md` through a schema, packs them into JSON, and filters in the browser. See [`app/README.md`](app/README.md) to run it. Keep adding cards in this format regardless.
