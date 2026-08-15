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
seed_rank: 333
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
  - title: "mimalloc: Free List Sharding in Action"
    url: "https://arxiv.org/abs/1908.05006"
    year: 2019
    arxiv: "1908.05006"
    doi: null
see:
  - "288-a-scalable-concurrent-malloc-3-implementation-for-freebsd-je"
  - "011-mimalloc-free-list-sharding-in-action"
---

# SuperMalloc: A Super Fast Multithreaded malloc for 64-bit Machines

## One-sentence takeaway

SuperMalloc treats a 64-bit address space as cheap: it carves huge virtual ranges into power-of-two size classes and uses per-thread caches plus optional hardware transactional memory so most malloc/free never touch a lock.

## Why it matters here

Anoptic already assumes a fat 64-bit VA; this ISMM 2015 allocator is the extreme version of that bet, and a useful foil for mimalloc/snmalloc page and size-class choices.

## Key ideas

- Objects live in large virtually reserved chunks whose size class is obvious from the address, so lookup of metadata is an address-bit trick rather than a page-map walk.
- Per-thread caches absorb the common case; cross-thread frees go through carefully batched structures. HTM (RTM on Haswell) is an optional fast path for the contended case.
- Reported: about 2.1× faster than the best comparison allocator at 1 thread, 2.75× at 8 threads with HTM, 3.4× at 32 threads without HTM.
- The paper is unapologetically “use the VA, ignore 32-bit,” which matches current game-engine practice and rules the design out of embedded/32-bit targets.
- ISMM 2015, DOI 10.1145/2754169.2754178. Author PDF: https://people.csail.mit.edu/bradley/papers/Kuszmaul15.pdf

## Caveats

## Links

- DOI: [10.1145/2754169.2754178](https://doi.org/10.1145/2754169.2754178)
- PDF: https://people.csail.mit.edu/bradley/papers/Kuszmaul15.pdf
