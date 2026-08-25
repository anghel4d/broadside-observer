---
title: "Reflection from Layered Surfaces due to Subsurface Scattering"
authors: ["Pat Hanrahan", "Wolfgang Krueger"]
year: 1993
venue: "SIGGRAPH"
arxiv: null
doi: "10.1145/166117.166139"
source: "https://doi.org/10.1145/166117.166139"
topics: [subsurface-scattering, translucent-materials]
seed_rank: 1247
seed_batch: "sss-translucent-2026-08-25"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 10
lineage: translucent-materials
cites:
  - title: "Radiative Transfer"
    url: "https://archive.org/details/radiativetransfe0000chan"
    year: 1950
    arxiv: null
    doi: null
  - title: "The Rendering Equation"
    url: "https://doi.org/10.1145/15922.15902"
    year: 1986
    arxiv: null
    doi: "10.1145/15922.15902"
see:
  - "152-the-rendering-equation"
  - "1252-radiative-transfer"
---

# Reflection from Layered Surfaces due to Subsurface Scattering

## One-sentence takeaway

Discrete-ordinate layered subsurface reflection — graphics discovers SSS for paint, skin, and leaves.

## Problem

BRDFs assumed scattering happened at a surface. Chandrasekhar's layered RTE was astronomy, not a shader.

## Design

Solve one-dimensional RTE in stacked homogeneous layers with discrete ordinates; add rough-interface reflection. Skin, leaves, and paint as layered participating media.

## Evidence

SIGGRAPH 1993, DOI 10.1145/166117.166139. Direct predecessor of JMLH01 and Stam 2001 skin.

## Limitations

1D layers, no lateral diffusion BSSRDF. Expensive for the time. Dipole (2001) is the cheap replacement, not a generalization of the ordinates.

## Implications for Broadside

Anoptic's mesh path can take a layered BSDF at a hit; coats, varnish, and thin slabs are the same missing appearance stack as SSS. FMM+RC is the far-field GI bet — this paper is the local layered operator. Do not claim Anoptic already has SSS.

## Bottom line

Mint Hanrahan–Krueger as the graphics SSS origin. Cite Chandrasekhar; see Kajiya RE 152.

## Links

- DOI: [10.1145/166117.166139](https://doi.org/10.1145/166117.166139)
