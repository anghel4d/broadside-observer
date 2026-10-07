---
title: "Failure of integer-degree harmonic dimension comparison"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 361; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/A-counterexample-to-integer-degree-harmonic-dimension-comparison-September-25-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "differential-geometry"
  - "lean4"
  - "formalized"
seed_rank: 2216
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "A counterexample to integer-degree harmonic dimension comparison"
    url: "https://github.com/openai/math/blob/main/preprints/A-counterexample-to-integer-degree-harmonic-dimension-comparison-September-25-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "A Three-Dimensional Counterexample to Integer-Degree Harmonic Dimension Comparison"
    url: "https://github.com/openai/math/blob/main/preprints/A-Three-Dimensional-Counterexample-to-Integer-Degree-Harmonic-Dimension-Comparison-September-26-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Failure of integer-degree harmonic dimension comparison

## One-sentence takeaway

OpenAI's result family 361 (Differential geometry) claims: Disproves Yau's proposed Euclidean dimension bound for harmonic functions of integer growth on manifolds with nonnegative Ricci curvature.

## Why it matters here

Differential geometry is the deep background for geometry processing, curvature flows and mesh work in graphics. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): For every sufficiently large integer k, a complete smooth metric on ℝ3 has at least $(k+2)^2$ independent harmonic functions of growth at most k, exceeding the Euclidean count $(k+1)^2$. The metric may depend on k.
- *A counterexample to integer-degree harmonic dimension comparison*: For some even n ≥ 8 and integer k ≥ 2, we construct a complete smooth metric on ℝn with nonnegative Ricci curvature whose space of real harmonic functions of pointwise polynomial growth at most k has dimension larger than the Euclidean harmonic-polynomial dimension. The metric is Euclidean near the origin, has asymptotic volume ratio strictly between zero and one, and has nonunique tangent cones at infinity. This answers the integer-degree form of Yau's dimension comparison question in the negative.
- *A Three-Dimensional Counterexample to Integer-Degree Harmonic Dimension Comparison*: For every $4/9\lt v\lt 1$ and $1\lt c\lt 9v/4$, all sufficiently large integers k admit a complete smooth metric on ℝ3 with nonnegative Ricci curvature, asymptotic volume ratio v, and at least $c(k+1)^2$ linearly independent real harmonic functions of pointwise growth at most k. This answers Yau's integer-degree dimension comparison question negatively in dimension three, with a fixed-factor excess over the Euclidean count. For each $1\lt c\lt 9/4$, these metrics can be chosen arbitrarily close to the Euclidean metric in global bi-Lipschitz distance.
- Lean scope (lean/docs/361.md): The formalized result disproves the proposed Euclidean upper comparison for dimensions of harmonic functions with integer polynomial growth. It constructs one complete smooth metric with nonnegative Ricci curvature on an even-dimensional Euclidean space, Euclidean near the origin and with asymptotic volume ratio strictly between zero and one, admitting more independent harmonic functions of the prescribed growth degree than the Euclidean count.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [A counterexample to integer-degree harmonic dimension comparison](https://github.com/openai/math/blob/main/preprints/A-counterexample-to-integer-degree-harmonic-dimension-comparison-September-25-2026/paper.pdf)
- Manuscript: [A Three-Dimensional Counterexample to Integer-Degree Harmonic Dimension Comparison](https://github.com/openai/math/blob/main/preprints/A-Three-Dimensional-Counterexample-to-Integer-Degree-Harmonic-Dimension-Comparison-September-26-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/361.md
- Comparator statement (Counterexample to harmonic dimension comparison): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/HarmonicGrowth.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
