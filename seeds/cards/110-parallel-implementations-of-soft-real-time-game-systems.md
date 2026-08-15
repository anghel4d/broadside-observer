---
title: Parallel Implementations of Soft Real-Time Game Systems
authors:
- Mike Acton
year: 2014
venue: CppCon
arxiv: null
doi: null
source: https://www.youtube.com/watch?v=rX0ItVEVjHc
topics:
- dod
- engine
seed_rank: 110
seed_batch: prefill-2026-08-13
reviewed: '2026-08-13'
pool: engines
relevance_score: 9
cites:
- title: Intel Threading Building Blocks
  url: https://www.threadingbuildingblocks.org/
  year: 2007
  arxiv: null
  doi: null
see:
- "105-job-system-and-fiber-architecture-naughty-dog"
- "403-intel-threading-building-blocks"
---

# Parallel Implementations of Soft Real-Time Game Systems

## One-sentence takeaway

The only purpose of a program is to transform data: design the bytes and the loop that reads/writes them for the hardware, not an object model of the world.

## Why it matters here

Anoptic / GRID COMMAND ECS is this talk applied: systems are A→B transforms over SoA component arrays, virtual-soup entity graphs are the thing Acton is arguing against, and cache-line waste is the cost you actually pay each tick.

## Key ideas

- Start from the transform, not the class. "For every visible object, read local TRS, write a world matrix" is the unit of design; "what object owns Update()" is the wrong question.
- Hardware first: you move cache lines, not fields. An AoS Particle that interleaves position with mass/owner/state wastes bandwidth on a position-only loop; SoA (or AoSoA) lets that loop stream only x/y/z + vx/vy/vz.
- Different data is a different problem. There is no one layout. Process one complete object → AoS; one field across many objects → SoA; SIMD-sized groups → AoSoA. Hierarchy updates need a parent-before-child order, not a virtual scene graph walk.
- C++ abstractions that hide data movement — virtual dispatch, pointer chasing, iterator soup, "a solution for every type" — are antithetical in a console frame. The compiler cannot see through them to emit the transform you meant.
- Insomniac context (Resistance, Ratchet, Sunset Overdrive): the engine director's job is the high-volume transforms (render, animation, streaming, FX, nav). Two shipped console games a year is the constraint the talk is answering.

## Caveats

## Links

- URL: https://www.youtube.com/watch?v=rX0ItVEVjHc
- Slides: https://github.com/CppCon/CppCon2014/tree/master/Presentations/Data-Oriented%20Design%20and%20C%2B%2B
