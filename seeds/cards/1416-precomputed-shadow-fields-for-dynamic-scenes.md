---
title: "Precomputed Shadow Fields for Dynamic Scenes"
authors:
  - "Kun Zhou"
  - "Yaohua Hu"
  - "Stephen Lin"
  - "Baining Guo"
  - "Heung-Yeung Shum"
year: 2005
venue: "SIGGRAPH / TOG"
arxiv: null
doi: "10.1145/1073204.1073319"
source: "https://dl.acm.org/doi/10.1145/1073204.1073319"
topics:
  - "prt"
  - "shadow-fields"
  - "lightmaps"
  - "production"
seed_rank: 1416
seed_batch: "gi-nature-2026-08-27"
reviewed: "2026-08-27"
pool: "graphics"
relevance_score: 10
lineage: china-graphics
cites:
  - title: "Precomputed Radiance Transfer"
    url: "https://doi.org/10.1145/566570.566612"
    year: 2002
    arxiv: null
    doi: "10.1145/566570.566612"
  - title: "Shadow Algorithms for Computer Graphics"
    url: "https://doi.org/10.1145/800064.801269"
    year: 1977
    arxiv: null
    doi: "10.1145/800064.801269"
see:
  - "366-precomputed-radiance-transfer"
  - "1043-shadow-algorithms-for-computer-graphics"
---

# Precomputed Shadow Fields for Dynamic Scenes

## One-sentence takeaway

Source-radiance-field idea that shipped in Halo 3 lightmap generation/compression (Zhou credit). The production GI artifact.

## Why it's lovely

Why you might love this: MSRA shadow fields, then Halo 3. A precomputed field you can move through a dynamic scene.

## Problem

Classical shadow maps don't combine; PRT visibility is per-receiver and static. A dynamic object needs a field of source radiance/occlusion you can query from the rest of the scene.

## Design

- Precomputed shadow fields: an object carries a field of occlusion/source radiance.
- Runtime composition for dynamic scenes.
- SIGGRAPH 2005 / TOG, DOI 10.1145/1073204.1073319.
- Slightly pre-2006; production credit in Halo 3 lightmap generation/compression.

## Evidence

Halo 3's lighting/compression story cites Zhou's shadow-field idea. THE production GI artifact named in the harvest.

## Limitations

Precompute per object. Not Lumen. Not a remint of PRT (366) — this is the field-around-an-object move.

## Implications for Broadside

Anoptic baked GI with moving props: shadow fields, not a full rebase. Halo-shaped. Keep PRT (366) as the receiver-basis cousin.

## Bottom line

Mint Zhou shadow fields. Halo 3's MSRA paper.

## Links

- DOI: [10.1145/1073204.1073319](https://doi.org/10.1145/1073204.1073319)
- URL: https://dl.acm.org/doi/10.1145/1073204.1073319
