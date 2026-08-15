---
title: "Flecs: A Fast Entity Component System for C99"
authors:
  - "Sander Mertens"
year: 2019
venue: "Flecs / GitHub"
arxiv: null
doi: null
source: "https://github.com/SanderMertens/flecs"
topics:
  - ecs
  - queries
seed_rank: 260
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"
relevance_score: 9
lineage: ecs-data-oriented
cites:
  - title: "Entity Systems are the future of MMOG development (T-Machine series)"
    url: "http://t-machine.org/index.php/2007/09/03/entity-systems-are-the-future-of-mmog-development-part-1/"
    year: 2007
    arxiv: null
    doi: null
  - title: "EnTT: Gaming meets modern C++"
    url: "https://skypjack.github.io/2019-02-14-ecs-baf-part-1/"
    year: 2019
    arxiv: null
    doi: null
  - title: "Flecs Relationships and Queries"
    url: "https://www.flecs.dev/flecs/"
    year: 2021
    arxiv: null
    doi: null
  - title: "Unity ECS / DOTS architecture overview (Entities package docs)"
    url: "https://docs.unity3d.com/Packages/com.unity.entities@latest"
    year: 2018
    arxiv: null
    doi: null
see:
  - "284-entity-systems-are-the-future-of-mmog-development-t-machine-"
  - "319-entt-gaming-meets-modern-c"
  - "314-flecs-relationships-and-queries"
  - "325-unity-ecs-dots-architecture-overview-entities-package-docs"
  - "391-using-relational-databases-for-entity-component-systems"
---

# Flecs: A Fast Entity Component System for C99

## One-sentence takeaway

Flecs is a zero-dependency C99/C++17 archetype ECS with a real query language, first-class entity relationships, hierarchies, prefabs, and a lockless multi-core pipeline.

## Why it matters here

This is the closest open-source cousin to ano-shaped thinking: entities as IDs, components in archetypes, queries as the API, relationships instead of scene-graph blobs. GRID COMMAND can steal the query/relationship model without taking the runtime.

## Key ideas

- Archetype/SoA storage built to walk millions of entities per frame; systems are queries with a phase.
- Relationships (`(Likes, Bob)`) are stored as components, so hierarchies and prefabs are queries, not a parallel scene graph.
- Flecs Query Language supports joins, inheritance, and variables; observers fire on component events.
- Lockless scheduler fans systems across cores; reflection + JSON enable runtime components and a web explorer.
- Dual API: C99 core and a C++17 layer that does not wrap STL containers.

## Caveats

## Links

- GitHub: https://github.com/SanderMertens/flecs
- Docs: https://www.flecs.dev/flecs/
