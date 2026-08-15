---
title: "Bevy ECS Getting Started / Design"
authors:
  - "Carter Anderson et al."
year: 2020
venue: "Bevy Book"
arxiv: null
doi: null
source: "https://bevyengine.org/learn/quick-start/getting-started/ecs/"
topics:
  - ecs
  - archetypes
seed_rank: 316
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"
relevance_score: 8
lineage: ecs-data-oriented
cites:
  - title: "Archetypal ECS storage and iteration (chunked archetypes pattern)"
    url: "https://docs.rs/bevy_ecs/latest/bevy_ecs/"
    year: 2020
    arxiv: null
    doi: null
  - title: "Unity ECS / DOTS architecture overview (Entities package docs)"
    url: "https://docs.unity3d.com/Packages/com.unity.entities@latest"
    year: 2018
    arxiv: null
    doi: null
  - title: "Flecs: A Fast Entity Component System for C99"
    url: "https://github.com/SanderMertens/flecs"
    year: 2019
    arxiv: null
    doi: null
see:
  - "315-archetypal-ecs-storage-and-iteration-chunked-archetypes-patt"
  - "325-unity-ecs-dots-architecture-overview-entities-package-docs"
  - "260-flecs-a-fast-entity-component-system-for-c99"
---

# Bevy ECS Getting Started / Design

## One-sentence takeaway

Bevy’s ECS is an archetype-chunk store driven by Rust systems that declare `Query`/`Res`/`Commands` parameters, so the scheduler can parallelize systems whose component sets do not alias mutably.

## Why it matters here

This is the closest open-source cousin to an Anoptic/ano Rust ECS: entities, components as structs, exclusive world access via `Commands`, and a stage/schedule that looks like a frame graph for CPU work.

## Key ideas

- An `Entity` is a generational id; components are ordinary Rust types stored in archetypes keyed by the set of types on that entity.
- Systems are functions. The parameter list is the query: `Query<&Transform, With<Player>>`, `Res<Time>`, `EventReader<T>`, `Commands`.
- The scheduler builds a conflict graph from those parameters and runs non-conflicting systems in parallel across a thread pool.
- Structural changes are deferred through `Commands` so iteration stays valid until a sync point; then entities move between archetypes.
- Change detection (`Added`/`Changed`) and exclusive systems (`&mut World`) cover the cases queries cannot express.

## Caveats

## Links

- Book: https://bevyengine.org/learn/quick-start/getting-started/ecs/
- crate docs: https://docs.rs/bevy_ecs/latest/bevy_ecs/
