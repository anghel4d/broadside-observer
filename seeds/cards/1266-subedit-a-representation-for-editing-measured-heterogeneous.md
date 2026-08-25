---
title: "SubEdit: A Representation for Editing Measured Heterogeneous Subsurface Scattering"
authors: ["Ying Song", "Xin Tong", "Fabio Pellacini", "Pieter Peers"]
year: 2009
venue: "ACM Transactions on Graphics (Proc. SIGGRAPH)"
arxiv: null
doi: "10.1145/1531326.1531337"
source: "https://doi.org/10.1145/1531326.1531337"
topics: [translucent-materials]
seed_rank: 1266
seed_batch: "sss-translucent-2026-08-25"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 9
lineage: translucent-materials
cites:
  - title: "DISCO: Acquisition of Translucent Objects"
    url: "https://doi.org/10.1145/1015706.1015807"
    year: 2004
    arxiv: null
    doi: "10.1145/1015706.1015807"
  - title: "Modeling and rendering of quasi-homogeneous materials"
    url: "https://doi.org/10.1145/1186822.1073311"
    year: 2005
    arxiv: null
    doi: "10.1145/1186822.1073311"
  - title: "A Compact Factored Representation of Heterogeneous Subsurface Scattering"
    url: "https://doi.org/10.1145/1141911.1141950"
    year: 2006
    arxiv: null
    doi: "10.1145/1141911.1141950"
see:
  - "1326-disco-acquisition-of-translucent-objects"
  - "1276-modeling-and-rendering-of-quasi-homogeneous-materials"
  - "1285-a-compact-factored-representation-of-heterogeneous-subsurface"
---

# SubEdit: A Representation for Editing Measured Heterogeneous Subsurface Scattering

## One-sentence takeaway

SubEdit: edit measured heterogeneous SSS as a compact, intuitive representation rather than an 8D table.

## Problem

Peers 2006 factored 8D SSS and DISCO capture raw profiles; artists cannot edit them. Need a representation that preserves appearance under edits.

## Design

SubEdit basis / editing ops on measured heterogeneous subsurface. Lineage: Peers 2006 factored, DISCO, Tong quasi-homogeneous.

## Evidence

TOG / SIGGRAPH 2009, DOI 10.1145/1531326.1531337.

## Limitations

Editing measured data, not a first-principles BSSRDF. Needs a capture rig.

## Implications for Broadside

Capture papers say which parameters to store (σs, σa, g, layered weights), not how Anoptic evaluates them. The renderer still lacks an SSS operator. Do not claim they already have SSS.

## Bottom line

Mint SubEdit. Cite Peers 2006 and DISCO.

## Links

- DOI: [10.1145/1531326.1531337](https://doi.org/10.1145/1531326.1531337)
