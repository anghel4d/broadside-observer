---
title: "Bitsquid Data-Driven / Entity system posts"
authors:
  - "Niklas Frykholm"
year: 2014
venue: "Bitsquid Blog"
arxiv: null
doi: null
source: "https://bitsquid.blogspot.com/2014/08/building-data-oriented-entity-system.html"
topics:
  - ecs
  - data-oriented-design
seed_rank: 268
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"
relevance_score: 9
lineage: ecs-data-oriented
cites:
  - title: "Data-Oriented Design and C++"
    url: "https://www.youtube.com/watch?v=rX0ItVEVjHc"
    year: 2014
    arxiv: null
    doi: null
  - title: "Entity Systems are the future of MMOG development (T-Machine series)"
    url: "http://t-machine.org/index.php/2007/09/03/entity-systems-are-the-future-of-mmog-development-part-1/"
    year: 2007
    arxiv: null
    doi: null
  - title: "Our Machinery Component System / data-oriented engine notes"
    url: "https://ourmachinery.com/post/ecs-and-rendering/"
    year: 2018
    arxiv: null
    doi: null
  - title: "Evolve Your Hierarchy"
    url: "https://cowboyprogramming.com/2007/01/05/evolve-your-heirachy/"
    year: 2007
    arxiv: null
    doi: null
see:
  - "194-data-oriented-design-and-c"
  - "284-entity-systems-are-the-future-of-mmog-development-t-machine-"
  - "324-our-machinery-component-system-data-oriented-engine-notes"
  - "285-evolve-your-hierarchy"
---

# Bitsquid Data-Driven / Entity system posts

## One-sentence takeaway

Bitsquid/Stingray entities are 64-bit IDs; each component type is a packed array looked up by ID, with no virtual game-object blob and with creation driven from data.

## Why it matters here

This is the production-proven ID-and-arrays design ano sits next to. Late-bound references and per-component arrays are the Bitsquid lesson; Flecs later adds the query language.

## Key ideas

- An entity is an identifier, not a C++ object. Destroying it just invalidates the ID; component arrays stay dense.
- Each system owns a contiguous array of its component structs plus a map from entity ID to slot.
- Designers spawn entity types from data (JSON/SJSON), not from compiled subclasses.
- Late-bound references (IDs, not pointers) let components talk across arrays without dangling into reallocations.
- August 2014 post "Building a Data-Oriented Entity System" is the canonical write-up of the Bitsquid/Autodesk Stingray approach.

## Caveats

## Links

- Post: https://bitsquid.blogspot.com/2014/08/building-data-oriented-entity-system.html
