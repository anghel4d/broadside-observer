---
title: "The sphere packing problem in dimension 8"
authors: ["Maryna S. Viazovska"]
year: 2017
venue: "Ann. of Math."
arxiv: "1603.04246"
doi: "10.4007/annals.2017.185.3.7"
source: "https://arxiv.org/abs/1603.04246"
topics: [curiosity]
seed_rank: 1085
seed_batch: "curiosity-2026-08-19"
reviewed: "2026-08-19"
pool: "maths-foundations"
relevance_score: 10
lineage: sphere-packing-modular
cites:
  - title: "New upper bounds on sphere packings I"
    url: "https://arxiv.org/abs/math/0110009"
    year: 2003
    arxiv: "math/0110009"
    doi: "10.4007/annals.2003.157.689"
  - title: "A proof of the Kepler conjecture"
    url: "https://doi.org/10.4007/annals.2005.162.1065"
    year: 2005
    arxiv: null
    doi: "10.4007/annals.2005.162.1065"
  - title: "The sphere packing problem in dimension 24"
    url: "https://arxiv.org/abs/1603.06518"
    year: 2017
    arxiv: "1603.06518"
    doi: "10.4007/annals.2017.185.3.8"
  - title: "Elliptic Modular Forms and Their Applications"
    url: "https://doi.org/10.1007/978-3-540-74119-0_1"
    year: 2008
    arxiv: null
    doi: "10.1007/978-3-540-74119-0_1"
see:
  - "1023-an-aperiodic-monotile"
  - "1024-sturmian-lattices-and-aperiodic-tile-sets"
  - "1053-projective-geometric-algebra"
  - "1028-discrete-exterior-calculus"
---

# The sphere packing problem in dimension 8

## One-sentence takeaway

A radial Schwartz function built as a Laplace transform of weakly holomorphic modular forms is a Cohn–Elkies optimizer, so no packing of unit balls in \(\mathbb{R}^8\) beats the \(E_8\) lattice (density \(\pi^4/384\)).

## Why it matters here

Why you might love this: the linear-programming bound for sphere packing had been *one part in a million* from \(E_8\) since 2003; Viazovska writes down the missing magic function in closed form, and the Poisson summation identity forces equality. The function and its Fourier transform have double zeros on the \(E_8\) shells, manufactured from Eisenstein series, quasimodular \(E_2\), and \(\theta\)-constants, then glued by contour integrals. Twenty-three pages, no computer search. Bridge: \(E_8\) is the exceptional lattice Anoptic already meets in root systems and Gosset polytopes; the proof is a template for "find a Fourier eigenfunction with prescribed zeros" that also sits behind Poisson-disk sampling and lattice quantizers.

## Key ideas

- Cohn–Elkies: an admissible \(f\le 0\) off the unit ball with \(\widehat f\ge 0\) everywhere bounds packing density by \(f(0)/\widehat f(0)\cdot\mathrm{Vol}\,B(0,1/2)\). Optimality in dimension 8 wants \(f(0)/\widehat f(0)=16\).
- Poisson on \(\Lambda_8\) plus the sign conditions force \(g\) and \(\widehat g\) to vanish (to second order) at every nonzero lattice vector of length \(>\sqrt{2}\).
- Construct radial Schwartz eigenfunctions \(a=\mathcal{F}a\) and \(b=-\mathcal{F}b\) as integrals of weakly holomorphic forms \(\phi_0,\psi_I,\psi_T,\psi_S\); a linear combination \(g=(\pi i/8640)a+(i/240\pi)b\) is optimal. Sign of the Laplace-transform densities is checked by truncated Fourier expansions plus interval arithmetic.
- Uniqueness of the densest *periodic* packing follows from Cohn–Elkies Conjecture 8.1, which \(g\) satisfies. The 24-dimensional Leech case is the sibling paper 1603.06518.

## Caveats

- Dimension 8 (and 24) are the miracles; the same modular-form construction does not currently give exact optima in other dimensions.
- The interval-arithmetic sign check is finite but essential — this is not a purely formal modular-forms identity.
- Mint \(E_8\) here; do *not* also mint the Leech/24 paper as a second card this cycle.

## Links

- arXiv: [1603.04246](https://arxiv.org/abs/1603.04246)
- Journal: [Ann. of Math. 185 (2017) 991–1015](https://doi.org/10.4007/annals.2017.185.3.7)
