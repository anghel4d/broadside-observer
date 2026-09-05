---
title: "Feature Sensitive Surface Extraction from Volume Data"
authors:
  - "Leif P. Kobbelt"
  - "Mario Botsch"
  - "Ulrich Schwanecke"
  - "Hans-Peter Seidel"
year: 2001
venue: "SIGGRAPH 2001"
arxiv: null
doi: "10.1145/383259.383265"
source: "https://www.graphics.rwth-aachen.de/media/papers/feature1.pdf"
topics:
  - isosurface
  - extended-marching-cubes
  - feature-sensitive
  - distance-fields
seed_rank: 1604
seed_batch: "archive-2026-09-06"
reviewed: "2026-09-06"
pool: "graphics"
relevance_score: 9
lineage: isosurface-extraction
cites:
  - title: "Marching Cubes: A High Resolution 3D Surface Construction Algorithm"
    url: "https://doi.org/10.1145/37402.37422"
    year: 1987
    arxiv: null
    doi: "10.1145/37402.37422"
  - title: "Dual Contouring of Hermite Data"
    url: "https://doi.org/10.1145/566570.566586"
    year: 2002
    arxiv: null
    doi: "10.1145/566570.566586"
see:
  - "1498-marching-cubes-a-high-resolution-3d-surface-construction-algorithm"
  - "408-dual-contouring-of-hermite-data"
  - "1570-constrained-elastic-surface-nets"
  - "1569-poisson-surface-reconstruction"
---

# Feature Sensitive Surface Extraction from Volume Data

## One-sentence takeaway

Extended Marching Cubes detects cells that contain sharp edges/corners, inserts feature samples from the directed distance field + gradient, and (with a directed-distance volume) kills the aliasing MC shows on CAD-like isosurfaces — while keeping MC’s per-cell structure.

## Why it matters here

Anoptic’s isosurface shelf has MC (1498), Dual Contouring (408), Poisson (1569), CESN (1570), and now Transvoxel LOD (1600). Kobbelt EMC is the sharp-feature MC upgrade: when you still want primal MC topology but need edges that do not terrace, this is the 2001 answer — and the conceptual bridge to Hermite/dual methods that store exact intersection gradients.

## Key ideas

- **Directed distance field.** Store distances along x/y/z, not one scalar per grid point — surface samples are more accurate than tri-linear interpolation of scalars.
- **Feature detection.** Per cell, use distance + gradient to decide whether a sharp edge or corner passes through; place additional vertices on the feature.
- **Extended Marching Cubes.** Same per-cell algorithmic skeleton as MC; improved patches join into a global mesh with normals that converge to the true surface (fandisk demo on 65³).
- **Composable gains.** Directed distances alone help; EMC alone helps; both together are best (Fig. 1 of the paper).
- **Applications shown.** CSG, milling simulation, point-cloud reconstruction, remeshing of polygonal models.

## Caveats

- Still primal MC connectivity — Dual Contouring (408) / Hermite data are the later sharp-feature heavyweights; EMC is the MC-preserving path.
- Uniform grids only in the paper; adaptive octrees are later work.
- Do not remint 1498/408/1569/1570; this card is the feature-sensitive MC extension those leave open.

## Links

- Open PDF (RWTH): https://www.graphics.rwth-aachen.de/media/papers/feature1.pdf
- DOI: https://doi.org/10.1145/383259.383265
