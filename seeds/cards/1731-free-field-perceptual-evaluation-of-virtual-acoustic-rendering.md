---
title: "Free-field perceptual evaluation of virtual acoustic rendering algorithms using two head-related impulse response delay treatment strategies"
authors: ["Zane T. Rusk", "Michelle C. Vigeant", "Matthew Neal"]
year: 2023
venue: "The Journal of the Acoustical Society of America"
arxiv: null
doi: "10.1121/10.0018720"
source: "https://doi.org/10.1121/10.0018720"
topics: [hrtf, binaural, ambisonics, magls, measurement, spherical-harmonics]
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
  - title: "A Perceptual Evaluation of Individual and Non-Individual HRTFs: A Case Study of the SADIE II Database"
    url: "https://doi.org/10.3390/app8112029"
    year: 2018
    arxiv: null
    doi: "10.3390/app8112029"
see:
  - "1672-binaural-rendering-of-ambisonic-signals-by-head-related-impulse"
  - "1683-a-perceptual-evaluation-of-individual-and-non-individual-hrtfs-a-case"
---

# Free-field perceptual evaluation of virtual acoustic rendering algorithms using two head-related impulse response delay treatment strategies

## One-sentence takeaway

Free-field listening test of virtual acoustic renderers under two HRIR *delay treatments* (onset alignment strategies) — Rusk/Vigeant/Neal JASA 2023.

## Why it matters here

MagLS vs naive HRTF interpolation often differs in how ITD is applied. This 2023 JASA perceptual paper (Ambisonics/MagLS tagged) is the 'does the delay trick matter to listeners' card. Anoptic binaural: pick an alignment, A/B it, don't assume MagLS plots = localization.

## Key ideas

- **Two delay treatments.** How you time-align HRIRs before rendering.
- **Free-field perceptual eval.** Not a room BRIR test.
- **JASA 2023.** Harvest MagLS / spherical-harmonics / headphone.
- **Renderer comparison,** not a new HRTF database.

## Caveats

Free-field ≠ game interiors. Specific renderer set. Not SADIE II (2018) remint — leftover is delay-treatment psychophysics.

## Links

- DOI: https://doi.org/10.1121/10.0018720
