---
title: "Localization using nonindividualized head-related transfer functions"
authors: ["Elizabeth M. Wenzel", "Marianne Arruda", "Doris J. Kistler", "Frederic L. Wightman"]
year: 1993
venue: "The Journal of the Acoustical Society of America"
arxiv: null
doi: "10.1121/1.407089"
source: "https://doi.org/10.1121/1.407089"
topics: [hrtf, personalization, measurement, itd-ild, headphone]
seed_rank: 1681
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
see:
  - "1675-hrtf-measurements-of-a-kemar"
---

# Localization using nonindividualized head-related transfer functions

## One-sentence takeaway

Nonindividualized (generic) HRTFs still localize in azimuth; elevation and front/back confusions stay high — the 1993 JASA warning against one dummy for everyone.

## Why it matters here

Shipping KEMAR/SADIE generic sets is a product choice with known error. Wenzel/Arruda/Kistler/Wightman quantify localization with nonindividual HRTFs vs each listener's own. Anoptic should expect cone-of-confusion errors unless you personalize (CIPIC anthropometry, ML individualization 1748).

## Key ideas

- **Own vs generic HRTF.** Controlled localization experiment, NASA/Wisconsin lineage.
- **Azimuth ok, elevation/front-back not.** Pattern that still shows up in SADIE II eval (1691).
- **Headphone / virtual source.** Classic spatial-hearing methods (pointing, confusion rates).
- **JASA 1993.** ~615 cites in harvest note — the personalization motivation paper.

## Caveats

1993 HRTF grids and headphone EQ are dated vs SADIE/HUTUBS. Doesn't measure near-field (1699). Does not itself ship a database (that's CIPIC/KEMAR).

## Links

- DOI: https://doi.org/10.1121/1.407089
