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
pool: "engine"
relevance_score: 8
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
