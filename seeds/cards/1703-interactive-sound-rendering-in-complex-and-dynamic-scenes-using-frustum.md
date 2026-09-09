---
title: "Interactive Sound Rendering in Complex and Dynamic Scenes Using Frustum Tracing"
authors: ["Christian Lauterbach", "Anish Chandak", "Dinesh Manocha"]
year: 2007
venue: "IEEE TVCG / IEEE Visualization"
arxiv: null
doi: "10.1109/TVCG.2007.70567"
source: "https://doi.org/10.1109/TVCG.2007.70567"
topics: [frustum-tracing, dynamic-scenes, interactive]
seed_rank: 1703
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "realtime"
relevance_score: 10
lineage: interactive-sound-propagation
cites:
  - title: "A Beam Tracing Approach to Acoustic Modeling for Interactive Virtual Environments"
    url: "https://doi.org/10.1145/280814.280818"
    year: 1998
    arxiv: null
    doi: "10.1145/280814.280818"
see:
  - "1667-a-beam-tracing-approach-to-acoustic-modeling-for-interactive-virtual"
  - "1704-ad-frustum-adaptive-frustum-tracing-for-interactive-sound-propagation"
---

# Interactive Sound Rendering in Complex and Dynamic Scenes Using Frustum Tracing

## One-sentence takeaway

Frustum tracing: replace infinitely thin rays with volume frusta so interactive sound rendering in dynamic scenes doesn't miss thin portals.

## Why it matters here

Rays leak through or miss doors. Lauterbach/Chandak/Manocha 2007 Vis/TVCG trace pyramidal frusta — graphics-style beam/frustum hybrid for *dynamic* geometry. Anoptic moving walls: AD-Frustum 2008 is the adaptive sequel.

## Key ideas

- **Volumetric rays.** Frustum vs scene; conservative coverage of portals.
- **Dynamic scenes.** IEEE Visualization 2007 / TVCG.
- **GAMMA.** Precursor to AD-Frustum (1704) and GSound.
- **Interactive sound rendering** as the stated goal.

## Caveats

Frustum splitting cost vs accuracy. Geometric. Not BTMS. Overlap with beam tracing 1667 — different data structure (dynamic vs precomputed beam tree).

## Links

- DOI: https://doi.org/10.1109/TVCG.2007.70567
