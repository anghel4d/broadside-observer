---
title: "Entity Systems are the future of MMOG development (T-Machine series)"
authors:
  - "Adam Martin"
year: 2007
venue: "T-Machine.org"
arxiv: null
doi: null
source: "http://t-machine.org/index.php/2007/09/03/entity-systems-are-the-future-of-mmog-development-part-1/"
topics:
  - ecs
seed_rank: 284
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"
relevance_score: 9
lineage: ecs-data-oriented
cites:
  - title: "A Data-Driven Game Object System"
    url: "https://this.scottbilas.com/files/pubs/2002/gdc-san-jose/GameObjects.pdf"
    year: 2002
    arxiv: null
    doi: null
  - title: "Evolve Your Hierarchy"
    url: "https://cowboyprogramming.com/2007/01/05/evolve-your-heirachy/"
    year: 2007
    arxiv: null
    doi: null
  - title: "Artemis Entity System Framework"
    url: "https://github.com/junkdog/artemis-odb"
    year: 2011
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
  - "447-a-data-driven-game-object-system-scott-bilas-gdc"
  - "285-evolve-your-hierarchy"
  - "449-artemis-entity-system-framework"
  - "260-flecs-a-fast-entity-component-system-for-c99"
  - "319-entt-gaming-meets-modern-c"
---

# Entity Systems are the future of MMOG development (T-Machine series)

## One-sentence takeaway

Martin's 2007 series defines the public ECS trinity — entity = ID, component = pure data in a table, system = a transform over those tables — as the only architecture that scales to MMO-sized worlds.

## Why it matters here

This is the blog that named the pattern ano implements. Quote part 1 when someone asks why a unit is not a C++ object.

## Key ideas

- An entity is only an integer. It has no methods and no inheritance.
- Components are rows in per-type tables (position, health, inventory), addressed by that integer.
- Systems iterate the tables they care about; a new behavior is a new system, not a new subclass.
- Deep GameObject hierarchies explode in an MMO because every special case wants a new leaf and every leaf carries the blob.
- Five-part series starting 3 September 2007; Artemis, EnTT, and Flecs all cite this vocabulary.

## Caveats

## Links

- Part 1: http://t-machine.org/index.php/2007/09/03/entity-systems-are-the-future-of-mmog-development-part-1/
