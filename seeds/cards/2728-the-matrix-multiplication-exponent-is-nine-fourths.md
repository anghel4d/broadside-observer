---
title: "The matrix multiplication exponent is nine fourths"
authors:
  - "OpenAI"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 379, 24 Nov 2026 edition; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/The-matrix-multiplication-exponent-is-nine-fourths-November-24-2026/paper.pdf"
version_reviewed: "web 2026-11-24 edition (commit of 2026-11-25 00:04 UTC)"
topics:
  - "algebraic-complexity"
  - "matrix-multiplication"
  - "lean4"
  - "ai-assisted-math"
seed_rank: 2728
seed_batch: "frontier-2026-11-26"
reviewed: "2026-11-26"
pool: "maths-foundations"
relevance_score: 9
lineage: ai-mathematical-reasoning
see:
  - 1964-matrix-multiplication-with-exponent-at-most-9-4
cites:
  - title: "The matrix multiplication exponent is nine fourths (paper)"
    url: "https://github.com/openai/math/blob/main/preprints/The-matrix-multiplication-exponent-is-nine-fourths-November-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "An Upper Bound of 9/4 for the Matrix Multiplication Exponent (OpenAI, 2 Oct 2026)"
    url: "https://github.com/openai/math/blob/main/preprints/Matrix-Multiplication-Nine-Fourths-October-2-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Euclidean geometry in the asymptotic spectrum of tensors (OpenAI, 24 Nov 2026)"
    url: "https://github.com/openai/math/blob/main/preprints/Euclidean-geometry-in-the-asymptotic-spectrum-of-tensors-November-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Multiplying matrices via polynomials: exposition and barriers"
    url: "https://arxiv.org/abs/2610.30054"
    year: 2026
    arxiv: "2610.30054"
    doi: null
  - title: "Polynomial Separation of a Shared Tensor Leg and Matrix Multiplication in Arbitrary Characteristic"
    url: "https://arxiv.org/abs/2610.18914"
    year: 2026
    arxiv: "2610.18914"
    doi: null
  - title: "Gaussian elimination is not optimal (Strassen 1969)"
    url: "https://doi.org/10.1007/BF02165411"
    year: 1969
    arxiv: null
    doi: "10.1007/BF02165411"
---

# The matrix multiplication exponent is nine fourths

## One-sentence takeaway

OpenAI's manuscript claims the matching lower bound to its October upper bound, so ω = 9/4 over every field. Every formal arithmetic circuit for n × n matrix multiplication needs at least ⌈n^{9/4}/2⌉ nonscalar multiplication or division gates. Geometric border rank is at least n^{9/4} and asymptotic rank equals n^{9/4}. A Lean development covers the division-free square case.

## Why it matters here

If it holds, this settles the central constant of fast linear algebra: ω is not 2, and 9/4 is achievable and optimal for formal arithmetic circuits. It closes the loop opened by card 1964 (the 9/4 upper bound) and sits with 2708 (VP ≠ VNP) in the `ai-mathematical-reasoning` lineage, where lab drops now come with Lean statements and comparator challenges rather than prose alone. For engine work it is a ceiling, not a recipe: nothing in the introduction suggests a practical GEMM change. For this library it is the clearest case of an old open problem answered outright by a model-written proof.

## Key ideas

- **Theorem 1.1:** over every field F, ω_F = 9/4 for formal arithmetic circuits whose gates add, subtract, multiply or divide by nonzero rational functions, with outputs required as identities. The bound holds even if linear operations are free.
- **Corollaries.** Exact bilinear algorithms at side n need ≥ ⌈n^{9/4}⌉ products. Rectangular tensors T_{a,b,c} have border and asymptotic rank ≥ max{ab, bc, ca, (abc)^{3/4}}, and the dual exponent satisfies 1/2 ≤ α_F ≤ 2/3.
- **Proof strategy.** A strict saving below 9/4 would compress trivalent tensor networks so much that they could test whether the entries in each of up to 2^w lists are distinct below a proven per-bit volume lower bound (w^σ), a contradiction.
- **Geometry.** Tensor 'prices' from Strassen's asymptotic spectrum give wires lengths in a metric space (companion paper). Euclidean flats only give ratio 2. The critical tripod with unit arms and a shared-label rate of 8/3 gives 6/(8/3) = 9/4.
- **Family 379** of the same drop also claims VP ≠ VNP via grid state sums, Hamiltonian-cycle and permanent circuit lower bounds, Fourier-transform and integer-multiplication exponents, and an exponential sunflower bound.

## Caveats

Unreviewed AI-produced manuscript in a lab repository, released 24 Nov 2026. I read the README, abstract and introduction (§1–1.3) and the family-379 summary in CONTENTS.md, not the proof. The Lean formalization covers division-free circuits computing formal polynomial identities, a narrower scope than the full theorem with division gates. I did not run the Comparator challenge, and I found no independent expert check yet. The result concerns formal arithmetic circuits, not bit-complexity or practical GEMM. The same repository has withdrawn manuscripts before (7 Oct sign error), so treat this as a claim until it is checked.

## Links

- Paper PDF: https://github.com/openai/math/blob/main/preprints/The-matrix-multiplication-exponent-is-nine-fourths-November-24-2026/paper.pdf
- Manuscript README: https://github.com/openai/math/tree/main/preprints/The-matrix-multiplication-exponent-is-nine-fourths-November-24-2026
- Release history: https://github.com/openai/math/blob/main/history.md
- Family 379 contents: https://github.com/openai/math/blob/main/CONTENTS.md#family-379
