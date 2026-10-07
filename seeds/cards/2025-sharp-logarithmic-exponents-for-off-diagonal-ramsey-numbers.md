---
title: "Sharp logarithmic exponents for off-diagonal Ramsey numbers"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 170; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/The-Sharp-Logarithmic-Exponent-of-r-5-t-September-24-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "combinatorics"
  - "lean4"
  - "formalized"
seed_rank: 2025
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "The sharp logarithmic exponent of r(5,t)"
    url: "https://github.com/openai/math/blob/main/preprints/The-Sharp-Logarithmic-Exponent-of-r-5-t-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "Sharp logarithmic exponents for fixed off-diagonal Ramsey numbers"
    url: "https://github.com/openai/math/blob/main/preprints/Sharp-Logarithmic-Exponents-for-Fixed-Off-Diagonal-Ramsey-Numbers-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Sharp logarithmic exponents for off-diagonal Ramsey numbers

## One-sentence takeaway

OpenAI's result family 170 (Combinatorics) claims: For every fixed integer s ≥ 5, proves $r(s,t)=t^{s-1}/(\log t)^{s-2+o(1)}$ as $t\to\infty$, determining the logarithmic exponent and matching the classical upper bound at that scale.

## Why it matters here

Combinatorics is where the library's procedural-generation, graph and grid work (GRID COMMAND maps, tilings, WFC) gets its theory. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Here $r(s,t)$ is the least number of vertices forcing an s-clique or a t-vertex independent set.
- *The sharp logarithmic exponent of r(5,t)*: We determine the sharp logarithmic exponent of the off-diagonal Ramsey number $r(5,t)$:

$\displaystyle r(5,t)=\frac{t^4}{(\log t)^{3+o(1)}} \qquad (t\longrightarrow\infty).$
- *Sharp logarithmic exponents for fixed off-diagonal Ramsey numbers*: For every fixed integer s ≥ 6, we determine the sharp logarithmic exponent of the off-diagonal Ramsey number:

$\displaystyle r(s,t)=\frac{t^{s-1}}{(\log t)^{s-2+o(1)}} \qquad (t\longrightarrow\infty).$
- Lean scope (lean/docs/170.md): The formalization determines the sharp logarithmic exponent of the off-diagonal Ramsey number $r(5,t)$. It proves $r(5,t)=t^4/(\log t)^{3+o(1)}$ as $t\to\infty$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 2 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [The sharp logarithmic exponent of r(5,t)](https://github.com/openai/math/blob/main/preprints/The-Sharp-Logarithmic-Exponent-of-r-5-t-September-24-2026/paper.pdf)
- Manuscript: [Sharp logarithmic exponents for fixed off-diagonal Ramsey numbers](https://github.com/openai/math/blob/main/preprints/Sharp-Logarithmic-Exponents-for-Fixed-Off-Diagonal-Ramsey-Numbers-September-24-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/170.md
- Comparator statement (Sharp logarithmic exponent of $r(5,t)$): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/RamseyFive.lean
- Comparator statement (Sharp logarithmic exponent for fixed off-diagonal Ramsey numbers): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/SharpLogRamsey.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
