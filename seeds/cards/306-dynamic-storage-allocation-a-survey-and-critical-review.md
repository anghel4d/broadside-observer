---
title: "Dynamic Storage Allocation: A Survey and Critical Review"
authors:
  - "Paul R. Wilson"
  - "Mark S. Johnstone"
  - "Michael Neely"
  - "David Boles"
year: 1995
venue: "IWMM"
arxiv: null
doi: "10.1007/3-540-60368-9_19"
source: "https://doi.org/10.1007/3-540-60368-9_19"
topics:
  - memory-allocation
  - survey
seed_rank: 306
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
  - title: "Design of a General Purpose Memory Allocator for the 4.3BSD UNIX Kernel"
    url: "https://docs-archive.freebsd.org/44doc/papers/kernmalloc.pdf"
    year: 1988
    arxiv: null
    doi: null
  - title: "A Memory Allocator (dlmalloc)"
    url: "https://gee.cs.oswego.edu/dl/html/malloc.html"
    year: 2000
    arxiv: null
    doi: null
see:
  - "202-the-slab-allocator-an-object-caching-kernel-memory-allocator"
---

# Dynamic Storage Allocation: A Survey and Critical Review

## One-sentence takeaway

Wilson et al. argue that three decades of allocator papers over-studied mechanisms (boundary tags, bitmaps, buddy) and under-studied placement policy, which is what actually drives fragmentation.

## Why it matters here

This is still the map of freelists, segregated fits, buddy, and coalescing that Anoptic’s frame arenas and mimalloc size classes sit on top of.

## Key ideas

- Split the problem into *policy* (which free block to choose) and *mechanism* (how the free set is represented); most published “new allocators” only change the mechanism.
- Sequential fits (first/next/best), segregated free lists, buddy systems, and indexed fits are the four families; real programs rarely hit the Robson worst cases.
- External fragmentation is dominated by the program’s size-class mix and lifetime patterns, not by whether you use boundary tags or a bitmap.
- Immediate coalescing is not always a win; deferred coalescing and size-class caches often fragment less in practice.
- The survey covers 1961–1995 and remains the citation for “measure real traces before inventing another heap.”

## Caveats

## Links

- DOI: [10.1007/3-540-60368-9_19](https://doi.org/10.1007/3-540-60368-9_19)
- PDF: https://lasr.cs.ucla.edu/classes/cs111_online.winter17/readings/memory_allocation_survey.pdf
