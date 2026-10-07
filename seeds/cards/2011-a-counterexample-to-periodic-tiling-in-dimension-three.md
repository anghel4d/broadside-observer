---
title: "A counterexample to periodic tiling in dimension three"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 155; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/A-translational-tile-with-no-fully-periodic-tiling-in-dimension-three-September-23-2026/paper.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "combinatorics"
  - "lean4"
  - "formalized"
seed_rank: 2011
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "A translational tile with no fully periodic tiling in dimension three"
    url: "https://github.com/openai/math/blob/main/preprints/A-translational-tile-with-no-fully-periodic-tiling-in-dimension-three-September-23-2026/paper.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# A counterexample to periodic tiling in dimension three

## One-sentence takeaway

OpenAI's result family 155 (Combinatorics) claims: Constructs a finite translational tile in ℤ3 that tiles space but admits no fully periodic tiling, disproving the periodic tiling conjecture in the smallest possible lattice dimension.

## Why it matters here

Combinatorics is where the library's procedural-generation, graph and grid work (GRID COMMAND maps, tilings, WFC) gets its theory. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Its unit-cube thickening gives the same counterexample in ℝ3, even with arbitrary real translation vectors.
- *A translational tile with no fully periodic tiling in dimension three*: We construct a finite translational tile in ℤ3 that admits tilings but no fully periodic tiling. Its unit-cube thickening has the same property in ℝ3, even when arbitrary real translations are allowed. This gives a negative resolution of the periodic tiling conjecture in dimension three.
- Lean scope (lean/docs/155.md): The periodic-tiling question asks whether a finite tile that tiles a lattice must admit a periodic tiling. The formalized counterexample is a finite tile in $\mathbb Z^3$ that tiles but has no complement invariant under a finite-index subgroup.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 1 Comparator challenge statement(s), and that note defines which statements are covered. Do not read the Lean coverage as the full content of every manuscript in the family.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [A translational tile with no fully periodic tiling in dimension three](https://github.com/openai/math/blob/main/preprints/A-translational-tile-with-no-fully-periodic-tiling-in-dimension-three-September-23-2026/paper.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/155.md
- Comparator statement (Aperiodic translational tile in dimension three): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/PeriodicTilingThree.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
