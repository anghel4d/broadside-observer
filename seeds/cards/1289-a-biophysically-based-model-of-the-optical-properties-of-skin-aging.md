---
title: "A Biophysically‐Based Model of the Optical Properties of Skin Aging"
authors: ["Jose A. Iglesias‐Guitian", "Carlos Aliaga", "Adrian Jarabo", "Diego Gutierrez"]
year: 2015
venue: "Computer Graphics Forum"
arxiv: null
doi: "10.1111/cgf.12540"
source: "https://doi.org/10.1111/cgf.12540"
topics: [translucent-materials]
seed_rank: 1289
seed_batch: "sss-translucent-2026-08-25"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 8
lineage: translucent-materials
cites:
  - title: "A Biophysically‐Based Spectral Model of Light Interaction with Human Skin"
    url: "https://doi.org/10.1111/j.1467-8659.2004.00764.x"
    year: 2004
    arxiv: null
    doi: "10.1111/j.1467-8659.2004.00764.x"
  - title: "A Spectral BSSRDF for Shading Human Skin"
    url: "https://doi.org/10.2312/egwr/egsr06/409-417"
    year: 2006
    arxiv: null
    doi: "10.2312/egwr/egsr06/409-417"
  - title: "Optical Properties of Biological Tissues: A Review"
    url: "https://doi.org/10.1088/0031-9155/58/11/r37"
    year: 2013
    arxiv: null
    doi: "10.1088/0031-9155/58/11/r37"
see:
  - "1317-a-biophysically-based-spectral-model-of-light-interaction-with-human"
  - "1287-a-spectral-bssrdf-for-shading-human-skin"
  - "1294-optical-properties-of-biological-tissues-a-review"
---

# A Biophysically‐Based Model of the Optical Properties of Skin Aging

## One-sentence takeaway

Iglesias-Guitian 2015: biophysically based optical properties of aging skin — chromophores and structure over age.

## Problem

Donner spectral skin and BioSpec are static adult skin. Aging changes thickness, melanin, hemoglobin, collagen.

## Design

Map age to biophysical parameters, then to a spectral BSSRDF. Lineage: Donner spectral skin, BioSpec, Jacques tissue optics.

## Evidence

CGF 2015, DOI 10.1111/cgf.12540.

## Limitations

Model, not a capture. Surveys of skin appearance exist — do not mint surveys.

## Implications for Broadside

Anoptic has a forward+ mesh renderer and is betting on FMM+RC 3D GI. Skin is the first character-appearance hole: translucent dermis, not another BRDF lobe. Do not claim Anoptic already has SSS.

## Bottom line

Mint aging-skin optics. Cite Donner 2006 spectral and BioSpec 2004.

## Links

- DOI: [10.1111/cgf.12540](https://doi.org/10.1111/cgf.12540)
