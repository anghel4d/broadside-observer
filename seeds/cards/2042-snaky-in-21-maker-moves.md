---
title: "Snaky in 21 Maker moves"
authors:
  - "OpenAI (internal model)"
year: 2026
venue: "openai/math manuscript collection (GitHub), result family 187; unreviewed"
arxiv: null
doi: null
source: "https://github.com/openai/math/blob/main/preprints/Snaky-in-21-Maker-moves-September-25-2026/article.pdf"
topics:
  - "openai-math"
  - "ai-generated-math"
  - "combinatorics"
  - "lean4"
  - "formalized"
seed_rank: 2042
seed_batch: "openai-math-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 8
lineage: ai-mathematical-reasoning
cites:
  - title: "Snaky in 21 Maker moves"
    url: "https://github.com/openai/math/blob/main/preprints/Snaky-in-21-Maker-moves-September-25-2026/article.pdf"
    year: 2026
    arxiv: null
    doi: null
---

# Snaky in 21 Maker moves

## One-sentence takeaway

OpenAI's result family 187 (Combinatorics) claims: Settles the Snaky achievement problem: Maker can force the six-cell Snaky shape within 21 of its own moves on the initially empty infinite square board.

## Why it matters here

Combinatorics is where the library's procedural-generation, graph and grid work (GRID COMMAND maps, tilings, WFC) gets its theory. More broadly, every card in this batch is evidence for the `ai-mathematical-reasoning` thread: per the repo README, an unreleased internal OpenAI model produced it, using about three hours of ChatGPT Pro thinking compute per result on average, across roughly 4,000 posed problems. The Lean development makes the claim machine-checkable, which is the pattern Broadside cares about for agentic verification loops.

## Key ideas

- Family summary (repo): Maker moves first, each player claims one free cell per turn, and translations, rotations and reflections count as wins.
- *Snaky in 21 Maker moves*: We prove that Maker can achieve the Snaky hexomino within 21 actual Maker moves against arbitrary legal Breaker play on the initially empty infinite square board. The same bound holds on a $17\times17$ square; in fact, Maker can confine its claims to a fixed 251-cell board.
- Lean scope (lean/docs/187.md): In the Snaky Maker–Breaker game, the players alternately claim cells of $\mathbb Z^2$, and Maker seeks a translated, rotated, or reflected copy of the six-cell Snaky shape. The formalization gives a legal strategy that wins within $21$ actual Maker moves against every legal Breaker play from the empty infinite board.

## Caveats

- Unreviewed: these are AI-generated manuscripts posted to GitHub with no peer review or arXiv deposit. The repo README says results are "at different stages of verification" and that "some of the unformalized results could have issues."
- This card restates the repo's family summary, manuscript abstracts and Lean scope notes. It is not an independent check of the proofs, and the scope of each theorem is exactly as stated there.
- Lean: formalized in part. The repo has a scope note listing 3 Comparator challenge statement(s), and that note defines which statements are covered. Scope limits it states: The linked supplements reconstruct the older $35$-move appendix's finite recursive certificate and prove four conditional winning templates from partial positions, assuming the required Maker cells are present and Breaker avoids the corresponding finite envelope.
- A grep of the repo's `lean/OAI` tree found no `sorry` and no top-level `axiom` declarations. The library was not compiled for this card, and Comparator was not run.

## Links

- Manuscript: [Snaky in 21 Maker moves](https://github.com/openai/math/blob/main/preprints/Snaky-in-21-Maker-moves-September-25-2026/article.pdf)
- Lean scope: https://github.com/openai/math/blob/main/lean/docs/187.md
- Comparator statement (Reconstruction of the 35-move Snaky certificate): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/SnakyCertificate.lean
- Comparator statement (Conditional winning templates from finite partial positions): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/SnakyConditional.lean
- Comparator statement (Legal Snaky winning strategy within 21 Maker moves): https://github.com/openai/math/blob/main/lean/ComparatorChallenges/SnakyTwentyOne.lean
- Family entry: https://github.com/openai/math/blob/main/CONTENTS.md
- Overview PDF: https://github.com/openai/math/blob/main/overview.pdf
- Repo: https://github.com/openai/math
