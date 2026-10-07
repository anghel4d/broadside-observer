---
title: "Two notions of free entropy differ even when both are finite"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 298; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/A-finite-entropy-separation-of-microstates-and-nonmicrostates-free-entropy-September-25-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "operator-algebras"
  - "lean4"
  - "formalized"
seed_rank: 2153
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "A finite-entropy separation of microstates and nonmicrostates free entropy"
    url: "https://github.com/openai/math/blob/main/preprints/A-finite-entropy-separation-of-microstates-and-nonmicrostates-free-entropy-September-25-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Two notions of free entropy differ even when both are finite

## One-sentence takeaway

OpenAI's result family 298 (Operator algebras) claims: Constructs a bounded self-adjoint tuple in a tracial von Neumann algebra whose microstates and nonmicrostates free entropies satisfy $-\infty\lt \chi\lt \chi^*\lt \infty$.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): This answers Voiculescu’s finite-entropy equality question negatively: the matrix-approximation and free-Fisher-information definitions differ even when both are finite.
- *A finite-entropy separation of microstates and nonmicrostates free entropy*: We answer the finite-entropy equality question for microstates and nonmicrostates free entropy negatively. We construct a bounded self-adjoint tuple X in a von Neumann algebra with faithful normal tracial state such that $-\infty\lt \chi(X)\leq\chi^*(X)-\tfrac12\lt \infty$. Here χ is the original microstates entropy with an operator-norm cutoff and a limsup over matrix sizes.
- Lean scope (lean/docs/298.md): The formalization disproves equality of microstates and nonmicrostates free entropy even when both quantities are finite. It constructs a bounded self-adjoint tuple $X$ in a von Neumann algebra with a faithful normal tracial state such that $-\infty<\chi(X)\le\chi^*(X)-1/2<\infty$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [A finite-entropy separation of microstates and nonmicrostates free entropy](https://github.com/openai/math/blob/main/preprints/A-finite-entropy-separation-of-microstates-and-nonmicrostates-free-entropy-September-25-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/298.md
- Comparator statement (Finite separation of microstates and nonmicrostates free entropy): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/FiniteEntropySeparation.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
