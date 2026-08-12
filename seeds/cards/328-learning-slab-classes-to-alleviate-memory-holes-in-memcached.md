---
title: "Learning Slab Classes to Alleviate Memory Holes in Memcached"
authors:
  - "Devang Jhabakh Jai"
  - "Sudeep Das"
year: 2020
venue: "arXiv:cs.DC"
arxiv: "2009.04403"
doi: null
source: "https://arxiv.org/abs/2009.04403"
topics:
  - memory-allocation
seed_rank: 328
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "hpc"
relevance_score: 9
---

# Learning Slab Classes to Alleviate Memory Holes in Memcached

## One-sentence takeaway

We consider the problem of memory holes in slab allocators, where an item entered into memory occupies more memory than it actually requires due to a difference between the nearest larger slab class size and the size of the entered item.

## Why it matters here

Systems/HPC craft relevant to Anoptic concurrency, allocators, and parallel jobbing (Learning Slab Classes to Alleviate Memory Holes in Memcached).

## Key ideas

- We consider the problem of memory holes in slab allocators, where an item entered into memory occupies more memory than it actually requires due to a difference between the nearest larger slab class size and the size of the entered item.
- We solve this problem by using a greedy algorithm that analyses the pattern of the sizes of items previously entered into the memory and accordingly re-configuring the default slab classes to better suit the learned traffic pattern to minimize memory holes.
- Using this approach for a consistent data pattern, in our findings, has yielded significant reductions in memory wastage.
- We consider Memcached as it is one of the most widely used implementations of slab allocators today, and has native support to reconfigure its default slab classes.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2009.04403](https://arxiv.org/abs/2009.04403)
- URL: https://arxiv.org/abs/2009.04403
