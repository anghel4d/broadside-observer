---
title: "Real-time Global Illumination by Precomputed Local Reconstruction from Sparse Radiance Probes"
authors:
  - "Ari Silvennoinen"
  - "Jaakko Lehtinen"
year: 2017
venue: "SIGGRAPH Asia / TOG"
arxiv: null
doi: "10.1145/3130800.3130852"
source: "https://arisilvennoinen.github.io/Projects/RTGI/"
topics:
  - "probes"
  - "sparse-GI"
seed_rank: 1384
seed_batch: "gi-nature-2026-08-27"
reviewed: "2026-08-27"
pool: "graphics"
relevance_score: 9
lineage: realtime-gi
cites:
  - title: "Dynamic Diffuse Global Illumination with Ray-Traced Irradiance Fields"
    url: "https://jcgt.org/published/0008/02/01/"
    year: 2019
    arxiv: null
    doi: null
  - title: "Real-Time Global Illumination using Precomputed Light Field Probes"
    url: "https://research.nvidia.com/publication/real-time-global-illumination-using-precomputed-light-field-probes"
    year: 2017
    arxiv: null
    doi: null
  - title: "The Irradiance Volume"
    url: "https://doi.org/10.1109/38.656788"
    year: 1998
    arxiv: null
    doi: "10.1109/38.656788"
see:
  - "318-dynamic-diffuse-global-illumination-with-ray-traced-irradian"
  - "327-real-time-global-illumination-using-precomputed-light-field-"
  - "451-the-irradiance-volume"
---

# Real-time Global Illumination by Precomputed Local Reconstruction from Sparse Radiance Probes

## One-sentence takeaway

A handful of radiance probes plus a local reconstruction operator beat a dense irradiance volume — the academic spine behind later DDGI/Lumen probe thinking.

## Why it's lovely

Why you might love this: Sparse probes that actually reconstruct, not trilinear-leak. The paper DDGI had to answer.

## Problem

Irradiance volumes and light-field probes are dense, leaky, and expensive to update. Games want dynamic GI from a sparse set of samples without lightmaps.

## Design

- Place sparse radiance probes (not a regular volume).
- Precompute a local reconstruction: how nearby probes combine at a shading point given visibility.
- Runtime: update probes, apply the reconstruction. Dynamic lights, static-ish geometry.
- SIGGRAPH Asia 2017 / TOG.

## Evidence

The reconstruction-from-sparse-probes idea is what later DDGI (visibility-aware interpolation) and Lumen (surface cache + probes) both owe. Project page plus TOG paper.

## Limitations

Precomputed reconstruction assumes geometry is not fully dynamic. Not a path tracer. Do not remint irradiance caching / the irradiance volume (451) — this is the sparse-reconstruct sequel.

## Implications for Broadside

Anoptic probe GI should cite this next to DDGI (318) and light-field probes (327). RC (005) is the competing 'do not use probes' fork.

## Bottom line

Mint Silvennoinen–Lehtinen. Sparse probes with a reconstruction, not a grid.

## Links

- DOI: [10.1145/3130800.3130852](https://doi.org/10.1145/3130800.3130852)
- URL: https://arisilvennoinen.github.io/Projects/RTGI/
