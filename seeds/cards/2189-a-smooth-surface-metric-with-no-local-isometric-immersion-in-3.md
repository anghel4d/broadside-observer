---
title: "A smooth surface metric with no local isometric immersion in ℝ3"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 334; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/A-Smooth-Metric-with-No-Local-Isometric-Immersion-into-Three-Space-September-24-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "differential-geometry"
  - "lean4"
  - "formalized"
seed_rank: 2189
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "A Smooth Metric with No Local Isometric Immersion into Three-Space"
    url: "https://github.com/openai/math/blob/main/preprints/A-Smooth-Metric-with-No-Local-Isometric-Immersion-into-Three-Space-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# A smooth surface metric with no local isometric immersion in ℝ3

## One-sentence takeaway

OpenAI's result family 334 (Differential geometry) claims: Constructs a smooth positive-definite metric on $(-1,1)^2$ for which no neighborhood of the origin admits a smooth isometric immersion into ℝ3.

## Why it matters here

Differential geometry is the deep background for geometry processing, curvature flows and mesh work in graphics. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): This answers the unrestricted smooth local isometric realization problem for surfaces negatively, even after shrinking the neighborhood.
- *A Smooth Metric with No Local Isometric Immersion into Three-Space*: We construct a smooth positive-definite Riemannian metric on $(-1,1)^2$ that agrees with the Euclidean metric to every order at the origin, yet no neighborhood of the origin admits a smooth isometric immersion into Euclidean three-space. This gives a negative answer to the unrestricted smooth local isometric realization problem for surfaces.
- Lean scope (lean/docs/334.md): The local isometric-immersion problem asks whether every smooth surface metric can be realized locally in Euclidean three-space. The formalized counterexample is a smooth positive-definite metric on $(-1,1)^2$ for which no neighborhood of the origin admits a smooth isometric immersion into $\mathbb R^3$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [A Smooth Metric with No Local Isometric Immersion into Three-Space](https://github.com/openai/math/blob/main/preprints/A-Smooth-Metric-with-No-Local-Isometric-Immersion-into-Three-Space-September-24-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/334.md
- Comparator statement (Smooth local isometric-immersion obstruction): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/IsometricImmersion.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
