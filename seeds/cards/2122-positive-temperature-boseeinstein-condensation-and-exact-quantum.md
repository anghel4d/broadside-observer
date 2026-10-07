---
title: "Positive-temperature Bose–Einstein condensation and exact quantum depletion"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 267; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Bose-Einstein-condensation-at-positive-temperature-in-the-dilute-hard-sphere-gas-October-5-2026/positive-temperature-hard-spheres.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "mathematical-physics"
  - "lean4"
  - "formalized"
seed_rank: 2122
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Bose–Einstein condensation at positive temperature in the dilute hard-sphere gas"
    url: "https://github.com/openai/math/blob/main/preprints/Bose-Einstein-condensation-at-positive-temperature-in-the-dilute-hard-sphere-gas-October-5-2026/positive-temperature-hard-spheres.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Quantum Depletion and Momentum Distribution in the Dilute Hard-Sphere Bose Gas"
    url: "https://github.com/openai/math/blob/main/preprints/Quantum-Depletion-and-Momentum-Distribution-in-the-Dilute-Hard-Sphere-Bose-Gas-October-5-2026/Quantum-Depletion-in-the-Dilute-Hard-Sphere-Bose-Gas.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Quantum Depletion for Fixed Bounded Repulsive Potentials"
    url: "https://github.com/openai/math/blob/main/preprints/Quantum-Depletion-for-Fixed-Bounded-Repulsive-Potentials-October-5-2026/fixed-repulsion-quantum-depletion.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "A density-uniform condensate bound for dilute Bose gases"
    url: "https://github.com/openai/math/blob/main/preprints/A-density-uniform-condensate-bound-for-dilute-Bose-gases-September-27-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Ground-state condensation in the dilute hard-sphere gas"
    url: "https://github.com/openai/math/blob/main/preprints/Ground-state-condensation-in-the-dilute-hard-sphere-gas-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Positive-temperature Bose–Einstein condensation and exact quantum depletion

## One-sentence takeaway

OpenAI's result family 267 (Mathematical physics) claims: Proves Bose–Einstein condensation for the exact canonical Gibbs state of the three-dimensional hard-sphere gas: each fixed exclusion distance and sufficiently small fixed density admit a strictly positive temperature, independent of volume, with positive condensate fraction in the thermodynamic limit.

## Why it matters here

Mathematical physics results sit behind the physical models that rendering and simulation borrow. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): At zero temperature, proves the Bogoliubov leading quantum-depletion law for hard spheres and fixed bounded nonnegative radial finite-range potentials of positive scattering length, taking the thermodynamic limit before the dilute limit.
- *Bose–Einstein condensation at positive temperature in the dilute hard-sphere gas*: We prove Bose–Einstein condensation at positive temperature in the three-dimensional dilute hard-sphere gas. For each fixed exclusion distance and every sufficiently small fixed density, there is a strictly positive temperature, independent of the volume, at which the exact canonical Gibbs state has a positive condensate fraction in the thermodynamic limit. The condensate occupies the constant orbital.
- *Quantum Depletion and Momentum Distribution in the Dilute Hard-Sphere Bose Gas*: We prove the full scaled Bogoliubov momentum distribution for the depleted particles in the three-dimensional hard-sphere Bose gas at zero temperature. The thermodynamic limit is taken at each fixed density before the dilute limit, uniformly over all pure and mixed ground states. All thermodynamic accumulation values have the same dilute asymptotic: the limiting nonzero-momentum occupation measure has total mass $8/(3\sqrt\pi)$, giving the depletion fraction $\frac{8}{3\sqrt\pi}\sqrt{\rho a^3}+o(\sqrt{\rho a^3})$ for density ρ and hard-sphere exclusion distance a.
- *Quantum Depletion for Fixed Bounded Repulsive Potentials*: We prove the Bogoliubov quantum-depletion asymptotic for the ground state of a three-dimensional Bose gas with a fixed bounded, nonnegative, radial interaction of finite range and positive scattering length a. The thermodynamic limit is taken at each fixed density ρ before the dilute limit. Every thermodynamic accumulation value of the fraction outside the constant mode is $\frac{8}{3\sqrt\pi}\sqrt{\rho a^3}+o(\sqrt{\rho a^3})$ as $\rho\downarrow0$.
- *A density-uniform condensate bound for dilute Bose gases*: For each fixed bounded measurable, nonnegative, radial interaction of finite range in three dimensions that is not zero almost everywhere, we prove a positive lower bound on the constant-orbital condensate fraction that is uniform over all sufficiently small densities and all temperatures between zero and the square of the density. The interaction and density remain fixed in the thermodynamic limit.
- *Ground-state condensation in the dilute hard-sphere gas*: We prove Bose–Einstein condensation in every ground state of a dilute three-dimensional hard-sphere Bose gas. At every sufficiently small fixed gas parameter, the constant orbital contains a positive fraction of the particles in the thermodynamic limit. The fraction can be chosen independently of the gas parameter, and the conclusion holds for arbitrary complex ground states.
- Lean scope (lean/docs/267.md): The formalization proves ground-state Bose–Einstein condensation in the dilute hard-sphere gas. There are absolute constants $\varepsilon_0,c_0>0$ such that, whenever the density $\rho$ and hard-sphere radius $a$ satisfy $\rho a^3<\varepsilon_0$, the condensate occupation fraction has limit inferior at least $c_0$ along every thermodynamic sequence with $N/L^3\to\rho$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Bose–Einstein condensation at positive temperature in the dilute hard-sphere gas](https://github.com/openai/math/blob/main/preprints/Bose-Einstein-condensation-at-positive-temperature-in-the-dilute-hard-sphere-gas-October-5-2026/positive-temperature-hard-spheres.pdf)
- Manuscript: [Quantum Depletion and Momentum Distribution in the Dilute Hard-Sphere Bose Gas](https://github.com/openai/math/blob/main/preprints/Quantum-Depletion-and-Momentum-Distribution-in-the-Dilute-Hard-Sphere-Bose-Gas-October-5-2026/Quantum-Depletion-in-the-Dilute-Hard-Sphere-Bose-Gas.pdf)
- Manuscript: [Quantum Depletion for Fixed Bounded Repulsive Potentials](https://github.com/openai/math/blob/main/preprints/Quantum-Depletion-for-Fixed-Bounded-Repulsive-Potentials-October-5-2026/fixed-repulsion-quantum-depletion.pdf)
- Manuscript: [A density-uniform condensate bound for dilute Bose gases](https://github.com/openai/math/blob/main/preprints/A-density-uniform-condensate-bound-for-dilute-Bose-gases-September-27-2026/paper.pdf)
- Manuscript: [Ground-state condensation in the dilute hard-sphere gas](https://github.com/openai/math/blob/main/preprints/Ground-state-condensation-in-the-dilute-hard-sphere-gas-September-24-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/267.md
- Comparator statement (Uniform ground-state condensation in the dilute hard-sphere gas): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/HardSphere.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
