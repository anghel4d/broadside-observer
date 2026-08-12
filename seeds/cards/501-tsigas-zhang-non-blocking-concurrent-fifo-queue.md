---
title: "A Simple, Fast and Scalable Non-Blocking Concurrent FIFO Queue for Shared Memory Multiprocessor Systems"
authors:
  - "Philippas Tsigas"
  - "Yi Zhang"
year: 2001
venue: "SPAA"
arxiv: null
doi: "10.1145/378580.378611"
source: "https://doi.org/10.1145/378580.378611"
topics:
  - lockfree
  - queues
seed_rank: 501
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
    card: "032-michael-scott-lock-free-queue"
  - title: "Linearizability: A Correctness Condition for Concurrent Objects"
    url: "https://doi.org/10.1145/78969.78972"
    year: 1990
    arxiv: null
    doi: "10.1145/78969.78972"
    card: "260-linearizability-a-correctness-condition-for-concurrent-objec"
---

# A Simple, Fast and Scalable Non-Blocking Concurrent FIFO Queue for Shared Memory Multiprocessor Systems

## One-sentence takeaway

Early post–Michael–Scott non-blocking FIFO that attacks head/tail contention and CAS pointer recycling on large SMPs.

## Why it matters here

Shows the first major practical pressure on MS-queue hot spots — useful when Anoptic event buses outgrow a single CAS tail.

## Key ideas

- Bounded array-based non-blocking FIFO using CAS.
- Two mechanisms: reduce contention on shared head/tail indices, and recycle pointers safely without ABA traps.
- Empirically faster than prior alternatives on 64-node UMA and ccNUMA machines of its era.
- Bridges classic linked MS-queues toward later ring/array designs (LCRQ, Vyukov, SCQ).

## Caveats

- Bounded capacity; not a drop-in unbounded MS replacement.
- Hardware and allocator landscape has moved; treat as historical scalability lesson more than a ship-today recipe.
- Seed card; promote before relying on fine-grained claims.

## Links

- DOI: [10.1145/378580.378611](https://doi.org/10.1145/378580.378611)
- PDF: https://www.cse.chalmers.se/~tsigas/papers/spaa01.pdf
