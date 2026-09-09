---
title: "Progressive perceptual audio rendering of complex scenes"
authors: ["Thomas Moeck", "Nicolas Bonneel", "Nicolas Tsingos", "George Drettakis", "Isabelle Viaud-Delmon", "David Alloza"]
year: 2007
venue: "Proceedings of the 2007 symposium on Interactive 3D graphics and games"
arxiv: null
doi: "10.1145/1230100.1230133"
source: "https://doi.org/10.1145/1230100.1230133"
topics: [games, interactive]
seed_rank: 1734
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "engines"
relevance_score: 10
lineage: interactive-sound-propagation
cites:
  - title: "Perceptual Audio Rendering of Complex Virtual Environments"
    url: "https://doi.org/10.1145/1015706.1015760"
    year: 2004
    arxiv: null
    doi: "10.1145/1015706.1015760"
see:
  - "1714-perceptual-audio-rendering-of-complex-virtual-environments"
---

# Progressive perceptual audio rendering of complex scenes

## One-sentence takeaway

Progressive perceptual rendering: stream cluster refinements so complex scenes start cheap and add sources as budget allows (Moeck/Tsingos/Drettakis I3D 2007).

## Why it matters here

Tsingos 2004 clustering is a snapshot. I3D 2007 makes it progressive — important for GRID COMMAND when the audio thread has leftover ms. Harvest quality 10 despite being the 'progressive' leftover.

## Key ideas

- **Progressive clusters.** Coarse grouping first, split as time allows.
- **I3D 2007.** Game/engine-oriented.
- **INRIA perceptual audio.** Same family as 1714.
- **Masking-aware.** Don't spend budget on inaudible emitters.

## Caveats

Hysteresis/pops. Doesn't compute physics. 2007 hardware. Pair with Schissler 2017 for the tracer-side many-source problem.

## Links

- DOI: https://doi.org/10.1145/1230100.1230133
