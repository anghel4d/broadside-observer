---
title: "SmartGI: Global Illumination with Space Voxelization on Mobile"
authors:
  - "Shun Cao"
year: 2024
venue: "SIGGRAPH Moving Mobile Graphics"
arxiv: null
doi: null
source: "https://community.arm.com/cfs-file/__key/communityserver-blogs-components-weblogfiles/00-00-00-20-66/siggraph_5F00_mmg_5F00_2024_5F00_SmartGI0722.pdf"
topics:
  - "mobile-GI"
  - "voxel"
  - "Tencent"
seed_rank: 1423
seed_batch: "gi-nature-2026-08-27"
reviewed: "2026-08-27"
pool: "graphics"
relevance_score: 8
lineage: china-graphics
cites:
  - title: "Interactive Indirect Illumination Using Voxel Cone Tracing"
    url: "https://doi.org/10.1145/1944745.1944787"
    year: 2011
    arxiv: null
    doi: "10.1145/1944745.1944787"
  - title: "Voxel Cone Tracing for Real-Time Global Illumination"
    url: "https://research.nvidia.com/publication/interactive-indirect-illumination-using-voxel-cone-tracing"
    year: 2011
    arxiv: null
    doi: null
  - title: "Dynamic Diffuse Global Illumination with Ray-Traced Irradiance Fields"
    url: "https://jcgt.org/published/0008/02/01/"
    year: 2019
    arxiv: null
    doi: null
see:
  - "120-voxel-cone-tracing-for-real-time-global-illumination"
  - "272-interactive-indirect-illumination-using-voxel-cone-tracing"
  - "318-dynamic-diffuse-global-illumination-with-ray-traced-irradian"
---

# SmartGI: Global Illumination with Space Voxelization on Mobile

## One-sentence takeaway

Tencent shipped-class mobile voxel/octree GI (BrickGI) with Lumen-like screen probes.

## Why it's lovely

Why you might love this: Lumen-shaped GI that fits in a phone. Tencent SmartGI — voxels plus screen probes, mobile.

## Problem

Lumen/DDGI budgets are console/PC. Mobile needs voxel/octree GI that still has screen probes, without a hardware RT requirement.

## Design

- Space voxelization / octree (BrickGI) plus Lumen-like screen probes.
- SIGGRAPH Moving Mobile Graphics 2024; ARM community PDF from GI harvest.
- Shun Cao, Tencent.
- Do not drop for VCT/Lumen near-equivalents.

## Evidence

Tencent shipped-class mobile GI. ARM MMG 2024 PDF is the artifact.

## Limitations

Talk/PDF, not TOG. Voxel GI's usual leaking/resolution issues. Not a remint of VCT (120/272).

## Implications for Broadside

Anoptic mobile GI: SmartGI on the China shelf, VCT (272) and DDGI (318) as Western cousins. WishGI is the bake sibling.

## Bottom line

Mint SmartGI. Tencent mobile voxel GI.

## Links

- URL: https://community.arm.com/cfs-file/__key/communityserver-blogs-components-weblogfiles/00-00-00-20-66/siggraph_5F00_mmg_5F00_2024_5F00_SmartGI0722.pdf
