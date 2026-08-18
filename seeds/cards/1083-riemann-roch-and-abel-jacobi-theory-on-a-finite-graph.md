---
title: "Riemann-Roch and Abel-Jacobi theory on a finite graph"
authors: ["Matthew Baker", "Serguei Norine"]
year: 2007
venue: "Adv. Math."
arxiv: "math/0608360"
doi: "10.1016/j.aim.2007.04.012"
source: "https://arxiv.org/abs/math/0608360"
topics: [curiosity]
seed_rank: 1083
seed_batch: "curiosity-2026-08-19"
reviewed: "2026-08-19"
pool: "maths-foundations"
relevance_score: 9
lineage: chip-firing-riemann-roch
cites:
  - title: "Discrete Exterior Calculus"
    url: "https://arxiv.org/abs/math/0508341"
    year: 2005
    arxiv: "math/0508341"
    doi: null
  - title: "The lattice of integral flows and the lattice of integral cuts on a finite graph"
    url: "https://doi.org/10.24033/bsmf.2291"
    year: 1997
    arxiv: null
    doi: "10.24033/bsmf.2291"
  - title: "Chip-firing games on graphs"
    url: "https://doi.org/10.1016/S0195-6698(05)80029-4"
    year: 1991
    arxiv: null
    doi: "10.1016/S0195-6698(05)80029-4"
  - title: "Chip-firing and the critical group of a graph"
    url: "https://doi.org/10.1023/A:1018611014097"
    year: 1999
    arxiv: null
    doi: "10.1023/A:1018611014097"
see:
  - "1028-discrete-exterior-calculus"
  - "1051-finite-element-exterior-calculus"
  - "018-physics-topology-logic-and-computation-a-rosetta-stone"
  - "1023-an-aperiodic-monotile"
---

# Riemann-Roch and Abel-Jacobi theory on a finite graph

## One-sentence takeaway

A finite graph is a Riemann surface: divisors are chip configurations, principal divisors are Laplacian firings, the Jacobian has order equal to the number of spanning trees, and \(r(D)-r(K-D)=\deg(D)+1-g\) holds verbatim.

## Why it matters here

Why you might love this: the same linear algebra that counts spanning trees (Kirchhoff) is secretly the Picard group of a curve, and the Riemann–Roch formula — usually a wall of sheaf cohomology — becomes a combinatorial statement about whether you can fire chips out of debt. Reduced divisors / \(G\)-parking functions give a unique representative in each class; \(S^{(g)}\) is always surjective (Jacobi inversion); injectivity of \(S^{(k)}\) is exactly \((k+1)\)-edge-connectivity. Bridge: Anoptic already thinks in graphs and resource tokens — chip-firing is a conservative economy on an ECS graph, and the Baker–Norine rank is a precise answer to "can this influence-map / supply network still clear after you steal \(s\) chips from anywhere?"

## Key ideas

- \(\operatorname{Div}(G)=\mathbb{Z}^{V}\); linear equivalence \(D\sim D'\Leftrightarrow D-D'\in\operatorname{im}\Delta\); \(\operatorname{Jac}(G)=\operatorname{Div}^0/\operatorname{Prin}\) has order \(\kappa(G)\) (Matrix-Tree).
- Linear system \(|D|\) = effective divisors equivalent to \(D\); rank \(r(D)\ge s\) iff \(|D-E|\neq\emptyset\) for every effective \(E\) of degree \(s\). Canonical \(K=\sum(\deg v-2)(v)\), \(\deg K=2g-2\), \(g=|E|-|V|+1\).
- Abstract RR criterion (RR1–RR2) on any free abelian group with a degree-preserving equivalence; on graphs it is verified by \(v_0\)-reduced divisors and the non-special family \(\nu_P\) attached to linear orders on \(V\).
- Abel–Jacobi \(S_{v_0}:V\to\operatorname{Jac}\); \(S^{(k)}\) surjective iff \(k\ge g\), injective iff \(G\) is \((k+1)\)-edge-connected. Winning a dollar-game is \(|D|\neq\emptyset\).

## Caveats

- \(r(D)\) is *not* \(\dim L(D)-1\): \(L(D)\) is a tropical semimodule, not a vector space, and neither implication "\(r=0\Leftrightarrow |D|\) a singleton" survives.
- Unweighted loopless multigraphs; metric/weighted/infinite extensions exist later (tropical curves, Baker–Norine follow-ups) and are a different mint.
- Not a drop-in for DEC/FEEC: this is Picard theory on the *0-skeleton*, not a cochain Hodge Laplacian.

## Links

- arXiv: [math/0608360](https://arxiv.org/abs/math/0608360)
- Journal: [Adv. Math. 215 (2007) 766–788](https://doi.org/10.1016/j.aim.2007.04.012)
