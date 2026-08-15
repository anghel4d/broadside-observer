---
title: "A Journey into Entity Component Systems"
authors:
  - "Richard Lord"
year: 2012
venue: "RichardLord / Ash ECS"
arxiv: null
doi: null
source: "https://www.richardlord.net/blog/ecs/what-is-an-entity-framework.html"
topics:
  - ecs
seed_rank: 339
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
  - title: "Evolve Your Hierarchy"
    url: "https://cowboyprogramming.com/2007/01/05/evolve-your-heirachy/"
    year: 2007
    arxiv: null
    doi: null
see:
  - "284-entity-systems-are-the-future-of-mmog-development-t-machine-"
  - "285-evolve-your-hierarchy"
---

# A Journey into Entity Component Systems

## One-sentence takeaway

Lord’s Ash framework treats a system’s working set as a *family* (or *node*): a linked list of entities that currently have a required component tuple, updated incrementally as components are added or removed.

## Why it matters here

Before archetypes and sparse sets, this node/family model was how ActionScript/Flash and many indie engines expressed ECS queries; it is the clearest statement of “a system iterates a typed view, not the world.”

## Key ideas

- An entity is an id plus a bag of components. A system never inherits a game-object class; it asks the engine for a family matching its node type (`Position + Motion`, …).
- Families are maintained incrementally: add/remove component patches the relevant linked lists, so the system’s `update` is a walk of an already-filtered list.
- This is query-as-data-structure, not query-as-archetype-scan. Cheap to write, pointer-chasy at scale — the reason later engines moved to chunks.
- Series lives at richardlord.net/blog/ecs/; Ash is the ActionScript implementation, later ported.
- Directly descends from T-Machine entity systems and Adam Martin / cowboyprogramming “evolve your hierarchy.”

## Caveats

## Links

- URL: https://www.richardlord.net/blog/ecs/what-is-an-entity-framework.html
