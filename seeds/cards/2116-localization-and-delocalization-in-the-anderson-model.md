---
title: "Localization and delocalization in the Anderson model"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 261; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Absolutely-Continuous-Spectrum-for-Weak-Disorder-Anderson-Models-in-Dimensions-at-Least-Three-September-23-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "mathematical-physics"
  - "lean4"
  - "formalized"
seed_rank: 2116
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Absolutely Continuous Spectrum for Weak-Disorder Anderson Models in Dimensions at Least Three"
    url: "https://github.com/openai/math/blob/main/preprints/Absolutely-Continuous-Spectrum-for-Weak-Disorder-Anderson-Models-in-Dimensions-at-Least-Three-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Pure-Point Spectrum for the Two-Dimensional Anderson Model at Every Positive Disorder"
    url: "https://github.com/openai/math/blob/main/preprints/Pure-Point-Spectrum-for-the-Two-Dimensional-Anderson-Model-at-Every-Positive-Disorder-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Localization and delocalization in the Anderson model

## One-sentence takeaway

OpenAI's result family 261 (Mathematical physics) claims: Resolves the predicted spectral contrast for the lattice Anderson model with independent uniform site potentials.

## Why it matters here

Mathematical physics results sit behind the physical models that rendering and simulation borrow. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): In dimension two, every positive disorder strength gives almost surely pure-point spectrum. In every fixed dimension d ≥ 3, sufficiently weak positive disorder gives purely absolutely continuous spectrum on a fixed open interval with nonzero spectral weight.
- *Absolutely Continuous Spectrum for Weak-Disorder Anderson Models in Dimensions at Least Three*: For each fixed dimension d ≥ 3 and each fixed sufficiently small positive disorder strength, we prove that the Anderson operator on ℤd with independent uniform site potentials almost surely has purely absolutely continuous spectrum with nonzero weight on an open energy interval. The interval may depend on d but is independent of the disorder strength. This settles the purely absolutely continuous energy-range question in Simon's Problem 1 for this model.
- *Pure-Point Spectrum for the Two-Dimensional Anderson Model at Every Positive Disorder*: For each fixed positive disorder strength, we prove that the nearest-neighbor Anderson operator on the square lattice with independent uniform site potentials almost surely has pure-point spectral type throughout its spectrum. This resolves the pure-point assertion of the two-dimensional Anderson localization conjecture for the uniform single-site law.
- Lean scope (lean/docs/261.md): The linked formalization proves a supporting spectral statement for the nearest-neighbor Anderson operator on $\mathbb Z^2$. For every disorder strength $h>0$ with independent site potentials uniform on $[-h,h]$, it constructs the bounded self-adjoint operator almost surely and identifies its spectrum as the real interval $[-4-h,4+h]$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: This selected statement identifies the spectral set.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Absolutely Continuous Spectrum for Weak-Disorder Anderson Models in Dimensions at Least Three](https://github.com/openai/math/blob/main/preprints/Absolutely-Continuous-Spectrum-for-Weak-Disorder-Anderson-Models-in-Dimensions-at-Least-Three-September-23-2026/paper.pdf)
- Manuscript: [Pure-Point Spectrum for the Two-Dimensional Anderson Model at Every Positive Disorder](https://github.com/openai/math/blob/main/preprints/Pure-Point-Spectrum-for-the-Two-Dimensional-Anderson-Model-at-Every-Positive-Disorder-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/261.md
- Comparator statement (Almost-sure spectrum of the planar Anderson operator): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/PlanarAndersonSpectrum.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
