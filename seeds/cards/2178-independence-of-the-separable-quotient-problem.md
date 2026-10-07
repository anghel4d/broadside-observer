---
title: "Independence of the separable quotient problem"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 323; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Relative-independence-of-the-separable-quotient-problem-September-23-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "functional-analysis"
  - "lean4"
  - "formalized"
seed_rank: 2178
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Relative independence of the separable quotient problem"
    url: "https://github.com/openai/math/blob/main/preprints/Relative-independence-of-the-separable-quotient-problem-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Independence of the separable quotient problem

## One-sentence takeaway

OpenAI's result family 323 (Functional analysis) claims: Establishes, relative to the consistency of a measurable cardinal, that the separable quotient problem is independent of ZFC.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): The assertion that every infinite-dimensional Banach space has a separable infinite-dimensional quotient can hold for all real and complex Banach spaces, whereas the continuum hypothesis yields counterexamples over both fields.
- *Relative independence of the separable quotient problem*: The separable quotient problem asks whether every infinite-dimensional Banach space has a separable infinite-dimensional quotient. We prove that this statement is independent of ZFC, relative to the consistency of ZFC with a measurable cardinal. This holds over both the real and complex fields.
- Lean scope (lean/docs/323.md): The separable quotient problem asks whether every infinite-dimensional Banach space has an infinite-dimensional separable quotient. The linked formalization proves the negative direction under the continuum hypothesis: over both the real and complex fields, there is an infinite-dimensional Banach space admitting no bounded linear surjection onto an infinite-dimensional separable Banach space.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: The positive consistency direction and the paper's full relative-independence conclusions are outside the selected statement.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Relative independence of the separable quotient problem](https://github.com/openai/math/blob/main/preprints/Relative-independence-of-the-separable-quotient-problem-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/323.md
- Comparator statement (Failure of the separable quotient assertion under the continuum hypothesis): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/SeparableQuotientNegative.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
