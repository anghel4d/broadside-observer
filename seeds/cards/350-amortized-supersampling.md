---
title: "Amortized Supersampling"
authors:
  - "Lei Yang"
  - "Pedro V. Sander"
  - "Diego Nehab"
  - "Hugues Hoppe"
  - "Pitchaya Sitthi-amorn"
  - "Jason Lawrence"
year: 2009
venue: "SIGGRAPH Asia / TOG"
arxiv: null
doi: "10.1145/1618452.1618481"
source: "https://doi.org/10.1145/1618452.1618481"
topics:
  - temporal
  - aa
seed_rank: 350
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 8
cites:
  - title: "The accumulation buffer: hardware support for high-quality rendering"
    url: "https://doi.org/10.1145/97879.97913"
    year: 1990
    arxiv: null
    doi: "10.1145/97879.97913"
  - title: "Distributed ray tracing"
    url: "https://doi.org/10.1145/964965.808590"
    year: 1984
    arxiv: null
    doi: "10.1145/964965.808590"
see: []
---

# Amortized Supersampling

## One-sentence takeaway

Yang et al. amortize 4×4-quality antialiasing by shading about one new subpixel sample per pixel per frame and reprojecting the rest from a small ring of previous subpixel buffers.

## Why it matters here

This 2009 SIGGRAPH Asia paper is the ancestor of TAA / TSR: Anoptic’s temporal AA stack is the same reuse-plus-reject idea, later dressed with velocity buffers and neighborhood clamps.

## Key ideas

- Maintain several subpixel-offset color (and depth) buffers. Each frame shades a new jittered sample and warps older samples into the current view.
- Reprojection uses depth to reject disocclusions; missing samples are regenerated rather than ghosted.
- Cost is close to 1× shading plus a resolve, with quality they compare to 4×4 stratified supersampling on static or slowly moving content.
- Published as ACM TOG 28(5) with DOI 10.1145/1618452.1618481 (the 10.1145/1661412.1618480 id is the conference-proceedings sibling).

## Caveats

## Links

- DOI: [10.1145/1618452.1618481](https://doi.org/10.1145/1618452.1618481)
- Project: https://hhoppe.com/proj/supersample/
- PDF: https://www.leiy.cc/publications/AMSS/AMSS.pdf
