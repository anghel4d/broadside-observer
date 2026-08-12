---

title: "Motion Planning in Dynamic Environments Using Velocity Obstacles"
authors:
  - "Paolo Fiorini"
  - "Zvi Shiller"
year: 1998
venue: "IJRR"
arxiv: null
doi: "10.1177/027836499801700706"
source: "https://doi.org/10.1177/027836499801700706"
topics:
  - collision-avoidance
  - motion-planning
seed_rank: 706
seed_batch: "lineage-shallow-2026-08-13"
reviewed: "2026-08-13"
pool: "gameai"
relevance_score: 9
lineage: steering-boids-orca
cites:
  - title: "Reciprocal Velocity Obstacles for Real-Time Multi-Agent Navigation"
    url: "https://doi.org/10.1109/ROBOT.2008.4543489"
    year: 2008
    arxiv: null
    doi: "10.1109/ROBOT.2008.4543489"
    card: "358-reciprocal-velocity-obstacles-for-real-time-multi-agent-navi"
  - title: "ClearPath: Highly Parallel Collision Avoidance for Multi-Agent Simulation"
    url: "https://doi.org/10.1145/1599470.1599494"
    year: 2009
    arxiv: null
    doi: "10.1145/1599470.1599494"
    card: "705-clearpath-highly-parallel-collision-avoidance-for-multi"
---
# Motion Planning in Dynamic Environments Using Velocity Obstacles

## One-sentence takeaway

Velocity Obstacles — the geometric primitive that RVO/ORCA later reciprocalize.

## Why it matters here

Necessary root for understanding ORCA (Optimal Reciprocal Collision Avoidance), not whales/LLMs.

## Key ideas

- Cone of colliding relative velocities in velocity space.
- Select velocities outside VO of moving obstacles.
- Foundational robotics-to-games crowd pipeline.

## Caveats

- Naive VO oscillates with reactive peers — motivating RVO/ORCA.
- Assumes known obstacle velocities.
- Seed card from shallow lineage pass; promote before relying on fine-grained claims.

## Links

- DOI: [10.1177/027836499801700706](https://doi.org/10.1177/027836499801700706)
- URL: https://doi.org/10.1177/027836499801700706
