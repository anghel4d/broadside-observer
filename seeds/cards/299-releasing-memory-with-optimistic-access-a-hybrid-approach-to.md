---
title: "Releasing Memory with Optimistic Access: A Hybrid Approach to Memory Reclamation and Allocation in Lock-Free Programs"
authors:
  - "Pedro Moreno"
  - "Ricardo Rocha"
year: 2023
venue: "arXiv:cs.DC"
arxiv: "2302.06520"
doi: null
source: "https://arxiv.org/abs/2302.06520"
topics:
  - memory-allocation
  - lockfree
seed_rank: 299
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "hpc"
relevance_score: 9
---

# Releasing Memory with Optimistic Access: A Hybrid Approach to Memory Reclamation and Allocation in Lock-Free Programs

## One-sentence takeaway

Lock-free data structures are an important tool for the development of concurrent programs as they provide scalability, low latency and avoid deadlocks, livelocks and priority inversion.

## Why it matters here

Systems/HPC craft relevant to Anoptic concurrency, allocators, and parallel jobbing (Releasing Memory with Optimistic Access: A Hybrid Approach to Memory Reclamation).

## Key ideas

- Lock-free data structures are an important tool for the development of concurrent programs as they provide scalability, low latency and avoid deadlocks, livelocks and priority inversion.
- However, they require some sort of additional support to guarantee memory reclamation.
- The Optimistic Access (OA) method has most of the desired properties for memory reclamation, but since it allows memory to be accessed after being reclaimed, it is incompatible with the traditional memory management model.
- This renders it unable to release memory to the memory allocator/operating system, and, as such, it requires a complex memory recycling mechanism.
- In this paper, we extend the lock-free general purpose memory allocator LRMalloc to support the OA method.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2302.06520](https://arxiv.org/abs/2302.06520)
- URL: https://arxiv.org/abs/2302.06520
