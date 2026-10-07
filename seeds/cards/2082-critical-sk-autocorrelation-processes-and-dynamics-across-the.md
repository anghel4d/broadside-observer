---
title: "Critical SK autocorrelation processes and dynamics across the temperature transition"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 227; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Universality-of-critical-quench-autocorrelations-in-the-Sherrington-Kirkpatrick-model-October-5-2026/main.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "probability-and-statistical-mechanics"
  - "lean4"
  - "formalized"
seed_rank: 2082
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Universality of critical quench autocorrelations in the Sherrington–Kirkpatrick model"
    url: "https://github.com/openai/math/blob/main/preprints/Universality-of-critical-quench-autocorrelations-in-the-Sherrington-Kirkpatrick-model-October-5-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Functional universality of critical SK autocorrelations"
    url: "https://github.com/openai/math/blob/main/preprints/Functional-universality-of-critical-SK-autocorrelations-October-5-2026/critical-sk-autocorrelations.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "A spectral gap throughout the high-temperature Sherrington–Kirkpatrick phase"
    url: "https://github.com/openai/math/blob/main/preprints/A-spectral-gap-throughout-the-high-temperature-Sherrington-Kirkpatrick-phase-September-24-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Cutoff throughout the high-temperature Sherrington–Kirkpatrick phase"
    url: "https://github.com/openai/math/blob/main/preprints/Cutoff-throughout-the-high-temperature-Sherrington-Kirkpatrick-phase-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Critical slowing down in the Sherrington–Kirkpatrick model"
    url: "https://github.com/openai/math/blob/main/preprints/Critical-slowing-down-in-the-Sherrington-Kirkpatrick-model-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Stretched-exponential barriers for typical SK initial states"
    url: "https://github.com/openai/math/blob/main/preprints/Stretched-exponential-barriers-for-typical-SK-initial-states-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "A typical-start upper bound for low-temperature SK Glauber dynamics"
    url: "https://github.com/openai/math/blob/main/preprints/A-typical-start-upper-bound-for-low-temperature-SK-Glauber-dynamics-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Critical mixing in the Sherrington–Kirkpatrick model"
    url: "https://github.com/openai/math/blob/main/preprints/Critical-mixing-in-the-Sherrington-Kirkpatrick-model-September-25-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Critical SK autocorrelation processes and dynamics across the temperature transition

## One-sentence takeaway

OpenAI's result family 227 (Probability and statistical mechanics) claims: For zero-field Gaussian SK heat-bath dynamics with rate-one updates per spin, proves worst-start cutoff on the $\log n$ scale for fixed $0\le\beta\lt 1$, mixing time $n^{2/3+o(1)}$ at β = 1, and stretched-exponential mixing from a Gibbs-sampled fixed starting configuration for β > 1, in probability over disorder.

## Why it matters here

Random processes, percolation and spin-system results feed intuition for stochastic simulation, sampling and Monte Carlo in Anoptic. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): At criticality, rescaled stationary and quench autocorrelation processes have universal random limits for Gaussian and Rademacher disorder; the quench limit relaxes to the stationary limit.
- *Universality of critical quench autocorrelations in the Sherrington–Kirkpatrick model*: We prove joint functional convergence of the stationary and quench autocorrelations of zero-field Sherrington–Kirkpatrick heat-bath dynamics at inverse temperature β = 1, with the same random limit for Gaussian and Rademacher couplings. Each site has a rate-one clock, mean spin autocorrelations are multiplied by n1/3, and waiting times and lags are measured in units n2/3. The quench starts from independent fair spins, and convergence is uniform on compact sets of positive waiting times and lags.
- *Functional universality of critical SK autocorrelations*: We prove that the stationary spin autocorrelation of the zero-field Sherrington–Kirkpatrick model at inverse temperature β = 1 has a common functional scaling limit for Gaussian and Rademacher couplings. With rate-one heat-bath clocks at every site, time is scaled by n2/3 and the mean spin autocorrelation is multiplied by n1/3. The functions converge in law uniformly on compact positive-time intervals.
- *A spectral gap throughout the high-temperature Sherrington–Kirkpatrick phase*: For every fixed inverse temperature $0\lt \beta\lt 1$, we prove that the unscaled spectral gap of single-site heat-bath dynamics for the zero-field Gaussian Sherrington–Kirkpatrick model is bounded away from zero with probability tending to one over the disorder. Equivalently, the Gibbs law satisfies a dimension-free Poincaré inequality for all functions.
- *Cutoff throughout the high-temperature Sherrington–Kirkpatrick phase*: We prove worst-case total-variation cutoff for the zero-field Gaussian Sherrington–Kirkpatrick heat-bath dynamics at every fixed inverse temperature $0\leq\beta\lt 1$. With rate-one refresh at each spin, the cutoff location is $\log n/(2\lambda(\beta))$ for a positive deterministic rate $\lambda(\beta)$. The location for uniformly chosen single-site update attempts is n times as large.
- *Critical slowing down in the Sherrington–Kirkpatrick model*: At the critical inverse temperature β = 1, we prove slow mixing for zero-field Gaussian Sherrington–Kirkpatrick heat-bath dynamics from typical equilibrium configurations held fixed as initial states. For every deterministic sequence $t_n=o(n^{2/3})$ in rate-one-per-site time, the Gibbs mass of initial states whose time-tn total-variation distance from equilibrium exceeds 1/4 tends to one in probability over the disorder. The same statement holds for every deterministic integer sequence $k_n=o(n^{5/3})$ of uniform-site update attempts.
- Plus 3 more companion manuscripts in this family; see Links.
- Lean scope (lean/docs/227.md): For every fixed inverse temperature $0<\beta<1$, the formalization proves a dimension-independent Poincaré inequality for the zero-field Gaussian Sherrington–Kirkpatrick model with probability tending to one over the disorder. Equivalently, the unscaled single-site heat-bath spectral gap stays bounded away from zero.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 5 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: The paper's full range $\beta<1$, explicit cutoff location, and continuous-time conclusion are outside this selected statement.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Universality of critical quench autocorrelations in the Sherrington–Kirkpatrick model](https://github.com/openai/math/blob/main/preprints/Universality-of-critical-quench-autocorrelations-in-the-Sherrington-Kirkpatrick-model-October-5-2026/main.pdf)
- Manuscript: [Functional universality of critical SK autocorrelations](https://github.com/openai/math/blob/main/preprints/Functional-universality-of-critical-SK-autocorrelations-October-5-2026/critical-sk-autocorrelations.pdf)
- Manuscript: [A spectral gap throughout the high-temperature Sherrington–Kirkpatrick phase](https://github.com/openai/math/blob/main/preprints/A-spectral-gap-throughout-the-high-temperature-Sherrington-Kirkpatrick-phase-September-24-2026/main.pdf)
- Manuscript: [Cutoff throughout the high-temperature Sherrington–Kirkpatrick phase](https://github.com/openai/math/blob/main/preprints/Cutoff-throughout-the-high-temperature-Sherrington-Kirkpatrick-phase-September-24-2026/paper.pdf)
- Manuscript: [Critical slowing down in the Sherrington–Kirkpatrick model](https://github.com/openai/math/blob/main/preprints/Critical-slowing-down-in-the-Sherrington-Kirkpatrick-model-September-24-2026/paper.pdf)
- Manuscript: [Stretched-exponential barriers for typical SK initial states](https://github.com/openai/math/blob/main/preprints/Stretched-exponential-barriers-for-typical-SK-initial-states-September-24-2026/paper.pdf)
- Manuscript: [A typical-start upper bound for low-temperature SK Glauber dynamics](https://github.com/openai/math/blob/main/preprints/A-typical-start-upper-bound-for-low-temperature-SK-Glauber-dynamics-September-24-2026/paper.pdf)
- Manuscript: [Critical mixing in the Sherrington–Kirkpatrick model](https://github.com/openai/math/blob/main/preprints/Critical-mixing-in-the-Sherrington-Kirkpatrick-model-September-25-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/227.md
- Comparator statement (Spectral-gap bound throughout the high-temperature SK phase): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/SKHighTemperature.lean
- Comparator statement (Discrete mixing-time ratio cutoff for $\beta<1/2$): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/SKRatio.lean
- Comparator statement (Critical SK mixing bounds): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/CriticalSKMixing.lean
- Comparator statement (Equilibrium starts, covariance, and mixing lower bounds): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/CriticalSK.lean
- Comparator statement (Stretched-exponential barriers from typical equilibrium initial states): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/SKBarriers.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
