---
title: "Physical Reproduction of Materials with Specified Subsurface Scattering"
authors: ["Milos Hasan", "Martin Fuchs", "Wojciech Matusik", "Hanspeter Pfister", "Szymon Rusinkiewicz"]
year: 2010
venue: "ACM Transactions on Graphics (Proc. SIGGRAPH)"
arxiv: null
doi: "10.1145/1778765.1778798"
source: "https://doi.org/10.1145/1778765.1778798"
topics: [translucent-materials]
seed_rank: 1302
seed_batch: "sss-translucent-2026-08-25"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 8
lineage: translucent-materials
cites:
  - title: "A Practical Model for Subsurface Light Transport"
    url: "https://doi.org/10.1145/383259.383319"
    year: 2001
    arxiv: null
    doi: "10.1145/383259.383319"
  - title: "A Compact Factored Representation of Heterogeneous Subsurface Scattering"
    url: "https://doi.org/10.1145/1141911.1141950"
    year: 2006
    arxiv: null
    doi: "10.1145/1141911.1141950"
  - title: "Fabricating Spatially-Varying Subsurface Scattering"
    url: "https://doi.org/10.1145/1833349.1778799"
    year: 2010
    arxiv: null
    doi: "10.1145/1833349.1778799"
see:
  - "1245-a-practical-model-for-subsurface-light-transport"
  - "1285-a-compact-factored-representation-of-heterogeneous-subsurface"
  - "1300-fabricating-spatially-varying-subsurface-scattering"
---

# Physical Reproduction of Materials with Specified Subsurface Scattering

## One-sentence takeaway

Hasan et al.: fabricate a real translucent object matching a target BSSRDF.

## Problem

Predecessor chain Peers factored; Jensen 2001. This paper's job: Hasan et al.: fabricate a real translucent object matching a target BSSRDF.

## Design

Hasan et al.: fabricate a real translucent object matching a target BSSRDF. Lineage: Peers factored; Jensen 2001.

## Evidence

ACM Transactions on Graphics (Proc. SIGGRAPH) 2010. DOI `10.1145/1778765.1778798`. Hasan et al.: fabricate a real translucent object matching a target BSSRDF.

## Limitations

Read the cited predecessors before treating this as a drop-in Anoptic shader. Do not claim the library already implements it.

## Implications for Broadside

Anoptic has a forward+ mesh renderer and is betting on FMM+RC 3D GI. Skin is the first character-appearance hole: translucent dermis, not another BRDF lobe. Do not claim Anoptic already has SSS.

## Bottom line

Mint this 2010 ACM Transactions on Graphics (Proc. SIGGRAPH) paper. Hasan et al.: fabricate a real translucent object matching a target BSSRDF.

## Links

- DOI: [10.1145/1778765.1778798](https://doi.org/10.1145/1778765.1778798)
