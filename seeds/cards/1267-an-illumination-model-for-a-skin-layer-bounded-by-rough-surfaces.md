---
title: "An Illumination Model for a Skin Layer Bounded by Rough Surfaces"
authors: ["Jos Stam"]
year: 2001
venue: "EGWR"
arxiv: null
doi: "10.2312/egwr/egwr01/039-052"
source: "https://doi.org/10.2312/egwr/egwr01/039-052"
topics: [subsurface-scattering, translucent-materials]
seed_rank: 1267
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
  - title: "Reflection from Layered Surfaces due to Subsurface Scattering"
    url: "https://doi.org/10.1145/166117.166139"
    year: 1993
    arxiv: null
    doi: "10.1145/166117.166139"
see:
  - "152-the-rendering-equation"
  - "1247-reflection-from-layered-surfaces-due-to-subsurface-scattering"
---

# An Illumination Model for a Skin Layer Bounded by Rough Surfaces

## One-sentence takeaway

Stam 2001 skin: RTE in a rough-bounded slab — the parallel-to-dipole illumination model for skin.

## Problem

Hanrahan–Krueger is layered but smooth-ish; JMLH01 is a dipole BSSRDF. Need a skin layer with rough microfacet boundaries and an RTE interior.

## Design

Illumination model for a skin layer bounded by rough surfaces; discrete-ordinate / BRDF-style evaluation. Lineage: HK93 + RTE → Stam01 (parallel to dipole).

## Evidence

EGWR 2001, DOI 10.2312/egwr/egwr01/039-052. Same year as JMLH01; different approximation.

## Limitations

Single slab, not a production BSSRDF. Donner 2005 and d'Eon 2007 became the skin stack.

## Implications for Broadside

Anoptic has a forward+ mesh renderer and is betting on FMM+RC 3D GI. Skin is the first character-appearance hole: translucent dermis, not another BRDF lobe. Do not claim Anoptic already has SSS.

## Bottom line

Mint Stam 2001 skin. Cite Hanrahan–Krueger. Same year as the dipole, different paper.

## Links

- DOI: [10.2312/egwr/egwr01/039-052](https://doi.org/10.2312/egwr/egwr01/039-052)
