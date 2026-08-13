---
title: "FreSh: A Lock-Free Data Series Index"
authors:
  - "Panagiota Fatourou"
  - "Eleftherios Kosmas"
  - "Themis Palpanas"
  - "George Paterakis"
year: 2023
venue: "arXiv:cs.DB"
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
  - title: "Hazard Pointers: Safe Memory Reclamation for Lock-Free Objects"
    url: "https://doi.org/10.1109/tpds.2004.8"
    year: 2004
    arxiv: null
    doi: "10.1109/tpds.2004.8"
  - title: "Michael & Scott Lock-Free Queue"
    url: "https://doi.org/10.1145/248052.248106"
    year: 1996
    arxiv: null
    doi: "10.1145/248052.248106"
  - title: "Wait-Free Synchronization"
    url: "https://doi.org/10.1145/114005.102808"
    year: 1991
    arxiv: null
    doi: "10.1145/114005.102808"
see:
  - "024-hazard-pointers-safe-memory-reclamation-for-lock-free-object"
  - "031-michael-scott-lock-free-queue"
  - "036-wait-free-synchronization"
---

# FreSh: A Lock-Free Data Series Index

## One-sentence takeaway

We present FreSh, a lock-free data series index that exhibits good performance (while being robust).

## Why it matters here

Systems/HPC craft relevant to Anoptic concurrency, allocators, and parallel jobbing (FreSh: A Lock-Free Data Series Index).

## Key ideas

- We present FreSh, a lock-free data series index that exhibits good performance (while being robust).
- FreSh is based on Refresh, which is a generic approach we have developed for supporting lock-freedom in an efficient way on top of any localityaware data series index.
- We believe Refresh is of independent interest and can be used to get well-performed lock-free versions of other locality-aware blocking data structures.
- For developing FreSh, we first studied in depth the design decisions of current state-of-the-art data series indexes, and the principles governing their performance.
- This led to a theoretical framework, which enables the development and analysis of data series indexes in a modular way.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2310.11602](https://arxiv.org/abs/2310.11602)
- URL: https://arxiv.org/abs/2310.11602
