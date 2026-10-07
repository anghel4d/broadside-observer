---
title: "Barnette’s Hamiltonian-cycle conjecture"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 180; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Paired-states-and-Hamiltonian-cycles-in-cubic-bipartite-planar-graphs-September-24-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "combinatorics"
  - "lean4"
  - "formalized"
seed_rank: 2035
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Paired states and Hamiltonian cycles in cubic bipartite planar graphs"
    url: "https://github.com/openai/math/blob/main/preprints/Paired-states-and-Hamiltonian-cycles-in-cubic-bipartite-planar-graphs-September-24-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Barnette’s Hamiltonian-cycle conjecture

## One-sentence takeaway

OpenAI's result family 180 (Combinatorics) claims: Proves that every finite simple cubic bipartite planar 3-vertex-connected graph has a Hamiltonian cycle, resolving Barnette's conjecture.

## Why it matters here

Combinatorics is where the library's procedural-generation, graph and grid work (GRID COMMAND maps, tilings, WFC) gets its theory. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Equivalently, every three-edge path in a finite simple cubic 3-vertex-connected bipartite Pfaffian graph lies in a Hamiltonian cycle.
- *Paired states and Hamiltonian cycles in cubic bipartite planar graphs*: We prove Barnette's conjecture: every finite simple cubic bipartite planar 3-vertex-connected graph has a Hamiltonian cycle.
- Lean scope (lean/docs/180.md): Barnette's conjecture states that every finite simple cubic bipartite planar graph that is 3-vertex-connected has a Hamiltonian cycle. The formalization proves this statement for every such graph.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Paired states and Hamiltonian cycles in cubic bipartite planar graphs](https://github.com/openai/math/blob/main/preprints/Paired-states-and-Hamiltonian-cycles-in-cubic-bipartite-planar-graphs-September-24-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/180.md
- Comparator statement (Barnette's Hamiltonian-cycle conjecture): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/BarnetteHamiltonian.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
