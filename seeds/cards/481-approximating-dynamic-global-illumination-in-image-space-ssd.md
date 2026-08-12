---
title: "Approximating Dynamic Global Illumination in Image Space (SSDO)"
authors:
  - "Tobias Ritschel"
  - "Thorsten Grosch"
  - "Hans-Peter Seidel"
year: 2009
venue: "I3D"
arxiv: null
doi: "10.1145/1507149.1507168"
source: "https://doi.org/10.1145/1507149.1507168"
topics:
  - ssao
  - ssdo
seed_rank: 481
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 7
lineage: radiance-cascades
cites:
  - title: "Reflective Shadow Maps"
    url: "https://doi.org/10.1145/1053427.1053460"
    year: 2005
    doi: "10.1145/1053427.1053460"
    card: "368-reflective-shadow-maps"
  - title: "Interactive Indirect Illumination Using Voxel Cone Tracing"
    url: "https://doi.org/10.1145/1944745.1944787"
    year: 2011
    doi: "10.1145/1944745.1944787"
    card: "348-interactive-indirect-illumination-using-voxel-cone-tracing"
  - title: "Dynamic Diffuse Global Illumination with Ray-Traced Irradiance Fields"
    url: "https://jcgt.org/published/0008/02/01/"
    year: 2019
    card: "397-dynamic-diffuse-global-illumination-with-ray-traced-irradian"
---

# Approximating Dynamic Global Illumination in Image Space (SSDO)

## One-sentence takeaway

Screen-space directional occlusion approximates dynamic GI from a depth buffer — cheap image-space foil to world-space cascades/probes.

## Why it matters here

Image-space RTGI foil on the thread: clarifies what RC/DDGI buy beyond SSDO-class tricks Anoptic might already have.

## Key ideas

- Use depth/normal buffers to estimate directional occlusion and one-bounce-ish indirect cues.
- Very cheap, view-dependent, fails for off-screen illuminators.

## Caveats

- Not world-space GI; included as a contrastive foil, not an RC ancestor.

## Links

- DOI: [10.1145/1507149.1507168](https://doi.org/10.1145/1507149.1507168)
- URL: https://doi.org/10.1145/1507149.1507168
