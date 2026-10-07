---
title: "Local smoothing in three dimensions"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 079; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Critical-local-smoothing-for-the-three-dimensional-wave-equation-September-24-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "real-and-complex-analysis"
  - "unformalized"
seed_rank: 1936
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 7
lineage: ai-mathematical-reasoning
cites:
  - title: "Critical local smoothing for the three-dimensional wave equation"
    url: "https://github.com/openai/math/blob/main/preprints/Critical-local-smoothing-for-the-three-dimensional-wave-equation-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Local smoothing in three dimensions

## One-sentence takeaway

OpenAI's result family 079 (Real and complex analysis) claims: Resolves Sogge's local smoothing conjecture for the Euclidean wave equation in three spatial dimensions.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems.

## Key ideas

- Family summary (repo): The estimate holds throughout the full strict range $2\lt p\lt \infty$, with Sobolev regularity above $\max\{0,1-3/p\}$. In particular, the critical L3 estimate holds with every positive Sobolev loss.
- *Critical local smoothing for the three-dimensional wave equation*: We prove the critical L3 local smoothing estimate for the wave equation in three spatial dimensions, with every positive Sobolev loss. This resolves Sogge's Euclidean local smoothing conjecture in dimension three.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: not formalized. The repo has no Lean development for this family, so the claim rests on the prose manuscript(s) alone.

## Links

- Manuscript: [Critical local smoothing for the three-dimensional wave equation](https://github.com/openai/math/blob/main/preprints/Critical-local-smoothing-for-the-three-dimensional-wave-equation-September-24-2026/paper.pdf)
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
