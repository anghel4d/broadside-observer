---
title: "Practical and Controllable Subsurface Scattering for Production Path Tracing"
authors: ["Matt Jen-Yuan Chiang", "Peter Kutz", "Brent Burley"]
year: 2016
venue: "SIGGRAPH Talks"
arxiv: null
doi: "10.1145/2897839.2927433"
source: "https://doi.org/10.1145/2897839.2927433"
topics: [subsurface-scattering, translucent-materials]
seed_rank: 1258
seed_batch: "sss-translucent-2026-08-25"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 10
lineage: subsurface-scattering
cites:
  - title: "The Rendering Equation"
    url: "https://doi.org/10.1145/15922.15902"
    year: 1986
    arxiv: null
    doi: "10.1145/15922.15902"
  - title: "BSSRDF Importance Sampling"
    url: "https://doi.org/10.1145/2504459.2504520"
    year: 2013
    arxiv: null
    doi: "10.1145/2504459.2504520"
  - title: "Extending the Disney BRDF to a BSDF with Integrated Subsurface Scattering"
    url: "https://blog.selfshadow.com/publications/s2015-shading-course/burley/s2015_pbs_disney_bsdf_notes.pdf"
    year: 2015
    arxiv: null
    doi: null
see:
  - "152-the-rendering-equation"
  - "1280-bssrdf-importance-sampling"
  - "1278-extending-the-disney-brdf-to-a-bsdf-with-integrated-subsurface"
---

# Practical and Controllable Subsurface Scattering for Production Path Tracing

## One-sentence takeaway

Disney / Hyperion production path-traced SSS: random-walk subsurface that is artist-controllable and replaces the dipole.

## Problem

Dipole / PBD profiles fight albedo and mean-free-path as separate knobs and break at ears and noses. Burley 2015 BSDF + King 2013 sampling pointed at a path-traced walk.

## Design

Random-walk SSS with artist parameters (radius, albedo), discrete+ESM-style exits, production path tracer. Lineage: Burley 2015 + King 2013 → Chiang 2016 → every film renderer.

## Evidence

SIGGRAPH Talks 2016, DOI 10.1145/2897839.2927433. The talk Hyperion and later path tracers copied.

## Limitations

Talk, not a TOG derivation. Exponential free-flight until Wrenninge 2017. Variance still needs SNEE / zero-variance sampling.

## Implications for Broadside

Anoptic has a forward+ mesh renderer and is betting on FMM+RC 3D GI. Translucent materials / SSS is the missing appearance model for skin, marble, wax, leaves, and interiors. Do not claim they already have SSS.

## Bottom line

Mint Chiang 2016 as production path-traced SSS. Cite Burley 2015 and King 2013.

## Links

- DOI: [10.1145/2897839.2927433](https://doi.org/10.1145/2897839.2927433)
