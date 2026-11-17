---
title: "Building the AAA Lighting Pipeline in Three.js"
authors:
  - "Ben Houston"
year: 2026
venue: "ben3d.ca blog (series: Quest for AAA Quality in Three.js), 9 Nov 2026"
arxiv: null
doi: null
source: "https://ben3d.ca/blog/building-the-aaa-lighting-pipeline-in-threejs"
version_reviewed: "web 2026-11-09"
topics:
  - "real-time-global-illumination"
  - "lightmaps"
  - "light-probes"
  - "screen-space-reflections"
  - "temporal-upscaling"
  - "webgpu"
seed_rank: 2621
seed_batch: "craft-2026-11-17"
reviewed: "2026-11-17"
pool: "engines"
relevance_score: 7
cites:
  - title: "Building the AAA Lighting Pipeline in Three.js"
    url: "https://ben3d.ca/blog/building-the-aaa-lighting-pipeline-in-threejs"
    year: 2026
    arxiv: null
    doi: null
---

# Building the AAA Lighting Pipeline in Three.js

## One-sentence takeaway

A stage-by-stage audit of the indoor AAA lighting pipeline (G-buffer, baked lightmaps, light-probe grid, reflection probes, GTAO, stochastic SSR, SSGI, BRDF integration, TRAA/TAAU) against what Three.js's WebGPU renderer has, what is in review, and what is still missing.

## Why it matters here

It is a current, practitioner-written map of the baked-plus-screen-space GI stack that radiance cascades (and the M2L+RC idea) would compete with or replace in Anoptic. The gap table shows where the conventional stack is still weak: SSR and SSGI coverage, and plugging indirect diffuse and specular into the BRDF. Those are the places a cascade-based method has to clearly win.

## Key ideas

- **Two parts.** Setup fills three caches (lightmaps for static meshes, a light-probe grid for moving objects, reflection probes per room); each frame reads them and adds screen-space passes.
- **Status table.** Per stage: what Three.js has, what is in review or drafted, and what is still to build (e.g. octahedral normals, DDGI visibility, Hi-Z SSR tracing, bent normals/GTSO, Catmull-Rom history).
- **Biggest gaps.** Hi-Z tracing and coverage output for SSR, the same coverage for SSGI, and pluggable indirect lighting that ties both into the BRDF.
- **Upscaling detail.** With TAAU at 0.5, half-resolution SSR/SSGI run at a quarter of output resolution per axis, so running them at full render resolution may be better. A negative mip bias of about log2 of the scale is needed and not yet applied.
- **Future work.** Cheaper stratified noise via a precomputed map, auto-exposure, physically based sun and sky, reflection probes in glTF, and directional lightmaps (ambient plus dominant direction, L1 SH, or spherical Gaussians).

## Caveats

A blog post by the author of many of the PRs it describes, so the status claims are his; several items are drafts. Indoor scenes and web/WebGPU constraints shape the pipeline choice, and there are no performance numbers for the full pipeline. Found via Hacker News (138 points).

## Links

- Article: https://ben3d.ca/blog/building-the-aaa-lighting-pipeline-in-threejs
