---
title: "Lumen: Real-time Global Illumination in Unreal Engine 5"
authors:
  - "Daniel Wright"
  - "Krzysztof Narkowicz"
  - "Patrick Kelly"
year: 2022
venue: "SIGGRAPH Advances in Real-Time Rendering"
arxiv: null
doi: null
source: "https://advances.realtimerendering.com/s2022/"
topics:
  - "Lumen"
  - "SDFGI"
  - "surface-cache"
  - "final-gather"
seed_rank: 1377
seed_batch: "gi-nature-2026-08-27"
reviewed: "2026-08-27"
pool: "graphics"
relevance_score: 10
lineage: realtime-gi
cites:
  - title: "Dynamic Diffuse Global Illumination with Ray-Traced Irradiance Fields"
    url: "https://jcgt.org/published/0008/02/01/"
    year: 2019
    arxiv: null
    doi: null
  - title: "Interactive Indirect Illumination Using Voxel Cone Tracing"
    url: "https://doi.org/10.1145/1944745.1944787"
    year: 2011
    arxiv: null
    doi: "10.1145/1944745.1944787"
  - title: "Radiance Cascades: A Novel Approach to Calculating Global Illumination"
    url: "https://github.com/Raikiri/RadianceCascadesPaper"
    year: 2023
    arxiv: null
    doi: null
see:
  - "318-dynamic-diffuse-global-illumination-with-ray-traced-irradian"
  - "272-interactive-indirect-illumination-using-voxel-cone-tracing"
  - "005-radiance-cascades-a-novel-approach-to-calculating-global-ill"
  - "327-real-time-global-illumination-using-precomputed-light-field-"
---

# Lumen: Real-time Global Illumination in Unreal Engine 5

## One-sentence takeaway

UE5 Lumen: software SDF traces, a surface cache, and a final gather that shipped GI in a AAA engine without requiring hardware RT.

## Why it's lovely

Why you might love this: The production paper of record for the GI that half the industry now clones. SDF + cache + gather, not a demo.

## Problem

Unreal needed dynamic GI that scales from a 3080 to last-gen consoles, with huge worlds, moving lights, and no lightmap bake. Hardware RT is optional. Probe grids leak; voxel cone tracing is directional mush; full path tracing was not shippable in 2022.

## Design

- Mesh SDF traces for visibility (software RT) plus optional hardware RT.
- Surface cache: cards/clusters store incoming radiance on surfaces, updated asynchronously.
- Final gather from screen traces + the cache, with a radiance cache for rough indirect.
- Far-field / sky is a separate low-frequency path so open worlds do not pay per-texel traces to the horizon.

## Evidence

SIGGRAPH Advances 2022. Shipped in UE5; Fortnite and a generation of UE5 titles are the existence proof. The talk plus slides are the paper.

## Limitations

Cache latency on fast lighting changes. Leaks at thin geometry. Not a spectral/path-traced ground truth. Do not confuse with Lumen Hardware RT, which is a later path.

## Implications for Broadside

Anoptic's engine-side GI should steal the surface-cache idea, not the UE5 mesh-SDF format. Compare to DDGI (318), VCT (272), and RC (005) — Lumen is the hybrid that actually shipped at open-world scale.

## Bottom line

Mint Lumen. Production GI of the 2020s.

## Links

- URL: https://advances.realtimerendering.com/s2022/
