---
title: "A Survey of Real-time Soft Shadows Algorithms"
authors: ["Jean-Marc Hasenfratz", "Marc Lapierre", "Nicolas Holzschuch", "François Sillion"]
year: 2003
venue: "Computer Graphics Forum"
arxiv: null
doi: "10.1111/j.1467-8659.2003.00722.x"
source: "https://doi.org/10.1111/j.1467-8659.2003.00722.x"
topics: [survey, soft-shadows]
seed_rank: 1525
seed_batch: "di-penumbra-2026-09-02"
reviewed: "2026-09-02"
pool: "graphics"
relevance_score: 9
lineage: soft-shadows
cites:
  - title: "Approximate Soft Shadows on Arbitrary Surfaces using Penumbra Wedges"
    url: "https://doi.org/10.2312/EGWR/EGWR02/297-306"
    year: 2002
    arxiv: null
    doi: "10.2312/EGWR/EGWR02/297-306"
  - title: "Percentage-Closer Soft Shadows"
    url: "https://developer.download.nvidia.com/shaderlibrary/docs/shadow_PCSS.pdf"
    year: 2005
    arxiv: null
    doi: null
  - title: "Real-time Soft Shadows in Dynamic Scenes using Spherical Harmonic Exponentiation"
    url: "https://doi.org/10.1145/1141911.1141982"
    year: 2006
    arxiv: null
    doi: "10.1145/1141911.1141982"
see:
  - "1415-real-time-soft-shadows-in-dynamic-scenes-using-spherical-harmoni"
---

# A Survey of Real-time Soft Shadows Algorithms

## One-sentence takeaway

Hasenfratz 2003: THE survey the real-time soft-shadow field is organized around — image-based vs geometry-based vs precomputation, before PCSS/SSM/CSM landed.

## Why it matters here

SHEXP 1415 is a 2006 precomputed-soft-shadow *algorithm*, not a survey. This CGF STAR is the map. GRID COMMAND literature review of penumbra should start here, then jump to PCSS/Guennebaud (this batch).

## Key ideas

- **Taxonomy.** Image-based (SM, convolution), geometry-based (wedges, volumes), and precomputed (PRT-ish) realtime methods as of 2003.
- **What was missing.** The survey predates Fernando PCSS, Guennebaud SSM, Annen CSM/ESM, MSM — it is the *pre-2005* map, which is why those papers exist.
- **Still cited.** Later papers use it as the related-work spine rather than reinventing the classification.
- **Evidence.** CGF 22(4) 2003, doi `10.1111/j.1467-8659.2003.00722.x`.

## Caveats

- Dated: no PCSS, no SSM-backprojection, no filterable SM, no RT shadows. Not a remint of SHEXP 1415 (fuzzy title overlap only).

## Links

- DOI: https://doi.org/10.1111/j.1467-8659.2003.00722.x
