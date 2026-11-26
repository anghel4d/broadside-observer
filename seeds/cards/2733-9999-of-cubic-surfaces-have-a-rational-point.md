---
title: "99.99% of cubic surfaces have a rational point"
authors:
  - "Tim Browning"
  - "Anna Zanoli"
year: 2026
venue: "arXiv preprint (math.NT)"
arxiv: "2611.33932"
doi: null
source: "https://arxiv.org/abs/2611.33932"
version_reviewed: "v1"
topics:
  - "hasse-principle"
  - "cubic-surfaces"
  - "arithmetic-statistics"
  - "brauer-manin-obstruction"
  - "rational-points"
seed_rank: 2733
seed_batch: "curiosity-2026-11-27"
reviewed: "2026-11-27"
pool: "maths-foundations"
relevance_score: 7
lineage: arithmetic-geometry
cites:
  - title: "99.99% of cubic surfaces have a rational point"
    url: "https://arxiv.org/abs/2611.33932"
    year: 2026
    arxiv: "2611.33932"
    doi: null
  - title: "The Hasse principle for random Fano hypersurfaces (Browning, Le Boudec, Sawin)"
    url: "https://arxiv.org/abs/2006.02356"
    year: 2023
    arxiv: "2006.02356"
    doi: null
  - title: "How often does a cubic hypersurface have a rational point? (Beneish, Keyes)"
    url: "https://arxiv.org/abs/2405.06584"
    year: 2025
    arxiv: "2405.06584"
    doi: null
see: []
---

# 99.99% of cubic surfaces have a rational point

## One-sentence takeaway

Ordered by coefficient height, almost every cubic surface over Q satisfies the Hasse principle. That completes the Poonen–Voloch conjecture for Fano hypersurfaces, and combined with Beneish–Keyes's local density (≈ 0.999927) it means more than 99.99% of cubic surfaces have a rational point.

## Why it's lovely

Whether a polynomial equation has a rational solution is undecidable in general and maddening in particular. Cubic surfaces are where the local-to-global (Hasse) principle first starts to fail. The headline turns that into a precise statistic: the only thing usually stopping a cubic surface from having a rational point is a local obstruction, and local obstructions are rare. The paper fills the last gap left by Browning–Le Boudec–Sawin, whose method handled every Fano case except cubic surfaces because the second-moment estimate is hardest there. It then gets more. Brauer–Manin obstructions occur only for a proportion ≪ 1/A of surfaces of height ≤ A. Failures of the Hasse principle have proportion O((log A)^{−1/144}). The least rational point typically has height just above ‖a_V‖, at the optimal scale. It is a nice example of "random algebraic object" statistics, the arithmetic cousin of asking how often a random constraint system is satisfiable.

## Key ideas

- **Theorem 1.1.** lim ϱ(A) = ϱ_loc: the proportion of cubic surfaces with a rational point equals the proportion that are everywhere locally soluble.
- **Corollary 1.2.** Using Beneish–Keyes's rigorous numerics for the Euler product, ϱ_loc ≈ 0.999927, so more than 99.99% of cubic surfaces have a rational point.
- **Theorem 1.3.** Among everywhere locally soluble surfaces, the proportion with a Brauer–Manin obstruction is ≪ 1/A.
- **Theorem 1.4.** For any ψ with ψ(u)/u → ∞, almost all locally soluble surfaces have a point of height ≤ ψ(‖a_V‖). This complements Le Boudec's lower bound and gives the optimal scale.
- **Method.** Compare the point count N_V(B) with a localized count, using a truncated second-moment calculation for the difference. That is the step that previously failed for cubic surfaces.

## Caveats

This is a v1 preprint (25 Nov 2026, 18 pp.), not refereed. I read the abstract, the introduction and the outline of the argument, not the moment calculation. "Almost all" is by height ordering of the coefficient equations, not by isomorphism class. The 99.99% figure relies on Beneish–Keyes's numerical evaluation of ϱ_loc. The authors state that the Section 6 arguments (Brauer–Manin) were developed with help from ChatGPT-6 and Claude Opus 5.5 and checked by them.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.33932
- PDF: https://arxiv.org/pdf/2611.33932
- Browning–Le Boudec–Sawin: https://arxiv.org/abs/2006.02356
- Beneish–Keyes: https://arxiv.org/abs/2405.06584
