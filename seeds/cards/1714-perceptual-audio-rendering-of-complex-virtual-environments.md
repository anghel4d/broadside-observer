---
title: "Perceptual Audio Rendering of Complex Virtual Environments"
authors: ["Nicolas Tsingos", "Emmanuel Gallo", "George Drettakis"]
year: 2004
venue: "ACM TOG / SIGGRAPH"
arxiv: null
doi: "10.1145/1015706.1015760"
source: "https://doi.org/10.1145/1015706.1015760"
topics: [perceptual, clustering, interactive, spatial-audio, siggraph]
seed_rank: 1714
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "engines"
relevance_score: 9
lineage: interactive-sound-propagation
see:
  - "1734-progressive-perceptual-audio-rendering-of-complex-scenes"
---

# Perceptual Audio Rendering of Complex Virtual Environments

## One-sentence takeaway

Perceptual clustering of sound sources: mix hundreds of emitters into a handful of representative auralized clusters using masking/spatial grouping.

## Why it matters here

The audio-thread analog of impostors. Tsingos/Gallo/Drettakis SIGGRAPH 2004 is the perceptual many-source paper (INRIA). Anoptic battles: cluster by location + loudness + maskee, then spatialize the cluster. Systems sequel: Moeck 2007 progressive (1734).

## Key ideas

- **Psychoacoustic budget.** Masking and spatial proximity drive merges.
- **SIGGRAPH 2004 / TOG.** Harvest spatial-audio / clustering.
- **Interactive complex VEs.** Not a new HRTF.
- **Cluster then spatialize.** Remaining representatives get the expensive renderer.

## Caveats

Cluster pops if hysteresis is weak. Doesn't compute occlusion physics (that's GSound). 2004 metrics.

## Links

- DOI: https://doi.org/10.1145/1015706.1015760
