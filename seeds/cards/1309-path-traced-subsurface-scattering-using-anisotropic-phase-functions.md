---
title: "Path Traced Subsurface Scattering using Anisotropic Phase Functions and Non-Exponential Free Flights"
authors: ["Magnus Wrenninge", "Ryusuke Villemin", "Christophe Hery"]
year: 2017
venue: "Pixar / SIGGRAPH Talks"
arxiv: null
doi: null
source: "https://graphics.pixar.com/library/PathTracedSubsurface/paper.pdf"
topics: [subsurface-scattering]
seed_rank: 1309
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
  - title: "Practical and Controllable Subsurface Scattering for Production Path Tracing"
    url: "https://doi.org/10.1145/2897839.2927433"
    year: 2016
    arxiv: null
    doi: "10.1145/2897839.2927433"
see:
  - "152-the-rendering-equation"
  - "1258-practical-and-controllable-subsurface-scattering-for-production-path"
---

# Path Traced Subsurface Scattering using Anisotropic Phase Functions and Non-Exponential Free Flights

## One-sentence takeaway

Production random-walk SSS with anisotropy + non-exponential.

## Problem

Predecessor chain Chiang16 exponential assumption → Wrenninge17. This paper's job: Production random-walk SSS with anisotropy + non-exponential.

## Design

Production random-walk SSS with anisotropy + non-exponential. Lineage: Chiang16 exponential assumption → Wrenninge17.

## Evidence

Pixar / SIGGRAPH Talks 2017. no DOI — use the source URL. Production random-walk SSS with anisotropy + non-exponential.

## Limitations

Talk or course notes, not a full TOG derivation. Use the PDF/DOI in Links; do not invent a journal version.

## Implications for Broadside

Anoptic has a forward+ mesh renderer and is betting on FMM+RC 3D GI. Skin is the first character-appearance hole: translucent dermis, not another BRDF lobe. Do not claim Anoptic already has SSS.

## Bottom line

Mint this 2017 Pixar / SIGGRAPH Talks paper. Production random-walk SSS with anisotropy + non-exponential.

## Links

- Source: https://graphics.pixar.com/library/PathTracedSubsurface/paper.pdf
