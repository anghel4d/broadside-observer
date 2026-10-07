---
title: "Lipschitz equivalent Banach spaces need not be linearly isomorphic"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 324; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Lipschitz-Equivalent-Separable-Banach-Spaces-Need-Not-Be-Linearly-Isomorphic-September-24-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "functional-analysis"
  - "lean4"
  - "formalized"
seed_rank: 2179
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Lipschitz Equivalent Separable Banach Spaces Need Not Be Linearly Isomorphic"
    url: "https://github.com/openai/math/blob/main/preprints/Lipschitz-Equivalent-Separable-Banach-Spaces-Need-Not-Be-Linearly-Isomorphic-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Bi-Lipschitz Absorption of c0 Without a Linear Copy of c0"
    url: "https://github.com/openai/math/blob/main/preprints/Bi-Lipschitz-Absorption-of-c0-Without-a-Linear-Copy-of-c0-September-26-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Lipschitz equivalent Banach spaces need not be linearly isomorphic

## One-sentence takeaway

OpenAI's result family 324 (Functional analysis) claims: Constructs separable real Banach spaces that are globally bi-Lipschitz equivalent but not linearly isomorphic, resolving the separable Lipschitz-isomorphism problem negatively.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Thus even the complete metric structure up to bi-Lipschitz equivalence does not determine a separable Banach space's linear isomorphism class.
- *Lipschitz Equivalent Separable Banach Spaces Need Not Be Linearly Isomorphic*: There are separable real Banach spaces that are globally bi-Lipschitz equivalent but not linearly isomorphic. This gives a negative answer to the separable Banach-space Lipschitz-isomorphism problem.
- *Bi-Lipschitz Absorption of c0 Without a Linear Copy of c0*: We construct a separable real Banach space Z that contains no linear copy of c0, yet is bi-Lipschitz equivalent to $Z\oplus_\infty c_0$. The same space contains a bi-Lipschitz image of every separable metric space.
- Lean scope (lean/docs/324.md): The formalized counterexample gives separable real Banach spaces $X,Y$ that are bi-Lipschitz equivalent but not linearly isomorphic. The bijection has lower Lipschitz bound $4/21$ and upper bound $76/25$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 2 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Lipschitz Equivalent Separable Banach Spaces Need Not Be Linearly Isomorphic](https://github.com/openai/math/blob/main/preprints/Lipschitz-Equivalent-Separable-Banach-Spaces-Need-Not-Be-Linearly-Isomorphic-September-24-2026/paper.pdf)
- Manuscript: [Bi-Lipschitz Absorption of c0 Without a Linear Copy of c0](https://github.com/openai/math/blob/main/preprints/Bi-Lipschitz-Absorption-of-c0-Without-a-Linear-Copy-of-c0-September-26-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/324.md
- Comparator statement (Bi-Lipschitz equivalent nonisomorphic Banach spaces): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/LipschitzEquivalence.lean
- Comparator statement (Bi-Lipschitz absorption of $c_0$): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/C0Absorption.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
