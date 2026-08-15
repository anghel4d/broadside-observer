---
title: "ComFree-Sim: A GPU-Parallelized Analytical Contact Physics Engine for Scalable Contact-Rich Robotics Simulation and Control"
authors:
  - "Chetan Borse"
  - "Zhixian Xie"
  - "Wei-Cheng Huang"
  - "Wanxin Jin"
year: 2026
venue: "arXiv:cs.RO"
arxiv: "2603.12185"
doi: null
source: "https://arxiv.org/abs/2603.12185"
topics:
  - physics
seed_rank: 311
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "realtime"
relevance_score: 8
cites:
  - title: "MGPBD: A Multigrid Accelerated Global XPBD Solver"
    url: "https://arxiv.org/abs/2505.13390"
    year: 2025
    arxiv: "2505.13390"
    doi: "10.1145/3721238.3730720"
see:
  - "215-mgpbd-a-multigrid-accelerated-global-xpbd-solver"
---

# ComFree-Sim: A GPU-Parallelized Analytical Contact Physics Engine for Scalable Contact-Rich Robotics Simulation and Control

## One-sentence takeaway

ComFree-Sim replaces per-step complementarity solves with a closed-form impedance prediction–correction in the dual Coulomb cone, so contact impulses decouple across pairs and map to GPU kernels with near-linear scaling.

## Why it matters here

Broadside and Anoptic physics need contact that stays real-time as density grows; this is a complementarity-free alternative to MuJoCo-style iterative solvers that still exposes a MuJoCo-compatible Warp backend.

## Key ideas

- Mainstream engines pay superlinear cost because non-penetration and Coulomb friction are complementarity or constrained-optimization problems solved iteratively each step.
- Impulses are computed in closed form in the dual friction cone; pairs and cone facets are independent, so the update is a GPU kernel rather than a global LCP.
- A unified 6D contact model adds torsional and rolling friction on top of the usual tangential cone, plus a dual-cone impedance heuristic for stability.
- Implemented in NVIDIA Warp and dropped in as an alternative to MuJoCo Warp (MJWarp); they report 2–3× throughput in dense contact with comparable fidelity.
- Deployed in real-time MPC on a LEAP multi-fingered hand and in dynamics-aware motion retargeting, where lower latency raised closed-loop success.

## Caveats

## Links

- arXiv: [2603.12185](https://arxiv.org/abs/2603.12185)
- URL: https://arxiv.org/abs/2603.12185
