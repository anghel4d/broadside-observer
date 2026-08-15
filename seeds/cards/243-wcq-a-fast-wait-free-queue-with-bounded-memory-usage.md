---
title: "wCQ: A Fast Wait-Free Queue with Bounded Memory Usage"
authors:
  - "Ruslan Nikolaev"
  - "Binoy Ravindran"
year: 2022
venue: "SPAA 2022"
arxiv: "2201.02179"
doi: "10.1145/3490148.3538572"
source: "https://arxiv.org/abs/2201.02179"
topics:
  - lockfree
seed_rank: 243
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
  - title: "A Scalable, Portable, and Memory-Efficient Lock-Free FIFO Queue"
    url: "https://arxiv.org/abs/1908.04511"
    year: 2019
    arxiv: "1908.04511"
    doi: "10.4230/LIPIcs.DISC.2019.28"
  - title: "Fast Concurrent Queues for x86 Processors"
    url: "https://doi.org/10.1145/2442516.2442527"
    year: 2013
    arxiv: null
    doi: "10.1145/2442516.2442527"
  - title: "A Methodology for Creating Fast Wait-Free Data Structures"
    url: "https://doi.org/10.1145/2145816.2145835"
    year: 2012
    arxiv: null
    doi: "10.1145/2145816.2145835"
  - title: "A Wait-Free Queue as Fast as Fetch-and-Add"
    url: "https://doi.org/10.1145/2851141.2851168"
    year: 2016
    arxiv: null
    doi: "10.1145/2851141.2851168"
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
see:
  - "031-michael-scott-lock-free-queue"
  - "428-nikolaev-scq-scalable-portable-lock-free-fifo"
  - "423-morrison-afek-lcrq-fast-concurrent-queues-x86"
  - "422-kogan-petrank-fast-path-slow-path-wait-free"
  - "426-yang-mellor-crummey-wait-free-queue-fetch-and-add"
  - "036-wait-free-synchronization"
  - "203-linearizability-a-correctness-condition-for-concurrent-objec"
---

# wCQ: A Fast Wait-Free Queue with Bounded Memory Usage

## One-sentence takeaway

wCQ lifts Nikolaev's SCQ to wait-freedom with a fast-path/slow-path variant that also bounds memory, so it does not become blocking when the heap is exhausted the way YMC does.

## Why it matters here

Anoptic MPMC command and job queues need wait-freedom without LCRQ's memory blow-up; wCQ is the SCQ-shaped design that finally has both.

## Key ideas

- LCRQ is fast but memory-hungry and only lock-free; SCQ is fast and lean but still only lock-free.
- Prior wait-free queues are either slow or have unbounded memory — YMC in particular blocks once memory runs out, forfeiting wait-freedom.
- wCQ starts from SCQ and applies its own fast-path/slow-path helping to become wait-free with a memory bound.
- Measured on x86 and PowerPC, performance is often on par with the best lock-free queues.
- SPAA 2022 (doi 10.1145/3490148.3538572).

## Caveats

## Links

- arXiv: [2201.02179](https://arxiv.org/abs/2201.02179)
- DOI: [10.1145/3490148.3538572](https://doi.org/10.1145/3490148.3538572)
- PDF: https://arxiv.org/pdf/2201.02179
