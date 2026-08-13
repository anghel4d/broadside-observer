---
title: "Dojo: A Differentiable Physics Engine for Robotics"
authors:
  - "Taylor A. Howell"
  - "Simon Le Cleac'h"
  - "Jan Brüdigam"
  - "Qianzhong Chen"
  - "Jiankai Sun"
  - "J. Zico Kolter"
  - "Mac Schwager"
  - "Zachary Manchester"
year: 2022
venue: "arXiv:cs.RO"
arxiv: "2203.00806"
doi: null
source: "https://arxiv.org/abs/2203.00806"
topics:
  - physics
seed_rank: 391
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"
relevance_score: 8
cites:
  - title: "KM3NeT/ORCA: status and perspectives for neutrino oscillation and mass hierarchy measurements"
    url: "https://arxiv.org/abs/2107.10593"
    year: 2021
    arxiv: "2107.10593"
    doi: "10.22323/1.390.0149"
    card: "318-km3net-orca-status-and-perspectives-for-neutrino-oscillation"
  - title: "MGPBD: A Multigrid Accelerated Global XPBD Solver"
    url: "https://arxiv.org/abs/2505.13390"
    year: 2025
    arxiv: "2505.13390"
    doi: "10.1145/3721238.3730720"
    card: "274-mgpbd-a-multigrid-accelerated-global-xpbd-solver"
  - title: "Physics, Topology, Logic and Computation: A Rosetta Stone"
    url: "https://arxiv.org/abs/0903.0340"
    year: 2011
    arxiv: "0903.0340"
    doi: "10.1007/978-3-642-12821-9_2"
    card: "019-physics-topology-logic-and-computation-a-rosetta-stone"
---

# Dojo: A Differentiable Physics Engine for Robotics

## One-sentence takeaway

We present Dojo, a differentiable physics engine for robotics that prioritizes stable simulation, accurate contact physics, and differentiability with respect to states, actions, and system parameters.

## Why it matters here

Engine architecture / simulation structure useful for Anoptic ECS craft (Dojo: A Differentiable Physics Engine for Robotics).

## Key ideas

- We present Dojo, a differentiable physics engine for robotics that prioritizes stable simulation, accurate contact physics, and differentiability with respect to states, actions, and system parameters.
- Dojo models hard contact and friction with a nonlinear complementarity problem with second-order cone constraints.
- We introduce a custom primal-dual interior-point method to solve the second order cone program for stable forward simulation over a broad range of sample rates.
- We obtain smooth gradient approximations with this solver through the implicit function theorem, giving gradients that are useful for downstream trajectory optimization, policy optimization, and system identification applications.
- Specifically, we propose to use the central path parameter threshold in the interior point solver as a user-tunable design parameter.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2203.00806](https://arxiv.org/abs/2203.00806)
- URL: https://arxiv.org/abs/2203.00806
