---
title: "A uniformly discrete counterexample to bounded approximation in Lipschitz-free spaces"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 330; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Failure-of-Bounded-Approximation-in-a-Lipschitz-Free-Space-over-a-Uniformly-Discrete-Metric-Space-September-26-2026/main.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "functional-analysis"
  - "lean4"
  - "formalized"
seed_rank: 2185
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "A uniformly discrete counterexample to bounded approximation in Lipschitz-free spaces"
    url: "https://github.com/openai/math/blob/main/preprints/Failure-of-Bounded-Approximation-in-a-Lipschitz-Free-Space-over-a-Uniformly-Discrete-Metric-Space-September-26-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# A uniformly discrete counterexample to bounded approximation in Lipschitz-free spaces

## One-sentence takeaway

OpenAI's result family 330 (Functional analysis) claims: Constructs a countable uniformly discrete metric space whose real Lipschitz-free Banach space has the approximation property but not the bounded approximation property, answering Kalton's question negatively.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Finite-rank operators approximate the identity on every compact set, but their norms cannot share a finite bound.
- *A uniformly discrete counterexample to bounded approximation in Lipschitz-free spaces*: We construct a countable uniformly discrete metric space whose real Lipschitz-free space has the approximation property but fails the bounded approximation property, answering Kalton's question negatively. The identity can be approximated on every compact set by finite-rank operators, but no uniform bound on their norms is possible.
- Lean scope (lean/docs/330.md): Kalton's question asks whether uniform discreteness of a metric space forces its Lipschitz-free space to have the bounded approximation property. The formalization constructs a countable metric space with all distinct points at distance at least one whose real Lipschitz-free space has the approximation property but fails every bounded approximation bound.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 2 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [A uniformly discrete counterexample to bounded approximation in Lipschitz-free spaces](https://github.com/openai/math/blob/main/preprints/Failure-of-Bounded-Approximation-in-a-Lipschitz-Free-Space-over-a-Uniformly-Discrete-Metric-Space-September-26-2026/main.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/330.md
- Comparator statement (Quantitative renorming of real $\ell_1$): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/RealL1Renorming.lean
- Comparator statement (Uniformly discrete Lipschitz-free space with AP but no BAP): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/DiscreteLipschitzFree.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
