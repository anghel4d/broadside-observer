---
title: "Evolve Your Hierarchy"
authors:
  - "Mick West"
year: 2007
venue: "Game Developer / Cowboy Programming"
arxiv: null
doi: null
source: "https://cowboyprogramming.com/2007/01/05/evolve-your-heirachy/"
topics:
  - ecs
  - components
seed_rank: 285
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
  - title: "Entity Systems are the future of MMOG development (T-Machine series)"
    url: "http://t-machine.org/index.php/2007/09/03/entity-systems-are-the-future-of-mmog-development-part-1/"
    year: 2007
    arxiv: null
    doi: null
  - title: "Pitfalls of Object Oriented Programming"
    url: "https://www.gamedevs.org/uploads/pitfalls-of-object-oriented-programming.pdf"
    year: 2009
    arxiv: null
    doi: null
  - title: "Data-Oriented Design and C++"
    url: "https://www.youtube.com/watch?v=rX0ItVEVjHc"
    year: 2014
    arxiv: null
    doi: null
see:
  - "447-a-data-driven-game-object-system-scott-bilas-gdc"
  - "284-entity-systems-are-the-future-of-mmog-development-t-machine-"
  - "280-pitfalls-of-object-oriented-programming"
  - "194-data-oriented-design-and-c"
---

# Evolve Your Hierarchy

## One-sentence takeaway

West's Neversoft post-mortem walks a Tony Hawk blob hierarchy through three stages — organized blob, component container, pure aggregation — until a game object is only the sum of its component arrays.

## Why it matters here

This is the migration story, not the manifesto. Ano does not need to repeat the two-year blob-component phase if we start at pure aggregation.

## Key ideas

- Deep `CEntity` trees force you either to hoist every feature to the root (everyone pays) or to hide it in leaves (nobody reuses).
- Stage 1: factor the blob into nullable sub-objects. Stage 2: give those a common component base and a list. Stage 3: drop the container object; each column is a component type, each row an entity.
- Practical lessons: sell it with one working component first; expect a "blob component" for the player; cache cross-component pointers once lookup hits 5% CPU; enforce update order in code because data-driven lists will shuffle.
- Data-driven composition let designers mint new entity types without a programmer subclass.
- 5 January 2007, Cowboy Programming; URL keeps the original "heirachy" typo.

## Caveats

## Links

- Post: https://cowboyprogramming.com/2007/01/05/evolve-your-heirachy/
