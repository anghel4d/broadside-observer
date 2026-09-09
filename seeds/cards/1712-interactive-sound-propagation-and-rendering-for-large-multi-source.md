---
title: "Interactive Sound Propagation and Rendering for Large Multi-Source Scenes"
authors: ["Carl Schissler", "Dinesh Manocha"]
year: 2017
venue: "ACM TOG"
arxiv: null
doi: "10.1145/2948318"
source: "https://doi.org/10.1145/2948318"
topics: [interactive]
seed_rank: 1712
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "realtime"
relevance_score: 10
lineage: interactive-sound-propagation
cites:
  - title: "GSound: Interactive Sound Propagation for Games"
    url: "http://gamma-web.iacs.umd.edu/GSOUND/gsound_aes41st.pdf"
    year: 2011
    arxiv: null
    doi: null
  - title: "High-Order Diffraction and Diffuse Reflections for Interactive Sound Propagation in Large Environments"
    url: "https://doi.org/10.1145/2601097.2601216"
    year: 2014
    arxiv: null
    doi: "10.1145/2601097.2601216"
  - title: "Perceptual Audio Rendering of Complex Virtual Environments"
    url: "https://doi.org/10.1145/1015706.1015760"
    year: 2004
    arxiv: null
    doi: "10.1145/1015706.1015760"
see:
  - "1679-gsound-interactive-sound-propagation-for-games"
  - "1672-high-order-diffraction-and-diffuse-reflections-for-interactive-sound"
  - "1714-perceptual-audio-rendering-of-complex-virtual-environments"
---

# Interactive Sound Propagation and Rendering for Large Multi-Source Scenes

## One-sentence takeaway

Interactive sound for *large multi-source* scenes: cluster/cull/cache so 100+ emitters don't each get a full tracer.

## Why it matters here

GRID COMMAND has platoons, not one gun. Schissler & Manocha 2017 TOG scale GSound-class propagation to many sources (budget, clustering, shared paths). Pair with Tsingos 2004 perceptual clustering (1714) — that one is psychoacoustic grouping; this is the systems tracer.

## Key ideas

- **Multi-source budget.** Share visibility/diffraction work across emitters.
- **ACM TOG 2017.** Harvest interactive, rel=18.
- **GAMMA game-audio line.** After GSound 2011 and high-order 2014.
- **Geometric interactive.** Not a wave bake volume.

## Caveats

Clustering can merge distinct occlusion. Not perceptual clustering 2004 (different paper). CPU/GPU 2017.

## Links

- DOI: https://doi.org/10.1145/2948318
