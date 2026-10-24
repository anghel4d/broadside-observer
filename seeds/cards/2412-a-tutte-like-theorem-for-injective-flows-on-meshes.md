---
title: "A Tutte-Like Theorem for Injective Flows on Meshes"
authors:
  - "Darsh Kaushik"
  - "Noam Aigerman"
year: 2026
venue: "arXiv preprint (cs.GR)"
arxiv: "2610.30149"
doi: null
source: "https://arxiv.org/abs/2610.30149"
topics:
  - "procedural-content-codegen"
seed_rank: 2412
seed_batch: "frontier-2026-10-24"
reviewed: "2026-10-24"
pool: "graphics"
relevance_score: 7
lineage: geometry-processing
cites:
  - title: "A Tutte-Like Theorem for Injective Flows on Meshes"
    url: "https://arxiv.org/abs/2610.30149"
    year: 2026
    arxiv: "2610.30149"
    doi: null
---

# A Tutte-Like Theorem for Injective Flows on Meshes

## One-sentence takeaway

Rotating the gradient of a discrete harmonic function on a triangle mesh by 90 degrees gives a vector field whose flow is guaranteed injective, the flow analogue of Tutte's embedding theorem, so a bijective advection or deformation of a mesh comes from one sparse linear solve and stays differentiable for optimization.

## Why it matters here

Injectivity is the property that keeps procedural deformation, texture advection and flow-based editing from folding over itself, and it is usually only guaranteed in the smooth setting. A discrete guarantee that costs one sparse solve fits the engine side of the stack (procedural content and mesh tools), and differentiability means it can sit inside an optimizer that fits sparse directional constraints.

## Key ideas

- **Construction.** Solve a harmonic function on the mesh, take its per-triangle gradient, rotate it, and trace the resulting piecewise-constant field; the theorem proves the traced flow is injective.
- **Exact tracing.** Within each triangle the flow is evaluated in closed form and only needs evaluation at edge intersections, so it has no accumulated integration error and forward and backward paths agree.
- **Weights.** Works with positive weights such as Tutte's uniform weights and Mean Value Coordinates.
- **Optimization.** Implemented in PyTorch with automatic differentiation and used to fit fields that satisfy sparse directional constraints.

## Caveats

Limited to specific topologies (disk-like domains) and boundary conditions, like Tutte's embedding itself, and the authors list wider settings as future work. Not evaluated inside a real-time engine or on engine-scale content pipelines.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.30149
- PDF: https://arxiv.org/pdf/2610.30149
