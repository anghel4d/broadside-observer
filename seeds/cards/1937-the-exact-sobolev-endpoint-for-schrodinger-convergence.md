---
title: "The exact Sobolev endpoint for Schrödinger convergence"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 080; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Endpoint-convergence-for-the-planar-Schrodinger-equation-September-24-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "real-and-complex-analysis"
  - "unformalized"
seed_rank: 1937
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 7
lineage: ai-mathematical-reasoning
cites:
  - title: "Endpoint convergence for the planar Schrodinger equation"
    url: "https://github.com/openai/math/blob/main/preprints/Endpoint-convergence-for-the-planar-Schrodinger-equation-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Endpoint pointwise convergence for the Schrodinger equation in higher dimensions"
    url: "https://github.com/openai/math/blob/main/preprints/Endpoint-pointwise-convergence-for-the-Schrodinger-equation-in-higher-dimensions-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# The exact Sobolev endpoint for Schrödinger convergence

## One-sentence takeaway

OpenAI's result family 080 (Real and complex analysis) claims: Proves almost-everywhere convergence $e^{it\Delta}f\to f$ as $t\downarrow0$ for every $f\in H^{n/(2(n+1))}(\mathbb R^n)$ and every dimension n ≥ 2.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems.

## Key ideas

- Family summary (repo): This attains the sharp Sobolev equality case of Carleson's Schrödinger convergence problem, including the planar endpoint H1/3.
- *Endpoint convergence for the planar Schrodinger equation*: We resolve the planar Sobolev endpoint of Carleson's convergence problem: for initial data in $H^{1/3}(\mathbb R^2)$, the Schrödinger evolution converges almost everywhere to the initial data as $t\downarrow0$. The evolution is defined by taking the Gaussian regularization limit first; on one full-measure spatial set, this limit exists for every $0\lt t\lt 1$, and the resulting evolution is continuous at t = 0.
- *Endpoint pointwise convergence for the Schrodinger equation in higher dimensions*: We resolve the Sobolev endpoint of Carleson's pointwise convergence problem in every dimension n ≥ 3. For initial data in $H^{n/(2(n+1))}(\mathbb R^n)$, the free Schrödinger evolution converges almost everywhere to the initial data as $t\downarrow0$. The evolution is defined by removing Gaussian regularization on one full-measure spatial set, uniformly over the interval $0\lt t\lt 1$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: not formalized. The repo has no Lean development for this family, so the claim rests on the prose manuscript(s) alone.

## Links

- Manuscript: [Endpoint convergence for the planar Schrodinger equation](https://github.com/openai/math/blob/main/preprints/Endpoint-convergence-for-the-planar-Schrodinger-equation-September-24-2026/paper.pdf)
- Manuscript: [Endpoint pointwise convergence for the Schrodinger equation in higher dimensions](https://github.com/openai/math/blob/main/preprints/Endpoint-pointwise-convergence-for-the-Schrodinger-equation-in-higher-dimensions-September-24-2026/paper.pdf)
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
