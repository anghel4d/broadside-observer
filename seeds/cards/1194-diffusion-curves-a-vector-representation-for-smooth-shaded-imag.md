---
title: "Diffusion Curves: A Vector Representation for Smooth-Shaded Images"
authors:
  - "Alexandrina Orzan"
  - "Adrien Bousseau"
  - "Holger Winnemöller"
  - "Pascal Barla"
  - "Joëlle Thollot"
  - "David Salesin"
year: 2008
venue: "ACM Transactions on Graphics (SIGGRAPH)"
arxiv: null
doi: "10.1145/1360612.1360691"
source: "https://doi.org/10.1145/1360612.1360691"
topics:
  - "diffusion-curves"
  - "vector-graphics"
  - "poisson"
  - "orzan"
seed_rank: 1194
seed_batch: "fmm-leftovers-2026-08-24"
reviewed: "2026-08-24"
pool: "graphics"
relevance_score: 10
lineage: fast-multipole
cites:
  - title: "Fast Multipole Representation of Diffusion Curves and Points"
    url: "https://doi.org/10.1145/2601097.2601187"
    year: 2014
    arxiv: null
    doi: "10.1145/2601097.2601187"
  - title: "An Adaptive Fast-Multipole-Accelerated Hybrid Boundary Integral Equation Method for Accurate Diffusion Curves"
    url: "https://arxiv.org/abs/2311.14312"
    year: 2023
    arxiv: "2311.14312"
    doi: "10.1145/3618374"
see:
  - "1195-fast-multipole-representation-of-diffusion-curves-and-points"
  - "1196-an-adaptive-fast-multipole-accelerated-hybrid-boundary-integral"
  - "1179-the-fast-gauss-transform"
---

# Diffusion Curves: A Vector Representation for Smooth-Shaded Images

## One-sentence takeaway

THE diffusion-curve paper: Bézier curves with left/right colors and a blur, solved as a Poisson / Laplace problem on the GPU — the source method Sun 2014 and Bang 2023 accelerate with FMM.

## Problem

SVG-style vector art had lines, linear/radial ramps, and gradient meshes. Gradient meshes are overcomplete lattices that fight the artist. Nobody had a curve-native primitive that partitions the plane, stores color on each side, and diffuses a smooth shade across the interior.

## Design

A diffusion curve is a geometric curve plus left/right color and a blur (sharpness) channel. The image is the solution of a Poisson equation whose gradient constraints live on those curves. GPU rasterize color sources → diffuse (multigrid / Jacobi-style) → reblur with the blur map. Freehand drawing, tracing, and an automatic bitmap-to-curve conversion. Real-time on 2008 GPUs. Not FMM — finite differences on a pixel grid.

## Evidence

ACM Trans. Graph. 27(3), SIGGRAPH 2008, DOI 10.1145/1360612.1360691 (ACM short title is just 'Diffusion curves'). Author PDF from ARTIS/Maverick INRIA. Not in the catalog (INDEX + seen.json miss). Jeschke 2009 (GPU Laplacian) and Ilbery 2013 (biharmonic BEM) are the FD / BEM follow-ups — cited from Sun/Bang, not reminted (not FMM).

## Limitations

Rasterizes boundaries onto a fixed pixel grid: zoom or thin features alias, and the solve is resolution-dependent. Finch 2011 / Jacobson 2012 take the biharmonic / FEM route; still not FMM. This card exists so the two FMM accelerations have their prior art.

## Implications for Broadside

If Anoptic wants vector GI / harmonic interpolation / toon fills, this is the primitive. The FMM cards (1195, 1196) are how you evaluate it at infinite resolution without a pixel grid. Do not remint every diffusion-curve extension.

## Bottom line

Mint Orzan 2008 as the source method. Sun and Bang are the FMM accelerations.

## Links

- DOI: [10.1145/1360612.1360691](https://doi.org/10.1145/1360612.1360691)
- ARTIS: https://artis.inrialpes.fr/Publications/2008/OBWBTS08/
- Maverick: https://maverick.inria.fr/Publications/2008/OBWBTS08/
