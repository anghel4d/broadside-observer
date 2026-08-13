---
title: 'Crystalline: Fast and Memory Efficient Wait-Free Reclamation'
authors:
- Ruslan Nikolaev
- Binoy Ravindran
year: 2021
venue: arXiv:cs.DC
arxiv: '2108.02763'
doi: null
source: https://arxiv.org/abs/2108.02763
topics:
- memory-allocation
- lockfree
seed_rank: 315
seed_batch: systems-prefill-2026-08-13
reviewed: '2026-08-13'
pool: systems
relevance_score: 9
lineage: memory-reclamation
cites:
- title: Universal Wait-Free Memory Reclamation
  url: https://arxiv.org/abs/2006.07688
  year: 2020
  arxiv: '2006.07688'
  doi: null
- title: 'Hyaline: Fast and Transparent Lock-Free Memory Reclamation'
  url: https://arxiv.org/abs/1905.07903
  year: 2019
  arxiv: '1905.07903'
  doi: null
- title: Simple, Fast, and Practical Non-Blocking and Blocking Concurrent Queue Algorithms
  url: https://doi.org/10.1145/248052.248106
  year: 1996
  arxiv: null
  doi: 10.1145/248052.248106
- title: 'Hazard Pointers: Safe Memory Reclamation for Lock-Free Objects'
  url: https://doi.org/10.1109/TPDS.2004.8
  year: 2004
  arxiv: null
  doi: 10.1109/TPDS.2004.8
see:
- "333-universal-wait-free-memory-reclamation"
- "704-hyaline-fast-and-transparent-lock-free-memory-reclamati"
- "032-michael-scott-lock-free-queue"
- "025-hazard-pointers-safe-memory-reclamation-for-lock-free-object"
---

# Crystalline: Fast and Memory Efficient Wait-Free Reclamation

## One-sentence takeaway

Historically, memory management based on lock-free reference counting was very inefficient, especially for read-dominated workloads.

## Why it matters here

Systems/HPC craft relevant to Anoptic concurrency, allocators, and parallel jobbing (Crystalline: Fast and Memory Efficient Wait-Free Reclamation).

## Key ideas

- Historically, memory management based on lock-free reference counting was very inefficient, especially for read-dominated workloads.
- Thus, approaches such as epoch-based reclamation (EBR), hazard pointers (HP), or a combination thereof have received significant attention.
- EBR exhibits excellent performance but is blocking due to potentially unbounded memory usage.
- In contrast, HP are non-blocking and achieve good memory efficiency but are much slower.
- Moreover, HP are only lock-free in the general case.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2108.02763](https://arxiv.org/abs/2108.02763)
- URL: https://arxiv.org/abs/2108.02763
