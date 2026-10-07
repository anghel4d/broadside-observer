---
title: "Planar first-passage geometry and the absence of bigeodesics"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 212; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/No-bigeodesics-in-planar-first-passage-percolation-September-24-2026/main.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "probability-and-statistical-mechanics"
  - "lean4"
  - "formalized"
seed_rank: 2067
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "No bigeodesics in planar first-passage percolation"
    url: "https://github.com/openai/math/blob/main/preprints/No-bigeodesics-in-planar-first-passage-percolation-September-24-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Strict convexity and differentiability of the planar exponential first-passage limit shape"
    url: "https://github.com/openai/math/blob/main/preprints/Strict-convexity-and-differentiability-of-the-planar-exponential-first-passage-limit-shape-September-24-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Planar first-passage geometry and the absence of bigeodesics

## One-sentence takeaway

OpenAI's result family 212 (Probability and statistical mechanics) claims: Proves that planar first-passage percolation has no doubly infinite geodesic for iid nonnegative nonatomic edge weights when the minimum of four weights has finite second moment.

## Why it matters here

Random processes, percolation and spin-system results feed intuition for stochastic simulation, sampling and Monte Carlo in Anoptic. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): For exponential weights, the limit shape is strictly convex with C1 boundary. Differentiability also holds for every Gamma law with positive shape and rate.
- *No bigeodesics in planar first-passage percolation*: We prove that planar first-passage percolation with independent identically distributed nonnegative nonatomic edge weights has almost surely no doubly infinite geodesic, provided the minimum of four independent weights has finite second moment. This resolves the planar no-bigeodesics conjecture under that moment assumption. The conclusion rules out all bigeodesics simultaneously, without any regularity assumption on the limit shape.
- *Strict convexity and differentiability of the planar exponential first-passage limit shape*: We prove that the limit shape of undirected nearest-neighbor first-passage percolation on ℤ2 with independent exponential edge weights is strictly convex and has a C1 boundary. This resolves the strict convexity and differentiability conjectures for the planar exponential model. More generally, we prove differentiability of the time-constant norm for every Gamma edge-weight law with positive shape and rate.
- Lean scope (lean/docs/212.md): The formalization proves differentiability of the planar first-passage time-constant norm for independent Gamma edge weights of every positive shape and rate. The norm is differentiable away from the origin, and its unit sphere has a $C^1$ boundary.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 2 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: Strict convexity is outside these selected differentiability statements.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [No bigeodesics in planar first-passage percolation](https://github.com/openai/math/blob/main/preprints/No-bigeodesics-in-planar-first-passage-percolation-September-24-2026/main.pdf)
- Manuscript: [Strict convexity and differentiability of the planar exponential first-passage limit shape](https://github.com/openai/math/blob/main/preprints/Strict-convexity-and-differentiability-of-the-planar-exponential-first-passage-limit-shape-September-24-2026/main.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/212.md
- Comparator statement (Differentiability of the exponential first-passage limit shape): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/PlanarFirstPassage.lean
- Comparator statement (Differentiability for every positive Gamma edge-weight law): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/GammaPassage.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
