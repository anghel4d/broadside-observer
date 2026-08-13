---
title: "Lock-Free Augmented Trees"
authors:
  - "Panagiota Fatourou"
  - "Eric Ruppert"
year: 2024
venue: "arXiv:cs.DS"
arxiv: "2405.10506"
doi: null
source: "https://arxiv.org/abs/2405.10506"
topics:
  - lockfree
seed_rank: 222
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

# Lock-Free Augmented Trees

## One-sentence takeaway

Augmenting an existing sequential data structure with extra information to support greater functionality is a widely used technique.

## Why it matters here

Systems/HPC craft relevant to Anoptic concurrency, allocators, and parallel jobbing (Lock-Free Augmented Trees).

## Key ideas

- Augmenting an existing sequential data structure with extra information to support greater functionality is a widely used technique.
- For example, search trees are augmented to build sequential data structures like order-statistic trees, interval trees, tango trees, link/cut trees and many others.
- We study how to design concurrent augmented tree data structures.
- We present a new, general technique that can augment a lock-free tree to add any new fields to each tree node, provided the new fields' values can be computed from information in the node and its children.
- This enables the design of lock-free, linearizable analogues of a wide variety of classical augmented data structures.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2405.10506](https://arxiv.org/abs/2405.10506)
- URL: https://arxiv.org/abs/2405.10506
