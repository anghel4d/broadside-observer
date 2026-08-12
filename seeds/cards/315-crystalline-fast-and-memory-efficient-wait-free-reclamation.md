---
title: "Crystalline: Fast and Memory Efficient Wait-Free Reclamation"
authors:
  - "Ruslan Nikolaev"
  - "Binoy Ravindran"
year: 2021
venue: "arXiv:cs.DC"
arxiv: "2108.02763"
doi: null
source: "https://arxiv.org/abs/2108.02763"
topics:
  - memory-allocation
  - lockfree
seed_rank: 315
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "hpc"
relevance_score: 9
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
