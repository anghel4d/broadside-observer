---
title: "Logarithmic and Lp Brunn–Minkowski inequalities and the B-conjecture"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 091; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/The-logarithmic-Brunn-Minkowski-conjecture-September-23-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "convex-and-metric-geometry"
  - "lean4"
  - "formalized"
seed_rank: 1948
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "The logarithmic Brunn–Minkowski conjecture"
    url: "https://github.com/openai/math/blob/main/preprints/The-logarithmic-Brunn-Minkowski-conjecture-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Logarithmic and Lp Brunn–Minkowski inequalities and the B-conjecture

## One-sentence takeaway

OpenAI's result family 091 (Convex and metric geometry) claims: Proves the logarithmic Brunn–Minkowski inequality for origin-symmetric convex bodies in every dimension, and the scalar-dilation B-conjecture for all even log-concave Radon measures.

## Why it matters here

Convex and metric geometry underlies collision, packing, embedding and spatial data-structure work. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): For Lebesgue volume it also proves the additive Lp Brunn–Minkowski inequality for full-dimensional origin-symmetric convex bodies throughout $0\lt p\lt 1$.
- *The logarithmic Brunn–Minkowski conjecture*: We prove the logarithmic Brunn–Minkowski conjecture for arbitrary origin-symmetric convex bodies in every dimension. The theorem also gives the symmetric Lp Brunn–Minkowski inequality for every $0\lt p\lt 1$. Combined with Saroglou's transfer theorem and a support-subspace reduction, it yields the logarithmic inequality for every even log-concave Radon measure and the scalar-dilation $(B)$-conjecture.
- Lean scope (lean/docs/091.md): The logarithmic Brunn–Minkowski conjecture asserts that logarithmic interpolation of origin-symmetric convex bodies preserves the geometric-mean lower bound for volume. The formalized result proves, for every dimension $n\ge1$, such bodies $K,L\subset\mathbb R^n$, and $0\le t\le1$, that their logarithmic Wulff combination has volume at least $|K|^{1-t}|L|^t$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: It assumes neither boundary smoothness nor coordinatewise unconditionality.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [The logarithmic Brunn–Minkowski conjecture](https://github.com/openai/math/blob/main/preprints/The-logarithmic-Brunn-Minkowski-conjecture-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/091.md
- Comparator statement (Logarithmic Brunn–Minkowski inequality): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/LogBrunnMinkowski.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
