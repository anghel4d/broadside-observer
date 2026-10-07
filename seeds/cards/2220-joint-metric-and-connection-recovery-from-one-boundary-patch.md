---
title: "Joint metric and connection recovery from one boundary patch"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 365; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Determination-of-a-metric-and-a-unitary-connection-from-one-boundary-patch-October-5-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "partial-differential-equations"
  - "lean4"
  - "formalized"
seed_rank: 2220
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Determination of a metric and a unitary connection from one boundary patch"
    url: "https://github.com/openai/math/blob/main/preprints/Determination-of-a-metric-and-a-unitary-connection-from-one-boundary-patch-October-5-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Smooth anisotropic uniqueness in the Calderón problem from one boundary patch"
    url: "https://github.com/openai/math/blob/main/preprints/Smooth-Anisotropic-Uniqueness-in-the-Calderon-Problem-from-One-Boundary-Patch-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Nonuniqueness for bounded measurable scalar conductivities in three dimensions"
    url: "https://github.com/openai/math/blob/main/preprints/Nonuniqueness-for-Bounded-Measurable-Scalar-Conductivities-in-Three-Dimensions-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Joint metric and connection recovery from one boundary patch

## One-sentence takeaway

OpenAI's result family 365 (Partial differential equations) claims: Zero-frequency measurements on any nonempty open boundary patch determine a smooth metric and smooth unitary connection on a trivial Hermitian rank-two bundle over a compact connected manifold of dimension at least three, up to diffeomorphism and gauge fixed on that patch.

## Why it matters here

PDE results are the theory behind fluid, wave and transport simulation the engines approximate numerically. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Inputs and observations use the same patch. In contrast, distinct uniformly positive bounded measurable scalar conductivities on a three-dimensional ball can have identical full-boundary data.
- *Determination of a metric and a unitary connection from one boundary patch*: We prove that zero-frequency boundary measurements on any nonempty open boundary patch determine both a smooth Riemannian metric and a smooth unitary connection on the trivial Hermitian rank-two bundle over a compact connected smooth manifold of dimension at least three with smooth boundary. Both inputs and observations are restricted to the same patch. The metric and connection are determined up to a diffeomorphism and a unitary gauge that restrict to the identity on the measured patch.
- *Smooth anisotropic uniqueness in the Calderón problem from one boundary patch*: We resolve the smooth anisotropic Calderón uniqueness problem with arbitrary same-patch measurements. A smooth Riemannian metric on a compact connected manifold of dimension at least three is determined, up to a diffeomorphism fixing the measured patch, by its zero-frequency Dirichlet-to-Neumann energy form with both input and observation on any nonempty open boundary patch.
- *Nonuniqueness for bounded measurable scalar conductivities in three dimensions*: We construct two distinct uniformly positive bounded measurable scalar conductivities on a ball in ℝ3 with the same full Dirichlet-to-Neumann operator. Both conductivities equal one near the boundary. This gives nonuniqueness in the scalar Calderón problem at bounded measurable regularity.
- Lean scope (lean/docs/365.md): The Calderón inverse problem asks whether boundary measurements determine an interior conductivity. The formalized result gives nonuniqueness for bounded measurable scalar conductivities on the ball $B(0,3)\subset\mathbb R^3$: two uniformly positive conductivities differ on a set of positive volume, equal $1$ near the boundary, and have the same full weak Dirichlet-to-Neumann operator.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Determination of a metric and a unitary connection from one boundary patch](https://github.com/openai/math/blob/main/preprints/Determination-of-a-metric-and-a-unitary-connection-from-one-boundary-patch-October-5-2026/paper.pdf)
- Manuscript: [Smooth anisotropic uniqueness in the Calderón problem from one boundary patch](https://github.com/openai/math/blob/main/preprints/Smooth-Anisotropic-Uniqueness-in-the-Calderon-Problem-from-One-Boundary-Patch-September-24-2026/paper.pdf)
- Manuscript: [Nonuniqueness for bounded measurable scalar conductivities in three dimensions](https://github.com/openai/math/blob/main/preprints/Nonuniqueness-for-Bounded-Measurable-Scalar-Conductivities-in-Three-Dimensions-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/365.md
- Comparator statement (Scalar conductivity nonuniqueness): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/Conductivity.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
