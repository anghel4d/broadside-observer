---
title: "Legion ECS"
authors:
  - "Tom Gillen"
  - "Amethyst contributors"
year: 2019
venue: "GitHub"
arxiv: null
doi: null
source: "https://github.com/amethyst/legion"
topics:
  - ecs
  - bitset
seed_rank: 385
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"
relevance_score: 8
lineage: ecs-data-oriented
cites:
  - title: "Bevy ECS Getting Started / Design"
    url: "https://bevyengine.org/learn/quick-start/getting-started/ecs/"
    year: 2020
    arxiv: null
    doi: null
  - title: "EnTT: Gaming meets modern C++"
    url: "https://skypjack.github.io/2019-02-14-ecs-baf-part-1/"
    year: 2019
    arxiv: null
    doi: null
see:
  - "316-bevy-ecs-getting-started-design"
  - "319-entt-gaming-meets-modern-c"
---

# Legion ECS

## One-sentence takeaway

Legion is Amethyst’s archetypal Rust ECS: chunked component storage, query types that encode read/write, and a scheduler that runs non-conflicting systems in parallel.

## Why it matters here

Anoptic is C, but Legion is a clean statement of the archetype-plus-query design Bevy later popularized. Compare it with EnTT’s sparse sets when picking ano’s storage: chunks win sequential scans, sparse sets win churn. GRID COMMAND’s unit set is scan-heavy, so this side of the family matters.

## Key ideas

- Entities with the same component mask share an archetype; components sit in typed columns inside chunks.
- Queries are generic over component refs (`&T` vs `&mut T`); the scheduler uses that to fork systems that do not alias.
- `World` / `CommandBuffer` split: structural changes recorded during iteration, applied later.
- Originally the Amethyst engine ECS; now a standalone crate and a design reference more than a living engine.

## Caveats

## Links

- Repository: https://github.com/amethyst/legion
- Docs: https://docs.rs/legion
