---
title: 'Topology-Guided ORCA: Smooth Multi-Agent Motion Planning in Constrained Environments'
authors:
- Fatemeh Cheraghi Pouria
- Zhe Huang
- Ananya Yammanuru
- Shuijing Liu
- Katherine Driggs-Campbell
year: 2024
venue: arXiv:cs.RO
arxiv: '2407.16771'
doi: null
source: https://arxiv.org/abs/2407.16771
topics:
- gameai
seed_rank: 225
seed_batch: systems-prefill-2026-08-13
reviewed: '2026-08-13'
pool: game-ai
relevance_score: 9
lineage: crowd-steering
cites:
- title: Reciprocal n-body Collision Avoidance (ORCA)
  url: https://doi.org/10.1007/978-3-642-19457-3_1
  year: 2011
  arxiv: null
  doi: 10.1007/978-3-642-19457-3_1
- title: RVO2 Library
  url: https://gamma.cs.unc.edu/RVO2/
  year: 2011
  arxiv: null
  doi: null
see:
- "273-reciprocal-n-body-collision-avoidance-orca"
- "469-rvo2-library"
---

# Topology-Guided ORCA: Smooth Multi-Agent Motion Planning in Constrained Environments

## One-sentence takeaway

We present Topology-Guided ORCA as an alternative simulator to replace ORCA for planning smooth multi-agent motions in environments with static obstacles.

## Why it matters here

Classical game/RTS AI technique (non-LLM) for GRID COMMAND lineage (Topology-Guided ORCA: Smooth Multi-Agent Motion Planning in Constrained Environm).

## Key ideas

- We present Topology-Guided ORCA as an alternative simulator to replace ORCA for planning smooth multi-agent motions in environments with static obstacles.
- Despite the impressive performance in simulating multi-agent crowd motion in free space, ORCA encounters a significant challenge in navigating the agents with the presence of static obstacles.
- ORCA ignores static obstacles until an agent gets too close to an obstacle, and the agent will get stuck if the obstacle intercepts an agent's path toward the goal.
- To address this challenge, Topology-Guided ORCA constructs a graph to represent the topology of the traversable region of the environment.
- We use a path planner to plan a path of waypoints that connects each agent's start and goal positions.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2407.16771](https://arxiv.org/abs/2407.16771)
- URL: https://arxiv.org/abs/2407.16771
