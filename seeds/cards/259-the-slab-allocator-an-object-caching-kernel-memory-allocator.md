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
seed_rank: 259
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
    card: "382-dynamic-storage-allocation-a-survey-and-critical-review"
  - title: "Magazines and Vmem: Extending the Slab Allocator to Many CPUs and Arbitrary Resources"
    url: "https://www.usenix.org/conference/2001-usenix-annual-technical-conference/magazines-and-vmem-extending-slab-allocator-many"
    year: 2001
    arxiv: null
    doi: null
    card: "256-magazines-and-vmem-extending-the-slab-allocator-to-many-cpus"
  - title: "SLUB: The Unqueued Slab Allocator"
    url: "https://lwn.net/Articles/229984/"
    year: 2007
    arxiv: null
    doi: null
    card: "588-slub-the-unqueued-slab-allocator"
  - title: "Design of a General Purpose Memory Allocator for the 4.3BSD UNIX Kernel"
    url: "https://docs-archive.freebsd.org/44doc/papers/kernmalloc.pdf"
    year: 1988
    arxiv: null
    doi: null
    card: "581-design-of-a-general-purpose-memory-allocator-for-the-4-3bsd"
  - title: "Learning Slab Classes to Alleviate Memory Holes in Memcached"
    url: "https://arxiv.org/abs/2009.04403"
    year: 2020
    arxiv: "2009.04403"
    doi: null
    card: "328-learning-slab-classes-to-alleviate-memory-holes-in-memcached"
---

# The Slab Allocator: An Object-Caching Kernel Memory Allocator

## One-sentence takeaway

Bonwick's slab allocator caches initialized objects by size class, reducing fragmentation and constructor cost in kernel heaps.

## Why it matters here

Canonical size-class object caching; mental model for engine pools and multipools.

## Key ideas

- Bonwick's slab allocator caches initialized objects by size class, reducing fragmentation and constructor cost in kernel heaps.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.
- Primary PDF/DOI not yet pinned; verify the canonical artifact before citation.

## Links

- URL: https://www.usenix.org/legacy/publications/library/proceedings/bos94/full_papers/bonwick.ps
