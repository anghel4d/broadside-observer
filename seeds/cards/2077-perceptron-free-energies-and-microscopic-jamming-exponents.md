---
title: "Perceptron free energies and microscopic jamming exponents"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 222; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/The-free-energy-of-the-Ising-random-perceptron-September-24-2026/The-free-energy-of-the-Ising-random-perceptron-September-24-2026.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "probability-and-statistical-mechanics"
  - "lean4"
  - "formalized"
seed_rank: 2077
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "The free energy of the Ising random perceptron"
    url: "https://github.com/openai/math/blob/main/preprints/The-free-energy-of-the-Ising-random-perceptron-September-24-2026/The-free-energy-of-the-Ising-random-perceptron-September-24-2026.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Microscopic jamming in the negative spherical perceptron"
    url: "https://github.com/openai/math/blob/main/preprints/Microscopic-jamming-in-the-negative-spherical-perceptron-September-24-2026/Microscopic-jamming-in-the-negative-spherical-perceptron-September-24-2026.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "The spherical perceptron with bi-orthogonally invariant disorder"
    url: "https://github.com/openai/math/blob/main/preprints/The-spherical-perceptron-with-bi-orthogonally-invariant-disorder-September-24-2026/The-spherical-perceptron-with-bi-orthogonally-invariant-disorder-September-24-2026.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "The free energy of the spherical random perceptron"
    url: "https://github.com/openai/math/blob/main/preprints/The-free-energy-of-the-spherical-random-perceptron-September-24-2026/The-free-energy-of-the-spherical-random-perceptron-September-24-2026.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Perceptron free energies and microscopic jamming exponents

## One-sentence takeaway

OpenAI's result family 222 (Probability and statistical mechanics) claims: Determines finite-temperature variational free energies for Gaussian Ising perceptrons with bounded Borel log-potentials and Gaussian spherical perceptrons with bounded continuous potentials, at every positive pattern density.

## Why it matters here

Random processes, percolation and spin-system results feed intuition for stochastic simulation, sampling and Monte Carlo in Anoptic. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): A spherical extension treats bi-orthogonally invariant disorder with compact limiting singular-value distributions and no outliers. At margin −1, the quadratic-penalty spherical model has a sharp feasibility threshold and limiting gap and force laws, with system size, zero temperature, and critical density taken in that order.
- *The free energy of the Ising random perceptron*: We determine the limiting free energy of the Ising perceptron with independent Gaussian patterns for every bounded Borel log-potential, at every fixed positive temperature and pattern density. We give an explicit variational formula for the limit and prove convergence in expectation and probability.
- *Microscopic jamming in the negative spherical perceptron*: We prove a sharp feasibility threshold and limiting gap and force laws for the spherical perceptron with margin −1 and quadratic penalty. The limits are taken successively in system size, inverse temperature, and density approaching the threshold from above. They agree for Gaussian coordinates and for the equal mixture of centered Gaussian coordinates with variances $1-\varepsilon$ and $1+\varepsilon$, for every sufficiently small fixed ε.
- *The spherical perceptron with bi-orthogonally invariant disorder*: We determine the limiting free energy of a spherical perceptron with a bounded continuous activation and a bi-orthogonally invariant disorder matrix. The singular values may have any compact limiting distribution, provided there are no outliers. We give an explicit variational formula for this limit.
- *The free energy of the spherical random perceptron*: We prove an exact variational formula for the limiting pressure of the spherical random perceptron with an arbitrary bounded continuous single-pattern potential. The formula holds at every fixed positive density and inverse temperature, with convergence in expectation and in probability.
- Lean scope (lean/docs/222.md): The linked formalization proves finiteness of the variational value used for the Ising random perceptron. For every nonnegative pattern density and every bounded continuous log-potential, the infimum over admissible overlap paths is a finite real number.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 3 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [The free energy of the Ising random perceptron](https://github.com/openai/math/blob/main/preprints/The-free-energy-of-the-Ising-random-perceptron-September-24-2026/The-free-energy-of-the-Ising-random-perceptron-September-24-2026.pdf)
- Manuscript: [Microscopic jamming in the negative spherical perceptron](https://github.com/openai/math/blob/main/preprints/Microscopic-jamming-in-the-negative-spherical-perceptron-September-24-2026/Microscopic-jamming-in-the-negative-spherical-perceptron-September-24-2026.pdf)
- Manuscript: [The spherical perceptron with bi-orthogonally invariant disorder](https://github.com/openai/math/blob/main/preprints/The-spherical-perceptron-with-bi-orthogonally-invariant-disorder-September-24-2026/The-spherical-perceptron-with-bi-orthogonally-invariant-disorder-September-24-2026.pdf)
- Manuscript: [The free energy of the spherical random perceptron](https://github.com/openai/math/blob/main/preprints/The-free-energy-of-the-spherical-random-perceptron-September-24-2026/The-free-energy-of-the-spherical-random-perceptron-September-24-2026.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/222.md
- Comparator statement (Finiteness of the Ising-perceptron variational value): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/IsingFiniteness.lean
- Comparator statement (Variational formula for spherical-perceptron pressure): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/PerceptronFreeEnergy.lean
- Comparator statement (Spherical linear-field dual formula and approximation): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/SphericalField.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
