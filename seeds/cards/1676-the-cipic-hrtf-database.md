---
title: "The CIPIC HRTF database"
authors: ["V.R. Algazi", "R.O. Duda", "D.M. Thompson", "C. Avendano"]
year: 2001
venue: "Proceedings of the 2001 IEEE Workshop on the Applications of Signal Processing to Audio and Acoustics (Cat. No.01TH8575)"
arxiv: null
doi: "10.1109/aspaa.2001.969552"
source: "https://doi.org/10.1109/aspaa.2001.969552"
topics: [hrtf, measurement]
seed_rank: 1676
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "realtime"
relevance_score: 10
lineage: hrtf-spatial-audio
cites:
  - title: "HRTF measurements of a KEMAR"
    url: "https://doi.org/10.1121/1.412407"
    year: 1995
    arxiv: null
    doi: "10.1121/1.412407"
  - title: "Localization using nonindividualized head-related transfer functions"
    url: "https://doi.org/10.1121/1.407089"
    year: 1993
    arxiv: null
    doi: "10.1121/1.407089"
see:
  - "1667-hrtf-measurements-of-a-kemar"
  - "1673-localization-using-nonindividualized-head-related-transfer-functions"
---

# The CIPIC HRTF database

## One-sentence takeaway

CIPIC: public HRTF database plus anthropometry (head/pinna measurements) — the open personalization set after KEMAR.

## Why it matters here

Need more than one dummy. Algazi/Duda/Thompson/Avendano 2001 WASPAA release ~45 subjects, dense spatial grid, and the caliper table every HRTF-ML paper still trains on. Anoptic personalization starts here (and HUTUBS/SONICOM later), not by inventing a new dummy.

## Key ideas

- **Subject HRTFs + anthropometry.** Correlate pinna/head size with filters.
- **WASPAA 2001.** UC Davis CIPIC lab; ~1000-cite class.
- **Measured, far-field.** Complementary to KEMAR (1667) and SADIE II (1683).
- **Personalization substrate.** Input features for later DNN individualization (1740).

## Caveats

Spatial resolution and bandwidth dated vs SADIE/FABIAN/SONICOM. Measurement error and headphone EQ still bite. Not a renderer; not near-field.

## Links

- DOI: https://doi.org/10.1109/aspaa.2001.969552
