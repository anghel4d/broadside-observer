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
    arxiv: null
    doi: "10.1145/1944745.1944787"
  - title: "Fast volume rendering using a shear-warp factorization of the viewing transformation"
    url: "https://doi.org/10.1145/192161.192283"
    year: 1994
    arxiv: null
    doi: "10.1145/192161.192283"
  - title: "Real-Time Volume Graphics"
    url: "https://doi.org/10.1201/b10629"
    year: 2006
    arxiv: null
    doi: "10.1201/b10629"
  - title: "High-quality pre-integrated volume rendering using hardware-accelerated pixel shading"
    url: "https://doi.org/10.1145/383507.383515"
    year: 2001
    arxiv: null
    doi: "10.1145/383507.383515"
  - title: "A single-pass GPU ray casting framework for interactive out-of-core rendering of massive volumetric datasets"
    url: "https://doi.org/10.1007/s00371-008-0261-9"
    year: 2008
    arxiv: null
    doi: "10.1007/s00371-008-0261-9"
  - title: "Interactive k-d tree GPU raytracing"
    url: "https://doi.org/10.1145/1230100.1230129"
    year: 2007
    arxiv: null
    doi: "10.1145/1230100.1230129"
  - title: "Perfect spatial hashing"
    url: "https://doi.org/10.1145/1141911.1141926"
    year: 2006
    arxiv: null
    doi: "10.1145/1141911.1141926"
  - title: "Relief texture mapping"
    url: "https://doi.org/10.1145/344779.344947"
    year: 2000
    arxiv: null
    doi: "10.1145/344779.344947"
  - title: "Synthesis of bidirectional texture functions on arbitrary surfaces"
    url: "https://doi.org/10.1145/566570.566634"
    year: 2002
    arxiv: null
    doi: "10.1145/566570.566634"
  - title: "Real-time volume graphics"
    url: "https://doi.org/10.1145/1103900.1103929"
    year: 2004
    arxiv: null
    doi: "10.1145/1103900.1103929"
  - title: "Volumetric reconstruction and interactive rendering of trees from photographs"
    url: "https://doi.org/10.1145/1015706.1015785"
    year: 2004
    arxiv: null
    doi: "10.1145/1015706.1015785"
  - title: "Glift"
    url: "https://doi.org/10.1145/1122501.1122505"
    year: 2006
    arxiv: null
    doi: "10.1145/1122501.1122505"
see:
  - "348-interactive-indirect-illumination-using-voxel-cone-tracing"
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
