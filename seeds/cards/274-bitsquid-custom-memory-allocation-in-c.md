---
title: "Bitsquid Custom Memory Allocation in C++"
authors:
  - "Niklas Frykholm"
year: 2010
venue: "Bitsquid Blog"
arxiv: null
doi: null
source: "https://bitsquid.blogspot.com/2010/09/custom-memory-allocation-in-c.html"
topics:
  - memory-allocation
  - arena
seed_rank: 274
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"
relevance_score: 9
cites:
  - title: "Per-Frame Arena Allocation Patterns in Games"
    url: "https://www.gamedeveloper.com/programming/alternatives-to-new-and-delete"
    year: 2012
    arxiv: null
    doi: null
  - title: "Local Memory Allocators in Large-Scale C++ (Lakos allocator model)"
    url: "https://www.youtube.com/watch?v=nZNd5FjSquk"
    year: 2013
    arxiv: null
    doi: null
  - title: "Magazines and Vmem: Extending the Slab Allocator to Many CPUs and Arbitrary Resources"
    url: "https://www.usenix.org/conference/2001-usenix-annual-technical-conference/magazines-and-vmem-extending-slab-allocator-many"
    year: 2001
    arxiv: null
    doi: null
see:
  - "343-per-frame-arena-allocation-patterns-in-games"
  - "195-local-memory-allocators-in-large-scale-c-lakos-allocator-mod"
  - "199-magazines-and-vmem-extending-the-slab-allocator-to-many-cpus"
---

# Bitsquid Custom Memory Allocation in C++

## One-sentence takeaway

Bitsquid never calls global `new`: every subsystem takes an `Allocator&`, and the shipped hierarchy is heap, scratch/frame arena, page, and pool allocators composed by ownership.

## Why it matters here

Ano's frame arenas and subsystem heaps are this post. The interface-plus-scratch pattern is how you keep the renderer, physics, and ECS from fighting one global malloc.

## Key ideas

- An abstract `Allocator` with `allocate` / `deallocate` is passed into every system; default `new` is banned.
- Scratch (frame) allocators reset en masse at frame end — the per-frame arena pattern.
- Pool allocators serve fixed-size component records; page allocators back large streaming blocks.
- Parent/child allocators let you scope a temporary heap under a permanent one and dump it without walking objects.
- September 2010 Bitsquid blog post; the same design survived into Autodesk Stingray.

## Caveats

## Links

- Post: https://bitsquid.blogspot.com/2010/09/custom-memory-allocation-in-c.html
