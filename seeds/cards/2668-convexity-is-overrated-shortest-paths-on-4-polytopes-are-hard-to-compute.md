---
title: "Convexity is overrated: Shortest paths on 4-polytopes are hard to compute"
authors:
  - "Igor Pak"
year: 2026
venue: "arXiv preprint (cs.CG)"
arxiv: "2611.25164"
doi: null
source: "https://arxiv.org/abs/2611.25164"
version_reviewed: "v1"
topics:
  - "computational-geometry"
  - "geodesics"
  - "convex-polytopes"
  - "np-hardness"
  - "sqrt-sum"
  - "unfoldings"
seed_rank: 2668
seed_batch: "curiosity-2026-11-21"
reviewed: "2026-11-20"
pool: "maths-foundations"
relevance_score: 8
lineage: algorithms-and-complexity
cites:
  - title: "Convexity is overrated: Shortest paths on 4-polytopes are hard to compute"
    url: "https://arxiv.org/abs/2611.25164"
    year: 2026
    arxiv: "2611.25164"
    doi: null
  - title: "Metric Combinatorics of Convex Polyhedra: Cut Loci and Nonoverlapping Unfoldings"
    url: "https://doi.org/10.1007/s00454-006-1249-0"
    year: 2008
    arxiv: null
    doi: "10.1007/s00454-006-1249-0"
see: []
---

# Convexity is overrated: Shortest paths on 4-polytopes are hard to compute

## One-sentence takeaway

Deciding whether the geodesic distance between two points on the boundary of a rational convex 4-polytope is at most a given value is NP-hard, and also SqrtSum-hard. Some rational 4-polytopes with 18m+8 facets have two points joined by exponentially many (2^m) distinct shortest paths of equal rational length, unlike the O(n) shortest paths possible on 3-polytopes.

## Why it's lovely

On a convex 3-polytope, the surface of a die or a gem, shortest paths are easy. Unfold the faces flat without overlap and draw a straight line, and Sharir–Schorr (1986) turned that into a polynomial-time algorithm. In R³ with polyhedral obstacles, Canny and Reif proved the problem NP-hard in 1987. The boundary of a convex 4-polytope is a 3-dimensional space, which leaves an obvious question: which of these two does it resemble? Pak writes that 'for over twenty years, we believed' the answer was 'like 3-polytopes', and Miller and Pak's 2008 unfolding paper made conjectures in that direction. Here he proves the opposite. Convexity alone does not tame geodesics once the surface is 3-dimensional. The gadgets encode Partition with 'lenses' of facets, where each lens lets a path take one of two equal-length routes. There is also a lovely arithmetic side result: the squared geodesic distance between rational boundary points of a rational convex polytope is always a totally positive multiquadratic number. For engines and navigation, this explains why everyone discretizes (fast marching, eikonal sweeps, navmesh graphs) once a shortest-path problem leaves 2D surfaces, and it closes Rote's face-sequence question as well.

## Key ideas

- **Main theorem.** Given a rational convex 4-polytope P, rational facet-interior points v, x and a rational τ, deciding dist_∂P(v, x) ≤ τ is NP-hard. A Partition instance of size m maps to a polytope with exactly 18m + 8 facets.
- **Exponential multiplicity.** R_m has 2^m regular, simple, strictly monotone shortest paths between v_m and x_m, with pairwise distinct facet galleries. This disproves Miller–Pak Conjectures 9.2–9.4 and answers both versions of Rote's face-sequence question in the negative.
- **SqrtSum-hardness.** A Turing reduction embeds each radicand A_i as an integer vector with v_i · v_i = A_i, so a boundary distance equals 2n + 1 + λΣ√A_i.
- **Arithmetic.** The squared geodesic distance between distinct rational boundary points of a rational convex polytope is a totally positive multiquadratic number.
- **Ancestry.** The construction adapts Canny–Reif's encoding and separation control for obstacles in R³ to the boundary of a convex body.

## Caveats

I read the abstract and the first three pages of the introduction of v1 (64 pages, dated 20 Nov 2026); it is not refereed. The hardness is for exact distance with binary-encoded rationals. Approximate geodesics, which are what practice uses, are not addressed here. 'Exponentially many shortest paths' is a worst case built from special gadgets.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.25164
- PDF: https://arxiv.org/pdf/2611.25164
- Miller & Pak, Metric combinatorics of convex polyhedra (DCG 2008): https://doi.org/10.1007/s00454-006-1249-0
