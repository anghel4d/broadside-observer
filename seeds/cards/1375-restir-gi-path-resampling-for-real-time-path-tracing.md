---
title: "ReSTIR GI: Path Resampling for Real-Time Path Tracing"
authors:
  - "Yaobin Ouyang"
  - "Jiaqi Liu"
  - "Markus Kettunen"
  - "Matt Pharr"
  - "Jacopo Pantaleoni"
year: 2021
venue: "HPG"
arxiv: null
doi: "10.2312/hpg.20211281"
source: "https://research.nvidia.com/publication/2021-06_restir-gi-path-resampling-real-time-path-tracing"
topics:
  - "ReSTIR-GI"
  - "path-tracing"
seed_rank: 1375
seed_batch: "gi-nature-2026-08-27"
reviewed: "2026-08-27"
pool: "graphics"
relevance_score: 10
lineage: realtime-gi
cites:
  - title: "Spatiotemporal Reservoir Resampling for Real-Time Ray Tracing with Dynamic Direct Lighting"
    url: "https://benedikt-bitterli.me/restir/"
    year: 2020
    arxiv: null
    doi: "10.1145/3386569.3392481"
  - title: "Spatiotemporal Variance-Guided Filtering: Real-Time Reconstruction for Path-Traced Global Illumination"
    url: "https://research.nvidia.com/publication/2017-07_spatiotemporal-variance-guided-filtering-real-time-reconstruction-path-traced"
    year: 2017
    arxiv: null
    doi: "10.1145/3105762.3105770"
see:
  - "005-radiance-cascades-a-novel-approach-to-calculating-global-ill"
  - "318-dynamic-diffuse-global-illumination-with-ray-traced-irradian"
---

# ReSTIR GI: Path Resampling for Real-Time Path Tracing

## One-sentence takeaway

The same reservoir reuse that solved many-lights now reuses whole indirect paths, so 1-spp path tracing looks like many.

## Why it's lovely

Why you might love this: ReSTIR grows up. Indirect GI, not just lamps — the path engines actually ship.

## Problem

ReSTIR 2020 resamples direct-light candidates. Indirect GI is a different measure: the sample is a path prefix whose PDF lives in high dimension. Neighbor reuse is often invalid after a bounce. Games still want path-traced GI at 60 Hz.

## Design

- Shift mapping: a neighbor's path is replayed from the current pixel through a reconnection vertex.
- Reservoirs store path samples; spatiotemporal reuse is the GI-specialized ancestor of GRIS/ReSTIR PT.
- Short path-traced prefix plus a reused tail — the pattern later productized in ReSTIR PT.

## Evidence

HPG 2021. Side-by-sides vs 1-spp path tracing + SVGF: reuse removes low-frequency GI blotch that denoisers cannot invent.

## Limitations

Reconnect heuristics fail on glossy/specular chains and fast-moving GI. Still wants a denoiser. Not a replacement for NRC or Lumen's surface cache.

## Implications for Broadside

Broadside path-traced GI should start here, not from raw BDPT. RC (005) and DDGI (318) are the probe-side alternatives this paper is not.

## Bottom line

Mint ReSTIR GI. Indirect path reuse, game-shaped.

## Links

- DOI: [10.2312/hpg.20211281](https://doi.org/10.2312/hpg.20211281)
- URL: https://research.nvidia.com/publication/2021-06_restir-gi-path-resampling-real-time-path-tracing
