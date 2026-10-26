---
title: "The elastic figure-eight knot is not planar"
authors:
  - "Tatsuya Miura"
year: 2026
venue: "arXiv preprint (math.DG)"
arxiv: "2610.32320"
doi: null
source: "https://arxiv.org/abs/2610.32320"
topics:
  - "differential-geometry"
  - "knot-theory"
  - "calculus-of-variations"
  - "elastica"
seed_rank: 2433
seed_batch: "curiosity-2026-10-27"
reviewed: "2026-10-27"
pool: "maths-foundations"
relevance_score: 8
cites:
  - title: "The elastic figure-eight knot is not planar"
    url: "https://arxiv.org/abs/2610.32320"
    year: 2026
    arxiv: "2610.32320"
    doi: null
---

# The elastic figure-eight knot is not planar

## One-sentence takeaway

Tie a thin elastic wire into a figure-eight knot and let it relax to least bending energy: the shape it settles toward is not the nearly flat "teardrop–heart" that numerics and a 2010s conjecture pointed to, and the same holds for every twist knot with four or more crossings.

## Why it's lovely

It is a question you can hold in your hands: knot a length of steel wire and see what shape it wants. For unknots, trefoils and the other knots whose bridge and braid indices match, the answer was recently proved to be a multiply covered circle. The figure-eight is the first knot past that line, and simulations and wire experiments had pointed at a nearly flat shape. Miura proves the flat answer wrong with two clean pieces: a sharp lower bound on the bending energy of any flat limit, and an explicit 3D wire that bends less. He also names a better candidate, a "catapult" shape with normalized energy about 246.43 against the teardrop–heart's 252.32. Bending energy ∫|κ|² ds is the same smoothness functional used for curve fairing and spline design.

## Key ideas

- **Model.** Minimize bending energy ∫|κ|² ds at unit length within a knot class, with a thickness constraint (hard-core repulsion) that is sent to zero; an elastic knot is a C¹ limit of those minimizers and may self-touch.
- **Planar lower bound.** For any knot class other than the (2, q) torus knots, every flat curve that is a C¹ limit of embeddings has normalized energy at least C_TH, the energy of the teardrop–heart (a teardrop elastica glued to a heart-shaped elastica). Equality holds exactly for non-torus twist knots, at the two teardrop–heart traversals.
- **Spatial competitor.** For every twist knot class, an instability theorem of Miura and Yoshizawa gives a smooth 3D embedding with energy strictly below C_TH, so no flat curve can be the minimizer.
- **Robust to the model.** The result carries over to the ropelength-penalized and tangent-point models.
- **New conjecture.** The catapult (energy ≈ 246.429) may be the elastic knot for 4₁, or for every non-torus twist knot; the cage (≈ 252.945) is a third known shape.

## Caveats

It proves what the shape is not, not what it is; the catapult is a conjecture backed by numerics under assumed symmetries. The thickness-to-zero limit can differ from real wires: finite-thickness rod simulations by Vidulis et al. rank the three shapes in a different order. I read the first five pages, not the full 40-page proof.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.32320
- PDF: https://arxiv.org/pdf/2610.32320
