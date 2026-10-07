---
title: "Hyperbolicity cones without semidefinite lifts"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 095; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Hyperbolicity-Cones-Without-Semidefinite-Lifts-October-5-2026/nonliftable-hyperbolicity.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "convex-and-metric-geometry"
  - "lean4"
  - "formalized"
seed_rank: 1952
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Hyperbolicity Cones Without Semidefinite Lifts"
    url: "https://github.com/openai/math/blob/main/preprints/Hyperbolicity-Cones-Without-Semidefinite-Lifts-October-5-2026/nonliftable-hyperbolicity.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "A nonspectrahedral hyperbolicity cone"
    url: "https://github.com/openai/math/blob/main/preprints/A-Nonspectrahedral-Hyperbolicity-Cone-September-24-2026/nonspectrahedral-hyperbolicity-cone.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "An Exact Semidefinite Lift of a Nonspectrahedral Hyperbolicity Cone"
    url: "https://github.com/openai/math/blob/main/preprints/An-Exact-Semidefinite-Lift-of-a-Nonspectrahedral-Hyperbolicity-Cone-October-5-2026/Exact-Semidefinite-Lift-of-a-Nonspectrahedral-Hyperbolicity-Cone.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Hyperbolicity cones without semidefinite lifts

## One-sentence takeaway

OpenAI's result family 095 (Convex and metric geometry) claims: Disproves the Projected Lax conjecture: some hyperbolicity cones are not spectrahedral shadows.

## Why it matters here

Convex and metric geometry underlies collision, packing, embedding and spatial data-structure work. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): The examples admit no exact finite affine semidefinite lift, regardless of the number of auxiliary variables or the real coefficients used. This also disproves the generalized Lax conjecture that every hyperbolicity cone is spectrahedral.
- *Hyperbolicity Cones Without Semidefinite Lifts*: We prove that not every hyperbolicity cone is a spectrahedral shadow: some closed hyperbolicity cones admit no finite affine semidefinite lift, even with arbitrary real coefficients and any finite number of auxiliary variables. This disproves the Projected Lax Conjecture and hence the generalized Lax conjecture.
- *A nonspectrahedral hyperbolicity cone*: We construct a homogeneous polynomial of degree 16 in 23 real variables whose hyperbolicity cone has no representation by a finite homogeneous real symmetric linear matrix inequality. This disproves the geometric Generalized Lax conjecture.
- *An Exact Semidefinite Lift of a Nonspectrahedral Hyperbolicity Cone*: We construct an exact semidefinite lift of the explicit nonspectrahedral hyperbolicity cone in twenty-three variables defined in the companion paper. The lift is a homogeneous real symmetric pencil of size 100 with 307 auxiliary variables and represents the entire closed cone, including every point with singular X. Thus, although this cone has no semidefinite representation in its original coordinates, it admits one when auxiliary variables are allowed.
- Lean scope (lean/docs/095.md): The generalized Lax conjecture predicts that every hyperbolicity cone is spectrahedral. The formalized counterexample is an explicit homogeneous polynomial of degree $20$ in $23$ real variables.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Hyperbolicity Cones Without Semidefinite Lifts](https://github.com/openai/math/blob/main/preprints/Hyperbolicity-Cones-Without-Semidefinite-Lifts-October-5-2026/nonliftable-hyperbolicity.pdf)
- Manuscript: [A nonspectrahedral hyperbolicity cone](https://github.com/openai/math/blob/main/preprints/A-Nonspectrahedral-Hyperbolicity-Cone-September-24-2026/nonspectrahedral-hyperbolicity-cone.pdf)
- Manuscript: [An Exact Semidefinite Lift of a Nonspectrahedral Hyperbolicity Cone](https://github.com/openai/math/blob/main/preprints/An-Exact-Semidefinite-Lift-of-a-Nonspectrahedral-Hyperbolicity-Cone-October-5-2026/Exact-Semidefinite-Lift-of-a-Nonspectrahedral-Hyperbolicity-Cone.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/095.md
- Comparator statement (Nonspectrahedral hyperbolicity cone): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/HyperbolicCones.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
