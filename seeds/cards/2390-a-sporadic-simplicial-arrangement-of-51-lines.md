---
title: "A sporadic simplicial arrangement of 51 lines"
authors:
  - "Tomás S. R. Silva"
year: 2026
venue: "arXiv preprint (math.CO)"
arxiv: "2610.28874"
doi: null
source: "https://arxiv.org/abs/2610.28874"
topics:
  - "line-arrangements"
  - "icosahedral-symmetry"
  - "discrete-geometry"
  - "exact-arithmetic"
seed_rank: 2390
seed_batch: "curiosity-2026-10-23"
reviewed: "2026-10-23"
pool: "maths-foundations"
relevance_score: 8
cites:
  - title: "A sporadic simplicial arrangement of 51 lines"
    url: "https://arxiv.org/abs/2610.28874"
    year: 2026
    arxiv: "2610.28874"
    doi: null
see: ["2389-littlewoods-mutually-touching-cylinders-the-maximum-is-seven", "1023-an-aperiodic-monotile"]
---

# A sporadic simplicial arrangement of 51 lines

## One-sentence takeaway

Adding one 30-line orbit of the icosahedral rotation group to the classical 21-line icosahedral arrangement gives 51 lines in the projective plane that cut it into nothing but triangles, which breaks the long-standing expectation (Grünbaum; Cuntz and Mücksch) that sporadic simplicial arrangements stop at 37 lines.

## Why it's lovely

Simplicial arrangements are line drawings where every region is a triangle. Two infinite families come from regular polygons, and everything else is a rare sporadic specimen, catalogued by Grünbaum and Cuntz with the largest known having 37 lines. This paper finds a much bigger one with a single symmetric idea: take the icosahedral arrangement, rotate one extra line through the 60 rotations of the icosahedron, and pick its slope as the square root of the golden ratio. The proof is pleasingly finite: twelve point orbits, a pair-count that shows none were missed, and Melchior's inequality, which reaches equality exactly when every face is a triangle. For Anoptic it is a ready-made test object: an exactly-defined, highly symmetric triangulation of the sphere (1440 triangles) with explicit coordinates over Q(√φ) and an exact-arithmetic verifier.

## Key ideas

- **Construction.** A₅₁ is the union of three orbits under the icosahedral rotation group I ≅ A₅: the 15 mirror lines of the H₃ reflection arrangement, 6 lines polar to the fivefold axes (together the classical A(21,2)), and a new orbit of 30 images of y + √φ·z = 0.
- **Counts.** Intersection multiplicities are t₂ = 120, t₃ = 190, t₅ = 36, t₆ = 15, giving 361 vertices, 1080 edges and 720 triangular chambers in the projective plane.
- **Simpliciality by counting.** Melchior's inequality t₂ − 3 − Σ_{r≥4}(r − 3)t_r ≥ 0 is an equality exactly for simplicial arrangements, and here 120 − 3 − 72 − 45 = 0. A pair-count over all C(51,2) = 1275 line pairs certifies that the twelve listed point orbits are complete.
- **Not supersolvable.** The characteristic polynomial (T − 1)(T² − 50T + 669) does not split over the integers, so it also refutes the conjecture that large irreducible simplicial arrangements are supersolvable.
- **Why √φ.** The parameter is chosen to force a particular triple concurrence, which the paper explains geometrically; all arithmetic is in K = Q[s]/(s⁴ − s² − 1), and accompanying Python code reproduces every incidence exactly.

## Caveats

Fresh, single-author preprint (dated 20 Oct 2026) not yet refereed, though the certificate is finite and machine-checkable. It does not say whether sporadic arrangements are finitely many or whether some larger bound holds. The direct engineering use is as a test mesh and symmetry example, not as a technique.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.28874
- PDF: https://arxiv.org/pdf/2610.28874
