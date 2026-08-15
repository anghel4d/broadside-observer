---
title: "Real-Time Meshlet Extraction from Scalar Volumes"
authors: ["Adrian Kreskowski", "Gareth Rendle", "Bernd Froehlich"]
year: 2026
venue: "EGPGV"
arxiv: null
doi: "10.2312/egpgv.20261001"
source: "https://doi.org/10.2312/egpgv.20261001"
topics: [mesh-shaders-gpu-driven, meshlets, isosurface]
seed_rank: 1032
seed_batch: "craft-2026-08-15"
reviewed: "2026-08-15"
pool: "graphics"
relevance_score: 9
lineage: mesh-shaders-gpu-driven
cites:
  - title: "A GPU-Based Multi-Level Marching Cubes Approach for Fast Isosurface Extraction"
    url: "https://doi.org/10.2312/pgv.20161179"
    year: 2016
    arxiv: null
    doi: "10.2312/pgv.20161179"
  - title: "Efficient Adaptive Splitting of Large Voxel Blocks for GPU-Accelerated Isosurface Extraction"
    url: "https://doi.org/10.2312/pgv.20221065"
    year: 2022
    arxiv: null
    doi: "10.2312/pgv.20221065"
see:
  - "261-introduction-to-turing-mesh-shaders"
  - "097-mesh-shaders-in-the-vulkan-ecosystem"
  - "226-towards-practical-meshlet-compression"
  - "090-nanite-a-deep-dive"
  - "470-vulkan-meshlet-cad-scene-sample"
  - "015-gpu-driven-rendering-pipelines"
---

# Real-Time Meshlet Extraction from Scalar Volumes

## One-sentence takeaway

Task shader does occupancy analysis and adaptive partition of large voxel blocks; mesh shader emits persistent, 8-bit-index meshlets — GPU-driven isosurface extraction with no CPU readback.

## Why it matters here

Anoptic already speaks meshlets. GRID COMMAND's procedural world is a scalar field waiting to become one. This is the drop-in extraction kernel that writes the same meshlet records the mesh pipeline already culls, instead of marching cubes → CPU cluster → upload.

## Key ideas

- Trivial "extract from tiny blocks so meshlets stay under the vertex/primitive cap" wastes occupancy. Extract from *larger* blocks, then adaptively partition occupied regions in the task stage.
- Compact occupancy from the analysis kernel lets the mesh stage spend warps only on cells that actually cut the isosurface.
- Meshlets are persistent and sized for 8-bit indices. Combined extract+draw beats prior real-time kernels (up to 36% extract, 11–27% combined); offline meshlet builders are three orders of magnitude slower.
- Entirely GPU-driven: no CPU readback, so it is a replacement for existing extraction kernels *if* mesh shaders are available (now including Adreno A8x-class mobile).

## Caveats

- Meshlet size is not exact; rendering is ~20% slower than offline-clustered meshlets. Fine for exploration / procedural terrain, not a Nanite substitute for authored hero meshes.
- Volume isosurfaces, not triangle-soup clustering. Authored mesh meshletization remains meshoptimizer / Nanite-class (already in library).
- Preprint + EGPGV 2026 DOI; code claimed on GitHub via the Weimar page.

## Links

- DOI: [10.2312/egpgv.20261001](https://doi.org/10.2312/egpgv.20261001)
- Preprint: https://www.uni-weimar.de/fileadmin/user/fak/medien/professuren/Virtual_Reality/documents/publications/2026-Real-Time_Meshlet_Extraction__preprint.pdf
- Project: https://www.uni-weimar.de/de/medien/professuren/medieninformatik/vr/research/real-time-rendering/real-time-meshlet-extraction-from-scalar-volumes/
