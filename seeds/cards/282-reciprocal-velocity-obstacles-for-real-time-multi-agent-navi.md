---
title: "Reciprocal Velocity Obstacles for Real-Time Multi-Agent Navigation"
authors:
  - "Jur van den Berg"
  - "Ming Lin"
  - "Dinesh Manocha"
year: 2008
venue: "ICRA 2008"
arxiv: null
doi: "10.1109/ROBOT.2008.4543489"
source: "https://doi.org/10.1109/ROBOT.2008.4543489"
topics:
  - crowds
  - rvo
seed_rank: 282
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
  - title: "ClearPath: Highly Parallel Collision Avoidance for Multi-Agent Simulation"
    url: "https://doi.org/10.1145/1599470.1599494"
    year: 2009
    arxiv: null
    doi: "10.1145/1599470.1599494"
  - title: "Reciprocal n-body Collision Avoidance (ORCA)"
    url: "https://doi.org/10.1007/978-3-642-19457-3_1"
    year: 2011
    arxiv: null
    doi: "10.1007/978-3-642-19457-3_1"
  - title: "Steering Behaviors For Autonomous Characters"
    url: "https://www.red3d.com/cwr/steer/"
    year: 1999
    arxiv: null
    doi: null
see:
  - "458-motion-planning-in-dynamic-environments-using-velocity"
  - "457-clearpath-highly-parallel-collision-avoidance-for-multi"
  - "273-reciprocal-n-body-collision-avoidance-orca"
  - "201-steering-behaviors-for-autonomous-characters"
---

# Reciprocal Velocity Obstacles for Real-Time Multi-Agent Navigation

## One-sentence takeaway

RVO lets each agent assume the other will take half the avoidance, so choosing a velocity outside the *reciprocal* velocity obstacle yields collision-free, oscillation-free motion without communication.

## Why it matters here

This is the 2008 paper ORCA (2011) geometrizes. GRID COMMAND local steering starts here: preferred velocity from the flow field / navmesh, then RVO/ORCA to not walk through friends.

## Key ideas

- A velocity obstacle VO_A|B is the set of relative velocities of A that will hit B assuming B holds course (Fiorini 1998).
- RVO_A|B is that cone translated so both agents share the dodge: A picks a velocity whose average with the current velocity lies outside VO.
- No message passing; reciprocity is implicit in the shared geometric construction.
- Scales to real-time crowds; ClearPath (2009) parallelizes the same idea; ORCA replaces the cone with half-planes and an LP.
- ICRA 2008, DOI 10.1109/ROBOT.2008.4543489.

## Caveats

## Links

- DOI: [10.1109/ROBOT.2008.4543489](https://doi.org/10.1109/ROBOT.2008.4543489)
