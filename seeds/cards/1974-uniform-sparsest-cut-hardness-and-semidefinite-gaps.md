---
title: "Uniform sparsest cut: hardness and semidefinite gaps"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 117; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Constant-factor-hardness-of-uniform-sparsest-cut-September-24-2026/Constant-factor-hardness-of-uniform-sparsest-cut-September-24-2026.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "theoretical-computer-science"
  - "lean4"
  - "formalized"
seed_rank: 1974
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 9
lineage: ai-mathematical-reasoning
cites:
  - title: "Constant-factor hardness of uniform sparsest cut"
    url: "https://github.com/openai/math/blob/main/preprints/Constant-factor-hardness-of-uniform-sparsest-cut-September-24-2026/Constant-factor-hardness-of-uniform-sparsest-cut-September-24-2026.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Near-square-root logarithmic integrality gaps for uniform sparsest cut"
    url: "https://github.com/openai/math/blob/main/preprints/Near-square-root-logarithmic-integrality-gaps-for-uniform-sparsest-cut-September-24-2026/Near-square-root-logarithmic-integrality-gaps-for-uniform-sparsest-cut-September-24-2026.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Uniform sparsest cut: hardness and semidefinite gaps

## One-sentence takeaway

OpenAI's result family 117 (Theoretical computer science) claims: Proves that approximating Uniform Sparsest Cut within any fixed constant factor is NP-hard, even with nonnegative rational capacities and unit demands.

## Why it matters here

Closest to the systems side of the library: complexity, algorithms and computability statements here can change what is worth trying in ano, the engines or GRID COMMAND tooling. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): The Goemans–Linial semidefinite relaxation also has integrality gaps of order at least $\sqrt{\log n}/(\log\log n)^3$, approaching the square-root-logarithmic upper bound.
- *Constant-factor hardness of uniform sparsest cut*: We prove that, for every fixed C > 1, approximating Uniform Sparsest Cut within factor C is NP-hard. The output graphs have nonnegative rational capacities and unit demand between every pair of distinct vertices.
- *Near-square-root logarithmic integrality gaps for uniform sparsest cut*: We construct uniform sparsest-cut instances whose Goemans–Linial semidefinite integrality gap is at least $c\sqrt{\log n}/(\log\log n)^3$ along a sequence $n\to\infty$. The demand is one between every pair of distinct vertices, and the capacities are nonnegative real numbers. This matches the Arora–Rao–Vazirani upper bound up to a power of $\log\log n$.
- Lean scope (lean/docs/117.md): The formalized result gives integrality gaps for the Goemans–Linial relaxation of uniform sparsest cut. Along a sequence of instance sizes $n\to\infty$, the ratio of the integral optimum to the positive relaxation optimum is at least $c\sqrt{\log n}/(\log\log n)^3$ for one absolute $c>0$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Constant-factor hardness of uniform sparsest cut](https://github.com/openai/math/blob/main/preprints/Constant-factor-hardness-of-uniform-sparsest-cut-September-24-2026/Constant-factor-hardness-of-uniform-sparsest-cut-September-24-2026.pdf)
- Manuscript: [Near-square-root logarithmic integrality gaps for uniform sparsest cut](https://github.com/openai/math/blob/main/preprints/Near-square-root-logarithmic-integrality-gaps-for-uniform-sparsest-cut-September-24-2026/Near-square-root-logarithmic-integrality-gaps-for-uniform-sparsest-cut-September-24-2026.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/117.md
- Comparator statement (Uniform sparsest-cut integrality gaps): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/UniformSparsestCut.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
