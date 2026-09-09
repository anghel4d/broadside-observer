---
title: "End-to-End Magnitude Least Squares Binaural Rendering of Spherical Microphone Array Signals"
authors: ["Thomas Deppisch", "Hannes Helmholz", "Jens Ahrens"]
year: 2021
venue: "2021 Immersive and 3D Audio: from Architecture to Automotive (I3DA)"
arxiv: null
doi: "10.1109/i3da48870.2021.9610864"
source: "https://doi.org/10.1109/i3da48870.2021.9610864"
topics: [binaural, magls]
seed_rank: 1731
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "realtime"
relevance_score: 9
lineage: ambisonics-binaural
cites:
  - title: "Binaural rendering of Ambisonic signals by head-related impulse response time alignment and a diffuseness constraint"
    url: "https://doi.org/10.1121/1.5040489"
    year: 2018
    arxiv: null
    doi: "10.1121/1.5040489"
see:
  - "1680-binaural-rendering-of-ambisonic-signals-by-head-related-impulse"
  - "1747-imagls-interaural-level-difference-with-magnitude-least-squares-loss"
---

# End-to-End Magnitude Least Squares Binaural Rendering of Spherical Microphone Array Signals

## One-sentence takeaway

End-to-end MagLS: learn/fit the binaural decode of spherical-microphone-array / HOA signals with a magnitude-LS pipeline (Deppisch/Helmholz/Ahrens I3DA 2021).

## Why it matters here

Zaunschirm MagLS is HRTF-based decode. This I3DA paper is MagLS for *array → binaural* end-to-end (SMA recordings). Anoptic if you capture Ambisonic beds in the field; else 1680 is enough.

## Key ideas

- **SMA / HOA signals in, binaural out.** MagLS as the fit.
- **I3DA 2021.** Immersive and 3D Audio conference.
- **Same MagLS family** as 2018 JASA and 2023 iMagLS.
- **Measured array + HRTF.** Not a room tracer.

## Caveats

Conference paper vs JASA MagLS. Array order/regularization. Not game-engine Triton.

## Links

- DOI: https://doi.org/10.1109/i3da48870.2021.9610864
