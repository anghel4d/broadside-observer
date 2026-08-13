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

Archetypal ECS stores entities sharing a component signature in contiguous chunks for SIMD-friendly system iteration.

## Why it matters here

Archetype chunk storage is the default high-perf ECS layout to compare against Anoptic SoA.

## Key ideas

- Archetypal ECS stores entities sharing a component signature in contiguous chunks for SIMD-friendly system iteration.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.
- Primary PDF/DOI not yet pinned; verify the canonical artifact before citation.

## Links

- URL: https://docs.rs/bevy_ecs/latest/bevy_ecs/
