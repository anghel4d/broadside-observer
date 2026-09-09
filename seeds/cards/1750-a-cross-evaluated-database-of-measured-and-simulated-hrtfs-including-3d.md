---
title: "A Cross-Evaluated Database of Measured and Simulated HRTFs Including 3D Head Meshes, Anthropometric Features, and Headphone Impulse Responses"
authors: ["Fabian Brinkmann", "Manoj Dinakaran", "Robert Pelzer", "Peter Grosche", "Daniel Voss", "Stefan Weinzierl"]
year: 2019
venue: "Journal of the Audio Engineering Society"
arxiv: null
doi: "10.17743/jaes.2019.0024"
source: "https://doi.org/10.17743/jaes.2019.0024"
topics: [hrtf, anthropometry, measurement, headphone]
seed_rank: 1750
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "realtime"
relevance_score: 9
lineage: hrtf-spatial-audio
cites:
  - title: "A High Resolution and Full-Spherical Head-Related Transfer Function Database for Different Head-Above-Torso Orientations"
    url: "https://doi.org/10.17743/jaes.2017.0033"
    year: 2017
    arxiv: null
    doi: "10.17743/jaes.2017.0033"
  - title: "Boundary element method calculation of individual head-related transfer function. I. Rigid model calculation"
    url: "https://doi.org/10.1121/1.1412440"
    year: 2001
    arxiv: null
    doi: "10.1121/1.1412440"
  - title: "The CIPIC HRTF database"
    url: "https://doi.org/10.1109/aspaa.2001.969552"
    year: 2001
    arxiv: null
    doi: "10.1109/aspaa.2001.969552"
see:
  - "1749-a-high-resolution-and-full-spherical-head-related-transfer-function"
  - "1692-boundary-element-method-calculation-of-individual-head-related-transfer"
  - "1676-the-cipic-hrtf-database"
  - "1683-a-perceptual-evaluation-of-individual-and-non-individual-hrtfs-a-case"
---

# A Cross-Evaluated Database of Measured and Simulated HRTFs Including 3D Head Meshes, Anthropometric Features, and Headphone Impulse Responses

## One-sentence takeaway

HUTUBS: measured *and* simulated HRTFs plus 3D head meshes, anthropometry, and headphone IRs — Brinkmann et al. JAES 2019.

## Why it matters here

The all-in-one personalization dataset: scan, BEM sim, arc measurement, HpTF. Anoptic ML individualization (1740) should train here before scraping random Kaggle HRTFs. Cross-evaluated measured vs simulated — Katz 2001 made operational.

## Key ideas

- **Measured + BEM-simulated** HRTFs on the same subjects/meshes.
- **Meshes, anthropometry, headphone IRs.** One release.
- **JAES 2019.** DOI 10.17743/jaes.2019.0024.
- **TU Berlin.** Same lab as FABIAN.

## Caveats

Still a finite subject count. Simulated vs measured discrepancy is the point — don't ignore it. Not SADIE perceptual paper. Not SOFA spec (that's 1757).

## Links

- DOI: https://doi.org/10.17743/jaes.2019.0024
