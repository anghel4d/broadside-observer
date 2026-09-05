---
title: "Skiplists with Foresight: Skipping Cache Misses"
authors: ["Tomer Cory", "Niv Sulimany", "Erez Petrank"]
year: 2026
venue: "arXiv (cs.DC)"
arxiv: "2606.13321"
doi: null
source: "https://arxiv.org/abs/2606.13321"
topics: [lockfree-game-parallelism, concurrent-data-structures]
seed_rank: 1596
seed_batch: "craft-2026-09-05"
reviewed: "2026-09-05"
pool: "systems"
relevance_score: 8
lineage: concurrent-data-structures
cites:
  - title: "Skip Lists: A Probabilistic Alternative to Balanced Trees"
    url: "https://doi.org/10.1145/78973.78977"
    year: 1990
    arxiv: null
    doi: "10.1145/78973.78977"
see:
  - "768-skip-lists-a-probabilistic-alternative-to-balanced-trees"
  - "207-space-efficient-lock-free-linear-probing-hash-table"
---

# Skiplists with Foresight: Skipping Cache Misses

## One-sentence takeaway

Foresight is a surgical, cache-friendly prefetch for skiplists — including concurrent ones, once the extra synchronization is faced — up to **45%** microbench throughput and **15%** end-to-end on a DBx1000 skiplist index.

## Why it matters here

Ordered Anoptic indexes and GRID COMMAND spatial/time keys still want a skiplist when open addressing (207) cannot keep order. Pugh 768 is the sequential probabilistic list; this is the cache-miss leftover: prefetch the search path (“foresight”) instead of taking a miss per level. Drop it into a concurrent ordered map this week rather than inventing another tree.

## Key ideas

- **Foresight = prefetch the upcoming search nodes.** Skiplist search is pointer-chasing across levels; the optimization issues prefetches so the next node is in cache when you arrive. Surgical: intended to graft onto existing sequential and concurrent designs, not a new list.
- **Concurrent sync is the paper.** Extending prefetch into concurrent skiplists creates races the sequential story never had; the contribution is identifying and closing those holes rather than a new lock-free algorithm.
- **Applied to four hosts.** One sequential + three concurrent skiplist designs; microbenchmarks up to **45%** throughput.
- **Systems number.** Skiplist index inside DBx1000: up to **15%** end-to-end. That is the “does this survive a real engine” check.

## Caveats

Prefetch-friendly hardware assumed; a miss-heavy in-order core will not magically match the 45%. Concurrent correctness tax is real — do not paste sequential Foresight onto a lock-free list. Ordered indexes only; entity maps that do not need order should stay on 207. Concurrent skiplist `2309.09359` was a Craft 2026-09-03 near-keeper and is still not reminted. Do not remint 768 / 207.

## Links

- arXiv abs: https://arxiv.org/abs/2606.13321
- PDF: https://arxiv.org/pdf/2606.13321
