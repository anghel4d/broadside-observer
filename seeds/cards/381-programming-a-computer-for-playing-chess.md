---
title: "Programming a Computer for Playing Chess"
authors:
  - "Claude E. Shannon"
year: 1950
venue: "Philosophical Magazine"
arxiv: null
doi: "10.1080/14786445008521796"
source: "https://doi.org/10.1080/14786445008521796"
topics:
  - search
  - games
seed_rank: 381
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "game-ai"
relevance_score: 8
cites:
  - title: "An Analysis of Alpha-Beta Pruning"
    url: "https://doi.org/10.1016/0004-3702(75)90019-3"
    year: 1975
    arxiv: null
    doi: "10.1016/0004-3702(75)90019-3"
see:
  - "379-an-analysis-of-alpha-beta-pruning"
---

# Programming a Computer for Playing Chess

## One-sentence takeaway

Shannon states the game-tree search program: a minimax over a legal-move generator plus an evaluation function, because the full chess tree (~10^{120}) cannot be enumerated.

## Why it matters here

Every later game-AI search card in this pool — α-β, MCTS, GOAP — is a footnote to this 1950 paper. GRID COMMAND’s “look ahead N plies on a tiny combat graph” is Type-A Shannon search; the evaluation function is still the part you actually design.

## Key ideas

- Type A: search all moves to a fixed depth, then evaluate. Type B: explore only “plausible” lines more deeply — the ancestor of pruning and selective search.
- Evaluation is a weighted sum of material and positional features; the machine does not “understand” chess, it compares numbers.
- Quiescence / don’t stop mid-capture is already flagged: horizon effects live here.
- The paper is a program design, not a working engine; Turing, Bernstein, and Kotok/McCarthy built the first runners.

## Caveats

## Links

- DOI: https://doi.org/10.1080/14786445008521796
- Reprint PDF: https://vision.unipv.it/IA/Shannon1950.pdf
