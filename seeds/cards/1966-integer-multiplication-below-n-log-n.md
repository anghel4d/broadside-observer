---
title: "Integer multiplication below $n\\log n$"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 109; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Integer-multiplication-below-n-log-n-September-23-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "theoretical-computer-science"
  - "unformalized"
seed_rank: 1966
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Integer multiplication below n log n"
    url: "https://github.com/openai/math/blob/main/preprints/Integer-multiplication-below-n-log-n-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Integer multiplication below $n\log n$

## One-sentence takeaway

OpenAI's result family 109 (Theoretical computer science) claims: Multiplies two n-bit integers exactly at every input length in deterministic worst-case time $O(n(\log n)^{1-\kappa})$, with $\kappa=2^{-182}$, on one fixed finite-alphabet Turing machine with finitely many one-dimensional tapes.

## Why it matters here

Closest to the systems side of the library: complexity, algorithms and computability statements here can change what is worth trying in ano, the engines or GRID COMMAND tooling. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems.

## Key ideas

- Family summary (repo): This disproves the Schönhage–Strassen $n\log n$ optimality conjecture in the ordinary multitape bit model.
- *Integer multiplication below n log n*: We give a deterministic algorithm that multiplies two n-bit integers in $O(n(\lg n)^{1-\kappa})$ worst-case time, with $\kappa=2^{-182}$, on one fixed finite-alphabet Turing machine with a fixed finite number of one-dimensional tapes. The algorithm is exact for every input length and disproves the $n\log n$ optimality conjecture of Schönhage and Strassen in this model.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: not formalized. The repo has no Lean development for this family, so the claim rests on the prose manuscript(s) alone.

## Links

- Manuscript: [Integer multiplication below n log n](https://github.com/openai/math/blob/main/preprints/Integer-multiplication-below-n-log-n-September-23-2026/paper.pdf)
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
