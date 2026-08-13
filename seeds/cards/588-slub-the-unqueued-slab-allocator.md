---
title: "SLUB: The Unqueued Slab Allocator"
authors:
  - "Christoph Lameter"
year: 2007
venue: "Linux kernel / LWN (merged ~2.6.22–2.6.23)"
arxiv: null
doi: null
source: "https://lwn.net/Articles/229984/"
topics:
  - memory-allocation
  - slab
  - kernel
seed_rank: 588
seed_batch: "lineage-memory-allocators-2026-08-13"
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
  - title: "Design of a General Purpose Memory Allocator for the 4.3BSD UNIX Kernel"
    url: "https://docs-archive.freebsd.org/44doc/papers/kernmalloc.pdf"
    year: 1988
    arxiv: null
    doi: null
see:
  - "259-the-slab-allocator-an-object-caching-kernel-memory-allocator"
  - "256-magazines-and-vmem-extending-the-slab-allocator-to-many-cpus"
  - "581-design-of-a-general-purpose-memory-allocator-for-the-4-3bsd"
---

# SLUB: The Unqueued Slab Allocator

## One-sentence takeaway

SLUB simplifies Linux’s Bonwick-descended slab caches: fewer queues, per-CPU slabs, cache merging — becoming the default kernel object allocator.

## Why it matters here

Living kernel successor of the slab epistemology; reminds engine pools that metadata/queue complexity is itself a scalability tax.

## Key ideas

- Drops most of SLAB’s object queues in favor of per-CPU slab pages.
- Merges similar caches to cut fragmentation and metadata.
- Retains slab/object-caching API while lowering fast-path instruction count.
- Coexists historically with SLAB/SLOB; became default in mainline Linux.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- LWN: https://lwn.net/Articles/229984/
- Patch discussion: https://lwn.net/Articles/225618/
- URL: https://lwn.net/Articles/229984/
