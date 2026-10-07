---
title: "The metric k-median approximation threshold and recovery"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 125; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Single-Exponential-Recovery-and-Bounded-Price-Strictness-for-Metric-k-Median-September-24-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "theoretical-computer-science"
  - "lean4"
  - "formalized"
seed_rank: 1981
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 9
lineage: ai-mathematical-reasoning
cites:
  - title: "Single-exponential recovery and bounded-price strictness for metric k-median"
    url: "https://github.com/openai/math/blob/main/preprints/Single-Exponential-Recovery-and-Bounded-Price-Strictness-for-Metric-k-Median-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "The approximation threshold for metric k-median"
    url: "https://github.com/openai/math/blob/main/preprints/The-Approximation-Threshold-for-Metric-k-Median-September-24-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# The metric k-median approximation threshold and recovery

## One-sentence takeaway

OpenAI's result family 125 (Theoretical computer science) claims: Gives a deterministic polynomial-time $(1+2/e+\varepsilon)$-approximation for finite rational metric k-median with specified candidate facilities, for every fixed ε > 0.

## Why it matters here

Closest to the systems side of the library: complexity, algorithms and computability statements here can change what is worth trying in ano, the engines or GRID COMMAND tooling. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Assuming $P\ne NP$, the optimal infimum approximation factor is $1+2/e$.
- *Single-exponential recovery and bounded-price strictness for metric k-median*: We give an exact-budget recovery algorithm for metric k-median with single-exponential dependence on the number of comparison clusters without accurate, distinct proxies in a supplied anchor solution. On positive integral metrics of polynomially bounded diameter, a sufficiently small total proxy error and logarithmically many such clusters yield a $(1+2/e+\varepsilon)$ approximation in polynomial time with arbitrarily high success probability. We also prove bounded-price strictness for one compatible execution of the logarithmic-surplus construction.
- *The approximation threshold for metric k-median*: For every fixed ε > 0, we give a deterministic polynomial-time $(1+2/e+\varepsilon)$-approximation for finite rational metric k-median with specified candidate facilities, opening at most k facilities. Under $P\ne NP$, the infimum approximation factor in this model is therefore $1+2/e$.
- Lean scope (lean/docs/125.md): The formalization gives an exact-budget recovery algorithm for metric $k$-median on the stated polynomially bounded integral metrics. Suppose a supplied anchor represents all but logarithmically many comparison clusters by distinct proxies, with total proxy cost at most the comparison cost plus a sufficiently small relative error.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 4 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: Assuming $P\ne NP$, it also proves that the infimum of all polynomial-time approximation factors in this model is exactly $1+2/e$.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Single-exponential recovery and bounded-price strictness for metric k-median](https://github.com/openai/math/blob/main/preprints/Single-Exponential-Recovery-and-Bounded-Price-Strictness-for-Metric-k-Median-September-24-2026/paper.pdf)
- Manuscript: [The approximation threshold for metric k-median](https://github.com/openai/math/blob/main/preprints/The-Approximation-Threshold-for-Metric-k-Median-September-24-2026/main.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/125.md
- Comparator statement (Randomized metric $k$-median approximation below two): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/KMedianRecovery.lean
- Comparator statement (Exact-budget recovery from accurate distinct cluster proxies): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/KMedianRefinedRecovery.lean
- Comparator statement (Exact approximation threshold under $P\ne NP$): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/KMedianThreshold.lean
- Comparator statement (Deterministic metric $k$-median approximation at the threshold): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/MetricKMedian.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
