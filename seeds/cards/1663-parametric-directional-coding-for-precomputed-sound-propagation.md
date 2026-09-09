---
title: "Parametric Directional Coding for Precomputed Sound Propagation"
authors: ["Nikunj Raghuvanshi", "John Snyder"]
year: 2018
venue: "ACM TOG / SIGGRAPH"
arxiv: null
doi: "10.1145/3197517.3201339"
source: "https://doi.org/10.1145/3197517.3201339"
topics: [interactive-acoustics, precomputation, wave, directional, interactive]
seed_rank: 1663
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "engines"
relevance_score: 10
lineage: interactive-sound-propagation
cites:
  - title: "Parametric Wave Field Coding for Precomputed Sound Propagation"
    url: "https://doi.org/10.1145/2601097.2601184"
    year: 2014
    arxiv: null
    doi: "10.1145/2601097.2601184"
  - title: "Precomputed Wave Simulation for Real-Time Sound Propagation of Dynamic Sources in Complex Scenes"
    url: "https://doi.org/10.1145/1778765.1778805"
    year: 2010
    arxiv: null
    doi: "10.1145/1778765.1778805"
see:
  - "1662-parametric-wave-field-coding-for-precomputed-sound-propagation"
  - "1661-precomputed-wave-simulation-for-real-time-sound-propagation-of-dynamic"
---

# Parametric Directional Coding for Precomputed Sound Propagation

## One-sentence takeaway

Encode *directional* structure of precomputed wave transfer (where energy arrives at the listener) so HRTF/Ambisonic spatialization has something to aim.

## Why it matters here

Omnidirectional coded IRs (1662) spatialize poorly on headphones. 2018 parametric directional coding is the Microsoft/Project Acoustics directional layer: bake wave energy vs incoming direction, then feed a spatializer. This is the game-audio join between wave bake and HRTF 1667/1676.

## Key ideas

- **Directional parameters.** Arrival not just when/how loud, but from which spherical bin / SH-ish lobe.
- **Listener rotation.** Head-tracked playback can rotate the coded directional field.
- **Static geometry bake.** Same Project Acoustics contract; dynamic portals come later (1727).
- **SIGGRAPH 2018 TOG.** Raghuvanshi & Snyder; harvest coverage tag `game`.

## Caveats

Still a bake: no live FDTD. Directional resolution is parametric, not a measured BRIR. Pair with MagLS binaural (1672) rather than treating this as an HRTF database.

## Links

- DOI: https://doi.org/10.1145/3197517.3201339
