---
title: "wCQ: A Fast Wait-Free Queue with Bounded Memory Usage"
authors:
  - "Ruslan Nikolaev"
  - "Binoy Ravindran"
year: 2022
venue: "arXiv:cs.DC"
arxiv: "2201.02179"
doi: "10.1145/3490148.3538572"
source: "https://arxiv.org/abs/2201.02179"
topics:
  - lockfree
seed_rank: 313
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
  - "032-michael-scott-lock-free-queue"
  - "512-nikolaev-scq-scalable-portable-lock-free-fifo"
  - "507-morrison-afek-lcrq-fast-concurrent-queues-x86"
  - "506-kogan-petrank-fast-path-slow-path-wait-free"
  - "510-yang-mellor-crummey-wait-free-queue-fetch-and-add"
  - "037-wait-free-synchronization"
  - "260-linearizability-a-correctness-condition-for-concurrent-objec"
---

# wCQ: A Fast Wait-Free Queue with Bounded Memory Usage

## One-sentence takeaway

The concurrency literature presents a number of approaches for building non-blocking, FIFO, multiple-producer and multiple-consumer (MPMC) queues.

## Why it matters here

Systems/HPC craft relevant to Anoptic concurrency, allocators, and parallel jobbing (wCQ: A Fast Wait-Free Queue with Bounded Memory Usage).

## Key ideas

- The concurrency literature presents a number of approaches for building non-blocking, FIFO, multiple-producer and multiple-consumer (MPMC) queues.
- However, only a fraction of them have high performance.
- In addition, many queue designs, such as LCRQ, trade memory usage for better performance.
- The recently proposed SCQ design achieves both memory efficiency as well as excellent performance.
- Unfortunately, both LCRQ and SCQ are only lock-free.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2201.02179](https://arxiv.org/abs/2201.02179)
- DOI: [10.1145/3490148.3538572](https://doi.org/10.1145/3490148.3538572)
- URL: https://arxiv.org/abs/2201.02179
