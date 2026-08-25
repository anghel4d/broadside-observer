---
title: "Acquiring the reflectance field of a human face"
authors: ["Paul Debevec", "Tim Hawkins", "Chris Tchou", "Haarm-Pieter Duiker", "Westley Sarokin", "Mark Sagar"]
year: 2000
venue: "Proceedings of the 27th annual conference on Computer graphics and interactive techniques - SIGGRAPH '00"
arxiv: null
doi: "10.1145/344779.344855"
source: "https://doi.org/10.1145/344779.344855"
topics: [translucent-materials]
seed_rank: 1279
seed_batch: "sss-translucent-2026-08-25"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 9
lineage: translucent-materials
---

# Acquiring the reflectance field of a human face

## One-sentence takeaway

Debevec 2000 Light Stage: acquire the reflectance field of a human face — the capture stem of every later ICT / Emily / Ghosh paper.

## Problem

Image-based rendering and photometric stereo existed; a dense angular reflectance field of a live face did not.

## Design

Spherical lighting rig; photograph the face under a basis of lights; relight as a reflectance field. Lineage: image-based rendering, photometric stereo.

## Evidence

SIGGRAPH 2000, DOI 10.1145/344779.344855. Parent of Ma 2007 polarized gradients, Weyrich 2006, Ghosh 2008, Digital Emily.

## Limitations

Reflectance field, not an SSS model. Relighting, not transport.

## Implications for Broadside

Capture papers say which parameters to store (σs, σa, g, layered weights), not how Anoptic evaluates them. The renderer still lacks an SSS operator. Do not claim they already have SSS.

## Bottom line

Mint Debevec 2000. Capture stem, not a BSSRDF.

## Links

- DOI: [10.1145/344779.344855](https://doi.org/10.1145/344779.344855)
