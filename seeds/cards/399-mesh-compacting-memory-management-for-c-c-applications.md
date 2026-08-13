---
title: "Mesh: Compacting Memory Management for C/C++ Applications"
authors:
  - "Bobby Powers"
  - "David Tench"
  - "Emery D. Berger"
  - "Andrew McGregor"
year: 2019
venue: "PLDI"
arxiv: "1902.04738"
doi: null
source: "https://arxiv.org/abs/1902.04738"
topics:
  - memory-allocation
  - compaction
seed_rank: 399
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 8
lineage: memory-allocators
cites:
  - title: "DieHard: Probabilistic Memory Safety for Unsafe Languages"
    url: "https://doi.org/10.1145/1133981.1134000"
    year: 2006
    arxiv: null
    doi: "10.1145/1133981.1134000"
  - title: "Hoard: A Scalable Memory Allocator for Multithreaded Applications"
    url: "https://doi.org/10.1145/378993.379232"
    year: 2000
    arxiv: null
    doi: "10.1145/378993.379232"
  - title: "Fast, Multicore-Scalable, Low-Fragmentation Memory Allocation through Large Virtual Memory and Global Data Structures (scalloc)"
    url: "https://doi.org/10.1145/2814270.2814294"
    year: 2015
    arxiv: "1503.09006"
    doi: "10.1145/2814270.2814294"
  - title: "mimalloc: Free List Sharding in Action"
    url: "https://arxiv.org/abs/1908.05006"
    year: 2019
    arxiv: "1908.05006"
    doi: null
see:
  - "488-diehard-probabilistic-memory-safety-for-unsafe-languages"
  - "377-hoard-a-scalable-memory-allocator-for-multithreaded-applicat"
  - "589-fast-multicore-scalable-low-fragmentation-memory-allocatio"
  - "012-mimalloc-free-list-sharding-in-action"
---

# Mesh: Compacting Memory Management for C/C++ Applications

## One-sentence takeaway

Mesh compactifies heaps by mapping multiple virtual pages to one physical page when contents are compatible.

## Why it matters here

Randomized compaction without relocating pointers via page aliasing — fragmentation countermeasure.

## Key ideas

- Mesh compactifies heaps by mapping multiple virtual pages to one physical page when contents are compatible.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [1902.04738](https://arxiv.org/abs/1902.04738)
- URL: https://arxiv.org/abs/1902.04738
