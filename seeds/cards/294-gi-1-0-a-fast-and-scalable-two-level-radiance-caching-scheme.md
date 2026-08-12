---
title: "GI-1.0: A Fast and Scalable Two-level Radiance Caching Scheme for Real-time Global Illumination"
authors:
  - "Guillaume Boissé"
  - "Sylvain Meunier"
  - "Heloise de Dinechin"
  - "Pieterjan Bartels"
  - "Alexander Veselov"
  - "Kenta Eto"
  - "Takahiro Harada"
year: 2023
venue: "arXiv:cs.GR"
arxiv: "2310.19855"
doi: null
source: "https://arxiv.org/abs/2310.19855"
topics:
  - gi
seed_rank: 294
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 9
---

# GI-1.0: A Fast and Scalable Two-level Radiance Caching Scheme for Real-time Global Illumination

## One-sentence takeaway

Real-time global illumination is key to enabling more dynamic and physically realistic worlds in performance-critical applications such as games or any other applications with real-time constraints.Hardware-accelerated ray tracing in modern GPUs allows arbitrary intersection queries against the geometry, making it possible to evaluate indirect lighting entirely at runtime.

## Why it matters here

Real-time graphics technique relevant to Anoptic Vulkan/meshlet/GI path (GI-1.0: A Fast and Scalable Two-level Radiance Caching Scheme for Real-time Glob).

## Key ideas

- Real-time global illumination is key to enabling more dynamic and physically realistic worlds in performance-critical applications such as games or any other applications with real-time constraints.Hardware-accelerated ray tracing in modern GPUs allows arbitrary intersection queries against the geometry, making it possible to evaluate indirect lighting entirely at runtime.
- However, only a small number of rays can be traced at each pixel to maintain high framerates at ever-increasing image resolutions.
- Existing solutions, such as probe-based techniques, approximate the irradiance signal at the cost of a few rays per frame but suffer from a lack of details and slow response times to changes in lighting.
- On the other hand, reservoir-based resampling techniques capture much more details but typically suffer from poorer performance and increased amounts of noise, making them impractical for the current generation of hardware and gaming consoles.
- To find a balance that achieves high lighting fidelity while maintaining a low runtime cost, we propose a solution that dynamically estimates global illumination without needing any content preprocessing, thus enabling easy integration into existing real-time rendering pipelines.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2310.19855](https://arxiv.org/abs/2310.19855)
- URL: https://arxiv.org/abs/2310.19855
