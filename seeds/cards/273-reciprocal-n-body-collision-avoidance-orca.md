---
title: "Reciprocal n-body Collision Avoidance (ORCA)"
authors:
  - "Jur van den Berg"
  - "Stephen J. Guy"
  - "Ming Lin"
  - "Dinesh Manocha"
year: 2011
venue: "ISRR STAR"
arxiv: null
doi: "10.1007/978-3-642-19457-3_1"
source: "https://doi.org/10.1007/978-3-642-19457-3_1"
topics:
  - crowds
  - orca
seed_rank: 273
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "game-ai"
relevance_score: 9
lineage: crowd-steering
cites:
  - title: "Motion Planning in Dynamic Environments Using Velocity Obstacles"
    url: "https://doi.org/10.1177/027836499801700706"
    year: 1998
    arxiv: null
    doi: "10.1177/027836499801700706"
  - title: "Reciprocal Velocity Obstacles for Real-Time Multi-Agent Navigation"
    url: "https://doi.org/10.1109/ROBOT.2008.4543489"
    year: 2008
    arxiv: null
    doi: "10.1109/ROBOT.2008.4543489"
  - title: "ClearPath: Highly Parallel Collision Avoidance for Multi-Agent Simulation"
    url: "https://doi.org/10.1145/1599470.1599494"
    year: 2009
    arxiv: null
    doi: "10.1145/1599470.1599494"
  - title: "Steering Behaviors For Autonomous Characters"
    url: "https://www.red3d.com/cwr/steer/"
    year: 1999
    arxiv: null
    doi: null
  - title: "RVO2 Library"
    url: "https://gamma.cs.unc.edu/RVO2/"
    year: 2011
    arxiv: null
    doi: null
  - title: "Continuum Crowds"
    url: "https://doi.org/10.1145/1141911.1141978"
    year: 2006
    arxiv: null
    doi: "10.1145/1141911.1141978"
see:
  - "458-motion-planning-in-dynamic-environments-using-velocity"
  - "282-reciprocal-velocity-obstacles-for-real-time-multi-agent-navi"
  - "457-clearpath-highly-parallel-collision-avoidance-for-multi"
  - "201-steering-behaviors-for-autonomous-characters"
  - "469-rvo2-library"
  - "357-continuum-crowds"
---

# Reciprocal n-body Collision Avoidance (ORCA)

## One-sentence takeaway

ORCA turns each neighbor into a half-plane in velocity space and solves a tiny LP so agents share avoidance equally, giving oscillation-free, collision-free motion for hundreds of agents in real time.

## Why it matters here

This is the default local steering layer under GRID COMMAND crowds once a flow field or navmesh has picked a preferred velocity. RVO2 is the reference implementation.

## Key ideas

- Velocity obstacles (Fiorini 1998) are the set of relative velocities that will hit a neighbor; RVO (2008) already shared the avoidance.
- ORCA constructs a half-plane of permitted velocities per neighbor that guarantees collision-free motion if both agents respect it.
- The new velocity is the LP projection of the preferred velocity onto the intersection of those half-planes — constant time per neighbor.
- Reciprocity kills the "both dodge the same way" oscillation that raw VO produces.
- ISRR 2009 / STAR 70 (2011), DOI 10.1007/978-3-642-19457-3_1; shipped as RVO2.

## Caveats

## Links

- DOI: [10.1007/978-3-642-19457-3_1](https://doi.org/10.1007/978-3-642-19457-3_1)
- RVO2: https://gamma.cs.unc.edu/RVO2/
