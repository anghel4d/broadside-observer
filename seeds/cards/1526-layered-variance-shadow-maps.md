---
title: "Layered variance shadow maps"
authors: ["Andrew Lauritzen", "Michael McCool"]
year: 2008
venue: "I3D"
arxiv: null
doi: "10.1145/1342250.1342271"
source: "https://doi.org/10.1145/1342250.1342271"
topics: [LVSM, filterable-SM]
seed_rank: 1526
seed_batch: "di-penumbra-2026-09-02"
reviewed: "2026-09-02"
pool: "graphics"
relevance_score: 8
lineage: filterable-shadow-maps
cites:
  - title: "Variance Shadow Maps"
    url: "https://www.punkuser.net/vsm/vsm_paper.pdf"
    year: 2006
    arxiv: null
    doi: "10.1145/1111411.1111440"
  - title: "Exponential Shadow Maps"
    url: "https://lsi.ugr.es/jdar/informatica/doctorado/gi2008.pdf"
    year: 2008
    arxiv: null
    doi: "10.20380/GI2008.07"
  - title: "Moment Shadow Mapping"
    url: "https://doi.org/10.1145/2699276.2699277"
    year: 2015
    arxiv: null
    doi: "10.1145/2699276.2699277"
see:
  - "359-variance-shadow-maps"
---

# Layered variance shadow maps

## One-sentence takeaway

Lauritzen LVSM: split the depth range into layers and store VSM moments per layer — the practical VSM that tames light bleeding. (Donnelly VSM is card 359.)

## Why it matters here

VSM 359 is live and bleeds through. This I3D 2008 paper is the production patch: layer the distribution so a Chebyshev bound is local. ESM/MSM (this batch) are later encodings; LVSM is the VSM-specific fix.

## Key ideas

- **Depth layers.** Partition Z; each layer has its own (μ, σ²). A receiver only queries the layer(s) that could occlude it.
- **Bleed is a global-moment problem.** One Chebyshev over the whole frustum treats distant occluders as variance; layers restore tightness.
- **Engine practice.** Many 'VSM' ships were LVSM or EVSM; cite this when you mean the bleed fix.
- **Evidence.** I3D 2008, doi `10.1145/1342250.1342271`.

## Caveats

- Layer count vs memory; leaking at layer boundaries. Not a remint of VSM 359. Fuzzy overlap with 'layered variance' vs Donnelly is why the why-line names card 359.

## Links

- DOI: https://doi.org/10.1145/1342250.1342271
