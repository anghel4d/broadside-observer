---
title: "Discrete differential geometry in homotopy type theory"
authors: ["Greg Langmead"]
year: 2025
venue: "arXiv:math.DG"
arxiv: "2504.20363"
doi: null
source: "https://arxiv.org/abs/2504.20363"
topics: [curiosity]
seed_rank: 1369
seed_batch: "curiosity-2026-08-27"
reviewed: "2026-08-27"
pool: "maths-foundations"
relevance_score: 10
lineage: ddg-hott
cites:
  - title: "Discrete Exterior Calculus"
    url: "https://arxiv.org/abs/math/0508341"
    year: 2005
    arxiv: "math/0508341"
    doi: null
  - title: "Finite element exterior calculus: from Hodge theory to numerical stability"
    url: "https://arxiv.org/abs/0906.4325"
    year: 2010
    arxiv: "0906.4325"
    doi: "10.1017/S0962492910000012"
  - title: "Cubical Type Theory: a constructive interpretation of the univalence axiom"
    url: "https://arxiv.org/abs/1611.02108"
    year: 2018
    arxiv: "1611.02108"
    doi: "10.4230/LIPIcs.TYPES.2015.5"
  - title: "The Simplicial Model of Univalent Foundations (after Voevodsky)"
    url: "https://arxiv.org/abs/1211.2851"
    year: 2021
    arxiv: "1211.2851"
    doi: "10.4171/JEMS/1050"
see:
  - "1028-discrete-exterior-calculus"
  - "1051-finite-element-exterior-calculus"
  - "1052-discrete-conformal-maps-and-ideal-hyperbolic-polyhedra"
  - "1054-cubical-type-theory"
  - "1237-the-simplicial-model-of-univalent-foundations"
---

# Discrete differential geometry in homotopy type theory

## One-sentence takeaway

On a combinatorial 2-manifold in HoTT, total curvature of a circle-bundle equals total index of a vector field — the shared spine of Gauss–Bonnet and Poincaré–Hopf, written with type families.

## Why it's lovely

Why you might love this: Curvature and vector-field index become equal as a theorem in HoTT — Gauss–Bonnet/Poincaré–Hopf without leaving types.

## Problem

Classical Gauss–Bonnet and Poincaré–Hopf are usually proved with analysis or triangulation bookkeeping outside type theory. Discrete differential geometry already triangulates; HoTT already has higher inductive types and classifying types. Can connections, curvature, and vector-field indices be defined so that the equality total-curvature = total-index is an internal theorem, without presupposing Euler characteristic?

## Design

- Realise a combinatorial manifold as a tower of pushouts (0-, 1-, 2-skeleta) based on a simplicial complex.
- Principal bundles, connections, and curvature are type families over these pushouts valued in Eilenberg–MacLane types (oriented circles as K(ℤ,1)/K(ℤ,2) data).
- A vector field is a section on the 1-skeleton; zeros are modelled by omitting faces. Index on a face is the winding of the transported section around the boundary after flattening by the connection.
- Main theorem (dim 2): sum of curvatures over faces equals sum of indices — the key shared step toward Gauss–Bonnet and Poincaré–Hopf once Euler characteristic is attached.

## Evidence

Constructive definitions and a proved equality of totals in HoTT. Seminar writeup (HoTTEST, Oct 2025) and arXiv 2504.20363. Explicitly stops short of identifying the common value with Euler characteristic.

## Limitations

No existence theorem for tangent bundles in general; only an example. Oriented 2D only. Not a drop-in replacement for FEEC/DEC numerics (1051/1028).

## Implications for Broadside

Broadside already keeps DEC (1028), FEEC (1051), discrete conformal maps (1052), and cubical/simplicial HoTT (1054/1237). This card is the missing bridge: discrete geometry *inside* HoTT, so an Anoptic mesh invariant could one day be a typed total rather than a floating checksum.

## Bottom line

Mint the typed curvature=index theorem. Discrete geometry that type-checks.

## Links

- arXiv: [2504.20363](https://arxiv.org/abs/2504.20363)
