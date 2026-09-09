---
title: "Ambisonics Binaural Rendering via Masked Magnitude Least Squares"
authors: ["Or Berebi", "Fabian Brinkmann", "Stefan Weinzierl", "Boaz Rafaely"]
year: 2025
venue: "ICASSP 2025 - 2025 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)"
arxiv: "2501.18224"
doi: "10.1109/icassp49660.2025.10889034"
source: "https://arxiv.org/abs/2501.18224"
topics: [hrtf, binaural, ambisonics, magls, headphone]
seed_rank: 1716
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "realtime"
relevance_score: 10
lineage: ambisonics-binaural
cites:
  - title: "Binaural rendering of Ambisonic signals by head-related impulse response time alignment and a diffuseness constraint"
    url: "https://doi.org/10.1121/1.5040489"
    year: 2018
    arxiv: null
    doi: "10.1121/1.5040489"
  - title: "iMagLS: Interaural Level Difference with Magnitude Least-Squares Loss for Optimized First-Order Head-Related Transfer Function"
    url: "https://arxiv.org/abs/2311.16702"
    year: 2023
    arxiv: "2311.16702"
    doi: "10.61782/fa.2023.0678"
  - title: "End-to-End Magnitude Least Squares Binaural Rendering of Spherical Microphone Array Signals"
    url: "https://doi.org/10.1109/i3da48870.2021.9610864"
    year: 2021
    arxiv: null
    doi: "10.1109/i3da48870.2021.9610864"
see:
  - "1680-binaural-rendering-of-ambisonic-signals-by-head-related-impulse"
  - "1747-imagls-interaural-level-difference-with-magnitude-least-squares-loss"
  - "1731-end-to-end-magnitude-least-squares-binaural-rendering-of-spherical"
---

# Ambisonics Binaural Rendering via Masked Magnitude Least Squares

## One-sentence takeaway

Masked MagLS (2025): add a frequency-dependent mask to magnitude-least-squares HOA→binaural so first-order / sparse HRTF fits don't wreck ILD.

## Why it matters here

Classic MagLS (1680) can smear ILD at low HOA order. Berebi/Brinkmann/Weinzierl/Rafaely ICASSP 2025 (arXiv 2501.18224) mask the loss. Anoptic first-order Ambisonic headphone decode should start from MagLS and check this mask before writing a new decoder.

## Key ideas

- **Masked MagLS loss.** Don't equally trust all frequencies/directions in the LS fit.
- **ICASSP 2025 + arXiv 2501.18224.** DOI 10.1109/icassp49660.2025.10889034.
- **HOA binaural.** Same problem as Zaunschirm 2018 and iMagLS 2023.
- **HRTF still an input.** Needs SADIE/HUTUBS/KEMAR, not a room bake.

## Caveats

2025, modest cite count. Order-1 Ambisonics remains spatially aliased. Not a personalization method. Not a remint of 1680 — it's a loss-function leftover.

## Links

- arXiv abs: https://arxiv.org/abs/2501.18224
- PDF: https://arxiv.org/pdf/2501.18224
- DOI: https://doi.org/10.1109/icassp49660.2025.10889034
