---
title: "Practical Path Guiding for Efficient Light-Transport Simulation"
authors:
  - "Thomas Müller"
  - "Markus Gross"
  - "Jan Novák"
year: 2017
venue: "EGSR / CGF"
arxiv: null
doi: "10.1111/cgf.13227"
source: "https://tom94.net/data/publications/mueller17practical/mueller17practical.pdf"
topics:
  - "path-guiding"
  - "quadtree"
seed_rank: 1380
seed_batch: "gi-nature-2026-08-27"
reviewed: "2026-08-27"
pool: "graphics"
relevance_score: 9
lineage: path-guiding
cites:
  - title: "On-line Learning of Parametric Mixture Models for Light Transport Simulation"
    url: "https://cgg.mff.cuni.cz/~jaroslav/papers/2014-onlinelearn/"
    year: 2014
    arxiv: null
    doi: "10.1145/2601097.2601203"
  - title: "Global Illumination using Photon Maps"
    url: "https://graphics.stanford.edu/papers/photon-maps/"
    year: 1996
    arxiv: null
    doi: null
see:
  - "374-global-illumination-using-photon-maps"
---

# Practical Path Guiding for Efficient Light-Transport Simulation

## One-sentence takeaway

Replace Vorba's GMMs with an SD-tree (spatial binary tree + directional quadtree) that production path tracers actually implemented.

## Why it's lovely

Why you might love this: The guiding representation Cycles shipped. A quad-tree, not a mixture, and it worked on Monday morning.

## Problem

Vorba's GMMs are fiddly to fit, sensitive to the number of lobes, and expensive to sample. Production needs a guiding field you can dump into a renderer without a research engineer babysitting EM.

## Design

- Spatial binary tree over the scene; each leaf holds a directional quad-tree of incident radiance.
- Refine both trees from path samples; sample the product of the tree and the BSDF.
- Robust to empty regions; no EM. Open-sourced and dropped into Mitsuba/Cycles-class integrators.
- The 'practical' in the title is the contribution: an engineering representation, not a new estimator.

## Evidence

EGSR 2017 / CGF. Cycles, Arnold-adjacent research, and the 2019 path-guiding course all treat this as the default quad-tree method.

## Limitations

Still offline-first. Directional quad-trees under-resolve thin caustic beams. Does not solve many-lights (that's ReSTIR/ATS).

## Implications for Broadside

If Broadside grows an offline reference integrator, this is the guiding card to implement, not Vorba's GMM. NRC (1378) is the realtime neural fork of the same authors.

## Bottom line

Mint practical path guiding. The quad-tree production actually ran.

## Links

- DOI: [10.1111/cgf.13227](https://doi.org/10.1111/cgf.13227)
- URL: https://tom94.net/data/publications/mueller17practical/mueller17practical.pdf
