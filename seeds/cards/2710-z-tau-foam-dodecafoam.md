---
title: "The Z[τ]-foam: Goodman-Strauss's Dodecafoam as arithmetic in the icosahedral module"
authors:
  - "Miguel E. Pérez Ibarra"
  - "Jaziel Flores Rodríguez"
year: 2026
venue: "arXiv preprint (math.MG)"
arxiv: "2611.28955"
doi: null
source: "https://arxiv.org/abs/2611.28955"
version_reviewed: "v1"
topics:
  - "dodecafoam"
  - "icosahedral-symmetry"
  - "substitution-tilings"
  - "golden-ratio"
  - "self-similar-fractals"
seed_rank: 2710
seed_batch: "curiosity-2026-11-25"
reviewed: "2026-11-25"
pool: "maths-foundations"
relevance_score: 7
cites:
  - title: "The Z[τ]-foam: Goodman-Strauss's Dodecafoam as arithmetic in the icosahedral module"
    url: "https://arxiv.org/abs/2611.28955"
    year: 2026
    arxiv: "2611.28955"
    doi: null
see: []
---

# The Z[τ]-foam: Goodman-Strauss's Dodecafoam as arithmetic in the icosahedral module

## One-sentence takeaway

Goodman-Strauss's Dodecafoam, which fills a regular dodecahedron with dodecahedral bubbles of sizes τ^-k, is rewritten as exact integer arithmetic in a rank-three Z[τ]-module acted on by 120 icosahedral matrices, which reproduces the 22 known rules and shows the bubble centres form a fractal set that no cut-and-project window can describe.

## Why it's lovely

A geometric substitution turns into plain number theory: the whole foam lives in the span of the six five-fold axes, the icosahedral group becomes 120 matrices over Z[τ], and the question of when an inflated cell is a union of cells becomes a finite linear system whose solutions are exactly the 22 rules found earlier by geometric search, with no rule at any scale beyond 1, τ, τ², τ³. Whether a point is the centre of a bubble of size τ^-k is then decided by at most k+3 exact sign vectors, without building the foam. The counting result is the surprise: the number of bubbles of size τ^-k grows like A·β^k with β = (1+√29)/2, so the conjugate image has box dimension at most log_τ β = 2.4123, below 3, and the bubbles are not selected by any cut-and-project window with interior, unlike classic quasicrystals. The same linear system in four dimensions reproduces the 718 clusters of a 120-cell star cut and adds one new scale. The bridge to Anoptic is the method: replacing floating geometry with exact integer addressing that lets you query a self-similar structure without generating it.

## Key ideas

- **Setup.** The twelve face planes of a regular dodecahedron cut the final stellation τ³D0 into 165 cells of seven shapes; a rule writes an inflated, translated cell as a union of cells.
- **Module.** All vertices live in one Z[τ]-module M of rank three spanned by the six five-fold axes; the icosahedral group acts by 120 matrices in GL(3, Z[τ]).
- **Rules as a linear system.** An inflated cell is a union of cells iff its facet levels lie in {±1, ±τ³} and it fits in the dodecahedron; solving this gives exactly 22 rules and none at other scales.
- **Addresses and sieving.** Bubble membership is decided by at most k+3 exact sign vectors; all bubbles of one size come from sieving points of M by the Galois-conjugate bound |x*| ≤ 2τ^k, proved with computer assistance.
- **Counting and window.** Bubble counts grow as A·β^k with β = (1+√29)/2; the conjugate closure has box dimension at most 2.4123, so there is no cut-and-project window with interior. Other foams from the 1999 article are sub-foams; 50,400 allowed substitutions give 18,899 bubble sets.

## Caveats

I read the abstract and the first pages of the introduction of v1 (21 Nov 2026, 25 pp.); I did not check the proofs, and one bound is stated as proved with computer assistance. The reconstruction of the 22 rules and the 718 four-dimensional clusters is a consistency check against earlier geometric searches, which I did not reproduce. It is unrefereed and two days old. It is pure geometry with no engineering claim.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.28955
- PDF: https://arxiv.org/pdf/2611.28955
