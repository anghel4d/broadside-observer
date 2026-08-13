---
title: "Non-blocking Dynamic Unbounded Graphs with Wait-Free Snapshot"
authors:
  - "Gaurav Bhardwaj"
  - "Sathya Peri"
  - "Pratik Shetty"
year: 2023
venue: "arXiv:cs.DC"
arxiv: "2310.02380"
doi: null
source: "https://arxiv.org/abs/2310.02380"
topics:
  - lockfree
seed_rank: 233
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

# Non-blocking Dynamic Unbounded Graphs with Wait-Free Snapshot

## One-sentence takeaway

Graphs are arguably one of the most fundamental data-structure used in many domains such as block-chain, networks etc.

## Why it matters here

Systems/HPC craft relevant to Anoptic concurrency, allocators, and parallel jobbing (Non-blocking Dynamic Unbounded Graphs with Wait-Free Snapshot).

## Key ideas

- Graphs are arguably one of the most fundamental data-structure used in many domains such as block-chain, networks etc.
- Theoretically and practically, improving Graph performance is one of the most studied and omnipresent research problems.
- In this paper, we have implemented a dynamic unbounded concurrent graph which can perform the add, delete or lookup operations on vertices and edges concurrently.
- All these methods are lock-free and linearizable.
- On top of this, we have also implemented the wait-free graph snapshot algorithm.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2310.02380](https://arxiv.org/abs/2310.02380)
- URL: https://arxiv.org/abs/2310.02380
