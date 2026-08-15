---
title: "Data-Oriented Design and C++"
authors:
  - "Mike Acton"
year: 2014
venue: "CppCon"
arxiv: null
doi: null
source: "https://www.youtube.com/watch?v=rX0ItVEVjHc"
topics:
  - ecs
  - data-oriented-design
seed_rank: 194
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"
relevance_score: 10
lineage: ecs-data-oriented
cites:
  - title: "Pitfalls of Object Oriented Programming"
    url: "https://www.researchgate.net/publication/308689769_Pitfalls_of_object_oriented_programming"
    year: 2009
    arxiv: null
    doi: null
  - title: "Data-Oriented Design (Or Why You Might Be Shooting Yourself in The Foot With OOP)"
    url: "https://gamesfromwithin.com/data-oriented-design"
    year: 2009
    arxiv: null
    doi: null
  - title: "Category Power of ECS architectures / Data-Oriented Design book"
    url: "https://www.dataorienteddesign.com/dodbook/"
    year: 2013
    arxiv: null
    doi: null
  - title: "Game Programming Patterns — Data Locality"
    url: "https://gameprogrammingpatterns.com/data-locality.html"
    year: 2014
    arxiv: null
    doi: null
  - title: "Bitsquid Data-Driven / Entity system posts"
    url: "https://bitsquid.blogspot.com/2014/08/building-data-oriented-entity-system.html"
    year: 2013
    arxiv: null
    doi: null
  - title: "Unity ECS / DOTS architecture overview (Entities package docs)"
    url: "https://docs.unity3d.com/Packages/com.unity.entities@latest"
    year: 2018
    arxiv: null
    doi: null
see:
  - "280-pitfalls-of-object-oriented-programming"
  - "020-data-oriented-design-or-why-you-might-be-shooting-yourself-i"
  - "111-category-power-of-ecs-architectures"
  - "448-game-programming-patterns-data-locality"
  - "268-bitsquid-data-driven-entity-system-posts"
  - "325-unity-ecs-dots-architecture-overview-entities-package-docs"
---

# Data-Oriented Design and C++

## One-sentence takeaway

Acton's CppCon talk treats data-oriented design as organizing code around the transforms and cache-line reality of the data, not around object hierarchies and virtual calls.

## Why it matters here

This is the sermon Anoptic already runs: SoA component columns, systems as bulk transforms, solve for the data you actually touch this frame. C++ class graphs are the anti-pattern the talk dismantles.

## Key ideas

- The unit of design is the transform of an array of data, not a web of objects exchanging messages.
- Hardware facts — cache lines, prefetch, branch prediction, false sharing — are first-class constraints, not later “optimization.”
- Structure-of-arrays and contiguous iteration beat pointer-rich object graphs for the workloads games actually run.
- Inheritance and virtual dispatch are called out as default tools that hide data flow and destroy locality.
- The talk is a design method, illustrated in C++, not a library: look at the bytes, then write the loop.

## Caveats

## Links

- Talk: https://www.youtube.com/watch?v=rX0ItVEVjHc
- CppCon 2014
