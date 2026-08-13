---
title: "SuperMalloc: A Super Fast Multithreaded malloc for 64-bit Machines"
authors:
  - "Bradley C. Kuszmaul"
year: 2015
venue: "ISMM"
arxiv: null
doi: "10.1145/2754169.2754178"
source: "https://doi.org/10.1145/2754169.2754178"
topics:
  - memory-allocation
seed_rank: 412
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 8
lineage: memory-allocators
cites:
  - title: "A Scalable Concurrent malloc(3) Implementation for FreeBSD (jemalloc)"
    url: "http://people.freebsd.org/~jasone/jemalloc/bsdcan2006/jemalloc.pdf"
    year: 2006
    arxiv: null
    doi: null
  - title: "TCMalloc: Thread-Caching Malloc"
    url: "https://gperftools.github.io/gperftools/tcmalloc.html"
    year: 2007
    arxiv: null
    doi: null
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
  - "364-a-scalable-concurrent-malloc-3-implementation-for-freebsd-je"
  - "587-tcmalloc-thread-caching-malloc"
  - "589-fast-multicore-scalable-low-fragmentation-memory-allocatio"
  - "012-mimalloc-free-list-sharding-in-action"
---

# SuperMalloc: A Super Fast Multithreaded malloc for 64-bit Machines

## One-sentence takeaway

SuperMalloc optimizes large-address-space multithreaded allocation with careful page and size-class strategies.

## Why it matters here

Aggressive 64-bit multithreaded malloc engineering notes.

## Key ideas

- SuperMalloc optimizes large-address-space multithreaded allocation with careful page and size-class strategies.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- DOI: [10.1145/2754169.2754178](https://doi.org/10.1145/2754169.2754178)
- URL: https://doi.org/10.1145/2754169.2754178
