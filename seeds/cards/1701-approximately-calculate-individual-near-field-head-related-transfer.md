---
title: "Approximately calculate individual near-field head-related transfer function using an ellipsoidal head and pinnae model"
authors: ["Yuanqing Rui", "Guangzheng Yu", "Bosun Xie"]
year: 2012
venue: "The Journal of the Acoustical Society of America"
arxiv: null
doi: "10.1121/1.4755383"
source: "https://doi.org/10.1121/1.4755383"
topics: [hrtf, anthropometry, measurement, near-field, itd-ild]
seed_rank: 1701
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "realtime"
relevance_score: 10
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
  - title: "Approximating the head-related transfer function using simple geometric models of the head and torso"
    url: "https://doi.org/10.1121/1.1508780"
    year: 2002
    arxiv: null
    doi: "10.1121/1.1508780"
see:
  - "1691-auditory-localization-of-nearby-sources-head-related-transfer-functions"
  - "1697-a-psychophysical-evaluation-of-near-field-head-related-transfer"
  - "1692-boundary-element-method-calculation-of-individual-head-related-transfer"
  - "1713-approximating-the-head-related-transfer-function-using-simple-geometric"
---

# Approximately calculate individual near-field head-related transfer function using an ellipsoidal head and pinnae model

## One-sentence takeaway

Ellipsoidal head + pinnae: cheap analytic-ish individual *near-field* HRTF from a few anthropometric numbers.

## Why it matters here

BEM (1692) is heavy; DVF (1697) ignores pinna. Rui/Yu/Xie 2013 JASA fit an ellipsoid-plus-pinnae geometric model so near-field HRTF personalization is a closed-form-ish filter. Anoptic character creator sliders → HRTF, with eyes open about error vs SADIE.

## Key ideas

- **Geometry model.** Head ellipsoid + pinna mesh/analytic, not a full BEM scan.
- **Near-field target.** Distance-dependent, harvest ITD-ILD.
- **JASA 2013 (2012 vol).** Chinese group (Xie is a spatial-hearing textbook name).
- **Modeled HRTF.** Cheap compared to Katz BEM or a full arc.

## Caveats

Model mismatch vs real pinnae. Not a measured database. Elevation notches are the usual failure. Forced geometric head model.

## Links

- DOI: https://doi.org/10.1121/1.4755383
