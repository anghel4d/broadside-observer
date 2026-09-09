---
title: "High-Order Diffraction and Diffuse Reflections for Interactive Sound Propagation in Large Environments"
authors: ["Carl Schissler", "Ravish Mehra", "Dinesh Manocha"]
year: 2014
venue: "ACM TOG / SIGGRAPH"
arxiv: null
doi: "10.1145/2601097.2601216"
source: "https://doi.org/10.1145/2601097.2601216"
topics: [interactive]
seed_rank: 1664
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "realtime"
relevance_score: 10
lineage: interactive-sound-propagation
cites:
  - title: "Modeling Acoustics in Virtual Environments Using the Uniform Theory of Diffraction"
    url: "https://doi.org/10.1145/383259.383323"
    year: 2001
    arxiv: null
    doi: "10.1145/383259.383323"
  - title: "GSound: Interactive Sound Propagation for Games"
    url: "http://gamma-web.iacs.umd.edu/GSOUND/gsound_aes41st.pdf"
    year: 2011
    arxiv: null
    doi: null
see:
  - "1660-modeling-acoustics-in-virtual-environments-using-the-uniform-theory-of"
  - "1671-gsound-interactive-sound-propagation-for-games"
---

# High-Order Diffraction and Diffuse Reflections for Interactive Sound Propagation in Large Environments

## One-sentence takeaway

Interactive geometric tracer that carries *high-order* edge diffraction plus diffuse reflections — GSound-lineage at SIGGRAPH 2014 scale.

## Why it matters here

First-order UTD (1660) is not enough for a city block. Schissler/Mehra/Manocha keep a path cache of diffracted and diffusely bouncing rays so large environments stay interactive. Game-audio path tracer, not a wave bake.

## Key ideas

- **High-order diffraction.** Multiple Keller/UTD edges chained, not one silhouette.
- **Diffuse reflections.** Scattered bounces beyond pure specular image sources.
- **Path caching.** Reuse visibility/diffraction paths across frames as listener/source move slowly.
- **SIGGRAPH 2014.** UNC GAMMA; sibling of GSound AES 2011 (1671).

## Caveats

Still geometric (high-frequency). Diffuse is Monte-Carlo-ish, not a measured scattering coefficient (1743). Dynamic opening geometry needs later diffraction kernels (1688).

## Links

- DOI: https://doi.org/10.1145/2601097.2601216
