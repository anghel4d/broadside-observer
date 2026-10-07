---
title: "The Mézard–Parisi formula for diluted spin glasses"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 221; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/The-Mezard-Parisi-formula-for-diluted-spin-glasses-September-23-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "probability-and-statistical-mechanics"
  - "lean4"
  - "formalized"
seed_rank: 2076
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "The Mézard–Parisi formula for diluted spin glasses"
    url: "https://github.com/openai/math/blob/main/preprints/The-Mezard-Parisi-formula-for-diluted-spin-glasses-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# The Mézard–Parisi formula for diluted spin glasses

## One-sentence takeaway

OpenAI's result family 221 (Probability and statistical mechanics) claims: Proves the Mézard–Parisi hierarchical cavity formula for Poisson-diluted even-arity Ising models satisfying the Panchenko–Talagrand factorization and positivity assumptions, with only first-moment integrability.

## Why it matters here

Random processes, percolation and spin-system results feed intuition for stochastic simulation, sampling and Monte Carlo in Anoptic. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): The limiting free energy equals the infimum over finite-depth hierarchical trial laws. This includes the Viana–Bray model, symmetric diluted even-spin models, and weighted soft even-K satisfiability.
- *The Mézard–Parisi formula for diluted spin glasses*: We prove the Mézard–Parisi hierarchical cavity formula for diluted even-arity Ising models in the Panchenko–Talagrand class. This resolves the variational equality conjecture for that class: the limiting pressure equals the infimum of the trial functional over all finite hierarchy depths and trial laws. Only first moments of the interaction and external field are required.
- Lean scope (lean/docs/221.md): The formalization proves the Mézard–Parisi hierarchical cavity formula for diluted even-arity Ising models in the Panchenko–Talagrand class. Under the class's factorization, independence, integrability, and positivity assumptions, the finite-system pressure converges to the infimum of the trial functional over all finite hierarchy depths and trial laws.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: Under the class's factorization, independence, integrability, and positivity assumptions, the finite-system pressure converges to the infimum of the trial functional over all finite hierarchy depths and trial laws.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [The Mézard–Parisi formula for diluted spin glasses](https://github.com/openai/math/blob/main/preprints/The-Mezard-Parisi-formula-for-diluted-spin-glasses-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/221.md
- Comparator statement (Mézard–Parisi variational equality for diluted even-arity spin glasses): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/DilutedSpin.lean
- Reasoning summary: https://github.com/openai/math/blob/main/reasoning_traces/mezard-parisi-formula.pdf
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
