---
title: "Sampling and counting contingency tables with arbitrary margins"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 115; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Exact-Uniform-Sampling-of-Contingency-Tables-with-Arbitrary-Margins-September-24-2026/main.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "theoretical-computer-science"
  - "lean4"
  - "formalized"
seed_rank: 1972
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 9
lineage: ai-mathematical-reasoning
cites:
  - title: "Exact Uniform Sampling of Contingency Tables with Arbitrary Margins"
    url: "https://github.com/openai/math/blob/main/preprints/Exact-Uniform-Sampling-of-Contingency-Tables-with-Arbitrary-Margins-September-24-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "An FPRAS for Cell-Bounded Contingency Tables"
    url: "https://github.com/openai/math/blob/main/preprints/An-FPRAS-for-Cell-Bounded-Contingency-Tables-September-24-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Sampling and counting contingency tables with arbitrary margins

## One-sentence takeaway

OpenAI's result family 115 (Theoretical computer science) claims: For nonnegative integer matrices with prescribed row and column sums, gives exact uniform sampling in expected polynomial bit time and almost-uniform sampling in worst-case polynomial bit time.

## Why it matters here

Closest to the systems side of the library: complexity, algorithms and computability statements here can change what is worth trying in ano, the engines or GRID COMMAND tooling. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): The dimensions and binary-encoded margins are unrestricted. Also gives a fully polynomial randomized approximation scheme for counting such tables with arbitrary individual cell bounds, including structural zeros, with polynomial cost on every execution.
- *Exact Uniform Sampling of Contingency Tables with Arbitrary Margins*: We give an exact uniform sampler for nonnegative integer contingency tables with arbitrary prescribed margins. It terminates almost surely and has expected bit complexity polynomial in both dimensions and the binary length of the margins. No positivity, balance, sparsity, or fixed-dimension assumption is required.
- *An FPRAS for Cell-Bounded Contingency Tables*: We give a fully polynomial randomized approximation scheme for counting nonnegative integer matrices with prescribed row sums, column sums, and individual entry bounds. Both dimensions vary, all numerical data are encoded in binary, and zero bounds are allowed. The algorithm uses only unbiased random bits and has a polynomial bound on its bit operations on every execution.
- Lean scope (lean/docs/115.md): The formalization gives an exact uniform sampler for nonnegative integer contingency tables with arbitrary prescribed row and column sums having equal totals. It terminates almost surely, every halted output is feasible, and each table has exactly the uniform limiting probability.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 2 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Exact Uniform Sampling of Contingency Tables with Arbitrary Margins](https://github.com/openai/math/blob/main/preprints/Exact-Uniform-Sampling-of-Contingency-Tables-with-Arbitrary-Margins-September-24-2026/main.pdf)
- Manuscript: [An FPRAS for Cell-Bounded Contingency Tables](https://github.com/openai/math/blob/main/preprints/An-FPRAS-for-Cell-Bounded-Contingency-Tables-September-24-2026/main.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/115.md
- Comparator statement (Exact and bounded-time sampling of contingency tables): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/ContingencyTables.lean
- Comparator statement (Randomized approximate counting of cell-bounded contingency tables): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/ContingencyTables.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
