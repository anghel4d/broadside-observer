---
title: "Modeling the Interaction of Light Between Diffuse Surfaces"
authors:
  - "Cindy M. Goral"
  - "Kenneth E. Torrance"
  - "Donald P. Greenberg"
  - "Bennett Battaile"
year: 1984
venue: "SIGGRAPH / Computer Graphics 18(3)"
arxiv: null
doi: "10.1145/800031.808601"
source: "https://dl.acm.org/doi/pdf/10.1145/800031.808601"
topics:
  - radiosity
  - global-illumination
  - form-factors
seed_rank: 1661
seed_batch: "archive-2026-09-10"
reviewed: "2026-09-10"
pool: "graphics"
relevance_score: 10
lineage: goral-radiosity
cites:
  - title: "A Rapid Hierarchical Radiosity Algorithm"
    url: "https://doi.org/10.1145/97880.97892"
    year: 1991
    arxiv: null
    doi: "10.1145/97880.97892"
  - title: "Instant Radiosity"
    url: "https://doi.org/10.1145/258734.258769"
    year: 1997
    arxiv: null
    doi: "10.1145/258734.258769"
see:
  - "1068-a-rapid-hierarchical-radiosity-algorithm"
  - "450-instant-radiosity"
  - "1041-a-ray-tracing-solution-for-diffuse-interreflection"
  - "152-the-rendering-equation"
---

# Modeling the Interaction of Light Between Diffuse Surfaces

## One-sentence takeaway

Goral, Torrance, Greenberg, and Battaile cast diffuse interreflection as a finite-element radiosity system with form factors between patches — the paper that founded classical radiosity and every subsequent hemicube / hierarchical / instant-radiosity line.

## Why it matters here

Anoptic GI (radiance cascades, probes, baked lightmaps) still argues with the same physical question this paper asked in 1984: how does exitance at one diffuse surface drive another? Goral is the *view-independent diffuse* ancestor underneath hierarchical radiosity 1068, Instant Radiosity 450, and Ward’s irradiance cache 1041 — mint the root, do not remint those live descendants.

## Key ideas

- **Radiosity = energy balance.** Unknown exitances per patch; known emitters; linear system couples patches by form factors.
- **Form factors.** Geometric throughput between patch pairs (visibility × projected solid angle) is the matrix that makes color bleeding and soft indirect light.
- **Diffuse-only, view-independent.** Once solved, the mesh can be re-lit from any camera — the classical offline GI contract.
- **Cornell box culture.** Empirical physical comparison (painted box vs simulation) set the validation style graphics still uses.

## Caveats

- Diffuse Lambertian only; specular transport needs later path-tracing / MLT. Do not remint hierarchical radiosity 1068, Instant Radiosity 450, Ward 1041, Photon Maps 374, or MLT 372.
- Progressive refinement and hemicube algorithms are siblings left as near-keepers this pass (PDF walls / already-seen titles).
- ACM PDF resolved open this egress; Cornell HTML mirrors were interstitial pages, not PDFs.

## Links

- ACM PDF: https://dl.acm.org/doi/pdf/10.1145/800031.808601
- DOI: https://doi.org/10.1145/800031.808601
