---
title: "Category Power of ECS architectures"
authors:
  - "Richard Fabian"
year: 2013
venue: "Data-Oriented Design book"
arxiv: null
doi: null
source: "https://www.dataorienteddesign.com/dodbook/"
topics:
  - dod
  - ecs
seed_rank: 111
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"
relevance_score: 9
lineage: ecs-data-oriented
cites:
  - title: "Data-Oriented Design (Or Why You Might Be Shooting Yourself in The Foot With OOP)"
    url: "https://gamesfromwithin.com/data-oriented-design"
    year: 2009
    arxiv: null
    doi: null
  - title: "Pitfalls of Object Oriented Programming"
    url: "https://www.researchgate.net/publication/308689769_Pitfalls_of_object_oriented_programming"
    year: 2009
    arxiv: null
    doi: null
  - title: "Entity Systems are the future of MMOG development (T-Machine series)"
    url: "http://t-machine.org/index.php/2007/09/03/entity-systems-are-the-future-of-mmog-development-part-1/"
    year: 2007
    arxiv: null
    doi: null
see:
  - "194-data-oriented-design-and-c"
  - "020-data-oriented-design-or-why-you-might-be-shooting-yourself-i"
  - "280-pitfalls-of-object-oriented-programming"
  - "284-entity-systems-are-the-future-of-mmog-development-t-machine-"
---

# Category Power of ECS architectures

## One-sentence takeaway

A component-based object is only the sum of its parts: once components live in manager arrays and existence is just a row of data, there is no entity object left to own an update.

## Why it matters here

This is the DOD argument for why ano / GRID COMMAND entities should be implicit IDs over SoA component tables rather than Unity-style GameObject bags — systems iterate types, not instances, so jobs stay cache-local and parallel.

## Key ideas

- Split a monolithic Player into purpose-sized components (render, input, inventory, animation); functionality cuts across those facts, so meaning belongs in transforms, not in the class that happens to store the fields.
- Hand each component type to a manager that ticks every instance of that type together: all physics before all renders, or on another thread, with no per-entity `Update()` crossing a language or vtable boundary.
- Existence is data. An entity is the current configuration of components, like a table row; drop the Player class and new entity kinds appear by composition without new code.
- Unity GameObject-style compound objects still iterate root instances. A true ECS makes the entity intangible and the component arrays first-class, which is what unlocks SoA layout and designer-driven feature packs.
- Gas Powered Games' Dungeon Siege write-up is the early published game case: the entity type itself cannot do anything; attributes and behaviour come only from attached components.

## Caveats

## Links

- Book: https://www.dataorienteddesign.com/dodbook/
- Chapter: https://www.dataorienteddesign.com/dodbook/node5.html
