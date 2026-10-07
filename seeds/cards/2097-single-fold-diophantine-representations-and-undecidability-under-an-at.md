---
title: "Single-fold Diophantine representations and undecidability under an at-most-one-solution promise"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 242; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Single-fold-Diophantine-representations-September-24-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "mathematical-logic"
  - "lean4"
  - "formalized"
seed_rank: 2097
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Single-fold Diophantine representations"
    url: "https://github.com/openai/math/blob/main/preprints/Single-fold-Diophantine-representations-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Single-fold Diophantine representations and undecidability under an at-most-one-solution promise

## One-sentence takeaway

OpenAI's result family 242 (Mathematical logic) claims: Every recursively enumerable set of tuples of natural numbers has a Diophantine representation with exactly one auxiliary solution for each member and none for nonmembers.

## Why it matters here

Logic and set-theory results touch the type-theory and formal-methods corner of the library (Lean, ano's type system). More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): This proves the single-fold conjecture and hence the finite-fold conjecture. Diophantine solvability over the nonnegative integers remains undecidable even with an at-most-one-solution promise.
- *Single-fold Diophantine representations*: Every recursively enumerable set of natural-number tuples has a polynomial Diophantine representation with exactly one complete auxiliary tuple for each member. This proves the single-fold conjecture and, consequently, the finite-fold conjecture.
- Lean scope (lean/docs/242.md): The single-fold Diophantine conjecture asks whether every recursively enumerable set has a polynomial representation with a unique auxiliary witness for each member. The formalization establishes this for every recursively enumerable subset of $\mathbb N^n$, $n\ge1$: an integer polynomial has exactly one complete natural-number witness tuple for members and none for nonmembers.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Single-fold Diophantine representations](https://github.com/openai/math/blob/main/preprints/Single-fold-Diophantine-representations-September-24-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/242.md
- Comparator statement (Single-fold Diophantine representations): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/SingleFold.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
