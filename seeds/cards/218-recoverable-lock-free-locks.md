---
title: "Recoverable Lock-Free Locks"
authors:
  - "Hagit Attiya"
  - "Panagiota Fatourou"
  - "Eleftherios Kosmas"
  - "Yuanhao Wei"
year: 2025
venue: "arXiv:cs.DC"
arxiv: "2512.09710"
doi: null
source: "https://arxiv.org/abs/2512.09710"
topics:
  - lockfree
seed_rank: 218
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

# Recoverable Lock-Free Locks

## One-sentence takeaway

This paper presents the first transformation that introduces both lock-freedom and recoverability.

## Why it matters here

Systems/HPC craft relevant to Anoptic concurrency, allocators, and parallel jobbing (Recoverable Lock-Free Locks).

## Key ideas

- This paper presents the first transformation that introduces both lock-freedom and recoverability.
- Our transformation starts with a lock-based implementation, and provides a recoverable, lock-free substitution to lock acquire and lock release operations.
- The transformation supports nested locks for generality and ensures recoverability without jeopardising the correctness of the lock-based implementation it is applied on.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2512.09710](https://arxiv.org/abs/2512.09710)
- URL: https://arxiv.org/abs/2512.09710
