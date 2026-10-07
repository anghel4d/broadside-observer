---
title: "Almost-linear approximation of edit distance"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 121; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/An-Almost-Linear-Approximation-Scheme-for-Edit-Distance-September-24-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "theoretical-computer-science"
  - "lean4"
  - "formalized"
seed_rank: 1978
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 9
lineage: ai-mathematical-reasoning
cites:
  - title: "An Almost-Linear Approximation Scheme for Edit Distance"
    url: "https://github.com/openai/math/blob/main/preprints/An-Almost-Linear-Approximation-Scheme-for-Edit-Distance-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Almost-linear approximation of edit distance

## One-sentence takeaway

OpenAI's result family 121 (Theoretical computer science) claims: For every fixed rational $\varepsilon\in(0,1)$, gives a randomized $(1+\varepsilon)$ approximation to unit-cost edit distance in worst-case expected time $N^{1+o(1)}$, with success probability at least 2/3.

## Why it matters here

Closest to the systems side of the library: complexity, algorithms and computability statements here can change what is worth trying in ano, the engines or GRID COMMAND tooling. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): The strings have total length N and polynomially bounded integer symbols. This is an asymptotic guarantee at fixed accuracy.
- *An Almost-Linear Approximation Scheme for Edit Distance*: We give a uniform randomized approximation scheme for unit-cost edit distance. For every fixed rational $\varepsilon\in(0,1)$, it estimates the distance between arbitrary explicitly stored strings of total length N within a factor $1+\varepsilon$ with probability at least 2/3, in worst-case expected time $N^{1+o(1)}$ on a logarithmic-word RAM. The algorithm supports polynomially bounded integer alphabets and returns zero deterministically on equal strings.
- Lean scope (lean/docs/121.md): The formalization gives a randomized $(1+\varepsilon)$-approximation for unit-cost edit distance between explicitly stored integer strings, for every fixed rational $0<\varepsilon<1$. Its estimate is at least the true distance and at most $(1+\varepsilon)$ times it with probability at least $2/3$; equal strings return zero on every execution.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [An Almost-Linear Approximation Scheme for Edit Distance](https://github.com/openai/math/blob/main/preprints/An-Almost-Linear-Approximation-Scheme-for-Edit-Distance-September-24-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/121.md
- Comparator statement (Almost-linear randomized approximation of edit distance): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/EditApproximation.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
