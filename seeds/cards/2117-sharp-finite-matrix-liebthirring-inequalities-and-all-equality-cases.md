---
title: "Sharp finite-matrix Lieb–Thirring inequalities and all equality cases"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 262; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Equality-cases-in-the-sharp-one-dimensional-matrix-Lieb-Thirring-inequality-October-5-2026/sharp-one-dimensional-lieb-thirring-inequalities-matrix-potentials.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "mathematical-physics"
  - "lean4"
  - "formalized"
seed_rank: 2117
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Equality cases in the sharp one-dimensional matrix Lieb–Thirring inequality"
    url: "https://github.com/openai/math/blob/main/preprints/Equality-cases-in-the-sharp-one-dimensional-matrix-Lieb-Thirring-inequality-October-5-2026/sharp-one-dimensional-lieb-thirring-inequalities-matrix-potentials.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Sharp one-dimensional Lieb–Thirring inequalities for matrix potentials"
    url: "https://github.com/openai/math/blob/main/preprints/Sharp-one-dimensional-Lieb-Thirring-inequalities-for-matrix-potentials-October-5-2026/sharp-matrix-lieb-thirring.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Sharp one-dimensional Lieb–Thirring constants"
    url: "https://github.com/openai/math/blob/main/preprints/Sharp-One-Dimensional-Lieb-Thirring-Constants-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Sharp finite-matrix Lieb–Thirring inequalities and all equality cases

## One-sentence takeaway

OpenAI's result family 262 (Mathematical physics) claims: Proves the sharp one-dimensional Lieb–Thirring inequality for $1/2\lt \gamma\lt 3/2$ and arbitrary finite-matrix potentials W ≥ 0 with $\int\mathop{\mathrm{tr}}\nolimits (W^{\gamma+1/2})\lt \infty$: the optimal constant is the scalar one-bound-state value, independent of matrix size.

## Why it matters here

Mathematical physics results sit behind the physical models that rendering and simulation borrow. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): All equality cases are direct sums, in one constant unitary basis, of scalar sech2 solitons with independent scales and centers, and zero channels.
- *Equality cases in the sharp one-dimensional matrix Lieb–Thirring inequality*: We classify all equality cases in the sharp one-dimensional Lieb–Thirring inequality for every finite matrix size and $1/2\lt \gamma\lt 3/2$. For measurable Hermitian positive semidefinite potentials W with $\int_\mathbb R\mathop{\mathrm{tr}}\nolimits (W^{\gamma+1/2})\lt \infty$, equality holds precisely for direct sums, in one constant unitary basis, of scalar one-bound-state solitons and zero channels. The nonzero solitons may have independent scales and centers.
- *Sharp one-dimensional Lieb–Thirring inequalities for matrix potentials*: We prove the sharp one-dimensional Lieb–Thirring inequality for every finite matrix size and every exponent $1/2\lt \gamma\lt 3/2$. The optimal constant is the scalar one-bound-state constant, independently of the matrix size. The inequality bounds the full sum of negative eigenvalue moments for every measurable Hermitian positive semidefinite potential W satisfying $\int_\mathbb R\mathop{\mathrm{tr}}\nolimits (W^{\gamma+1/2})\lt \infty$.
- *Sharp one-dimensional Lieb–Thirring constants*: We resolve affirmatively the remaining cases of the scalar one-dimensional Lieb–Thirring conjecture: for every $\frac12\lt \gamma\lt \frac32$, the optimal constant is the one-bound-state constant. The estimate holds for every nonnegative potential in $L^{\gamma+1/2}(\mathbb R)$, with all negative eigenvalues included.
- Lean scope (lean/docs/262.md): The formalized result determines the sharp one-dimensional Lieb–Thirring constant for $1/2<\gamma<3/2$. For every nonnegative $W\in L^{\gamma+1/2}(\mathbb R)$, it bounds the full negative-eigenvalue moment of $-d^2/dx^2-W$ by the one-bound-state constant times the potential integral.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Equality cases in the sharp one-dimensional matrix Lieb–Thirring inequality](https://github.com/openai/math/blob/main/preprints/Equality-cases-in-the-sharp-one-dimensional-matrix-Lieb-Thirring-inequality-October-5-2026/sharp-one-dimensional-lieb-thirring-inequalities-matrix-potentials.pdf)
- Manuscript: [Sharp one-dimensional Lieb–Thirring inequalities for matrix potentials](https://github.com/openai/math/blob/main/preprints/Sharp-one-dimensional-Lieb-Thirring-inequalities-for-matrix-potentials-October-5-2026/sharp-matrix-lieb-thirring.pdf)
- Manuscript: [Sharp one-dimensional Lieb–Thirring constants](https://github.com/openai/math/blob/main/preprints/Sharp-One-Dimensional-Lieb-Thirring-Constants-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/262.md
- Comparator statement (Sharp one-dimensional Lieb–Thirring inequality): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/LiebThirring.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
