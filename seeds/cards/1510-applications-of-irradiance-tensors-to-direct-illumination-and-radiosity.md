---
title: "Applications of Irradiance Tensors to Direct Illumination and Radiosity"
authors: ["James Arvo"]
year: 1995
venue: "SIGGRAPH"
arxiv: null
doi: "10.1145/218380.218498"
source: "https://www.graphics.cornell.edu/pubs/1995/Arv95c.pdf"
topics: [analytic-area, polygonal-lights, form-factor, LTC-foundation]
seed_rank: 1510
seed_batch: "di-penumbra-2026-09-02"
reviewed: "2026-09-02"
pool: "graphics"
relevance_score: 9
lineage: area-lights
cites:
  - title: "The Rendering Equation"
    url: "https://doi.org/10.1145/15922.15902"
    year: 1986
    arxiv: null
    doi: "10.1145/15922.15902"
  - title: "Real-Time Polygonal-Light Shading with Linearly Transformed Cosines"
    url: "https://eheitzresearch.wordpress.com/415-2/"
    year: 2016
    arxiv: null
    doi: "10.1145/2897824.2925895"
---

# Applications of Irradiance Tensors to Direct Illumination and Radiosity

## One-sentence takeaway

Closed-form polygonal irradiance via tensors — the cosine-weighted solid-angle integral LTC still evaluates after the 3×3 warp, and the analytic-area-light math engines run for Lambert.

## Why it matters here

LTC (this batch) is a *change of measure*; the integral it reduces to is Arvo 1995. Distinct from Arvo's other SIGGRAPH 1995 paper (arbitrary-geometry tensors). GRID COMMAND Lambert quads without a BRDF LUT still want this formula.

## Key ideas

- **Irradiance tensors.** Express double-horizon integrals over spherical polygons as tensor contractions of edge / vertex terms — Lambert and Phong-like exponents fall out.
- **Direct illumination use.** A polygonal luminaire's unshadowed irradiance at a point is a closed form, not a texture of samples.
- **Radiosity connection.** Same tensors are form factors; the paper is why analytic area lights and classical radiosity share code.
- **Evidence.** SIGGRAPH 1995, doi `10.1145/218380.218498`. Cornell: https://www.graphics.cornell.edu/pubs/1995/Arv95c.pdf

## Caveats

- Unshadowed. No microfacet BRDF — that is LTC. Do not confuse with Arvo 1995 *Simulation of Illumination from Arbitrary Geometry of Light Sources* (different DOI `10.1145/218380.218467`).

## Links

- PDF: https://www.graphics.cornell.edu/pubs/1995/Arv95c.pdf
- DOI: https://doi.org/10.1145/218380.218498
