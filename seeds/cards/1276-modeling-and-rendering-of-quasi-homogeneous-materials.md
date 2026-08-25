---
title: "Modeling and rendering of quasi-homogeneous materials"
authors: ["Xin Tong", "Jiaping Wang", "Stephen Lin", "Baining Guo", "Heung-Yeung Shum"]
year: 2005
venue: "SIGGRAPH"
arxiv: null
doi: "10.1145/1186822.1073311"
source: "https://doi.org/10.1145/1186822.1073311"
topics: [translucent-materials]
seed_rank: 1276
seed_batch: "sss-translucent-2026-08-25"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 9
lineage: translucent-materials
cites:
  - title: "The Rendering Equation"
    url: "https://doi.org/10.1145/15922.15902"
    year: 1986
    arxiv: null
    doi: "10.1145/15922.15902"
  - title: "A Practical Model for Subsurface Light Transport"
    url: "https://doi.org/10.1145/383259.383319"
    year: 2001
    arxiv: null
    doi: "10.1145/383259.383319"
  - title: "DISCO: Acquisition of Translucent Objects"
    url: "https://doi.org/10.1145/1015706.1015807"
    year: 2004
    arxiv: null
    doi: "10.1145/1015706.1015807"
see:
  - "152-the-rendering-equation"
  - "1245-a-practical-model-for-subsurface-light-transport"
  - "1326-disco-acquisition-of-translucent-objects"
---

# Modeling and rendering of quasi-homogeneous materials

## One-sentence takeaway

Tong 2005 quasi-homogeneous materials: appearance as a compact spatial + angular factorization, not a full heterogeneous BSSRDF.

## Problem

Jensen 2001 is homogeneous; DISCO captures raw heterogeneous SSS that is too big to render. Need a quasi-homogeneous middle.

## Design

Factor appearance into a slowly varying spatial field times a compact angular / profile basis. Lineage: Jensen 2001, DISCO, factored appearance.

## Evidence

SIGGRAPH 2005, DOI 10.1145/1186822.1073311. Parent of Peers 2006 factored 8D SSS.

## Limitations

Quasi-homogeneous assumption. Not first-principles transport.

## Implications for Broadside

Capture papers say which parameters to store (σs, σa, g, layered weights), not how Anoptic evaluates them. The renderer still lacks an SSS operator. Do not claim they already have SSS.

## Bottom line

Mint Tong 2005. Cite JMLH01 and DISCO.

## Links

- DOI: [10.1145/1186822.1073311](https://doi.org/10.1145/1186822.1073311)
