---
title: "QAOA attains the SK optimum in the thermodynamic-first limit"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 281; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/QAOA-attains-the-SK-ground-state-energy-in-the-thermodynamic-first-limit-September-25-2026/QAOA-attains-the-SK-ground-state-energy-in-the-thermodynamic-first-limit-September-25-2026.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "mathematical-physics"
  - "lean4"
  - "formalized"
seed_rank: 2136
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "QAOA attains the SK ground-state energy in the thermodynamic-first limit"
    url: "https://github.com/openai/math/blob/main/preprints/QAOA-attains-the-SK-ground-state-energy-in-the-thermodynamic-first-limit-September-25-2026/QAOA-attains-the-SK-ground-state-energy-in-the-thermodynamic-first-limit-September-25-2026.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Full support of the zero-temperature Sherrington-Kirkpatrick order parameter"
    url: "https://github.com/openai/math/blob/main/preprints/Full-support-of-the-zero-temperature-Sherrington-Kirkpatrick-order-parameter-September-27-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# QAOA attains the SK optimum in the thermodynamic-first limit

## One-sentence takeaway

OpenAI's result family 281 (Mathematical physics) claims: Proves that QAOA approaches the ground-state energy of the Gaussian zero-field Sherrington–Kirkpatrick model when system size tends to infinity before circuit depth.

## Why it matters here

Mathematical physics results sit behind the physical models that rendering and simulation borrow. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): For every accuracy, finite depth and deterministic angles independent of size and disorder achieve the required limiting expected energy per spin. This also yields leading-order optimal expected MaxCut values on large-degree random regular graphs, with size tending to infinity before degree.
- *QAOA attains the SK ground-state energy in the thermodynamic-first limit*: We prove that the Quantum Approximate Optimization Algorithm (QAOA) approaches the ground-state energy per spin of the Gaussian zero-field Sherrington–Kirkpatrick model when system size tends to infinity first and circuit depth then increases. For every accuracy, some finite depth and deterministic angles, independent of system size and disorder, achieve that accuracy in the limiting expected energy per spin using the standard cost Hamiltonian and transverse-field mixer. This proves the eventual Parisi-optimality conjecture of Basso, Farhi, Marwaha, Villalonga, and Zhou in its fixed-parameter thermodynamic formulation.
- *Full support of the zero-temperature Sherrington-Kirkpatrick order parameter*: We prove that every admissible integrable minimizer of the zero-temperature Parisi functional for the pure, zero-field Sherrington–Kirkpatrick model has full relative Stieltjes support on $[0,1)$. Thus its support has no gaps at any overlap scale below one. We use the covariance normalization $\xi(t)=t^2/2$.
- Lean scope (lean/docs/281.md): The linked formalization supplies variational identities for the Gaussian zero-field Sherrington–Kirkpatrick ground-state energy used in the paper's QAOA argument. Conditional on an admissible Parisi minimizer and its associated diffusion, it proves convergence of the finite-system ground-state energy, identifies its limit with the Parisi value, and gives equivalent terminal-martingale and integrated-curvature formulas.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 2 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: Conditional on an admissible Parisi minimizer and its associated diffusion, it proves convergence of the finite-system ground-state energy, identifies its limit with the Parisi value, and gives equivalent terminal-martingale and integrated-curvature formulas. The selected statement covers these value and approximation results; it does not itself assert convergence of QAOA circuit energies. It is conditional on the order parameter being a minimizer and does not separately assert existence of a minimizer.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [QAOA attains the SK ground-state energy in the thermodynamic-first limit](https://github.com/openai/math/blob/main/preprints/QAOA-attains-the-SK-ground-state-energy-in-the-thermodynamic-first-limit-September-25-2026/QAOA-attains-the-SK-ground-state-energy-in-the-thermodynamic-first-limit-September-25-2026.pdf)
- Manuscript: [Full support of the zero-temperature Sherrington-Kirkpatrick order parameter](https://github.com/openai/math/blob/main/preprints/Full-support-of-the-zero-temperature-Sherrington-Kirkpatrick-order-parameter-September-27-2026/main.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/281.md
- Comparator statement (Parisi ground-state value identities and finite Gaussian approximation): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/SKValue.lean
- Comparator statement (Full support of zero-temperature SK minimizers): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/SKFullSupport.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
