---
title: "Unity DOTS Entities Manual"
authors:
  - "Unity Technologies"
year: 2020
venue: "Unity Docs"
arxiv: null
doi: null
source: "https://docs.unity3d.com/Packages/com.unity.entities@0.17/manual/index.html"
topics:
  - ecs
  - dots
seed_rank: 383
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
see:
  - "194-data-oriented-design-and-c"
  - "315-archetypal-ecs-storage-and-iteration-chunked-archetypes-patt"
---

# Unity DOTS Entities Manual

## One-sentence takeaway

Entities 0.17 documents Unity’s chunked-archetype ECS: entities with the same component set live in 16 KiB chunks, and systems iterate those chunks (optionally via Jobs/Burst) rather than hopping objects.

## Why it matters here

This is the industrial cousin of Anoptic / ano: archetypes, chunk iteration, structural-change barriers, and a jobified system graph. Read it as a worked example of what a production ECS API looks like — and of the costs (sync points, baking, companion GameObjects) Unity paid to get there.

## Key ideas

- Archetype = set of component types; a chunk holds a SoA slab of one archetype, cache-line friendly for linear system loops.
- `Entities.ForEach` / `IJobEntity` schedule work over matching chunks; Burst compiles the inner loop.
- Structural changes (add/remove component, instantiate) move entities between chunks and are deferred to sync points so jobs can run safely.
- Conversion / baking turns authoring GameObjects into entities; runtime is not the MonoBehaviour scene graph.

## Caveats

## Links

- Entities 0.17 manual: https://docs.unity3d.com/Packages/com.unity.entities@0.17/manual/index.html
- Current package docs: https://docs.unity3d.com/Packages/com.unity.entities@latest
