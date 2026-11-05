---
title: "Incremental Open Addressing Has No Time-Space Tradeoff"
authors:
  - "Martín Farach-Colton"
  - "Andrew Krapivin"
  - "William Kuszmaul"
year: 2026
venue: "arXiv preprint (cs.DS)"
arxiv: "2611.04186"
doi: null
source: "https://arxiv.org/abs/2611.04186"
topics:
  - "custom-allocators-runtime"
  - "lockfree-game-parallelism"
  - "ecs-data-oriented-simulation"
seed_rank: 2520
seed_batch: "craft-2026-11-05"
reviewed: "2026-11-05"
pool: "systems"
relevance_score: 9
cites:
  - title: "Incremental Open Addressing Has No Time-Space Tradeoff"
    url: "https://arxiv.org/abs/2611.04186"
    year: 2026
    arxiv: "2611.04186"
    doi: null
see: ["207-space-efficient-lock-free-linear-probing-hash-table", "416-robin-hood-hashing", "1494-cuckoo-hashing"]
---

# Incremental Open Addressing Has No Time-Space Tradeoff

## One-sentence takeaway

In the insert-only open-addressing model you can get $O(1)$ worst-case expected insertions, positive queries and negative queries at every load factor up to and including a completely full table, so the classic $\Omega(\log\log\varepsilon^{-1})$ dynamic lower bound does not apply when deletions are forbidden.

## Why it matters here

Anoptic's open-addressing lineage (linear probing, Robin Hood, cuckoo) lives in the incremental world of ECS entity IDs, interned strings and standing-rule fact tables that grow and almost never shrink mid-frame. This paper says that world has no forced time–space tradeoff: a full table can still be $O(1)$ expected per op if reordering is allowed, which is exactly the budget a frame-time hash map wants.

## Key ideas

- **Incremental vs dynamic.** Dynamic open addressing (with deletes) needs $\Omega(\log\log\varepsilon^{-1})$ expected time; the incremental (insert-only) setting admits a constant.
- **With reordering.** Theorem 1.1: metadata is only an occupancy counter; every insertion and every query is $O(1)$ worst-case expected even at load factor 1 (including the last-slot fill).
- **Without reordering.** Theorem 1.2 beats the coupon-collector insertion bottleneck: $O(1)$ worst-case expected inserts plus $O(1)$ amortized expected positive queries (worst-case positive queries still $O(\log n)$).
- **Model.** Classical/oblivious open addressing: fixed probe sequence per key, queries walk that sequence; inserts may inspect and rearrange arbitrarily.
- **Implication.** The hard log-log lower bound is a deletion artefact, not an inherent cost of packing an array dense.

## Caveats

Theory paper (46 pages); no shipped implementation. "Worst-case expected" is over the hash functions, not adversarial hashes. Deletes are out of scope, so ephemeral scratch maps that churn still sit under the dynamic bound. I read the abstract and introduction.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.04186
- PDF: https://arxiv.org/pdf/2611.04186
