---
title: "Matrix multiplication with exponent at most 9/4"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 107; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Matrix-Multiplication-Nine-Fourths-October-2-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "theoretical-computer-science"
  - "lean4"
  - "formalized"
seed_rank: 1964
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 9
lineage: ai-mathematical-reasoning
cites:
  - title: "An Upper Bound of 9/4 for the Matrix Multiplication Exponent"
    url: "https://github.com/openai/math/blob/main/preprints/Matrix-Multiplication-Nine-Fourths-October-2-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Complex Matrix Multiplication Below 2.258 and Rectangular Bounds"
    url: "https://github.com/openai/math/blob/main/preprints/Complex-Matrix-Multiplication-Below-2.258-and-Rectangular-Bounds-September-24-2026/Complex-Matrix-Multiplication-Below-2.258-and-Rectangular-Bounds-September-24-2026.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Staggered extraction for exact matrix multiplication over every field"
    url: "https://github.com/openai/math/blob/main/preprints/Staggered-extraction-for-exact-matrix-multiplication-over-every-field-September-24-2026/Staggered-extraction-for-exact-matrix-multiplication-over-every-field-September-24-2026.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Matrix multiplication with exponent at most 9/4

## One-sentence takeaway

OpenAI's result family 107 (Theoretical computer science) claims: Proves $\omega\le9/4$ over ℂ, giving $O_\varepsilon(n^{9/4+\varepsilon})$ arithmetic operations for square matrix multiplication.

## Why it matters here

Closest to the systems side of the library: complexity, algorithms and computability statements here can change what is worth trying in ano, the engines or GRID COMMAND tooling. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): In characteristic zero, some inner dimension na with a > 0.465 permits $n^{2+o(1)}$ rectangular multiplication. Further square bounds give ω < 2.258 outside finitely many positive characteristics and ω < 2.371054886006746 over every fixed field.
- *An Upper Bound of 9/4 for the Matrix Multiplication Exponent*: We prove that the exponent of matrix multiplication over the complex numbers is at most 9/4.
- *Complex Matrix Multiplication Below 2.258 and Rectangular Bounds* (secondary writeup): Over every field of characteristic zero, we prove that the square matrix-multiplication exponent satisfies ω < 2.258, the dual exponent satisfies α > 0.465, and $\omega(1,0.709,1)\lt 2.092$. The strict square and k = 0.709 rectangular bounds also hold over every field except possibly in one finite set of positive characteristics, in the arithmetic-operation model.
- *Staggered extraction for exact matrix multiplication over every field*: We prove that the arithmetic exponent of square matrix multiplication over every fixed field satisfies ω < 2.371054886006746. This includes every positive characteristic.
- Lean scope (lean/docs/107.md): The formalized results bound the complex matrix-multiplication exponent by $\omega(\mathbb C)\le9/4$, the dual exponent by $\alpha>0.465$, and the rectangular exponent at aspect ratio $0.709$ by $\omega(\mathbb C;1,0.709,1)<2.092$. The dual exponent is the supremum of rectangular aspect ratios attainable with exponent $2$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 2 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.
- One manuscript is labelled a "secondary writeup" in CONTENTS.md.

## Links

- Manuscript: [An Upper Bound of 9/4 for the Matrix Multiplication Exponent](https://github.com/openai/math/blob/main/preprints/Matrix-Multiplication-Nine-Fourths-October-2-2026/paper.pdf)
- Manuscript: [Complex Matrix Multiplication Below 2.258 and Rectangular Bounds](https://github.com/openai/math/blob/main/preprints/Complex-Matrix-Multiplication-Below-2.258-and-Rectangular-Bounds-September-24-2026/Complex-Matrix-Multiplication-Below-2.258-and-Rectangular-Bounds-September-24-2026.pdf)
- Manuscript: [Staggered extraction for exact matrix multiplication over every field](https://github.com/openai/math/blob/main/preprints/Staggered-extraction-for-exact-matrix-multiplication-over-every-field-September-24-2026/Staggered-extraction-for-exact-matrix-multiplication-over-every-field-September-24-2026.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/107.md
- Comparator statement (Complex square, dual, and rectangular exponent bounds): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/MatrixMultiplication.lean
- Comparator statement (Matrix-multiplication exponent over every field): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/MatrixFields.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
