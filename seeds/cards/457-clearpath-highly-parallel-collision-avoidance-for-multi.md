---
title: "ClearPath: Highly Parallel Collision Avoidance for Multi-Agent Simulation"
authors:
  - "Stephen J. Guy"
  - "Jatin Chhugani"
  - "Changkyu Kim"
  - "Nadathur Satish"
  - "Ming C. Lin"
  - "Dinesh Manocha"
  - "Pradeep Dubey"
year: 2009
venue: "SCA"
arxiv: null
doi: "10.1145/1599470.1599494"
source: "https://doi.org/10.1145/1599470.1599494"
topics:
  - crowds
  - collision-avoidance
seed_rank: 457
seed_batch: "lineage-shallow-2026-08-13"
reviewed: "2026-08-13"
pool: "game-ai"
relevance_score: 8
lineage: crowd-steering
cites:
  - title: "Reciprocal Velocity Obstacles for Real-Time Multi-Agent Navigation"
    url: "https://doi.org/10.1109/ROBOT.2008.4543489"
    year: 2008
    doi: "10.1109/ROBOT.2008.4543489"
  - title: "Motion Planning in Dynamic Environments Using Velocity Obstacles"
    url: "https://doi.org/10.1177/027836499801700706"
    year: 1998
    doi: "10.1177/027836499801700706"
see:
  - "282-reciprocal-velocity-obstacles-for-real-time-multi-agent-navi"
  - "458-motion-planning-in-dynamic-environments-using-velocity"
---

# ClearPath: Highly Parallel Collision Avoidance for Multi-Agent Simulation

## One-sentence takeaway

ClearPath casts each agent's velocity-obstacle constraints as a discrete quadratic program and solves it with SIMD/thread parallelism so thousands of heterogeneous agents stay collision-free in milliseconds.

## Why it matters here

Shows how reciprocal avoidance becomes a data-parallel kernel before ORCA's half-plane LP — the right shape for GRID COMMAND local avoidance on many units.

## Key ideas

- Builds on Fiorini/Shiller VOs and van den Berg RVO: each agent selects a velocity outside colliding relative-velocity cones.
- Reformulates the feasible-velocity search as a parallelizable quadratic program rather than a sequential geometric construction.
- Demonstrates dense, mixed-radius crowds on CPU SIMD and many-core hardware without a centralized planner.
- Sits between RVO (2008) and ORCA (2011) as the industrial parallelization of velocity-space avoidance.

## Caveats

## Links

- DOI: [10.1145/1599470.1599494](https://doi.org/10.1145/1599470.1599494)
- Author PDF: https://gamma.cs.unc.edu/CA/ClearPath.pdf
