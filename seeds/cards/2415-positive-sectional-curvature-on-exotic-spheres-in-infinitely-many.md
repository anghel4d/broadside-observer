---
title: "Positive sectional curvature on exotic spheres in infinitely many dimensions"
authors:
  - "Fernando Galaz-García"
year: 2026
venue: "arXiv preprint (math.DG)"
arxiv: "2610.31528"
doi: null
source: "https://arxiv.org/abs/2610.31528"
topics:
  - "riemannian-geometry"
  - "positive-curvature"
  - "exotic-spheres"
  - "differential-topology"
  - "lean4"
  - "ai-assisted-proof"
seed_rank: 2415
seed_batch: "curiosity-2026-10-25"
reviewed: "2026-10-25"
pool: "maths-foundations"
relevance_score: 8
cites:
  - title: "Positive sectional curvature on exotic spheres in infinitely many dimensions"
    url: "https://arxiv.org/abs/2610.31528"
    year: 2026
    arxiv: "2610.31528"
    doi: null
see: ["2203-nonnegative-curvature-einstein-classification-and-an-l2-topological", "2213-a-three-manifold-without-conjugate-points-or-nonpositive-curvature"]
---

# Positive sectional curvature on exotic spheres in infinitely many dimensions

## One-sentence takeaway

In every dimension n ≡ 3 (mod 4) with n ≥ 11 and n ≢ 255 (mod 256), there is an exotic n-sphere with a metric of strictly positive sectional curvature. These are the first closed simply connected positively curved manifolds above dimension 24 that are not diffeomorphic to a compact rank-one symmetric space.

## Why it's lovely

Positive sectional curvature is one of geometry's most stubborn frontiers. Before summer 2026, the simply connected examples besides spheres and projective spaces were a handful of special spaces in dimensions 6, 7, 12, 13 and 24. This paper turns a curvature problem into a characteristic-class computation. A recent gluing pipeline (Sperança's S³–S³ "star" bundles, the Deng–Hu–Zhang compatible-disk construction and the Reiser–Wraith gluing theorem) gives every "star sphere" positive curvature. The only remaining question is which homotopy spheres are star spheres, which comes down to whether an Eells–Kuiper invariant is nonzero. That invariant turns out to be an integer slice degree times one coefficient of a power series built from the Â- and L-genera, and the coefficient's 2-adic valuation decides everything. It is classic Milnor-era exotic-sphere technology, made newly useful by a 2026 curvature construction, and it sits next to the library's interest in spheres with surprising structure (such as the S⁶ complex-structure question).

## Key ideas

- **Star spheres.** A homotopy sphere Σ_{ρ,β} = D(V) ∪ −D(V) is glued by a "reentrance" diffeomorphism built from an orthogonal S³-representation ρ and a conjugation-equivariant map β. Within the cited framework, every such sphere carries positive sectional curvature.
- **The family.** ρ_b acts on V_b = R³ ⊕ Hᵇ by left multiplication on the quaternionic part, which is semifree and fixes a 2-sphere. This gives spheres of dimension 4b + 3; b = 2 and b = 3 were treated in earlier work.
- **Theorem C, an Eells–Kuiper formula.** µ(Σ_{ρ_b,β}) = k(β)·r_b in Q/Z, where k(β) is a slice degree on an invariant 6-sphere and r_b is an explicit power-series coefficient.
- **Theorem A by 2-adic analysis.** For b ≥ 2 with b ≢ 63 (mod 64), some β makes the invariant nonzero, so the sphere is exotic. No computer is needed for this; an exact computation covers the excluded class for 11 ≤ n < 2¹⁶.
- **Formalization trail.** The curvature step uses the author's earlier theorem, whose new arguments are formalised in Lean 4/Mathlib with cited literature results (including Reiser–Wraith) as explicit hypotheses. The author says a Lean formalisation of this paper has also been developed.

## Caveats

The positive-curvature conclusion inherits everything from very recent 2026 constructions, some of them preprints, and uses the Reiser–Wraith gluing theorem as a hypothesis. Independent scrutiny of that pipeline matters as much as this paper's topology. Dimensions ≡ 255 (mod 256) beyond 2¹⁶, and all dimensions not ≡ 3 (mod 4), are not covered. The paper also mentions separate recent preprints claiming positive curvature on S²×S² and S³×S³, which would contradict Hopf's conjectures. Those are not this paper's claims and should be treated with caution. The author used ChatGPT Astra and Claude Opus 5.5 for exploration, drafting, programs and internal review, and states he independently checked the arguments. Not yet refereed.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.31528
- PDF: https://arxiv.org/pdf/2610.31528
- Lean formalisation of the earlier 8- and 10-sphere work (Zenodo): https://doi.org/10.5281/zenodo.23205660
