---
title: "A Data-Driven Game Object System"
authors:
  - "Scott Bilas"
year: 2002
venue: "GDC"
arxiv: null
doi: null
source: "https://this.scottbilas.com/files/pubs/2002/gdc-san-jose/GameObjects.pdf"
topics:
  - ecs
  - components
  - data-driven
seed_rank: 447
seed_batch: "lineage-ecs-data-oriented-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"
relevance_score: 9
lineage: ecs-data-oriented
cites:
  - title: "Evolve Your Hierarchy"
    url: "https://cowboyprogramming.com/2007/01/05/evolve-your-heirachy/"
    year: 2007
    arxiv: null
    doi: null
  - title: "Entity Systems are the future of MMOG development (T-Machine series)"
    url: "http://t-machine.org/index.php/2007/09/03/entity-systems-are-the-future-of-mmog-development-part-1/"
    year: 2007
    arxiv: null
    doi: null
  - title: "Unity ECS / DOTS architecture overview (Entities package docs)"
    url: "https://docs.unity3d.com/Packages/com.unity.entities@latest"
    year: 2018
    arxiv: null
    doi: null
see:
  - "285-evolve-your-hierarchy"
  - "284-entity-systems-are-the-future-of-mmog-development-t-machine-"
  - "325-unity-ecs-dots-architecture-overview-entities-package-docs"
---

# A Data-Driven Game Object System

## One-sentence takeaway

Dungeon Siege GDC talk that popularized data-driven component composition over rigid C++ game-object hierarchies.

## Why it matters here

Pre-ECS composition root: IDs, component plugins, and data-assembled objects — the bridge West/Martin later sharpened into ECS.

## Key ideas

- Replace deep static game-object class trees with assemble-from-data components (C++ and script).
- GoDb / ContentDb separate identity, templates, and runtime instances.
- Designers iterate object types without engineer recompiles; schema + specialization reduce duplication.
- Direct ancestor of Unity-style GameObject+Component and a cited inspiration for later ECS discourse.

## Caveats

- Component OOP with virtual message handlers — not yet SoA/archetype DOD storage.
- Skrit/script binding details are engine-specific; treat as architectural pattern, not a portable library.

## Links

- URL: https://this.scottbilas.com/files/pubs/2002/gdc-san-jose/GameObjects.pdf
