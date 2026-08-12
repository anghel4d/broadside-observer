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
seed_rank: 393
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "engine"
relevance_score: 8
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
