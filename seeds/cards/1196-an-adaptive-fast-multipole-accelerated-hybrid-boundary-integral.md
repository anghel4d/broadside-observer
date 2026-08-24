---
title: "An Adaptive Fast-Multipole-Accelerated Hybrid Boundary Integral Equation Method for Accurate Diffusion Curves"
authors:
  - "Seungbae Bang"
  - "Kirill Serkh"
  - "Oded Stein"
  - "Alec Jacobson"
year: 2023
venue: "ACM Transactions on Graphics (SIGGRAPH Asia)"
arxiv: "2311.14312"
doi: "10.1145/3618374"
source: "https://arxiv.org/abs/2311.14312"
topics:
  - "fmm"
  - "diffusion-curves"
  - "boundary-integral"
  - "adaptive"
seed_rank: 1196
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
  - title: "Fast Multipole Representation of Diffusion Curves and Points"
    url: "https://doi.org/10.1145/2601097.2601187"
    year: 2014
    arxiv: null
    doi: "10.1145/2601097.2601187"
  - title: "A Fast Algorithm for Particle Simulations"
    url: "https://doi.org/10.1016/0021-9991(87)90140-9"
    year: 1987
    arxiv: null
    doi: "10.1016/0021-9991(87)90140-9"
see:
  - "1194-diffusion-curves-a-vector-representation-for-smooth-shaded-imag"
  - "1195-fast-multipole-representation-of-diffusion-curves-and-points"
  - "1166-a-fast-algorithm-for-particle-simulations"
  - "1179-the-fast-gauss-transform"
---

# An Adaptive Fast-Multipole-Accelerated Hybrid Boundary Integral Equation Method for Accurate Diffusion Curves

## One-sentence takeaway

SIGGRAPH Asia 2023: hybrid BIEM+BEM diffusion curves on a non-uniform FMM quadtree — infinite-resolution zoom, Neumann boundaries, GMRES densities — the paper that fixes Sun 2014's uniform tree.

## Problem

Sun 2014 (1195) FMM-evaluates a BEM solve on a uniform lattice. Polygonal boundary approximations either forfeit Bézier smoothness or blow the system. Orzan FD aliases at zoom. Neumann-only curves (the artist-friendly ones) and true infinite-resolution re-solves were open.

## Design

Solve a boundary integral equation by sampling the exact splines (BIEM, spectrally accurate). Interpolate that density onto a viewport-aware BEM discretization to color pixels. FMM on a non-uniform (sparse) quadtree, plus quadtree clipping of BEM segments, plus GMRES for the densities. Adaptive local re-solve on zoom so you do not refactor the whole image. Anti-aliasing by weighted integration over the same tree. Self-contained FMM writeup aimed at graphics readers (they found textbook FMM / FMMLIB2D a poor fit).

## Evidence

ACM Trans. Graph. 42(6), Article 215, December 2023 (SIGGRAPH Asia), 28 pages, DOI 10.1145/3618374. arXiv:2311.14312. Project: https://www.dgp.toronto.edu/projects/adaptive-hybrid-biem-diffusion-curves/. Author PDF at 3dvar.com. Rejected last cycle with Sun; user asked both back.

## Limitations

Still 2D Laplace / diffusion curves, not 3D GI. Hybrid solve is heavier than Sun's 'evaluate the lattice' story. Walk-on-Spheres (Sawhney–Crane 2020) is cited as a stochastic alternative that does not handle Neumann-heavy art; do not remint it here. Finch / Ilbery biharmonic extensions stay out (not FMM).

## Implications for Broadside

The current end of the graphics-FMM spine: Orzan primitive → Sun FMR → Bang adaptive hybrid. If Anoptic wants infinite-zoom harmonic fills with sparse Dirichlet, this is the steal. Zhang–Bridson 2014 PPPM fluids is not FMM — they say so; skip it.

## Bottom line

Mint Bang–Serkh–Stein–Jacobson 2023. Graphics FMM leftover, closed.

## Links

- arXiv: [2311.14312](https://arxiv.org/abs/2311.14312)
- DOI: [10.1145/3618374](https://doi.org/10.1145/3618374)
- Project: https://www.dgp.toronto.edu/projects/adaptive-hybrid-biem-diffusion-curves/
- PDF: https://3dvar.com/Bang2023An.pdf
