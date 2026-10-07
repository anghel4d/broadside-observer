---
title: "De Giorgi's conjecture in dimension eight"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 375; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/De-Giorgis-conjecture-in-dimension-eight-September-26-2026/article.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "partial-differential-equations"
  - "unformalized"
seed_rank: 2230
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 7
lineage: ai-mathematical-reasoning
cites:
  - title: "A positive resolution of De Giorgi's conjecture in dimension eight"
    url: "https://github.com/openai/math/blob/main/preprints/De-Giorgis-conjecture-in-dimension-eight-September-26-2026/article.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# De Giorgi's conjecture in dimension eight

## One-sentence takeaway

OpenAI's result family 375 (Partial differential equations) claims: Proves De Giorgi's conjecture at its sharp dimension-eight endpoint: every entire C2 solution $u:\mathbb R^8\to(-1,1)$ of $\Delta u=u^3-u$ that is strictly increasing in one direction depends on only one linear coordinate.

## Why it matters here

PDE results are the theory behind fluid, wave and transport simulation the engines approximate numerically. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems.

## Key ideas

- Family summary (repo): A stronger theorem classifies all stable entire solutions $v:\mathbb R^7\to[-1,1]$ as constant wells or planar transitions, without an energy-growth assumption.
- *A positive resolution of De Giorgi's conjecture in dimension eight*: We resolve De Giorgi's conjecture positively in dimension eight: every entire C2 solution $u:\mathbb R^8\to(-1,1)$ of $\Delta u=u^3-u$ with an everywhere positive directional derivative is a planar heteroclinic. We prove that every stable solution $v:\mathbb R^7\to[-1,1]$ of this equation is a constant well or a planar heteroclinic, without an energy-growth assumption.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: not formalized. The repo has no Lean development for this family, so the claim rests on the prose manuscript(s) alone.

## Links

- Manuscript: [A positive resolution of De Giorgi's conjecture in dimension eight](https://github.com/openai/math/blob/main/preprints/De-Giorgis-conjecture-in-dimension-eight-September-26-2026/article.pdf)
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
