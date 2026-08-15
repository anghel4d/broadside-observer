---
title: "A Scalable Concurrent malloc(3) Implementation for FreeBSD (jemalloc)"
authors:
  - "Jason Evans"
year: 2006
venue: "BSDCan 2006"
arxiv: null
doi: null
source: "https://people.freebsd.org/~jasone/jemalloc/bsdcan2006/jemalloc.pdf"
topics:
  - memory-allocation
  - jemalloc
seed_rank: 288
seed_batch: "systems-prefill-2026-08-13"
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
  - title: "Magazines and Vmem: Extending the Slab Allocator to Many CPUs and Arbitrary Resources"
    url: "https://www.usenix.org/conference/2001-usenix-annual-technical-conference/magazines-and-vmem-extending-slab-allocator-many"
    year: 2001
    arxiv: null
    doi: null
  - title: "TCMalloc: Thread-Caching Malloc"
    url: "https://gperftools.github.io/gperftools/tcmalloc.html"
    year: 2007
    arxiv: null
    doi: null
  - title: "mimalloc: Free List Sharding in Action"
    url: "https://arxiv.org/abs/1908.05006"
    year: 2019
    arxiv: "1908.05006"
    doi: null
  - title: "SuperMalloc: A Super Fast Multithreaded malloc for 64-bit Machines"
    url: "https://doi.org/10.1145/2754169.2754178"
    year: 2015
    arxiv: null
    doi: "10.1145/2754169.2754178"
see:
  - "301-hoard-a-scalable-memory-allocator-for-multithreaded-applicat"
  - "199-magazines-and-vmem-extending-the-slab-allocator-to-many-cpus"
  - "442-tcmalloc-thread-caching-malloc"
  - "011-mimalloc-free-list-sharding-in-action"
  - "333-supermalloc-a-super-fast-multithreaded-malloc-for-64-bit-mac"
---

# A Scalable Concurrent malloc(3) Implementation for FreeBSD (jemalloc)

## One-sentence takeaway

jemalloc shards the heap into multiple arenas, each with tight size classes and thread-local caches, so concurrent malloc scales instead of funneling every allocation through one lock.

## Why it matters here

Arena-of-arenas is still the mental model for runtime heaps under ano jobs, ECS pools, and FFI. If you only remember one allocator paper, remember this one.

## Key ideas

- Multiple arenas (typically a function of CPU count) kill allocator lock contention; threads bind to an arena and only rarely steal.
- Size-class layout is chosen so internal fragmentation stays bounded and adjacent classes pack into pages cleanly.
- Thread-local caches / tcache absorb the LIFO burst of short-lived allocations without touching the arena lock.
- Designed as FreeBSD's libc malloc; later became Firefox's, then a standalone project used across the industry.
- BSDCan 2006 PDF is the canonical artifact (people.freebsd.org/~jasone).

## Caveats

## Links

- PDF: https://people.freebsd.org/~jasone/jemalloc/bsdcan2006/jemalloc.pdf
