---
title: "Conformal universality for weakly interacting and random-bond Ising models"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 218; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Quenched-SLE3-limits-for-general-weak-random-bond-Ising-models-October-5-2026/general-weak-random-bond-ising.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "probability-and-statistical-mechanics"
  - "lean4"
  - "formalized"
seed_rank: 2073
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Quenched SLE₃ limits for general weak random-bond Ising models"
    url: "https://github.com/openai/math/blob/main/preprints/Quenched-SLE3-limits-for-general-weak-random-bond-Ising-models-October-5-2026/general-weak-random-bond-ising.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Quenched SLE₃ Universality for the Weak Random-Bond Ising Model"
    url: "https://github.com/openai/math/blob/main/preprints/Quenched-SLE3-Universality-for-the-Weak-Random-Bond-Ising-Model-October-5-2026/quenched-sle3-weak-random-bond-ising.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Logarithmic Relative Fluctuations in the Weakly Disordered Planar Ising Model"
    url: "https://github.com/openai/math/blob/main/preprints/Logarithmic-Relative-Fluctuations-in-the-Weakly-Disordered-Planar-Ising-Model-October-5-2026/critical-relative-second-moment-weak-random-bond-ising.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Conformal universality of bulk Ising correlations under weak interactions"
    url: "https://github.com/openai/math/blob/main/preprints/Conformal-universality-of-bulk-Ising-correlations-under-weak-interactions-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "SLE3 universality for weak finite-range Ising interactions"
    url: "https://github.com/openai/math/blob/main/preprints/SLE3-universality-for-weak-finite-range-Ising-interactions-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Buffered comparison and stopping-band resolution in critical Ising"
    url: "https://github.com/openai/math/blob/main/preprints/Buffered-comparison-and-stopping-band-resolution-in-critical-Ising-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Conformal universality for weakly interacting and random-bond Ising models

## One-sentence takeaway

OpenAI's result family 218 (Probability and statistical mechanics) claims: Weak finite-range square-symmetric even multispin perturbations of the square-lattice Ising model preserve critical bulk spin and energy limits; weak square-symmetric contour interactions also yield chordal SLE3 interface limits.

## Why it matters here

Random processes, percolation and spin-system results feed intuition for stochastic simulation, sampling and Monte Carlo in Anoptic. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): With sufficiently weak iid bond disorder of any fixed bounded nondegenerate mean-zero law, critical spin interfaces converge to the same law in probability over environments.
- *Quenched SLE₃ limits for general weak random-bond Ising models*: For the planar Ising model with bonds $J_e=1+\varepsilon\xi_e$, where the ξe have any fixed bounded, nondegenerate, mean-zero iid law, we prove quenched chordal SLE3 convergence for sufficiently small ε > 0. The temperature is the spontaneous-magnetization threshold. Convergence holds in probability over environments for the full oriented curve law in deterministic Jordan-domain approximations.
- *Quenched SLE₃ Universality for the Weak Random-Bond Ising Model*: We prove quenched chordal SLE3 convergence for the planar Ising model with sufficiently weak independent symmetric two-valued ferromagnetic bonds. The temperature is the critical point defined by spontaneous magnetization. Convergence holds in probability over environments for the full oriented curve law in deterministic Jordan-domain approximations.
- *Logarithmic Relative Fluctuations in the Weakly Disordered Planar Ising Model*: Assuming the stated deterministic critical-reference estimates, we prove that the relative second moment of the quenched critical spin correlation in the square-lattice Ising model with independent fair bonds $1\pm\varepsilon$ grows as $(\log r)^{1/4+o(1)}$ for each sufficiently small fixed ε > 0. The correlation is evaluated at the physical critical temperature, with the thermodynamic limit taken before the disorder moments and the large-distance limit.
- *Conformal universality of bulk Ising correlations under weak interactions*: We prove conformal universality of mixed bulk spin and energy correlations for the square-lattice Ising model with sufficiently small, square-symmetric, finite-range even multispin perturbations of either sign. One critical-temperature branch and two field normalizations apply in every bounded simply connected C2 Jordan domain with free, plus, or minus boundary conditions, and in the periodic thermodynamic plane state. Energies are centered in their actual states.
- *SLE3 universality for weak finite-range Ising interactions*: We prove that every sufficiently small, square-symmetric finite-range perturbation of the planar Ising contour energy has a domain-independent inverse temperature at which its spin interface converges to chordal SLE3. The result allows interactions of either sign, arbitrary admissible exterior contours, and uniformly approximated Jordan domains. Convergence holds for the full oriented curve law in uniform distance modulo increasing reparametrization.
- Plus 1 more companion manuscripts in this family; see Links.
- Lean scope (lean/docs/218.md): The formalized result compares conditional Ising probabilities on finite graphs when two boundary mixtures differ but a common set of spins is pinned. If $q_0$ is the associated zero-field Fortuin–Kasteleyn connection probability after deleting the pinned vertices, the likelihood ratio lies between $\exp(-4\mathrm{artanh}\,q_0)$ and $\exp(4\mathrm{artanh}\,q_0)$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: The paper's finite stopping-band approximation theorem is outside this selected statement.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Quenched SLE₃ limits for general weak random-bond Ising models](https://github.com/openai/math/blob/main/preprints/Quenched-SLE3-limits-for-general-weak-random-bond-Ising-models-October-5-2026/general-weak-random-bond-ising.pdf)
- Manuscript: [Quenched SLE₃ Universality for the Weak Random-Bond Ising Model](https://github.com/openai/math/blob/main/preprints/Quenched-SLE3-Universality-for-the-Weak-Random-Bond-Ising-Model-October-5-2026/quenched-sle3-weak-random-bond-ising.pdf)
- Manuscript: [Logarithmic Relative Fluctuations in the Weakly Disordered Planar Ising Model](https://github.com/openai/math/blob/main/preprints/Logarithmic-Relative-Fluctuations-in-the-Weakly-Disordered-Planar-Ising-Model-October-5-2026/critical-relative-second-moment-weak-random-bond-ising.pdf)
- Manuscript: [Conformal universality of bulk Ising correlations under weak interactions](https://github.com/openai/math/blob/main/preprints/Conformal-universality-of-bulk-Ising-correlations-under-weak-interactions-September-23-2026/paper.pdf)
- Manuscript: [SLE3 universality for weak finite-range Ising interactions](https://github.com/openai/math/blob/main/preprints/SLE3-universality-for-weak-finite-range-Ising-interactions-September-23-2026/paper.pdf)
- Manuscript: [Buffered comparison and stopping-band resolution in critical Ising](https://github.com/openai/math/blob/main/preprints/Buffered-comparison-and-stopping-band-resolution-in-critical-Ising-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/218.md
- Comparator statement (Finite-graph buffered Ising likelihood comparison): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/BufferedIsing.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
