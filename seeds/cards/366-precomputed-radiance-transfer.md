---
title: "Precomputed Radiance Transfer"
authors:
  - "Peter-Pike Sloan"
  - "Jan Kautz"
  - "John Snyder"
year: 2002
venue: "SIGGRAPH"
arxiv: null
doi: "10.1145/566570.566612"
source: "https://doi.org/10.1145/566570.566612"
topics:
  - prt
  - gi
seed_rank: 366
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 8
lineage: radiance-cascades
cites:
  - title: "An Efficient Representation for Irradiance Environment Maps"
    url: "https://doi.org/10.1145/383259.383317"
    year: 2001
    doi: "10.1145/383259.383317"
  - title: "The Irradiance Volume"
    url: "https://doi.org/10.1109/38.656788"
    year: 1998
    doi: "10.1109/38.656788"
  - title: "Dynamic Diffuse Global Illumination with Ray-Traced Irradiance Fields"
    url: "https://jcgt.org/published/0008/02/01/"
    year: 2019
see:
  - "367-an-efficient-representation-for-irradiance-environment-maps"
  - "451-the-irradiance-volume"
  - "318-dynamic-diffuse-global-illumination-with-ray-traced-irradian"
---

# Precomputed Radiance Transfer

## One-sentence takeaway

Project lighting and transfer into a compact basis so glossy/diffuse responses can be relit from precomputed transport.

## Why it matters here

Classical angular-compression foil for the RC spine: PRT shows how SH/basis transport solved dynamic lights with static geometry — the opposite trade RC makes for fully dynamic scenes.

## Key ideas

- Precompute how light transfers through a static scene into low-order coefficients.
- Enables real-time relighting and soft GI effects under the static-geometry assumption.
- Pairs with irradiance environment map SH projection for distant lighting.

## Caveats

- Precomputation and static geometry assumptions — not a competitor to dynamic RC/DDGI without heavy extensions.

## Links

- DOI: [10.1145/566570.566612](https://doi.org/10.1145/566570.566612)
- URL: https://doi.org/10.1145/566570.566612
