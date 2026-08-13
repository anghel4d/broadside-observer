---
title: "FLeeC: a Fast Lock-Free Application Cache"
authors:
  - "André J. Costa"
  - "Nuno M. Preguiça"
  - "João M. Lourenço"
year: 2024
venue: "arXiv:cs.DC"
arxiv: "2406.09428"
doi: null
source: "https://arxiv.org/abs/2406.09428"
topics:
  - lockfree
seed_rank: 282
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
    card: "025-hazard-pointers-safe-memory-reclamation-for-lock-free-object"
  - title: "Michael & Scott Lock-Free Queue"
    url: "https://doi.org/10.1145/248052.248106"
    year: 1996
    arxiv: null
    doi: "10.1145/248052.248106"
    card: "032-michael-scott-lock-free-queue"
  - title: "Wait-Free Synchronization"
    url: "https://doi.org/10.1145/114005.102808"
    year: 1991
    arxiv: null
    doi: "10.1145/114005.102808"
    card: "037-wait-free-synchronization"
---

# FLeeC: a Fast Lock-Free Application Cache

## One-sentence takeaway

When compared to blocking concurrency, non-blocking concurrency can provide higher performance in parallel shared-memory contexts, especially in high contention scenarios.

## Why it matters here

Systems/HPC craft relevant to Anoptic concurrency, allocators, and parallel jobbing (FLeeC: a Fast Lock-Free Application Cache).

## Key ideas

- When compared to blocking concurrency, non-blocking concurrency can provide higher performance in parallel shared-memory contexts, especially in high contention scenarios.
- This paper proposes FLeeC, an application-level cache system based on Memcached, which leverages re-designed data structures and non-blocking (or lock-free) concurrency to improve performance by allowing any number of concurrent writes and reads to its main data structures, even in high-contention scenarios.
- We discuss and evaluate its new algorithms, which allow a lock-free eviction policy and lock-free fast lookups.
- FLeeC can be used as a plug-in replacement for the original Memcached, and its new algorithms and concurrency control strategies result in considerable performance improvements (up to 6x).

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2406.09428](https://arxiv.org/abs/2406.09428)
- URL: https://arxiv.org/abs/2406.09428
