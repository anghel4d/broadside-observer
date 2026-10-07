---
title: "The complete Crouzeix conjecture"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 325; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/A-direct-proof-of-the-complete-Crouzeix-inequality-September-26-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "functional-analysis"
  - "lean4"
  - "formalized"
seed_rank: 2180
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "A direct proof of the complete Crouzeix inequality"
    url: "https://github.com/openai/math/blob/main/preprints/A-direct-proof-of-the-complete-Crouzeix-inequality-September-26-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "The complete Crouzeix theorem: optimal similarity and a common positive boundary representation"
    url: "https://github.com/openai/math/blob/main/preprints/The-complete-Crouzeix-theorem-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# The complete Crouzeix conjecture

## One-sentence takeaway

OpenAI's result family 325 (Functional analysis) claims: Resolves the complete Crouzeix conjecture: for every bounded operator A on a complex Hilbert space and every finite matrix-valued polynomial P, one has $\lVert P[A]\rVert\le2\sup_{z\in W(A)}\lVert P(z)\rVert$, where $W(A)$ is the numerical range.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): The constant 2 is sharp, independent of the matrix size, and valid in infinite dimensions.
- *A direct proof of the complete Crouzeix inequality*: We give a direct proof of the sharp constant-two numerical-range inequality for matrix-valued polynomials in all finite base and coefficient dimensions. This resolves the complete Crouzeix conjecture in its matrix formulation, including matrices whose numerical ranges are points or line segments.
- *The complete Crouzeix theorem: optimal similarity and a common positive boundary representation*: We resolve the complete Crouzeix conjecture by proving the sharp constant-two numerical-range inequality for every bounded operator on a complex Hilbert space and every matrix-valued polynomial. No separability assumption is needed. The closure of the numerical range is a complete 2-spectral set, and the bound extends to finite matrix-valued functions holomorphic near that closure.
- Lean scope (lean/docs/325.md): The complete Crouzeix inequality bounds a matrix-valued polynomial evaluated at a matrix by its maximum norm on the numerical range. The formalized result proves the bound with constant $2$ for every positive matrix and coefficient size, every polynomial degree, and arbitrary complex coefficients.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 5 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: Normality of the matrix and nonempty interior of its numerical range are not assumed. The same bound holds for finite matrix-valued functions holomorphic near the closure of the numerical range and for rational functions with poles outside that closure. No separability assumption is required.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [A direct proof of the complete Crouzeix inequality](https://github.com/openai/math/blob/main/preprints/A-direct-proof-of-the-complete-Crouzeix-inequality-September-26-2026/paper.pdf)
- Manuscript: [The complete Crouzeix theorem: optimal similarity and a common positive boundary representation](https://github.com/openai/math/blob/main/preprints/The-complete-Crouzeix-theorem-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/325.md
- Comparator statement (Complete Crouzeix inequality and sharpness): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/DirectCrouzeix.lean
- Comparator statement (Complete polynomial inequality and sharpness): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/CompleteCrouzeix.lean
- Comparator statement (Optimal similarity and boundary representation): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/StructuralCrouzeix.lean
- Comparator statement (Complete sharp Crouzeix theorem on arbitrary Hilbert spaces): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/CrouzeixHilbert.lean
- Comparator statement (Numerical-range geometry and finite-compression support): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/HilbertCrouzeix.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
