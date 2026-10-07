---
title: "Canonical $O(3)$ continuum limit and exact $O(4)$ mass asymptotics"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 215; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/The-canonical-massive-continuum-limit-of-the-two-dimensional-O3-model-October-4-2026/massive-continuum-o3.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "probability-and-statistical-mechanics"
  - "lean4"
  - "formalized"
seed_rank: 2070
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "The canonical massive continuum limit of the two-dimensional O(3) model"
    url: "https://github.com/openai/math/blob/main/preprints/The-canonical-massive-continuum-limit-of-the-two-dimensional-O3-model-October-4-2026/massive-continuum-o3.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "An Isolated Particle Pole for the Two-Dimensional O(3) Spin Field"
    url: "https://github.com/openai/math/blob/main/preprints/An-Isolated-Particle-Pole-for-the-Two-Dimensional-O3-Spin-Field-October-4-2026/o3-particle-pole.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Exact mass asymptotics for the two-dimensional O(4) lattice model"
    url: "https://github.com/openai/math/blob/main/preprints/Exact-mass-asymptotics-for-the-two-dimensional-O4-lattice-model-October-5-2026/exact-mass-o4.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Sharp mass bounds for the two-dimensional O(4) model"
    url: "https://github.com/openai/math/blob/main/preprints/Sharp-mass-bounds-for-the-two-dimensional-O4-model-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Exponential decay in two-dimensional classical O(n) models"
    url: "https://github.com/openai/math/blob/main/preprints/Exponential-decay-in-two-dimensional-classical-On-models-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Canonical $O(3)$ continuum limit and exact $O(4)$ mass asymptotics

## One-sentence takeaway

OpenAI's result family 215 (Probability and statistical mechanics) claims: Constructs the canonical continuum limit of the two-dimensional nearest-neighbor $O(3)$ model: a non-Gaussian local relativistic theory with a unique vacuum and a positive mass gap.

## Why it matters here

Random processes, percolation and spin-system results feed intuition for stochastic simulation, sampling and Monte Carlo in Anoptic. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): For the square-lattice $O(4)$ model, determines the exact leading asymptotic of the full transfer gap, $m_{\mathrm{lat}}(\beta)\sim32e^{\pi/4-1/2}\sqrt\beta\,e^{-\pi\beta}$. The family also proves exponential spin-correlation decay for two-dimensional nearest-neighbor $O(n)$ models with n ≥ 3 at every positive temperature.
- *The canonical massive continuum limit of the two-dimensional O(3) model*: We construct a canonical interacting massive continuum limit of the two-dimensional nearest-neighbor $O(3)$ model with unit-length spins, no external field, and no topological term. Normalized by susceptibility and second-moment correlation length, the limit exists as the bare coupling tends to infinity through all positive real values, without selecting subsequences. The limiting fields satisfy the Osterwalder–Schrader axioms and have a nonzero connected four-point correlation on separated time supports.
- *An Isolated Particle Pole for the Two-Dimensional O(3) Spin Field*: We consider the continuum spin field constructed from the nearest-neighbor two-dimensional $O(3)$ model by the fixed prescription of the companion paper. We prove that its vector two-point spectral measure has a positive atom corresponding to the lowest mass, separated by a positive gap from all remaining mass support.
- *Exact mass asymptotics for the two-dimensional O(4) lattice model*: For the nearest-neighbor $O(4)$ model on the square lattice at inverse temperature β, we prove the exact low-temperature asymptotic

$\displaystyle m_{\mathrm{lat}}(\beta)\sim 32\exp(\pi/4-1/2)\sqrt\beta\,\exp(-\pi\beta) \qquad (\beta\to\infty).$

Here the mass is the gap of the full Osterwalder–Schrader transfer operator, including rotation-invariant local-observable sectors, in units of one original lattice time step.
- *Sharp mass bounds for the two-dimensional O(4) model*: We prove sharp mass bounds for the two-dimensional nearest-neighbor $O(4)$ model. For all sufficiently large inverse couplings β, the full transfer gap, including rotation-invariant local-observable sectors, is bounded above and below by positive multiples of $\sqrt\beta e^{-\pi\beta}$. We also prove that the model has a unique periodic local limit and a positive full gap at every finite β > 0, resolving the all-temperature lattice mass-generation conjecture for this periodic state.
- *Exponential decay in two-dimensional classical O(n) models*: We prove exponential decay of two-point correlations for the classical nearest-neighbor $O(n)$ model on the square lattice, for every n ≥ 3 and every finite positive inverse temperature. The estimate is uniform over finite free-boundary subgraphs and bounded nonnegative edge strengths. This resolves positively the all-temperature exponential spin-decay conjecture for these models.
- Lean scope (lean/docs/215.md): The formalized result proves exponential decay of spin correlations for the two-dimensional classical $O(n)$ model at every temperature when $n\ge3$. For each interaction bound $\beta>0$, constants $A$ and $m>0$ work for every finite square-lattice subgraph with free boundary and nonnegative edge strengths at most $\beta$: the correlation between sites $x,y$ is at most $Ae^{-m|x-y|}$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [The canonical massive continuum limit of the two-dimensional O(3) model](https://github.com/openai/math/blob/main/preprints/The-canonical-massive-continuum-limit-of-the-two-dimensional-O3-model-October-4-2026/massive-continuum-o3.pdf)
- Manuscript: [An Isolated Particle Pole for the Two-Dimensional O(3) Spin Field](https://github.com/openai/math/blob/main/preprints/An-Isolated-Particle-Pole-for-the-Two-Dimensional-O3-Spin-Field-October-4-2026/o3-particle-pole.pdf)
- Manuscript: [Exact mass asymptotics for the two-dimensional O(4) lattice model](https://github.com/openai/math/blob/main/preprints/Exact-mass-asymptotics-for-the-two-dimensional-O4-lattice-model-October-5-2026/exact-mass-o4.pdf)
- Manuscript: [Sharp mass bounds for the two-dimensional O(4) model](https://github.com/openai/math/blob/main/preprints/Sharp-mass-bounds-for-the-two-dimensional-O4-model-September-23-2026/paper.pdf)
- Manuscript: [Exponential decay in two-dimensional classical O(n) models](https://github.com/openai/math/blob/main/preprints/Exponential-decay-in-two-dimensional-classical-On-models-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/215.md
- Comparator statement (Exponential correlation decay for classical $O(n)$ models): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/ClassicalON.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
