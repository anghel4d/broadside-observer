---
title: "Sphere Tracing: A Geometric Method for the Antialiased Ray Tracing of Implicit Surfaces"
authors:
  - "John C. Hart"
year: 1996
venue: "The Visual Computer"
arxiv: null
doi: "10.1007/s003710050084"
source: "https://doi.org/10.1007/s003710050084"
topics:
  - "sphere-tracing"
  - "signed-distance"
  - "implicit-surfaces"
  - "ray-marching"
seed_rank: 1161
seed_batch: "archive-2026-08-24"
reviewed: "2026-08-24"
pool: "graphics"
relevance_score: 10
lineage: sdf-rendering
cites:
  - title: "Dual Contouring of Hermite Data"
    url: "https://doi.org/10.1145/566570.566586"
    year: 2002
    arxiv: null
    doi: "10.1145/566570.566586"
  - title: "The Rendering Equation"
    url: "https://doi.org/10.1145/15886.15902"
    year: 1986
    arxiv: null
    doi: "10.1145/15886.15902"
  - title: "A Generalization of Algebraic Surface Drawing"
    url: "https://doi.org/10.1145/357306.357310"
    year: 1982
    arxiv: null
    doi: "10.1145/357306.357310"
  - title: "Casting Curved Shadows on Curved Surfaces"
    url: "https://doi.org/10.1145/965145.801350"
    year: 1978
    arxiv: null
    doi: "10.1145/965145.801350"
see:
  - "408-dual-contouring-of-hermite-data"
  - "152-the-rendering-equation"
  - "1005-casting-curved-shadows-on-curved-surfaces"
---

# Sphere Tracing: A Geometric Method for the Antialiased Ray Tracing of Implicit Surfaces

## One-sentence takeaway

If `f` is a signed distance (or a Lipschitz bound on one), you may march a ray in steps of `f(p)` and never penetrate the implicit surface — no root finder, no derivative, no mesh.

## Problem

Implicit surfaces (Blinn blobs, CSG, hypertexture) do not offer a closed-form ray intersection. L-G surfaces and interval methods need derivatives and misbehave when the derivative jumps or vanishes (creases, noise). Dual Contouring / Marching Cubes (408, last-cycle reject of Lorensen) *polygonize*; they do not ray-trace. The rendering equation (152) and shadow maps (1005) assume you already have a hit. Shadertoy / SDF modeling still needs the 1994/96 geometric march.

## Design

Sphere tracing: from point `p` along ray direction `d`, step by a distance guaranteed not to pass through the surface — the Lipschitz-bounded distance to `{f=0}`, pictured as a unbounding sphere. Repeat until the step is smaller than a pixel (or a cone width, for a cheap cone-tracing AA that approximates Amanatides). CSG is `min`/`max` on distances; offsets, blends, tapers, twists, superquadrics, and generalized cylinders have closed-form (or boundable) SDFs in the appendices. The method needs only a bound on `|∇f|`, not `∇f` itself.

## Evidence

*The Visual Computer* 12(10):527–545, 1996 (manuscript July 1994), DOI `10.1007/s003710050084`. This is the paper every SDF tutorial cites. IQ's compact SDF catalogue and Unreal/Unity SDF GI are implementations. Differentiable sphere tracing (2019 DIST, etc.) is a follow-on — reject as 2010s/Craft.

## Limitations

A *bound*, not a true distance, still works but over-steps less and costs more. Non-Lipschitz noise (raw Perlin as a surface) is outside the contract — you must Lipschitz-ize. Thin surfaces relative to the pixel cone leak. This is a *ray* method; for a mesh, 408 remains the extract.

## Implications for Broadside

Anoptic already has a triangle path. SDF gizmos, CSG brushes, volumetric fog *bounds*, and "unbounded" worlds are this march, not a Marching Cubes extract and not dual contouring. One shader, Lipschitz primitives, min/max CSG. Do not remint Perlin (1007), Blinn blobs, or 408 to get a ray-implicit hit.

## Bottom line

Mint sphere tracing as the leftover graphics gem of this slice. Polygonizers and the GI/compositing spine stay cited.

## Links

- DOI: [10.1007/s003710050084](https://doi.org/10.1007/s003710050084)
- Stanford course PDF (author manuscript): https://graphics.stanford.edu/courses/cs348b-20-spring-content/uploads/hart.pdf
