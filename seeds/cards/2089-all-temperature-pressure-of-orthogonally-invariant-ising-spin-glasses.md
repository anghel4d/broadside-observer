---
title: "All-temperature pressure of orthogonally invariant Ising spin glasses"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 234; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/All-temperature-pressure-for-orthogonally-invariant-Ising-spin-glasses-September-25-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "probability-and-statistical-mechanics"
  - "lean4"
  - "formalized"
seed_rank: 2089
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "All-temperature pressure for orthogonally invariant Ising spin glasses"
    url: "https://github.com/openai/math/blob/main/preprints/All-temperature-pressure-for-orthogonally-invariant-Ising-spin-glasses-September-25-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# All-temperature pressure of orthogonally invariant Ising spin glasses

## One-sentence takeaway

OpenAI's result family 234 (Probability and statistical mechanics) claims: Gives an exact variational formula for the limiting pressure of orthogonally invariant Ising spin glasses at every fixed temperature, both almost surely and in expectation.

## Why it matters here

Random processes, percolation and spin-system results feed intuition for stochastic simulation, sampling and Monte Carlo in Anoptic. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): The coupling matrix is a Haar-random rotation of a deterministic spectrum converging to a compactly supported law, with extreme eigenvalues converging to its support edges. The zero-field ground-state energy follows as temperature tends to zero.
- *All-temperature pressure for orthogonally invariant Ising spin glasses*: We determine the limiting pressure of an Ising spin glass with Haar orthogonal eigenvectors, a compact limiting spectral law, and no asymptotic outliers, at every fixed temperature. The pressure converges in expectation and almost surely to a variational formula. We also give the limiting pressure with deterministic external fields whose empirical laws converge in first-moment transport distance, and derive a formula for the zero-field ground-state energy by taking temperature to zero.
- Lean scope (lean/docs/234.md): The formalization gives variational limits for orthogonally invariant Ising spin glasses whose eigenvectors have Haar law and whose empirical eigenvalue distributions converge to a compactly supported law with the stated control of extreme eigenvalues. The pressure converges both in expectation and almost surely to an explicit functional of the limiting spectral law.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: A version with external fields assumes convergence of their empirical laws in Wasserstein distance and gives the corresponding magnetic-field functional.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [All-temperature pressure for orthogonally invariant Ising spin glasses](https://github.com/openai/math/blob/main/preprints/All-temperature-pressure-for-orthogonally-invariant-Ising-spin-glasses-September-25-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/234.md
- Comparator statement (Pressure and ground-state limits for invariant Ising models): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/InvariantIsing.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
