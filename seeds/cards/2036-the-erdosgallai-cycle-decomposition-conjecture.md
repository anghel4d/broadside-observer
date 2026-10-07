---
title: "The Erdős–Gallai cycle-decomposition conjecture"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 181; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/A-linear-cycle-and-edge-decomposition-of-every-graph-September-24-2026/main.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "combinatorics"
  - "lean4"
  - "formalized"
seed_rank: 2036
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "A linear cycle-and-edge decomposition of every graph"
    url: "https://github.com/openai/math/blob/main/preprints/A-linear-cycle-and-edge-decomposition-of-every-graph-September-24-2026/main.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# The Erdős–Gallai cycle-decomposition conjecture

## One-sentence takeaway

OpenAI's result family 181 (Combinatorics) claims: Proves that the edges of every finite simple undirected graph on n vertices can be partitioned into at most $Cn$ simple cycles and single edges, for an absolute constant C.

## Why it matters here

Combinatorics is where the library's procedural-generation, graph and grid work (GRID COMMAND maps, tilings, WFC) gets its theory. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): This resolves the Erdős–Gallai cycle-decomposition conjecture, bounding the number of pieces linearly even for dense graphs.
- *A linear cycle-and-edge decomposition of every graph*: We prove that every finite simple undirected graph on n vertices has an edge partition into at most $Cn$ simple cycles and single edges, for an absolute constant C. This resolves the Erdős–Gallai cycle decomposition conjecture positively.
- Lean scope (lean/docs/181.md): The Erdős–Gallai cycle-decomposition conjecture asks for a linear bound on the number of cycles and single edges needed to partition a graph's edges. The formalized result gives one absolute constant $C>0$ such that every finite simple graph on $n$ vertices has an edge-disjoint decomposition into at most $Cn$ cycles or singleton edges.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [A linear cycle-and-edge decomposition of every graph](https://github.com/openai/math/blob/main/preprints/A-linear-cycle-and-edge-decomposition-of-every-graph-September-24-2026/main.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/181.md
- Comparator statement (Linear cycle-and-edge decomposition): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/CycleDecomposition.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
