---
title: "Translucent Shadow Maps"
authors: ["Carsten Dachsbacher", "Marc Stamminger"]
year: 2003
venue: "EGSR"
arxiv: null
doi: "10.2312/egwr/egsr03/197-206"
source: "https://doi.org/10.2312/egwr/egsr03/197-206"
topics: [subsurface-scattering]
seed_rank: 1314
seed_batch: "sss-translucent-2026-08-25"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 8
lineage: subsurface-scattering
cites:
  - title: "Realistic Human Face Rendering for \"The Matrix Reloaded\""
    url: "https://doi.org/10.1145/965400.965470"
    year: 2003
    arxiv: null
    doi: "10.1145/965400.965470"
see:
  - "1281-realistic-human-face-rendering-for-the-matrix-reloaded"
---

# Translucent Shadow Maps

## One-sentence takeaway

Translucent shadow maps; thin-part transmission.

## Problem

Predecessor chain Green/Borshukov miss transmission → TSM. This paper's job: Translucent shadow maps; thin-part transmission.

## Design

Translucent shadow maps; thin-part transmission. Lineage: Green/Borshukov miss transmission → TSM.

## Evidence

EGSR 2003. DOI `10.2312/egwr/egsr03/197-206`. Translucent shadow maps; thin-part transmission.

## Limitations

Read the cited predecessors before treating this as a drop-in Anoptic shader. Do not claim the library already implements it.

## Implications for Broadside

Screen-space and convolution SSS are cheap previews of the same missing look. Anoptic still needs a real BSSRDF / path-traced SSS under FMM+RC, not a fullscreen blur. Do not claim they already have SSS.

## Bottom line

Mint this 2003 EGSR paper. Translucent shadow maps; thin-part transmission.

## Links

- DOI: [10.2312/egwr/egsr03/197-206](https://doi.org/10.2312/egwr/egsr03/197-206)
