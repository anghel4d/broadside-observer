---
title: "The Benjamini–Schramm nonuniqueness conjecture"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 214; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Nonuniqueness-of-percolation-on-nonamenable-quasi-transitive-graphs-September-24-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "probability-and-statistical-mechanics"
  - "lean4"
  - "formalized"
seed_rank: 2069
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Nonuniqueness of percolation on nonamenable quasi-transitive graphs"
    url: "https://github.com/openai/math/blob/main/preprints/Nonuniqueness-of-percolation-on-nonamenable-quasi-transitive-graphs-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# The Benjamini–Schramm nonuniqueness conjecture

## One-sentence takeaway

OpenAI's result family 214 (Probability and statistical mechanics) claims: Proves $p_c\lt p_u$ for Bernoulli bond percolation on every infinite connected locally finite nonamenable quasi-transitive graph, resolving the Benjamini–Schramm nonuniqueness conjecture.

## Why it matters here

Random processes, percolation and spin-system results feed intuition for stochastic simulation, sampling and Monte Carlo in Anoptic. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Thus there is a nonempty range of probabilities with infinitely many infinite clusters. A stronger operator bound also establishes the critical triangle condition.
- *Nonuniqueness of percolation on nonamenable quasi-transitive graphs*: We prove the bond-percolation nonuniqueness conjecture of Benjamini and Schramm: every infinite connected, locally finite, nonamenable quasi-transitive graph has a nonempty interval of parameters for which Bernoulli bond percolation almost surely has infinitely many infinite clusters. We also prove Hutchcroft's stronger operator-threshold conjecture, establishing $p_c\lt p_{2\to2}\le p_u$.
- Lean scope (lean/docs/214.md): The formalization proves the nonuniqueness phase conjecture for Bernoulli bond percolation on infinite connected locally finite nonamenable quasi-transitive graphs. It establishes $p_c<p_{2\to2}\le p_u$ and a common nonempty coupled interval with infinitely many infinite clusters almost surely.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 2 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Nonuniqueness of percolation on nonamenable quasi-transitive graphs](https://github.com/openai/math/blob/main/preprints/Nonuniqueness-of-percolation-on-nonamenable-quasi-transitive-graphs-September-24-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/214.md
- Comparator statement (Nonuniqueness phase and critical laws on quasi-transitive graphs): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/BenjaminiSchramm.lean
- Comparator statement (Nonuniqueness for every nonamenable Cayley graph): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/CayleyPercolation.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
