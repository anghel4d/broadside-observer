---
title: "Kakeya in three and four dimensions"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 074; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/The-Kakeya-maximal-conjecture-in-three-dimensions-September-23-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "real-and-complex-analysis"
  - "unformalized"
seed_rank: 1931
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 7
lineage: ai-mathematical-reasoning
cites:
  - title: "The Kakeya maximal conjecture in three dimensions"
    url: "https://github.com/openai/math/blob/main/preprints/The-Kakeya-maximal-conjecture-in-three-dimensions-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Every four-dimensional Kakeya set has full Hausdorff dimension"
    url: "https://github.com/openai/math/blob/main/preprints/Every-four-dimensional-Kakeya-set-has-full-Hausdorff-dimension-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Kakeya in three and four dimensions

## One-sentence takeaway

OpenAI's result family 074 (Real and complex analysis) claims: Resolves the Kakeya maximal conjecture in three dimensions and the Hausdorff-dimension conjecture in four.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems.

## Key ideas

- Family summary (repo): In three dimensions, the radius-δ tube maximal operator maps $L^3(\mathbb R^3)$ to $L^3(S^2)$ with norm $O_\varepsilon(\delta^{-\varepsilon})$ for every ε > 0. In four dimensions, every set containing a unit segment in every direction has Hausdorff dimension four.
- *The Kakeya maximal conjecture in three dimensions*: We prove the Kakeya maximal conjecture in three dimensions. For every ε > 0, the maximal average over unit tubes of radius δ maps $L^3(\mathbb R^3)$ to $L^3(S^2)$ with norm at most $C_\varepsilon\delta^{-\varepsilon}$.
- *Every four-dimensional Kakeya set has full Hausdorff dimension*: We prove the four-dimensional Hausdorff-dimension Kakeya conjecture: every subset of ℝ4 containing a unit line segment in every direction has Hausdorff dimension four. No compactness or regularity assumption is imposed on the set or its witnessing line family.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: not formalized. The repo has no Lean development for this family, so the claim rests on the prose manuscript(s) alone.

## Links

- Manuscript: [The Kakeya maximal conjecture in three dimensions](https://github.com/openai/math/blob/main/preprints/The-Kakeya-maximal-conjecture-in-three-dimensions-September-23-2026/paper.pdf)
- Manuscript: [Every four-dimensional Kakeya set has full Hausdorff dimension](https://github.com/openai/math/blob/main/preprints/Every-four-dimensional-Kakeya-set-has-full-Hausdorff-dimension-September-24-2026/paper.pdf)
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
