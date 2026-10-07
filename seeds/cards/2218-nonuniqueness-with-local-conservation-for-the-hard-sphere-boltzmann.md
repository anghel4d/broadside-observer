---
title: "Nonuniqueness with local conservation for the hard-sphere Boltzmann equation"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 363; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Nonuniqueness-with-local-conservation-for-the-hard-sphere-Boltzmann-equation-October-5-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "partial-differential-equations"
  - "lean4"
  - "formalized"
seed_rank: 2218
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Nonuniqueness with local conservation for the hard-sphere Boltzmann equation"
    url: "https://github.com/openai/math/blob/main/preprints/Nonuniqueness-with-local-conservation-for-the-hard-sphere-Boltzmann-equation-October-5-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Nonuniqueness for the periodic hard-sphere Boltzmann equation"
    url: "https://github.com/openai/math/blob/main/preprints/Nonuniqueness-for-the-periodic-hard-sphere-Boltzmann-equation-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Nonuniqueness with local conservation for the hard-sphere Boltzmann equation

## One-sentence takeaway

OpenAI's result family 363 (Partial differential equations) claims: Constructs two distinct global entropy solutions of the three-dimensional periodic hard-sphere Boltzmann equation from the same nonnegative initial density, with bounded velocity support and finite mass, energy and absolute entropy.

## Why it matters here

PDE results are the theory behind fluid, wave and transport simulation the engines approximate numerically. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Both are strongly continuous in L1 and satisfy exact local conservation of mass, momentum and kinetic energy.
- *Nonuniqueness with local conservation for the hard-sphere Boltzmann equation*: We prove nonuniqueness for the three-dimensional periodic hard-sphere Boltzmann equation among global entropy solutions satisfying exact local conservation of mass, momentum, and kinetic energy. We construct one nonnegative initial density with bounded velocity support and finite mass, energy, and absolute entropy that gives rise to two distinct such solutions. Both are strongly continuous in L1, and their collision gain and loss terms are integrable with every polynomial velocity weight on every bounded time interval.
- *Nonuniqueness for the periodic hard-sphere Boltzmann equation*: We prove nonuniqueness for the periodic hard-sphere Boltzmann equation by constructing two distinct global renormalized solutions with the same nonnegative initial density on $\mathbb T^3\times\mathbb R^3$. This density has bounded velocity support and finite mass, energy, and absolute entropy. Both solutions conserve local mass and total momentum and satisfy the global energy and entropy-dissipation inequalities.
- Lean scope (lean/docs/363.md): The formalization proves nonuniqueness for the periodic hard-sphere Boltzmann equation by constructing two distinct global renormalized solutions on $\mathbb T^3\times\mathbb R^3$ with the same nonnegative initial density. The data have bounded velocity support and finite mass, energy, and absolute entropy.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: These are the conditions of the selected periodic result; later local-conservation refinements are outside it.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Nonuniqueness with local conservation for the hard-sphere Boltzmann equation](https://github.com/openai/math/blob/main/preprints/Nonuniqueness-with-local-conservation-for-the-hard-sphere-Boltzmann-equation-October-5-2026/paper.pdf)
- Manuscript: [Nonuniqueness for the periodic hard-sphere Boltzmann equation](https://github.com/openai/math/blob/main/preprints/Nonuniqueness-for-the-periodic-hard-sphere-Boltzmann-equation-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/363.md
- Comparator statement (Two periodic hard-sphere Boltzmann solutions with the same data): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/BoltzmannNonuniqueness.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
