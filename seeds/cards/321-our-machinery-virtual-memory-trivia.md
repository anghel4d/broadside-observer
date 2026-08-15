---
title: "Our Machinery Virtual Memory Trivia"
authors:
  - "Niklas Frykholm"
year: 2017
venue: "Our Machinery Blog"
arxiv: null
doi: null
source: "https://ruby0x1.github.io/machinery_blog_archive/post/virtual-memory-tricks/index.html"
topics:
  - memory-allocation
seed_rank: 321
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"
relevance_score: 8
cites:
  - title: "The Magic Ring Buffer"
    url: "https://fgiesen.wordpress.com/2012/07/21/the-magic-ring-buffer/"
    year: 2012
    arxiv: null
    doi: null
  - title: "The Slab Allocator: An Object-Caching Kernel Memory Allocator"
    url: "https://www.usenix.org/legacy/publications/library/proceedings/bos94/full_papers/bonwick.ps"
    year: 1994
    arxiv: null
    doi: null
see:
  - "202-the-slab-allocator-an-object-caching-kernel-memory-allocator"
---

# Our Machinery Virtual Memory Trivia

## One-sentence takeaway

Frykholm’s 2017 note shows how reserve-without-commit virtual memory gives engines huge stable arrays, typed unique IDs, end-of-page overwrite traps, fragment-free page allocators, and wrap-free ring buffers.

## Why it matters here

Anoptic heaps already live in 64-bit address space; these are the concrete `VirtualAlloc`/`mmap` tricks for ID tables, frame arenas, and lock-free queues that should not bounce through `std::vector`.

## Key ideas

- Reserve a billion-slot object-pointer table; only touched pages consume RAM, and the base address never moves, so writers can atomically swap pointers.
- Opaque pointers carved from reserved pages are process-wide unique IDs with type safety and zero physical cost.
- An end-of-page allocator aligns each block to the end of its last page so use-after-free and overflow become access violations instead of silent corruption.
- Physical memory cannot fragment under page-granularity virtual allocs; grow dynamic arrays by whole pages rather than element counts to keep internal waste ~½ page.
- Double-map a ring buffer (Giesen’s magic ring buffer) so wraparound is just a second virtual view of the same physical pages.
- Original `ourmachinery.com/post/virtual-memory-tricks/` is gone; the archive and the Game Developer reprint are the stable copies. Year is 2017, not 2019.

## Caveats

## Links

- Archive: https://ruby0x1.github.io/machinery_blog_archive/post/virtual-memory-tricks/index.html
- Reprint: https://www.gamedeveloper.com/programming/virtual-memory-tricks
