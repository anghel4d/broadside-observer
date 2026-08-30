---
title: "Discrete Kœnigs nets, inscribed quadrics and autoconjugate curves"
authors: ["Niklas Christoph Affolter", "Alexander Yves Fairley"]
year: 2025
venue: "arXiv:math.DG"
arxiv: "2510.26618"
doi: null
source: "https://arxiv.org/abs/2510.26618"
topics: [curiosity]
seed_rank: 1471
seed_batch: "curiosity-2026-08-31"
reviewed: "2026-08-31"
pool: "maths-foundations"
relevance_score: 9
lineage: discrete-differential-geometry
cites:
  - title: "Discrete Exterior Calculus"
    url: "https://arxiv.org/abs/math/0508341"
    year: 2005
    arxiv: "math/0508341"
    doi: null
  - title: "Discrete conformal maps and ideal hyperbolic polyhedra"
    url: "https://arxiv.org/abs/1005.2698"
    year: 2010
    arxiv: "1005.2698"
    doi: null
see:
  - "1028-discrete-exterior-calculus"
  - "1051-finite-element-exterior-calculus"
  - "1052-discrete-conformal-maps-and-ideal-hyperbolic-polyhedra"
---

# Discrete Kœnigs nets, inscribed quadrics and autoconjugate curves

## One-sentence takeaway

Discrete Kœnigs nets (the integrable discrete conjugate nets behind isothermic surfaces) carry a 1-parameter family of inscribed quadrics generalising Bobenko–Fairley touching conics, and generic Kœnigs d-grids are in bijection with pairs of discrete autoconjugate curves on a unique quadric in RP^{2d} — Tzitzéica 1924, made rigorous and discrete.

## Why it's lovely

Why you might love this: Q-nets are planar quads. Kœnigs nets are the ones whose four diagonal-intersection points stay coplanar — and suddenly each patch wears a quadric the parameter lines kiss. A 100-year smooth theorem (Tzitzéica) gets genericity hypotheses and a discrete proof that does not copy the continuum argument. Leftover of 1028/1052, not a remint of DEC.

## Problem

Touching inscribed conics characterise Kœnigs nets, but that is a per-quad story. What is the global object on a large patch? How do you construct every Kœnigs net whose parameter spaces are d-dimensional?

## Design

- Extensive Kœnigs nets in RP^{a+b}: unique inscribed quadric per touching-conic instance (1-parameter family overall), glued by a quadric-pencil lemma.
- Generic Kœnigs d-grids in RP^{2d}: a unique non-degenerate inscribed quadric, parameter spaces tangent along isotropic (d-1)-spaces.
- Autoconjugate curves: discrete curves in RP^{2d} whose (d-1)-osculating spaces lie on the quadric; generic pairs ↔ generic d-grids via Laplace transforms of the diagonal-intersection net.
- Side result: the touching-point nets (S,T) form a new Kœnigs binet (equal Laplace invariants per edge).

## Evidence

Full proofs with stated genericity; DFG TRR 109 (Discretization in Geometry and Dynamics). Recovers the d=1 touching-conic theorem of Bobenko–Fairley. No smooth analogue is claimed for the inscribed-quadric family on extensive nets.

## Limitations

Genericity is load-bearing (extensive lifts, nowhere Laplace-degenerate). Special isothermic nets with planar/spherical curvature lines sit outside the generic d-grid theorem. This is discrete projective geometry, not a mesh-shader recipe.

## Implications for Broadside

Anoptic already cares about discrete conformal maps (1052) and DEC/FEEC (1028/1051). Kœnigs/isothermic nets are the next integrable layer: curvature-line meshes that stay discrete-minimal, with a quadric you can actually store.

## Bottom line

Mint the quadric that Kœnigs nets were hiding. Integrable DDG with a portrait, not just a 3x3 stencil.

## Links

- arXiv abs: https://arxiv.org/abs/2510.26618
- PDF: https://arxiv.org/pdf/2510.26618.pdf
