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
pool: "hpc"
relevance_score: 8
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
