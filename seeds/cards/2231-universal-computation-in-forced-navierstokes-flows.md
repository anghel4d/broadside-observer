---
title: "Universal computation in forced Navier–Stokes flows"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 376; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Finite-Instructions-and-Solenoidal-Shear-Flows-September-27-2026/manuscript.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "partial-differential-equations"
  - "lean4"
  - "formalized"
seed_rank: 2231
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Finite Instructions and Solenoidal Shear Flows"
    url: "https://github.com/openai/math/blob/main/preprints/Finite-Instructions-and-Solenoidal-Shear-Flows-September-27-2026/manuscript.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "A Fixed Particle Test for Computation in a Forced Viscous Flow"
    url: "https://github.com/openai/math/blob/main/preprints/A-Fixed-Particle-Test-for-Computation-in-a-Forced-Viscous-Flow-September-27-2026/manuscript.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Universal Computation with Eventually Stationary Navier–Stokes Forcing"
    url: "https://github.com/openai/math/blob/main/preprints/Universal-Computation-with-Eventually-Stationary-Navier-Stokes-Forcing-September-27-2026/manuscript.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Geometric Programs for Solenoidal Forcing"
    url: "https://github.com/openai/math/blob/main/preprints/Geometric-Programs-for-Solenoidal-Forcing-September-27-2026/manuscript.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Prefix Instructions and Incompressible Flows"
    url: "https://github.com/openai/math/blob/main/preprints/Prefix-Instructions-and-Incompressible-Flows-September-27-2026/manuscript.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Computation under Rapidly Vanishing Navier–Stokes Forcing"
    url: "https://github.com/openai/math/blob/main/preprints/Computation-under-Rapidly-Vanishing-Navier-Stokes-Forcing-September-27-2026/manuscript.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Velocity-Field Detection of Computation in Forced Navier–Stokes Flows"
    url: "https://github.com/openai/math/blob/main/preprints/Velocity-Field-Detection-of-Computation-in-Forced-Navier-Stokes-Flows-September-27-2026/manuscript.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Scalar Potentials and Slow Clocks for Forced Fluid Computation"
    url: "https://github.com/openai/math/blob/main/preprints/Scalar-Potentials-and-Slow-Clocks-for-Forced-Fluid-Computation-September-27-2026/manuscript.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Incompressible Box Transport and Finite Computation"
    url: "https://github.com/openai/math/blob/main/preprints/Incompressible-Box-Transport-and-Finite-Computation-September-27-2026/manuscript.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Universal computation in forced Navier–Stokes flows

## One-sentence takeaway

OpenAI's result family 376 (Partial differential equations) claims: Constructs viscous incompressible flows starting from rest on a fixed flat three-dimensional domain that perform universal computation under smooth external forcing.

## Why it matters here

PDE results are the theory behind fluid, wave and transport simulation the engines approximate numerically. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): A terminating compiler turns a Turing machine and input into a finite program for the force, so a designated particle reaches a fixed region exactly when the machine halts. The viscosity is fixed, positive and computable.
- *Finite Instructions and Solenoidal Shear Flows*: We realize finite reciprocal affine instruction maps by smooth incompressible shear flows on a flat three-torus. Applied to a reversible one-head recorder with a finite transition table, this gives a complete machine-to-fluid construction: a fixed particle enters a fixed open strip exactly when a given machine halts, with zero initial velocity, zero pressure, and a solenoidal mean-zero force that is periodic after initialization. The construction acts on full closed rectangles and controls every intermediate trajectory.
- *A Fixed Particle Test for Computation in a Forced Viscous Flow*: We construct smooth external forces for incompressible Navier–Stokes flow on a fixed flat three-torus at any fixed positive computable viscosity, from zero initial velocity, such that a fixed particle enters a fixed open set exactly when a prescribed Turing machine halts. Every mixed derivative of the force and velocity is bounded and square-integrable in time in spatial supremum norm. The construction uses the machine's ordinary instructions, records their history in a third coordinate, and compensates for finer spatial gates by longer time steps.
- *Universal Computation with Eventually Stationary Navier–Stokes Forcing*: At every fixed positive computable viscosity, we construct smooth mean-zero forces on the flat three-torus that become stationary after time one and make a fixed particle, initially in a fluid at rest, enter a fixed open set exactly when a prescribed Turing machine halts. The force has bounded derivatives of every order and a finite effective description. A reversible recording table is realized on whole planar rectangles by Hamiltonian motions, then driven by a mean-zero spatial clock.
- *Geometric Programs for Solenoidal Forcing*: We construct smooth solenoidal mean-zero forces, periodic from time zero, for which a fixed particle on a flat three-torus reaches a fixed open strip exactly when a given machine halts. The initial fluid velocity and the pressure are zero. We also realize positive diagonal maps on coding sheets by incompressible shears, with explicit normal compensation for changes of planar area, and reciprocal maps on whole boxes of positive thickness.
- *Prefix Instructions and Incompressible Flows*: Finite prefix instructions may change area and erase information. We give explicit history processors and smooth incompressible motions that retain that information and realize every instruction on its full domain. A first application assigns each machine and finite input a smooth mean-zero force on the flat unit three-torus, at any fixed positive computable viscosity.
- Plus 4 more companion manuscripts in this family; see Links.
- Lean scope (lean/docs/376.md): The formalization realizes finite families of prescribed positive diagonal maps on coding sheets by smooth incompressible flows on a flat three-torus. At every positive computable viscosity, it supplies a solution starting from rest with zero pressure and a force that is divergence free, has spatial mean zero, and is one-periodic from time zero.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 6 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: This selected statement covers the sheet programs. The paper's fixed-particle halting detector and its reciprocal maps on solid boxes are outside its scope.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.
- This is the computation-in-forced-flows result. It is **not** a finite-time blowup or Clay-problem claim, and the repo contains no Navier–Stokes or Euler blowup manuscript. The Lean scope note says the fixed-particle halting detector and the reciprocal box maps in one paper fall outside one selected statement.

## Links

- Manuscript: [Finite Instructions and Solenoidal Shear Flows](https://github.com/openai/math/blob/main/preprints/Finite-Instructions-and-Solenoidal-Shear-Flows-September-27-2026/manuscript.pdf)
- Manuscript: [A Fixed Particle Test for Computation in a Forced Viscous Flow](https://github.com/openai/math/blob/main/preprints/A-Fixed-Particle-Test-for-Computation-in-a-Forced-Viscous-Flow-September-27-2026/manuscript.pdf)
- Manuscript: [Universal Computation with Eventually Stationary Navier–Stokes Forcing](https://github.com/openai/math/blob/main/preprints/Universal-Computation-with-Eventually-Stationary-Navier-Stokes-Forcing-September-27-2026/manuscript.pdf)
- Manuscript: [Geometric Programs for Solenoidal Forcing](https://github.com/openai/math/blob/main/preprints/Geometric-Programs-for-Solenoidal-Forcing-September-27-2026/manuscript.pdf)
- Manuscript: [Prefix Instructions and Incompressible Flows](https://github.com/openai/math/blob/main/preprints/Prefix-Instructions-and-Incompressible-Flows-September-27-2026/manuscript.pdf)
- Manuscript: [Computation under Rapidly Vanishing Navier–Stokes Forcing](https://github.com/openai/math/blob/main/preprints/Computation-under-Rapidly-Vanishing-Navier-Stokes-Forcing-September-27-2026/manuscript.pdf)
- Manuscript: [Velocity-Field Detection of Computation in Forced Navier–Stokes Flows](https://github.com/openai/math/blob/main/preprints/Velocity-Field-Detection-of-Computation-in-Forced-Navier-Stokes-Flows-September-27-2026/manuscript.pdf)
- Manuscript: [Scalar Potentials and Slow Clocks for Forced Fluid Computation](https://github.com/openai/math/blob/main/preprints/Scalar-Potentials-and-Slow-Clocks-for-Forced-Fluid-Computation-September-27-2026/manuscript.pdf)
- Manuscript: [Incompressible Box Transport and Finite Computation](https://github.com/openai/math/blob/main/preprints/Incompressible-Box-Transport-and-Finite-Computation-September-27-2026/manuscript.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/376.md
- Comparator statement (Positive diagonal programs on incompressible coding sheets): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/SolenoidalSheetPrograms.lean
- Comparator statement (Rapidly decaying alternating-coordinate memory): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/NavierStokesAlternating.lean
- Comparator statement (Pointwise and integral velocity-field detection of halting): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/NavierStokesVelocity.lean
- Comparator statement (Incompressible transport of solid boxes): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/BalancedBoxRouting.lean
- Comparator statement (Finite computation in a balanced zero-data fluid flow): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/BalancedThreeStack.lean
- Comparator statement (Effective finite computation detected by a fixed particle): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/ForcedNavierStokesComputation.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
