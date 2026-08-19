---
title: "Exact Predicates, Exact Constructions and Combinatorics for Mesh CSG"
authors: ["Bruno Lévy"]
year: 2025
venue: "ACM Transactions on Graphics"
arxiv: "2405.12949"
doi: "10.1145/3744642"
source: "https://arxiv.org/abs/2405.12949"
topics: [procedural-content-codegen]
seed_rank: 1092
seed_batch: "craft-2026-08-19"
reviewed: "2026-08-19"
pool: "graphics"
relevance_score: 9
lineage: procedural-content-codegen
cites:
  - title: "Adaptive Precision Floating-Point Arithmetic and Fast Robust Geometric Predicates"
    url: "https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf"
    year: 1997
    arxiv: null
    doi: null
  - title: "The Weiler-Atherton Hidden Surface Algorithm"
    url: "https://doi.org/10.1145/800248.807398"
    year: 1977
    arxiv: null
    doi: "10.1145/800248.807398"
  - title: "Thingi10K: A Dataset of 10,000 3D-Printing Models"
    url: "https://arxiv.org/abs/1605.04797"
    year: 2016
    arxiv: "1605.04797"
    doi: null
see:
  - "1032-real-time-meshlet-extraction-from-scalar-volumes"
  - "1058-real-time-procedural-resurfacing-using-gpu-mesh-shader"
---

# Exact Predicates, Exact Constructions and Combinatorics for Mesh CSG

## One-sentence takeaway

Co-refine a polygon soup with exact intersection coordinates (expansions *or* MPFR), remesh each facet with a uniquely-defined constrained Delaunay triangulation plus symbolic perturbation, radial-sort into a Weiler 3D arrangement, then classify facets against an arbitrary boolean expression — pathologies live in the kernel, combinatorics stay simple.

## Why it matters here

GRID COMMAND's procedural world is CSG-shaped (boolean terrain, bases, destructible volumes) and last Craft skipped GPU CDT (gCDT) as "no CDT ship this week." This is the *CPU exact* companion you actually need before meshlets: a robust Weiler model with two interchangeable kernels, public thingiCSG, and a unique CDT so overlapping facets don't duplicate. Anoptic can keep the arrangement on the sim thread and feed clusters to the mesh pipeline (1032 / 1058), not replace it.

## Key ideas

- Pipeline: exact co-refinement → CDT remesh of intersected triangles → radial sort around non-manifold edges → classify by boolean expression.
- Two kernels: arithmetic expansions (fast, Shewchuk-style) and multi-precision floats; particular cases handled *in the kernel* so the combinatorial layer stays a few simple tables.
- Symbolic perturbation disambiguates co-cyclic points; unique CDT makes duplicate-triangle discard trivial.
- Evaluated on Thingi10K (repair/co-refine) and a new thingiCSG set of pathological multi-operand booleans.

## Caveats

- Not real-time GPU. This is the authoring/sim boolean, not a mesh-shader path.
- TOG 2025 (arxiv 2024); SIGGRAPH 2026 schedule also lists it — same paper, do not remint.
- Expansion kernel still has a (rare) fallback to MPFR; budget for that in the sim thread.

## Links

- arXiv: [2405.12949](https://arxiv.org/abs/2405.12949)
- DOI: [10.1145/3744642](https://doi.org/10.1145/3744642)
- Author: https://brunolevy.github.io/
