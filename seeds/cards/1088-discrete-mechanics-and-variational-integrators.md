---
title: "Discrete mechanics and variational integrators"
authors: ["J. E. Marsden", "M. West"]
year: 2001
venue: "Acta Numerica"
arxiv: null
doi: "10.1017/S096249290100006X"
source: "https://doi.org/10.1017/S096249290100006X"
topics: [curiosity]
seed_rank: 1088
seed_batch: "curiosity-2026-08-19"
reviewed: "2026-08-19"
pool: "physics"
relevance_score: 9
lineage: variational-integrators
cites:
  - title: "Mechanical integrators derived from a discrete variational principle"
    url: "https://doi.org/10.1016/S0167-2789(97)00051-1"
    year: 1997
    arxiv: null
    doi: "10.1016/S0167-2789(97)00051-1"
  - title: "Geometric numerical integration illustrated by the Störmer–Verlet method"
    url: "https://doi.org/10.1017/S0962492902000077"
    year: 2003
    arxiv: null
    doi: "10.1017/S0962492902000077"
  - title: "Hamiltonian systems and transformation in phase space"
    url: "https://doi.org/10.1007/BF01344219"
    year: 1915
    arxiv: null
    doi: "10.1007/BF01344219"
  - title: "Finite element exterior calculus: from Hodge theory to numerical stability"
    url: "https://arxiv.org/abs/0906.4325"
    year: 2010
    arxiv: "0906.4325"
    doi: "10.1090/S0273-0979-10-01278-4"
see:
  - "1051-finite-element-exterior-calculus"
  - "1028-discrete-exterior-calculus"
  - "1056-reverse-derivative-categories"
  - "018-physics-topology-logic-and-computation-a-rosetta-stone"
---

# Discrete mechanics and variational integrators

## One-sentence takeaway

Discretise the *Hamilton principle* on \(Q\times Q\) rather than the ODE: the discrete Euler–Lagrange equation is a symplectic (and, with a group action, momentum-map-preserving) integrator whose backward error is a nearby Lagrangian system.

## Why it matters here

Why you might love this: symplectic integrators are usually derived by requiring a matrix to stay in \(\mathrm{Sp}(2n)\); here symplecticity is *Noether for discrete time* — the discrete action sum is stationary, so the discrete Cartan form is closed, so the update is symplectic, and a cyclic coordinate still produces a conserved momentum. No Runge–Kutta tableau, no order conditions by hand: choose a quadrature for \(L\), restrict to \(Q\times Q\), solve the implicit DEL. Bridge: Anoptic rigid bodies, Cosserat rods, and Lie-group attitude all want exactly this — a timestep that cannot drift off the momentum sphere — and FEEC/DEC (1051/1028) is the spatial twin of the same variational creed.

## Key ideas

- Discrete Lagrangian \(L_d:Q\times Q\to\mathbb{R}\) approximates the action integral over one step; DEL: \(D_1 L_d(q_k,q_{k+1})+D_2 L_d(q_{k-1},q_k)=0\). Equivalent to a discrete Legendre transform producing a symplectic map on \(T^*Q\).
- Discrete Noether: a variation that leaves \(L_d\) invariant yields a conserved discrete momentum map. Constrained, nonholonomic, and forced systems have parallel discrete variational principles.
- Variational error analysis: if \(L_d\) approximates the exact discrete Lagrangian to order \(r\), the integrator is order \(r\); backward error interprets the numerical trajectory as the exact discrete Euler–Lagrange flow of a modified Lagrangian.
- Includes Lie–Poisson / Euler–Poincaré reductions, asynchronous variational integrators, and a dictionary with Newmark, SHAKE/RATTLE, and symplectic partitioned RK.

## Caveats

- No arXiv; canonical copy is Acta Numerica 10 (2001) 357–514, PDF on Marsden's site. Hairer–Lubich–Wanner is the complementary *one-step-map* treatise — cite, do not remint.
- Implicit DEL solves a (usually) nonlinear system per step; cheap explicit methods are a special case, not the point.
- Not a graphics "discrete shells / elastic rods" paper; those are applications sitting on this foundation.

## Links

- Journal: [Acta Numerica 10 (2001) 357–514](https://doi.org/10.1017/S096249290100006X)
- Author PDF: [MaWe2001](http://www.cds.caltech.edu/~marsden/bib/2001/09-MaWe2001/MaWe2001.pdf)
