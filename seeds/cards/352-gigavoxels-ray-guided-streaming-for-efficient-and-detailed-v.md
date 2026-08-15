---
title: "GigaVoxels: Ray-Guided Streaming for Efficient and Detailed Voxel Rendering"
authors:
  - "Cyril Crassin"
  - "Fabrice Neyret"
  - "Sylvain Lefebvre"
  - "Elmar Eisemann"
year: 2009
venue: "I3D"
arxiv: null
doi: "10.1145/1507149.1507152"
source: "https://doi.org/10.1145/1507149.1507152"
topics:
  - voxels
  - streaming
seed_rank: 352
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 8
lineage: radiance-cascades
cites:
  - title: "Fast volume rendering using a shear-warp factorization of the viewing transformation"
    url: "https://doi.org/10.1145/192161.192283"
    year: 1994
    arxiv: null
    doi: "10.1145/192161.192283"
  - title: "Perfect spatial hashing"
    url: "https://doi.org/10.1145/1141911.1141926"
    year: 2006
    arxiv: null
    doi: "10.1145/1141911.1141926"
  - title: "Interactive Indirect Illumination Using Voxel Cone Tracing"
    url: "https://doi.org/10.1145/1944745.1944787"
    year: 2011
    arxiv: null
    doi: "10.1145/1944745.1944787"
see:
  - "272-interactive-indirect-illumination-using-voxel-cone-tracing"
---

# GigaVoxels: Ray-Guided Streaming for Efficient and Detailed Voxel Rendering

## One-sentence takeaway

GigaVoxels keeps a sparse voxel octree on the GPU and streams only the bricks a cone/ray actually needs, so multi-gigavoxel scenes fit in video memory.

## Why it matters here

Anoptic’s radiance-cascade / voxel-GI line inherits this substrate: Crassin’s later cone-tracing GI is GigaVoxels plus irradiance. Ray-guided brick residency is the same budget problem as streaming RC probes or clipmap terrain without stalling the frame.

## Key ideas

- Encode volume data as a sparse octree of bricks; empty space is skipped by the N-tree, not by a dense 3D texture.
- Rays (and cones) drive an asynchronous producer-consumer: misses enqueue brick loads, hits keep marching, so GPU memory stays bounded.
- Mipmapped bricks plus cone tracing give cheap LOD and approximate visibility — the mechanism VXGI later uses for indirect lighting.
- Filtering and gradient estimation live in the brick cache, so magnification does not explode bandwidth.

## Caveats

## Links

- DOI: https://doi.org/10.1145/1507149.1507152
- I3D 2009: https://i3dsymposium.org/2009/papers.html
