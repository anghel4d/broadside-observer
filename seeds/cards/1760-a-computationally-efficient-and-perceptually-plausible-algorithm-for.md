---
title: "A Computationally-Efficient and Perceptually-Plausible Algorithm for Binaural Room Impulse Response Simulation"
authors: ["Torben Wendt", "Steven van de Par", "Stephan Ewert"]
year: 2014
venue: "Journal of the Audio Engineering Society"
arxiv: null
doi: "10.17743/jaes.2014.0042"
source: "https://doi.org/10.17743/jaes.2014.0042"
topics: [binaural, brir, rir]
seed_rank: 1760
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "realtime"
relevance_score: 8
lineage: hrtf-spatial-audio
cites:
  - title: "Image method for efficiently simulating small-room acoustics"
    url: "https://doi.org/10.1121/1.382599"
    year: 1979
    arxiv: null
    doi: "10.1121/1.382599"
  - title: "Localizing nearby sound sources in a classroom: Binaural room impulse responses"
    url: "https://doi.org/10.1121/1.1872572"
    year: 2005
    arxiv: null
    doi: "10.1121/1.1872572"
  - title: "HRTF measurements of a KEMAR"
    url: "https://doi.org/10.1121/1.412407"
    year: 1995
    arxiv: null
    doi: "10.1121/1.412407"
see:
  - "1674-image-method-for-efficiently-simulating-small-room-acoustics"
  - "1722-localizing-nearby-sound-sources-in-a-classroom-binaural-room-impulse"
  - "1675-hrtf-measurements-of-a-kemar"
---

# A Computationally-Efficient and Perceptually-Plausible Algorithm for Binaural Room Impulse Response Simulation

## One-sentence takeaway

RAZR-style efficient BRIR simulator: perceptually plausible binaural room IRs without full FDTD (Wendt/van de Par/Ewert JAES 2014).

## Why it matters here

Need a BRIR in milliseconds. This JAES algorithm (often cited as RAZR) mixes image-source/parametric tricks for plausible binaural rooms. Anoptic placeholder interiors before a Triton bake. Harvest binaural/BRIR/RIR, quality 8, ~74 cites.

## Key ideas

- **Computationally efficient BRIR.** Perceptual, not wave-accurate.
- **JAES 2014.** DOI 10.17743/jaes.2014.0042.
- **Binaural room** — HRTF + simplified room, not dry KEMAR.
- **Plausible ≠ BRAS-accurate.**

## Caveats

Forced perceptual model. Not a measured classroom BRIR (1712). Not MagLS. Not SDN (different structure).

## Links

- DOI: https://doi.org/10.17743/jaes.2014.0042
