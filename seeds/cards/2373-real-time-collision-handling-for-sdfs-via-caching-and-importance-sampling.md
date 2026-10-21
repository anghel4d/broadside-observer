---
title: "Real-Time Collision Handling for Signed Distance Fields via Caching and Importance Sampling"
authors:
  - "Chris Giles"
  - "Sheldon Andrews"
year: 2026
venue: "Pacific Graphics 2026 (Conference Papers, Eurographics)"
arxiv: null
doi: "10.2312/pg.20261059"
source: "https://savant117.github.io/sdf-dcd-demo/"
topics:
  - "collision-detection"
  - "signed-distance-fields"
  - "rigid-body-physics"
  - "contact-manifolds"
  - "gpu"
seed_rank: 2373
seed_batch: "craft-2026-10-21"
reviewed: "2026-10-21"
pool: "engines"
relevance_score: 8
lineage: distance-fields
cites:
  - title: "Real-Time Collision Handling for Signed Distance Fields via Caching and Importance Sampling"
    url: "https://doi.org/10.2312/pg.20261059"
    year: 2026
    arxiv: null
    doi: "10.2312/pg.20261059"
  - title: "Local Optimization for Robust Signed Distance Field Collision"
    url: "https://doi.org/10.1145/3384538"
    year: 2020
    arxiv: null
    doi: "10.1145/3384538"
  - title: "Real-time collision detection between general SDFs"
    url: "https://doi.org/10.1016/j.cagd.2024.102305"
    year: 2024
    arxiv: null
    doi: "10.1016/j.cagd.2024.102305"
  - title: "Augmented Vertex Block Descent"
    url: "https://doi.org/10.1145/3731195"
    year: 2025
    arxiv: null
    doi: "10.1145/3731195"
---

# Real-Time Collision Handling for Signed Distance Fields via Caching and Importance Sampling

## One-sentence takeaway

Giles and Andrews treat SDF–SDF contact as minimizing a smoothed max(φ_A, φ_B) plus a repulsion term, starting each step from a handful of seeds: points cached from the last step and moved with the bodies, plus one or two random high-curvature surface points. A derivative-free Nelder–Mead search then finds a sparse, stable contact manifold, fast enough for thousands of non-convex rigid bodies (16,000 cylinders in 2.2 ms of collision time per step on a GPU).

## Why it matters here

RTS debris, destructible props and unit-on-terrain contact need non-convex collision without hand-built convex decompositions. SDFs are already in the graphics stack (text, GI and procedural shapes), so one representation can serve rendering and physics. The method costs a fixed number of SDF queries per body pair (n_cache = 4, n_rand = 1 by default), which makes the cost predictable. It works with analytic, voxel and distorted fields alike, and it comes as a small, readable C++ reference with a WebAssembly demo. That makes it a cheap experiment for the engine's physics layer.

## Key ideas

- **Objective.** g(x) = (φ_A + φ_B + √((φ_A − φ_B)² + ε))/2 − α Σ‖x − x_i‖. The square-root softmax smooths the kink in max(φ_A, φ_B), and the repulsion pushes each new point away from contacts already found, so the manifold spreads over the whole contact region instead of piling up at the deepest point. Depth and normal come from whichever field penetrates more deeply.
- **Temporal cache.** Each pair keeps its best n_cache points, moves them by the average velocity of the two bodies, and uses them as warm starts. Points that converge to the same place are merged, and the survivors are sorted by g, which gives the manifold a gradual refinement from step to step and stops chatter.
- **Curvature seeds.** High-curvature surface points (|Δφ| > κ, from finite differences of the gradient) are precomputed per shape, and random seeds are drawn from the ones inside the overlap of the two bounding boxes. This finds new contact regions and greatly reduces penetration and jitter compared with uniform sampling.
- **Optimizer choice.** Nelder–Mead is the most robust on non-convex shapes and on distorted (non-Eikonal) fields, the ellipsoid method is fastest on convex overlaps, and SGD is slowest and stalls in local minima. On box and gear stacks the method stays quick where SAT and GJK+EPA slow down on fragmented convex decompositions (0.1 ms for the gear stack).
- **Scale.** On an RTX 4090 with an AVBD solver: 583 cows on spikes in 0.7 ms, a Colosseum of 8,819 bodies in 0.4–0.5 ms, and 16,000 horses (voxel SDFs) in about 20 ms of collision time per 16 ms step. The cost grows linearly with the sample budget.

## Caveats

It finds discrete contacts at each step, with no continuous collision, so fast thin objects can still tunnel. The parameters (κ = 4, ε, α, τ, and 100³ voxel grids) were tuned for unit-normalized shapes. The voxel-SDF horses miss real time at 16k bodies, and the authors note that SDF query cost becomes the bottleneck for expensive fields. Stability evidence comes from kinetic-energy traces and penetration tests on chosen scenes, and the CPU experiments use a separate sequential-impulse solver from the GPU AVBD path. The baselines are Liu et al.'s hierarchical SDF method, SAT and GJK+EPA; there's no comparison with Macklin et al.'s local-optimization SDF collision.

## Links

- Project page with live demo: https://savant117.github.io/sdf-dcd-demo/
- Paper PDF: https://savant117.github.io/sdf-dcd-demo/paper.pdf
- Eurographics Digital Library: https://diglib.eg.org/items/cc739070-0ba8-43d9-895e-7e1ee00a1fb7
- DOI: https://doi.org/10.2312/pg.20261059
- Code: https://github.com/savant117/sdf-dcd-demo
