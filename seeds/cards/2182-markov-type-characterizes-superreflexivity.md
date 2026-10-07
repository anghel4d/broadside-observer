---
title: "Markov type characterizes superreflexivity"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 327; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Nontrivial-Markov-Type-Forces-Superreflexivity-September-23-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "functional-analysis"
  - "lean4"
  - "formalized"
seed_rank: 2182
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Nontrivial Markov Type Forces Superreflexivity"
    url: "https://github.com/openai/math/blob/main/preprints/Nontrivial-Markov-Type-Forces-Superreflexivity-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Markov type characterizes superreflexivity

## One-sentence takeaway

OpenAI's result family 327 (Functional analysis) claims: Proves that every real Banach space with Markov type p for some p > 1 admits an equivalent uniformly convex norm, answering Naor's renorming question.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Together with the known converse, this characterizes superreflexivity by nontrivial Markov type.
- *Nontrivial Markov Type Forces Superreflexivity*: We prove that every real Banach space with Markov type p > 1 is superreflexive. Together with the known converse, this characterizes superreflexivity by nontrivial Markov type. This answers Naor's question: every real Banach space with nontrivial Markov type admits an equivalent uniformly smooth norm.
- Lean scope (lean/docs/327.md): The formalized result proves that a real Banach space has nontrivial Markov type exactly when it admits an equivalent uniformly convex norm, hence exactly when it is superreflexive. Nontrivial Markov type means a uniform Markov-type bound for some exponent $p>1$ over all finite stationary reversible chains and all positive times.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Nontrivial Markov Type Forces Superreflexivity](https://github.com/openai/math/blob/main/preprints/Nontrivial-Markov-Type-Forces-Superreflexivity-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/327.md
- Comparator statement (Nontrivial Markov type and superreflexivity): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/MarkovType.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
