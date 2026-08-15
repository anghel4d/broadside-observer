---
title: "Manifold Dual Contouring"
authors:
  - "Scott Schaefer"
  - "Tao Ju"
  - "Joe Warren"
year: 2007
venue: "IEEE TVCG"
arxiv: null
doi: "10.1109/TVCG.2007.1012"
source: "https://doi.org/10.1109/TVCG.2007.1012"
topics:
  - isosurface
  - voxels
seed_rank: 473
seed_batch: "lineage-shallow-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 7
lineage: procedural-generation
cites:
  - title: "Dual Contouring of Hermite Data"
    url: "https://doi.org/10.1145/566570.566586"
    year: 2002
    doi: "10.1145/566570.566586"
  - title: "Marching Cubes: A High Resolution 3D Surface Construction Algorithm"
    url: "https://doi.org/10.1145/37401.37422"
    year: 1987
    doi: "10.1145/37401.37422"
see:
  - "408-dual-contouring-of-hermite-data"
---

# Manifold Dual Contouring

## One-sentence takeaway

Schaefer, Ju, and Warren repair dual contouring so the extracted mesh is guaranteed manifold: they restrict QEF minimizers to cell interiors and insert extra vertices on faces where the original DC topology would pinch or tear.

## Why it matters here

Voxel/RTS terraforming still extracts Hermite isosurfaces; manifold DC is the version that does not hand cracked non-manifold junk to collision and LOD.

## Key ideas

- Classical dual contouring places one vertex per occupied cell by minimizing a quadratic error function on Hermite (point, normal) data, then connects vertices across shared faces — sharp features survive, but the mesh need not be manifold.
- Manifold DC detects topological violations (multiple intersections on a face, vertices that would identify distinct sheets) and splits or clamps the QEF solution.
- Input remains the same Hermite grid as Ju et al. 2002; output is watertight and suitable for further mesh processing.
- Industrial voxel engines cite this family whenever they need both sharp CAD-like edges and a mesh that physics can consume.

## Caveats

## Links

- DOI: [10.1109/TVCG.2007.1012](https://doi.org/10.1109/TVCG.2007.1012)
