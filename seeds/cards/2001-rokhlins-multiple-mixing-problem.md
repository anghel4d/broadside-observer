---
title: "Rokhlin’s multiple-mixing problem"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 145; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Rokhlins-multiple-mixing-problem-for-one-transformation-September-23-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "dynamical-systems-and-ergodic-theory"
  - "lean4"
  - "formalized"
seed_rank: 2001
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Rokhlin's multiple-mixing problem for one transformation"
    url: "https://github.com/openai/math/blob/main/preprints/Rokhlins-multiple-mixing-problem-for-one-transformation-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Rokhlin’s multiple-mixing problem

## One-sentence takeaway

OpenAI's result family 145 (Dynamical systems and ergodic theory) claims: Proves that every invertible mixing probability-preserving transformation is mixing of all finite orders, resolving Rokhlin's multiple-mixing problem for a single transformation.

## Why it matters here

Dynamics results bear on long-run simulation behaviour, chaos and deterministic-lockstep reasoning. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Correlations among any finite collection of measurable sets converge to the product of their measures whenever all pairwise time separations diverge.
- *Rokhlin's multiple-mixing problem for one transformation*: Every invertible mixing probability-preserving transformation is mixing of every finite order. Thus Rokhlin's multiple-mixing problem for a single transformation has an affirmative answer.
- Lean scope (lean/docs/145.md): Rokhlin's multiple-mixing problem asks whether ordinary mixing of one invertible probability-preserving transformation implies mixing of every finite order. The formalization proves this implication.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Rokhlin's multiple-mixing problem for one transformation](https://github.com/openai/math/blob/main/preprints/Rokhlins-multiple-mixing-problem-for-one-transformation-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/145.md
- Comparator statement (Mixing of every finite order for one mixing transformation): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/Rokhlin.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
