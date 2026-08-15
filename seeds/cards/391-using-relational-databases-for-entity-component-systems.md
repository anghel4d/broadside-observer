---
title: "Using Relational Databases for Entity-Component Systems"
authors:
  - "Richard Fabian"
year: 2018
venue: "Data-Oriented Design"
arxiv: null
doi: null
source: "https://www.dataorienteddesign.com/dodbook/node5.html"
topics:
  - ecs
  - relational
seed_rank: 391
seed_batch: "systems-prefill-2026-08-13"
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
  - title: "Flecs: A Fast Entity Component System for C & C++"
    url: "https://github.com/SanderMertens/flecs"
    year: 2019
    arxiv: null
    doi: null
see:
  - "284-entity-systems-are-the-future-of-mmog-development-t-machine-"
  - "260-flecs-a-fast-entity-component-system-for-c99"
---

# Using Relational Databases for Entity-Component Systems

## One-sentence takeaway

Fabian’s DOD chapter treats an ECS as a relational schema: entity IDs are keys, component types are tables, and systems are queries / joins over those tables.

## Why it matters here

This is the cleanest statement of why ano looks like a database. GRID COMMAND systems should be written as “select entities that have Transform ⋈ Velocity ⋈ Health,” not as object graphs. Flecs relationships are the same idea with first-class edges.

## Key ideas

- Entity → primary key; component type → relation; component instance → row; field → column; system → a query that streams matching rows.
- Normalization arguments from databases apply: don’t store the same transform in three objects; join when you need it.
- Many-to-many gameplay links (inventory, squad membership, rooms↔doors) are junction tables, not pointers stuffed into components.
- The Game Developer ECS-in-C++ series is a popular intro; the DOD book chapter is the actual relational treatment this card is about.

## Caveats

## Links

- DOD book, relational chapter: https://www.dataorienteddesign.com/dodbook/node5.html
- Alternate node: https://www.dataorienteddesign.com/dodmain/node11.html
