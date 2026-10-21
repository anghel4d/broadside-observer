---
title: "Accurate Sum and Dot Product"
authors:
  - "Takeshi Ogita"
  - "Siegfried M. Rump"
  - "Shin'ichi Oishi"
year: 2005
venue: "SIAM Journal on Scientific Computing 26(6), 1955–1988"
arxiv: null
doi: "10.1137/030601818"
source: "https://www.tuhh.de/ti3/paper/rump/OgRuOi05.pdf"
topics:
  - floating-point
  - compensated-summation
  - error-free-transformations
  - reductions
seed_rank: 2379
seed_batch: "archive-2026-10-22"
reviewed: "2026-10-22"
pool: "languages"
relevance_score: 8
lineage: numerics
see:
  - 276-floating-point-determinism
  - 016-deterministic-lockstep
  - 1666-vector-models-for-data-parallel-computing
  - 1092-exact-predicates-exact-constructions-combinatorics-mesh-csg
cites:
  - title: "Accurate Sum and Dot Product"
    url: "https://doi.org/10.1137/030601818"
    year: 2005
    arxiv: null
    doi: "10.1137/030601818"
---

# Accurate Sum and Dot Product

## One-sentence takeaway

Ogita, Rump and Oishi build branch-free summation and dot-product loops from error-free transformations — Knuth's TwoSum (6 flops) and Dekker/Veltkamp TwoProduct (17 flops, or 2 with FMA) — and prove that the results (Sum2, Dot2, and cascaded SumK, DotK) are as accurate as if computed in twice or K-fold working precision and then rounded, using only the working precision and running some 40% faster than the corresponding XBLAS routines.

## Why it matters here

An array language's `+/` and inner product are its most-used reductions, and whether they are accurate and reproducible decides whether simulations, economy tallies and replays agree across machines and SIMD widths. Sum2 and Dot2 are a few extra flops per element in a straight loop with no branches, so ano could offer an "accurate" reduction mode (or make it the default for f32) without long doubles, sorting or mantissa tricks, with an error bound it can state in the docs.

## Key ideas

- **Error-free transformations.** TwoSum(a, b) returns x = fl(a + b) and y with a + b = x + y exactly, for any magnitudes, with no branch (Dekker's FastTwoSum needs |a| ≥ |b|, and the comparison made it up to 50% slower in their timings). TwoProduct(a, b) returns x = fl(a·b) and the exact error y, via Veltkamp splitting or a single FMA.
- **Sum2.** Cascade TwoSum through the vector, accumulate the error terms in ordinary floating point, and add them at the end. Bound: |res − s| ≤ eps·|s| + γ²ₙ₋₁·Σ|pᵢ| — the relative error is about (n·eps)² times the condition number plus the unavoidable final rounding, exactly what doubled precision would give.
- **Dot2.** Run TwoProduct per term and TwoSum on the running sum, accumulate both error parts, and return p + s: when there is little cancellation p dominates; for ill-conditioned dot products the error sum takes over.
- **K-fold.** Applying the error-free vector transformation K−1 times (SumK, DotK) gives results as if computed in K-fold precision, for K ≥ 3; the paper also derives computable, verified error bounds.
- **Speed is measured, not counted.** The authors optimise for wall time — no branches, no access to exponent or mantissa, plain loops the compiler can pipeline — which is why they beat XBLAS despite similar flop counts.

## Caveats

"As if twice the precision" still means a result can be inaccurate when the condition number exceeds about 1/eps², and the guarantees assume IEEE round-to-nearest without extended-precision intermediates or compiler reassociation (`-ffast-math` breaks TwoSum). Accurate is not the same as reproducible: a parallel or SIMD reduction that changes the summation order can still give different last bits unless the order is fixed or a reproducible scheme (e.g. Demmel–Nguyen binned summation) is used. Overflow in intermediate terms is not handled specially.

## Links

- Paper (author PDF): https://www.tuhh.de/ti3/paper/rump/OgRuOi05.pdf
- Paper (DOI, SIAM J. Sci. Comput.): https://doi.org/10.1137/030601818
