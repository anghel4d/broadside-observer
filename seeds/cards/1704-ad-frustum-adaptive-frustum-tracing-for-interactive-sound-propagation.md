---
title: "AD-Frustum: Adaptive Frustum Tracing for Interactive Sound Propagation"
authors: ["Anish Chandak", "Christian Lauterbach", "Micah Taylor", "Zhile Ren", "Dinesh Manocha"]
year: 2008
venue: "IEEE TVCG"
arxiv: null
doi: "10.1109/TVCG.2008.111"
source: "https://doi.org/10.1109/TVCG.2008.111"
topics: [frustum-tracing, interactive]
seed_rank: 1704
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "realtime"
relevance_score: 10
lineage: interactive-sound-propagation
cites:
  - title: "Interactive Sound Rendering in Complex and Dynamic Scenes Using Frustum Tracing"
    url: "https://doi.org/10.1109/TVCG.2007.70567"
    year: 2007
    arxiv: null
    doi: "10.1109/TVCG.2007.70567"
see:
  - "1703-interactive-sound-rendering-in-complex-and-dynamic-scenes-using-frustum"
  - "1679-gsound-interactive-sound-propagation-for-games"
---

# AD-Frustum: Adaptive Frustum Tracing for Interactive Sound Propagation

## One-sentence takeaway

AD-Frustum: adaptively split/merge sound frusta so interactive propagation spends samples where the portal/visibility is hard.

## Why it matters here

Fixed frusta waste budget in open air. Chandak et al. 2008 TVCG add adaptation — the practical GAMMA tracer between 2007 frustum and 2011 GSound. Steal the adaptivity heuristic, not the CPU rasterizer.

## Key ideas

- **Adaptive refinement.** Split frusta on occluder silhouettes; merge in free space.
- **Interactive TVCG 2008.** Harvest rel=29.
- **Dynamic-friendly** vs static Funkhouser beam trees.
- **Specular + some diffraction hooks** in the GAMMA series.

## Caveats

Still geometric. Adaptation heuristics can pop. Not a wave method.

## Links

- DOI: https://doi.org/10.1109/TVCG.2008.111
