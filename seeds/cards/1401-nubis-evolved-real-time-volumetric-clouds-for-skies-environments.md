---
title: "Nubis, Evolved: Real-Time Volumetric Clouds for Skies, Environments and VFX"
authors:
  - "Andrew Schneider"
year: 2022
venue: "SIGGRAPH Advances in Real-Time Rendering"
arxiv: null
doi: null
source: "https://advances.realtimerendering.com/s2022/index.html"
topics:
  - "nubis2"
  - "forbidden-west"
seed_rank: 1401
seed_batch: "gi-nature-2026-08-27"
reviewed: "2026-08-27"
pool: "graphics"
relevance_score: 9
lineage: sky-atmosphere
cites:
  - title: "The Real-Time Volumetric Cloudscapes of Horizon Zero Dawn"
    url: "https://advances.realtimerendering.com/s2015/index.html"
    year: 2015
    arxiv: null
    doi: null
  - title: "Physically Based Sky, Atmosphere and Cloud Rendering in Frostbite"
    url: "https://www.ea.com/frostbite/news/physically-based-sky-atmosphere-and-cloud-rendering"
    year: 2016
    arxiv: null
    doi: null
see:
  - "1357-decima-engine-advances-in-lighting-and-aa"
---

# Nubis, Evolved: Real-Time Volumetric Clouds for Skies, Environments and VFX

## One-sentence takeaway

Forbidden West clouds: environments and VFX, not just a sky dome. Nubis grows down into the world.

## Why it's lovely

Why you might love this: Clouds you can walk into. Nubis Evolved turns the sky shader into weather, mist, and a set piece.

## Problem

Nubis 1 was a sky. Forbidden West needed clouds as rooms, storms, and VFX that share the same volume as the sky — without a second fog system.

## Design

- Extend Nubis to environment-scale volumes and VFX, not only a hemispherical march.
- Lighting and density that hold when the camera is inside the cloud.
- SIGGRAPH Advances 2022 (same course page as Lumen that year).
- Distinct from Nubis Cubed (voxel-authored, leftover) and from Decima lighting 1357.

## Evidence

Shipped in Horizon Forbidden West. The 2022 Advances talk is the paper.

## Limitations

Still a production approximation of multiple scattering. Not Hillaire's atmosphere LUT. Superstorms GDC talk is a sibling leftover.

## Implications for Broadside

Anoptic weather: Nubis 1 for sky, Evolved for walking-into-cloud, Hillaire for the planet atmosphere.

## Bottom line

Mint Nubis Evolved. Clouds as environment.

## Links

- URL: https://advances.realtimerendering.com/s2022/index.html
