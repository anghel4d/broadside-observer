---
title: "Ein Beitrag zur Optik der Farbanstriche"
authors: ["Paul Kubelka", "Franz Munk"]
year: 1931
venue: "Zeitschrift für technische Physik 12:593-601"
arxiv: null
doi: null
source: "https://www.graphics.cornell.edu/~westin/pubs/kubelka.pdf"
topics: [subsurface-scattering, translucent-materials]
seed_rank: 1260
seed_batch: "sss-translucent-2026-08-25"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 9
lineage: translucent-materials
---

# Ein Beitrag zur Optik der Farbanstriche

## One-sentence takeaway

Kubelka–Munk 1931: two-flux paint optics — the layered-absorption paper Donner and Haase both cite.

## Problem

Need a closed two-stream model of absorbing/scattering paint films. No RTE solver, no DOI, Cornell keeps the PDF.

## Design

K and S two-flux coefficients; reflectance/transmittance of a paint film as hyperbolic functions of thickness. Zeitschrift für technische Physik 12:593–601.

## Evidence

1931, no DOI. Source: https://www.graphics.cornell.edu/~westin/pubs/kubelka.pdf. Keep this 1931 paper; Kubelka 1948 was dropped from the cut.

## Limitations

Two-flux, not a BSSRDF. No lateral transport. Graphics uses it as a layering citation, not a renderer.

## Implications for Broadside

Anoptic's mesh path can take a layered BSDF at a hit; coats, varnish, and thin slabs are the same missing appearance stack as SSS. FMM+RC is the far-field GI bet — this paper is the local layered operator. Do not claim Anoptic already has SSS.

## Bottom line

Mint KM 1931 with the Cornell PDF. Do not invent a DOI. Do not mint Kubelka 1948.

## Links

- Source: https://www.graphics.cornell.edu/~westin/pubs/kubelka.pdf
