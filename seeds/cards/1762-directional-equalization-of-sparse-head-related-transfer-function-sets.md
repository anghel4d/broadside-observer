---
title: "Directional Equalization of Sparse Head-Related Transfer Function Sets for Spatial Upsampling"
authors: ["Christoph Pörschmann", "Johannes M. Arend", "F. Brinkmann"]
year: 2019
venue: "IEEE/ACM Transactions on Audio, Speech, and Language Processing"
arxiv: null
doi: "10.1109/TASLP.2019.2908057"
source: "https://doi.org/10.1109/TASLP.2019.2908057"
topics: [hrtf, interpolation, measurement, spherical-harmonics]
seed_rank: 1762
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "realtime"
relevance_score: 8
lineage: hrtf-spatial-audio
cites:
  - title: "Analyzing head-related transfer function measurements using surface spherical harmonics"
    url: "https://doi.org/10.1121/1.423749"
    year: 1998
    arxiv: null
    doi: "10.1121/1.423749"
  - title: "A High Resolution and Full-Spherical Head-Related Transfer Function Database for Different Head-Above-Torso Orientations"
    url: "https://doi.org/10.17743/jaes.2017.0033"
    year: 2017
    arxiv: null
    doi: "10.17743/jaes.2017.0033"
see:
  - "1719-analyzing-head-related-transfer-function-measurements-using-surface"
  - "1757-a-high-resolution-and-full-spherical-head-related-transfer-function"
  - "1680-binaural-rendering-of-ambisonic-signals-by-head-related-impulse"
---

# Directional Equalization of Sparse Head-Related Transfer Function Sets for Spatial Upsampling

## One-sentence takeaway

SUpDEq: directional equalization of *sparse* HRTF sets so spherical interpolation/upsampling doesn't notch (Pörschmann/Arend/Brinkmann TASLP 2019).

## Why it matters here

Sparse grids + naive SH = timbral holes. Directional EQ before interpolation is the 2019 leftover used with FABIAN/HUTUBS. Anoptic HRTF runtime interpolation should SUpDEq (or MagLS time-align), not lerp HRTF bins.

## Key ideas

- **Directional equalization.** Flatten, interpolate, de-equalize.
- **IEEE/ACM TASLP 2019.** Harvest interpolation / measurement / SH.
- **Sparse HRTF sets.** Spatial densification.
- **TU Cologne / TU Berlin authors.**

## Caveats

~34 cites. Magnitude-oriented; ITD still special-cased. Not a database. Not GAN 2025 remint.

## Links

- DOI: https://doi.org/10.1109/TASLP.2019.2908057
- HTML: https://www.semanticscholar.org/paper/c48b09278040b66910ef2eebb5f36f0f96f21a4c
