---
title: "The isoperimetric profile of the cubic three-torus"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 354; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/The-Isoperimetric-Conjecture-for-the-Cubic-Flat-Three-Torus-September-24-2026/article.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "differential-geometry"
  - "lean4"
  - "formalized"
seed_rank: 2209
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "The Isoperimetric Conjecture for the Cubic Flat Three-Torus"
    url: "https://github.com/openai/math/blob/main/preprints/The-Isoperimetric-Conjecture-for-the-Cubic-Flat-Three-Torus-September-24-2026/article.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# The isoperimetric profile of the cubic three-torus

## One-sentence takeaway

OpenAI's result family 354 (Differential geometry) claims: Determines the isoperimetric profile of the unit cubic flat three-torus and classifies every finite-perimeter minimizer: balls, circular tubes around shortest closed geodesics, coordinate slabs, and their complements.

## Why it matters here

Differential geometry is the deep background for geometry processing, curvature flows and mesh work in graphics. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): The transition volumes are $4\pi/81$ and $1/\pi$, with exactly the adjacent two types minimizing at each transition.
- *The Isoperimetric Conjecture for the Cubic Flat Three-Torus*: We prove the isoperimetric conjecture for the cubic flat three-torus and classify all minimizers, including the equality cases at the transition volumes $4\pi/81$ and $1/\pi$. The minimizing regions are balls, circular tubes about shortest closed geodesics, coordinate slabs, and their complements.
- Lean scope (lean/docs/354.md): The formalization determines the isoperimetric profile and all minimizers in the unit cubic flat three-torus. At every volume $0<V<1$, a minimizer exists, and the minimizers, up to null-set changes, are exactly balls, circular tubes about shortest closed geodesics, coordinate slabs, and their complements in the appropriate volume ranges.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [The Isoperimetric Conjecture for the Cubic Flat Three-Torus](https://github.com/openai/math/blob/main/preprints/The-Isoperimetric-Conjecture-for-the-Cubic-Flat-Three-Torus-September-24-2026/article.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/354.md
- Comparator statement (Isoperimetric profile and all minimizers in the cubic flat three-torus): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/CubicTorus.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
