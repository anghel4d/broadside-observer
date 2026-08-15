---
title: "TCMalloc: Thread-Caching Malloc"
authors:
  - "Sanjay Ghemawat"
  - "Paul Menage"
year: 2007
venue: "Google / gperftools documentation"
arxiv: null
doi: null
source: "https://gperftools.github.io/gperftools/tcmalloc.html"
topics:
  - memory-allocation
  - size-class
  - thread-cache
seed_rank: 442
seed_batch: "lineage-memory-allocators-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 10
lineage: memory-allocators
cites:
  - title: "Magazines and Vmem: Extending the Slab Allocator to Many CPUs and Arbitrary Resources"
    url: "https://www.usenix.org/conference/2001-usenix-annual-technical-conference/magazines-and-vmem-extending-slab-allocator-many"
    year: 2001
    arxiv: null
    doi: null
  - title: "Hoard: A Scalable Memory Allocator for Multithreaded Applications"
    url: "https://doi.org/10.1145/378993.379232"
    year: 2000
    arxiv: null
    doi: "10.1145/378993.379232"
  - title: "A Scalable Concurrent malloc(3) Implementation for FreeBSD (jemalloc)"
    url: "http://people.freebsd.org/~jasone/jemalloc/bsdcan2006/jemalloc.pdf"
    year: 2006
    arxiv: null
    doi: null
  - title: "Beyond malloc efficiency to fleet efficiency: a hugepage-aware memory allocator"
    url: "https://www.usenix.org/system/files/osdi21-hunter.pdf"
    year: 2021
    arxiv: null
    doi: null
see:
  - "199-magazines-and-vmem-extending-the-slab-allocator-to-many-cpus"
  - "301-hoard-a-scalable-memory-allocator-for-multithreaded-applicat"
  - "288-a-scalable-concurrent-malloc-3-implementation-for-freebsd-je"
  - "446-beyond-malloc-efficiency-to-fleet-efficiency-a-hugepage-awa"
---

# TCMalloc: Thread-Caching Malloc

## One-sentence takeaway

TCMalloc popularized per-thread (later per-CPU) caches in front of central size-class freelists for warehouse-scale C/C++.

## Why it matters here

Industrial magazine/thread-cache pattern at Google scale; Temeraire and modern tcmalloc continue the size-class + frontend-cache thread.

## Key ideas

- Thread-local caches for small objects; central free lists per size class.
- Pageheap / span backend separating small vs large paths.
- Transfers between local and central structures to bound per-thread waste.
- Evolved into per-CPU caches (RSEQ) and hugepage-aware backends.

## Caveats

## Links

- HTML: https://gperftools.github.io/gperftools/tcmalloc.html
- Modern design: https://google.github.io/tcmalloc/overview.html
- URL: https://gperftools.github.io/gperftools/tcmalloc.html
