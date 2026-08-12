---
title: "Game Programming Patterns — Data Locality"
authors:
  - "Robert Nystrom"
year: 2014
venue: "Game Programming Patterns (book / web)"
arxiv: null
doi: null
source: "https://gameprogrammingpatterns.com/data-locality.html"
topics:
  - dod
  - ecs
  - data-locality
seed_rank: 622
seed_batch: "lineage-ecs-data-oriented-2026-08-13"
reviewed: "2026-08-13"
pool: "engine"
relevance_score: 8
lineage: ecs-data-oriented
cites:
  - title: "Data-Oriented Design and C++"
    url: "https://www.youtube.com/watch?v=rX0ItVEVjHc"
    year: 2014
    arxiv: null
    doi: null
    card: "251-data-oriented-design-and-c"
  - title: "Pitfalls of Object Oriented Programming"
    url: "https://www.researchgate.net/publication/308689769_Pitfalls_of_object_oriented_programming"
    year: 2009
    arxiv: null
    doi: null
    card: "356-pitfalls-of-object-oriented-programming"
  - title: "Data-Oriented Design (Or Why You Might Be Shooting Yourself in The Foot With OOP)"
    url: "https://gamesfromwithin.com/data-oriented-design"
    year: 2009
    arxiv: null
    doi: null
    card: "021-data-oriented-design-or-why-you-might-be-shooting-yourself-i"
  - title: "Evolve Your Hierarchy"
    url: "https://cowboyprogramming.com/2007/01/05/evolve-your-heirachy/"
    year: 2007
    arxiv: null
    doi: null
    card: "361-evolve-your-hierarchy"
---

# Game Programming Patterns — Data Locality

## One-sentence takeaway

Pedagogical chapter that makes cache lines, AoS vs SoA, and component contiguity the everyday vocabulary for game DOD/ECS.

## Why it matters here

Best on-ramp from OOP game code to the Acton/Unity/Flecs performance story Anoptic already assumes.

## Key ideas

- CPU spends most time waiting on memory; arrange data for sequential access.
- Component arrays and SoA layouts beat pointer-rich object graphs for hot loops.
- Pairs naturally with the Component and Object Pool chapters as an ECS-adjacent pattern set.

## Caveats

- Teaching patterns book, not a research result or production ECS design doc.
- Does not prescribe archetype vs sparse-set tradeoffs.

## Links

- URL: https://gameprogrammingpatterns.com/data-locality.html
