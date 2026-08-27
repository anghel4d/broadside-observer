---
title: "Spatiotemporal Variance-Guided Filtering: Real-Time Reconstruction for Path-Traced Global Illumination"
authors:
  - "Christoph Schied"
  - "Anton Kaplanyan"
  - "Chris Wyman"
  - "Anjul Patney"
  - "Chakravarty R. Alla Chaitanya"
  - "John Burgess"
  - "Shiqiu Liu"
  - "Carsten Dachsbacher"
  - "Aaron Lefohn"
  - "Marco Salvi"
year: 2017
venue: "HPG"
arxiv: null
doi: "10.1145/3105762.3105770"
source: "https://research.nvidia.com/publication/2017-07_spatiotemporal-variance-guided-filtering-real-time-reconstruction-path-traced"
topics:
  - "SVGF"
  - "denoiser"
  - "RTGI"
seed_rank: 1389
seed_batch: "gi-nature-2026-08-27"
reviewed: "2026-08-27"
pool: "graphics"
relevance_score: 8
lineage: realtime-gi
cites:
  - title: "ReSTIR GI: Path Resampling for Real-Time Path Tracing"
    url: "https://research.nvidia.com/publication/2021-06_restir-gi-path-resampling-real-time-path-tracing"
    year: 2021
    arxiv: null
    doi: "10.2312/hpg.20211281"
  - title: "Dynamic Diffuse Global Illumination with Ray-Traced Irradiance Fields"
    url: "https://jcgt.org/published/0008/02/01/"
    year: 2019
    arxiv: null
    doi: null
see:
  - "005-radiance-cascades-a-novel-approach-to-calculating-global-ill"
  - "318-dynamic-diffuse-global-illumination-with-ray-traced-irradian"
---

# Spatiotemporal Variance-Guided Filtering: Real-Time Reconstruction for Path-Traced Global Illumination

## One-sentence takeaway

SVGF: THE realtime GI denoiser — variance-guided à-trous plus temporal, the reason 1-spp path-traced games exist.

## Why it's lovely

Why you might love this: Not an ML denoiser. A filter that knows the difference between noise and an edge, and it ran in 2017.

## Problem

1-spp path-traced GI is unusable. Generic bilateral filters smear GI. Offline ML denoisers were not a 2017 game budget. You need a reconstruction that respects depth/normal edges and uses temporal history without ghosting.

## Design

- Temporal accumulation with motion vectors and a history length.
- Estimate variance of the accumulated color; use it to set à-trous wavelet filter weights.
- Edge-stopping on depth, normals, luminance.
- HPG 2017; NVIDIA paper page plus DOI 10.1145/3105762.3105770.

## Evidence

Enabled every 2018–2021 1-spp RTGI demo and many shipped titles' RT modes. ReSTIR GI papers treat SVGF as the default reconstruction.

## Limitations

Overblur on first frames / disocclusions. Not a GI method. Later ML denoisers (OIDN, NRD) sometimes beat it — this is the classical card. Do not treat as a generic film denoiser.

## Implications for Broadside

Any Anoptic 1-spp path or ReSTIR output should default to SVGF-class reconstruction before reaching for a network.

## Bottom line

Mint SVGF. The realtime GI denoiser.

## Links

- DOI: [10.1145/3105762.3105770](https://doi.org/10.1145/3105762.3105770)
- URL: https://research.nvidia.com/publication/2017-07_spatiotemporal-variance-guided-filtering-real-time-reconstruction-path-traced
