---
title: Social Force Model for Pedestrian Dynamics
authors:
- Dirk Helbing
- Peter Molnar
year: 1995
venue: Phys. Rev. E
arxiv: null
doi: 10.1103/PhysRevE.51.4282
source: https://doi.org/10.1103/PhysRevE.51.4282
topics:
- crowds
- steering
seed_rank: 712
seed_batch: lineage-shallow-2026-08-13
reviewed: '2026-08-13'
pool: gameai
relevance_score: 8
lineage: steering-boids-orca
cites:
- title: 'Flocks, Herds, and Schools: A Distributed Behavioral Model'
  url: https://doi.org/10.1145/37401.37406
  year: 1987
  arxiv: null
  doi: 10.1145/37401.37406
  card: 261-flocks-herds-and-schools-a-distributed-behavioral-model
- title: Steering Behaviors for Autonomous Characters
  url: https://www.red3d.com/cwr/papers/1999/gdc99steer.html
  year: 1999
  arxiv: null
  doi: null
  card: 258-steering-behaviors-for-autonomous-characters
- title: Reciprocal n-body Collision Avoidance (ORCA)
  url: https://doi.org/10.1007/978-3-642-19457-3_1
  year: 2011
  arxiv: null
  doi: 10.1007/978-3-642-19457-3_1
  card: 349-reciprocal-n-body-collision-avoidance-orca
---

# Social Force Model for Pedestrian Dynamics

## One-sentence takeaway

Social forces give a physics-style pedestrian model that still informs crowd/RTS avoidance baselines.

## Why it matters here

Predecessor/cousin to steering and ORCA for dense unit crowds.

## Key ideas

- Attractive/repulsive forces for goal, walls, agents.
- Emergent lane formation and panic dynamics.
- Continuous model vs discrete boid rules.
- Often compared with RVO/ORCA.

## Caveats

- Force tuning can oscillate; ORCA offers clearer velocity-space guarantees.
- Needs damping hacks for games.

## Links

- DOI: [10.1103/PhysRevE.51.4282](https://doi.org/10.1103/PhysRevE.51.4282)
- URL: https://doi.org/10.1103/PhysRevE.51.4282
