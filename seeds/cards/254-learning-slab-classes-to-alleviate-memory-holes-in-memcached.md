---
title: "Learning Slab Classes to Alleviate Memory Holes in Memcached"
authors:
  - "Devang Jhabakh Jai"
  - "Sudeep Das"
year: 2020
venue: "arXiv cs.DC"
arxiv: "2009.04403"
doi: null
source: "https://arxiv.org/abs/2009.04403"
topics:
  - memory-allocation
seed_rank: 254
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: memory-allocators
cites:
  - title: "The Slab Allocator: An Object-Caching Kernel Memory Allocator"
    url: "https://www.usenix.org/legacy/publications/library/proceedings/bos94/full_papers/bonwick.ps"
    year: 1994
    arxiv: null
    doi: null
  - title: "Magazines and Vmem: Extending the Slab Allocator to Many CPUs and Arbitrary Resources"
    url: "https://www.usenix.org/conference/2001-usenix-annual-technical-conference/magazines-and-vmem-extending-slab-allocator-many"
    year: 2001
    arxiv: null
    doi: null
  - title: "A Scalable Concurrent malloc(3) Implementation for FreeBSD (jemalloc)"
    url: "http://people.freebsd.org/~jasone/jemalloc/bsdcan2006/jemalloc.pdf"
    year: 2006
    arxiv: null
    doi: null
see:
  - "202-the-slab-allocator-an-object-caching-kernel-memory-allocator"
  - "199-magazines-and-vmem-extending-the-slab-allocator-to-many-cpus"
  - "288-a-scalable-concurrent-malloc-3-implementation-for-freebsd-je"
---

# Learning Slab Classes to Alleviate Memory Holes in Memcached

## One-sentence takeaway

A greedy pass over observed item sizes rewrites Memcached's default slab class table so objects sit closer to a class boundary, cutting internal fragmentation when the size mix is stable.

## Why it matters here

Ano heaps and component pools waste the same way: a size-class table that does not match the live histogram leaves holes. Learning classes from traffic is the allocator analog of specializing archetypes to the actual component mix.

## Key ideas

- A memory hole is the slack between an item's true size and the next larger slab class; it is internal fragmentation, not external.
- The algorithm histograms recently inserted sizes and greedily rebuilds the class table to cover that mix.
- Memcached is the vehicle because it already exposes runtime slab-class reconfiguration.
- On a consistent size pattern the authors report large drops in wasted bytes; the method assumes the mix stays put long enough to learn.

## Caveats

## Links

- arXiv: [2009.04403](https://arxiv.org/abs/2009.04403)
- PDF: https://arxiv.org/pdf/2009.04403
