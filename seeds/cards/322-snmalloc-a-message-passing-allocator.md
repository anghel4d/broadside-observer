---
title: "snmalloc: A Message Passing Allocator"
authors:
  - "Paul Liétar et al."
year: 2019
venue: "ISMM"
arxiv: null
doi: "10.1145/3315573.3329980"
source: "https://doi.org/10.1145/3315573.3329980"
topics:
  - memory-allocation
seed_rank: 322
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 8
lineage: memory-allocators
cites:
  - title: "Scalable Locality-Conscious Multithreaded Memory Allocation (Streamflow)"
    url: "https://doi.org/10.1145/1133956.1133968"
    year: 2006
    arxiv: null
    doi: "10.1145/1133956.1133968"
  - title: "Scalable Lock-Free Dynamic Memory Allocation"
    url: "https://doi.org/10.1145/996893.996848"
    year: 2004
    arxiv: null
    doi: "10.1145/996893.996848"
  - title: "mimalloc: Free List Sharding in Action"
    url: "https://arxiv.org/abs/1908.05006"
    year: 2019
    arxiv: "1908.05006"
    doi: null
  - title: "A Scalable Concurrent malloc(3) Implementation for FreeBSD (jemalloc)"
    url: "http://people.freebsd.org/~jasone/jemalloc/bsdcan2006/jemalloc.pdf"
    year: 2006
    arxiv: null
    doi: null
see:
  - "441-scalable-locality-conscious-multithreaded-memory-allocatio"
  - "440-scalable-lock-free-dynamic-memory-allocation"
  - "011-mimalloc-free-list-sharding-in-action"
  - "288-a-scalable-concurrent-malloc-3-implementation-for-freebsd-je"
---

# snmalloc: A Message Passing Allocator

## One-sentence takeaway

snmalloc uses message passing for cross-thread deallocation and a modern size-class design.

## Why it matters here

Message-passing remote frees; relevant to wait-free-ish engine heaps.

## Key ideas

- snmalloc uses message passing for cross-thread deallocation and a modern size-class design.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- DOI: [10.1145/3315573.3329980](https://doi.org/10.1145/3315573.3329980)
- URL: https://doi.org/10.1145/3315573.3329980
