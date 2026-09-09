---
title: "HRTF Field: Unifying Measured HRTF Magnitude Representation with Neural Fields"
authors: ["You Zhang", "Yuxiang Wang", "Zhiyao Duan"]
year: 2022
venue: "ICASSP 2023 - 2023 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)"
arxiv: "2210.15196"
doi: "10.1109/icassp49357.2023.10095801"
source: "https://arxiv.org/abs/2210.15196"
topics: [hrtf, anthropometry, ml-dnn, measurement]
seed_rank: 1736
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "realtime"
relevance_score: 9
lineage: hrtf-spatial-audio
cites:
  - title: "The CIPIC HRTF database"
    url: "https://doi.org/10.1109/aspaa.2001.969552"
    year: 2001
    arxiv: null
    doi: "10.1109/aspaa.2001.969552"
see:
  - "1684-the-cipic-hrtf-database"
  - "1748-a-survey-on-machine-learning-techniques-for-head-related-transfer"
  - "1758-a-cross-evaluated-database-of-measured-and-simulated-hrtfs-including-3d"
---

# HRTF Field: Unifying Measured HRTF Magnitude Representation with Neural Fields

## One-sentence takeaway

HRTF Field: represent HRTF *magnitude* as a neural field over space/anthropometry so you query continuous directions instead of a measured grid (Zhang/Wang/Duan, arXiv 2210.15196, ICASSP 2023).

## Why it matters here

Grids are sparse; ML can interpolate. This is the neural-field HRTF card (not MagLS, not CIPIC itself). Anoptic: treat as an interpolator trained on CIPIC/HUTUBS/SONICOM, validate with SADIE listening, don't skip measurement caveats.

## Key ideas

- **Neural field on HRTF magnitude.** Continuous spatial query.
- **ICASSP 2023 / arXiv 2210.15196.** Harvest ML-DNN.
- **Unifying measured sets** in one representation (the title claim).
- **Personalization features** via anthropometry conditioning.

## Caveats

Magnitude vs phase/ITD (usual neural HRTF footgun). Data-hungry; measured vs modeled mix. ~20 cites. Not a remint of any FMM/filter card. Offline train, runtime MLP.

## Links

- arXiv abs: https://arxiv.org/abs/2210.15196
- PDF: https://arxiv.org/pdf/2210.15196
- DOI: https://doi.org/10.1109/icassp49357.2023.10095801
