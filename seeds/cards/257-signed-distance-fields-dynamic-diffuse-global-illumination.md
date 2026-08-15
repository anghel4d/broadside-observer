---
title: "Signed Distance Fields Dynamic Diffuse Global Illumination"
authors:
  - "Jinkai Hu"
  - "Milo Yip"
  - "G. Elias Alonso"
  - "Shihao Gu"
  - "Xiangjun Tang"
  - "Xiaogang Jin"
year: 2020
venue: "arXiv cs.GR"
arxiv: "2007.14394"
doi: null
source: "https://arxiv.org/abs/2007.14394"
topics:
  - gi
seed_rank: 257
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 9
lineage: radiance-cascades
cites:
  - title: "Dynamic Diffuse Global Illumination with Ray-Traced Irradiance Fields"
    url: "https://jcgt.org/published/0008/02/01/"
    year: 2019
  - title: "Radiance Cascades: A Novel Approach to Calculating Global Illumination"
    url: "https://github.com/Raikiri/RadianceCascadesPaper"
    year: 2023
see:
  - "318-dynamic-diffuse-global-illumination-with-ray-traced-irradian"
  - "005-radiance-cascades-a-novel-approach-to-calculating-global-ill"
---

# Signed Distance Fields Dynamic Diffuse Global Illumination

## One-sentence takeaway

Dynamic diffuse GI from an SDF scene plus a discretized irradiance field: multi-bounce, no precompute, no RTX-class hardware, and no Monte-Carlo noise.

## Why it matters here

If Anoptic already keeps SDFs for gameplay traces and VFX, this is the GI coupling that does not demand a probe lattice or a hardware RT core — a third foil beside DDGI and Radiance Cascades.

## Key ideas

- Approximate scene geometry with a signed distance field and use it for visibility / occlusion instead of ray-traced meshes.
- Discretize irradiance over space so lighting and geometry can move without a bake.
- Supports multi-bounce diffuse GI in real time on both large open scenes and dense interiors.
- Claims better scaling than noisy RTGI and fewer light-leak / bounce-cap failure modes than contemporaneous probe methods.

## Caveats

## Links

- arXiv: [2007.14394](https://arxiv.org/abs/2007.14394)
- PDF: https://arxiv.org/pdf/2007.14394
