---
title: "Affine Bernstein rigidity through dimension nine and a smooth dimension-ten counterexample"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 353; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Smooth-Nonquadratic-Affine-Maximal-Graph-in-Dimension-Ten-October-5-2026/affine-maximal-dimension-ten.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "differential-geometry"
  - "lean4"
  - "formalized"
seed_rank: 2208
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "A Smooth Nonquadratic Entire Affine Maximal Graph in Dimension Ten"
    url: "https://github.com/openai/math/blob/main/preprints/Smooth-Nonquadratic-Affine-Maximal-Graph-in-Dimension-Ten-October-5-2026/affine-maximal-dimension-ten.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "The affine Bernstein theorem in dimensions three through nine"
    url: "https://github.com/openai/math/blob/main/preprints/The-affine-Bernstein-theorem-in-dimensions-three-through-nine-September-24-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Affine Bernstein rigidity through dimension nine and a smooth dimension-ten counterexample

## One-sentence takeaway

OpenAI's result family 353 (Differential geometry) claims: Proves that every smooth locally uniformly convex affine-maximal graph of dimension three through nine, complete for its induced Euclidean metric, is an elliptic paraboloid.

## Why it matters here

Differential geometry is the deep background for geometry processing, curvature flows and mesh work in graphics. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): A smooth entire nonquadratic example in dimension ten makes this range sharp. In dimensions three through nine, the paraboloid classification also holds for connected open locally uniformly convex affine-maximal hypersurfaces complete for the affine Berwald–Blaschke metric.
- *A Smooth Nonquadratic Entire Affine Maximal Graph in Dimension Ten*: We construct a smooth nonquadratic entire graph in dimension ten that solves the classical affine maximal equation and has positive-definite Hessian everywhere. This gives a smooth counterexample to the entire-graph affine Bernstein assertion in dimension ten. Hessian positivity is pointwise; no global uniform lower bound or completeness of the Berwald–Blaschke metric is asserted.
- *The affine Bernstein theorem in dimensions three through nine*: We prove the Euclidean-complete affine Bernstein conjecture in dimensions three through nine: a smooth locally uniformly convex affine maximal graph is an elliptic paraboloid whenever its induced Euclidean metric is complete. The same conclusion holds, without an initial graph assumption, for connected smooth open (noncompact and without boundary) affine-complete locally uniformly convex immersed hypersurfaces that are classically affine maximal in these dimensions.
- Lean scope (lean/docs/353.md): The formalization proves the Euclidean-complete affine Bernstein theorem for graph dimensions $3\le n\le9$. If a smooth function on a nonempty open convex domain has positive-definite Hessian, satisfies the affine maximal equation, and its graph is complete in the induced Euclidean metric, then the domain is all of $\mathbb R^n$ and the function is a positive-definite quadratic polynomial plus an affine term.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: The paper's extension to immersed hypersurfaces without an initial graph assumption is outside this selected statement.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [A Smooth Nonquadratic Entire Affine Maximal Graph in Dimension Ten](https://github.com/openai/math/blob/main/preprints/Smooth-Nonquadratic-Affine-Maximal-Graph-in-Dimension-Ten-October-5-2026/affine-maximal-dimension-ten.pdf)
- Manuscript: [The affine Bernstein theorem in dimensions three through nine](https://github.com/openai/math/blob/main/preprints/The-affine-Bernstein-theorem-in-dimensions-three-through-nine-September-24-2026/main.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/353.md
- Comparator statement (Affine Bernstein classification for complete graphs in dimensions three through nine): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/AffineBernstein.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
