---
title: "Gigli’s characterization of Alexandrov curvature"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 356; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Giglis-distributional-curvature-characterization-of-Alexandrov-spaces-September-24-2026/main.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "differential-geometry"
  - "lean4"
  - "formalized"
seed_rank: 2211
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Gigli’s distributional curvature characterization of Alexandrov spaces"
    url: "https://github.com/openai/math/blob/main/preprints/Giglis-distributional-curvature-characterization-of-Alexandrov-spaces-September-24-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Weak Hessian bounds along every geodesic in RCD spaces"
    url: "https://github.com/openai/math/blob/main/preprints/Weak-Hessian-bounds-along-every-geodesic-in-RCD-spaces-September-24-2026/weak-hessian-geodesics.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Gigli’s characterization of Alexandrov curvature

## One-sentence takeaway

OpenAI's result family 356 (Differential geometry) claims: Proves Gigli's conjecture: in every integer dimension n ≥ 2, Alexandrov curvature at least κ is characterized by the full-support $\mathop{\mathrm{RCD}}\nolimits ((n-1)\kappa,n)$ condition with reference measure $\mathcal H^n$ and distributional sectional curvature at least κ in the original global test classes.

## Why it matters here

Differential geometry is the deep background for geometry processing, curvature flows and mesh work in graphics. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): The RCD condition is unreduced.
- *Gigli’s distributional curvature characterization of Alexandrov spaces*: For every integer n ≥ 2 and κ ∈ ℝ, we prove that a complete separable metric space is an n-dimensional Alexandrov space of curvature at least κ if and only if, with reference measure $\mathcal H^n$, it is a full-support $\mathrm{RCD}((n-1)\kappa,n)$ space whose distributional sectional curvature is at least κ in Gigli's original global test classes. This resolves Gigli's characterization conjecture in dimensions at least two.
- *Weak Hessian bounds along every geodesic in RCD spaces*: On a full-support $\mathrm{RCD}(K,N)$ space with $1\lt N\lt \infty$, we prove that a bounded globally Lipschitz function whose distributional Hessian is bounded above by a bounded continuous function satisfies the corresponding second-derivative inequality along every minimizing geodesic.
- Lean scope (lean/docs/356.md): The formalization transfers a weak Hessian upper bound to every prescribed minimizing geodesic in an $\mathrm{RCD}(K,N)$ space with finite $N>1$. If a bounded globally Lipschitz function $F$ has weak Hessian bounded above by $G$ times the metric, where $G$ is bounded and continuous, then every constant-speed geodesic $\gamma:[0,1]\to X$ satisfies $(F\circ\gamma)''\le G(\gamma)\,d(\gamma(0),\gamma(1))^2$ in the distributional sense.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: The space is complete and separable with full support and measure finite on bounded sets; compactness and metric nonbranching are not assumed.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Gigli’s distributional curvature characterization of Alexandrov spaces](https://github.com/openai/math/blob/main/preprints/Giglis-distributional-curvature-characterization-of-Alexandrov-spaces-September-24-2026/main.pdf)
- Manuscript: [Weak Hessian bounds along every geodesic in RCD spaces](https://github.com/openai/math/blob/main/preprints/Weak-Hessian-bounds-along-every-geodesic-in-RCD-spaces-September-24-2026/weak-hessian-geodesics.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/356.md
- Comparator statement (Weak Hessian bounds along every geodesic): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/WeakHessian.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
