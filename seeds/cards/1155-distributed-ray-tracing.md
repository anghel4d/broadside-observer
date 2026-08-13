---
title: "Distributed Ray Tracing"
authors:
  - "Robert L. Cook"
  - "Thomas Porter"
  - "Loren Carpenter"
year: 1984
venue: "SIGGRAPH"
arxiv: null
doi: "10.1145/800031.808590"
source: "https://doi.org/10.1145/800031.808590"
topics:
  - graphics
  - ray-tracing
  - distribution-ray-tracing
seed_rank: 1155
seed_batch: "perfects-systems-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 9
lineage: gpu-driven-rendering
cites:
  - title: "An Improved Illumination Model for Shaded Display"
    url: "https://doi.org/10.1145/358876.358882"
    year: 1980
    arxiv: null
    doi: "10.1145/358876.358882"
    card: "1153-an-improved-illumination-model-for-shaded-display"
  - title: "The Rendering Equation"
    url: "https://doi.org/10.1145/15922.15902"
    year: 1986
    arxiv: null
    doi: "10.1145/15922.15902"
    card: "169-the-rendering-equation"
  - title: "The Reyes Image Rendering Architecture"
    url: "https://doi.org/10.1145/37402.37414"
    year: 1987
    arxiv: null
    doi: "10.1145/37402.37414"
    card: "1156-the-reyes-image-rendering-architecture"
  - title: "Compositing Digital Images"
    url: "https://doi.org/10.1145/800031.808606"
    year: 1984
    arxiv: null
    doi: "10.1145/800031.808606"
    card: "1157-compositing-digital-images"
---

# Distributed Ray Tracing

## One-sentence takeaway

Distributed ray tracing: supersample over lens, time, and BRDF to get soft shadows, DOF, motion blur, and glossy reflection.

## Why it matters here

Shows integration as the right framing—stepping stone to Kajiya's rendering equation.

## Key ideas

- Distribute rays over many domains (not just pixel area).
- Soft shadows / DOF / motion blur unified.
- Monte Carlo / stratified sampling practice.
- Pixar/REYES-era companion to Cook–Torrance.

## Caveats

- Classic; verify claims against the primary text before engineering decisions.

## Links

- DOI: [10.1145/800031.808590](https://doi.org/10.1145/800031.808590)
- URL: https://doi.org/10.1145/800031.808590
