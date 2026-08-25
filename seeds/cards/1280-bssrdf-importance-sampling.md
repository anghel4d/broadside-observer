---
title: "BSSRDF Importance Sampling"
authors: ["Alan King", "Christopher Kulla", "Alejandro Conty", "Marcos Fajardo"]
year: 2013
venue: "SIGGRAPH Talks"
arxiv: null
doi: "10.1145/2504459.2504520"
source: "https://doi.org/10.1145/2504459.2504520"
topics: [subsurface-scattering, translucent-materials]
seed_rank: 1280
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
  - title: "A Rapid Hierarchical Rendering Technique for Translucent Materials"
    url: "https://doi.org/10.1145/566570.566619"
    year: 2002
    arxiv: null
    doi: "10.1145/566570.566619"
  - title: "Importance Sampling Techniques for Path Tracing in Participating Media"
    url: "https://doi.org/10.1111/j.1467-8659.2012.03148.x"
    year: 2012
    arxiv: null
    doi: "10.1111/j.1467-8659.2012.03148.x"
see:
  - "152-the-rendering-equation"
  - "1256-a-rapid-hierarchical-rendering-technique-for-translucent-materials"
  - "1305-importance-sampling-techniques-for-path-tracing-in-participating-media"
---

# BSSRDF Importance Sampling

## One-sentence takeaway

King–Kulla 2013 BSSRDF importance sampling — sample the dipole / profile the way a path tracer actually needs.

## Problem

JB02 evaluates a hierarchy; it does not tell you how to importance-sample a BSSRDF from a path vertex. Production path tracers were stuck.

## Design

MIS / importance sampling of the BSSRDF (probe the surface with the profile). Lineage: JB02 sampling → King/Kulla13 → Chiang16.

## Evidence

SIGGRAPH Talks 2013, DOI 10.1145/2504459.2504520. Parent of Chiang 2016 and Villemin 2016 resampling.

## Limitations

Talk. Profile-based, not a random-walk derivation. Kulla 2012 is the volume-sampling sibling.

## Implications for Broadside

Anoptic has a forward+ mesh renderer and is betting on FMM+RC 3D GI. Translucent materials / SSS is the missing appearance model for skin, marble, wax, leaves, and interiors. Do not claim they already have SSS.

## Bottom line

Mint King 2013. Cite JB02 and Kulla 2012.

## Links

- DOI: [10.1145/2504459.2504520](https://doi.org/10.1145/2504459.2504520)
