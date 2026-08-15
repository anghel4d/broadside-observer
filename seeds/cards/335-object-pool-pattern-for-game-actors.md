---
title: "Object Pool Pattern for Game Actors"
authors:
  - "Robert Nystrom"
year: 2014
venue: "Game Programming Patterns"
arxiv: null
doi: null
source: "https://gameprogrammingpatterns.com/object-pool.html"
topics:
  - memory-allocation
  - pools
seed_rank: 335
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"
relevance_score: 8
cites:
  - title: "The Slab Allocator: An Object-Caching Kernel Memory Allocator"
    url: "https://www.usenix.org/legacy/publications/library/proceedings/bos94/full_papers/bonwick.ps"
    year: 1994
    arxiv: null
    doi: null
see:
  - "202-the-slab-allocator-an-object-caching-kernel-memory-allocator"
---

# Object Pool Pattern for Game Actors

## One-sentence takeaway

Nystrom’s chapter preallocates a fixed array of reusable objects (particles, bullets, enemies) and recycles dead slots so spawn/despawn never hits the general heap in a frame.

## Why it matters here

Anoptic actors and GRID COMMAND projectiles are exactly this lifetime pattern; a typed pool is the engine default before you reach mimalloc or a frame arena.

## Key ideas

- A pool is a free list over a pre-sized slab. `create()` pops a slot and reinitializes it; `destroy()` pushes it back. No `new`/`delete` on the hot path.
- Fixed capacity makes worst-case spawn time and memory visible in the budget; overflow is a design choice (drop, steal oldest, or grow).
- Storing the next-free index *in* the dead object avoids a second array, at the cost of not using that memory while the object is live.
- Pools also improve locality: live particles sit in a compact array the update loop can scan with an `alive` flag or by swapping the last live into a hole.
- Canonical write-up: *Game Programming Patterns*, “Object Pool,” 2014, free at the URL above.

## Caveats

## Links

- URL: https://gameprogrammingpatterns.com/object-pool.html
