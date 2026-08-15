---
title: "Archetypal ECS storage and iteration (chunked archetypes pattern)"
authors:
  - "Community synthesis / Unity + Bevy lineage"
year: 2020
venue: "Engine docs (Bevy/Unity)"
arxiv: null
doi: null
source: "https://docs.rs/bevy_ecs/latest/bevy_ecs/"
topics:
  - ecs
  - archetypes
seed_rank: 315
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"
relevance_score: 8
lineage: ecs-data-oriented
cites:
  - title: "Unity ECS / DOTS architecture overview (Entities package docs)"
    url: "https://docs.unity3d.com/Packages/com.unity.entities@latest"
    year: 2018
    arxiv: null
    doi: null
  - title: "Bevy ECS Getting Started / Design"
    url: "https://bevyengine.org/learn/quick-start/getting-started/ecs/"
    year: 2020
    arxiv: null
    doi: null
  - title: "Flecs: A Fast Entity Component System for C99"
    url: "https://github.com/SanderMertens/flecs"
    year: 2019
    arxiv: null
    doi: null
  - title: "EnTT: Gaming meets modern C++"
    url: "https://skypjack.github.io/2019-02-14-ecs-baf-part-1/"
    year: 2019
    arxiv: null
    doi: null
see:
  - "325-unity-ecs-dots-architecture-overview-entities-package-docs"
  - "316-bevy-ecs-getting-started-design"
  - "260-flecs-a-fast-entity-component-system-for-c99"
  - "319-entt-gaming-meets-modern-c"
---

# Archetypal ECS storage and iteration (chunked archetypes pattern)

## One-sentence takeaway

An archetype is the set of entities that share one component signature, stored in cache-line-sized chunks of SoA columns so a system walks only matching columns with almost no branching.

## Why it matters here

This is the high-throughput layout Unity DOTS and Bevy ship, and the foil for Anoptic’s own SoA/ECS: structural changes move entities between chunks; queries become “iterate these archetypes.”

## Key ideas

- Entity id → (archetype, row) indirection; adding or removing a component is a move into another archetype’s chunk, not an in-place flag flip.
- Chunks pack many entities of one signature so SIMD/Burst/ispc can load one component column at a time.
- Systems declare a query (required / optional / without). The registry returns the matching archetype list; iteration never visits unrelated entities.
- Sparse-set ECS (EnTT) is the competing layout: faster structural changes, worse multi-component scan locality.
- Flecs tables, Bevy archetypes, and Unity chunks are the same idea with different names and different relationship/enable-bit extras.

## Caveats

## Links

- Bevy ECS: https://docs.rs/bevy_ecs/latest/bevy_ecs/
- Unity Entities: https://docs.unity3d.com/Packages/com.unity.entities@latest
