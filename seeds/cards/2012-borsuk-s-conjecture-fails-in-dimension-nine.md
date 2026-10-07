---
title: "Borsuk's conjecture fails in dimension nine"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 156; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/A-nine-dimensional-counterexample-to-Borsuks-covering-assertion-September-23-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "combinatorics"
  - "lean4"
  - "formalized"
seed_rank: 2012
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "A nine-dimensional counterexample to Borsuk's covering assertion"
    url: "https://github.com/openai/math/blob/main/preprints/A-nine-dimensional-counterexample-to-Borsuks-covering-assertion-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Borsuk's conjecture fails in dimension nine

## One-sentence takeaway

OpenAI's result family 156 (Combinatorics) claims: Constructs a compact subset of ℝ9 that cannot be covered by ten sets of strictly smaller diameter, disproving Borsuk's covering assertion already in dimension nine.

## Why it matters here

Combinatorics is where the library's procedural-generation, graph and grid work (GRID COMMAND maps, tilings, WFC) gets its theory. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): The example consists of rank-one orthogonal projectors onto lines in ℝ4, with the Frobenius metric.
- *A nine-dimensional counterexample to Borsuk's covering assertion*: The compact set of rank-one orthogonal projectors on ℝ4, with the Frobenius metric, cannot be covered by ten sets of strictly smaller diameter. It therefore gives a counterexample to Borsuk's conjecture in dimension nine.
- Lean scope (lean/docs/156.md): Borsuk's conjecture predicts that every bounded subset of $\mathbb R^d$ can be covered by $d+1$ sets of strictly smaller diameter. The formalized counterexample is the compact set of rank-one orthogonal projectors onto lines in $\mathbb R^4$, with the Frobenius metric.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [A nine-dimensional counterexample to Borsuk's covering assertion](https://github.com/openai/math/blob/main/preprints/A-nine-dimensional-counterexample-to-Borsuks-covering-assertion-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/156.md
- Comparator statement (Nine-dimensional Borsuk counterexample): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/BorsukNine.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
