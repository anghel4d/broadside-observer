---
title: "Smooth Subdivision Surfaces Based on Triangles"
authors:
  - "Charles Loop"
year: 1987
venue: "University of Utah Master's thesis"
arxiv: null
doi: null
source: "https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/thesis-10.pdf"
topics:
  - graphics
  - subdivision-surfaces
  - loop
seed_rank: 1147
seed_batch: "perfects-systems-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 8
lineage: gpu-driven-rendering
cites:
  - title: "Recursively Generated B-Spline Surfaces on Arbitrary Topological Meshes"
    url: "https://doi.org/10.1016/0010-4485(78)90110-0"
    year: 1978
    arxiv: null
    doi: "10.1016/0010-4485(78)90110-0"
    card: "1146-recursively-generated-b-spline-surfaces-on-arbitrary-topolog"
  - title: "A Subdivision Algorithm for Computer Display of Curved Surfaces"
    url: "https://collections.lib.utah.edu/details?id=709785"
    year: 1974
    arxiv: null
    doi: null
    card: "1145-a-subdivision-algorithm-for-computer-display-of-curved-surfa"
  - title: "Resolution Independent Curve Rendering using Programmable Graphics Hardware"
    url: "https://doi.org/10.1145/1073204.1073303"
    year: 2005
    arxiv: null
    doi: "10.1145/1073204.1073303"
    card: "145-loop-and-blinn-resolution-independent-curve-rendering-using-"
---

# Smooth Subdivision Surfaces Based on Triangles

## One-sentence takeaway

Loop subdivision: triangle-mesh subdivision with simple stencils and smooth limits—GPU-friendly cousin of Catmull–Clark.

## Why it matters here

Triangle-native subdiv used in real-time approximations and research.

## Key ideas

- Triangular mesh subdivision rules.
- Box-spline rooted masks.
- Simpler than CC for pure triangle pipelines.
- Pairs with Loop–Blinn curve rendering cards already in corpus.

## Caveats

- Classic; verify claims against the primary text before engineering decisions.

## Links

- URL: https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/thesis-10.pdf
