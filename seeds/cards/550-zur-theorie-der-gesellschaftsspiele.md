---
title: "Zur Theorie der Gesellschaftsspiele"
authors:
  - "John von Neumann"
year: 1928
venue: "Mathematische Annalen"
arxiv: null
doi: "10.1007/BF01448847"
source: "https://doi.org/10.1007/BF01448847"
topics:
  - game-theory
  - minimax
  - von-neumann
seed_rank: 550
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "game-ai"
relevance_score: 8
lineage: foundations-of-computing
cites:
  - title: "Theory of Games and Economic Behavior"
    url: "https://press.princeton.edu/books/paperback/9780691130613/theory-of-games-and-economic-behavior"
    year: 1944
    arxiv: null
    doi: null
  - title: "Programming a Computer for Playing Chess"
    url: "https://doi.org/10.1080/14786445008521796"
    year: 1950
    arxiv: null
    doi: "10.1080/14786445008521796"
  - title: "The Logic Theory Machine: A Complex Information Processing System"
    url: "https://doi.org/10.1109/TIT.1956.1056797"
    year: 1956
    arxiv: null
    doi: "10.1109/TIT.1956.1056797"
see:
  - "551-theory-of-games-and-economic-behavior"
  - "381-programming-a-computer-for-playing-chess"
  - "580-the-logic-theory-machine-a-complex-information-processing-sy"
---

# Zur Theorie der Gesellschaftsspiele

## One-sentence takeaway

Von Neumann proves the minimax theorem for finite two-person zero-sum games: every such game has a value, achieved by mixed strategies.

## Why it matters here

Mathematical ancestor of adversarial search in GRID COMMAND and of every later game-AI card. Before there is a computer, there is already a theorem that "best play" is a well-defined number; Shannon's chess paper and the 1944 *Theory of Games* book are the two immediate descendants.

## Key ideas

- A finite zero-sum game is a payoff matrix; a mixed strategy is a probability vector over rows (or columns).
- Minimax: \(\max_x \min_y x^\top A y = \min_y \max_x x^\top A y\), so the game has a unique value.
- Pure-strategy saddle points are the special case; mixing is what guarantees existence in general.
- Leads directly to von Neumann–Morgenstern 1944, which adds utility theory and \(n\)-person coalitions.

## Caveats

## Links

- DOI: [10.1007/BF01448847](https://doi.org/10.1007/BF01448847)
- URL: https://doi.org/10.1007/BF01448847
