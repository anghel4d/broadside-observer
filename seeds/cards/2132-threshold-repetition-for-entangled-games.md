---
title: "Threshold repetition for entangled games"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 277; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Threshold-parallel-repetition-for-finite-dimensional-entangled-games-September-25-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "mathematical-physics"
  - "lean4"
  - "formalized"
seed_rank: 2132
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Threshold parallel repetition for finite-dimensional entangled games"
    url: "https://github.com/openai/math/blob/main/preprints/Threshold-parallel-repetition-for-finite-dimensional-entangled-games-September-25-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Threshold repetition for entangled games

## One-sentence takeaway

OpenAI's result family 277 (Mathematical physics) claims: Proves exponential threshold repetition for every finite two-player one-round game: if its entangled value is v < 1, the probability of winning at least a fraction $v+\delta$ of k independent repetitions decays exponentially in k, for $0\lt \delta\lt 1-v$.

## Why it matters here

Mathematical physics results sit behind the physical models that rendering and simulation borrow. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Arbitrary joint finite-dimensional entangled strategies and correlated question distributions are allowed.
- *Threshold parallel repetition for finite-dimensional entangled games*: For every finite two-player game with entangled value v < 1, we prove exponential decay for the probability of winning at least a $v+\delta$ fraction of k independent repetitions, uniformly over all finite-dimensional joint strategies. The result allows arbitrary correlated question distributions and holds for every $0\lt \delta\lt 1-v$ and k ≥ 1. Its universal rate is proportional to $\delta^5/(1+\log(|\mathcal A||\mathcal B|))$, where $\mathcal A,\mathcal B$ are the answer alphabets.
- Lean scope (lean/docs/277.md): The formalization gives exponential threshold parallel repetition for every finite two-player game with arbitrary correlated questions. If its finite-dimensional entangled value is $v<1$, its answer sets are $A,B$, and $0<\delta<1-v$, then the probability of winning at least the fraction $v+\delta$ of $k$ repetitions is at most $\exp(-\kappa\delta^{13}k/(1+\log(|A||B|)))$ for one universal $\kappa>0$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: The bound applies to every joint finite-dimensional strategy and to their supremum, without assuming attainment. The separate distribution-dependent cubic bound is outside this scope.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Threshold parallel repetition for finite-dimensional entangled games](https://github.com/openai/math/blob/main/preprints/Threshold-parallel-repetition-for-finite-dimensional-entangled-games-September-25-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/277.md
- Comparator statement (Threshold parallel repetition for entangled games): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/EntangledGames.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
