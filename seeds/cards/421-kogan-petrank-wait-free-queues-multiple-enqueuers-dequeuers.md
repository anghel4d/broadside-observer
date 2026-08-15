---
title: "Wait-Free Queues with Multiple Enqueuers and Dequeuers"
authors:
  - "Alex Kogan"
  - "Erez Petrank"
year: 2011
venue: "PPoPP"
arxiv: null
doi: "10.1145/1941553.1941585"
source: "https://doi.org/10.1145/1941553.1941585"
topics:
  - lockfree
  - queues
seed_rank: 421
seed_batch: "lineage-concurrent-data-structures-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 10
lineage: concurrent-data-structures
cites:
  - title: "Simple, Fast, and Practical Non-Blocking and Blocking Concurrent Queue Algorithms"
    url: "https://doi.org/10.1145/248052.248106"
    year: 1996
    arxiv: null
    doi: "10.1145/248052.248106"
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
  - title: "Hazard Pointers: Safe Memory Reclamation for Lock-Free Objects"
    url: "https://doi.org/10.1109/TPDS.2004.8"
    year: 2004
    arxiv: null
    doi: "10.1109/TPDS.2004.8"
see:
  - "031-michael-scott-lock-free-queue"
  - "036-wait-free-synchronization"
  - "203-linearizability-a-correctness-condition-for-concurrent-objec"
  - "024-hazard-pointers-safe-memory-reclamation-for-lock-free-object"
---

# Wait-Free Queues with Multiple Enqueuers and Dequeuers

## One-sentence takeaway

First practical wait-free MPMC FIFO: MS-queue plus priority-based helping so every operation finishes in bounded steps.

## Why it matters here

Defines the wait-free queue program Anoptic cares about when fairness under preemption beats plain lock-freedom.

## Key ideas

- Builds on Michael & Scott lock-free queue.
- Priority-based helping: faster threads complete slower peers’ pending ops.
- Supports multiple concurrent enqueuers and dequeuers (unlike earlier limited-concurrency wait-free queues).
- Measured against MS across OS/scheduling configs; sometimes competitive despite stronger guarantee.

## Caveats

## Links

- DOI: [10.1145/1941553.1941585](https://doi.org/10.1145/1941553.1941585)
- PDF: https://csaws.cs.technion.ac.il/~erez/Papers/wfquque-ppopp.pdf
