---
title: "Wait-free Replicated Data Types and Fair Reconciliation"
authors:
  - "Petr Kuznetsov"
  - "Maxence Perion"
  - "Sara Tucci-Piergiovanni"
year: 2025
venue: "arXiv:cs.DC"
arxiv: "2508.18193"
doi: null
source: "https://arxiv.org/abs/2508.18193"
topics:
  - lockfree
seed_rank: 219
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

# Wait-free Replicated Data Types and Fair Reconciliation

## One-sentence takeaway

Replication ensures data availability in fault-prone distributed systems.

## Why it matters here

Systems/HPC craft relevant to Anoptic concurrency, allocators, and parallel jobbing (Wait-free Replicated Data Types and Fair Reconciliation).

## Key ideas

- Replication ensures data availability in fault-prone distributed systems.
- The celebrated CAP theorem stipulates that replicas cannot guarantee both strong consistency and availability under network partitions.
- A popular alternative, adopted by CRDTs, is to relax consistency to be eventual.
- It enables progress to be wait-free, as replicas can serve requests immediately.
- Yet, wait-free replication faces a key challenge: due to asynchrony and concurrency, operations may be constantly reordered, leading to results inconsistent with their original contexts and preventing them from stabilizing over time.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2508.18193](https://arxiv.org/abs/2508.18193)
- URL: https://arxiv.org/abs/2508.18193
