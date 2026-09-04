---
title: "Constrained Elastic Surface Nets: Generating Smooth Models from Binary Segmented Data"
authors:
  - "Sarah F. Frisken Gibson"
year: 1999
venue: "MERL TR99-24 / MICCAI (LNCS 1679)"
arxiv: null
doi: "10.1007/BFb0056277"
source: "https://www.merl.com/publications/docs/TR99-24.pdf"
topics:
  - voxels
  - meshing
seed_rank: 1570
seed_batch: "archive-2026-09-04"
reviewed: "2026-09-04"
pool: "graphics"
relevance_score: 9
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
  - title: "Using Distance Maps for Accurate Surface Representation in Sampled Volumes"
    url: "https://www.merl.com/publications/docs/TR99-17.pdf"
    year: 1998
    arxiv: null
    doi: null
see:
  - "1498-marching-cubes-a-high-resolution-3d-surface-construction-algorithm"
  - "408-dual-contouring-of-hermite-data"
  - "1569-poisson-surface-reconstruction"
---

# Constrained Elastic Surface Nets: Generating Smooth Models from Binary Segmented Data

## One-sentence takeaway

Put a node at the center of every 2×2×2 surface cube, link 6-neighbors, and iteratively slide each node toward the centroid of its links *without leaving its cube* — smooth binary isosurfaces that keep cracks and thin protrusions instead of Marching Cubes terraces.

## Why it matters here

Medical/binary voxel volumes (MRI femur in the paper: 512×512×87 at 0.25×0.25×1.4 mm) make Marching Cubes 1498 terrace: shallow slopes become flat slabs. Local Gaussian blur (even 19³) never spans the terrace width without killing detail. Dual Contouring 408 wants Hermite gradients this data does not have. Surface nets are the binary-segmentation sibling: one vertex per occupied cube, a box constraint, then optionally a distance map for volume shading.

## Key ideas

- **Surface cubes, not edge interpolants.** A cube of 8 voxels is a surface cube iff the 8 labels are not uniform. Initialize a node at the cube center; connect nodes in face-adjacent surface cubes (≤6 links).
- **Energy + box constraint.** Energy = sum of squared link lengths. Relax by moving each node toward the equidistant point among its neighbors, then clamp to the original cube. Unconstrained, the net shrinks to a point; the clamp “favors the original segmentation over smoothness.”
- **Energy schedule.** On the examples, energy drops quickly to a minimum (smoothest) then creeps up toward a slightly higher asymptote (sharper corners). Iteration count is a knob (interactive, or stop at the energy minimum). 2D figures: circle 10 iters, tilted rectangle 30, crack+protrusion 20.
- **Ambiguous diagonals.** When like-colored voxels sit on opposite corners, MC picks separating vs bridging topology arbitrarily. Surface nets pinch at the node and *defer* the topology decision for a later pass.
- **Triangles and distance maps.** From each node, 12 candidate triangles to neighbor pairs; emit 6 of 12 to avoid double-covering. Brute-force distance to those triangles fills a signed-distance volume for Gibson Vis’98 shading. Femur renders after 10 and 100 relaxations kill the terraces of the 7³/13³/19³ Gaussian series; every node stays within 1 voxel of the binary surface.

## Caveats

- Binary in, not a scalar-field isosurface. No Hermite / QEF, so Dual Contouring 408 remains the sharp-feature tool when you have gradients. Do not remint Marching Cubes 1498 or Poisson 1569 (oriented-point implicit, different input).
- Relaxation is a simple Laplacian-toward-neighbors; the footnote admits a curvature energy would round less aggressively. Topology at ambiguous cubes is explicitly unfinished.
- MICCAI/LNCS reprint of MERL TR99-24; subtitle on the Springer version says “surfaces” where the TR (and this card title) says “models.”

## Links

- Open PDF (MERL TR99-24): https://www.merl.com/publications/docs/TR99-24.pdf
- DOI (MICCAI LNCS 1679): https://doi.org/10.1007/BFb0056277
- Springer: https://link.springer.com/chapter/10.1007/BFb0056277
