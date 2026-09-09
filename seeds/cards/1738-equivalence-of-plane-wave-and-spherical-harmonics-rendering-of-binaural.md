---
title: "Equivalence of plane wave and spherical harmonics rendering of binaural room impulse response"
authors: ["Zamir Ben-Hur", "J. Sheaffer", "B. Rafaely"]
year: 2015
venue: "Journal of the Acoustical Society of America"
arxiv: null
doi: "10.1121/1.4919974"
source: "https://doi.org/10.1121/1.4919974"
topics: [binaural, brir, spherical-harmonics, hrtf, rir]
seed_rank: 1738
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "realtime"
relevance_score: 8
lineage: ambisonics-binaural
cites:
  - title: "Binaural rendering of Ambisonic signals by head-related impulse response time alignment and a diffuseness constraint"
    url: "https://doi.org/10.1121/1.5040489"
    year: 2018
    arxiv: null
    doi: "10.1121/1.5040489"
see:
  - "1672-binaural-rendering-of-ambisonic-signals-by-head-related-impulse"
  - "1714-localizing-nearby-sound-sources-in-a-classroom-binaural-room-impulse"
---

# Equivalence of plane wave and spherical harmonics rendering of binaural room impulse response

## One-sentence takeaway

Plane-wave vs spherical-harmonic rendering of a BRIR are equivalent when the expansions match — Ben-Hur/Sheaffer/Rafaely JASA 2015.

## Why it matters here

Implementation choice: decode a measured room to HOA then MagLS, or plane-wave project. This short JASA result says they're the same if you do the linear algebra right. Anoptic: pick one bus format (HOA) and stop double-rendering.

## Key ideas

- **Equivalence.** PWD vs SH rendering of BRIRs.
- **JASA 2015.** Harvest binaural / BRIR / spherical-harmonics.
- **Rafaely group.** Same MagLS/iMagLS cluster.
- **Measured RIR/BRIR input.**

## Caveats

Equivalence under stated truncation/regularization; real arrays break it. Not a game tracer. Semantic Scholar URL in harvest.

## Links

- DOI: https://doi.org/10.1121/1.4919974
- HTML: https://www.semanticscholar.org/paper/11ed7effafd6c63d13dd289ef0a34707c42471c2
