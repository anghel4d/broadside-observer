---
title: "Reconstructing individualized near-field head-related transfer functions from a small set of far-field data based on tensor decomposition"
authors: ["Tong Zhao", "Bosun Xie", "Jun Zhu"]
year: 2026
venue: "The Journal of the Acoustical Society of America"
arxiv: null
doi: "10.1121/10.0046400"
source: "https://doi.org/10.1121/10.0046400"
topics: [hrtf, personalization, measurement, near-field]
seed_rank: 1732
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "realtime"
relevance_score: 9
lineage: hrtf-spatial-audio
cites:
  - title: "Auditory localization of nearby sources. Head-related transfer functions"
    url: "https://doi.org/10.1121/1.427180"
    year: 1999
    arxiv: null
    doi: "10.1121/1.427180"
  - title: "A psychophysical evaluation of near-field head-related transfer functions synthesized using a distance variation function"
    url: "https://doi.org/10.1121/1.3081395"
    year: 2009
    arxiv: null
    doi: "10.1121/1.3081395"
  - title: "The CIPIC HRTF database"
    url: "https://doi.org/10.1109/aspaa.2001.969552"
    year: 2001
    arxiv: null
    doi: "10.1109/aspaa.2001.969552"
see:
  - "1691-auditory-localization-of-nearby-sources-head-related-transfer-functions"
  - "1697-a-psychophysical-evaluation-of-near-field-head-related-transfer"
  - "1676-the-cipic-hrtf-database"
---

# Reconstructing individualized near-field head-related transfer functions from a small set of far-field data based on tensor decomposition

## One-sentence takeaway

Tensor-decompose a small far-field HRTF set into individualized *near-field* HRTFs (Zhao/Xie/Zhu JASA 2026).

## Why it matters here

Near-field personalization without a distance sweep. 2026 JASA tensor method: reconstruct NF HRTF from sparse FF data. Anoptic cockpit audio: this plus Brungart caveats; dataset still matters (CIPIC/HUTUBS).

## Key ideas

- **Tensor decomposition.** Shared structure across distance/subject/direction.
- **Far-field few → near-field individual.** Harvest personalization / near-field.
- **JASA 2026.** DOI 10.1121/10.0046400.
- **Modeled reconstruction,** needs a measured FF seed.

## Caveats

New (2026). Reconstruction error vs a true NF measurement. Not MagLS. Not BEM Katz. Forced tensor model.

## Links

- DOI: https://doi.org/10.1121/10.0046400
