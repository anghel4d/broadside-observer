---
title: "Jiffy: A Fast, Memory Efficient, Wait-Free Multi-Producers Single-Consumer Queue"
authors:
  - "Dolev Adas"
  - "Roy Friedman"
year: 2020
venue: "arXiv cs.DB"
arxiv: "2010.14189"
doi: null
source: "https://arxiv.org/abs/2010.14189"
topics:
  - lockfree
seed_rank: 253
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
  - title: "Non-Intrusive MPSC Node-Based Queue (1024cores)"
    url: "https://www.1024cores.net/home/lock-free-algorithms/queues/non-intrusive-mpsc-node-based-queue"
    year: 2010
    arxiv: null
    doi: null
  - title: "Wait-Free Queues with Multiple Enqueuers and Dequeuers"
    url: "https://doi.org/10.1145/1941553.1941585"
    year: 2011
    arxiv: null
    doi: "10.1145/1941553.1941585"
see:
  - "031-michael-scott-lock-free-queue"
  - "036-wait-free-synchronization"
  - "203-linearizability-a-correctness-condition-for-concurrent-objec"
  - "425-vyukov-non-intrusive-mpsc-queue"
  - "421-kogan-petrank-wait-free-queues-multiple-enqueuers-dequeuers"
---

# Jiffy: A Fast, Memory Efficient, Wait-Free Multi-Producers Single-Consumer Queue

## One-sentence takeaway

Jiffy is a wait-free MPSC queue that drops the helper structures of wait-free MPMC designs, holding throughput out to 128 threads at up to 50% above the next compared queue while using about 90% less memory.

## Why it matters here

Sharded consumers — one sim thread, one net thread, one GPU submitter — are exactly MPSC. A wait-free, cache-friendly MPSC is the queue you want under ano jobs and GRID COMMAND command ingress, not a general Michael-Scott MPMC.

## Key ideas

- Specialize to multi-producer / single-consumer so you never pay for MPMC helping and extra descriptor nodes.
- Formally linearizable and wait-free; correctness is proved, not sketched.
- Avoids the pointer-chasing, helper-object footprint of wait-free MPMC queues that thrash caches under many enqueuers.
- Measured good scaling to 128 threads, ~50% higher throughput than the next best compared design, and ~90% lower memory.

## Caveats

## Links

- arXiv: [2010.14189](https://arxiv.org/abs/2010.14189)
- PDF: https://arxiv.org/pdf/2010.14189
