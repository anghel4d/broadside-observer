---
title: "Fast, Multicore-Scalable, Low-Fragmentation Memory Allocation through Large Virtual Memory and Global Data Structures (scalloc)"
authors:
  - "Martin Aigner"
  - "Christoph M. Kirsch"
  - "Michael Lippautz"
  - "Ana Sokolova"
year: 2015
venue: "OOPSLA"
arxiv: "1503.09006"
doi: "10.1145/2814270.2814294"
source: "https://doi.org/10.1145/2814270.2814294"
topics:
  - memory-allocation
  - size-class
  - virtual-spans
seed_rank: 589
seed_batch: "lineage-slab-allocators-2026-08-13"
reviewed: "2026-08-13"
pool: "hpc"
relevance_score: 8
lineage: slab-allocators
cites:
  - title: "SuperMalloc: A Super Fast Multithreaded malloc for 64-bit Machines"
    url: "https://doi.org/10.1145/2754169.2754178"
    year: 2015
    arxiv: null
    doi: "10.1145/2754169.2754178"
    card: "412-supermalloc-a-super-fast-multithreaded-malloc-for-64-bit-mac"
  - title: "Mesh: Compacting Memory Management for C/C++ Applications"
    url: "https://arxiv.org/abs/1902.04738"
    year: 2019
    arxiv: "1902.04738"
    doi: null
    card: "399-mesh-compacting-memory-management-for-c-c-applications"
  - title: "Hoard: A Scalable Memory Allocator for Multithreaded Applications"
    url: "https://doi.org/10.1145/378993.379232"
    year: 2000
    arxiv: null
    doi: "10.1145/378993.379232"
    card: "377-hoard-a-scalable-memory-allocator-for-multithreaded-applicat"
---

# Fast, Multicore-Scalable, Low-Fragmentation Memory Allocation through Large Virtual Memory and Global Data Structures (scalloc)

## One-sentence takeaway

scalloc uses uniform virtual spans plus scalable global backends so multicore malloc can be both fast and low-fragmentation.

## Why it matters here

Virtual-span / oversized VA trick is a useful sibling to Mesh’s page aliasing and to 64-bit size-class backends (SuperMalloc).

## Key ideas

- Virtual spans: same-sized VA containers with on-demand physical commit.
- Scalable global backend data structures for span reclaim.
- Constant-time (modulo sync) frontend allocation/deallocation.
- Aims to beat prior fast allocators while using less memory.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- DOI: [10.1145/2814270.2814294](https://doi.org/10.1145/2814270.2814294)
- arXiv: [1503.09006](https://arxiv.org/abs/1503.09006)
- URL: https://doi.org/10.1145/2814270.2814294
