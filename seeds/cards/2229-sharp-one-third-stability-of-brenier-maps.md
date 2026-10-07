---
title: "Sharp one-third stability of Brenier maps"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 374; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Sharp-One-Third-Stability-of-Brenier-Maps-September-25-2026/article.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "partial-differential-equations"
  - "lean4"
  - "formalized"
seed_rank: 2229
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Sharp One-Third Stability of Brenier Maps"
    url: "https://github.com/openai/math/blob/main/preprints/Sharp-One-Third-Stability-of-Brenier-Maps-September-25-2026/article.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Sharp one-third stability of Brenier maps

## One-sentence takeaway

OpenAI's result family 374 (Partial differential equations) claims: For uniform source measure ρ on a compact convex body with interior in dimension at least two, quadratic optimal transport maps satisfy $\|T_\mu-T_\nu\|_{L^2(\rho)}\le C W_2(\mu,\nu)^{1/3}$ uniformly over targets in a fixed compact set.

## Why it matters here

PDE results are the theory behind fluid, wave and transport simulation the engines approximate numerically. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): The exponent is sharp, even for three-atom targets, disproving Letrouit's conjectured square-root bound.
- *Sharp One-Third Stability of Brenier Maps*: For the uniform probability measure ρ on a compact convex body in ℝd, d ≥ 2, quadratic optimal transport maps are one-third Hölder continuous in $L^2(\rho)$ with respect to the target's 2-Wasserstein distance. The constant is uniform over all targets supported in a fixed compact set, and the exponent is optimal. A three-atom family on a fixed cube disproves Letrouit's conjectured uniform square-root estimate.
- Lean scope (lean/docs/374.md): The formalization proves one-third Hölder stability of Brenier maps from the uniform measure on a compact convex body with nonempty interior in $\mathbb R^d$, for every $d\ge2$. For targets supported in one fixed nonempty compact set, the $L^2$ distance between the unique quadratic optimal maps is at most a constant times the one-third power of the targets' $2$-Wasserstein distance.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Sharp One-Third Stability of Brenier Maps](https://github.com/openai/math/blob/main/preprints/Sharp-One-Third-Stability-of-Brenier-Maps-September-25-2026/article.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/374.md
- Comparator statement (One-third stability of Brenier maps and sharpness): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/Brenier.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
