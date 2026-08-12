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
pool: "hpc"
relevance_score: 9
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
