---
title: "Vertex Block Descent"
authors: ["Anka He Chen", "Ziheng Liu", "Yin Yang", "Cem Yuksel"]
year: 2024
venue: "ACM TOG / SIGGRAPH 2024"
arxiv: "2403.06321"
doi: "10.1145/3658179"
source: "https://arxiv.org/abs/2403.06321"
topics: [ecs-data-oriented-simulation, vulkan-realtime-rendering]
seed_rank: 1131
seed_batch: "craft-2026-08-21"
reviewed: "2026-08-21"
pool: "engines"
relevance_score: 10
lineage: ecs-data-oriented-simulation
cites:
  - title: "XPBD: Position-Based Simulation of Compliant Constrained Dynamics"
    url: "https://doi.org/10.1145/2994258.2994272"
    year: 2016
    arxiv: null
    doi: "10.1145/2994258.2994272"
  - title: "Position Based Dynamics"
    url: "https://doi.org/10.1016/j.jvcir.2007.01.005"
    year: 2007
    arxiv: null
    doi: "10.1016/j.jvcir.2007.01.005"
  - title: "A Chebyshev Semi-Iterative Approach for Accelerating Projective and Position-Based Dynamics"
    url: "https://doi.org/10.1145/2816795.2818063"
    year: 2015
    arxiv: null
    doi: "10.1145/2816795.2818063"
  - title: "Periodic Anderson Acceleration for GPU-based Elastic Body Simulation"
    url: "https://doi.org/10.1145/3819834"
    year: 2026
    arxiv: null
    doi: "10.1145/3819834"
see:
  - "264-xpbd-position-based-simulation-of-compliant-constrained-dyna"
  - "287-position-based-dynamics"
  - "215-mgpbd-a-multigrid-accelerated-global-xpbd-solver"
---

# Vertex Block Descent

## One-sentence takeaway

Solve variational implicit Euler by Gauss–Seidel on *vertices* (3×3 Newton blocks, mesh coloring), not constraints: unconditionally stable, iteration-budgeted, and actually converges to backward Euler — unlike XPBD.

## Why it matters here

GRID COMMAND / Anoptic need a real-time deformables path (props, cables, goo, stacked crates) that does not fight the job system. Library already has PBD (287), XPBD (264), and MG-PBD (215). VBD is the primal sibling that fixes XPBD's two ship-stoppers: iteration/h-dependent stiffness and collapse under high mass ratios. Color the primal graph (≈8 colors on tets vs dozens on the dual), one 3×3 solve per vertex, optional Chebyshev with collision vertices skipped. HPG 2026 Periodic Anderson Acceleration (PAA) is the follow-up — fused GPU kernel, <5% overhead, cite do not remint.

## Key ideas

- Local energy \(G_i\) on vertex \(i\) (inertia + incident force elements); a descent in \(G_i\) is a descent in global \(G\).
- Analytic 3×3 Newton step; skip the vertex if \(\lvert\det H_i\rvert\le\varepsilon\); line search optional and usually not worth 40%.
- Adaptive initialization blends inertia vs inertia+gravity per-vertex from last-step acceleration — rest-in-contact does not get a free-fall guess.
- Parallelism: precolor material, auxiliary position buffer so dynamic collisions become mixed Jacobi/GS without a recolor.
- CUDA impl uses block-per-vertex, threads-over-incident-elements; ~10× vs one-thread-per-vertex in their tests.

## Caveats

- SIGGRAPH 2024 TOG 43(4) article 116. arXiv 2403.06321. Their GPU path is CUDA; port the 3×3 + coloring to Anoptic compute, do not take the CUDA kernels as a RHI.
- Slow information travel on high-res stiff meshes; not a substitute for a global Newton on those.
- Collision is penalty/penetration, not IPC-feasible; PAA (doi 10.1145/3819834) accelerates residual, does not change that.

## Links

- arXiv: [2403.06321](https://arxiv.org/abs/2403.06321)
- DOI: [10.1145/3658179](https://doi.org/10.1145/3658179)
- Author PDF: https://www.cemyuksel.com/research/papers/vbd-siggraph2024.pdf
- PAA (cite): https://doi.org/10.1145/3819834
