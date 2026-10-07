---
title: "The three-dimensional Ball–Evans approximation problem"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 368; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Strong-diffeomorphic-approximation-in-three-dimensions-for-1-le-p-le-2-September-24-2026/main.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "partial-differential-equations"
  - "unformalized"
seed_rank: 2223
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 7
lineage: ai-mathematical-reasoning
cites:
  - title: "Strong diffeomorphic approximation in three dimensions for 1≤p≤2"
    url: "https://github.com/openai/math/blob/main/preprints/Strong-diffeomorphic-approximation-in-three-dimensions-for-1-le-p-le-2-September-24-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Strong diffeomorphic approximation in three dimensions for p>2"
    url: "https://github.com/openai/math/blob/main/preprints/Strong-diffeomorphic-approximation-in-three-dimensions-for-p-gt-2-September-24-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# The three-dimensional Ball–Evans approximation problem

## One-sentence takeaway

OpenAI's result family 368 (Partial differential equations) claims: Resolves the three-dimensional Ball–Evans approximation problem: every $W^{1,p}$ homeomorphism between arbitrary bounded domains in ℝ3, for $1\le p\lt \infty$, is a strong $W^{1,p}$ limit of smooth diffeomorphisms onto the same target.

## Why it matters here

PDE results are the theory behind fluid, wave and transport simulation the engines approximate numerically. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems.

## Key ideas

- *Strong diffeomorphic approximation in three dimensions for 1≤p≤2*: We resolve the three-dimensional Ball–Evans approximation problem for $1\le p\le2$. Every $W^{1,p}$ homeomorphism between arbitrary bounded domains in ℝ3 is a strong $W^{1,p}$ limit of smooth diffeomorphisms onto the same target.
- *Strong diffeomorphic approximation in three dimensions for p>2*: We resolve the three-dimensional Ball–Evans approximation problem for every finite p > 2. Every $W^{1,p}$ homeomorphism between arbitrary bounded domains in ℝ3 can be approximated strongly in $W^{1,p}$ by smooth diffeomorphisms onto the same target.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: not formalized. The repo has no Lean development for this family, so the claim rests on the prose manuscript(s) alone.

## Links

- Manuscript: [Strong diffeomorphic approximation in three dimensions for 1≤p≤2](https://github.com/openai/math/blob/main/preprints/Strong-diffeomorphic-approximation-in-three-dimensions-for-1-le-p-le-2-September-24-2026/main.pdf)
- Manuscript: [Strong diffeomorphic approximation in three dimensions for p>2](https://github.com/openai/math/blob/main/preprints/Strong-diffeomorphic-approximation-in-three-dimensions-for-p-gt-2-September-24-2026/main.pdf)
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
