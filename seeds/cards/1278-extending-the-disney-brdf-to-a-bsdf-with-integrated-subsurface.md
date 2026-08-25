---
title: "Extending the Disney BRDF to a BSDF with Integrated Subsurface Scattering"
authors: ["Brent Burley"]
year: 2015
venue: "SIGGRAPH Physically Based Shading Course"
arxiv: null
doi: null
source: "https://blog.selfshadow.com/publications/s2015-shading-course/burley/s2015_pbs_disney_bsdf_notes.pdf"
topics: [subsurface-scattering]
seed_rank: 1278
seed_batch: "sss-translucent-2026-08-25"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 9
lineage: subsurface-scattering
cites:
  - title: "The Rendering Equation"
    url: "https://doi.org/10.1145/15922.15902"
    year: 1986
    arxiv: null
    doi: "10.1145/15922.15902"
  - title: "An Approximate Reflectance Profile for Efficient Subsurface Scattering"
    url: "https://doi.org/10.1145/2775280.2792555"
    year: 2015
    arxiv: null
    doi: "10.1145/2775280.2792555"
see:
  - "152-the-rendering-equation"
  - "1277-an-approximate-reflectance-profile-for-efficient-subsurface-scattering"
---

# Extending the Disney BRDF to a BSDF with Integrated Subsurface Scattering

## One-sentence takeaway

Burley 2015: extend the Disney BRDF to a BSDF with integrated subsurface — the artist-parameter SSS that Chiang 2016 traces.

## Problem

Disney BRDF is opaque. Production wants one parameter set that can thin-transmit and subsurface-scatter without a separate dipole shader.

## Design

Course-note BSDF: add a diffusion / SSS term and transmission to the Disney principled BRDF. Lineage: Christensen15 ↔ Burley15 → Chiang16.

## Evidence

SIGGRAPH Physically Based Shading Course 2015. No DOI. Source: https://blog.selfshadow.com/publications/s2015-shading-course/burley/s2015_pbs_disney_bsdf_notes.pdf.

## Limitations

Course notes, not a TOG paper. Exponential random walk comes later (Chiang / Wrenninge).

## Implications for Broadside

Anoptic has a forward+ mesh renderer and is betting on FMM+RC 3D GI. Translucent materials / SSS is the missing appearance model for skin, marble, wax, leaves, and interiors. Do not claim they already have SSS.

## Bottom line

Mint Burley 2015 course notes. No DOI. Cite Christensen 2015.

## Links

- Source: https://blog.selfshadow.com/publications/s2015-shading-course/burley/s2015_pbs_disney_bsdf_notes.pdf
