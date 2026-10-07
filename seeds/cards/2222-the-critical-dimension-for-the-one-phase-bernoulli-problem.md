---
title: "The critical dimension for the one-phase Bernoulli problem"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 367; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/The-critical-dimension-for-one-phase-Bernoulli-minimizers-September-24-2026/The-critical-dimension-for-one-phase-Bernoulli-minimizers-September-24-2026.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "partial-differential-equations"
  - "lean4"
  - "formalized"
seed_rank: 2222
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "The critical dimension for one-phase Bernoulli minimizers"
    url: "https://github.com/openai/math/blob/main/preprints/The-critical-dimension-for-one-phase-Bernoulli-minimizers-September-24-2026/The-critical-dimension-for-one-phase-Bernoulli-minimizers-September-24-2026.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# The critical dimension for the one-phase Bernoulli problem

## One-sentence takeaway

OpenAI's result family 367 (Partial differential equations) claims: Establishes seven as the first dimension admitting a nonflat, one-homogeneous global minimizer of the one-phase Bernoulli energy.

## Why it matters here

PDE results are the theory behind fluid, wave and transport simulation the engines approximate numerically. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Consequently, minimizing free boundaries are smooth through dimension six, and their singular sets have dimension at most $n-7$ in higher dimensions.
- *The critical dimension for one-phase Bernoulli minimizers*: We prove that seven is the critical dimension for the one-phase Bernoulli problem: every nonzero one-homogeneous global minimizer in dimensions at most six is flat, while a nonflat one-homogeneous global minimizer exists in dimension seven. It follows that the interior free boundary of a local minimizer is smooth in dimensions at most six. In dimension n ≥ 7, its singular set has Hausdorff dimension at most $n-7$, and this bound is sharp.
- Lean scope (lean/docs/367.md): The paper identifies seven as the critical dimension for nonflat one-homogeneous global minimizers of the one-phase Bernoulli problem. The linked formalization proves the existence side: in dimension seven there is a nonzero one-homogeneous global minimizer that is not a half-space solution.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: The flatness classification in dimensions at most six and the resulting regularity and singular-set bounds are outside this selected statement.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [The critical dimension for one-phase Bernoulli minimizers](https://github.com/openai/math/blob/main/preprints/The-critical-dimension-for-one-phase-Bernoulli-minimizers-September-24-2026/The-critical-dimension-for-one-phase-Bernoulli-minimizers-September-24-2026.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/367.md
- Comparator statement (A nonflat one-homogeneous Bernoulli minimizer in dimension seven): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/BernoulliNonflatInSeven.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
