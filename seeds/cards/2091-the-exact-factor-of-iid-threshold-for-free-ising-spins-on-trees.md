---
title: "The exact factor-of-IID threshold for free Ising spins on trees"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 236; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/The-sharp-factor-of-IID-threshold-for-the-free-Ising-model-on-regular-trees-September-26-2026/article.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "probability-and-statistical-mechanics"
  - "lean4"
  - "formalized"
seed_rank: 2091
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "The sharp factor-of-IID threshold for the free Ising model on regular trees"
    url: "https://github.com/openai/math/blob/main/preprints/The-sharp-factor-of-IID-threshold-for-the-free-Ising-model-on-regular-trees-September-26-2026/article.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# The exact factor-of-IID threshold for free Ising spins on trees

## One-sentence takeaway

OpenAI's result family 236 (Probability and statistical mechanics) claims: Determines when the free zero-field ferromagnetic Ising state on the infinite d-regular tree is a factor of independent vertex labels: exactly when $\tanh\beta\le(d-1)^{-1/2}$, including equality, for d ≥ 3 and β ≥ 0.

## Why it matters here

Random processes, percolation and spin-system results feed intuition for stochastic simulation, sampling and Monte Carlo in Anoptic. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): The construction uses no root and is almost surely equivariant for each fixed tree automorphism, resolving the ferromagnetic case of Lyons's question.
- *The sharp factor-of-IID threshold for the free Ising model on regular trees*: For every integer d ≥ 3 and inverse temperature β ≥ 0, the free zero-field ferromagnetic Ising measure on the infinite d-regular tree is a factor of IID exactly when $\tanh\beta\le(d-1)^{-1/2}$. We prove the positive implication, including equality, resolving the conjecture of Nam, Sly and Zhang; the strict converse is known. The spin factor can be chosen to commute with every tree automorphism on every label input.
- Lean scope (lean/docs/236.md): The formalized result determines the factor-of-IID threshold for the free zero-field Ising law on the infinite $d$-regular tree. For every $d\ge3$ and $\beta\ge0$, the law is a factor of IID exactly when $\tanh\beta\le1/\sqrt{d-1}$, including equality.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [The sharp factor-of-IID threshold for the free Ising model on regular trees](https://github.com/openai/math/blob/main/preprints/The-sharp-factor-of-IID-threshold-for-the-free-Ising-model-on-regular-trees-September-26-2026/article.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/236.md
- Comparator statement (Factor-of-IID threshold for the free Ising model): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/FreeIsing.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
