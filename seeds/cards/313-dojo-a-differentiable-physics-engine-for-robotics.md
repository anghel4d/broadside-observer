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
seed_rank: 313
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"
relevance_score: 8
cites: []
see: []
---

# Dojo: A Differentiable Physics Engine for Robotics

## One-sentence takeaway

Dojo models hard contact as a second-order-cone complementarity problem and differentiates the interior-point solve through the implicit function theorem, with the central-path parameter selecting smooth gradients versus hard contact.

## Why it matters here

A robotics engine that can flip between “precise rollout” and “smooth enough to optimize through” is the same knob Anoptic would want if GRID COMMAND ever backprops through contact rather than only forward-simulates it.

## Key ideas

- Contact and friction are an NCP with second-order cone constraints, not a softened LCP or penalty spring.
- A custom primal-dual interior-point method keeps the SOCP stable across a wide range of sample rates.
- Implicit-function-theorem gradients of that solve are the training signal for trajectory optimization, policy learning, and system identification.
- High central-path threshold → smooth contact and usable gradients; low threshold → hard-contact rollouts.
- Benchmarked against MuJoCo, PyBullet, Drake, and Brax; sim-to-real checked on a Ufactory xArm 6. Open source as Dojo.jl with Python bindings.

## Caveats

## Links

- arXiv: [2203.00806](https://arxiv.org/abs/2203.00806)
- Code: https://github.com/dojo-sim/Dojo.jl
