---
title: "Networking the Boids is More Robust Against Adversarial Learning"
authors:
  - "Jiangjun Tang"
  - "George Leu"
  - "Hussein Abbass"
year: 2018
venue: "arXiv cs.NE"
arxiv: "1802.10206"
doi: null
source: "https://arxiv.org/abs/1802.10206"
topics:
  - gameai
seed_rank: 262
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "game-ai"
relevance_score: 9
cites:
  - title: "Flocks, herds and schools: A distributed behavioral model"
    url: "https://doi.org/10.1145/37401.37406"
    year: 1987
    arxiv: null
    doi: "10.1145/37401.37406"
  - title: "Swarm robotics: a review from the swarm engineering perspective"
    url: "https://doi.org/10.1007/s11721-012-0075-2"
    year: 2013
    arxiv: null
    doi: "10.1007/s11721-012-0075-2"
see:
  - "204-flocks-herds-and-schools-a-distributed-behavioral-model"
---

# Networking the Boids is More Robust Against Adversarial Learning

## One-sentence takeaway

Replace each boid's Euclidean sensory neighborhood with graph-neighborhood hops and the swarm forms faster, looks better, and is harder for an observer to reverse-engineer.

## Why it matters here

GRID COMMAND units already have a comms graph as well as a spatial one. Steering on the comms graph instead of vision range is a cheap way to make formations less locally greedy and less leaky to an adversary watching positions.

## Key ideas

- Classic Reynolds neighborhoods are disks in Euclidean space; here adjacency is a communication / social graph.
- Networked neighborhoods produce faster convergence and higher-quality formations than local vision.
- An adversarial learner watching trajectories recovers the control law less accurately when neighbors are graph-defined.
- The result is robustness of the *dynamics*, not just of the formation metric.

## Caveats

## Links

- arXiv: [1802.10206](https://arxiv.org/abs/1802.10206)
- PDF: https://arxiv.org/pdf/1802.10206
