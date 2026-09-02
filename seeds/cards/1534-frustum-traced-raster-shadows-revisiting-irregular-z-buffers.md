---
title: "Frustum-traced raster shadows: revisiting irregular z-buffers"
authors: ["Chris Wyman", "Rama Hoetzlein", "Aaron E. Lefohn"]
year: 2015
venue: "I3D"
arxiv: null
doi: "10.1145/2699276.2699280"
source: "https://doi.org/10.1145/2699276.2699280"
topics: [frustum-traced, irregular-z]
seed_rank: 1534
seed_batch: "di-penumbra-2026-09-02"
reviewed: "2026-09-02"
pool: "graphics"
relevance_score: 7
lineage: soft-shadows
cites:
  - title: "Alias-Free Shadow Maps"
    url: "https://www.cs.jhu.edu/~cohen/Publs/AFSM.pdf"
    year: 2004
    arxiv: null
    doi: "10.2312/EGWR/EGSR04/161-166"
  - title: "Casting Curved Shadows on Curved Surfaces"
    url: "https://doi.org/10.1145/800248.807402"
    year: 1978
    arxiv: null
    doi: "10.1145/800248.807402"
  - title: "Spatiotemporal Reservoir Resampling for Real-Time Ray Tracing with Dynamic Direct Lighting"
    url: "https://benedikt-bitterli.me/restir/"
    year: 2020
    arxiv: null
    doi: "10.1145/3386569.3392481"
see:
  - "1005-casting-curved-shadows-on-curved-surfaces"
  - "1374-spatiotemporal-reservoir-resampling-for-real-time-ray-tracing-wi"
---

# Frustum-traced raster shadows: revisiting irregular z-buffers

## One-sentence takeaway

Wyman–Hoetzlein–Lefohn 2015 NVIDIA frustum-traced raster shadows: irregular Z-buffers made GPU-realtime, alias-free hard vis just before HW RT won.

## Why it matters here

Aila–Laine 2004 (this batch) is the irregular-Z idea; this I3D 2015 paper is the compute/CUDA implementation NVIDIA actually demoed. GRID COMMAND contact shadows that must be alias-free without a DXR dispatch still cite this. ReSTIR 1374 is many-light sampling, not this vis substrate.

## Key ideas

- **Frustum per pixel.** Each screen pixel casts a light-space frustum through the occluder BVH/grid; if any triangle stabs the frustum, the pixel is shadowed.
- **Irregular Z, GPU.** Samples live at pixel projections (Aila–Laine); traversal is a compute kernel, not a raster SM.
- **Alias-free hard shadows.** The 2015 look that made 'ray-traced shadows' desirable a year before DXR.
- **Evidence.** I3D 2015, doi `10.1145/2699276.2699280`.

## Caveats

- Hard vis; penumbra still needs many frusta / RT. HW RT largely replaced the custom traversal. Not a remint of 1005 or 1374.

## Links

- DOI: https://doi.org/10.1145/2699276.2699280
