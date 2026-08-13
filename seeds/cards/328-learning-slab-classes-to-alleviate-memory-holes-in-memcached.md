---
title: "Learning Slab Classes to Alleviate Memory Holes in Memcached"
authors:
  - "Devang Jhabakh Jai"
  - "Sudeep Das"
year: 2020
venue: "arXiv:cs.DC"
arxiv: "2009.04403"
doi: null
source: "https://arxiv.org/abs/2009.04403"
topics:
  - memory-allocation
seed_rank: 328
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
  - "259-the-slab-allocator-an-object-caching-kernel-memory-allocator"
  - "256-magazines-and-vmem-extending-the-slab-allocator-to-many-cpus"
  - "364-a-scalable-concurrent-malloc-3-implementation-for-freebsd-je"
---

# Learning Slab Classes to Alleviate Memory Holes in Memcached

## One-sentence takeaway

We consider the problem of memory holes in slab allocators, where an item entered into memory occupies more memory than it actually requires due to a difference between the nearest larger slab class size and the size of the entered item.

## Why it matters here

Systems/HPC craft relevant to Anoptic concurrency, allocators, and parallel jobbing (Learning Slab Classes to Alleviate Memory Holes in Memcached).

## Key ideas

- We consider the problem of memory holes in slab allocators, where an item entered into memory occupies more memory than it actually requires due to a difference between the nearest larger slab class size and the size of the entered item.
- We solve this problem by using a greedy algorithm that analyses the pattern of the sizes of items previously entered into the memory and accordingly re-configuring the default slab classes to better suit the learned traffic pattern to minimize memory holes.
- Using this approach for a consistent data pattern, in our findings, has yielded significant reductions in memory wastage.
- We consider Memcached as it is one of the most widely used implementations of slab allocators today, and has native support to reconfigure its default slab classes.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2009.04403](https://arxiv.org/abs/2009.04403)
- URL: https://arxiv.org/abs/2009.04403
