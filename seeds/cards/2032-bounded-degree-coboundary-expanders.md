---
title: "Bounded-degree coboundary expanders"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 177; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Bounded-degree-coboundary-expanders-in-every-dimension-September-24-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "combinatorics"
  - "lean4"
  - "formalized"
seed_rank: 2032
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Bounded-degree coboundary expanders in every dimension"
    url: "https://github.com/openai/math/blob/main/preprints/Bounded-degree-coboundary-expanders-in-every-dimension-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Bounded-degree coboundary expanders

## One-sentence takeaway

OpenAI's result family 177 (Combinatorics) claims: Constructs arbitrarily large finite d-dimensional simplicial complexes, for every d ≥ 3, with uniformly bounded vertex degrees and uniform 𝔽2 coboundary expansion in every degree below d.

## Why it matters here

Combinatorics is where the library's procedural-generation, graph and grid work (GRID COMMAND maps, tilings, WFC) gets its theory. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Together with the known graph and two-dimensional cases, this establishes the existence of such expanders in every positive dimension.
- *Bounded-degree coboundary expanders in every dimension*: For every integer d ≥ 3, we construct arbitrarily large finite d-dimensional simplicial complexes with uniformly bounded vertex degrees and uniform 𝔽2 coboundary expansion in every degree below d. Together with the known graph and two-dimensional cases, this establishes the existence of bounded-degree 𝔽2 coboundary expanders in every positive dimension.
- Lean scope (lean/docs/177.md): The formalization constructs bounded-degree $\mathbb F_2$ coboundary expanders in every dimension $d\ge3$. For each such $d$, it gives finite pure connected $d$-dimensional simplicial complexes with vertex counts tending to infinity, one uniform bound on top-dimensional degree at each vertex, and one positive coboundary-expansion constant in every degree below $d$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Bounded-degree coboundary expanders in every dimension](https://github.com/openai/math/blob/main/preprints/Bounded-degree-coboundary-expanders-in-every-dimension-September-24-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/177.md
- Comparator statement (Bounded-degree coboundary expanders in dimensions at least three): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/CoboundaryExpanders.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
