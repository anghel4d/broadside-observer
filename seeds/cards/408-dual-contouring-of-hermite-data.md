---
title: "Dual Contouring of Hermite Data"
authors:
  - "Tao Ju"
  - "Frank Losasso"
  - "Scott Schaefer"
  - "Joe Warren"
year: 2002
venue: "SIGGRAPH / ACM TOG"
arxiv: null
doi: "10.1145/566570.566586"
source: "https://doi.org/10.1145/566570.566586"
topics:
  - voxels
  - meshing
seed_rank: 408
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 7
lineage: procedural-generation
cites:
  - title: "The Algorithmic Beauty of Plants"
    url: "http://algorithmicbotany.org/papers/abop/abop.pdf"
    year: 1990
    arxiv: null
    doi: null
  - title: "Procedural Content Generation in Games"
    url: "https://doi.org/10.1007/978-3-319-42716-4"
    year: 2016
    arxiv: null
    doi: "10.1007/978-3-319-42716-4"
  - title: "Manifold Dual Contouring"
    url: "https://doi.org/10.1109/TVCG.2007.1064"
    year: 2007
    arxiv: null
    doi: "10.1109/TVCG.2007.1064"
see:
  - "415-the-algorithmic-beauty-of-plants-l-systems"
  - "102-procedural-content-generation-in-games"
  - "473-manifold-dual-contouring"
---

# Dual Contouring of Hermite Data

## One-sentence takeaway

Place one vertex per intersecting cell by minimizing a quadratic error against Hermite (intersection + normal) samples, then emit a quad for every sign-changing edge — sharp features fall out of the QEF without a feature detector.

## Why it matters here

Anoptic voxel / SDF terrain wants creases and adaptive LODs, not Marching Cubes’ rounded edges. Dual Contouring is the extract-to-mesh contract for GRID COMMAND caves and CSG brushes.

## Key ideas

- Hermite data per grid edge: exact crossing pᵢ and surface normal nᵢ.
- Cell vertex is the QEF minimizer E(x) = Σ [nᵢ · (x − pᵢ)]², solved with a stable QR / Givens form rather than the squared normal equations.
- Connectivity is dual: four cells around a sign-changing edge become a quad (SurfaceNets topology + EMC-style placement).
- Works on unrestricted octrees; interior nodes accumulate QEFs so coarse cells replace fine ones without a separate crack-patch pass.

## Caveats

## Links

- DOI: [10.1145/566570.566586](https://doi.org/10.1145/566570.566586)
- Author PDF: https://people.eecs.berkeley.edu/~jrs/meshpapers/JuLosassoSchaeferWarren.pdf
- Follow-up TR (“The Secret Sauce”): https://www.cs.rice.edu/~jwarren/papers/techreport02408.pdf
