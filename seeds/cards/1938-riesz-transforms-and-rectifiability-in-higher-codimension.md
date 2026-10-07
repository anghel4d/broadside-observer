---
title: "Riesz transforms and rectifiability in higher codimension"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 081; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Riesz-transforms-and-uniform-rectifiability-in-higher-codimension-September-24-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "real-and-complex-analysis"
  - "lean4"
  - "formalized"
seed_rank: 1938
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Riesz transforms and uniform rectifiability in higher codimension"
    url: "https://github.com/openai/math/blob/main/preprints/Riesz-transforms-and-uniform-rectifiability-in-higher-codimension-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Riesz transforms and rectifiability in higher codimension

## One-sentence takeaway

OpenAI's result family 081 (Real and complex analysis) claims: Resolves the remaining higher-codimension Riesz-transform rectifiability problem: for d ≥ 4 and $2\le n\le d-2$, an n-Ahlfors–David regular Radon measure on ℝd is uniformly n-rectifiable whenever its n-dimensional Riesz transform is uniformly L2-bounded over all positive hard truncations.

## Why it matters here

Pure mathematics with no direct engine use; it is in the library as part of the openai/math corpus, which records what an AI research model claims to have proved. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): The rectifiability bounds depend only on dimension, regularity and operator bounds.
- *Riesz transforms and uniform rectifiability in higher codimension*: We prove that an n-Ahlfors–David regular Radon measure on ℝd is uniformly n-rectifiable if its n-dimensional Riesz transform is uniformly bounded from scalar $L^2(\mu)$ to vector-valued $L^2(\mu)$ over all positive hard truncations, for integers d ≥ 4 and $2\le n\le d-2$. This gives a positive answer to the David–Semmes Riesz-transform question in its remaining higher-codimension range. The conclusion gives uniform big pieces of Lipschitz images of Euclidean balls.
- Lean scope (lean/docs/081.md): The formalized result proves that bounded Riesz transforms force quantitative uniform rectifiability in higher codimension. For $d\ge4$ and $2\le n\le d-2$, an $n$-Ahlfors–David regular measure whose positive hard truncations have one uniform $L^2$ operator bound has big pieces of Lipschitz images.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Riesz transforms and uniform rectifiability in higher codimension](https://github.com/openai/math/blob/main/preprints/Riesz-transforms-and-uniform-rectifiability-in-higher-codimension-September-24-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/081.md
- Comparator statement (Quantitative higher-codimension Riesz rectifiability): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/RieszQuantitative.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
