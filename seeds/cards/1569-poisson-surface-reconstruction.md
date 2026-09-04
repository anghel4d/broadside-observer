---
title: "Poisson Surface Reconstruction"
authors:
  - "Michael Kazhdan"
  - "Matthew Bolitho"
  - "Hugues Hoppe"
year: 2006
venue: "Eurographics Symposium on Geometry Processing"
arxiv: null
doi: "10.2312/SGP/SGP06/061-070"
source: "https://hhoppe.com/poissonrecon.pdf"
topics:
  - voxels
  - meshing
seed_rank: 1569
seed_batch: "archive-2026-09-04"
reviewed: "2026-09-04"
pool: "graphics"
relevance_score: 10
lineage: procedural-generation
cites:
  - title: "Marching Cubes: A High Resolution 3D Surface Construction Algorithm"
    url: "https://doi.org/10.1145/37401.37422"
    year: 1987
    arxiv: null
    doi: "10.1145/37401.37422"
  - title: "Dual Contouring of Hermite Data"
    url: "https://doi.org/10.1145/566570.566586"
    year: 2002
    arxiv: null
    doi: "10.1145/566570.566586"
  - title: "Surface Reconstruction from Unorganized Points"
    url: "https://doi.org/10.1145/142920.134011"
    year: 1992
    arxiv: null
    doi: "10.1145/142920.134011"
  - title: "Reconstruction of Solid Models from Oriented Point Sets"
    url: "https://doi.org/10.2312/SGP/SGP05/073-082"
    year: 2005
    arxiv: null
    doi: "10.2312/SGP/SGP05/073-082"
see:
  - "1498-marching-cubes-a-high-resolution-3d-surface-construction-algorithm"
  - "408-dual-contouring-of-hermite-data"
---

# Poisson Surface Reconstruction

## One-sentence takeaway

Oriented points sample the gradient of a smoothed indicator; solving `Δχ = ∇·V` on an adaptive octree yields a globally consistent implicit whose isosurface (octree Marching Cubes) is the mesh — sparse, well-conditioned, and noise-resilient where RBFs are dense.

## Why it matters here

Anoptic voxel/scan meshing already has lookup-table contouring (Marching Cubes 1498) and Hermite QEF dual contouring (408). Poisson is the *indicator* step in front of those extractors: one linear system over the whole scan, no MPU-style partition-of-unity blending, no off-surface points. Kazhdan 2005 FFT is the uniform-grid cousin that needs O(r³) memory; this paper is the octree that actually scales to David’s head.

## Key ideas

- **Integral identity.** After smoothing χ_M with a filter F̃, `∇(χ_M ∗ F̃) = ∫_{∂M} F̃_p N dA`. Approximate the integral by ∑ |P_s| F̃_{s.p} s.N over oriented samples. Then invert the gradient in the least-squares sense by taking divergence: Poisson `Δχ̃ = ∇·V`.
- **Octree basis, not a dense grid.** Minimal octree with every sample in a depth-D leaf. Node function F_o is a scaled translate of F = (box filter)∗³ (piecewise quadratic, support [−1.5, 1.5]³, ≤124 same-depth overlaps). Trilinear splat of each sample onto the eight nearest depth-D nodes.
- **Multigrid CG + block Gauss–Seidel.** Project `Δχ̃` and `∇·V` onto {F_o}; L is sparse symmetric. Solve restriction L_d per depth with CG, prolong, update residual (GKS02-style). Columns of L_d can have ~125 nonzeros; overlapping-region Gauss–Seidel caps matrix memory.
- **Isovalue and extraction.** γ = mean of χ̃ at the samples (scale-invariant). Extract with octree Marching Cubes (WG92 / SFYC96 / WKE99): zero-crossings from the finest adjacent nodes; subdivide leaves with multiple crossings; project fine isocurves onto coarse faces to hide cracks.
- **Non-uniform scans.** Kernel density W_D̂ at a coarser depth; scale each sample by 1/W and set filter depth `min(D, D + log₄(W/W̄))` so sparse regions get wider Gaussians. Bunny 362k pts @ depth 9: 263 s, 310 MB, 911k tris. Dragon @ depth 10: 633 s, 699 MB, 1.52M tris. David head @ depth 11: 215.6M samples → 16.3M tris in 1.9 h / 5.2 GB.

## Caveats

- No line-of-sight / space carving: unsampled gaps (Buddha’s feet) get sheeted over; VRIP wins there. Do not remint Marching Cubes 1498, Dual Contouring 408, or Hoppe 1992 unorganized-points.
- Equivalent to Kazhdan 2005 FFT on uniform data (Appendix A); the contribution is adaptive discretization plus variable-width kernels, not a new PDE.
- Output is an MC isosurface of a smooth indicator, not a dual-contouring Hermite fit. Sharp creases are better than VRIP’s view-grown distance, but Poisson is still a smooth implicit.

## Links

- Open PDF: https://hhoppe.com/poissonrecon.pdf
- DOI: https://doi.org/10.2312/SGP/SGP06/061-070
- EG DL: https://diglib.eg.org/handle/10.2312/SGP.SGP06.061-070
