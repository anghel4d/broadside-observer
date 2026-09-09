---
title: "Real-time auralization system based on beam-tracing and mixed-order Ambisonics"
authors: ["Markus Noisternig", "Lauri Savioja", "Brian F. Katz"]
year: 2008
venue: "The Journal of the Acoustical Society of America"
arxiv: null
doi: "10.1121/1.2936004"
source: "https://doi.org/10.1121/1.2936004"
topics: [auralization, ambisonics, binaural, brir, vr-ar, interactive]
seed_rank: 1742
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "realtime"
relevance_score: 8
lineage: ambisonics-binaural
cites:
  - title: "A Beam Tracing Approach to Acoustic Modeling for Interactive Virtual Environments"
    url: "https://doi.org/10.1145/280814.280818"
    year: 1998
    arxiv: null
    doi: "10.1145/280814.280818"
  - title: "Framework for Real-Time Auralization in Architectural Acoustics"
    url: "https://doi.org/10.3813/aaa.918116"
    year: 2008
    arxiv: null
    doi: "10.3813/aaa.918116"
see:
  - "1667-a-beam-tracing-approach-to-acoustic-modeling-for-interactive-virtual"
  - "1680-binaural-rendering-of-ambisonic-signals-by-head-related-impulse"
  - "1741-framework-for-real-time-auralization-in-architectural-acoustics"
---

# Real-time auralization system based on beam-tracing and mixed-order Ambisonics

## One-sentence takeaway

Real-time auralization with beam tracing *and* mixed-order Ambisonics — Noisternig/Savioja/Katz JASA 2008 (abstract/paper): geometric paths encoded as HOA, then binaural/speaker decode.

## Why it matters here

The join card between Funkhouser beams and MagLS headphones. Mixed-order Ambisonics spends order on the horizontal plane. Anoptic: encode early GA into HOA buses, decode with 1680, don't HRTF every image source separately if the count explodes.

## Key ideas

- **Beam tracing → Ambisonic encode.** Directions become HOA coefficients.
- **Mixed-order HOA.** Budget order where ears localize (horizontal).
- **JASA 2008.** Harvest Ambisonics/binaural/BRIR/VR-AR-games.
- **Realtime architectural** sibling of the 2008 framework paper.

## Caveats

JASA 2008 may be a meeting abstract (DOI 10.1121/1.2936004) — check length before over-citing as a full algorithm. HOA order aliasing. Not MagLS yet (2018).

## Links

- DOI: https://doi.org/10.1121/1.2936004
