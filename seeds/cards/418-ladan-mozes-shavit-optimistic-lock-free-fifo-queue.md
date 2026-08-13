---
title: "An Optimistic Approach to Lock-Free FIFO Queues"
authors:
  - "Edya Ladan-Mozes"
  - "Nir Shavit"
year: 2004
venue: "DISC"
arxiv: null
doi: "10.1007/978-3-540-30186-8_9"
source: "https://doi.org/10.1007/978-3-540-30186-8_9"
topics:
  - lockfree
  - queues
seed_rank: 418
seed_batch: "lineage-concurrent-data-structures-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 8
lineage: concurrent-data-structures
cites:
  - title: "Simple, Fast, and Practical Non-Blocking and Blocking Concurrent Queue Algorithms"
    url: "https://doi.org/10.1145/248052.248106"
    year: 1996
    arxiv: null
    doi: "10.1145/248052.248106"
  - title: "Linearizability: A Correctness Condition for Concurrent Objects"
    url: "https://doi.org/10.1145/78969.78972"
    year: 1990
    arxiv: null
    doi: "10.1145/78969.78972"
  - title: "Hazard Pointers: Safe Memory Reclamation for Lock-Free Objects"
    url: "https://doi.org/10.1109/TPDS.2004.8"
    year: 2004
    arxiv: null
    doi: "10.1109/TPDS.2004.8"
see:
  - "031-michael-scott-lock-free-queue"
  - "203-linearizability-a-correctness-condition-for-concurrent-objec"
  - "024-hazard-pointers-safe-memory-reclamation-for-lock-free-object"
---

# An Optimistic Approach to Lock-Free FIFO Queues

## One-sentence takeaway

Replaces MS singly-linked CAS spine with an optimistic doubly-linked list that usually updates with plain stores and repairs rare inconsistencies.

## Why it matters here

Teaches the Anoptic pattern of “fast common path, fix-up rare path” that later wait-free and industrial queues still use.

## Key ideas

- Lock-free linearizable FIFO intended to beat MS-queue on common workloads.
- Optimistic doubly-linked structure: reverse pointers written with stores; fixList reconciles bad interleavings.
- Aims for one successful CAS per enqueue/dequeue in the common case.
- Direct predecessor spirit to baskets and other CAS-reduction queue designs.

## Caveats

- Still needs careful memory reclamation (hazard pointers / GC) in unmanaged runtimes.
- Optimistic repairs complicate proofs and implementations versus textbook MS.
- Seed card; verify journal vs DISC versions before citation.

## Links

- DOI: [10.1007/978-3-540-30186-8_9](https://doi.org/10.1007/978-3-540-30186-8_9)
- PDF (DISC): https://people.csail.mit.edu/edya/publications/OptimisticFIFOQueue-DISC2004.pdf
