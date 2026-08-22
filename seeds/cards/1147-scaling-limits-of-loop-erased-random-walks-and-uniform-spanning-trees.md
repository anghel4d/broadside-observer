---
title: "Scaling limits of loop-erased random walks and uniform spanning trees"
authors: ["Oded Schramm"]
year: 2000
venue: "Israel J. Math."
arxiv: "math/9904022"
doi: "10.1007/BF02803524"
source: "https://arxiv.org/abs/math/9904022"
topics: [curiosity]
seed_rank: 1147
seed_batch: "curiosity-2026-08-23"
reviewed: "2026-08-23"
pool: "maths-foundations"
relevance_score: 10
lineage: schramm-loewner
cites:
  - title: "Schramm Loewner Evolution and Liouville Quantum Gravity"
    url: "https://arxiv.org/abs/1012.4800"
    year: 2011
    arxiv: "1012.4800"
    doi: "10.1103/PhysRevLett.107.131305"
  - title: "Random planar curves and Schramm-Loewner evolutions"
    url: "https://arxiv.org/abs/math/0303354"
    year: 2004
    arxiv: "math/0303354"
    doi: null
  - title: "Schramm-Loewner Evolution"
    url: "https://arxiv.org/abs/0712.3256"
    year: 2007
    arxiv: "0712.3256"
    doi: null
  - title: "The natural parametrization for the Schramm-Loewner evolution"
    url: "https://arxiv.org/abs/0906.3804"
    year: 2009
    arxiv: "0906.3804"
    doi: null
see:
  - "1121-random-domino-tilings-and-the-arctic-circle-theorem"
  - "1083-riemann-roch-and-abel-jacobi-theory-on-a-finite-graph"
  - "1085-the-sphere-packing-problem-in-dimension-8"
---

# Scaling limits of loop-erased random walks and uniform spanning trees

## One-sentence takeaway

Drive the Loewner differential equation by Brownian motion on the circle: the resulting random curve is the candidate scaling limit of loop-erased random walk, and a variation is conjectured to be the boundary of a critical percolation cluster.

## Why it's lovely

Why you might love this: a discrete random path, after you erase its loops, is secretly *grown* by a complex ODE whose driving function is one-dimensional Brownian motion. Conformal maps eat the curve; the only randomness left is a Brownian path on the boundary. This is a different slice from the arctic circle (1121): that is a dimer *limit shape*, a region; this is a random *curve* whose law is conformally invariant. The paper that invented SLE.

## Problem

Loop-erased random walk and the uniform spanning tree on a fine grid in the plane are expected to have conformally invariant scaling limits, but in 1999 those limits had not been constructed. What stochastic process on curves is forced by conformal invariance plus a domain Markov property?

## Design

Subsequential scaling limits of LERW and UST exist; any LERW subsequential limit is a.s. a simple path, and the UST trunk is a.s. a topological tree dense in the plane. Assuming conformal invariance of the LERW scaling limit, the Loewner ODE \(\partial_t f = z\,(\zeta(t)+z)/(\zeta(t)-z)\,\partial_z f\) driven by \(\zeta(t)=B(-2t)\) (Brownian motion on the circle) has the same law as LERW from 0 to \(\partial\mathbb{U}\). Schramm notes that a variation should describe percolation interfaces.

## Evidence

The identification of the Loewner driver is a theorem *conditional* on conformal invariance; existence of the scaling limit and the conformal invariance were proved later (Lawler–Schramm–Werner). Journal: *Israel J. Math.* 118 (2000) 221–288, DOI `10.1007/BF02803524`. SLE+LQG welding (Duplantier–Sheffield), Werner's Saint-Flour notes, and natural parametrisation are cited, not minted.

## Limitations

The 1999 paper constructs the candidate, not the full convergence theorem. Discrete-to-SLE convergence for percolation, Ising, UST, and LERW is a subsequent decade. Not an arctic-circle or dimer-shape paper.

## Implications for Broadside

A lattice model with a local Markov property plus conformal symmetry produces a Euclidean continuum object — the same moral as 1121's circle, now for paths rather than regions. Graphs that carry a Riemann–Roch theory (1083) and packings that saturate Euclidean density (1085) sit nearby: this is the random-conformal neighbour.

## Bottom line

Mint the Brownian driver. Random simple paths from a one-dimensional noise.

## Links

- arXiv: [math/9904022](https://arxiv.org/abs/math/9904022)
- Journal: [Israel J. Math. 118 (2000) 221–288](https://doi.org/10.1007/BF02803524)
