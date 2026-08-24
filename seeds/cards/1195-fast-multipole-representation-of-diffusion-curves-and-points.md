---
title: "Fast Multipole Representation of Diffusion Curves and Points"
authors:
  - "Timothy Sun"
  - "Papoj Thamjaroenporn"
  - "Changxi Zheng"
year: 2014
venue: "ACM Transactions on Graphics (SIGGRAPH)"
arxiv: null
doi: "10.1145/2601097.2601187"
source: "https://doi.org/10.1145/2601097.2601187"
topics:
  - "fmm"
  - "diffusion-curves"
  - "fast-gauss"
  - "vector-graphics"
seed_rank: 1195
seed_batch: "fmm-leftovers-2026-08-24"
reviewed: "2026-08-24"
pool: "graphics"
relevance_score: 10
lineage: fast-multipole
cites:
  - title: "Diffusion Curves: A Vector Representation for Smooth-Shaded Images"
    url: "https://doi.org/10.1145/1360612.1360691"
    year: 2008
    arxiv: null
    doi: "10.1145/1360612.1360691"
  - title: "The Fast Gauss Transform"
    url: "https://doi.org/10.1137/0914081"
    year: 1991
    arxiv: null
    doi: "10.1137/0914081"
  - title: "A Fast Algorithm for Particle Simulations"
    url: "https://doi.org/10.1016/0021-9991(87)90140-9"
    year: 1987
    arxiv: null
    doi: "10.1016/0021-9991(87)90140-9"
  - title: "An Adaptive Fast-Multipole-Accelerated Hybrid Boundary Integral Equation Method for Accurate Diffusion Curves"
    url: "https://arxiv.org/abs/2311.14312"
    year: 2023
    arxiv: "2311.14312"
    doi: "10.1145/3618374"
see:
  - "1194-diffusion-curves-a-vector-representation-for-smooth-shaded-imag"
  - "1179-the-fast-gauss-transform"
  - "1166-a-fast-algorithm-for-particle-simulations"
  - "1196-an-adaptive-fast-multipole-accelerated-hybrid-boundary-integral"
---

# Fast Multipole Representation of Diffusion Curves and Points

## One-sentence takeaway

First real graphics FMM: a fast-multipole representation of diffusion-curve images — lattice of local expansions + near-curve boundary integrals — so per-pixel color is nearly constant-time after precomputation, including Fast-Gauss 'diffusion points'.

## Problem

Orzan 2008 (1194) and Jeschke-style multigrid lock you to a pixel grid. BEM follow-ups (Sun 2012 textures, Ilbery 2013 biharmonic) still could not rasterize or texture-map millions of curves in real time. Random-access evaluation of a harmonic image was the missing data structure.

## Design

Uniform lattice on the image plane. Color in a cell = precomputed local (Taylor) expansion at the cell center plus a boundary integral over curves in the 3×3 neighborhood. Far curves are absorbed into the expansion via 2D complex-log multipoles (Greengard–Rokhlin). Gaussian RBFs ('diffusion points') ride Greengard–Strain Fast Gauss (1179). Editing — Poisson cloning, masked compose — manipulates expansion coefficients without a re-solve. After precomputation, one pixel is O(1) except where many curves meet.

## Evidence

ACM Trans. Graph. 33(4), SIGGRAPH 2014, DOI 10.1145/2601097.2601187. Project: http://www.cs.columbia.edu/cg/fmr/ with author PDF. Joint first authors Sun and Thamjaroenporn. Rejected last cycle as 'graphics application of FMM'; the user asked it back.

## Limitations

Uniform lattice / quadtree — Bang 2023 (1196) replaces this with a non-uniform tree and a hybrid BEM/BIEM solve. Antialiasing is supersampling (9×); zoomed-out rasterization can span many cells. 2D Laplace, not 3D GI.

## Implications for Broadside

This is the FMM Anoptic would steal for harmonic vector fills, not Gumerov-on-a-GPU n-body. Pair with Orzan for the primitive and FGT 1179 for the Gaussians. Lightcuts 1042 stays the many-lights cousin, not this.

## Bottom line

Mint Sun–Thamjaroenporn–Zheng 2014. The leftover the last ingest refused.

## Links

- DOI: [10.1145/2601097.2601187](https://doi.org/10.1145/2601097.2601187)
- Project: http://www.cs.columbia.edu/cg/fmr/
- PDF: http://www.cs.columbia.edu/cg/fmr/fmdci.pdf
