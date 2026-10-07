---
title: "The sharp terminal leave in random triangle removal"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 188; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/The-Sharp-Terminal-Leave-in-Random-Triangle-Removal-September-25-2026/The-Sharp-Terminal-Leave-in-Random-Triangle-Removal-September-25-2026.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "combinatorics"
  - "lean4"
  - "formalized"
seed_rank: 2043
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "The sharp terminal leave in random triangle removal"
    url: "https://github.com/openai/math/blob/main/preprints/The-Sharp-Terminal-Leave-in-Random-Triangle-Removal-September-25-2026/The-Sharp-Terminal-Leave-in-Random-Triangle-Removal-September-25-2026.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# The sharp terminal leave in random triangle removal

## One-sentence takeaway

OpenAI's result family 188 (Combinatorics) claims: Starting from the complete graph on n vertices, repeatedly delete a uniformly chosen remaining triangle.

## Why it matters here

Combinatorics is where the library's procedural-generation, graph and grid work (GRID COMMAND maps, tilings, WFC) gets its theory. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): The terminal edge count is asymptotic to $n^{3/2}/(2\sqrt2)$, with mean-square convergence after normalization by n3/2. This proves the triangle case of the Joos–Kühn sharp-constant conjecture.
- *The sharp terminal leave in random triangle removal*: Starting from the complete graph on n vertices, repeatedly remove the three edges of a uniformly chosen remaining triangle. We prove that the number of edges left at termination, divided by n3/2, converges in L2 to $1/(2\sqrt2)$. This proves the triangle case of the sharp-constant conjecture of Joos and Kühn.
- Lean scope (lean/docs/188.md): Start with the complete graph on $n$ vertices and repeatedly delete the three edges of a uniformly chosen remaining triangle. The formalization proves that the number of edges at termination, divided by $n^{3/2}$, converges in $L^2$ to $1/(2\sqrt2)$.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [The sharp terminal leave in random triangle removal](https://github.com/openai/math/blob/main/preprints/The-Sharp-Terminal-Leave-in-Random-Triangle-Removal-September-25-2026/The-Sharp-Terminal-Leave-in-Random-Triangle-Removal-September-25-2026.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/188.md
- Comparator statement (Sharp terminal edge count in random triangle removal): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/TriangleRemoval.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
