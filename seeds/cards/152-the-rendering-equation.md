---
title: "The Rendering Equation"
authors:
  - "James T. Kajiya"
year: 1986
venue: "SIGGRAPH"
arxiv: null
doi: "10.1145/15922.15902"
source: "https://doi.org/10.1145/15922.15902"
topics:
  - graphics
  - gi
seed_rank: 152
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"
relevance_score: 9
cites:
  - title: "An improved illumination model for shaded display"
    url: "https://doi.org/10.1145/358876.358882"
    year: 1980
    arxiv: null
    doi: "10.1145/358876.358882"
  - title: "Ray tracing volume densities"
    url: "https://doi.org/10.1145/964965.808594"
    year: 1984
    arxiv: null
    doi: "10.1145/964965.808594"
  - title: "Summed-area tables for texture mapping"
    url: "https://doi.org/10.1145/964965.808600"
    year: 1984
    arxiv: null
    doi: "10.1145/964965.808600"
  - title: "The hemi-cube"
    url: "https://doi.org/10.1145/325165.325171"
    year: 1985
    arxiv: null
    doi: "10.1145/325165.325171"
  - title: "Data Structures for Range Searching"
    url: "https://doi.org/10.1145/356789.356797"
    year: 1979
    arxiv: null
    doi: "10.1145/356789.356797"
  - title: "Modeling the interaction of light between diffuse surfaces"
    url: "https://doi.org/10.1145/964965.808601"
    year: 1984
    arxiv: null
    doi: "10.1145/964965.808601"
  - title: "Distributed ray tracing"
    url: "https://doi.org/10.1145/964965.808590"
    year: 1984
    arxiv: null
    doi: "10.1145/964965.808590"
  - title: "Continuous tone representation of three-dimensional objects taking account of shadows and interreflection"
    url: "https://doi.org/10.1145/325165.325169"
    year: 1985
    arxiv: null
    doi: "10.1145/325165.325169"
  - title: "Statistically optimized sampling for distributed ray tracing"
    url: "https://doi.org/10.1145/325165.325179"
    year: 1985
    arxiv: null
    doi: "10.1145/325165.325179"
  - title: "A Retrospective and Prospective Survey of the Monte Carlo Method"
    url: "https://doi.org/10.1137/1012001"
    year: 1970
    arxiv: null
    doi: "10.1137/1012001"
  - title: "Weighted Monte Carlo Integration"
    url: "https://doi.org/10.1137/0715088"
    year: 1978
    arxiv: null
    doi: "10.1137/0715088"
---

# The Rendering Equation

## One-sentence takeaway

Kajiya writes global illumination as a single three-point integral equation and treats ray tracing, radiosity, and related methods as approximate solvers of that same transport problem.

## Why it matters here

Anoptic and GRID COMMAND lighting should be approximations to this integral, not a pile of ad-hoc terms: path-traced GI, radiance caches, and real-time probes all inherit the same kernel and the same Monte Carlo options.

## Key ideas

- The rendering equation states outgoing intensity as emitted light plus the hemisphere integral of incoming intensity times a bidirectional reflectance kernel and a geometry term.
- Classical techniques (Whitted ray tracing, radiosity, distributed ray tracing) appear as special-case approximations or discretizations of the same equation.
- Monte Carlo path tracing is presented as a practical estimator, with importance sampling and related variance-reduction ideas already in view.
- The three-point form makes occlusion, interreflection, and participating-media extensions share one transport language.
- Solving the equation, not inventing a new local shading model, is the definition of physically based light transport.

## Caveats

## Links

- DOI: [10.1145/15922.15902](https://doi.org/10.1145/15922.15902)
- ACM: https://dl.acm.org/doi/10.1145/15922.15902
