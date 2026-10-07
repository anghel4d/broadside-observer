---
title: "Stable blowup for the defocusing Schrödinger equation"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 371; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Stable-Self-Similar-Blowup-for-a-Supercritical-Defocusing-Schrodinger-Equation-on-the-Torus-September-24-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "partial-differential-equations"
  - "lean4"
  - "formalized"
seed_rank: 2226
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Stable self-similar blowup for a supercritical defocusing Schrödinger equation on the torus"
    url: "https://github.com/openai/math/blob/main/preprints/Stable-Self-Similar-Blowup-for-a-Supercritical-Defocusing-Schrodinger-Equation-on-the-Torus-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Stable blowup for the defocusing Schrödinger equation

## One-sentence takeaway

OpenAI's result family 371 (Partial differential equations) claims: For a sufficiently large odd nonlinearity power, constructs a nonempty open set of initial data in $H^k(\mathbb T^{12})$, with k > 8, whose solutions of the scalar defocusing nonlinear Schrödinger equation blow up in finite time.

## Why it matters here

PDE results are the theory behind fluid, wave and transport simulation the engines approximate numerically. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Thus finite-time blowup is stable under Sobolev perturbations in this supercritical regime.
- *Stable self-similar blowup for a supercritical defocusing Schrödinger equation on the torus*: We prove stable self-similar finite-time blowup for a supercritical defocusing nonlinear Schrödinger equation on the twelve-dimensional torus. For a sufficiently large odd power, the blowup initial data contain a nonempty open set in a high Sobolev space. As a consequence, Gaussian Fourier initial data of arbitrarily high Sobolev regularity can have positive probability of finite-time blowup.
- Lean scope (lean/docs/371.md): The formalization constructs stable self-similar finite-time blowup for defocusing nonlinear Schrödinger equations on the twelve-dimensional torus. For every prescribed lower bound on the power, it selects an odd power at least that large and a Sobolev index $k>8$ for which a nonempty open set of $H^k$ initial data has the stated classical blowup behavior.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Stable self-similar blowup for a supercritical defocusing Schrödinger equation on the torus](https://github.com/openai/math/blob/main/preprints/Stable-Self-Similar-Blowup-for-a-Supercritical-Defocusing-Schrodinger-Equation-on-the-Torus-September-24-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/371.md
- Comparator statement (Stable self-similar blowup and positive-probability Gaussian blowup): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/DefocusingNLS.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
