---
title: "Head-Related Transfer Function Upsampling Using an Autoencoder-Based Generative Adversarial Network With Evaluation Framework"
authors: ["Xuyi Hu", "Jian Li", "Lorenzo Picinali", "Aidan O. T. Hogg"]
year: 2025
venue: "Journal of the Audio Engineering Society"
arxiv: null
doi: "10.17743/jaes.2022.0218"
source: "https://doi.org/10.17743/jaes.2022.0218"
topics: [hrtf, personalization, interpolation, ml-dnn, measurement, spherical-harmonics]
seed_rank: 1751
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "realtime"
relevance_score: 9
lineage: hrtf-spatial-audio
cites:
  - title: "Directional Equalization of Sparse Head-Related Transfer Function Sets for Spatial Upsampling"
    url: "https://doi.org/10.1109/TASLP.2019.2908057"
    year: 2019
    arxiv: null
    doi: "10.1109/TASLP.2019.2908057"
  - title: "Analyzing head-related transfer function measurements using surface spherical harmonics"
    url: "https://doi.org/10.1121/1.423749"
    year: 1998
    arxiv: null
    doi: "10.1121/1.423749"
  - title: "A Survey on Machine Learning Techniques for Head-Related Transfer Function Individualization"
    url: "https://doi.org/10.1109/ojsp.2025.3528330"
    year: 2025
    arxiv: null
    doi: "10.1109/ojsp.2025.3528330"
see:
  - "1754-directional-equalization-of-sparse-head-related-transfer-function-sets"
  - "1711-analyzing-head-related-transfer-function-measurements-using-surface"
  - "1756-the-sonicom-hrtf-dataset"
  - "1740-a-survey-on-machine-learning-techniques-for-head-related-transfer"
---

# Head-Related Transfer Function Upsampling Using an Autoencoder-Based Generative Adversarial Network With Evaluation Framework

## One-sentence takeaway

HRTF spatial upsampling with an autoencoder-GAN plus an evaluation framework (Hu/Li/Picinali/Hogg JAES 2025).

## Why it matters here

Grids are expensive. This JAES 2025 GAN upsampler (SONICOM-adjacent authors) densifies HRTFs with a stated eval protocol. Anoptic: upsample SONICOM/CIPIC, then listen — don't trust GAN spectra alone.

## Key ideas

- **AE-GAN upsampling.** Sparse measured → dense spherical grid.
- **Evaluation framework.** Harvest personalization / interpolation / ML-DNN / SH.
- **JAES 2025.** DOI 10.17743/jaes.2022.0218 (publisher id).
- **Spatial densification** leftover of SH 1998 and SUpDEq 2019.

## Caveats

GAN mode collapse / timbre. Phase/ITD treatment. New. Not MagLS. Not a new measurement tower.

## Links

- DOI: https://doi.org/10.17743/jaes.2022.0218
