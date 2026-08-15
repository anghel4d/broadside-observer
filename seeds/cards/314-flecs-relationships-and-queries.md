---
title: "Flecs Relationships and Queries"
authors:
  - "Sander Mertens"
year: 2021
venue: "Flecs docs"
arxiv: null
doi: null
source: "https://www.flecs.dev/flecs/md_docs_2Relationships.html"
topics:
  - ecs
  - relationships
seed_rank: 314
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"
relevance_score: 8
lineage: ecs-data-oriented
cites:
  - title: "Flecs: A Fast Entity Component System for C99"
    url: "https://github.com/SanderMertens/flecs"
    year: 2019
    arxiv: null
    doi: null
  - title: "Entity Systems are the future of MMOG development (T-Machine series)"
    url: "http://t-machine.org/index.php/2007/09/03/entity-systems-are-the-future-of-mmog-development-part-1/"
    year: 2007
    arxiv: null
    doi: null
see:
  - "260-flecs-a-fast-entity-component-system-for-c99"
  - "284-entity-systems-are-the-future-of-mmog-development-t-machine-"
---

# Flecs Relationships and Queries

## One-sentence takeaway

Flecs stores a relationship as a pair `(Relation, Target)` on the source entity, so hierarchies, inventories, and prefab inheritance are first-class ECS ids rather than ad-hoc pointer fields.

## Why it matters here

Anoptic/ano ECS needs parent/child, prefab `IsA`, and “this unit likes that resource” edges that still iterate as archetypes; Flecs is the production system that made pair queries constant-time.

## Key ideas

- Adding `(Likes, Alice)` is the same API as adding a component; the same relation can be added many times with different targets.
- Queries use pair notation: `(Eats, Apples)`, wildcards `(Eats, *)` / `(*, Alice)`, and compile-time pair types in C++.
- Built-in `ChildOf` implements hierarchies and `IsA` implements prefab inheritance; both are ordinary relationships with extra traits.
- Relationship components can carry data, so you can store an edge weight or a slot index on the pair itself.
- Traits (`Exclusive`, `Transitive`, `Relationship`) constrain how pairs combine; the query engine indexes pairs so has/lookup stay O(1).

## Caveats

## Links

- Docs: https://www.flecs.dev/flecs/md_docs_2Relationships.html
- Intro blog: https://ajmmertens.medium.com/building-games-in-ecs-with-entity-relationships-657275ba2c6c
