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
venue: "arXiv:cs.GR"
arxiv: "2007.14394"
doi: null
source: "https://arxiv.org/abs/2007.14394"
topics:
  - gi
seed_rank: 331
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 9
lineage: radiance-cascades
cites:
  - title: "Dynamic Diffuse Global Illumination with Ray-Traced Irradiance Fields"
    url: "https://jcgt.org/published/0008/02/01/"
    year: 2019
    card: "397-dynamic-diffuse-global-illumination-with-ray-traced-irradian"
  - title: "Radiance Cascades: A Novel Approach to Calculating Global Illumination"
    url: "https://github.com/Raikiri/RadianceCascadesPaper"
    year: 2023
    card: "005-radiance-cascades-a-novel-approach-to-calculating-global-ill"
---

# Signed Distance Fields Dynamic Diffuse Global Illumination

## One-sentence takeaway

Estimate dynamic diffuse GI by combining an SDF scene approx with a discretized irradiance field — multi-bounce without RTX-class probes.

## Why it matters here

SDF-domain neighbor of the probe foil branch; relevant when Anoptic already leans on SDFs for gameplay/VFX and wants GI coupling options beside RC.

## Key ideas

- SDF approximation of geometry for visibility/occlusion queries.
- Discretized irradiance field supports dynamic lights/geometry without heavy precomputation.

## Caveats

- SDF fidelity caps lighting accuracy; different failure mode than cascade ringing or probe leaks.

## Links

- arXiv: [2007.14394](https://arxiv.org/abs/2007.14394)
- URL: https://arxiv.org/abs/2007.14394
