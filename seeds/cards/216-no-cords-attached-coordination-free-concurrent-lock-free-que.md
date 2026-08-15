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
seed_rank: 216
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
  - "031-michael-scott-lock-free-queue"
  - "024-hazard-pointers-safe-memory-reclamation-for-lock-free-object"
  - "428-nikolaev-scq-scalable-portable-lock-free-fifo"
  - "243-wcq-a-fast-wait-free-queue-with-bounded-memory-usage"
  - "203-linearizability-a-correctness-condition-for-concurrent-objec"
---

# No Cords Attached: Coordination-Free Concurrent Lock-Free Queues

## One-sentence takeaway

Cyclic Memory Protection is a coordination-free MPMC queue that keeps strict FIFO, unbounded capacity, and lock-freedom by bounding reclamation windows instead of promising infinite hazard coverage.

## Why it matters here

Anoptic job and netcode queues sit on hundreds of threads; Motiwala's claim is that hazard/epoch coordination dominates the actual enqueue, so a bounded-protection design is the one that stays simple at that scale.

## Key ideas

- Classic lock-free queues grow complex because they try to protect every retired node forever against ABA and use-after-free.
- That "infinite protection" is called a protection paradox: extra fences and descriptors reduce resilience under AI-training-scale thread counts.
- CMP uses bounded protection windows so a node can be reclaimed after a finite interval while still proving linearizability and safety.
- Experiments report 1.72–4× higher throughput than current lock-free queues under high contention, scaling to hundreds of threads.
- Strict FIFO and unbounded capacity are not traded away — those were the usual sacrifices in earlier "simpler" designs.

## Caveats

## Links

- arXiv: [2511.09410](https://arxiv.org/abs/2511.09410)
- PDF: https://arxiv.org/pdf/2511.09410
