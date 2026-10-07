---
title: "Uniform Laughlin gap and stability under bounded scalar disorder"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 269; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Uniform-Stability-of-the-Spherical-Laughlin-Gap-October-5-2026/uniform-stability-spherical-laughlin-gap.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "mathematical-physics"
  - "lean4"
  - "formalized"
seed_rank: 2124
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Uniform Stability of the Spherical Laughlin Gap"
    url: "https://github.com/openai/math/blob/main/preprints/Uniform-Stability-of-the-Spherical-Laughlin-Gap-October-5-2026/uniform-stability-spherical-laughlin-gap.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "A Fock-space inequality and the Laughlin spectral gap"
    url: "https://github.com/openai/math/blob/main/preprints/A-Fock-space-inequality-and-the-Laughlin-spectral-gap-September-24-2026/A-Fock-space-inequality-and-the-Laughlin-spectral-gap-September-24-2026.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Uniform Laughlin gap and stability under bounded scalar disorder

## One-sentence takeaway

OpenAI's result family 269 (Mathematical physics) claims: Proves the fermionic Laughlin spectral-gap conjecture for the full V1 interaction at filling 1/3 on the round sphere.

## Why it matters here

Mathematical physics results sit behind the physical models that rendering and simulation borrow. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): The unique ground state remains uniformly gapped under sufficiently weak bounded real scalar one-body potentials projected to the lowest Landau level. Both the gap and disorder threshold are uniform over all sufficiently large particle numbers and all normalized potential profiles.
- *Uniform Stability of the Spherical Laughlin Gap*: We prove that the fermionic Laughlin V1 Hamiltonian at filling 1/3 on expanding round spheres retains a unique ground state and a uniform spectral gap under sufficiently weak bounded real scalar one-body potentials projected to the lowest Landau level. With coefficient one for each pair projector and Laughlin flux $q=3(N-1)$, the gap and perturbation threshold are uniform for all sufficiently large particle numbers and all potential profiles of supremum norm at most one. The result uses the uniform unperturbed Fock-space gap and gives existential constants.
- *A Fock-space inequality and the Laughlin spectral gap*: We prove the spherical fermionic Laughlin spectral-gap conjecture for the full V1 interaction. With coefficient one for each pair projector, the gap above the Laughlin state at filling 1/3 on the round sphere is at least 1/25 for all sufficiently large systems. More generally, $H_Q^2\ge\gamma H_Q$ for some fixed $\gamma\gt 1/25$ on the entire lowest-Landau-level Fock space for all sufficiently large flux Q, independently of particle number.
- Lean scope (lean/docs/269.md): The linked formalization proves the uniform unperturbed gap estimate used in the paper's stability argument for the fermionic Laughlin state at filling $1/3$ on the sphere. At flux $q=3(N-1)$ and all sufficiently large particle numbers $N$, every antisymmetric state has $V_1$ energy at least $1/25$ times its squared distance from the Laughlin ground-state line.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 4 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: This selected statement is the unperturbed Fock-space inequality. Stability under projected one-body potentials and uniqueness of the perturbed ground state are outside it.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Uniform Stability of the Spherical Laughlin Gap](https://github.com/openai/math/blob/main/preprints/Uniform-Stability-of-the-Spherical-Laughlin-Gap-October-5-2026/uniform-stability-spherical-laughlin-gap.pdf)
- Manuscript: [A Fock-space inequality and the Laughlin spectral gap](https://github.com/openai/math/blob/main/preprints/A-Fock-space-inequality-and-the-Laughlin-spectral-gap-September-24-2026/A-Fock-space-inequality-and-the-Laughlin-spectral-gap-September-24-2026.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/269.md
- Comparator statement (Uniform unperturbed spherical Laughlin gap inequality): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/LaughlinGap.lean
- Comparator statement (Uniform Laughlin $V_1$ spectral gap): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/Laughlin.lean
- Comparator statement (Uniform Fock-space spectral-gap inequality): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/LaughlinFock.lean
- Comparator statement (Planar spectral-gap inequality): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/LaughlinPlanar.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
