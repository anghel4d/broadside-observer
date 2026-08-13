---
title: "No Cords Attached: Coordination-Free Concurrent Lock-Free Queues"
authors:
  - "Yusuf Motiwala"
year: 2025
venue: "arXiv:cs.DC"
arxiv: "2511.09410"
doi: null
source: "https://arxiv.org/abs/2511.09410"
topics:
  - memory-allocation
  - lockfree
seed_rank: 276
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: concurrent-data-structures
cites:
  - title: "Simple, Fast, and Practical Non-Blocking and Blocking Concurrent Queue Algorithms"
    url: "https://doi.org/10.1145/248052.248106"
    year: 1996
    arxiv: null
    doi: "10.1145/248052.248106"
  - title: "Hazard Pointers: Safe Memory Reclamation for Lock-Free Objects"
    url: "https://doi.org/10.1109/TPDS.2004.8"
    year: 2004
    arxiv: null
    doi: "10.1109/TPDS.2004.8"
  - title: "Safe Memory Reclamation for Dynamic Lock-Free Objects Using Atomic Reads and Writes"
    url: "https://doi.org/10.1145/571825.571829"
    year: 2002
    arxiv: null
    doi: "10.1145/571825.571829"
  - title: "A Scalable, Portable, and Memory-Efficient Lock-Free FIFO Queue"
    url: "https://arxiv.org/abs/1908.04511"
    year: 2019
    arxiv: "1908.04511"
    doi: "10.4230/LIPIcs.DISC.2019.28"
  - title: "wCQ: A Fast Wait-Free Queue with Bounded Memory Usage"
    url: "https://arxiv.org/abs/2201.02179"
    year: 2022
    arxiv: "2201.02179"
    doi: "10.1145/3490148.3538572"
  - title: "Linearizability: A Correctness Condition for Concurrent Objects"
    url: "https://doi.org/10.1145/78969.78972"
    year: 1990
    arxiv: null
    doi: "10.1145/78969.78972"
see:
  - "032-michael-scott-lock-free-queue"
  - "025-hazard-pointers-safe-memory-reclamation-for-lock-free-object"
  - "373-safe-memory-reclamation-for-dynamic-lock-free-objects-using-"
  - "512-nikolaev-scq-scalable-portable-lock-free-fifo"
  - "313-wcq-a-fast-wait-free-queue-with-bounded-memory-usage"
  - "260-linearizability-a-correctness-condition-for-concurrent-objec"
---

# No Cords Attached: Coordination-Free Concurrent Lock-Free Queues

## One-sentence takeaway

The queue is conceptually one of the simplest data structures-a basic FIFO container.

## Why it matters here

Systems/HPC craft relevant to Anoptic concurrency, allocators, and parallel jobbing (No Cords Attached: Coordination-Free Concurrent Lock-Free Queues).

## Key ideas

- The queue is conceptually one of the simplest data structures-a basic FIFO container.
- However, ensuring correctness in the presence of concurrency makes existing lock-free implementations significantly more complex than their original form.
- Coordination mechanisms introduced to prevent hazards such as ABA, use-after-free, and unsafe reclamation often dominate the design, overshadowing the queue itself.
- Many schemes compromise strict FIFO ordering, unbounded capacity, or lock-free progress to mask coordination overheads.
- Yet the true source of complexity lies in the pursuit of infinite protection against reclamation hazards--theoretically sound but impractical and costly.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2511.09410](https://arxiv.org/abs/2511.09410)
- URL: https://arxiv.org/abs/2511.09410
