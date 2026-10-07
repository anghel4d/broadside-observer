---
title: "Critical and quenched near-critical universality for Poisson–Voronoi percolation"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 224; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/From-critical-crossings-to-quenched-near-critical-universality-in-Voronoi-percolation-October-5-2026/critical-crossings-quenched-near-critical-universality-voronoi-percolation.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "probability-and-statistical-mechanics"
  - "unformalized"
seed_rank: 2079
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 7
lineage: ai-mathematical-reasoning
cites:
  - title: "From critical crossings to quenched near-critical universality in Voronoi percolation"
    url: "https://github.com/openai/math/blob/main/preprints/From-critical-crossings-to-quenched-near-critical-universality-in-Voronoi-percolation-October-5-2026/critical-crossings-quenched-near-critical-universality-voronoi-percolation.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "A Pivotal Amplitude for Voronoi Percolation from Cardy's Formula"
    url: "https://github.com/openai/math/blob/main/preprints/A-Pivotal-Amplitude-for-Voronoi-Percolation-from-Cardys-Formula-October-5-2026/voronoi-pivotal-amplitude.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Cardy’s formula for critical Poisson–Voronoi percolation"
    url: "https://github.com/openai/math/blob/main/preprints/Cardys-formula-for-critical-Poisson-Voronoi-percolation-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Critical and quenched near-critical universality for Poisson–Voronoi percolation

## One-sentence takeaway

OpenAI's result family 224 (Probability and statistical mechanics) claims: Proves Cardy's formula for annealed critical Poisson–Voronoi crossing probabilities in every bounded Jordan quadrilateral.

## Why it matters here

Random processes, percolation and spin-system results feed intuition for stochastic simulation, sampling and Monte Carlo in Anoptic. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems.

## Key ideas

- Family summary (repo): With each model normalized by its own expected unit-square pivotal count, the conditional joint near-critical crossing-threshold laws for rational polygonal quads converge in environment probability to the triangular-lattice reference law. This establishes quenched near-critical universality for crossing thresholds.
- *From critical crossings to quenched near-critical universality in Voronoi percolation*: Taking Cardy's crossing formula for critical Poisson–Voronoi percolation as an input, we prove a universal joint limit for the near-critical crossing thresholds of rational polygonal quadrilaterals under the monotone coupling. Conditional on the Poisson tessellation, the threshold law converges in probability over tessellations to the same law as on the triangular lattice. Each model is normalized by its own expected number of color-pivotal sites for a unit-square crossing.
- *A Pivotal Amplitude for Voronoi Percolation from Cardy's Formula*: Taking Cardy's conformal crossing formula for critical planar Poisson–Voronoi percolation in every bounded Jordan quadrilateral as an input, we prove that the expected number of color-pivotal cells for a unit-square crossing is asymptotic to a positive constant times $\varepsilon ^{-3/4}$, where the point intensity is $\varepsilon ^{-2}$. No rate of convergence in Cardy's formula is required.
- *Cardy’s formula for critical Poisson–Voronoi percolation*: We prove Cardy's formula for annealed crossing probabilities in critical planar Poisson–Voronoi percolation in every bounded Jordan quadrilateral. This proves the annealed crossing-probability form of the conformal-invariance conjecture for this model.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: not formalized. The repo has no Lean development for this family, so the claim rests on the prose manuscript(s) alone.

## Links

- Manuscript: [From critical crossings to quenched near-critical universality in Voronoi percolation](https://github.com/openai/math/blob/main/preprints/From-critical-crossings-to-quenched-near-critical-universality-in-Voronoi-percolation-October-5-2026/critical-crossings-quenched-near-critical-universality-voronoi-percolation.pdf)
- Manuscript: [A Pivotal Amplitude for Voronoi Percolation from Cardy's Formula](https://github.com/openai/math/blob/main/preprints/A-Pivotal-Amplitude-for-Voronoi-Percolation-from-Cardys-Formula-October-5-2026/voronoi-pivotal-amplitude.pdf)
- Manuscript: [Cardy’s formula for critical Poisson–Voronoi percolation](https://github.com/openai/math/blob/main/preprints/Cardys-formula-for-critical-Poisson-Voronoi-percolation-September-23-2026/paper.pdf)
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
