---
title: "Parametric Wave Field Coding for Precomputed Sound Propagation"
authors: ["Nikunj Raghuvanshi", "John Snyder"]
year: 2014
venue: "ACM TOG / SIGGRAPH"
arxiv: null
doi: "10.1145/2601097.2601184"
source: "https://doi.org/10.1145/2601097.2601184"
topics: [wave-based, precomputation, wave, interactive, compression]
seed_rank: 1662
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "realtime"
relevance_score: 10
lineage: wave-based-acoustics
cites:
  - title: "Precomputed Wave Simulation for Real-Time Sound Propagation of Dynamic Sources in Complex Scenes"
    url: "https://doi.org/10.1145/1778765.1778805"
    year: 2010
    arxiv: null
    doi: "10.1145/1778765.1778805"
  - title: "Efficient and Accurate Sound Propagation Using Adaptive Rectangular Decomposition"
    url: "https://doi.org/10.1109/tvcg.2009.28"
    year: 2009
    arxiv: null
    doi: "10.1109/tvcg.2009.28"
see:
  - "1661-precomputed-wave-simulation-for-real-time-sound-propagation-of-dynamic"
  - "1675-efficient-and-accurate-sound-propagation-using-adaptive-rectangular"
  - "1091-finding-fast-filters"
---

# Parametric Wave Field Coding for Precomputed Sound Propagation

## One-sentence takeaway

Compress precomputed wave-field IRs into a handful of perceptually motivated parameters (delay, loudness, decay, onset) so game lookup stays tiny.

## Why it matters here

Raw wave IRs blow memory on a GRID COMMAND map. Parametric Wave Field Coding (2014) is the compression layer on 1661: code the *shape* of the transfer, not every tap. Direct ancestor of 2018 directional coding and Triton.

## Key ideas

- **Parametric code.** Perceptual fields: arrival time, gain, decay envelope — not STFT dumps.
- **Dynamic source interpolation.** Walk the coded field as the emitter moves.
- **Precomputed, static scene.** Same bake contract as 2010: geometry fixed, sources free.
- **SIGGRAPH 2014.** Raghuvanshi & Snyder; the coding paper between ARD and directional coding.

## Caveats

Parameters discard fine interference structure; not a binaural HRIR. Occlusion of moving geometry is out of scope. Not Finding Fast Filters 1091 (kernel codegen).

## Links

- DOI: https://doi.org/10.1145/2601097.2601184
