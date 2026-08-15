---
title: "An Analysis of Alpha-Beta Pruning"
authors:
  - "Donald E. Knuth"
  - "Ronald W. Moore"
year: 1975
venue: "Artificial Intelligence"
arxiv: null
doi: "10.1016/0004-3702(75)90019-3"
source: "https://doi.org/10.1016/0004-3702(75)90019-3"
topics:
  - search
  - alphabeta
seed_rank: 379
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "game-ai"
relevance_score: 8
cites:
  - title: "Programming a Computer for Playing Chess"
    url: "https://doi.org/10.1080/14786445008521796"
    year: 1950
    arxiv: null
    doi: "10.1080/14786445008521796"
  - title: "Some Studies in Machine Learning Using the Game of Checkers"
    url: "https://doi.org/10.1147/rd.33.0210"
    year: 1959
    arxiv: null
    doi: "10.1147/rd.33.0210"
see:
  - "381-programming-a-computer-for-playing-chess"
---

# An Analysis of Alpha-Beta Pruning

## One-sentence takeaway

Knuth and Moore prove that α-β examines Θ(b^{d/2}) leaves in the best move-ordering and never more than the full minimax tree, so move ordering — not a fancier search — is the whole game.

## Why it matters here

Any GRID COMMAND tactical search that still looks like minimax (weapon ranges, cover graphs, small perfect-information scraps) lives under this bound. Deepen only if you can order moves; otherwise you pay the full b^d.

## Key ideas

- α-β is exactly minimax with two bounds that prune branches which cannot affect the root value.
- Best-case leaf count is ~2b^{d/2} − 1 (deep cutoffs on every other level); worst case is the entire tree.
- Node types (PV / CUT / ALL in later jargon) already appear in the analysis: the first successor of a PV node must be searched fully.
- Justifies iterative deepening + history / killer / TT move ordering as the practical way to approach the best-case bound.

## Caveats

## Links

- DOI: https://doi.org/10.1016/0004-3702(75)90019-3
