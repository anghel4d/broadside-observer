---
title: "The free uniform spanning forest is a factor of IID"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 231; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/The-free-uniform-spanning-forest-is-a-factor-of-IID-September-25-2026/The-free-uniform-spanning-forest-is-a-factor-of-IID-September-25-2026.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "probability-and-statistical-mechanics"
  - "lean4"
  - "formalized"
seed_rank: 2086
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "The free uniform spanning forest is a factor of IID"
    url: "https://github.com/openai/math/blob/main/preprints/The-free-uniform-spanning-forest-is-a-factor-of-IID-September-25-2026/The-free-uniform-spanning-forest-is-a-factor-of-IID-September-25-2026.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# The free uniform spanning forest is a factor of IID

## One-sentence takeaway

OpenAI's result family 231 (Probability and statistical mechanics) claims: On every infinite connected locally finite simple unweighted graph, the free uniform spanning forest is a factor of independent vertex labels, by one isomorphism-equivariant rule using no root.

## Why it matters here

Random processes, percolation and spin-system results feed intuition for stochastic simulation, sampling and Monte Carlo in Anoptic. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Translation-invariant strongly Rayleigh binary processes on every countable group, including invariant determinantal processes with Hermitian positive-contraction kernels, are also factors of IID.
- *The free uniform spanning forest is a factor of IID*: We prove that the free uniform spanning forest is a factor of IID on every infinite connected locally finite simple unweighted graph. One Borel rule works for all such graphs and uses no root, answering affirmatively the general factor question for unimodular random graphs. We also show that every translation-invariant strongly Rayleigh process indexed by a countable group is a factor of IID, including invariant determinantal processes with Hermitian positive-contraction kernels.
- Lean scope (lean/docs/231.md): The formalization proves that the free uniform spanning forest is a factor of independent identically distributed vertex labels on every infinite connected locally finite simple unweighted graph. One Borel equivariant rule works for all such graphs and uses no distinguished root.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 2 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [The free uniform spanning forest is a factor of IID](https://github.com/openai/math/blob/main/preprints/The-free-uniform-spanning-forest-is-a-factor-of-IID-September-25-2026/The-free-uniform-spanning-forest-is-a-factor-of-IID-September-25-2026.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/231.md
- Comparator statement (Strongly Rayleigh and determinantal-process IID factors): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/StronglyRayleighDPP.lean
- Comparator statement (A universal IID factor for the free uniform spanning forest): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/FreeUniformSpanningForest.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
