---
title: "Planar distinct distances and unit-distance bounds"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 167; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/The-weak-pinned-planar-distance-theorem-September-23-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "combinatorics"
  - "lean4"
  - "formalized"
seed_rank: 2022
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "The weak pinned planar distance theorem"
    url: "https://github.com/openai/math/blob/main/preprints/The-weak-pinned-planar-distance-theorem-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "A power saving for planar unit distances"
    url: "https://github.com/openai/math/blob/main/preprints/A-power-saving-for-planar-unit-distances-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Planar distinct distances and unit-distance bounds

## One-sentence takeaway

OpenAI's result family 167 (Combinatorics) claims: Proves the weak pinned Erdős distance conjecture: for every fixed ε > 0, all but $o(n)$ points of any n-point planar set determine at least $n^{1-\varepsilon}$ distinct nonzero distances.

## Why it matters here

Combinatorics is where the library's procedural-generation, graph and grid work (GRID COMMAND maps, tilings, WFC) gets its theory. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): A complementary theorem bounds the number of unit-distance pairs by $O(n^{4/3-\delta})$ for an absolute δ > 0.
- *The weak pinned planar distance theorem*: We prove the weak pinned Erdős distinct-distance conjecture. For every fixed ε > 0, all but $o(n)$ points of any n-point planar set determine at least $n^{1-\varepsilon}$ distinct nonzero distances.
- *A power saving for planar unit distances*: We prove a power saving for the planar unit-distance problem: for some absolute $\beta\lt 4/3$, every set of n points in the Euclidean plane determines $O(n^\beta)$ unordered pairs at unit distance.
- Lean scope (lean/docs/167.md): The formalized result shows that large repeated distance fibers are rare in arbitrary finite planar point sets. For each fixed $s>0$, the largest possible fraction of ordered distinct pairs $(x,y)$ whose distance from the pin $x$ occurs at least $n^s$ times tends to zero as the set size $n$ grows.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 2 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [The weak pinned planar distance theorem](https://github.com/openai/math/blob/main/preprints/The-weak-pinned-planar-distance-theorem-September-23-2026/paper.pdf)
- Manuscript: [A power saving for planar unit distances](https://github.com/openai/math/blob/main/preprints/A-power-saving-for-planar-unit-distances-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/167.md
- Comparator statement (Weak pinned planar distance theorem): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/PinnedDistances.lean
- Comparator statement (Power saving for planar unit distances): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/PlanarUnitDistances.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
