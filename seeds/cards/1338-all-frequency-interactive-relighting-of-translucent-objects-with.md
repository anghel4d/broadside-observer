---
title: "All-Frequency Interactive Relighting of Translucent Objects with Single and Multiple Scattering"
authors: ["Rui Wang", "John Tran", "David Luebke"]
year: 2005
venue: "SIGGRAPH / TOG"
arxiv: null
doi: "10.1145/1073204.1073333"
source: "https://doi.org/10.1145/1073204.1073333"
topics: [subsurface-scattering]
seed_rank: 1338
seed_batch: "sss-translucent-2026-08-25"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 8
lineage: subsurface-scattering
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
  - title: "A Rapid Hierarchical Rendering Technique for Translucent Materials"
    url: "https://doi.org/10.1145/566570.566619"
    year: 2002
    arxiv: null
    doi: "10.1145/566570.566619"
see:
  - "152-the-rendering-equation"
  - "1245-a-practical-model-for-subsurface-light-transport"
  - "1256-a-rapid-hierarchical-rendering-technique-for-translucent-materials"
---

# All-Frequency Interactive Relighting of Translucent Objects with Single and Multiple Scattering

## One-sentence takeaway

PRT of the full Jensen BSSRDF (single+multiple).

## Problem

Predecessor chain JB02+JMLH01 → all-frequency translucent. This paper's job: PRT of the full Jensen BSSRDF (single+multiple).

## Design

PRT of the full Jensen BSSRDF (single+multiple). Lineage: JB02+JMLH01 → all-frequency translucent.

## Evidence

SIGGRAPH / TOG 2005. DOI `10.1145/1073204.1073333`. PRT of the full Jensen BSSRDF (single+multiple).

## Limitations

Read the cited predecessors before treating this as a drop-in Anoptic shader. Do not claim the library already implements it.

## Implications for Broadside

Anoptic has a forward+ mesh renderer and is betting on FMM+RC 3D GI. Translucent materials / SSS is the missing appearance model for skin, marble, wax, leaves, and interiors. Do not claim they already have SSS.

## Bottom line

Mint this 2005 SIGGRAPH / TOG paper. PRT of the full Jensen BSSRDF (single+multiple).

## Links

- DOI: [10.1145/1073204.1073333](https://doi.org/10.1145/1073204.1073333)
