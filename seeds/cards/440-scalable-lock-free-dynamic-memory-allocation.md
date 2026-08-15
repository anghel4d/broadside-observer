---
title: "Scalable Lock-Free Dynamic Memory Allocation"
authors:
  - "Maged M. Michael"
year: 2004
venue: "PLDI"
arxiv: null
doi: "10.1145/996893.996848"
source: "https://doi.org/10.1145/996893.996848"
topics:
  - memory-allocation
  - lock-free
  - size-class
seed_rank: 440
seed_batch: "lineage-memory-allocators-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: memory-allocators
cites:
  - title: "Hoard: A Scalable Memory Allocator for Multithreaded Applications"
    url: "https://doi.org/10.1145/378993.379232"
    year: 2000
    arxiv: null
    doi: "10.1145/378993.379232"
  - title: "Scalable Locality-Conscious Multithreaded Memory Allocation"
    url: "https://doi.org/10.1145/1133956.1133968"
    year: 2006
    arxiv: null
    doi: "10.1145/1133956.1133968"
  - title: "snmalloc: A Message Passing Allocator"
    url: "https://doi.org/10.1145/3315573.3329980"
    year: 2019
    arxiv: null
    doi: "10.1145/3315573.3329980"
see:
  - "301-hoard-a-scalable-memory-allocator-for-multithreaded-applicat"
  - "441-scalable-locality-conscious-multithreaded-memory-allocatio"
  - "322-snmalloc-a-message-passing-allocator"
---

# Scalable Lock-Free Dynamic Memory Allocation

## One-sentence takeaway

Michael gives a fully lock-free malloc built on Hoard-like size-class structure, with progress even under thread failure.

## Why it matters here

Bridge from multipool scalability (Hoard) to lock-free remote free paths later seen in Streamflow/snmalloc/mimalloc.

## Key ideas

- Completely lock-free using only common atomics + OS support.
- Adapts Hoard-style per-processor heaps and blowup bounds.
- Lower latency and finer concurrency than lock-based Hoard in the study.
- Usable even from interrupt-like contexts without deadlock.

## Caveats

## Links

- DOI: [10.1145/996893.996848](https://doi.org/10.1145/996893.996848)
- URL: https://doi.org/10.1145/996893.996848
