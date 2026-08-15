---
title: "RVO2 Library"
authors:
  - "Jur van den Berg"
  - "Stephen J. Guy"
  - "Jamie Snape"
  - "Ming C. Lin"
  - "Dinesh Manocha"
year: 2011
venue: "UNC GAMMA"
arxiv: null
doi: null
source: "https://gamma-web.iacs.umd.edu/RVO2/"
topics:
  - orca
  - crowds
seed_rank: 469
seed_batch: "lineage-shallow-2026-08-13"
reviewed: "2026-08-13"
pool: "game-ai"
relevance_score: 8
lineage: crowd-steering
cites:
  - title: "Reciprocal n-body Collision Avoidance"
    url: "https://doi.org/10.1007/978-3-642-19457-3_1"
    year: 2011
    doi: "10.1007/978-3-642-19457-3_1"
  - title: "Reciprocal Velocity Obstacles for Real-Time Multi-Agent Navigation"
    url: "https://doi.org/10.1109/ROBOT.2008.4543489"
    year: 2008
    doi: "10.1109/ROBOT.2008.4543489"
see:
  - "273-reciprocal-n-body-collision-avoidance-orca"
  - "282-reciprocal-velocity-obstacles-for-real-time-multi-agent-navi"
---

# RVO2 Library

## One-sentence takeaway

RVO2 is the reference C++ implementation of ORCA: each agent reports a preferred velocity and the library returns a collision-free velocity against other agents and static polygons, optionally in parallel via OpenMP.

## Why it matters here

Craft entry point for GRID COMMAND local avoidance prototypes — ship the library, then rewrite the kernel into ECS once the preferred-velocity contract is settled.

## Key ideas

- Version 2.0 replaces the older RVO formulation with Optimal Reciprocal Collision Avoidance and drops built-in global roadmap planning; preferred velocities are the application's job.
- Agents are disks in 2D; static obstacles are polygons. A companion RVO2-3D library handles 3D with no static obstacles.
- Simple step API: set preferred velocities, `doStep()`, read new velocities. Licensed Apache 2.0 as of the 2.0.2 release (2016).
- Used in production titles (Relic's *Warhammer 40,000: Space Marine*) as evidence the ORCA loop survives large unit counts.

## Caveats

## Links

- Project: https://gamma-web.iacs.umd.edu/RVO2/
- Source: https://github.com/snape/RVO2
