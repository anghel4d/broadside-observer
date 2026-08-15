---
title: 'Topology-Guided ORCA: Smooth Multi-Agent Motion Planning in Constrained Environments'
authors:
- Fatemeh Cheraghi Pouria
- Zhe Huang
- Ananya Yammanuru
- Shuijing Liu
- Katherine Driggs-Campbell
year: 2024
venue: arXiv:cs.RO
arxiv: '2407.16771'
doi: null
source: https://arxiv.org/abs/2407.16771
topics:
- gameai
seed_rank: 225
seed_batch: systems-prefill-2026-08-13
reviewed: '2026-08-13'
pool: game-ai
relevance_score: 9
lineage: crowd-steering
cites:
- title: Reciprocal n-body Collision Avoidance (ORCA)
  url: https://doi.org/10.1007/978-3-642-19457-3_1
  year: 2011
  arxiv: null
  doi: 10.1007/978-3-642-19457-3_1
- title: RVO2 Library
  url: https://gamma.cs.unc.edu/RVO2/
  year: 2011
  arxiv: null
  doi: null
see:
- "273-reciprocal-n-body-collision-avoidance-orca"
- "469-rvo2-library"
---

# Topology-Guided ORCA: Smooth Multi-Agent Motion Planning in Constrained Environments

## One-sentence takeaway

Topology-Guided ORCA feeds ORCA a sequence of waypoints from a topological graph of free space so agents no longer freeze when a static obstacle sits on the straight-line goal.

## Why it matters here

GRID COMMAND corridors, chokepoints, and base interiors are exactly the constrained maps where vanilla ORCA ignores walls until it is too late; this is the cheap planner-in-front-of-ORCA fix.

## Key ideas

- Stock ORCA is strong in open space but treats static geometry as a last-moment constraint, so an intercepting wall traps the agent.
- A graph of the traversable region encodes the topology of free space.
- A path planner emits waypoints from start to goal; each waypoint becomes ORCA's next preferred-velocity target.
- Crowd experiments in constrained maps produce smoother, more natural trajectories than bare ORCA.
- Positioned as a simulator for training social-navigation policies, not only as an online game steering layer. RSS 2024 workshop paper.

## Caveats

## Links

- arXiv: [2407.16771](https://arxiv.org/abs/2407.16771)
- PDF: https://arxiv.org/pdf/2407.16771
