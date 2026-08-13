# Prefill seeding passes (2026-08-13)

## Pass 1 — Prefill
Goal: consider ~1000 papers across history; publish compact seed digests + refs for the top ~250 most relevant to Broadside / Anoptic / ano / RTS work (cards 1–193).

Method:
1. Wide recall from topic queries, classic citation lists, and venue archives (not only recent arXiv).
2. Cheap score for relevance to project anchors and `radar/topics.yaml`.
3. Keep ~25% as seeds under `seeds/`.
4. Update `radar/seen.json` with stable ids where available.
5. Maintain `seeds/INDEX.md` as the human browsing surface.

## Pass 2 — Systems prefill
Goal: ~1000 NEW candidates focused on HPC / game engines / realtime / classical graphics / classical game AI — **explicitly excluding** modern LLM/transformer/deep-RL agent stacks. Keep top 250 as cards 194–416 (`seed_batch: systems-prefill-2026-08-13`).

Method:
1. Merge `seeds/_pools/pass2/floors_curated.jsonl` (allocator + ECS floors) first.
2. Hand-curated classics across five pools + many arXiv Atom queries with hard ML ban regex.
3. Dedupe against pass1 excludes (`exclude_arxiv.txt`, `exclude_titles.txt`) and existing cards.
4. Diversified top250 with ≥10 memory-allocation and ≥10 ECS seeds.
5. Update `seeds/INDEX.md` (Prefill + Systems prefill sections) and `radar/seen.json`.


## Standing rule

Seed cards are the default lasting unit for keepers across future passes (radar dayparts and themed hauls). See [`seeds/README.md`](../seeds/README.md): append-only numbering, same schema, update `INDEX.md`. Prefills above were the opening library only.
