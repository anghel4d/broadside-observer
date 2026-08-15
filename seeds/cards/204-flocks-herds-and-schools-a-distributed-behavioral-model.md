---
title: 'Flocks, Herds, and Schools: A Distributed Behavioral Model'
authors:
- Craig W. Reynolds
year: 1987
venue: SIGGRAPH
arxiv: null
doi: 10.1145/37401.37406
source: https://doi.org/10.1145/37401.37406
topics:
- boids
- flocking
seed_rank: 204
seed_batch: systems-prefill-2026-08-13
reviewed: '2026-08-13'
pool: game-ai
relevance_score: 10
lineage: crowd-steering
cites:
- title: Steering Behaviors For Autonomous Characters
  url: https://www.red3d.com/cwr/steer/
  year: 1999
  arxiv: null
  doi: null
- title: Continuum Crowds
  url: https://doi.org/10.1145/1141911.1141978
  year: 2006
  arxiv: null
  doi: 10.1145/1141911.1141978
- title: Reciprocal Velocity Obstacles for Real-Time Multi-Agent Navigation
  url: https://doi.org/10.1109/ROBOT.2008.4543489
  year: 2008
  arxiv: null
  doi: 10.1109/ROBOT.2008.4543489
- title: Social Force Model for Pedestrian Dynamics
  url: https://doi.org/10.1103/PhysRevE.51.4282
  year: 1995
  arxiv: null
  doi: 10.1103/PhysRevE.51.4282
see:
- "201-steering-behaviors-for-autonomous-characters"
- "357-continuum-crowds"
- "282-reciprocal-velocity-obstacles-for-real-time-multi-agent-navi"
- "464-social-force-model-for-pedestrian-dynamics"
---

# Flocks, Herds, and Schools: A Distributed Behavioral Model

## One-sentence takeaway

Boids flock from three local rules — separation, alignment, and cohesion — with no global leader or scripted path.

## Why it matters here

GRID COMMAND crowds and Anoptic ambient units can be an ECS system over neighbor queries; the 1987 model is still the baseline before ORCA or continuum fields.

## Key ideas

- Each boid is a particle with geometric flight model plus a localized behavioral controller.
- Separation steers away from neighbors that are too close; alignment matches nearby heading; cohesion steers toward the local centroid.
- Neighborhood is a limited-radius, limited-FOV perception volume, so the simulation is O(neighbors) rather than a global planner.
- Obstacle avoidance and goal seeking layer on the same acceleration-summing mixer used later in the 1999 steering catalog.
- The SIGGRAPH film showed that these local rules produce splitting, rejoining, and milling that look like real flocks.

## Caveats

## Links

- DOI: [10.1145/37401.37406](https://doi.org/10.1145/37401.37406)
- Author reprint: https://www.red3d.com/cwr/papers/1987/boids.html
