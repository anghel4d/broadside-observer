---
title: "FreSh: A Lock-Free Data Series Index"
authors:
  - "Panagiota Fatourou"
  - "Eleftherios Kosmas"
  - "Themis Palpanas"
  - "George Paterakis"
year: 2023
venue: "SRDS 2023"
arxiv: "2310.11602"
doi: null
source: "https://arxiv.org/abs/2310.11602"
topics:
  - lockfree
seed_rank: 230
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
cites:
  - title: "Wait-Free Synchronization"
    url: "https://doi.org/10.1145/114005.102808"
    year: 1991
    arxiv: null
    doi: "10.1145/114005.102808"
  - title: "Linearizability: A Correctness Condition for Concurrent Objects"
    url: "https://doi.org/10.1145/78969.78972"
    year: 1990
    arxiv: null
    doi: "10.1145/78969.78972"
see:
  - "036-wait-free-synchronization"
  - "203-linearizability-a-correctness-condition-for-concurrent-objec"
---

# FreSh: A Lock-Free Data Series Index

## One-sentence takeaway

FreSh is a lock-free in-memory data-series index built by repeatedly applying Refresh, a generic helping transform for locality-aware blocking indexes, and matches blocking SOTA throughput.

## Why it matters here

Anoptic telemetry, animation curves, and GRID COMMAND replay traces are data series; a lock-free index that does not wreck cache locality is how those queries share a core with the sim.

## Key ideas

- Refresh is the reusable idea: add lock-freedom on top of any locality-aware series index without throwing away its blocking-path layout.
- A modular theoretical framework factors current series-index designs so Refresh can be applied phase by phase.
- Helping is kept light enough that FreSh matches the best blocking in-memory series index on synthetic and real sets.
- The same Refresh recipe is claimed for other locality-aware blocking structures, not only series indexes.
- SRDS 2023.

## Caveats

## Links

- arXiv: [2310.11602](https://arxiv.org/abs/2310.11602)
- PDF: https://arxiv.org/pdf/2310.11602
