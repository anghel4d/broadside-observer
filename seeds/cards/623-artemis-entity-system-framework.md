---
title: "Artemis Entity System Framework"
authors:
  - "Arni Haraldsson"
  - "Tiago Costa"
  - "community (artemis-odb)"
year: 2011
venue: "Open source / gamadu → artemis-odb"
arxiv: null
doi: null
source: "https://github.com/junkdog/artemis-odb"
topics:
  - ecs
seed_rank: 623
seed_batch: "lineage-ecs-data-oriented-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"
relevance_score: 7
lineage: ecs-data-oriented
cites:
  - title: "Entity Systems are the future of MMOG development (T-Machine series)"
    url: "http://t-machine.org/index.php/2007/09/03/entity-systems-are-the-future-of-mmog-development-part-1/"
    year: 2007
    arxiv: null
    doi: null
  - title: "A Journey into Entity Component Systems"
    url: "https://www.richardlord.net/blog/ecs/what-is-an-entity-framework.html"
    year: 2012
    arxiv: null
    doi: null
  - title: "EnTT: Gaming meets modern C++"
    url: "https://skypjack.github.io/2019-02-14-ecs-baf-part-1/"
    year: 2019
    arxiv: null
    doi: null
  - title: "Flecs: A Fast Entity Component System for C99"
    url: "https://github.com/SanderMertens/flecs"
    year: 2019
    arxiv: null
    doi: null
see:
  - "360-entity-systems-are-the-future-of-mmog-development-t-machine-"
  - "418-a-journey-into-entity-component-systems"
  - "398-entt-gaming-meets-modern-c"
  - "334-flecs-a-fast-entity-component-system-for-c99"
---

# Artemis Entity System Framework

## One-sentence takeaway

Early widely copied Java ECS that operationalized Adam Martin–style entities-as-IDs with aspect/system iteration.

## Why it matters here

Historical carrier of T-Machine entity-system ideas into indie engines; useful foil for later archetype/sparse-set designs.

## Key ideas

- Entities are IDs; components are pure data bags; systems match via aspects/bits.
- Popularized bag/bitset ECS vocabulary later refined by EnTT/Flecs/Unity.
- artemis-odb maintained the lineage after the original gamadu Artemis went quiet.

## Caveats

- Performance model is JVM-era bitset/bag, not modern chunked archetypes.
- Multiple forks; cite artemis-odb as the living reference.

## Links

- URL: https://github.com/junkdog/artemis-odb
