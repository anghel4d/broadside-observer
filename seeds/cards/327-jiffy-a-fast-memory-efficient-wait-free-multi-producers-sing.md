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
pool: "hpc"
relevance_score: 9
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
