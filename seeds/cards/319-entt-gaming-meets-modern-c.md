---
title: "EnTT: Gaming meets modern C++"
authors:
  - "Michele Caini (skypjack)"
year: 2019
venue: "EnTT docs / blog"
arxiv: null
doi: null
source: "https://skypjack.github.io/2019-02-14-ecs-baf-part-1/"
topics:
  - ecs
  - sparse-set
seed_rank: 319
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"
relevance_score: 8
lineage: ecs-data-oriented
cites:
  - title: "Entity Systems are the future of MMOG development (T-Machine series)"
    url: "http://t-machine.org/index.php/2007/09/03/entity-systems-are-the-future-of-mmog-development-part-1/"
    year: 2007
    arxiv: null
    doi: null
  - title: "Flecs: A Fast Entity Component System for C99"
    url: "https://github.com/SanderMertens/flecs"
    year: 2019
    arxiv: null
    doi: null
  - title: "Archetypal ECS storage and iteration (chunked archetypes pattern)"
    url: "https://docs.rs/bevy_ecs/latest/bevy_ecs/"
    year: 2020
    arxiv: null
    doi: null
see:
  - "284-entity-systems-are-the-future-of-mmog-development-t-machine-"
  - "260-flecs-a-fast-entity-component-system-for-c99"
  - "315-archetypal-ecs-storage-and-iteration-chunked-archetypes-patt"
---

# EnTT: Gaming meets modern C++

## One-sentence takeaway

EnTT stores each component type in its own sparse-set pool, so adding a component is an O(1) swap into that pool and multi-component views iterate the smallest pool with packed-array locality.

## Why it matters here

Sparse-set ECS is the alternative to Anoptic’s archetype/SoA plan: cheaper structural changes, slightly worse multi-component scans, and the design most C++ engines copy from this blog series.

## Key ideas

- A sparse set is a packed dense array of component instances plus a sparse page that maps entity id → dense index, so `has`/`get`/`emplace` stay amortized O(1).
- A *view* walks one leading pool and tests membership in the others; a *group* owns a fully packed intersection for the hot query.
- Signals (`on_construct` / `on_destroy`) and a reactive dispatcher sit on top of the same pools.
- No archetype move on component add/remove, which is why EnTT wins “lots of structural changes” benchmarks and loses “tight SoA SIMD over many components.”
- Series starts at “ECS back and forth” part 1 (2019-02-14); the library is https://github.com/skypjack/entt.

## Caveats

## Links

- Blog: https://skypjack.github.io/2019-02-14-ecs-baf-part-1/
- Repo: https://github.com/skypjack/entt
