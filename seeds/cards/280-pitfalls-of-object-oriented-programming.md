---
title: "Pitfalls of Object Oriented Programming"
authors:
  - "Tony Albrecht"
year: 2009
venue: "Sony / GCAP / GDC slides"
arxiv: null
doi: null
source: "https://www.gamedevs.org/uploads/pitfalls-of-object-oriented-programming.pdf"
topics:
  - dod
  - ecs
seed_rank: 280
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"
relevance_score: 9
lineage: ecs-data-oriented
cites:
  - title: "Data-Oriented Design (Or Why You Might Be Shooting Yourself in The Foot With OOP)"
    url: "https://gamesfromwithin.com/data-oriented-design"
    year: 2009
    arxiv: null
    doi: null
  - title: "Data-Oriented Design and C++"
    url: "https://www.youtube.com/watch?v=rX0ItVEVjHc"
    year: 2014
    arxiv: null
    doi: null
  - title: "Game Programming Patterns — Data Locality"
    url: "https://gameprogrammingpatterns.com/data-locality.html"
    year: 2014
    arxiv: null
    doi: null
  - title: "Evolve Your Hierarchy"
    url: "https://cowboyprogramming.com/2007/01/05/evolve-your-heirachy/"
    year: 2007
    arxiv: null
    doi: null
see:
  - "020-data-oriented-design-or-why-you-might-be-shooting-yourself-i"
  - "194-data-oriented-design-and-c"
  - "448-game-programming-patterns-data-locality"
  - "285-evolve-your-hierarchy"
---

# Pitfalls of Object Oriented Programming

## One-sentence takeaway

Albrecht's Sony talk shows a pointer-chasing scene graph dying in cache and branch predictors, then rebuilds it as contiguous homogeneous arrays — the slide deck that sold data-oriented design to a generation of engine programmers.

## Why it matters here

This is the sermon ano's archetype storage already believes. Quote it when someone wants a virtual `GameObject::Update()` back.

## Key ideas

- Encapsulated object graphs scatter hot fields across cache lines; virtual calls blow the BTB; "clean" OOP becomes memory-bound.
- Measure: a naïve scene-graph update is dominated by cache misses, not arithmetic.
- Fix: structure-of-arrays / packed components, iterate homogeneously, update transforms as a stream.
- Inheritance hierarchies also create the blob class (functionality hoisted to the root so every leaf pays).
- Gamedevs.org hosts the canonical PDF. ResearchGate was a secondary landing page, not the artifact.

## Caveats

## Links

- PDF: https://www.gamedevs.org/uploads/pitfalls-of-object-oriented-programming.pdf
