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
cites:
  - title: "Position based dynamics"
    url: "https://doi.org/10.1016/j.jvcir.2007.01.005"
    year: 2007
    arxiv: null
    doi: "10.1016/j.jvcir.2007.01.005"
  - title: "Elastically deformable models"
    url: "https://doi.org/10.1145/37401.37427"
    year: 1987
    arxiv: null
    doi: "10.1145/37401.37427"
  - title: "Large steps in cloth simulation"
    url: "https://doi.org/10.1145/280814.280821"
    year: 1998
    arxiv: null
    doi: "10.1145/280814.280821"
  - title: "Algebraic multigrid by smoothed aggregation for second and fourth order elliptic problems"
    url: "https://doi.org/10.1007/bf02238511"
    year: 1996
    arxiv: null
    doi: "10.1007/bf02238511"
  - title: "Projective dynamics"
    url: "https://doi.org/10.1145/2601097.2601116"
    year: 2014
    arxiv: null
    doi: "10.1145/2601097.2601116"
  - title: "A review of algebraic multigrid"
    url: "https://doi.org/10.1016/s0377-0427(00)00516-1"
    year: 2001
    arxiv: null
    doi: "10.1016/s0377-0427(00)00516-1"
  - title: "XPBD"
    url: "https://doi.org/10.1145/2994258.2994272"
    year: 2016
    arxiv: null
    doi: "10.1145/2994258.2994272"
  - title: "Vertex Block Descent"
    url: "https://doi.org/10.1145/3658179"
    year: 2024
    arxiv: null
    doi: "10.1145/3658179"
  - title: "A Multi‐layer Solver for XPBD"
    url: "https://doi.org/10.1111/cgf.15186"
    year: 2024
    arxiv: null
    doi: "10.1111/cgf.15186"
  - title: "Position-Based Nonlinear Gauss-Seidel for Quasistatic Hyperelasticity"
    url: "https://doi.org/10.1145/3658154"
    year: 2024
    arxiv: null
    doi: "10.1145/3658154"
  - title: "MiNNIE: a Mixed Multigrid Method for Real-time Simulation of Nonlinear Near-Incompressible Elastics"
    url: "https://doi.org/10.1145/3687758"
    year: 2024
    arxiv: null
    doi: "10.1145/3687758"
  - title: "AMGCL —A C++ library for efficient solution of large sparse linear systems"
    url: "https://doi.org/10.1016/j.simpa.2020.100037"
    year: 2020
    arxiv: null
    doi: "10.1016/j.simpa.2020.100037"
see:
  - "363-position-based-dynamics"
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
