---
title: "Smooth isometric immersions of surfaces into ℝ4"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 333; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Smooth-isometric-immersions-of-closed-surfaces-into-Euclidean-four-space-September-23-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "differential-geometry"
  - "lean4"
  - "formalized"
seed_rank: 2188
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Smooth isometric immersions of closed surfaces into Euclidean four-space"
    url: "https://github.com/openai/math/blob/main/preprints/Smooth-isometric-immersions-of-closed-surfaces-into-Euclidean-four-space-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Smooth isometric immersions of surfaces into ℝ4

## One-sentence takeaway

OpenAI's result family 333 (Differential geometry) claims: Every closed smooth Riemannian surface admits a smooth isometric immersion into ℝ4, resolving the closed-surface form of the four-dimensional isometric-immersion problem.

## Why it matters here

Differential geometry is the deep background for geometry processing, curvature flows and mesh work in graphics. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): This includes nonorientable surfaces and metrics of arbitrary Gaussian curvature.
- *Smooth isometric immersions of closed surfaces into Euclidean four-space*: Every closed smooth Riemannian surface admits a smooth isometric immersion into Euclidean four-space, without an orientability assumption. This resolves the closed-surface form of the classical four-dimensional isometric-immersion problem.
- Lean scope (lean/docs/333.md): The formalization proves that every closed smooth Riemannian surface admits a smooth isometric immersion into $\mathbb R^4$. The differential preserves the Riemannian inner product on every tangent space.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: No orientability assumption is imposed, and the statement asks for an immersion rather than an embedding.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Smooth isometric immersions of closed surfaces into Euclidean four-space](https://github.com/openai/math/blob/main/preprints/Smooth-isometric-immersions-of-closed-surfaces-into-Euclidean-four-space-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/333.md
- Comparator statement (Smooth isometric immersion of every closed surface into four-space): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/SurfaceImmersion.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
