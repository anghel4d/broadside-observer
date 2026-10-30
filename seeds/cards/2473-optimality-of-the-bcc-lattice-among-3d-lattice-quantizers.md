---
title: "Optimality of the BCC lattice among 3D lattice quantizers"
authors:
  - "David P. Bourne"
  - "Filippo Cagnetti"
  - "Steven M. Roper"
year: 2026
venue: "arXiv preprint (math.AP)"
arxiv: "2610.39705"
doi: null
source: "https://arxiv.org/abs/2610.39705"
topics:
  - "lattices"
  - "quantization"
  - "optimal-transport"
  - "sampling"
seed_rank: 2473
seed_batch: "curiosity-2026-10-31"
reviewed: "2026-10-31"
pool: "maths-foundations"
relevance_score: 7
cites:
  - title: "Optimality of the BCC lattice among 3D lattice quantizers"
    url: "https://arxiv.org/abs/2610.39705"
    year: 2026
    arxiv: "2610.39705"
    doi: null
see: ["1947-triangular-lattice-optimality-long-range-riesz-and-coulomb-energies", "2296-lattices-with-large-kissing-number-from-local-density", "1085-the-sphere-packing-problem-in-dimension-8"]
---

# Optimality of the BCC lattice among 3D lattice quantizers

## One-sentence takeaway

Among 3D Bravais lattices of unit determinant, the body-centred cubic (BCC) lattice locally minimizes the p-th moment of its Voronoi cell for every p ∈ [1,∞) and globally for p near 2. This is strong support for the Graf–Luschgy conjecture that BCC is the best lattice quantizer for every p, and a bifurcation theorem shows that p = 2 is a special case.

## Why it's lovely

If you must replace a uniform 3D volume with a lattice of points (for sampling, volume rendering, quantizing colors or integrating), which lattice wastes least? For mean-squared error the answer is BCC, not the cubic grid and not FCC (Barnes–Sloane 1983), and for worst-case covering it is also BCC (Bambah 1954). This paper shows the same lattice is at least locally best for every error exponent in between, while the set of critical lattices moves with p. Three is exactly the dimension where this is subtle: in 2D the hexagonal lattice wins for every p, and in 4D the winner depends on p. It is directly useful for engine sampling grids (BCC volume sampling is a known graphics trick) and close to the library's lattice-optimality cards.

## Key ideas

- **Reduction.** Optimal W_p quantization of Lebesgue measure by lattice-supported measures Γ-converges to minimizing E_p(L), the p-th moment of the Voronoi cell, over determinant-1 lattices.
- **Known endpoints.** p = 2 (Barnes–Sloane, vector quantization) and p = ∞ (Bambah, sphere covering) both give BCC.
- **Main results.** BCC is a local minimizer for all p ≥ 1 and a global minimizer for p near 2, using the Fedorov and Conway–Sloane classifications of Voronoi cells and delicate regularity estimates for E_p.
- **Bifurcation.** Critical-point branches depend on p, and one bifurcates from the FCC branch at p = 2, so p = 2 is distinguished even though the conjectured minimizer is not.

## Caveats

Global optimality for all p remains open; only a neighborhood of p = 2 is proved. Only lattices are considered, not arbitrary point sets, and the paper is about 100 pages of analysis. I read the abstract, the contents and the introduction.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.39705
- PDF: https://arxiv.org/pdf/2610.39705
