---
title: "Volcanite: Commodity-Hardware Segmentation Volume Visualization for Connectomics and Beyond"
authors:
  - "Max Piochowiak"
  - "Reiner Dolp"
  - "Julian Herold"
  - "Eric Behle"
  - "Carsten Dachsbacher"
  - "Alexander Schug"
year: 2026
venue: "arXiv preprint (cs.GR)"
arxiv: "2609.36898"
doi: null
source: "https://arxiv.org/abs/2609.36898"
topics:
  - "vulkan"
  - "voxel-rendering"
  - "volume-compression"
  - "global-illumination"
  - "gpu-driven-rendering"
seed_rank: 2485
seed_batch: "craft-2026-11-01"
reviewed: "2026-11-01"
pool: "graphics"
lineage: gpu-driven-rendering
relevance_score: 8
cites:
  - title: "Volcanite: Commodity-Hardware Segmentation Volume Visualization for Connectomics and Beyond"
    url: "https://arxiv.org/abs/2609.36898"
    year: 2026
    arxiv: "2609.36898"
    doi: null
see: ["1430-aokana-a-gpu-driven-voxel-rendering-framework-for-open-world", "1241-efficient-sparse-voxel-octrees", "1032-real-time-meshlet-extraction-from-scalar-volumes"]
---

# Volcanite: Commodity-Hardware Segmentation Volume Visualization for Connectomics and Beyond

## One-sentence takeaway

An open-source Vulkan renderer keeps terabyte-scale label volumes losslessly compressed as multi-level-of-detail bricks, decompresses only the visible ones into a GPU cache on demand, and ray-marches them directly with shadows and global illumination, reaching up to half a trillion voxels at 100 frames per second on commodity hardware with no meshing.

## Why it matters here

Anoptic's world is categorical voxel-ish data (unit ids, materials, territory labels), not density fields, and Volcanite is a working Vulkan reference for exactly that: label-preserving lossless compression, on-demand brick decompression into a cache, and voxel-precise rendering with GI on top. It is a concrete point of comparison for the radiance-cascades plan and for how far 'skip the mesh, march the compressed volume' scales before meshlets pay off.

## Key ideas

- Compression-aware data handling: CSGV-style encoding of multi-LOD volume bricks, streamed to the GPU on demand to fit VRAM budgets of a few GiB.
- GPU pipeline decompresses visible regions into a cache; first frames cost more decompression, steady state is milliseconds per frame.
- Segmentation-specific rendering preserves exact voxel labels and adds shadows and global illumination.
- Handles datasets at full scale (up to 163 GB on disk in their tables) and has the smallest storage and fastest preprocessing against gzip/Neuroglancer-style pipelines.
- GPLv3 code and evaluation scripts are public (github.com/max-pio/volcanite).

## Caveats

Read abstract, overview figure, data-handling and compression sections and code availability (41-page paper with appendix). Target is scientific visualization of static volumes, so dynamic edits (units moving, terrain changing) are not addressed, and GPLv3 means study, not copy.

## Links

- [arXiv abstract](https://arxiv.org/abs/2609.36898)
- [PDF](https://arxiv.org/pdf/2609.36898)
- [Code](https://github.com/max-pio/volcanite)
