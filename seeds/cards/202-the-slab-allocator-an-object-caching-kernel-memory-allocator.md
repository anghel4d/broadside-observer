---
title: "The Slab Allocator: An Object-Caching Kernel Memory Allocator"
authors:
  - "Jeff Bonwick"
year: 1994
venue: "USENIX Summer 1994"
arxiv: null
doi: null
source: "https://www.usenix.org/legacy/publications/library/proceedings/bos94/full_papers/bonwick.ps"
topics:
  - memory-allocation
  - slab
seed_rank: 202
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 10
lineage: memory-allocators
cites:
  - title: "Dynamic Storage Allocation: A Survey and Critical Review"
    url: "https://doi.org/10.1007/3-540-60368-9_19"
    year: 1995
    arxiv: null
    doi: "10.1007/3-540-60368-9_19"
  - title: "Magazines and Vmem: Extending the Slab Allocator to Many CPUs and Arbitrary Resources"
    url: "https://www.usenix.org/conference/2001-usenix-annual-technical-conference/magazines-and-vmem-extending-slab-allocator-many"
    year: 2001
    arxiv: null
    doi: null
  - title: "SLUB: The Unqueued Slab Allocator"
    url: "https://lwn.net/Articles/229984/"
    year: 2007
    arxiv: null
    doi: null
  - title: "Design of a General Purpose Memory Allocator for the 4.3BSD UNIX Kernel"
    url: "https://docs-archive.freebsd.org/44doc/papers/kernmalloc.pdf"
    year: 1988
    arxiv: null
    doi: null
  - title: "Learning Slab Classes to Alleviate Memory Holes in Memcached"
    url: "https://arxiv.org/abs/2009.04403"
    year: 2020
    arxiv: "2009.04403"
    doi: null
see:
  - "306-dynamic-storage-allocation-a-survey-and-critical-review"
  - "199-magazines-and-vmem-extending-the-slab-allocator-to-many-cpus"
  - "443-slub-the-unqueued-slab-allocator"
  - "436-design-of-a-general-purpose-memory-allocator-for-the-4-3bsd"
  - "254-learning-slab-classes-to-alleviate-memory-holes-in-memcached"
---

# The Slab Allocator: An Object-Caching Kernel Memory Allocator

## One-sentence takeaway

Bonwick caches constructed kernel objects in per-size-class slabs so allocation is mostly a list pop and constructors run only when a slab is first filled.

## Why it matters here

Anoptic pools and ECS archetype chunks are the same idea: keep hot object layouts constructed, color them for cache lines, and recycle whole slabs instead of chasing a general heap.

## Key ideas

- A slab is one or more contiguous pages carved into equal-sized object slots for a single cache (inode, vnode, …).
- Object caching retains constructed state across free/alloc so constructors and destructors are not paid on the fast path.
- Cache coloring offsets objects inside the slab to spread them across hardware cache lines and reduce associativity conflicts.
- Per-CPU magazines (in the later Magazines/Vmem follow-on) sit in front of the slab depot so most alloc/free never touch a shared lock.
- Internal fragmentation is bounded by size-class spacing; external fragmentation is limited because unused slabs can be returned to the page allocator.

## Caveats

## Links

- USENIX paper (PostScript): https://www.usenix.org/legacy/publications/library/proceedings/bos94/full_papers/bonwick.ps
- USENIX proceedings page: https://www.usenix.org/conference/usenix-summer-1994-technical-conference/slab-allocator-object-caching-kernel-memory
