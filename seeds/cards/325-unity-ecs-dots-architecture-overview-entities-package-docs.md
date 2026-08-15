---
title: "Unity ECS / DOTS architecture overview (Entities package docs)"
authors:
  - "Unity Technologies"
year: 2018
venue: "Unity Documentation"
arxiv: null
doi: null
source: "https://docs.unity3d.com/Packages/com.unity.entities@latest"
topics:
  - ecs
  - archetypes
seed_rank: 325
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"
relevance_score: 8
lineage: ecs-data-oriented
cites:
  - title: "Data-Oriented Design and C++"
    url: "https://www.youtube.com/watch?v=rX0ItVEVjHc"
    year: 2014
    arxiv: null
    doi: null
  - title: "Archetypal ECS storage and iteration (chunked archetypes pattern)"
    url: "https://docs.rs/bevy_ecs/latest/bevy_ecs/"
    year: 2020
    arxiv: null
    doi: null
  - title: "Bitsquid Data-Driven / Entity system posts"
    url: "https://bitsquid.blogspot.com/2014/08/building-data-oriented-entity-system.html"
    year: 2013
    arxiv: null
    doi: null
see:
  - "194-data-oriented-design-and-c"
  - "315-archetypal-ecs-storage-and-iteration-chunked-archetypes-patt"
  - "268-bitsquid-data-driven-entity-system-posts"
---

# Unity ECS / DOTS architecture overview (Entities package docs)

## One-sentence takeaway

Unity Entities packs components into 16 KiB archetype chunks and runs Burst-compiled `ISystem`/`IJobEntity` jobs over those chunks, with structural changes deferred through an Entity Command Buffer.

## Why it matters here

This is the industrial-scale archetype ECS Anoptic is measured against: chunk iteration, shared components, enableable components, and a jobified transform hierarchy.

## Key ideas

- An archetype is a unique combination of component types. Entities of one archetype live in chunks; a chunk holds only that archetype and is the unit of iteration and of memory allocation.
- `IComponentData` is blittable SoA-in-the-chunk; `ISharedComponentData` splits archetypes by value (e.g. mesh); enableable components hide entities without moving them.
- Systems schedule jobs through the Job system. Safety handles prevent two jobs from aliasing the same component type mutably.
- `EntityCommandBuffer` playback is the sync point for creates/destroys/adds, so jobs never move entities out from under an iterator.
- Baking converts GameObjects into entities at convert/build time; runtime stays data-oriented. Docs live at the Entities package URL above.

## Caveats

## Links

- Docs: https://docs.unity3d.com/Packages/com.unity.entities@latest
