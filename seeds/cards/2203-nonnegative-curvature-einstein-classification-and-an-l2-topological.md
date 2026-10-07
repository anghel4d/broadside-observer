---
title: "Nonnegative-curvature Einstein classification and an L2 topological gap"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 348; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Zero-Plane-Rigidity-for-Einstein-Four-Manifolds-October-4-2026/einstein-boundary.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "differential-geometry"
  - "lean4"
  - "formalized"
seed_rank: 2203
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Zero-Plane Rigidity for Einstein Four-Manifolds"
    url: "https://github.com/openai/math/blob/main/preprints/Zero-Plane-Rigidity-for-Einstein-Four-Manifolds-October-4-2026/einstein-boundary.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "An L² Einstein Gap for Nonnegatively Curved Four-Manifolds"
    url: "https://github.com/openai/math/blob/main/preprints/An-L2-Einstein-Gap-for-Nonnegatively-Curved-Four-Manifolds-October-5-2026/einstein-gap.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Positively curved Einstein four-manifolds"
    url: "https://github.com/openai/math/blob/main/preprints/Positively-curved-Einstein-four-manifolds-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Nonnegative-curvature Einstein classification and an L2 topological gap

## One-sentence takeaway

OpenAI's result family 348 (Differential geometry) claims: Classifies closed connected Einstein four-manifolds with positive Einstein constant and nonnegative sectional curvature: up to scaling, their universal Riemannian covers are the round S4, Fubini–Study $\mathbb{CP}^2$, or a product of equal round two-spheres.

## Why it matters here

Differential geometry is the deep background for geometry processing, curvature flows and mesh work in graphics. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): A closed simply connected nonnegatively curved four-manifold is diffeomorphic to one of these whenever the scale-invariant L2 norm of its trace-free Ricci curvature lies below a universal positive constant.
- *Zero-Plane Rigidity for Einstein Four-Manifolds*: We prove that a closed Einstein four-manifold with positive Einstein constant, nonnegative sectional curvature, and a zero-curvature plane has universal Riemannian cover isometric to a product of two round two-spheres. Under the normalization $\mathop{\mathrm{Ric}}\nolimits =3g$, both spheres have radius $1/\sqrt3$. The proof extends coupled estimates for the two Weyl curvature blocks to the boundary of the sectional-curvature cone and determines their equality case.
- *An L² Einstein Gap for Nonnegatively Curved Four-Manifolds*: We prove a universal, scale-invariant L2 gap for the trace-free Ricci tensor on simply connected closed four-manifolds with nonnegative sectional curvature. If the trace-free Ricci energy is sufficiently small, the manifold is diffeomorphic to S4, $\mathbb{CP}^2$, or $S^2\times S^2$. The proof uses the classification of positive-Einstein, nonnegatively curved four-manifolds supplied by the companion zero-plane rigidity theorem, stated explicitly as the classification premise of our result.
- *Positively curved Einstein four-manifolds*: We prove the classification conjecture for connected smooth closed Einstein four-manifolds with strictly positive sectional curvature. Up to positive scaling and isometry, every such manifold is the round four-sphere, the complex projective plane with its Fubini–Study metric, or real projective four-space with its round metric. No orientability assumption is needed.
- Lean scope (lean/docs/348.md): The formalization classifies connected smooth closed Einstein four-manifolds with strictly positive sectional curvature. Up to positive scaling and isometry, every such manifold is the round four-sphere, the complex projective plane with its Fubini–Study metric, or round real projective four-space.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Zero-Plane Rigidity for Einstein Four-Manifolds](https://github.com/openai/math/blob/main/preprints/Zero-Plane-Rigidity-for-Einstein-Four-Manifolds-October-4-2026/einstein-boundary.pdf)
- Manuscript: [An L² Einstein Gap for Nonnegatively Curved Four-Manifolds](https://github.com/openai/math/blob/main/preprints/An-L2-Einstein-Gap-for-Nonnegatively-Curved-Four-Manifolds-October-5-2026/einstein-gap.pdf)
- Manuscript: [Positively curved Einstein four-manifolds](https://github.com/openai/math/blob/main/preprints/Positively-curved-Einstein-four-manifolds-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/348.md
- Comparator statement (Classification of positively curved Einstein four-manifolds): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/EinsteinFour.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
