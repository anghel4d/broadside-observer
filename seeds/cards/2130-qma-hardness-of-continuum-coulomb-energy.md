---
title: "QMA-hardness of continuum Coulomb energy"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 275; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Continuum-Coulomb-hardness-with-binary-nuclear-charges-September-24-2026/Continuum-Coulomb-hardness-with-binary-nuclear-charges-September-24-2026.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "mathematical-physics"
  - "lean4"
  - "formalized"
seed_rank: 2130
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Continuum Coulomb hardness with binary nuclear charges"
    url: "https://github.com/openai/math/blob/main/preprints/Continuum-Coulomb-hardness-with-binary-nuclear-charges-September-24-2026/Continuum-Coulomb-hardness-with-binary-nuclear-charges-September-24-2026.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "QMA-hardness of continuum Coulomb energy with unit nuclear charges"
    url: "https://github.com/openai/math/blob/main/preprints/QMA-hardness-of-continuum-Coulomb-energy-with-unit-nuclear-charges-September-24-2026/QMA-hardness-of-continuum-Coulomb-energy-with-unit-nuclear-charges-September-24-2026.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# QMA-hardness of continuum Coulomb energy

## One-sentence takeaway

OpenAI's result family 275 (Mathematical physics) claims: Proves QMA-hardness of approximating the electronic Coulomb energy infimum in three dimensions, minimizing over the full spinful fermionic continuum space.

## Why it matters here

Mathematical physics results sit behind the physical models that rendering and simulation borrow. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Deterministic polynomial-time reductions work even with only unit-charge nuclei at distinct rational positions, polynomially many electrons and an energy-threshold separation of at least one.
- *Continuum Coulomb hardness with binary nuclear charges*: We prove that approximating the electronic Coulomb spectral infimum in three-dimensional space is QMA-hard when positive integer nuclear charges are encoded in binary. The nuclei have distinct rational positions, the electron number is unary, and the energy is minimized over all antisymmetric continuum states and spin sectors. A deterministic classical polynomial-time reduction produces instances with threshold separation at least one.
- *QMA-hardness of continuum Coulomb energy with unit nuclear charges*: We prove that approximating the electronic ground-energy infimum for clamped unit-charge nuclei is QMA-hard on the full spinful fermionic continuum space. A deterministic classical polynomial-time reduction produces polynomially many nuclei at distinct rational positions and polynomially many electrons, with polynomial rational bit lengths and threshold separation at least one. No orbital basis, magnetic field, or additional external potential is supplied, and no binding assumption is imposed.
- Lean scope (lean/docs/275.md): The formalization proves QMA-hardness of approximating the electronic Coulomb spectral infimum in three-dimensional continuum space when positive integer nuclear charges are encoded in binary. The instances have distinct rational nuclear positions and a unary electron count, and the energy ranges over antisymmetric continuum states and all spin sectors.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 2 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Continuum Coulomb hardness with binary nuclear charges](https://github.com/openai/math/blob/main/preprints/Continuum-Coulomb-hardness-with-binary-nuclear-charges-September-24-2026/Continuum-Coulomb-hardness-with-binary-nuclear-charges-September-24-2026.pdf)
- Manuscript: [QMA-hardness of continuum Coulomb energy with unit nuclear charges](https://github.com/openai/math/blob/main/preprints/QMA-hardness-of-continuum-Coulomb-energy-with-unit-nuclear-charges-September-24-2026/QMA-hardness-of-continuum-Coulomb-energy-with-unit-nuclear-charges-September-24-2026.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/275.md
- Comparator statement (QMA-hardness of continuum Coulomb energy with binary charges): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/ContinuumCoulombHardness.lean
- Comparator statement (QMA-hardness of continuum Coulomb ground-energy approximation): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/ContinuumCoulombHardness.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
