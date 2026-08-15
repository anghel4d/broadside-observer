---
title: "A Multiagent Potential Field-Based Bot for Real-Time Strategy Games"
authors:
  - "Johan Hagelbäck"
  - "Stefan J. Johansson"
year: 2009
venue: "International Journal of Computer Games Technology"
arxiv: null
doi: "10.1155/2009/910819"
source: "https://doi.org/10.1155/2009/910819"
topics:
  - potential-fields
seed_rank: 399
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "game-ai"
relevance_score: 7
lineage: crowd-steering
cites:
  - title: "Steering Behaviors for Autonomous Characters"
    url: "https://www.red3d.com/cwr/papers/1999/gdc99steer.html"
    year: 1999
    arxiv: null
    doi: null
  - title: "Dealing with Fog of War in a Real Time Strategy Game Environment"
    url: "https://doi.org/10.1109/CIG.2008.5035621"
    year: 2008
    arxiv: null
    doi: "10.1109/CIG.2008.5035621"
see:
  - "201-steering-behaviors-for-autonomous-characters"
---

# A Multiagent Potential Field-Based Bot for Real-Time Strategy Games

## One-sentence takeaway

Hagelbäck and Johansson drive every RTS unit with a sum of attractive and repulsive fields (terrain, resources, enemies, cooldown) and won the ORTS tank-battle track by tuning those charges.

## Why it matters here

GRID COMMAND infantry that must not stack, must peel when they cannot fire, and must still walk toward an objective are this bot: local fields, not a full A* per unit per tick. Use it for reactive motion; keep a planner or flow field for the long-range goal Continuum Crowds already covers.

## Key ideas

- Six-stage recipe: name the objects, name the forces, assign charges, pick spatial/temporal resolution, define the agents, then the MAS architecture.
- Navigation fields repel terrain; strategic fields attract resources/bases/enemies; tactical fields retreat a unit that is on cooldown.
- Fog-of-war is just a missing charge plus an exploration field — surprisingly robust in their ORTS tests.
- Reported >99% wins vs four 2008 tournament teams in tank battles; local minima and weight-tuning remain the known failure modes.

## Caveats

## Links

- DOI: https://doi.org/10.1155/2009/910819
- Wiley page: https://onlinelibrary.wiley.com/doi/10.1155/2009/910819
