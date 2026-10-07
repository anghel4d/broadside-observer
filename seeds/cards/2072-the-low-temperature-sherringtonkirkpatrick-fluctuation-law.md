---
title: "The low-temperature Sherrington–Kirkpatrick fluctuation law"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 217; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/The-low-temperature-Sherrington-Kirkpatrick-free-energy-limiting-law-September-24-2026/The-low-temperature-Sherrington-Kirkpatrick-free-energy-limiting-law-September-24-2026.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "probability-and-statistical-mechanics"
  - "unformalized"
seed_rank: 2072
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 7
lineage: ai-mathematical-reasoning
cites:
  - title: "The low-temperature Sherrington–Kirkpatrick free-energy limiting law"
    url: "https://github.com/openai/math/blob/main/preprints/The-low-temperature-Sherrington-Kirkpatrick-free-energy-limiting-law-September-24-2026/The-low-temperature-Sherrington-Kirkpatrick-free-energy-limiting-law-September-24-2026.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "The low-temperature Sherrington–Kirkpatrick fluctuation scale"
    url: "https://github.com/openai/math/blob/main/preprints/The-low-temperature-Sherrington-Kirkpatrick-fluctuation-scale-September-24-2026/The-low-temperature-Sherrington-Kirkpatrick-fluctuation-scale-September-24-2026.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# The low-temperature Sherrington–Kirkpatrick fluctuation law

## One-sentence takeaway

OpenAI's result family 217 (Probability and statistical mechanics) claims: For every fixed inverse temperature β > 1, determines the fluctuation scale and limiting law of the zero-field Gaussian Sherrington–Kirkpatrick log partition function.

## Why it matters here

Random processes, percolation and spin-system results feed intuition for stochastic simulation, sampling and Monte Carlo in Anoptic. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems.

## Key ideas

- Family summary (repo): Its variance is asymptotic to $c_\beta n^{1/3}$, with $c_\beta\gt 0$, confirming the predicted n1/6 standard-deviation scale. Exact centering and standardization give full-sequence convergence to a uniquely characterized nondegenerate law.
- *The low-temperature Sherrington–Kirkpatrick free-energy limiting law*: For every fixed inverse temperature β > 1, we prove that the zero-field Gaussian Ising Sherrington–Kirkpatrick free energy, centered by its expectation and divided by its standard deviation, converges in distribution to a nondegenerate law as the system size tends to infinity through all integers. We also prove that its variance divided by n1/3 converges to a finite positive constant.
- *The low-temperature Sherrington–Kirkpatrick fluctuation scale*: For the zero-field Gaussian Sherrington–Kirkpatrick model at every fixed inverse temperature β > 1, we prove that the standard deviation of the log partition function is $n^{1/6+o(1)}$. The same exponent describes its typical centered absolute fluctuations, establishing the predicted one-sixth exponent in this regime.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: not formalized. The repo has no Lean development for this family, so the claim rests on the prose manuscript(s) alone.

## Links

- Manuscript: [The low-temperature Sherrington–Kirkpatrick free-energy limiting law](https://github.com/openai/math/blob/main/preprints/The-low-temperature-Sherrington-Kirkpatrick-free-energy-limiting-law-September-24-2026/The-low-temperature-Sherrington-Kirkpatrick-free-energy-limiting-law-September-24-2026.pdf)
- Manuscript: [The low-temperature Sherrington–Kirkpatrick fluctuation scale](https://github.com/openai/math/blob/main/preprints/The-low-temperature-Sherrington-Kirkpatrick-fluctuation-scale-September-24-2026/The-low-temperature-Sherrington-Kirkpatrick-fluctuation-scale-September-24-2026.pdf)
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
