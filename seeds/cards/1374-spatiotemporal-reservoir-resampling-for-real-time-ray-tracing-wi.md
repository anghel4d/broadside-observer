---
title: "Spatiotemporal Reservoir Resampling for Real-Time Ray Tracing with Dynamic Direct Lighting"
authors:
  - "Benedikt Bitterli"
  - "Chris Wyman"
  - "Matt Pharr"
  - "Peter Shirley"
  - "Aaron Lefohn"
  - "Wojciech Jarosz"
year: 2020
venue: "SIGGRAPH / TOG"
arxiv: null
doi: "10.1145/3386569.3392481"
source: "https://benedikt-bitterli.me/restir/"
topics:
  - "ReSTIR"
  - "many-lights"
  - "RIS"
  - "realtime-RT"
seed_rank: 1374
seed_batch: "gi-nature-2026-08-27"
reviewed: "2026-08-27"
pool: "graphics"
relevance_score: 10
lineage: many-lights
cites:
  - title: "Importance Resampling for Global Illumination"
    url: "https://faculty.cs.byu.edu/~talbot/publications/ris.pdf"
    year: 2005
    arxiv: null
    doi: null
  - title: "Lightcuts: A Scalable Approach to Illumination"
    url: "https://doi.org/10.1145/1073204.1073218"
    year: 2005
    arxiv: null
    doi: "10.1145/1073204.1073218"
  - title: "Instant Radiosity"
    url: "https://doi.org/10.1145/258734.258769"
    year: 1997
    arxiv: null
    doi: "10.1145/258734.258769"
see:
  - "1042-lightcuts-a-scalable-approach-to-illumination"
  - "450-instant-radiosity"
---

# Spatiotemporal Reservoir Resampling for Real-Time Ray Tracing with Dynamic Direct Lighting

## One-sentence takeaway

Reservoir reuse turns millions of dynamic lights into a real-time sampling problem: keep one weighted sample per pixel and share it across space and time.

## Why it's lovely

Why you might love this: The paper that made 'too many lights' a solved engine feature. One reservoir, a few neighbors, and RTXDI follows.

## Problem

Games want cinematic light counts under a hard frame budget. Classical many-lights trees still pay a hierarchy per shading point; naive MIS explodes. Reusing a neighbor's chosen light is biased unless reuse is resampled importance sampling with an unbiased weight.

## Design

- RIS with a streaming reservoir stores one light sample plus a running weight per pixel.
- Temporal reuse: last frame's reservoir is motion-shifted and resampled against the current candidate.
- Spatial reuse: neighboring reservoirs donate samples; MIS-style weights keep the estimator consistent.
- Candidate generation is pluggable (light tree, NEE, emissive triangles).

## Evidence

SIGGRAPH 2020 / TOG. Shipped as NVIDIA RTXDI; default many-lights path in Unreal/Unity RT stacks. Thousands-to-millions of lights at interactive rates.

## Limitations

Direct lighting first (indirect is ReSTIR GI). Correlation from reuse wants a denoiser. Jacobian and visibility must be updated on reuse.

## Implications for Broadside

Anoptic many-light RTS scenes (muzzle flashes, city fixtures, emissive VFX) should speak ReSTIR, not a 2005 Lightcuts tree. Lightcuts (1042) is the offline ancestor; RIS 2005 is the primitive.

## Bottom line

Mint ReSTIR. This is the many-lights paper games actually run.

## Links

- DOI: [10.1145/3386569.3392481](https://doi.org/10.1145/3386569.3392481)
- URL: https://benedikt-bitterli.me/restir/
