---
title: "Wait-free Trees with Asymptotically-Efficient Range Queries"
authors:
  - "Ilya Kokorin"
  - "Dan Alistarh"
  - "Vitaly Aksenov"
year: 2023
venue: "arXiv:cs.DB"
arxiv: "2310.05293"
doi: null
source: "https://arxiv.org/abs/2310.05293"
topics:
  - lockfree
seed_rank: 236
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

# Wait-free Trees with Asymptotically-Efficient Range Queries

## One-sentence takeaway

Tree data structures, such as red-black trees, quad trees, treaps, or tries, are fundamental tools in computer science.

## Why it matters here

Systems/HPC craft relevant to Anoptic concurrency, allocators, and parallel jobbing (Wait-free Trees with Asymptotically-Efficient Range Queries).

## Key ideas

- Tree data structures, such as red-black trees, quad trees, treaps, or tries, are fundamental tools in computer science.
- A classical problem in concurrency is to obtain expressive, efficient, and scalable versions of practical tree data structures.
- We are interested in concurrent trees supporting range queries, i.e., queries that involve multiple consecutive data items.
- Existing implementations with this capability can list keys in a specific range, but do not support aggregate range queries: for instance, if we want to calculate the number of keys in a range, the only choice is to retrieve a whole list and return its size.
- This is suboptimal: in the sequential setting, one can augment a balanced search tree with counters and, consequently, perform these aggregate requests in logarithmic rather than linear time.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2310.05293](https://arxiv.org/abs/2310.05293)
- URL: https://arxiv.org/abs/2310.05293
