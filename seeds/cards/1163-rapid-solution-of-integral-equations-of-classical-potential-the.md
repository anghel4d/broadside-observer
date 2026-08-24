---
title: "Rapid Solution of Integral Equations of Classical Potential Theory"
authors:
  - "Vladimir Rokhlin"
year: 1985
venue: "Journal of Computational Physics"
arxiv: null
doi: "10.1016/0021-9991(85)90002-6"
source: "https://doi.org/10.1016/0021-9991(85)90002-6"
topics:
  - "fmm"
  - "integral-equations"
  - "potential-theory"
  - "rokhlin"
seed_rank: 1163
seed_batch: "fmm-2026-08-24"
reviewed: "2026-08-24"
pool: "engines"
relevance_score: 10
lineage: fast-multipole
cites:
  - title: "A Fast Algorithm for Particle Simulations"
    url: "https://doi.org/10.1016/0021-9991(87)90140-9"
    year: 1987
    arxiv: null
    doi: "10.1016/0021-9991(87)90140-9"
  - title: "Rapid Solution of Integral Equations of Scattering Theory in Two Dimensions"
    url: "https://doi.org/10.1016/0021-9991(90)90107-c"
    year: 1990
    arxiv: null
    doi: "10.1016/0021-9991(90)90107-c"
see:
  - "1166-a-fast-algorithm-for-particle-simulations"
  - "1167-the-rapid-evaluation-of-potential-fields-in-particle-systems"
  - "1171-rapid-solution-of-integral-equations-of-scattering-theory-in-tw"
---

# Rapid Solution of Integral Equations of Classical Potential Theory

## One-sentence takeaway

Before the 1987 particle FMM, Rokhlin showed that the integral equations of 2D potential theory have a rapidly computable far-field expansion — O(N) matrix-vector products for Laplace/Stokes BIE, not O(N²).

## Problem

Classical potential theory (Dirichlet/Neumann Laplace, Stokes) discretizes to a dense N×N system. Direct or iterative matvecs are O(N²). Hierarchical grouping existed as folklore; a provably accurate far-field factorization of the kernel did not.

## Design

Factor the 2D logarithmic kernel into a multipole (Laurent) expansion valid outside a disk, plus a local (Taylor) expansion valid inside a distant disk. Translations shift expansions between neighboring boxes. The resulting hierarchical scheme evaluates the potential of N boundary charges at N targets in O(N) with an exponential error bound in the truncation order p. This is the analytic engine Greengard later packaged as the particle FMM.

## Evidence

J. Comput. Phys. 60(2):187–207, 1985, DOI 10.1016/0021-9991(85)90002-6. Demmel's CS267 notes and every FMM survey name this as the integral-equation precursor of Greengard–Rokhlin 1987.

## Limitations

2D Laplace/Stokes kernels, uniform-ish panels, no adaptive tree, no Helmholtz oscillation. The 1987 particle paper and 1988 adaptive paper are the usable n-body form.

## Implications for Broadside

Broadside does not ship a BEM solver, but this is why FMM is not just a gravity trick: any kernel with a decaying far field (GI, acoustics, electrostatics, 2D fluids) is in scope. Do not remint every later BIE paper that cites this.

## Bottom line

Mint the 1985 integral-equation origin. The 1987 particle FMM is the n-body packaging.

## Links

- DOI: [10.1016/0021-9991(85)90002-6](https://doi.org/10.1016/0021-9991(85)90002-6)
