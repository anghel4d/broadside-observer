---
title: "Overwatch Gameplay Architecture and Netcode (ECS-flavored)"
authors:
  - "Timothy Ford"
year: 2017
venue: "GDC 2017"
arxiv: null
doi: null
source: "https://www.gdcvault.com/play/1024001/-Overwatch-Gameplay-Architecture-and"
topics:
  - ecs
  - realtime
  - netcode
seed_rank: 263
seed_batch: "systems-prefill-2026-08-13"
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
  - title: "Data-Oriented Design and C++"
    url: "https://www.youtube.com/watch?v=rX0ItVEVjHc"
    year: 2014
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
  - "194-data-oriented-design-and-c"
  - "325-unity-ecs-dots-architecture-overview-entities-package-docs"
---

# Overwatch Gameplay Architecture and Netcode (ECS-flavored)

## One-sentence takeaway

Overwatch's gameplay is a deterministic, component-oriented simulation ticked on the server, with clients predicting the same transform so netcode is a property of the ECS rather than a layer bolted on afterwards.

## Why it matters here

Shipped-scale proof that ano-style entities-plus-systems can carry both simulation and prediction. The talk is the architecture Broadside should steal: one gameplay transform, two clocks, no gameplay objects that cannot be replayed.

## Key ideas

- Gameplay state lives in components; systems are deterministic functions of that state plus input, which is what makes prediction and replay possible.
- Responsiveness comes from client-side prediction of the same systems the server will run, not from letting the client own truth.
- Precision (hit registration, abilities) is a netcode problem solved by the same component model, not a special-case object graph.
- Companion GDC 2017 talk by Dan Reed covers Statescript prediction/replication of scripted weapons on the same architecture.
- Canonical artifact is the GDC Vault session (video); no official public slide PDF from Ford.

## Caveats

## Links

- GDC Vault: https://www.gdcvault.com/play/1024001/-Overwatch-Gameplay-Architecture-and
- YouTube: https://www.youtube.com/watch?v=W3aieHjyNvw
