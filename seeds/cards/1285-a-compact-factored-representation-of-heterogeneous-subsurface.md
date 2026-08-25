---
title: "A Compact Factored Representation of Heterogeneous Subsurface Scattering"
authors: ["Pieter Peers", "Karl vom Berge", "Wojciech Matusik", "Ravi Ramamoorthi", "Jason Lawrence", "Szymon Rusinkiewicz", "Philip Dutré"]
year: 2006
venue: "SIGGRAPH / TOG"
arxiv: null
doi: "10.1145/1141911.1141950"
source: "https://doi.org/10.1145/1141911.1141950"
topics: [subsurface-scattering, translucent-materials]
seed_rank: 1285
seed_batch: "sss-translucent-2026-08-25"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 8
lineage: translucent-materials
cites:
  - title: "DISCO: Acquisition of Translucent Objects"
    url: "https://doi.org/10.1145/1015706.1015807"
    year: 2004
    arxiv: null
    doi: "10.1145/1015706.1015807"
see:
  - "1326-disco-acquisition-of-translucent-objects"
---

# A Compact Factored Representation of Heterogeneous Subsurface Scattering

## One-sentence takeaway

Peers 2006 factored 8D heterogeneous SSS: compact representation of measured translucent materials.

## Problem

DISCO captures raw SSS that is too big to store or edit. Need a factored 8D function.

## Design

Factor the heterogeneous BSSRDF into compact spatial / angular terms. Lineage: DISCO → factored 8D SSS.

## Evidence

SIGGRAPH / TOG 2006, DOI 10.1145/1141911.1141950. Parent of SubEdit 2009.

## Limitations

Representation of measured data, not a first-principles solver. Needs DISCO-class capture.

## Implications for Broadside

Capture papers say which parameters to store (σs, σa, g, layered weights), not how Anoptic evaluates them. The renderer still lacks an SSS operator. Do not claim they already have SSS.

## Bottom line

Mint Peers 2006. Cite DISCO.

## Links

- DOI: [10.1145/1141911.1141950](https://doi.org/10.1145/1141911.1141950)
