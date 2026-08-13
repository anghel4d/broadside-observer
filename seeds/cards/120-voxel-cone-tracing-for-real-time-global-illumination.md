---
title: "Voxel Cone Tracing for Real-Time Global Illumination"
authors:
  - "Cyril Crassin et al."
year: 2011
venue: "I3D"
arxiv: null
doi: "10.1145/1944745.1944787"
source: "https://doi.org/10.1145/1944745.1944787"
topics:
  - gi
  - graphics
seed_rank: 120
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"
relevance_score: 9
lineage: radiance-cascades
cites:
  - title: "Interactive Indirect Illumination Using Voxel Cone Tracing"
    url: "https://doi.org/10.1145/1944745.1944787"
    year: 2011
    doi: "10.1145/1944745.1944787"
  - title: "GigaVoxels: Ray-Guided Streaming for Efficient and Detailed Voxel Rendering"
    url: "https://doi.org/10.1145/1507149.1507152"
    year: 2009
    doi: "10.1145/1507149.1507152"
  - title: "Cascaded Light Propagation Volumes for Real-Time Indirect Illumination"
    url: "https://doi.org/10.1145/1730804.1730821"
    year: 2010
    doi: "10.1145/1730804.1730821"
  - title: "Radiance Cascades: A Novel Approach to Calculating Global Illumination"
    url: "https://github.com/Raikiri/RadianceCascadesPaper"
    year: 2023
see:
  - "272-interactive-indirect-illumination-using-voxel-cone-tracing"
  - "352-gigavoxels-ray-guided-streaming-for-efficient-and-detailed-v"
  - "277-light-propagation-volumes-in-cryengine-3"
  - "005-radiance-cascades-a-novel-approach-to-calculating-global-ill"
---

# Voxel Cone Tracing for Real-Time Global Illumination

## One-sentence takeaway

Sparse voxel octree + cone tracing approximates glossy/diffuse indirect bounces for interactive GI (same work as the I3D VXGI paper).

## Why it matters here

Classical voxel RTGI foil for Radiance Cascades; keep as the short-title twin of card 348.

## Key ideas

- Voxelize scene into a hierarchical structure and gather irradiance by tracing cones through mipmapped voxels.
- Captures mid-frequency indirect lighting without full path tracing.
- Duplicate seed of 348 (same DOI) — prefer 348 for VXGI cites when linking.

## Caveats

- Duplicate of 348-interactive-indirect-illumination-using-voxel-cone-tracing; do not treat as a second distinct paper.

## Links

- DOI: [10.1145/1944745.1944787](https://doi.org/10.1145/1944745.1944787)
- URL: https://doi.org/10.1145/1944745.1944787
