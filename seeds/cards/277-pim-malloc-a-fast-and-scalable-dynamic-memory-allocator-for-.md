---
title: "PIM-malloc: A Fast and Scalable Dynamic Memory Allocator for Processing-In-Memory (PIM) Architectures"
authors:
  - "Dongjae Lee"
  - "Bongjoon Hyun"
  - "Youngjin Kwon"
  - "Minsoo Rhu"
year: 2025
venue: "arXiv:cs.AR"
arxiv: "2505.13002"
doi: null
source: "https://arxiv.org/abs/2505.13002"
topics:
  - memory-allocation
seed_rank: 277
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "hpc"
relevance_score: 9
---

# PIM-malloc: A Fast and Scalable Dynamic Memory Allocator for Processing-In-Memory (PIM) Architectures

## One-sentence takeaway

The ability to dynamically allocate memory is fundamental in modern programming languages.

## Why it matters here

Systems/HPC craft relevant to Anoptic concurrency, allocators, and parallel jobbing (PIM-malloc: A Fast and Scalable Dynamic Memory Allocator for Processing-In-Memor).

## Key ideas

- The ability to dynamically allocate memory is fundamental in modern programming languages.
- However, this feature is not adequately supported in current general-purpose PIM devices.
- To identify key design principles that PIM must consider, we conduct a design space exploration of PIM memory allocators, examining various strategies for metadata placement and management of the allocator.
- Based on this exploration, we introduce PIM-malloc, a fast and scalable memory allocator for general-purpose PIM that operates on real PIM hardware, achieving a x66 improvement in memory allocation performance.
- This design is further enhanced with a lightweight, per-PIM core hardware cache, specifically designed for dynamic memory allocation, achieving an additional 31% performance improvement.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2505.13002](https://arxiv.org/abs/2505.13002)
- URL: https://arxiv.org/abs/2505.13002
