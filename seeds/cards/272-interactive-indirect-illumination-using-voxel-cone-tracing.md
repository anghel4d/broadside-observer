---
title: "Interactive Indirect Illumination Using Voxel Cone Tracing"
authors:
  - "Cyril Crassin et al."
year: 2011
venue: "I3D"
arxiv: null
doi: "10.1145/1944745.1944787"
source: "https://doi.org/10.1145/1944745.1944787"
topics:
  - gi
  - vxgi
seed_rank: 272
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 9
lineage: radiance-cascades
cites:
  - title: "GigaVoxels: Ray-Guided Streaming for Efficient and Detailed Voxel Rendering"
    url: "https://doi.org/10.1145/1507149.1507152"
    year: 2009
    doi: "10.1145/1507149.1507152"
  - title: "Cascaded Light Propagation Volumes for Real-Time Indirect Illumination"
    url: "https://doi.org/10.1145/1730804.1730821"
    year: 2010
    doi: "10.1145/1730804.1730821"
  - title: "Dynamic Diffuse Global Illumination with Ray-Traced Irradiance Fields"
    url: "https://jcgt.org/published/0008/02/01/"
    year: 2019
  - title: "Radiance Cascades: A Novel Approach to Calculating Global Illumination"
    url: "https://github.com/Raikiri/RadianceCascadesPaper"
    year: 2023
  - title: "Voxel Cone Tracing for Real-Time Global Illumination"
    url: "https://doi.org/10.1145/1944745.1944787"
    year: 2011
    doi: "10.1145/1944745.1944787"
see:
  - "352-gigavoxels-ray-guided-streaming-for-efficient-and-detailed-v"
  - "277-light-propagation-volumes-in-cryengine-3"
  - "318-dynamic-diffuse-global-illumination-with-ray-traced-irradian"
  - "005-radiance-cascades-a-novel-approach-to-calculating-global-ill"
  - "120-voxel-cone-tracing-for-real-time-global-illumination"
---

# Interactive Indirect Illumination Using Voxel Cone Tracing

## One-sentence takeaway

Interactive VXGI: voxel cone tracing gathers indirect illumination from a sparse voxel representation in real time.

## Why it matters here

Primary voxel-cone-tracing foil on the Radiance Cascades thread — the industrial alternative RC is often measured against for contact detail vs large-scale light.

## Key ideas

- Build a voxelized scene representation (often SVO) and approximate gathering with cones instead of many rays.
- Mip filtering along cones yields soft occlusion and multi-bounce-ish indirect at interactive rates.
- Strong near-field contact response; memory/update cost of voxels is the usual production pain point.

## Caveats

- Voxel resolution and update cost dominate; not geometry-agnostic the way RC claims to be.

## Links

- DOI: [10.1145/1944745.1944787](https://doi.org/10.1145/1944745.1944787)
- URL: https://doi.org/10.1145/1944745.1944787
