---
title: "Global Illumination Based on Surfels"
authors:
  - "Henrik Halén"
  - "Kyle Hayward"
  - "Andreas Brinck"
year: 2021
venue: "SIGGRAPH Advances in Real-Time Rendering"
arxiv: null
doi: null
source: "https://www.ea.com/seed/news/siggraph21-global-illumination-surfels"
topics:
  - "surfels"
  - "GIBS"
  - "Frostbite"
seed_rank: 1388
seed_batch: "gi-nature-2026-08-27"
reviewed: "2026-08-27"
pool: "graphics"
relevance_score: 8
lineage: realtime-gi
cites:
  - title: "Radiance Cascades: A Novel Approach to Calculating Global Illumination"
    url: "https://github.com/Raikiri/RadianceCascadesPaper"
    year: 2023
    arxiv: null
    doi: null
  - title: "Lumen: Real-time Global Illumination in Unreal Engine 5"
    url: "https://advances.realtimerendering.com/s2022/"
    year: 2022
    arxiv: null
    doi: null
see:
  - "005-radiance-cascades-a-novel-approach-to-calculating-global-ill"
  - "1113-surfel-radiance-cascades-diffuse-global-illumination"
---

# Global Illumination Based on Surfels

## One-sentence takeaway

Frostbite/SEED GIBS: a world-space surfel GI that later shipped at 60 Hz — Lumen-class, different cache primitive.

## Why it's lovely

Why you might love this: Surfels instead of probes or voxels. The SEED GI that became a shipped football game, not a DXR demo leftover.

## Problem

Probe grids leak. Voxel cones mush. Hardware RT was not a Frostbite default in 2021. SEED needed a world-space radiance cache that could be updated from noisy traces and shaded like a surface.

## Design

- Generate surfels (world-space disks) on scene surfaces.
- Trace / gather into surfels; store incoming radiance.
- Shade from nearby surfels with a kernel that respects orientation and visibility.
- SIGGRAPH Advances 2021; PICA PICA was the DXR ancestor, GIBS is the productization.

## Evidence

Talk plus EA SEED writeup. Later 'Shipping Dynamic GI in Frostbite' (2024) is the 60 Hz follow-through — not minted here. Distinct from Surfel Radiance Cascades (1113).

## Limitations

Surfel placement and coverage holes. Not path-traced ground truth. Overlaps conceptually with Lumen's surface cache — steal both, implement one.

## Implications for Broadside

Anoptic should treat GIBS as the surfel fork of Lumen. RC (005) and Surfel RC (1113) are the cascade fork. Do not remint RC.

## Bottom line

Mint GIBS. Surfels as a GI cache, shipped-class.

## Links

- URL: https://www.ea.com/seed/news/siggraph21-global-illumination-surfels
