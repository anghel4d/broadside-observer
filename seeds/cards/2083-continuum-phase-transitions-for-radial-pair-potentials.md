---
title: "Continuum phase transitions for radial pair potentials"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 228; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/A-continuum-temperature-singularity-for-a-radial-pair-potential-September-24-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "probability-and-statistical-mechanics"
  - "lean4"
  - "formalized"
seed_rank: 2083
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "A continuum temperature singularity for a radial pair potential"
    url: "https://github.com/openai/math/blob/main/preprints/A-continuum-temperature-singularity-for-a-radial-pair-potential-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "A radial continuum phase transition with algebraic decay"
    url: "https://github.com/openai/math/blob/main/preprints/A-radial-continuum-phase-transition-with-algebraic-decay-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Continuum phase transitions for radial pair potentials

## One-sentence takeaway

OpenAI's result family 228 (Probability and statistical mechanics) claims: Constructs stable distance-dependent pair interactions for three-dimensional classical particles with a first-order phase transition: the canonical free energy has a derivative jump at one inverse temperature throughout an open density interval.

## Why it matters here

Random processes, percolation and spin-system results feed intuition for stochastic simulation, sampling and Monte Carlo in Anoptic. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): One potential has a divergent repulsive core; another is bounded and continuous with an integrable power-law tail, realizing the type of transition sought in Simon's continuum problem.
- *A continuum temperature singularity for a radial pair potential*: We construct a stable radial pair potential in three dimensions whose canonical free energy has a strict downward derivative jump at one common finite positive inverse temperature throughout an open interval of positive densities. The potential has a divergent repulsive core, a nontrivial attractive interval, and an integrable tail satisfying $\phi(r)=o(r^{-3})$. Its free-cube canonical free energy is finite at every positive inverse temperature and density.
- *A radial continuum phase transition with algebraic decay*: We construct a bounded, continuous, stable radial pair potential in three dimensions with $|\phi(r)|\le Cr^{-3-1/32}$ for r ≥ 1. Throughout an open interval of positive densities, its canonical thermodynamic free energy is finite at every positive inverse temperature and has a strict downward derivative jump at one common finite positive inverse temperature.
- Lean scope (lean/docs/228.md): The formalization constructs one stable radial pair potential in three-dimensional continuum space with a divergent repulsive core and an integrable tail that is $o(r^{-3})$. Its canonical free energy exists for every positive inverse temperature and density.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 3 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [A continuum temperature singularity for a radial pair potential](https://github.com/openai/math/blob/main/preprints/A-continuum-temperature-singularity-for-a-radial-pair-potential-September-24-2026/paper.pdf)
- Manuscript: [A radial continuum phase transition with algebraic decay](https://github.com/openai/math/blob/main/preprints/A-radial-continuum-phase-transition-with-algebraic-decay-September-24-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/228.md
- Comparator statement (Temperature singularity over a density interval): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/ContinuumTransition.lean
- Comparator statement (Fixed-density radial continuum phase transition): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/RadialTransition.lean
- Comparator statement (A common radial phase transition over a density interval): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/RadialDensityInterval.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
