---
title: "Min-Max theory and the Willmore conjecture"
authors: ["Fernando C. Marques", "André Neves"]
year: 2014
venue: "Ann. of Math."
arxiv: "1202.6036"
doi: "10.4007/annals.2014.179.2.6"
source: "https://arxiv.org/abs/1202.6036"
topics: [curiosity]
seed_rank: 1149
seed_batch: "curiosity-2026-08-23"
reviewed: "2026-08-23"
pool: "maths-foundations"
relevance_score: 10
lineage: willmore
cites:
  - title: "The Willmore conjecture"
    url: "https://arxiv.org/abs/1409.7664"
    year: 2014
    arxiv: "1409.7664"
    doi: null
  - title: "Minmax Hierarchies, Minimal Fibrations and a PDE based Proof of the Willmore Conjecture"
    url: "https://arxiv.org/abs/2007.05467"
    year: 2020
    arxiv: "2007.05467"
    doi: null
  - title: "Bourbaki Seminar 1081 : Min-max methods and the Willmore conjecture, after Fernando Codá Marques and André Arroja Neves"
    url: "https://arxiv.org/abs/1402.1271"
    year: 2014
    arxiv: "1402.1271"
    doi: null
see:
  - "1051-finite-element-exterior-calculus"
  - "1052-discrete-conformal-maps-and-ideal-hyperbolic-polyhedra"
  - "1088-discrete-mechanics-and-variational-integrators"
---

# Min-Max theory and the Willmore conjecture

## One-sentence takeaway

Every torus immersed in \(\mathbb{R}^3\) has Willmore energy \(\int H^2 \ge 2\pi^2\), with equality precisely on the Clifford torus (up to conformal transformations of \(\mathbb{R}^3\)): the least-wrinkled torus is the torus of revolution.

## Why it's lovely

Why you might love this: among all possible doughnuts in space, the roundest is the one you already picture — a circle of radius 1 revolved at distance \(\sqrt{2}\) from an axis — and the proof is not a PDE estimate on that surface but a min-max of *minimal surfaces in \(S^3\)*. Bending energy, a conformal invariant known to Blaschke, is forced from below by Almgren–Pitts min-max. Geometry leftover of FEEC / discrete conformal maps, not a remint of those.

## Problem

Willmore (1965) asked for the infimum of \(\int_\Sigma H^2\) over immersed tori in \(\mathbb{R}^3\). The energy is conformally invariant, so the problem is equivalently about surfaces in \(S^3\). Existence of a minimiser in each conformal class is subtle; the global bound \(2\pi^2\), achieved by the Clifford torus, resisted fifty years of partial results (tubes, tori of revolution, small-curvature integral).

## Design

Stereographic projection converts Willmore energy in \(\mathbb{R}^3\) into area of a corresponding minimal surface in \(S^3\). Marques–Neves run Almgren–Pitts min-max on the five-parameter family of Clifford tori and equatorial spheres in \(S^3\), produce a minimal surface of area \(2\pi^2\) that is not a sphere, and identify it as the Clifford torus. Combined with the index/genus constraint, every immersed torus is at least that wrinkled.

## Evidence

96-page proof; journal *Annals of Mathematics* 179 (2014) no. 2, 683–782, DOI `10.4007/annals.2014.179.2.6`. Equality case: Clifford torus up to conformal maps. Later surveys (1409.7664) and alternative PDE min-max (Rivière) are cited, not minted. An earlier claimed proof via Davey–Stewartson spectral curves (math/0203224) is not this theorem.

## Limitations

Embedded/immersed tori in \(\mathbb{R}^3\); higher genus, constrained Willmore, and higher codimension remain open in various forms. The argument is GMT-heavy; it is not a discrete-differential-geometry algorithm.

## Implications for Broadside

Willmore energy is the continuum bending term that discrete conformal maps (1052) and variational integrators (1088) discretise, and FEEC (1051) is the cochain complex in which a discrete mean-curvature flow would live. The theorem is the continuum target those discretisations aim at: the roundest torus is a min-max critical point.

## Bottom line

Mint the least-wrinkled torus. Min-max of minimal surfaces, not a curvature estimate.

## Links

- arXiv: [1202.6036](https://arxiv.org/abs/1202.6036)
- Journal: [Ann. of Math. 179 (2014) 683–782](https://doi.org/10.4007/annals.2014.179.2.6)
