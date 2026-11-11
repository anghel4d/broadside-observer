---
title: "Adaptively Sampled Distance Fields: A General Representation of Shape for Computer Graphics"
authors:
  - "Sarah F. Frisken"
  - "Ronald N. Perry"
  - "Alyn P. Rockwood"
  - "Thouis R. Jones"
year: 2000
venue: "SIGGRAPH 2000, pp. 249-254"
arxiv: null
doi: "10.1145/344779.344899"
source: "https://ronaldperry.org/sig2000_ADFs_Paper.pdf"
topics:
  - "distance-fields"
  - "octrees"
  - "adaptive-sampling"
  - "text-rendering"
  - "level-of-detail"
seed_rank: 2560
seed_batch: "archive-2026-11-12"
reviewed: "2026-11-12"
pool: "graphics"
relevance_score: 8
lineage: distance-fields
cites: []
see:
  - "125-signed-distance-fields-for-text"
  - "1808-improved-corners-with-multi-channel-signed-distance-fields"
  - "1241-efficient-sparse-voxel-octrees"
---

# Adaptively Sampled Distance Fields: A General Representation of Shape for Computer Graphics

## One-sentence takeaway

ADFs store a signed distance field only as densely as the shape needs: an octree (quadtree in 2D) whose cells hold corner distances and subdivide only where trilinear (bilinear) reconstruction misses the true field by more than a tolerance, which gives one compact representation for rendering, carving, offsetting, collision and level of detail.

## Why it matters here

The library's SDF text cards all use uniform grids, which waste samples in flat regions and blur sharp corners. ADFs are the adaptive alternative, and the same group later built Saffron, the ADF type system shipped in Adobe Flash, so this is the root of production adaptive SDF text. For Anoptic it is also the bridge between glyph SDFs and the sparse octrees already used for GI: same tree, error-bounded cells, and empty space costs nothing.

## Key ideas

- **Detail-directed sampling.** Sample densely only where the distance field has fine detail; flat regions get large cells.
- **Octree with corner samples.** Each cell stores distances at its corners; a cell is subdivided only if reconstruction inside it exceeds the error tolerance, built top-down or bottom-up from a full grid.
- **Cheap reconstruction.** Trilinear interpolation inside a leaf gives distance, and its analytic gradient gives normals for shading and ray-surface intersection.
- **Many operations, one structure.** CSG carving with tools, offsetting, LOD (truncate the tree), collision tests and ray casting all work on the same tree.
- **Compactness.** In the paper's comparison table, ADF cell counts grow far more slowly than an equivalent triangle mesh as tolerance tightens (about 132K cells against about 2.1M triangles at the finest level).

## Caveats

Corner-sampled trilinear cells are still C0 across cell boundaries and round off sharp corners unless cells get very small, which is what multi-channel SDFs later addressed. Pointer-based octrees are a poor fit for modern GPU texture fetch; a GPU version needs a flattened or bricked layout. The 2D text application is only mentioned here and described in later Mitsubishi papers.

## Links

- PDF (author copy): https://ronaldperry.org/sig2000_ADFs_Paper.pdf
- MERL TR2000-15: https://www.merl.com/publications/docs/TR2000-15.pdf
- DOI: https://doi.org/10.1145/344779.344899
