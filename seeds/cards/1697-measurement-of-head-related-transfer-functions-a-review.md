---
title: "Measurement of Head-Related Transfer Functions: A Review"
authors: ["Song Li", "Jürgen Peissig"]
year: 2020
venue: "Applied Sciences"
arxiv: null
doi: "10.3390/app10145014"
source: "https://doi.org/10.3390/app10145014"
topics: [hrtf, measurement, near-field, vr-ar, headphone]
seed_rank: 1697
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "realtime"
relevance_score: 8
lineage: hrtf-spatial-audio
cites:
  - title: "HRTF measurements of a KEMAR"
    url: "https://doi.org/10.1121/1.412407"
    year: 1995
    arxiv: null
    doi: "10.1121/1.412407"
  - title: "The CIPIC HRTF database"
    url: "https://doi.org/10.1109/aspaa.2001.969552"
    year: 2001
    arxiv: null
    doi: "10.1109/aspaa.2001.969552"
  - title: "Fundamentals of binaural technology"
    url: "https://doi.org/10.1016/0003-682x(92)90046-u"
    year: 1992
    arxiv: null
    doi: "10.1016/0003-682x(92)90046-u"
see:
  - "1675-hrtf-measurements-of-a-kemar"
  - "1684-the-cipic-hrtf-database"
  - "1682-fundamentals-of-binaural-technology"
---

# Measurement of Head-Related Transfer Functions: A Review

## One-sentence takeaway

Li & Peissig 2020: review of *how* to measure HRTFs — setups, near-field, errors, and why two labs never quite match.

## Why it matters here

Anoptic will consume CIPIC/SADIE/HUTUBS/SONICOM, not run an anechoic tower. This Applied Sciences review is the measurement-caveat card: grid density, continuous vs blocked meatus, near-field, and headphone reproduction. Pair with SOFA/AES69 (1765).

## Key ideas

- **Measurement zoo.** Arc, turntable, continuous-acquisition, dummy vs human.
- **Near-field called out.** Distance-dependent HRTF is not a far-field scale.
- **OA 2020 survey.** ~76 cites; VR-AR-games tagged in harvest.
- **Does not pick a renderer.** MagLS/SOFA are downstream.

## Caveats

Survey. Doesn't replace SADIE perceptual eval or CIPIC. Numeric BEM HRTFs (Katz) are a different pipeline.

## Links

- DOI: https://doi.org/10.3390/app10145014
