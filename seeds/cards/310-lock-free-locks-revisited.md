---
title: "Lock-Free Locks Revisited"
authors:
  - "Naama Ben-David"
  - "Guy E. Blelloch"
  - "Yuanhao Wei"
year: 2022
venue: "arXiv:cs.DC"
arxiv: "2201.00813"
doi: null
source: "https://arxiv.org/abs/2201.00813"
topics:
  - lockfree
seed_rank: 310
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
  - "025-hazard-pointers-safe-memory-reclamation-for-lock-free-object"
  - "032-michael-scott-lock-free-queue"
  - "037-wait-free-synchronization"
---

# Lock-Free Locks Revisited

## One-sentence takeaway

This paper presents a new and practical approach to lock-free locks based on helping, which allows the user to write code using fine-grained locks, but run it in a lock-free manner.

## Why it matters here

Systems/HPC craft relevant to Anoptic concurrency, allocators, and parallel jobbing (Lock-Free Locks Revisited).

## Key ideas

- This paper presents a new and practical approach to lock-free locks based on helping, which allows the user to write code using fine-grained locks, but run it in a lock-free manner.
- Although lock-free locks have been suggested in the past, they are widely viewed as impractical, have some key limitations, and, as far as we know, have never been implemented.
- The paper presents some key techniques that make lock-free locks practical and more general.
- The most important technique is an approach to idempotence -- i.e.
- making code that runs multiple times appear as if it ran once.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2201.00813](https://arxiv.org/abs/2201.00813)
- URL: https://arxiv.org/abs/2201.00813
