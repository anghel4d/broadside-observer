---
title: "Talagrand’s expectation thresholds, discrete convexity, and graph decompositions"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 175; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Graph-Decompositions-at-the-Integral-Expectation-Threshold-October-5-2026/graph-threshold-decompositions.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "combinatorics"
  - "lean4"
  - "formalized"
seed_rank: 2030
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Graph Decompositions at the Integral Expectation Threshold"
    url: "https://github.com/openai/math/blob/main/preprints/Graph-Decompositions-at-the-Integral-Expectation-Threshold-October-5-2026/graph-threshold-decompositions.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Integral and fractional expectation thresholds are equivalent"
    url: "https://github.com/openai/math/blob/main/preprints/Integral-and-fractional-expectation-thresholds-are-equivalent-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Talagrand’s discrete-convexity conjecture"
    url: "https://github.com/openai/math/blob/main/preprints/Talagrands-discrete-convexity-conjecture-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Talagrand’s expectation thresholds, discrete convexity, and graph decompositions

## One-sentence takeaway

OpenAI's result family 175 (Combinatorics) claims: Proves that integral and fractional expectation thresholds differ by at most a universal factor, and resolves Talagrand's discrete-convexity conjecture.

## Why it matters here

Combinatorics is where the library's procedural-generation, graph and grid work (GRID COMMAND maps, tilings, WFC) gets its theory. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): An application proves the Ascoli–He–Park–Talagrand graph-decomposition conjecture: every graph's edges split into a universally bounded number of fixed pieces, each with containment threshold at most a universal constant times the original graph's integral expectation threshold. The pieces' embeddings need not agree on shared vertices.
- *Graph Decompositions at the Integral Expectation Threshold*: We prove the graph-decomposition conjecture of Ascoli, He, Park, and Talagrand. Every graph admits a partition into a universally bounded number of fixed edge pieces, each having ordinary containment threshold at most a universal constant times the original graph's integral expectation threshold. The partition is chosen before sampling the random host, and the separate embeddings of the pieces need not agree on shared vertices.
- *Integral and fractional expectation thresholds are equivalent*: We prove Talagrand's conjecture that integral and fractional expectation thresholds are within a universal constant factor, with the same covering budget.
- *Talagrand’s discrete-convexity conjecture*: We prove Talagrand's discrete-convexity conjecture. There is a universal integer k such that, whenever an arbitrary family has Bernoulli product measure at least $1-1/k$, the sets not contained in a union of k members admit a cover of total cost at most 1/2 at the same density.
- Lean scope (lean/docs/175.md): Talagrand's expectation-threshold conjecture asks whether the fractional and integral expectation thresholds are comparable by an absolute constant. The formalized result proves $q_f(\mathcal F)\le25\cdot512^4 q(\mathcal F)$ for every nonempty proper increasing family on a finite nonempty ground set.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 2 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: This holds for every $0<p<1$, with repeated members allowed in the union and no monotonicity assumption.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Graph Decompositions at the Integral Expectation Threshold](https://github.com/openai/math/blob/main/preprints/Graph-Decompositions-at-the-Integral-Expectation-Threshold-October-5-2026/graph-threshold-decompositions.pdf)
- Manuscript: [Integral and fractional expectation thresholds are equivalent](https://github.com/openai/math/blob/main/preprints/Integral-and-fractional-expectation-thresholds-are-equivalent-September-23-2026/paper.pdf)
- Manuscript: [Talagrand’s discrete-convexity conjecture](https://github.com/openai/math/blob/main/preprints/Talagrands-discrete-convexity-conjecture-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/175.md
- Comparator statement (Integral–fractional expectation-threshold comparison): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/TalagrandExpectationThreshold.lean
- Comparator statement (Talagrand discrete convexity): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/TalagrandDiscreteConvexity.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
