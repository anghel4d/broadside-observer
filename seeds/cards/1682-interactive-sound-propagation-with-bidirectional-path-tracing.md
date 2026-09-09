---
title: "Interactive Sound Propagation with Bidirectional Path Tracing"
authors: ["Chunxiao Cao", "Zhong Ren", "Carl Schissler", "Dinesh Manocha", "Kun Zhou"]
year: 2016
venue: "ACM TOG / SIGGRAPH Asia"
arxiv: null
doi: "10.1145/2980179.2982431"
source: "https://doi.org/10.1145/2980179.2982431"
topics: [path-tracing, interactive]
seed_rank: 1682
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "realtime"
relevance_score: 10
lineage: interactive-sound-propagation
cites:
  - title: "The Room Acoustic Rendering Equation"
    url: "https://doi.org/10.1121/1.2766781"
    year: 2007
    arxiv: null
    doi: "10.1121/1.2766781"
  - title: "High-Order Diffraction and Diffuse Reflections for Interactive Sound Propagation in Large Environments"
    url: "https://doi.org/10.1145/2601097.2601216"
    year: 2014
    arxiv: null
    doi: "10.1145/2601097.2601216"
see:
  - "1669-the-room-acoustic-rendering-equation"
  - "1664-high-order-diffraction-and-diffuse-reflections-for-interactive-sound"
  - "152-the-rendering-equation"
---

# Interactive Sound Propagation with Bidirectional Path Tracing

## One-sentence takeaway

Bidirectional acoustic path tracing: connect source and listener subpaths so interactive auralization samples difficult specular–diffuse chains.

## Why it matters here

Forward rays starve at a small listener; BDPT (Cao/Ren/Schissler/Manocha/Zhou, SIGGRAPH Asia 2016) is the graphics BDPT port to sound. Anoptic if you already have a GPU path tracer — reuse the connector, swap speed of light for c_sound and add diffraction later.

## Key ideas

- **Bidirectional connections.** Source tree × listener tree; MIS weights for acoustic throughput.
- **Interactive TOG.** GPU-era; harvest path-traced/MC audio.
- **Geometric MC.** Energy/pressure estimators, not a wave bake.
- **Follow-on JASA 2017** bidirectional sound transport (1745) is the journal write-up flavor.

## Caveats

Noise vs frame time; diffraction/BTM not free. Not differentiable GA (1710). Not Kajiya remint — acoustic transport.

## Links

- DOI: https://doi.org/10.1145/2980179.2982431
