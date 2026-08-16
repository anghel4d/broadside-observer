---
title: "Finite element exterior calculus: from Hodge theory to numerical stability"
authors: ["Douglas N. Arnold", "Richard S. Falk", "Ragnar Winther"]
year: 2010
venue: "Bull. Amer. Math. Soc."
arxiv: "0906.4325"
doi: "10.1090/S0273-0979-10-01278-4"
source: "https://arxiv.org/abs/0906.4325"
topics: [curiosity]
seed_rank: 1051
seed_batch: "curiosity-2026-08-17"
reviewed: "2026-08-17"
pool: "maths-foundations"
relevance_score: 9
lineage: finite-element-exterior
cites:
  - title: "Discrete Exterior Calculus"
    url: "https://arxiv.org/abs/math/0508341"
    year: 2005
    arxiv: "math/0508341"
    doi: null
  - title: "Finite element exterior calculus, homological techniques, and applications"
    url: "https://doi.org/10.1017/S0962492906210018"
    year: 2006
    arxiv: null
    doi: "10.1017/S0962492906210018"
  - title: "Geometric Integration Theory"
    url: "https://doi.org/10.1515/9781400877577"
    year: 1957
    arxiv: null
    doi: "10.1515/9781400877577"
  - title: "A mixed finite element method for 2-nd order elliptic problems"
    url: "https://doi.org/10.1007/BFb0064470"
    year: 1977
    arxiv: null
    doi: "10.1007/BFb0064470"
see:
  - "1028-discrete-exterior-calculus"
  - "5-radiance-cascades-a-novel-approach-to-calculating-global-ill"
  - "1032-real-time-meshlet-extraction-from-scalar-volumes"
  - "18-physics-topology-logic-and-computation-a-rosetta-stone"
  - "97-mesh-shaders-in-the-vulkan-ecosystem"
---

# Finite element exterior calculus: from Hodge theory to numerical stability

## One-sentence takeaway

Stable mixed finite elements for Hodge-type PDEs exist exactly when the trial spaces form a subcomplex of a Hilbert complex *and* admit a bounded cochain projection — DEC's analysis twin, with the Koszul complex manufacturing the Whitney / Raviart–Thomas / Nédélec families.

## Why it matters here

Why you might love this: card 1028 gave Anoptic the combinatorial Stokes machine (circumcentric dual, discrete Hodge); FEEC is the missing *stability* theorem that says when a piecewise-polynomial subcomplex actually converges, and why naive continuous linears for mixed Poisson or the vector Laplacian explode at reentrant corners. Bridge: radiance as forms, meshlet volumes, and mixed Hodge Laplacians all want the same two hypotheses — subcomplex + bounded cochain projection — not a bigger mesh.

## Key ideas

- Hilbert complex: closed densely-defined differentials \(d^k: W^k \to W^{k+1}\) with \(d\circ d=0\); domain complex carries the graph norm; harmonic forms \(\mathfrak{H}^k = \ker d \cap (\mathrm{im}\,d)^\perp\).
- Mixed Hodge Laplacian as a saddle: \((\sigma,u,p)\in V^{k-1}\times V^k\times\mathfrak{H}^k\) with well-posedness from a Poincaré inequality that *does not* transfer to arbitrary Galerkin subspaces (the 1D mixed Poisson counterexample, the nonconvex-polygon vector Laplacian).
- Two hypotheses suffice: (i) \(d V_h^k \subset V_h^{k+1}\) (subcomplex), (ii) a uniformly \(V\)-bounded cochain projection \(\pi_h\). Then discrete cohomology is isomorphic, the discrete Poincaré constant is uniform, and the mixed method is stable.
- Shape functions: two polynomial families \(\mathcal{P}_r\Lambda^k\) and \(\mathcal{P}_r^-\Lambda^k\) built from the Koszul complex; \(\mathcal{P}_1^-\Lambda^k\) recovers Whitney forms. Degrees of freedom make them finite-element-assemblable. Elasticity complex (second-order differential) is a second Hilbert complex with the first stable polynomial mixed elements for linear elasticity.

## Caveats

- This is the 2010 BAMS synthesis (arxiv 2009); the 2006 Acta Numerica survey is the shorter sibling — mint the analysis paper, cite the survey.
- Bounded cochain projections are *not* the naive interpolants; constructing them is the hard geometric work (smoothed projections).
- Not a drop-in replacement for DEC on a half-edge mesh: FEEC wants a simplicial complex plus polynomial shape functions, not just a circumcentric dual.

## Links

- arXiv: [0906.4325](https://arxiv.org/abs/0906.4325)
- Journal: [Bull. Amer. Math. Soc. 47 (2010) 281–354](https://doi.org/10.1090/S0273-0979-10-01278-4)
