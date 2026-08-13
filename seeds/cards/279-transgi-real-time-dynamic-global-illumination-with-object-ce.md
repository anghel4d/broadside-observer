---
title: "TransGI: Real-Time Dynamic Global Illumination With Object-Centric Neural Transfer Model"
authors:
  - "Yijie Deng"
  - "Lei Han"
  - "Lu Fang"
year: 2025
venue: "arXiv:cs.GR"
arxiv: "2506.09909"
doi: null
source: "https://arxiv.org/abs/2506.09909"
topics:
  - gi
seed_rank: 279
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

# TransGI: Real-Time Dynamic Global Illumination With Object-Centric Neural Transfer Model

## One-sentence takeaway

Neural rendering algorithms have revolutionized computer graphics, yet their impact on real-time rendering under arbitrary lighting conditions remains limited due to strict latency constraints in practical applications.

## Why it matters here

Real-time graphics technique relevant to Anoptic Vulkan/meshlet/GI path (TransGI: Real-Time Dynamic Global Illumination With Object-Centric Neural Transf).

## Key ideas

- Neural rendering algorithms have revolutionized computer graphics, yet their impact on real-time rendering under arbitrary lighting conditions remains limited due to strict latency constraints in practical applications.
- The key challenge lies in formulating a compact yet expressive material representation.
- To address this, we propose TransGI, a novel neural rendering method for real-time, high-fidelity global illumination.
- It comprises an object-centric neural transfer model for material representation and a radiance-sharing lighting system for efficient illumination.
- Traditional BSDF representations and spatial neural material representations lack expressiveness, requiring thousands of ray evaluations to converge to noise-free colors.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2506.09909](https://arxiv.org/abs/2506.09909)
- URL: https://arxiv.org/abs/2506.09909
