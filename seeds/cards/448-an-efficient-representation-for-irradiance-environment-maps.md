---
title: "An Efficient Representation for Irradiance Environment Maps"
authors:
  - "Ravi Ramamoorthi"
  - "Pat Hanrahan"
year: 2001
venue: "SIGGRAPH"
arxiv: null
doi: "10.1145/383259.383317"
source: "https://doi.org/10.1145/383259.383317"
topics:
  - ibl
  - sh
seed_rank: 448
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 8
lineage: radiance-cascades
cites:
  - title: "Precomputed Radiance Transfer"
    url: "https://doi.org/10.1145/566570.566612"
    year: 2002
    doi: "10.1145/566570.566612"
  - title: "The Irradiance Volume"
    url: "https://doi.org/10.1109/38.656788"
    year: 1998
    doi: "10.1109/38.656788"
see:
  - "447-precomputed-radiance-transfer"
  - "662-the-irradiance-volume"
---

# An Efficient Representation for Irradiance Environment Maps

## One-sentence takeaway

Order-2 spherical harmonics suffice to represent irradiance environment maps for diffuse shading.

## Why it matters here

Angular-basis micro-classic on the RC thread: explains why so many probe/LPV systems store SH irradiance rather than full radiance.

## Key ideas

- Diffuse irradiance from distant illumination is very low-frequency — 9 SH coefficients often suffice.
- Became the default compact representation inside LPV and many probe GI systems.

## Caveats

- Distant/environment lighting assumption; not a full dynamic GI solution.

## Links

- DOI: [10.1145/383259.383317](https://doi.org/10.1145/383259.383317)
- URL: https://doi.org/10.1145/383259.383317
