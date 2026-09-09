---
title: "Analyzing head-related transfer function measurements using surface spherical harmonics"
authors: ["Michael J. Evans", "James A. S. Angus", "Anthony I. Tew"]
year: 1998
venue: "The Journal of the Acoustical Society of America"
arxiv: null
doi: "10.1121/1.423749"
source: "https://doi.org/10.1121/1.423749"
topics: [hrtf, interpolation, measurement, itd-ild, spherical-harmonics]
seed_rank: 1719
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "realtime"
relevance_score: 9
lineage: hrtf-spatial-audio
cites:
  - title: "HRTF measurements of a KEMAR"
    url: "https://doi.org/10.1121/1.412407"
    year: 1995
    arxiv: null
    doi: "10.1121/1.412407"
see:
  - "1675-hrtf-measurements-of-a-kemar"
  - "1680-binaural-rendering-of-ambisonic-signals-by-head-related-impulse"
---

# Analyzing head-related transfer function measurements using surface spherical harmonics

## One-sentence takeaway

Expand measured HRTFs in *surface spherical harmonics* so interpolation/rotation is a coefficient tweak, not a messy grid lerp.

## Why it matters here

HRTF grids are sparse. Evans/Angus/Tew 1998 JASA project measurements onto spherical harmonics — the spatial-basis card behind later MagLS/HOA thinking. Anoptic interpolation: SH or SUpDEq (1762), not bilinear on a 10° grid.

## Key ideas

- **Spherical harmonic analysis** of HRTF over the sphere.
- **Interpolation/rotation** in coefficient space.
- **JASA 1998.** ~110 cites; harvest interpolation / ITD-ILD.
- **Measured input.** Still needs KEMAR/CIPIC/etc.

## Caveats

ITD/phase: naive SH on complex HRTF rings; later work time-aligns first (MagLS, ear alignment 1763). Order vs spatial aliasing. Not Ambisonic *scene* encoding — it's HRTF basis.

## Links

- DOI: https://doi.org/10.1121/1.423749
