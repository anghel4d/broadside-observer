---
title: "A Scalable Concurrent malloc(3) Implementation for FreeBSD (jemalloc)"
authors:
  - "Jason Evans"
year: 2006
venue: "BSDCan"
arxiv: null
doi: null
source: "http://people.freebsd.org/~jasone/jemalloc/bsdcan2006/jemalloc.pdf"
topics:
  - memory-allocation
  - jemalloc
seed_rank: 364
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
    card: "377-hoard-a-scalable-memory-allocator-for-multithreaded-applicat"
  - title: "Magazines and Vmem: Extending the Slab Allocator to Many CPUs and Arbitrary Resources"
    url: "https://www.usenix.org/conference/2001-usenix-annual-technical-conference/magazines-and-vmem-extending-slab-allocator-many"
    year: 2001
    arxiv: null
    doi: null
    card: "256-magazines-and-vmem-extending-the-slab-allocator-to-many-cpus"
  - title: "TCMalloc: Thread-Caching Malloc"
    url: "https://gperftools.github.io/gperftools/tcmalloc.html"
    year: 2007
    arxiv: null
    doi: null
    card: "587-tcmalloc-thread-caching-malloc"
  - title: "mimalloc: Free List Sharding in Action"
    url: "https://arxiv.org/abs/1908.05006"
    year: 2019
    arxiv: "1908.05006"
    doi: null
    card: "012-mimalloc-free-list-sharding-in-action"
  - title: "SuperMalloc: A Super Fast Multithreaded malloc for 64-bit Machines"
    url: "https://doi.org/10.1145/2754169.2754178"
    year: 2015
    arxiv: null
    doi: "10.1145/2754169.2754178"
    card: "412-supermalloc-a-super-fast-multithreaded-malloc-for-64-bit-mac"
---

# A Scalable Concurrent malloc(3) Implementation for FreeBSD (jemalloc)

## One-sentence takeaway

jemalloc introduces multiple arenas and careful size-class layout for scalable concurrent malloc on FreeBSD and beyond.

## Why it matters here

Arena-of-arenas design; still the mental model for many runtime heaps.

## Key ideas

- jemalloc introduces multiple arenas and careful size-class layout for scalable concurrent malloc on FreeBSD and beyond.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.
- Primary PDF/DOI not yet pinned; verify the canonical artifact before citation.

## Links

- URL: http://people.freebsd.org/~jasone/jemalloc/bsdcan2006/jemalloc.pdf
