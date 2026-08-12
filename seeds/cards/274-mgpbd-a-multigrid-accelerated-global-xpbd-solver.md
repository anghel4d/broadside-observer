---
title: "MGPBD: A Multigrid Accelerated Global XPBD Solver"
authors:
  - "Chunlei Li"
  - "Peng Yu"
  - "Tiantian Liu"
  - "Siyuan Yu"
  - "Yuting Xiao"
  - "Shuai Li"
  - "Aimin Hao"
  - "Yang Gao"
  - "Qinping Zhao"
year: 2025
venue: "arXiv:cs.GR"
arxiv: "2505.13390"
doi: "10.1145/3721238.3730720"
source: "https://arxiv.org/abs/2505.13390"
topics:
  - physics
seed_rank: 274
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 9
---

# MGPBD: A Multigrid Accelerated Global XPBD Solver

## One-sentence takeaway

We introduce a novel Unsmoothed Aggregation (UA) Algebraic Multigrid (AMG) method combined with Preconditioned Conjugate Gradient (PCG) to overcome the limitations of Extended Position-Based Dynamics (XPBD) in high-resolution and high-stiffness simulations.

## Why it matters here

Real-time graphics technique relevant to Anoptic Vulkan/meshlet/GI path (MGPBD: A Multigrid Accelerated Global XPBD Solver).

## Key ideas

- We introduce a novel Unsmoothed Aggregation (UA) Algebraic Multigrid (AMG) method combined with Preconditioned Conjugate Gradient (PCG) to overcome the limitations of Extended Position-Based Dynamics (XPBD) in high-resolution and high-stiffness simulations.
- While XPBD excels in simulating deformable objects due to its speed and simplicity, its nonlinear Gauss-Seidel (GS) solver often struggles with low-frequency errors, leading to instability and stalling issues, especially in high-resolution, high-stiffness simulations.
- Our multigrid approach addresses these issues efficiently by leveraging AMG.
- To reduce the computational overhead of traditional AMG, where prolongator construction can consume up to two-thirds of the runtime, we propose a lazy setup strategy that reuses prolongators across iterations based on matrix structure and physical significance.
- Furthermore, we introduce a simplified method for constructing near-kernel components by applying a few sweeps of iterative methods to the homogeneous equation, achieving convergence rates comparable to adaptive smoothed aggregation (adaptive-SA) at a lower computational cost.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2505.13390](https://arxiv.org/abs/2505.13390)
- DOI: [10.1145/3721238.3730720](https://doi.org/10.1145/3721238.3730720)
- URL: https://arxiv.org/abs/2505.13390
