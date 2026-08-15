---
title: "Image-Space Horizon-Based Ambient Occlusion"
authors:
  - "Louis Bavoil"
  - "Miguel Sainz"
  - "Rouslan Dimitrov"
year: 2008
venue: "SIGGRAPH Talks"
arxiv: null
doi: "10.1145/1401032.1401061"
source: "https://doi.org/10.1145/1401032.1401061"
topics:
  - hbao
seed_rank: 401
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 7
cites:
  - title: "The Rendering Equation"
    url: "https://doi.org/10.1145/15886.15902"
    year: 1986
    arxiv: null
    doi: "10.1145/15886.15902"
  - title: "Finding Next Gen: CryEngine 2"
    url: "https://www.crytek.com/download/Presentations/FindingNextGen-CryEngine2.pdf"
    year: 2007
    arxiv: null
    doi: null
see:
  - "152-the-rendering-equation"
  - "484-finding-next-gen-cryengine-2-ssao"
lineage: ambient-occlusion
---

# Image-Space Horizon-Based Ambient Occlusion

## One-sentence takeaway

HBAO estimates per-pixel ambient occlusion by marching the depth buffer along a few azimuths, taking the horizon angle in each direction, and integrating the unoccluded hemisphere.

## Why it matters here

Anoptic/GRID COMMAND still need a cheap contact-darkening pass that does not wait on probes or cascades. Horizon integration is the SSAO family that later GTAO/HBAO+ keep, and it is the right foil when deciding whether AO lives in a full-screen compute pass or is absorbed into radiance-cascade near-field.

## Key ideas

- Treats AO as a horizon problem in eye space: for each azimuth, the highest elevation that still clears the depth samples is the occluded wedge.
- Uses only the depth buffer (optionally per-pixel normals) so dynamic geometry needs no precomputation.
- Reported ~67 MP/s versus ~15 MP/s for a comparable ray-march SSAO on a GeForce 8800, at eight directions × eight steps.
- Production follow-ons add a bilateral blur, jittered steps, and a normal-biased horizon so skin and floors do not self-occlude.

## Caveats

## Links

- DOI: [10.1145/1401032.1401061](https://doi.org/10.1145/1401032.1401061)
- NVIDIA SIGGRAPH 2008 slides: https://developer.download.nvidia.com/presentations/2008/SIGGRAPH/HBAO_SIG08b.pdf
