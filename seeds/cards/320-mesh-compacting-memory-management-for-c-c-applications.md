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
doi: "10.1145/3314221.3314582"
source: "https://arxiv.org/abs/1902.04738"
topics:
  - memory-allocation
  - compaction
seed_rank: 320
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
  - title: "mimalloc: Free List Sharding in Action"
    url: "https://arxiv.org/abs/1908.05006"
    year: 2019
    arxiv: "1908.05006"
    doi: null
see:
  - "405-diehard-probabilistic-memory-safety-for-unsafe-languages"
  - "301-hoard-a-scalable-memory-allocator-for-multithreaded-applicat"
  - "011-mimalloc-free-list-sharding-in-action"
---

# Mesh: Compacting Memory Management for C/C++ Applications

## One-sentence takeaway

Mesh randomly assigns objects to pages and then *meshes* two sparsely occupied virtual pages onto one physical page when their occupied slots do not collide, compacting C/C++ heaps without moving pointers.

## Why it matters here

Anoptic cannot relocate game objects whose addresses escaped into GPU buffers or scripts; Mesh is the allocator-level answer — alias pages instead of rewriting pointers — and a complement to mimalloc’s fragmentation story.

## Key ideas

- Classical Robson bounds say a non-moving allocator can be forced into arbitrary fragmentation; Mesh breaks those bounds with high probability by randomizing placement.
- Compaction is a `mmap`/`mremap`-style remap: two virtual pages whose live objects occupy complementary slots share one physical page.
- Because object addresses never change, unmodified binaries (`LD_PRELOAD`) get compaction.
- Reported cuts: Firefox −16% RSS, Redis −39%, with runtime close to state-of-the-art allocators.
- PLDI 2019, arXiv:1902.04738, DOI 10.1145/3314221.3314582.

## Caveats

## Links

- arXiv: [1902.04738](https://arxiv.org/abs/1902.04738)
- DOI: [10.1145/3314221.3314582](https://doi.org/10.1145/3314221.3314582)
