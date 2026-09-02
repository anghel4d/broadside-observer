---
title: "RTXDI: A Guide to Best Practices"
authors: ["Chris Wyman", "Alexey Panteleev"]
year: 2021
venue: "SIGGRAPH / NVIDIA"
arxiv: null
doi: null
source: "https://developer.nvidia.com/blog/rtxdi-sdk-restir-direct-lighting/"
topics: [RTXDI, ReSTIR-DI, SDK, many-lights]
seed_rank: 1515
seed_batch: "di-penumbra-2026-09-02"
reviewed: "2026-09-02"
pool: "graphics"
relevance_score: 8
lineage: direct-illumination
cites:
  - title: "Spatiotemporal Reservoir Resampling for Real-Time Ray Tracing with Dynamic Direct Lighting"
    url: "https://benedikt-bitterli.me/restir/"
    year: 2020
    arxiv: null
    doi: "10.1145/3386569.3392481"
  - title: "Importance Resampling for Global Illumination"
    url: "https://faculty.cs.byu.edu/~talbot/publications/ris.pdf"
    year: 2005
    arxiv: null
    doi: null
  - title: "Generalized Resampled Importance Sampling: Foundations of ReSTIR"
    url: "https://research.nvidia.com/publication/2022-07_generalized-resampled-importance-sampling-foundations-restir"
    year: 2022
    arxiv: null
    doi: "10.1145/3528223.3530158"
  - title: "Rearchitecting Spatiotemporal Resampling for Production"
    url: "https://research.nvidia.com/labs/rtr/publication/wyman2021rearchitecting/"
    year: 2021
    arxiv: null
    doi: "10.2312/hpg.20211281"
see:
  - "1374-spatiotemporal-reservoir-resampling-for-real-time-ray-tracing-wi"
  - "1376-generalized-resampled-importance-sampling-foundations-of-restir"
  - "1385-importance-resampling-for-global-illumination"
---

# RTXDI: A Guide to Best Practices

## One-sentence takeaway

The SDK engines actually integrate (UE/Unity/custom) for millions of lights: production knobs, presampling, and coherence tricks on top of ReSTIR — distinct from the 1374 algorithm paper.

## Why it matters here

ReSTIR 1374 is the TOG estimator; GRIS 1376 is the theory; RIS 1385 is the 2005 primitive. RTXDI is what you *ship*: light-buffer layout, presampling, checkerboard, ray-budget knobs, ReGIR. Anoptic many-light RT should cite this as the integration guide, not remint 1374.

## Key ideas

- **SDK, not a new estimator.** ReSTIR DI with production constraints: incoherent light lists, many light types, and a hard ray budget.
- **Presampling / coherence.** Pull light samples out of the inner loop (GTC 2021 / HPG 2021 sibling *Rearchitecting Spatiotemporal Resampling for Production*) so warps stay coherent.
- **Engine knobs.** Spatial/temporal reuse radii, confidence caps, environment vs local lights, denoiser pairing (ReLAX).
- **Evidence.** NVIDIA 2021 guide + SDK. https://developer.nvidia.com/blog/rtxdi-sdk-restir-direct-lighting/ and https://developer.nvidia.com/rtxdi . Academic sibling: HPG 2021 doi `10.2312/hpg.20211281`.

## Caveats

- MUST stay distinct from ReSTIR 1374 — do not merge titles. The HPG 2021 paper is the algorithm writeup of the same productization; this card is the guide/SDK engines bookmark. Direct lighting; ReSTIR GI is 1375.

## Links

- Guide: https://developer.nvidia.com/blog/rtxdi-sdk-restir-direct-lighting/
- SDK: https://developer.nvidia.com/rtxdi
- GTC slides: https://cwyman.org/presentations/GTC2021_RTXDI_Performance.pdf
