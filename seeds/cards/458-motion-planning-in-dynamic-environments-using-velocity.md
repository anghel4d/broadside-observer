---
title: "Motion Planning in Dynamic Environments Using Velocity Obstacles"
authors:
  - "Paolo Fiorini"
  - "Zvi Shiller"
year: 1998
venue: "The International Journal of Robotics Research"
arxiv: null
doi: "10.1177/027836499801700706"
source: "https://doi.org/10.1177/027836499801700706"
topics:
  - collision-avoidance
  - motion-planning
seed_rank: 458
seed_batch: "lineage-shallow-2026-08-13"
reviewed: "2026-08-13"
pool: "game-ai"
relevance_score: 9
lineage: crowd-steering
cites:
  - title: "Motion Planning in Dynamic Environments: Obstacles Moving Along Arbitrary Trajectories"
    url: "https://doi.org/10.1109/ROBOT.1993.292162"
    year: 1993
    doi: "10.1109/ROBOT.1993.292162"
---

# Motion Planning in Dynamic Environments Using Velocity Obstacles

## One-sentence takeaway

A velocity obstacle is the cone of constant robot velocities that would collide with a moving obstacle if both hold their current velocities, so collision-free motion is any feasible velocity outside every VO.

## Why it matters here

RVO, ClearPath, and ORCA all reciprocalize this primitive; GRID COMMAND local avoidance is still a velocity-space query built on Fiorini and Shiller.

## Key ideas

- Transform a time-varying workspace obstacle into a static forbidden region in velocity space using relative velocity and the obstacle's Minkowski sum with the robot.
- Choose a dynamically feasible velocity outside all VOs (subject to acceleration limits) rather than planning a full space-time path.
- Works for known obstacle velocities; repeated application yields a reactive planner for changing scenes.
- Foundational robotics-to-games transfer: later crowd papers keep the cone and add reciprocity so two agents do not oscillate.

## Caveats

## Links

- DOI: [10.1177/027836499801700706](https://doi.org/10.1177/027836499801700706)
