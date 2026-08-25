---
title: "Analysis of human faces using a measurement-based skin reflectance model"
authors: ["Tim Weyrich", "Henrik Wann Jensen", "Markus Gross", "Wojciech Matusik", "Hanspeter Pfister", "Bernd Bickel", "Craig Donner", "Chien Tu", "Janet McAndless", "Jinho Lee", "Addy Ngan"]
year: 2006
venue: "ACM SIGGRAPH 2006 Papers on - SIGGRAPH '06"
arxiv: null
doi: "10.1145/1179352.1141987"
source: "https://doi.org/10.1145/1179352.1141987"
topics: [translucent-materials]
seed_rank: 1254
seed_batch: "sss-translucent-2026-08-25"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 10
lineage: translucent-materials
cites:
  - title: "Acquiring the reflectance field of a human face"
    url: "https://doi.org/10.1145/344779.344855"
    year: 2000
    arxiv: null
    doi: "10.1145/344779.344855"
  - title: "A Practical Model for Subsurface Light Transport"
    url: "https://doi.org/10.1145/383259.383319"
    year: 2001
    arxiv: null
    doi: "10.1145/383259.383319"
see:
  - "1279-acquiring-the-reflectance-field-of-a-human-face"
  - "1245-a-practical-model-for-subsurface-light-transport"
---

# Analysis of human faces using a measurement-based skin reflectance model

## One-sentence takeaway

Measurement-based facial skin reflectance: Light Stage parameters fit to a Torrance–Sparrow + SSS model on real faces.

## Problem

Need a model that explains measured face reflectance, not just a dipole on a scan. Debevec Light Stage + Jensen 2001 + Matusik BRDF.

## Design

Fit spatially varying parameters from point-source / Light-Stage photographs; separate oil, epidermal, and subsurface terms.

## Evidence

SIGGRAPH 2006, DOI 10.1145/1179352.1141987. Predecessor of Donner 2008 and Ghosh 2008 layered faces.

## Limitations

Model-constrained fit. Not a new transport solver. Survey leftovers exist; do not mint surveys.

## Implications for Broadside

Capture papers say which parameters to store (σs, σa, g, layered weights), not how Anoptic evaluates them. The renderer still lacks an SSS operator. Do not claim they already have SSS.

## Bottom line

Mint Weyrich 2006. Cite JMLH01 and Debevec 2000.

## Links

- DOI: [10.1145/1179352.1141987](https://doi.org/10.1145/1179352.1141987)
