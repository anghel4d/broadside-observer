---
title: "Social Force Model for Pedestrian Dynamics"
authors:
  - "Dirk Helbing"
  - "Péter Molnár"
year: 1995
venue: "Physical Review E"
arxiv: "cond-mat/9805244"
doi: "10.1103/PhysRevE.51.4282"
source: "https://arxiv.org/abs/cond-mat/9805244"
topics:
  - crowds
  - steering
seed_rank: 464
seed_batch: "lineage-shallow-2026-08-13"
reviewed: "2026-08-13"
pool: "game-ai"
relevance_score: 8
lineage: crowd-steering
cites:
  - title: "Flocks, Herds, and Schools: A Distributed Behavioral Model"
    url: "https://doi.org/10.1145/37401.37406"
    year: 1987
    doi: "10.1145/37401.37406"
see:
  - "204-flocks-herds-and-schools-a-distributed-behavioral-model"
---

# Social Force Model for Pedestrian Dynamics

## One-sentence takeaway

Helbing and Molnár model a pedestrian as a particle driven by social forces — desired-velocity acceleration, repulsion from others and walls, plus attraction — whose coupled Langevin equations self-organize into lanes and other observed crowd patterns.

## Why it matters here

Physics-style baseline beside boids and ORCA for GRID COMMAND crowds: forces are easy to drop into an ECS integrator, then later replaced by velocity-space guarantees where packing matters.

## Key ideas

- "Social forces" measure internal motivations, not contact mechanics: accelerate toward a preferred velocity, keep distance from people and borders, and optionally approach attractors.
- The resulting nonlinearly coupled Langevin equations reproduce collective effects (lane formation, oscillatory flows at bottlenecks) in simulation.
- Continuous-space alternative to Reynolds' discrete steering rules; later game/RTS avoidance often starts here and then fights oscillation with damping or ORCA.
- Journal version is PRE 51, 4282–4286 (1995); the arXiv preprint (cond-mat/9805244) is the stable open text.

## Caveats

## Links

- arXiv: [cond-mat/9805244](https://arxiv.org/abs/cond-mat/9805244)
- DOI: [10.1103/PhysRevE.51.4282](https://doi.org/10.1103/PhysRevE.51.4282)
