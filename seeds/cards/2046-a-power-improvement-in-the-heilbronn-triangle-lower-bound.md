---
title: "A power improvement in the Heilbronn triangle lower bound"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 191; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/A-power-improvement-in-the-Heilbronn-triangle-lower-bound-September-25-2026/main.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "combinatorics"
  - "lean4"
  - "formalized"
seed_rank: 2046
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "A power improvement in the Heilbronn triangle lower bound"
    url: "https://github.com/openai/math/blob/main/preprints/A-power-improvement-in-the-Heilbronn-triangle-lower-bound-September-25-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# A power improvement in the Heilbronn triangle lower bound

## One-sentence takeaway

OpenAI's result family 191 (Combinatorics) claims: For every sufficiently large n, constructs n points in the unit square such that every triangle has area at least $n^{-2+c}$ for one absolute c > 0.

## Why it matters here

Combinatorics is where the library's procedural-generation, graph and grid work (GRID COMMAND maps, tilings, WFC) gets its theory. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): This disproves the conjectured almost-n−2 upper bound in Heilbronn's triangle problem, which asks how large the smallest determined triangle can be.
- *A power improvement in the Heilbronn triangle lower bound*: There are absolute constants $\eta,c_1\gt 0$ such that, for every sufficiently large integer n, one can choose n points in the unit square so that every triangle they determine has area at least $c_1n^{-2+\eta}$. Thus the almost n−2 upper-bound formulation of Heilbronn's triangle problem is false. The exponent η is fixed but extremely small.
- Lean scope (lean/docs/191.md): Heilbronn's triangle problem asks how large the smallest triangle determined by $n$ points in the unit square can be. The formalization constructs an unbounded sequence of sizes $n$ and point sets for which every triangle has area at least $n^{-2+\eta}$, for one fixed $\eta>0$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [A power improvement in the Heilbronn triangle lower bound](https://github.com/openai/math/blob/main/preprints/A-power-improvement-in-the-Heilbronn-triangle-lower-bound-September-25-2026/main.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/191.md
- Comparator statement (Power improvement for the smallest Heilbronn triangle): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/HeilbronnTriangle.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
