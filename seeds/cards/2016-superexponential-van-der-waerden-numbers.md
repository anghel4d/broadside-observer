---
title: "Superexponential van der Waerden numbers"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 160; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Quantitative-Superexponential-Bounds-for-van-der-Waerden-Numbers-September-23-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "combinatorics"
  - "lean4"
  - "formalized"
seed_rank: 2016
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Quantitative Superexponential Bounds for van der Waerden Numbers"
    url: "https://github.com/openai/math/blob/main/preprints/Quantitative-Superexponential-Bounds-for-van-der-Waerden-Numbers-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Superexponential van der Waerden numbers

## One-sentence takeaway

OpenAI's result family 160 (Combinatorics) claims: Resolves Erdős's superexponential-growth question for van der Waerden numbers.

## Why it matters here

Combinatorics is where the library's procedural-generation, graph and grid work (GRID COMMAND maps, tilings, WFC) gets its theory. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): If $W_r(k)$ is the least interval length forcing a monochromatic k-term progression in every r-coloring, then $W_r(k)\gt k^{ck\lfloor\log_2 r\rfloor}$ for an absolute c > 0, all r ≥ 2 and sufficiently large k, uniformly in r. In particular, $W_r(k)^{1/k}\to\infty$ for each fixed r.
- *Quantitative Superexponential Bounds for van der Waerden Numbers*: We prove that there are absolute constants c > 0 and K0 such that $W_r(k)\gt k^{ck\lfloor\log_2 r\rfloor}$ for every $k\ge K_0$ and r ≥ 2. Consequently $W_r(k)^{1/k}\to\infty$ for each fixed r ≥ 2, giving a quantitative positive resolution of Erdős's superexponential-growth question, including the two-color case.
- Lean scope (lean/docs/160.md): Let $W(r,k)$ be the least interval length forcing a monochromatic $k$-term arithmetic progression in every coloring with at most $r$ colors. The formalized result gives an absolute threshold $K$ such that $W(r,k)>k^{k\lfloor\log_2 r\rfloor/100000}$ for all $k\ge K$ and $r\ge2$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Quantitative Superexponential Bounds for van der Waerden Numbers](https://github.com/openai/math/blob/main/preprints/Quantitative-Superexponential-Bounds-for-van-der-Waerden-Numbers-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/160.md
- Comparator statement (Uniform van der Waerden lower bound): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/QuantitativeVanDerWaerden.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
