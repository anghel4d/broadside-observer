---
title: "Continuum Crowds"
authors:
  - "Adrien Treuille"
  - "Seth Cooper"
  - "Zoran Popović"
year: 2006
venue: "SIGGRAPH"
arxiv: null
doi: "10.1145/1141911.1141978"
source: "https://doi.org/10.1145/1141911.1141978"
topics:
  - crowds
  - fields
seed_rank: 357
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "game-ai"
relevance_score: 8
lineage: crowd-steering
cites:
  - title: "Flocks, Herds, and Schools: A Distributed Behavioral Model"
    url: "https://doi.org/10.1145/37401.37406"
    year: 1987
    arxiv: null
    doi: "10.1145/37401.37406"
  - title: "Steering Behaviors for Autonomous Characters"
    url: "https://www.red3d.com/cwr/papers/1999/gdc99steer.html"
    year: 1999
    arxiv: null
    doi: null
see:
  - "204-flocks-herds-and-schools-a-distributed-behavioral-model"
  - "201-steering-behaviors-for-autonomous-characters"
---

# Continuum Crowds

## One-sentence takeaway

Treat a crowd as a density field and solve an eikonal / continuum-potential PDE so every agent follows the gradient of a globally consistent cost, instead of pairwise steering.

## Why it matters here

Thousands of GRID COMMAND infantry cannot each run A* plus ORCA every tick. Continuum crowds are the field-theoretic alternative: one grid solve per group, then each unit is just an advection particle — the same flow-field idea Broadside can share with navmesh heat maps.

## Key ideas

- Discretize space into a density and a mean-velocity field; discomfort / speed / path length become a cost potential φ.
- Solving the eikonal equation for φ yields a unit-speed gradient that is collision-aware at the continuum scale (people slow and turn in dense regions).
- Groups with different goals get different potentials; individuals are integrated along −∇φ with only local velocity blending.
- Compared with Reynolds-style forces, the continuum view avoids the worst local minima of potential fields because the potential is globally solved, not summed from charges.

## Caveats

## Links

- DOI: https://doi.org/10.1145/1141911.1141978
