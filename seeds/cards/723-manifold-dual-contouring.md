---
title: Manifold Dual Contouring
authors:
- Scott Schaefer
- Tao Ju
- Joe Warren
year: 2007
venue: IEEE TVCG
arxiv: null
doi: 10.1109/TVCG.2007.1064
source: https://doi.org/10.1109/TVCG.2007.1064
topics:
- isosurface
- voxels
seed_rank: 723
seed_batch: lineage-shallow-2026-08-13
reviewed: '2026-08-13'
pool: graphics
relevance_score: 7
lineage: procedural-generation
cites:
- title: Dual Contouring of Hermite Data
  url: https://doi.org/10.1145/566570.566586
  year: 2002
  arxiv: null
  doi: 10.1145/566570.566586
  card: 491-dual-contouring-of-hermite-data
---

# Manifold Dual Contouring

## One-sentence takeaway

Manifold Dual Contouring hardens dual contouring for watertight meshes — living geometry child of 2002 DC.

## Why it matters here

Voxel/RTS terraforming meshes still lean on DC-family extraction.

## Key ideas

- Enforces manifold output vs classical DC cracks.
- Hermite data still the input.
- Pairs with macro PCG (WFC/L-systems) at isosurface scale.
- Industrial voxel engines cite this family.

## Caveats

- Geometry extraction is not WFC; shared lineage is organizational for shallow pass.
- QEF numerics remain fiddly.

## Links

- DOI: [10.1109/TVCG.2007.1064](https://doi.org/10.1109/TVCG.2007.1064)
- URL: https://doi.org/10.1109/TVCG.2007.1064
