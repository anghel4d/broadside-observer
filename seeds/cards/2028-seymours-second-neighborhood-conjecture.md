---
title: "Seymour’s second-neighborhood conjecture"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 173; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/A-proof-of-Seymours-second-neighborhood-conjecture-September-23-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "combinatorics"
  - "lean4"
  - "formalized"
seed_rank: 2028
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "A proof of Seymour’s second-neighborhood conjecture"
    url: "https://github.com/openai/math/blob/main/preprints/A-proof-of-Seymours-second-neighborhood-conjecture-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Seymour’s second-neighborhood conjecture

## One-sentence takeaway

OpenAI's result family 173 (Combinatorics) claims: Proves Seymour's second-neighborhood conjecture: every nonempty finite oriented graph has a vertex with at least as many vertices at directed distance exactly two as at directed distance one.

## Why it matters here

Combinatorics is where the library's procedural-generation, graph and grid work (GRID COMMAND maps, tilings, WFC) gets its theory. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Oriented graphs may be arbitrary apart from the exclusion of loops and oppositely directed edge pairs.
- *A proof of Seymour’s second-neighborhood conjecture*: We prove that every nonempty finite oriented graph has a vertex with at least as many vertices at directed distance two as at directed distance one. This resolves Seymour's second neighborhood conjecture positively.
- Lean scope (lean/docs/173.md): Seymour's second-neighborhood conjecture asserts that every nonempty finite oriented graph has a vertex with at least as many second out-neighbors as first out-neighbors. The formalized result proves this assertion, where the second neighborhood consists of vertices at directed distance exactly two.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [A proof of Seymour’s second-neighborhood conjecture](https://github.com/openai/math/blob/main/preprints/A-proof-of-Seymours-second-neighborhood-conjecture-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/173.md
- Comparator statement (Seymour's second-neighborhood conjecture): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/SeymourSecondNeighborhood.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
