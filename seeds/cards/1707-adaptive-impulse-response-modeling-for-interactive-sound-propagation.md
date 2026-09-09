---
title: "Adaptive impulse response modeling for interactive sound propagation"
authors: ["Carl Schissler", "Dinesh Manocha"]
year: 2016
venue: "Proceedings of the 20th ACM SIGGRAPH Symposium on Interactive 3D Graphics and Games"
arxiv: null
doi: "10.1145/2856400.2856414"
source: "https://doi.org/10.1145/2856400.2856414"
topics: [games, interactive]
seed_rank: 1707
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "engines"
relevance_score: 9
lineage: interactive-sound-propagation
cites:
  - title: "GSound: Interactive Sound Propagation for Games"
    url: "http://gamma-web.iacs.umd.edu/GSOUND/gsound_aes41st.pdf"
    year: 2011
    arxiv: null
    doi: null
see:
  - "1671-gsound-interactive-sound-propagation-for-games"
  - "1704-interactive-sound-propagation-and-rendering-for-large-multi-source"
  - "1091-finding-fast-filters"
---

# Adaptive impulse response modeling for interactive sound propagation

## One-sentence takeaway

Adaptive impulse-response modeling at I3D 2016: update encoded IRs interactively as the listener moves through a game scene.

## Why it matters here

Schissler & Manocha I3D 2016 is the engine-facing IR-adaptation paper (between GSound and 2017 multi-source). Anoptic: don't rebuild a 2 s IR every step — morph parameters, keep the convolution running (1091-style filters).

## Key ideas

- **Adaptive IR.** Time-varying filter as listener/source move.
- **I3D 2016.** Game/engine-oriented; harvest rel=21.
- **Geometric interactive stack.** UNC.
- **Runtime convolution** of a changing IR, not a static hall send.

## Caveats

Parameter morphing ≠ physically correct dynamic wave field. I3D short vs TOG. Not SDN/FDN (different reverb family).

## Links

- DOI: https://doi.org/10.1145/2856400.2856414
