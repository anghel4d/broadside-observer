---
title: "Scalable Locality-Conscious Multithreaded Memory Allocation (Streamflow)"
authors:
  - "Scott Schneider"
  - "Christos D. Antonopoulos"
  - "Dimitrios S. Nikolopoulos"
year: 2006
venue: "ISMM"
arxiv: null
doi: "10.1145/1133956.1133968"
source: "https://doi.org/10.1145/1133956.1133968"
topics:
  - memory-allocation
  - size-class
  - lock-free
seed_rank: 441
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
  - title: "Scalable Lock-Free Dynamic Memory Allocation"
    url: "https://doi.org/10.1145/996893.996848"
    year: 2004
    arxiv: null
    doi: "10.1145/996893.996848"
  - title: "TCMalloc: Thread-Caching Malloc"
    url: "https://gperftools.github.io/gperftools/tcmalloc.html"
    year: 2007
    arxiv: null
    doi: null
  - title: "snmalloc: A Message Passing Allocator"
    url: "https://doi.org/10.1145/3315573.3329980"
    year: 2019
    arxiv: null
    doi: "10.1145/3315573.3329980"
see:
  - "301-hoard-a-scalable-memory-allocator-for-multithreaded-applicat"
  - "440-scalable-lock-free-dynamic-memory-allocation"
  - "442-tcmalloc-thread-caching-malloc"
  - "322-snmalloc-a-message-passing-allocator"
---

# Scalable Locality-Conscious Multithreaded Memory Allocation (Streamflow)

## One-sentence takeaway

Streamflow makes the common local alloc/free path synchronization-free via private segregated heaps and lock-free remote free lists.

## Why it matters here

Direct ancestor of modern remote-free / message-passing deallocation designs (snmalloc) and of “owner thread reclaims” instincts in engine heaps.

## Key ideas

- Thread-private segregated heaps: local malloc/free with no atomics.
- Lock-free remote free list for cross-thread frees.
- Header-less small objects and superpage-conscious locality.
- Targets both scalability and cache/TLB behavior.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- DOI: [10.1145/1133956.1133968](https://doi.org/10.1145/1133956.1133968)
- PDF: https://scott-a-s.com/files/ismm06.pdf
- URL: https://doi.org/10.1145/1133956.1133968
