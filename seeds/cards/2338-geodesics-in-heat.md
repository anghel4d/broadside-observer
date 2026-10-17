---
title: "Geodesics in Heat"
authors:
  - "Keenan Crane"
  - "Clarisse Weischedel"
  - "Max Wardetzky"
year: 2013
venue: "ACM Transactions on Graphics 32(5), Article 152"
arxiv: "1204.6216"
doi: "10.1145/2516971.2516977"
source: "https://arxiv.org/abs/1204.6216"
topics:
  - geodesic-distance
  - discrete-differential-geometry
  - pathfinding-fields
  - geometry-processing
seed_rank: 2338
seed_batch: "archive-2026-10-18"
reviewed: "2026-10-18"
pool: "graphics"
relevance_score: 9
lineage: distance-fields
see:
  - 1028-discrete-exterior-calculus
  - 2281-distance-transforms-of-sampled-functions
  - 1433-crowd-pathfinding-and-steering-using-flow-field-tiles
  - 357-continuum-crowds
cites:
  - title: "Geodesics in Heat"
    url: "https://arxiv.org/abs/1204.6216"
    year: 2013
    arxiv: "1204.6216"
    doi: "10.1145/2516971.2516977"
---

# Geodesics in Heat

## One-sentence takeaway

Crane, Weischedel and Wardetzky compute geodesic distance to any source set by diffusing heat for a short time (one backward-Euler solve), normalizing the negative gradient of the result into a unit vector field, and solving a Poisson equation for the function whose gradient best matches it — two sparse linear solves that can be prefactored once and reused, giving distance updates an order of magnitude faster than fast marching or exact polyhedral methods.

## Why it matters here

GRID COMMAND's flow fields (1433, 357) and influence maps are distance fields recomputed whenever goals move, and the heat method makes that a pair of back-substitutions against a fixed factorization of the map's Laplacian — on grids, navmeshes, terrain meshes or point clouds alike. Its time-step and boundary-condition knobs give designer-tunable paths (wall-hugging versus wall-avoiding, straight versus smoother), and it reuses the cotan/DEC machinery already in the library (1028).

## Key ideas

- **Algorithm.** I: integrate heat flow u̇ = Δu for a fixed time t from the source (a Dirac at a point, or spread along a curve or boundary); II: X = −∇u/|∇u|; III: solve Δφ = ∇·X and shift so the minimum is zero.
- **Why it works.** Varadhan's formula φ = lim_{t→0} √(−4t log k_t) links heat to distance but is fragile to errors in the kernel's magnitude; the heat method uses only the gradient direction, which is robust, and the two steps are standard elliptic problems.
- **Discretizations.** Triangle meshes use the cotan Laplacian and one implicit step (id − tΔ)u = u₀; the paper also gives polygonal-mesh and point-cloud versions and notes cost depends on the intrinsic dimension, not the embedding grid.
- **Time step.** t = m h² with h the mean edge spacing; m = 1 recovers near-optimal accuracy across their meshes (mean error under 1% in most cases), larger m gives a smoothed distance.
- **Boundaries and paths.** Neumann conditions make geodesics hug boundaries, Dirichlet makes them avoid them, and their average mimics a domain without boundary; small t gives straight-line geodesics, large t more natural trajectories. Timings in ANSI C on a 2.4 GHz Core 2 Duo show updates for new sources consistently 10× or more faster than fast marching and the exact MMP-style algorithm.

## Caveats

The result is an approximation that converges under refinement (linearly in their tests): fast marching tends to have smaller maximum error while the heat method wins on mean error, sharp cusps get slightly smoothed, and metric properties (symmetry, triangle inequality) hold only approximately. Prefactorization assumes a fixed domain: if obstacles change the mesh or weights, the factorization must be redone. Weighted (anisotropic or cost-field) distances are only suggested, not developed.

## Links

- Paper (arXiv): https://arxiv.org/abs/1204.6216
- Paper (arXiv PDF): https://arxiv.org/pdf/1204.6216
- Paper (DOI): https://doi.org/10.1145/2516971.2516977
