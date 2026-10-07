---
title: "The ionization and generalized ionization conjectures"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 263; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Uniform-excess-charge-for-Coulomb-molecules-and-the-outer-radius-of-neutral-atoms-September-24-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "mathematical-physics"
  - "lean4"
  - "formalized"
seed_rank: 2118
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Uniform excess charge for Coulomb molecules and the outer radius of neutral atoms"
    url: "https://github.com/openai/math/blob/main/preprints/Uniform-excess-charge-for-Coulomb-molecules-and-the-outer-radius-of-neutral-atoms-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Generalized ionization energies for full Coulomb atoms"
    url: "https://github.com/openai/math/blob/main/preprints/Generalized-ionization-energies-for-full-Coulomb-atoms-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Generalized outer-electron radii of neutral Coulomb atoms"
    url: "https://github.com/openai/math/blob/main/preprints/Generalized-outer-electron-radii-of-neutral-Coulomb-atoms-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# The ionization and generalized ionization conjectures

## One-sentence takeaway

OpenAI's result family 263 (Mathematical physics) claims: For the full nonrelativistic Coulomb model with two electron spin states, proves that a molecule with M fixed nuclei of charges at least one and total charge Z strictly binds at most $Z+CM$ electrons.

## Why it matters here

Mathematical physics results sit behind the physical models that rendering and simulation borrow. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Neutral-atom first ionization energies and radii containing all but an expected half-electron have universal positive upper and lower bounds. The energy cost of removing m electrons has Thomas–Fermi asymptotics as $m\to\infty$ and $Z/m\to\infty$; neutral-atom outer radii have the corresponding iterated-limit asymptotics, taking $Z\to\infty$ first.
- *Uniform excess charge for Coulomb molecules and the outer radius of neutral atoms*: We prove that a molecule with M fixed nuclei of real charges at least one and total nuclear charge Z strictly binds at most $Z+CM$ electrons, where C is universal. The result holds for the full nonrelativistic Coulomb Hamiltonian with two spin states and arbitrary distinct nuclear positions. For neutral atoms with integer nuclear charge Z ≥ 1, the first ionization energy and, for every ground state, the radius outside which one half of an electron remains are each bounded above and below by positive universal constants.
- *Generalized ionization energies for full Coulomb atoms*: We prove the energy part of the generalized ionization conjecture for full nonrelativistic Coulomb atoms with two electron spin states. The energy needed to remove m electrons is asymptotic to $a_{\mathrm{TF}}m^{7/3}$ whenever $m\to\infty$ and $Z/m\to\infty$, with the Thomas–Fermi constant in atomic units. We also obtain both conjectured iterated limits.
- *Generalized outer-electron radii of neutral Coulomb atoms*: We prove the radius part of the generalized ionization conjecture for neutral nonrelativistic Coulomb atoms with two spin states. For every choice of ground states, the upper and lower large-nuclear-charge limits of the radius defined by an expected exterior electron mass m are both asymptotic to $(81\pi^2/2)^{1/3}m^{-1/3}$ as m tends to infinity.
- Lean scope (lean/docs/263.md): The formalization gives the large-ionization asymptotics for the full nonrelativistic two-spin Coulomb atom. Let $I_m(Z)$ be the energy needed to remove $m$ electrons from a neutral atom of nuclear charge $Z$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 2 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: The energy uses the full antisymmetric Sobolev form domain; fixed-$m$ convergence and ground-state attainment are outside this statement.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Uniform excess charge for Coulomb molecules and the outer radius of neutral atoms](https://github.com/openai/math/blob/main/preprints/Uniform-excess-charge-for-Coulomb-molecules-and-the-outer-radius-of-neutral-atoms-September-24-2026/paper.pdf)
- Manuscript: [Generalized ionization energies for full Coulomb atoms](https://github.com/openai/math/blob/main/preprints/Generalized-ionization-energies-for-full-Coulomb-atoms-September-24-2026/paper.pdf)
- Manuscript: [Generalized outer-electron radii of neutral Coulomb atoms](https://github.com/openai/math/blob/main/preprints/Generalized-outer-electron-radii-of-neutral-Coulomb-atoms-September-24-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/263.md
- Comparator statement (Generalized Coulomb ionization-energy asymptotics): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/CoulombIonization.lean
- Comparator statement (Asymptotic outer-electron radii of neutral atoms): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/CoulombRadii.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
