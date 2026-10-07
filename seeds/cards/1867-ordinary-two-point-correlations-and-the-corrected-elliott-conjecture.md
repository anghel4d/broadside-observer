---
title: "Ordinary two-point correlations and the corrected Elliott conjecture"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 007; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Ordinary-two-point-correlations-of-multiplicative-functions-September-24-2026/final.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "number-theory"
  - "lean4"
  - "formalized"
seed_rank: 1867
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Ordinary two-point correlations of multiplicative functions"
    url: "https://github.com/openai/math/blob/main/preprints/Ordinary-two-point-correlations-of-multiplicative-functions-September-24-2026/final.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Ordinary two-point correlations and the corrected Elliott conjecture

## One-sentence takeaway

OpenAI's result family 007 (Number theory) claims: Proves the ordinary two-point Chowla conjecture, with a bound $O(X/(\log X)^c)$ for Liouville correlation sums along fixed nonproportional affine forms, where c > 0 is absolute.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): More generally, proves the binary corrected Elliott conjecture for complex multiplicative functions bounded by one when one factor is uniformly nonpretentious against each fixed Dirichlet character times $n^{it}$ for $|t|\le X$.
- *Ordinary two-point correlations of multiplicative functions*: We prove the ordinary two-point Chowla conjecture. For every fixed pair of nonproportional affine forms, the Liouville correlation has a power-of-logarithm saving at every cutoff, with an absolute exponent. We also prove the binary corrected Elliott conjecture for ordinary averages of complex multiplicative functions of modulus at most one, under uniform nonpretentiousness of at least one original factor.
- Lean scope (lean/docs/007.md): The formalization proves ordinary two-point cancellation for multiplicative functions. For the Liouville function on every fixed pair of nonproportional affine forms, the correlation sum up to $X$ is $O(X/(\log X)^c)$ for an absolute $c>0$, with the implied constant depending on the forms.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 2 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Ordinary two-point correlations of multiplicative functions](https://github.com/openai/math/blob/main/preprints/Ordinary-two-point-correlations-of-multiplicative-functions-September-24-2026/final.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/007.md
- Comparator statement (Ordinary Elliott cancellation under uniform nonpretentiousness): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/OrdinaryElliott.lean
- Comparator statement (Ordinary Liouville and multiplicative two-point correlations): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/OrdinaryTwoPointCorrelations.lean
- Reasoning summary: https://github.com/openai/math/blob/main/reasoning_traces/ordinary-two-point-correlations.pdf
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
