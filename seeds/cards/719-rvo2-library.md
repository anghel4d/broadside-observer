---
title: RVO2 Library
authors:
- Jur van den Berg
- Stephen J. Guy
- Jamie Snape
- Ming C. Lin
- Dinesh Manocha
year: 2011
venue: UNC GAMMA
arxiv: null
doi: null
source: https://gamma.cs.unc.edu/RVO2/
topics:
- orca
- crowds
seed_rank: 719
seed_batch: lineage-shallow-2026-08-13
reviewed: '2026-08-13'
pool: game-ai
relevance_score: 8
lineage: crowd-steering
cites:
- title: Reciprocal n-body Collision Avoidance (ORCA)
  url: https://doi.org/10.1007/978-3-642-19457-3_1
  year: 2011
  arxiv: null
  doi: 10.1007/978-3-642-19457-3_1
- title: Reciprocal Velocity Obstacles for Real-Time Multi-Agent Navigation
  url: https://doi.org/10.1109/ROBOT.2008.4543489
  year: 2008
  arxiv: null
  doi: 10.1109/ROBOT.2008.4543489
see:
- "349-reciprocal-n-body-collision-avoidance-orca"
- "358-reciprocal-velocity-obstacles-for-real-time-multi-agent-navi"
---

# RVO2 Library

## One-sentence takeaway

Reference implementation packaging ORCA for real-time multi-agent avoidance.

## Why it matters here

Craft entry point to ORCA for GRID COMMAND unit local avoidance prototypes.

## Key ideas

- 2D ORCA implementation used widely in games/robotics.
- Companion to the 2011 ORCA paper.
- API: radius/pref-velocity to new velocity.
- Baseline before ECS-friendly rewrites.

## Caveats

- Verify license/mirror before shipping.
- ORCA is local; still need global path/flow fields.

## Links

- URL: https://gamma.cs.unc.edu/RVO2/
