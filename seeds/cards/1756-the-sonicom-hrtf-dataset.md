---
title: "The SONICOM HRTF Dataset"
authors: ["Isaac Engel", "Rapolas Daugintis", "Thibault Vicente", "Aidan O. T. Hogg", "Johan Pauwels", "Arnaud J. Tournier", "Lorenzo Picinali"]
year: 2023
venue: "Journal of the Audio Engineering Society"
arxiv: null
doi: "10.17743/jaes.2022.0066"
source: "https://doi.org/10.17743/jaes.2022.0066"
topics: [hrtf, measurement]
seed_rank: 1756
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "realtime"
relevance_score: 8
lineage: hrtf-spatial-audio
cites:
  - title: "The CIPIC HRTF database"
    url: "https://doi.org/10.1109/aspaa.2001.969552"
    year: 2001
    arxiv: null
    doi: "10.1109/aspaa.2001.969552"
  - title: "A Perceptual Evaluation of Individual and Non-Individual HRTFs: A Case Study of the SADIE II Database"
    url: "https://doi.org/10.3390/app8112029"
    year: 2018
    arxiv: null
    doi: "10.3390/app8112029"
  - title: "A Cross-Evaluated Database of Measured and Simulated HRTFs Including 3D Head Meshes, Anthropometric Features, and Headphone Impulse Responses"
    url: "https://doi.org/10.17743/jaes.2019.0024"
    year: 2019
    arxiv: null
    doi: "10.17743/jaes.2019.0024"
see:
  - "1676-the-cipic-hrtf-database"
  - "1683-a-perceptual-evaluation-of-individual-and-non-individual-hrtfs-a-case"
  - "1750-a-cross-evaluated-database-of-measured-and-simulated-hrtfs-including-3d"
  - "1757-recent-advances-in-the-spatially-oriented-format-for-acoustics-sofa"
---

# The SONICOM HRTF Dataset

## One-sentence takeaway

SONICOM HRTF dataset (Engel/Picinali et al. JAES 2023): modern open HRTFs for spatial-audio/ML, Imperial-led.

## Why it matters here

Post-CIPIC training set. Anoptic/SONICOM-adjacent GAN 1751 already uses this family. Mint as the 2020s public HRTF corpus card alongside HUTUBS/SADIE/FABIAN.

## Key ideas

- **Open HRTF corpus.** Harvest measurement; ~38 cites.
- **JAES 2023.** DOI 10.17743/jaes.2022.0066.
- **Spatial audio research program (SONICOM).** Not just a dummy dump.
- **Measured human subjects** (contrast KEMAR/FABIAN dummies).

## Caveats

Still far-field, finite N. Headphone compensation required. Not a renderer. Not SOFA-the-format (1757).

## Links

- DOI: https://doi.org/10.17743/jaes.2022.0066
