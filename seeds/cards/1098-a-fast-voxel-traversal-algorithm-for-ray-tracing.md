---
title: "A Fast Voxel Traversal Algorithm for Ray Tracing"
authors:
  - "John Amanatides"
  - "Andrew Woo"
year: 1987
venue: "Eurographics"
arxiv: null
doi: "10.2312/egtp.19871000"
source: "https://doi.org/10.2312/egtp.19871000"
topics:
  - "voxel-traversal"
  - "grid-dda"
  - "ray-tracing"
  - "ecs-data-oriented-simulation"
seed_rank: 1098
seed_batch: "archive-2026-08-20"
reviewed: "2026-08-20"
pool: "engines"
relevance_score: 9
lineage: amanatides-woo
cites:
  - title: "ARTS: Accelerated Ray-Tracing System"
    url: "https://doi.org/10.1109/MCG.1986.276715"
    year: 1986
    arxiv: null
    doi: "10.1109/MCG.1986.276715"
  - title: "Space Subdivision for Fast Ray Tracing"
    url: "https://doi.org/10.1109/MCG.1984.6429331"
    year: 1984
    arxiv: null
    doi: "10.1109/MCG.1984.6429331"
  - title: "Fast, Minimum Storage Ray-Triangle Intersection"
    url: "https://doi.org/10.1080/10867651.1997.10487468"
    year: 1997
    arxiv: null
    doi: "10.1080/10867651.1997.10487468"
  - title: "Display of Surfaces from Volume Data"
    url: "https://doi.org/10.1109/38.511"
    year: 1988
    arxiv: null
    doi: "10.1109/38.511"
see:
  - "1069-display-of-surfaces-from-volume-data"
  - "1097-fast-minimum-storage-ray-triangle-intersection"
  - "352-gigavoxels-ray-guided-streaming-for-efficient-and-detailed-v"
  - "120-voxel-cone-tracing-for-real-time-global-illumination"
---

# A Fast Voxel Traversal Algorithm for Ray Tracing

## One-sentence takeaway

3D-DDA with no preferred axis: two comparisons and one add per voxel step, and you visit every cell a ray actually enters — the grid walk under Minecraft, voxel cone tracing, and every uniform spatial hash.

## Why it matters here

Anoptic's world is a grid (GRID COMMAND tiles, voxel GI, occupancy, line-of-sight). Fujimoto's 3DDDA forced an unconditional step on one axis; Amanatides–Woo 1987 dropped the preferred axis so the inner loop is "which *tMax* is smallest" and the hit is known to lie in the *current* voxel. That is the LOS / picking / empty-space-skip kernel for a regular partition, complementary to Möller–Trumbore (1097) at the triangle leaf and to GigaVoxels / voxel cone tracing (352/120) at the sparse-octree end. Levoy (1069) is image-order volume; this is how you *walk* the volume.

## Key ideas

- Initialization: *tMaxX/Y/Z* = parametric distance to the next voxel boundary; *tDelta* = distance between subsequent boundaries on that axis; *step* = sign of the direction.
- Loop: advance the axis of the smallest *tMax*, add the matching *tDelta*. Two float compares, one add per step. No preferred axis, unlike Fujimoto.
- Intersection-in-voxel test is cheap because the parametric *t* of a hit can be compared against the current *tMax* slab.
- Mailboxing / unique-object-id to skip re-intersecting an object that spans several voxels.

## Caveats

- Uniform grids explode in sparse / unbounded worlds; octrees and BVHs won for general ray tracing. The algorithm remains the right thing on *regular* partitions (tiles, clipmap texels, voxel GI cascades).
- Floating-point *tMax* ties need a consistent tie-break or you skip a voxel (the "missing cell" bug).
- Initialization is ~33–40 FLOPs; the loop is the win only when you take many steps.

## Links

- DOI: [10.2312/egtp.19871000](https://doi.org/10.2312/egtp.19871000)
- Author PDF: [http://www.cs.yorku.ca/~amana/research/grid.pdf](http://www.cs.yorku.ca/~amana/research/grid.pdf)
- EG Digital Library: [https://diglib.eg.org/handle/10.2312/egtp.19871000](https://diglib.eg.org/items/60c72224-00f3-416d-9952-ee41e8c408da)
