---
title: "The Euclidean plane cannot be colored with five colors"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 158; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/The-Euclidean-plane-is-not-five-colorable-September-23-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "combinatorics"
  - "lean4"
  - "formalized"
seed_rank: 2014
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "The Euclidean plane is not five-colorable"
    url: "https://github.com/openai/math/blob/main/preprints/The-Euclidean-plane-is-not-five-colorable-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# The Euclidean plane cannot be colored with five colors

## One-sentence takeaway

OpenAI's result family 158 (Combinatorics) claims: Proves that every five-coloring of the Euclidean plane has a monochromatic pair at distance one, with no restriction on the color classes.

## Why it matters here

Combinatorics is where the library's procedural-generation, graph and grid work (GRID COMMAND maps, tilings, WFC) gets its theory. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): This advances the Hadwiger–Nelson problem: together with the classical seven-coloring, only six and seven remain possible chromatic numbers of the plane.
- *The Euclidean plane is not five-colorable*: We prove that every coloring of the Euclidean plane with five colors has a monochromatic unit-distance pair, with no regularity assumption on the color classes. Consequently, the chromatic number of the plane is either six or seven.
- Lean scope (lean/docs/158.md): The Hadwiger–Nelson problem asks for the fewest colors needed to color the plane so that points at distance one have different colors. The formalized results prove that five colors do not suffice and that seven colors do suffice.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 2 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: The lower bound applies to arbitrary colorings, with no measurability or continuity assumption; the upper bound includes every boundary point of the coloring regions.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [The Euclidean plane is not five-colorable](https://github.com/openai/math/blob/main/preprints/The-Euclidean-plane-is-not-five-colorable-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/158.md
- Comparator statement (No proper five-coloring): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/EuclideanFiveColor.lean
- Comparator statement (Proper seven-coloring): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/PlaneColoring.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
