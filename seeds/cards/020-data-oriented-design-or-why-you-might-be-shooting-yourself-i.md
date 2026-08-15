---
title: "Data-Oriented Design (Or Why You Might Be Shooting Yourself in The Foot With OOP)"
authors:
  - "Noel Llopis"
year: 2009
venue: "Game Developer Magazine"
arxiv: null
doi: null
source: "https://gamesfromwithin.com/data-oriented-design"
topics:
  - ecs
  - dod
seed_rank: 20
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: ecs-data-oriented
cites:
  - title: "Pitfalls of Object Oriented Programming"
    url: "https://www.researchgate.net/publication/308689769_Pitfalls_of_object_oriented_programming"
    year: 2009
    arxiv: null
    doi: null
  - title: "Data-Oriented Design and C++"
    url: "https://www.youtube.com/watch?v=rX0ItVEVjHc"
    year: 2014
    arxiv: null
    doi: null
  - title: "Evolve Your Hierarchy"
    url: "https://cowboyprogramming.com/2007/01/05/evolve-your-heirachy/"
    year: 2007
    arxiv: null
    doi: null
see:
  - "280-pitfalls-of-object-oriented-programming"
  - "194-data-oriented-design-and-c"
  - "285-evolve-your-hierarchy"
---

# Data-Oriented Design (Or Why You Might Be Shooting Yourself in The Foot With OOP)

## One-sentence takeaway

Llopis’s 2009 Inner Product column argues that late-project hitchiness, failed parallelization, and unfixable bugs come from OOP’s per-object trees; design instead around contiguous homogeneous tables transformed in bulk.

## Why it matters here

This is the cultural charter for Anoptic ECS and ano’s columnar selections: where there is one enemy there are many, so the unit of design is the array, not the object. GRID COMMAND entities are already this article.

## Key ideas

- The failure mode is familiar: no profiler hotspot, constant cache misses, locks everywhere you try to thread, and features that cannot be added without breaking three other systems.
- OOP and procedural programming both privilege *code*; data-oriented design privileges the type, layout, and access pattern of the data being transformed.
- Ideal layout is large blocks of homogeneous records processed sequentially — “turn the whole codebase into a gigantic particle system.” Split an object into components and group like with like.
- Payoffs listed: trivial parallel splits, instruction- and data-cache reuse, optimizations at the transform-pipeline level, leaf-function modularity, and unit tests that are “make input, call transform, check output.”
- OOP is reserved for genuine singletons and GUIs; an “enemy” can still exist as a mental object whose bytes live in several tables.

## Caveats

## Links

- URL: https://gamesfromwithin.com/data-oriented-design
