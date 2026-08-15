---
title: "Molecular Matters Memory Allocation series"
authors:
  - "Stefan Reinalter"
year: 2012
venue: "Molecular Musings"
arxiv: null
doi: null
source: "https://blog.molecular-matters.com/2012/08/14/memory-allocation-strategies-a-linear-allocator/"
topics:
  - memory-allocation
seed_rank: 337
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"
relevance_score: 8
cites:
  - title: "Local Memory Allocators in Large-Scale C++ (Lakos allocator model)"
    url: "https://www.youtube.com/watch?v=nZNd5FjSquk"
    year: 2013
    arxiv: null
    doi: null
  - title: "The Slab Allocator: An Object-Caching Kernel Memory Allocator"
    url: "https://www.usenix.org/legacy/publications/library/proceedings/bos94/full_papers/bonwick.ps"
    year: 1994
    arxiv: null
    doi: null
see:
  - "195-local-memory-allocators-in-large-scale-c-lakos-allocator-mod"
  - "202-the-slab-allocator-an-object-caching-kernel-memory-allocator"
---

# Molecular Matters Memory Allocation series

## One-sentence takeaway

Reinalter’s 2012–2013 series implements the four allocators games actually write — linear, LIFO stack, pool, and a growing stack on virtual memory — with the alignment and reset rules that make them frame-safe.

## Why it matters here

Anoptic frame arenas and actor pools are these four strategies; the series is the readable C++ source that sits between Wilson’s survey and a shipping engine heap.

## Key ideas

- Linear allocator: bump a cursor, reset once per frame. O(1) alloc, no per-object free. Alignment handled by rounding the cursor.
- Stack (LIFO) allocator: alloc/free only at the top, with markers so a scope can rewind. Growing variant reserves VA and commits pages as the high-water mark moves.
- Pool allocator: fixed-size slots, intrusive free list. The right tool for components and particles of one size.
- Interlude on virtual memory: reserve vs. commit, why growing stacks should not `realloc`.
- Index: https://blog.molecular-matters.com/tag/memory-allocator/ — the old `molecular-matters.com/resources_memory.html` URL is gone.

## Caveats

## Links

- Linear: https://blog.molecular-matters.com/2012/08/14/memory-allocation-strategies-a-linear-allocator/
- Series tag: https://blog.molecular-matters.com/tag/memory-allocator/
