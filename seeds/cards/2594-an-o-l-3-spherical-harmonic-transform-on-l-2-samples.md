---
title: "An O(L³) Spherical Harmonic Transform on L² Samples"
authors:
  - "Zubair Khalid"
year: 2026
venue: "arXiv preprint"
arxiv: "2611.16441"
doi: null
source: "https://arxiv.org/abs/2611.16441"
topics:
  - "spherical-harmonics"
  - "sampling-theorem"
  - "signal-processing-on-the-sphere"
  - "lighting-probes"
  - "numerical-stability"
seed_rank: 2594
seed_batch: "curiosity-2026-11-15"
reviewed: "2026-11-15"
pool: "engines"
relevance_score: 8
cites: []
see:
  - "1719-analyzing-head-related-transfer-function-measurements-using-surface"
  - "1762-directional-equalization-of-sparse-head-related-transfer-function-sets"
---

# An O(L³) Spherical Harmonic Transform on L² Samples

## One-sentence takeaway

An exact spherical harmonic transform that uses the information-theoretic minimum of L² samples on L iso-latitude rings, needs no linear solves and no precomputation beyond ring placement, and runs in O(L³), with open code and experiments up to L = 2048.

## Why it's lovely

Sampling the sphere with exactly as many numbers as there are harmonic coefficients, and still inverting exactly, is one of those problems that looks like it should force you into ill-conditioned linear algebra. The trick here is a quiet piece of bookkeeping: for each order m, only the rings that "resolve" m matter, and they already form a complete sample set for that order's profile, so the missing rings follow from a closed-form Lagrange basis. For Anoptic this is directly on the bench: radiance probes, environment maps, HRTFs (cards 1719, 1762) and radiance-cascade directional storage all live in spherical harmonics or sphere samples, and a minimum-sample exact transform with a named error amplifier is the kind of primitive worth knowing exists.

## Key ideas

- **Per-order completeness.** For each m, the samples on the rings that resolve order m determine the order-m profile; values on the other rings follow from closed-form sampling functions.
- **Two exact back-ends.** Gauss–Legendre quadrature of the interpolated profiles, or the equiangular sampling-theorem algorithm unchanged, since the rings coincide with its grid.
- **Numerics, named.** An amplification constant governs numerical error and replaces the condition number previously used to place rings; the paper proposes a placement that minimises it and an error-propagation model for growth with L.
- **Engineering details.** Two-pass refinement reaches the rounding floor of the samples; stable log-domain evaluation of the sampling functions; a rescaled Legendre recurrence; a forbidden-region skipping rule that halves elimination cost.

## Caveats

Abstract-level read only. O(L³) matches standard separable SHTs; the gain is optimal sample count with exactness, not asymptotic speed. Real-time engines typically use very low L (2–4 bands) where none of this matters; the value is for high-band offline baking, audio, or analysis. Single-author preprint.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.16441
- PDF: https://arxiv.org/pdf/2611.16441
- Code: https://github.com/zubairkhalid1/osht
