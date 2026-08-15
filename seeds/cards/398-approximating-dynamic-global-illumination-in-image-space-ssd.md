---
title: "Approximating Dynamic Global Illumination in Image Space"
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
seed_rank: 398
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 7
lineage: radiance-cascades
cites:
  - title: "Reflective Shadow Maps"
    url: "https://doi.org/10.1145/1053427.1053460"
    year: 2005
    arxiv: null
    doi: "10.1145/1053427.1053460"
  - title: "Interactive Indirect Illumination Using Voxel Cone Tracing"
    url: "https://doi.org/10.1145/1944745.1944787"
    year: 2011
    arxiv: null
    doi: "10.1145/1944745.1944787"
  - title: "Dynamic Diffuse Global Illumination with Ray-Traced Irradiance Fields"
    url: "https://jcgt.org/published/0008/02/01/"
    year: 2019
    arxiv: null
    doi: null
see:
  - "292-reflective-shadow-maps"
  - "272-interactive-indirect-illumination-using-voxel-cone-tracing"
  - "318-dynamic-diffuse-global-illumination-with-ray-traced-irradian"
---

# Approximating Dynamic Global Illumination in Image Space

## One-sentence takeaway

SSDO treats neighboring depth/normal samples as micro-occluders and micro-emitters, so one screen-space pass approximates directional occlusion and a bounce of indirect light.

## Why it matters here

This is the cheap image-space foil to Anoptic’s world-space RC / DDGI. If a Broadside view already has a depth buffer, SSDO is what you can add in a millisecond — and the checklist of what it cannot do (off-screen lights, multi-bounce, stable lighting under camera motion) is exactly why cascades exist.

## Key ideas

- SSAO is a scalar darkening; SSDO keeps a direction, so a nearby bright surface can bounce colored light and a nearby wall can occlude a directional source.
- Samples live in a screen-space kernel around each pixel; each sample is tested as an occluder and as an unprojected sender.
- Cost is a few dozen taps plus a bilateral blur — console-era cheap, view-dependent, and blind to anything not in the G-buffer.
- Complements RSMs (world-space one-bounce from the light’s view) rather than replacing them.

## Caveats

## Links

- DOI: https://doi.org/10.1145/1507149.1507168
