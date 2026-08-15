---
title: Steering Behaviors For Autonomous Characters
authors:
- Craig W. Reynolds
year: 1999
venue: GDC
arxiv: null
doi: null
source: https://www.red3d.com/cwr/steer/
topics:
- steering
- boids
seed_rank: 201
seed_batch: systems-prefill-2026-08-13
reviewed: '2026-08-13'
pool: game-ai
relevance_score: 10
lineage: crowd-steering
cites:
- title: 'Flocks, Herds, and Schools: A Distributed Behavioral Model'
  url: https://doi.org/10.1145/37401.37406
  year: 1987
  arxiv: null
  doi: 10.1145/37401.37406
- title: Reciprocal Velocity Obstacles for Real-Time Multi-Agent Navigation
  url: https://doi.org/10.1109/ROBOT.2008.4543489
  year: 2008
  arxiv: null
  doi: 10.1109/ROBOT.2008.4543489
- title: Reciprocal n-body Collision Avoidance (ORCA)
  url: https://doi.org/10.1007/978-3-642-19457-3_1
  year: 2011
  arxiv: null
  doi: 10.1007/978-3-642-19457-3_1
- title: Continuum Crowds
  url: https://doi.org/10.1145/1141911.1141978
  year: 2006
  arxiv: null
  doi: 10.1145/1141911.1141978
see:
- "204-flocks-herds-and-schools-a-distributed-behavioral-model"
- "282-reciprocal-velocity-obstacles-for-real-time-multi-agent-navi"
- "273-reciprocal-n-body-collision-avoidance-orca"
- "357-continuum-crowds"
---

# Steering Behaviors For Autonomous Characters

## One-sentence takeaway

Reynolds splits autonomous motion into action selection, steering, and locomotion, then catalogs reusable steering primitives that combine into improvisational navigation.

## Why it matters here

GRID COMMAND and Anoptic agents need locomotion that is independent of path search: seek, arrive, avoid, follow, and flock as ECS-friendly force mixers rather than one monolithic planner.

## Key ideas

- Three-layer model: strategy/goal setting above, simple vehicle locomotion below, and a middle steering layer that emits a desired acceleration.
- Primitive behaviors include seek, flee, pursue, evade, arrival, wander, obstacle avoidance, containment, wall/path/flow-field following.
- Combined behaviors (crowd path following, leader following, unaligned collision avoidance, queuing, flocking) are weighted sums of those primitives.
- Steering is locomotion-agnostic: the same desired-velocity request can drive a point mass, a simple vehicle, or a more detailed motor model.
- OpenSteer later packaged the catalog as a C++ sandbox for tuning combinations.

## Caveats

## Links

- Author page: [red3d.com/cwr/steer](https://www.red3d.com/cwr/steer/)
- GDC 1999 paper (HTML): https://www.red3d.com/cwr/steer/gdc99/
- GDC 1999 paper (PDF): https://www.red3d.com/cwr/papers/1999/gdc99steer.pdf
