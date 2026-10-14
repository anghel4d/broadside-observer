---
title: "Reinforcement Learning for Large-Scale Lifelong Multi-Agent Path Finding with Shared Spatial Fields"
authors:
  - "Jean Seong Bjorn Choe"
year: 2026
venue: "arXiv"
arxiv: "2610.18186"
doi: null
source: "https://arxiv.org/abs/2610.18186"
topics:
  - "strategy-rts-agents"
  - "pathfinding"
seed_rank: 2292
seed_batch: "frontier-2026-10-14"
reviewed: "2026-10-14"
pool: "game-ai"
relevance_score: 8
lineage: pathfinding
cites:
  - title: "Reinforcement Learning for Large-Scale Lifelong Multi-Agent Path Finding with Shared Spatial Fields"
    url: "https://arxiv.org/abs/2610.18186"
    year: 2026
    arxiv: "2610.18186"
    doi: null
see: []
---

# Reinforcement Learning for Large-Scale Lifelong Multi-Agent Path Finding with Shared Spatial Fields

## One-sentence takeaway

A lifelong MAPF policy computes one convolutional shared spatial field over the whole map per timestep and a compact goal-conditioned operator turns it into each agent's move preferences, trained end-to-end with average-reward RL on throughput — matching or beating the strongest baselines at 10,000 agents in under 10 ms per step.

## Why it matters here

This is the learned cousin of flow-field crowd steering: per-map field once, cheap per-unit lookup, no online planner — exactly the cost shape GRID COMMAND needs for thousands of units, and a counterpoint to the classical-MAPF cost card from the previous Frontier.

## Key ideas

- **Shared field.** A CNN evaluates once per timestep over the map; agents read movement preferences through a small goal-conditioned operator.
- **Training.** Average-reward RL with throughput as reward; no planner demonstrations, no separate online path planner.
- **Generalisation.** One policy per layout class (structured / unstructured), trained on mixtures of small maps, deployed without retraining on larger unseen layouts and populations.
- **Scale.** Six layouts at 10,000 agents with throughput comparable to or higher than the strongest evaluated baselines — SILLM (learned preferences + PIBT with BD/SG/DG guidance), OnlineGGO (learned edge costs for PIBT) and Follower.
- **Speed.** Average execution under 10 ms per step, more than an order of magnitude faster than several established planners.

## Caveats

Grid-world LMAPF (warehouse-style) with uniform agents; no heterogeneous unit sizes, combat, or adversaries. Single-author preprint, Oct 2026.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.18186
- PDF: https://arxiv.org/pdf/2610.18186
- HTML: https://arxiv.org/html/2610.18186v1
