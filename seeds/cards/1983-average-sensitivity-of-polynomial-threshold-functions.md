---
title: "Average sensitivity of polynomial threshold functions"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 127; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Average-Sensitivity-of-Polynomial-Threshold-Functions-September-25-2026/main.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "theoretical-computer-science"
  - "lean4"
  - "formalized"
seed_rank: 1983
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 9
lineage: ai-mathematical-reasoning
cites:
  - title: "Average sensitivity of polynomial threshold functions"
    url: "https://github.com/openai/math/blob/main/preprints/Average-Sensitivity-of-Polynomial-Threshold-Functions-September-25-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Average sensitivity of polynomial threshold functions

## One-sentence takeaway

OpenAI's result family 127 (Theoretical computer science) claims: Proves that a degree-at-most-d polynomial threshold function on the uniform n-dimensional Boolean cube has average sensitivity at most $8d\sqrt n$, uniformly for $1\le d\le n$.

## Why it matters here

Closest to the systems side of the library: complexity, algorithms and computability statements here can change what is worth trying in ano, the engines or GRID COMMAND tooling. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Average sensitivity counts expected output changes under single-bit flips. This establishes the asymptotic Gotsman–Linial conjecture, allowing polynomial zeros with $\mathop{\mathrm{sign}}\nolimits (0)=1$.
- *Average sensitivity of polynomial threshold functions*: For every n ≥ 1 and $1\le d\le n$, we prove that a polynomial threshold function of degree at most d on the uniform Boolean cube has average sensitivity at most $8d\sqrt n$. This proves the asymptotic form of the Gotsman–Linial conjecture. The bound is uniform in both parameters and uses the convention $\mathop{\mathrm{sgn}}\nolimits (0)=1$.
- Lean scope (lean/docs/127.md): The formalized result proves the average-sensitivity bound $8d\sqrt n$ for every Boolean threshold function defined by a real multilinear polynomial of degree at most $d$ on the $n$-dimensional cube. The sign convention assigns value $1$ at zero.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Average sensitivity of polynomial threshold functions](https://github.com/openai/math/blob/main/preprints/Average-Sensitivity-of-Polynomial-Threshold-Functions-September-25-2026/main.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/127.md
- Comparator statement (Average sensitivity of polynomial threshold functions): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/GotsmanLinial.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
