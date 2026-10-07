---
title: "Kinetic limits and fluctuations over the Boltzmann lifespan"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 364; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/The-Boltzmann-Grad-limit-for-stable-radial-potentials-on-regular-kinetic-intervals-September-23-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "partial-differential-equations"
  - "unformalized"
seed_rank: 2219
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 7
lineage: ai-mathematical-reasoning
cites:
  - title: "The Boltzmann–Grad limit for stable radial potentials on regular kinetic intervals"
    url: "https://github.com/openai/math/blob/main/preprints/The-Boltzmann-Grad-limit-for-stable-radial-potentials-on-regular-kinetic-intervals-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Hard-sphere fluctuations on the regular Boltzmann lifespan"
    url: "https://github.com/openai/math/blob/main/preprints/Hard-sphere-fluctuations-on-the-regular-Boltzmann-lifespan-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Kinetic limits and fluctuations over the Boltzmann lifespan

## One-sentence takeaway

OpenAI's result family 364 (Partial differential equations) claims: Derives the nonlinear Boltzmann equation from three-dimensional grand-canonical Newtonian gases throughout every regular kinetic interval with uniform Gaussian decay.

## Why it matters here

PDE results are the theory behind fluid, wave and transport simulation the engines approximate numerically. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems.

## Key ideas

- Family summary (repo): Stable finite-range radial potentials may have attractive wells and a singular repulsive core; initial pair exclusion and spatially summable Gaussian density and gradient bounds are assumed. A companion gives finite-dimensional hard-sphere Gaussian fluctuations, centered at the exact microscopic expectation and governed by the linear fluctuating Boltzmann equation.
- *The Boltzmann–Grad limit for stable radial potentials on regular kinetic intervals*: We derive the nonlinear Boltzmann equation from a grand-canonical Newtonian gas with initial pair exclusion. We treat stable, finite-range radial potentials that are C2 except for an allowed repulsive singularity at the origin, and C1 initial probability densities with spatially summable Gaussian bounds on the density and its spatial gradient. All fixed-order rescaled factorial marginals converge in L1, uniformly throughout every finite interval on which the classical kinetic solution has a uniform Gaussian bound.
- *Hard-sphere fluctuations on the regular Boltzmann lifespan*: We prove a finite-dimensional central limit theorem away from equilibrium for a deterministic grand-canonical hard-sphere gas in three dimensions. The initial probability density is smooth, with spatially summable Gaussian velocity bounds on the density and its spatial gradient. The limit holds on every finite interval on which the classical Boltzmann solution has uniform Gaussian velocity decay.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: not formalized. The repo has no Lean development for this family, so the claim rests on the prose manuscript(s) alone.

## Links

- Manuscript: [The Boltzmann–Grad limit for stable radial potentials on regular kinetic intervals](https://github.com/openai/math/blob/main/preprints/The-Boltzmann-Grad-limit-for-stable-radial-potentials-on-regular-kinetic-intervals-September-23-2026/paper.pdf)
- Manuscript: [Hard-sphere fluctuations on the regular Boltzmann lifespan](https://github.com/openai/math/blob/main/preprints/Hard-sphere-fluctuations-on-the-regular-Boltzmann-lifespan-September-23-2026/paper.pdf)
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
