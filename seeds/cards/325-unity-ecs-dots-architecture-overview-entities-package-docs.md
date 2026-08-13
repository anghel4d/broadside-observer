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
  - title: "Unity DOTS Entities Manual"
    url: "https://docs.unity3d.com/Packages/com.unity.entities@0.17/manual/index.html"
    year: 2020
    arxiv: null
    doi: null
  - title: "Bitsquid Data-Driven / Entity system posts"
    url: "https://bitsquid.blogspot.com/2014/08/building-data-oriented-entity-system.html"
    year: 2013
    arxiv: null
    doi: null
  - title: "Overwatch Gameplay Architecture and Netcode (ECS-flavored)"
    url: "https://www.gdcvault.com/play/1024001/-Overwatch-Gameplay-Architecture-and"
    year: 2017
    arxiv: null
    doi: null
see:
  - "194-data-oriented-design-and-c"
  - "315-archetypal-ecs-storage-and-iteration-chunked-archetypes-patt"
  - "383-unity-dots-entities-manual"
  - "268-bitsquid-data-driven-entity-system-posts"
  - "263-overwatch-gameplay-architecture-and-netcode-ecs-flavored"
---

# Unity ECS / DOTS architecture overview (Entities package docs)

## One-sentence takeaway

Unity Entities stores components in archetype chunks processed by Burst-friendly systems.

## Why it matters here

Industrial archetype chunk ECS at scale; foil/benchmark for Anoptic layouts.

## Key ideas

- Unity Entities stores components in archetype chunks processed by Burst-friendly systems.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.
- Primary PDF/DOI not yet pinned; verify the canonical artifact before citation.

## Links

- URL: https://docs.unity3d.com/Packages/com.unity.entities@latest
