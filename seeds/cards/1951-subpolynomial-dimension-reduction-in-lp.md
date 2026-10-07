---
title: "Subpolynomial dimension reduction in Lp"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 094; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Subpolynomial-dimension-reduction-in-Lp-September-23-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "convex-and-metric-geometry"
  - "lean4"
  - "formalized"
seed_rank: 1951
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Subpolynomial dimension reduction in Lp"
    url: "https://github.com/openai/math/blob/main/preprints/Subpolynomial-dimension-reduction-in-Lp-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Subpolynomial dimension reduction in Lp

## One-sentence takeaway

OpenAI's result family 094 (Convex and metric geometry) claims: For every fixed $1\lt p\lt \infty$ and distortion D > 1, every n-point subset of real Lp embeds into $\ell_p^d$ with distortion at most D and dimension $d=n^{o(1)}$, answering Naor's sublinear-dimension question for p ≠ 2.

## Why it matters here

Convex and metric geometry underlies collision, packing, embedding and spatial data-structure work. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): In contrast, exact embeddings require worst-case dimension $\Theta(n^2)$ when p ≠ 2.
- *Subpolynomial dimension reduction in Lp*: For every fixed $1\lt p\lt \infty$ and D > 1, every n-point subset of a real Lp space embeds into $\ell_p^d$ with distortion at most D and subpolynomial dimension $d=n^{o(1)}$. The target has the same exponent p, and the embedding need not be linear.
- Lean scope (lean/docs/094.md): For $p>1$, $p\ne2$, the formalization bounds the least dimension needed to embed every $n$-point subset of real $L_p$ with distortion $D$. For each fixed $D>1$, there is a constant $C=C(p,D)$ such that this dimension lies between $\log n/\log(1+2D)$ and $\exp(C(\log n)^{\gamma(p)})$ for every $n\ge2$, where $\gamma(p)=2-p$ for $p<2$ and $1-2/p$ for $p>2$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Subpolynomial dimension reduction in Lp](https://github.com/openai/math/blob/main/preprints/Subpolynomial-dimension-reduction-in-Lp-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/094.md
- Comparator statement (Dimension reduction in $L_p$): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/SubpolynomialLp.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
