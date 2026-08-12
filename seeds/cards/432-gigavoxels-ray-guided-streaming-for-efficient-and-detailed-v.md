---
title: "Gigavoxels: Ray-Guided Streaming for Efficient and Detailed Voxel Rendering"
authors:
  - "Cyril Crassin et al."
year: 2009
venue: "I3D"
arxiv: null
doi: "10.1145/1507149.1507152"
source: "https://doi.org/10.1145/1507149.1507152"
topics:
  - voxels
  - streaming
seed_rank: 432
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 8
lineage: radiance-cascades
cites:
  - title: "Interactive Indirect Illumination Using Voxel Cone Tracing"
    url: "https://doi.org/10.1145/1944745.1944787"
    year: 2011
    doi: "10.1145/1944745.1944787"
    card: "348-interactive-indirect-illumination-using-voxel-cone-tracing"
---

# Gigavoxels: Ray-Guided Streaming for Efficient and Detailed Voxel Rendering

## One-sentence takeaway

Ray-guided streaming of sparse voxel DAGs/octrees that made detailed voxel rendering practical — substrate for VXGI.

## Why it matters here

Voxel pipeline precursor on the RC epistemology: GigaVoxels underpins the Crassin cone-tracing GI line.

## Key ideas

- Stream voxel bricks on demand guided by rays, keeping GPU memory bounded.
- Enables high-detail volumetric representations used by later interactive GI.

## Caveats

- Rendering/streaming paper first; GI application arrives with voxel cone tracing.

## Links

- DOI: [10.1145/1507149.1507152](https://doi.org/10.1145/1507149.1507152)
- URL: https://doi.org/10.1145/1507149.1507152
