---
title: "Per-Frame Arena Allocation Patterns in Games"
authors:
  - "industry practice"
year: 2012
venue: "GDC / blogs"
arxiv: null
doi: null
source: "https://bitsquid.blogspot.com/2010/09/custom-memory-allocation-in-c.html"
topics:
  - memory-allocation
  - arena
seed_rank: 343
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"
relevance_score: 8
cites:
  - title: "Bitsquid Custom Memory Allocation in C++"
    url: "https://bitsquid.blogspot.com/2010/09/custom-memory-allocation-in-c.html"
    year: 2010
    arxiv: null
    doi: null
  - title: "Local Memory Allocators in Large-Scale C++ (Lakos allocator model)"
    url: "https://www.youtube.com/watch?v=nZNd5FjSquk"
    year: 2013
    arxiv: null
    doi: null
  - title: "Molecular Matters Memory Allocation series"
    url: "https://blog.molecular-matters.com/2012/08/14/memory-allocation-strategies-a-linear-allocator/"
    year: 2012
    arxiv: null
    doi: null
see:
  - "274-bitsquid-custom-memory-allocation-in-c"
  - "195-local-memory-allocators-in-large-scale-c-lakos-allocator-mod"
  - "337-molecular-matters-memory-allocation-series"
---

# Per-Frame Arena Allocation Patterns in Games

## One-sentence takeaway

A frame arena is a linear allocator reset at the end of the frame, so transient rendering, physics contacts, and UI strings are bump-pointer cheap and have a guaranteed lifetime.

## Why it matters here

This is Anoptic’s default for anything that must not outlive the frame: command buffers, scratch SoA, debug text. The Game Developer “alternatives to new/delete” article is a weak landing page; Bitsquid 2010 is the actual engineering note.

## Key ideas

- One (or a few) linear buffers per thread. `alloc(n)` rounds for alignment and advances a cursor; `reset()` rewinds to zero after GPU / sim handoff.
- No individual free, so no fragmentation inside the frame. Overflow is either a hard budget assert or a chained block.
- Double-buffer when the GPU still reads last frame’s commands: allocate from arena N, reset arena N−1.
- Nested markers (stack-on-arena) cover scopes shorter than a frame — e.g. one system’s scratch inside the frame arena.
- Complements typed object pools (long-lived actors) and the global mimalloc heap (cross-frame ownership).

## Caveats

## Links

- Bitsquid: https://bitsquid.blogspot.com/2010/09/custom-memory-allocation-in-c.html
- Related: https://www.gamedeveloper.com/programming/alternatives-to-new-and-delete
