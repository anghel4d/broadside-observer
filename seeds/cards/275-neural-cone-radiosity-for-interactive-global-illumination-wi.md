---
title: "Neural Cone Radiosity for Interactive Global Illumination with Glossy Materials"
authors:
  - "Jierui Ren"
  - "Haojie Jin"
  - "Bo Pang"
  - "Yisong Chen"
  - "Guoping Wang"
  - "Sheng Li"
year: 2025
venue: "arXiv:cs.GR"
arxiv: "2509.07522"
doi: null
source: "https://arxiv.org/abs/2509.07522"
topics:
  - gi
seed_rank: 275
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 9
cites:
  - title: "Voxel Cone Tracing for Real-Time Global Illumination"
    url: "https://doi.org/10.1145/1944745.1944787"
    year: 2011
    arxiv: null
    doi: "10.1145/1944745.1944787"
    card: "137-voxel-cone-tracing-for-real-time-global-illumination"
  - title: "Radiance Cascades: A Novel Approach to Calculating Global Illumination"
    url: "https://github.com/Raikiri/RadianceCascadesPaper"
    year: 2023
    arxiv: null
    doi: null
    card: "005-radiance-cascades-a-novel-approach-to-calculating-global-ill"
  - title: "The Rendering Equation"
    url: "https://doi.org/10.1145/15922.15902"
    year: 1986
    arxiv: null
    doi: "10.1145/15922.15902"
    card: "169-the-rendering-equation"
---

# Neural Cone Radiosity for Interactive Global Illumination with Glossy Materials

## One-sentence takeaway

Modeling of high-frequency outgoing radiance distributions has long been a key challenge in rendering, particularly for glossy material.

## Why it matters here

Real-time graphics technique relevant to Anoptic Vulkan/meshlet/GI path (Neural Cone Radiosity for Interactive Global Illumination with Glossy Materials).

## Key ideas

- Modeling of high-frequency outgoing radiance distributions has long been a key challenge in rendering, particularly for glossy material.
- Such distributions concentrate radiative energy within a narrow lobe and are highly sensitive to changes in view direction.
- However, existing neural radiosity methods, which primarily rely on positional feature encoding, exhibit notable limitations in capturing these high-frequency, strongly view-dependent radiance distributions.
- To address this, we propose a highly-efficient approach by reflectance-aware ray cone encoding based on the neural radiosity framework, named neural cone radiosity.
- The core idea is to employ a pre-filtered multi-resolution hash grid to accurately approximate the glossy BSDF lobe, embedding view-dependent reflectance characteristics directly into the encoding process through continuous spatial aggregation.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2509.07522](https://arxiv.org/abs/2509.07522)
- URL: https://arxiv.org/abs/2509.07522
