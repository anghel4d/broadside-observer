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
seed_rank: 705
seed_batch: "lineage-shallow-2026-08-13"
reviewed: "2026-08-13"
pool: "game-ai"
relevance_score: 8
lineage: crowd-steering
cites:
  - title: "Reciprocal Velocity Obstacles for Real-Time Multi-Agent Navigation"
    url: "https://doi.org/10.1109/ROBOT.2008.4543489"
    year: 2008
    arxiv: null
    doi: "10.1109/ROBOT.2008.4543489"
  - title: "Reciprocal n-body Collision Avoidance (ORCA)"
    url: "https://doi.org/10.1007/978-3-642-19457-3_1"
    year: 2011
    arxiv: null
    doi: "10.1007/978-3-642-19457-3_1"
see:
  - "358-reciprocal-velocity-obstacles-for-real-time-multi-agent-navi"
  - "349-reciprocal-n-body-collision-avoidance-orca"
---
# ClearPath: Highly Parallel Collision Avoidance for Multi-Agent Simulation

## One-sentence takeaway

Casts VO-style avoidance as a parallelizable quadratic program — bridge from VO toward ORCA-scale crowds.

## Why it matters here

Shows how reciprocal avoidance becomes a data-parallel kernel before ORCA for large unit counts.

## Key ideas

- Velocity-obstacle constraints as discrete optimization.
- Thread-level and SIMD parallelism.
- Dense heterogeneous agent sets in milliseconds.
- Sits between RVO (2008) and ORCA (2011).

## Caveats

- Not ORCA's LP guarantee proof.
- Parameter tuning still matters for packing vs visuals.
- Seed card from shallow lineage pass; promote before relying on fine-grained claims.

## Links

- DOI: [10.1145/1599470.1599494](https://doi.org/10.1145/1599470.1599494)
- URL: https://doi.org/10.1145/1599470.1599494
- http://gamma-web.iacs.umd.edu/CA/ClearPath.pdf
