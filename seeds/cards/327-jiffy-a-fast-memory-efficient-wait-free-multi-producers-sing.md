---
title: "Jiffy: A Fast, Memory Efficient, Wait-Free Multi-Producers Single-Consumer Queue"
authors:
  - "Dolev Adas"
  - "Roy Friedman"
year: 2020
venue: "arXiv:cs.DB"
arxiv: "2010.14189"
doi: null
source: "https://arxiv.org/abs/2010.14189"
topics:
  - lockfree
seed_rank: 327
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
  - "032-michael-scott-lock-free-queue"
  - "037-wait-free-synchronization"
  - "260-linearizability-a-correctness-condition-for-concurrent-objec"
  - "509-vyukov-non-intrusive-mpsc-queue"
  - "505-kogan-petrank-wait-free-queues-multiple-enqueuers-dequeuers"
---

# Jiffy: A Fast, Memory Efficient, Wait-Free Multi-Producers Single-Consumer Queue

## One-sentence takeaway

In applications such as sharded data processing systems, sharded in-memory key-value stores, data flow programming and load sharing applications, multiple concurrent data producers are feeding requests into the same data consumer.

## Why it matters here

Systems/HPC craft relevant to Anoptic concurrency, allocators, and parallel jobbing (Jiffy: A Fast, Memory Efficient, Wait-Free Multi-Producers Single-Consumer Queue).

## Key ideas

- In applications such as sharded data processing systems, sharded in-memory key-value stores, data flow programming and load sharing applications, multiple concurrent data producers are feeding requests into the same data consumer.
- This can be naturally realized through concurrent queues, where each consumer pulls its tasks from its dedicated queue.
- For scalability, wait-free queues are often preferred over lock based structures.
- The vast majority of wait-free queue implementations, and even lock-free ones, support the multi-producer multi-consumer model.
- Yet, this comes at a premium, since implementing wait-free multi-producer multi-consumer queues requires utilizing complex helper data structures.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2010.14189](https://arxiv.org/abs/2010.14189)
- URL: https://arxiv.org/abs/2010.14189
