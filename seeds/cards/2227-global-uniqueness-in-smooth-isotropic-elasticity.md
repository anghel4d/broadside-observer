---
title: "Global uniqueness in smooth isotropic elasticity"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 372; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Global-Uniqueness-for-the-Smooth-Isotropic-Elasticity-Inverse-Problem-September-24-2026/article.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "partial-differential-equations"
  - "lean4"
  - "formalized"
seed_rank: 2227
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Global Uniqueness for the Smooth Isotropic Elasticity Inverse Problem"
    url: "https://github.com/openai/math/blob/main/preprints/Global-Uniqueness-for-the-Smooth-Isotropic-Elasticity-Inverse-Problem-September-24-2026/article.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Global uniqueness in smooth isotropic elasticity

## One-sentence takeaway

OpenAI's result family 372 (Partial differential equations) claims: Proves that full static boundary displacement-to-traction data determine both smooth real Lamé moduli on every bounded connected smooth domain in ℝ3, provided μ > 0 and $3\lambda+2\mu\gt 0$ on the closure.

## Why it matters here

PDE results are the theory behind fluid, wave and transport simulation the engines approximate numerically. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Neither analyticity, proximity to constant coefficients nor prior knowledge near the boundary is required.
- *Global Uniqueness for the Smooth Isotropic Elasticity Inverse Problem*: We prove that the full static displacement-to-traction map uniquely determines both real smooth Lamé moduli on every bounded connected smooth domain in ℝ3, provided μ > 0 and $3\lambda+2\mu\gt 0$ on the closure. This resolves the smooth three-dimensional isotropic elastic Calderón uniqueness problem under these positivity assumptions.
- Lean scope (lean/docs/372.md): The formalization proves global uniqueness in the three-dimensional static isotropic elasticity inverse problem. On a bounded connected smooth domain, let two pairs of smooth real Lamé moduli satisfy $\mu>0$ and $3\lambda+2\mu>0$ on the closure.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: The selected statement is uniqueness; it does not supply a reconstruction algorithm.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Global Uniqueness for the Smooth Isotropic Elasticity Inverse Problem](https://github.com/openai/math/blob/main/preprints/Global-Uniqueness-for-the-Smooth-Isotropic-Elasticity-Inverse-Problem-September-24-2026/article.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/372.md
- Comparator statement (Global uniqueness of smooth isotropic Lamé moduli): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/ElasticityUniqueness.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
