---
title: "Symplectic ball packing in higher dimensions"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 343; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Symplectic-Ball-Packings-in-Higher-Dimensions-September-23-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "differential-geometry"
  - "lean4"
  - "formalized"
seed_rank: 2198
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Symplectic Ball Packings in Higher Dimensions"
    url: "https://github.com/openai/math/blob/main/preprints/Symplectic-Ball-Packings-in-Higher-Dimensions-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Symplectic ball packing in higher dimensions

## One-sentence takeaway

OpenAI's result family 343 (Differential geometry) claims: Resolves the Siegel–Yao conjecture for arbitrary capacities in every dimension $2n\ge6$.

## Why it matters here

Differential geometry is the deep background for geometry processing, curvature flows and mesh work in graphics. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Finitely many closed symplectic balls of capacities $R_1,\ldots,R_k$ embed disjointly into an open ball of capacity R exactly when $\sum_iR_i^n\lt R^n$ and $R_i+R_j\lt R$ for every distinct pair i, j.
- *Symplectic Ball Packings in Higher Dimensions*: We prove that, for all integers n ≥ 3 and k ≥ 1 and all positive real capacities $R_1,\ldots,R_k$, the closed standard symplectic $2n$-balls of these capacities embed disjointly into the interior of a ball of capacity R > 0 if and only if

$\displaystyle \sum_{i=1}^k R_i^n\lt R^n, \qquad R_i+R_j\lt R\quad(i\ne j).$

Capacity is π times the squared Euclidean radius, and each embedding is defined on a neighborhood of its closed source ball. This proves Siegel and Yao's Conjecture A.
- Lean scope (lean/docs/343.md): The formalization proves Siegel and Yao's ball-packing criterion in every symplectic dimension $2n$ with $n\ge3$. For $k\ge1$ closed standard balls of positive capacities $R_1,\ldots,R_k$, disjoint symplectic embeddings into the interior of a ball of capacity $R$ exist exactly when $\sum_i R_i^n<R^n$ and $R_i+R_j<R$ for all $i\ne j$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 2 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Symplectic Ball Packings in Higher Dimensions](https://github.com/openai/math/blob/main/preprints/Symplectic-Ball-Packings-in-Higher-Dimensions-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/343.md
- Comparator statement (Exact criterion for higher-dimensional symplectic ball packings): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/BallPacking.lean
- Comparator statement (Necessity of the volume and pairwise capacity inequalities): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/BallPackingNecessity.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
