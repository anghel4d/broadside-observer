---
title: "Hardness of coloring three-colorable graphs"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 106; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Hardness-of-finding-large-independent-sets-in-three-colorable-graphs-September-24-2026/Hardness-of-finding-large-independent-sets-in-three-colorable-graphs-September-24-2026.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "theoretical-computer-science"
  - "lean4"
  - "formalized"
seed_rank: 1963
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 9
lineage: ai-mathematical-reasoning
cites:
  - title: "Hardness of finding large independent sets in three-colorable graphs"
    url: "https://github.com/openai/math/blob/main/preprints/Hardness-of-finding-large-independent-sets-in-three-colorable-graphs-September-24-2026/Hardness-of-finding-large-independent-sets-in-three-colorable-graphs-September-24-2026.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Hardness of coloring three-colorable graphs

## One-sentence takeaway

OpenAI's result family 106 (Theoretical computer science) claims: It is NP-hard to color a three-colorable graph using any fixed number c ≥ 3 of colors.

## Why it matters here

Closest to the systems side of the library: complexity, algorithms and computability statements here can change what is worth trying in ano, the engines or GRID COMMAND tooling. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): More strongly, for every fixed $0\lt \delta\lt 1/3$, a deterministic polynomial-time reduction from 3SAT produces simple unweighted graphs that are three-colorable in the satisfiable case and have no independent set of size $\delta n$ otherwise, where n is the number of vertices.
- *Hardness of finding large independent sets in three-colorable graphs*: We prove that, for every fixed $0\lt \delta\lt 1/3$, it is NP-hard to distinguish three-colorable graphs from graphs in which every independent set has fewer than δ times the number of vertices. Consequently, for every fixed integer c ≥ 3, finding a proper c-coloring of a three-colorable graph is NP-hard.
- Lean scope (lean/docs/106.md): The formalized result shows hardness of finding large independent sets even under a three-colorability promise. For every fixed $0<\delta<1/3$, a deterministic polynomial-time reduction maps binary 3SAT formulas to nonempty finite simple graphs.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Hardness of finding large independent sets in three-colorable graphs](https://github.com/openai/math/blob/main/preprints/Hardness-of-finding-large-independent-sets-in-three-colorable-graphs-September-24-2026/Hardness-of-finding-large-independent-sets-in-three-colorable-graphs-September-24-2026.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/106.md
- Comparator statement (Independent-set hardness in three-colorable graphs): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/IndependentSets.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
