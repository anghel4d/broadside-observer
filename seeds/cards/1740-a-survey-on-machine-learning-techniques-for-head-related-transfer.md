---
title: "A Survey on Machine Learning Techniques for Head-Related Transfer Function Individualization"
authors: ["Davide Fantini", "Michele Geronazzo", "Federico Avanzini", "Stavros Ntalampiras"]
year: 2025
venue: "IEEE Open Journal of Signal Processing"
arxiv: null
doi: "10.1109/ojsp.2025.3528330"
source: "https://doi.org/10.1109/ojsp.2025.3528330"
topics: [hrtf, personalization, ml-dnn]
seed_rank: 1740
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "realtime"
relevance_score: 10
lineage: hrtf-spatial-audio
cites:
  - title: "The CIPIC HRTF database"
    url: "https://doi.org/10.1109/aspaa.2001.969552"
    year: 2001
    arxiv: null
    doi: "10.1109/aspaa.2001.969552"
  - title: "HRTF Field: Unifying Measured HRTF Magnitude Representation with Neural Fields"
    url: "https://arxiv.org/abs/2210.15196"
    year: 2022
    arxiv: "2210.15196"
    doi: "10.1109/icassp49357.2023.10095801"
  - title: "Localization using nonindividualized head-related transfer functions"
    url: "https://doi.org/10.1121/1.407089"
    year: 1993
    arxiv: null
    doi: "10.1121/1.407089"
see:
  - "1676-the-cipic-hrtf-database"
  - "1728-hrtf-field-unifying-measured-hrtf-magnitude-representation-with-neural"
  - "1750-a-cross-evaluated-database-of-measured-and-simulated-hrtfs-including-3d"
  - "1756-the-sonicom-hrtf-dataset"
  - "1673-localization-using-nonindividualized-head-related-transfer-functions"
---

# A Survey on Machine Learning Techniques for Head-Related Transfer Function Individualization

## One-sentence takeaway

Fantini et al. 2025 IEEE OJSP: survey of *machine-learning HRTF individualization* — the map of DNNs on CIPIC/HUTUBS/SONICOM.

## Why it matters here

Don't mint twenty HRTF-GAN papers. This 2025 OA survey is the ML-personalization syllabus. Anoptic: pick a method from here, train on SONICOM/HUTUBS, listen with SADIE protocol, keep MagLS as the decoder not the individualizer.

## Key ideas

- **Taxonomy of ML individualization.** Anthropometry, autoencoders, GANs, neural fields.
- **IEEE Open Journal of Signal Processing 2025.** DOI 10.1109/ojsp.2025.3528330.
- **Listener personalization + ML-DNN** harvest tags; quality 10.
- **Points at databases** this batch already mints (CIPIC, HUTUBS, SONICOM).

## Caveats

Survey cutoff ~2025. Measured vs modeled training mixes. Doesn't replace Wenzel 1993 psychophysics. Not MagLS.

## Links

- DOI: https://doi.org/10.1109/ojsp.2025.3528330
