---
title: "The square achievement game on n × n boards"
authors:
  - "Sean Reid"
year: 2026
venue: "arXiv preprint"
arxiv: "2610.22410"
doi: null
source: "https://arxiv.org/abs/2610.22410"
topics:
  - "positional-games"
  - "combinatorial-game-theory"
  - "formal-verification"
  - "lean"
seed_rank: 2370
seed_batch: "curiosity-2026-10-21"
reviewed: "2026-10-21"
pool: "game-ai"
relevance_score: 7
cites:
  - title: "The square achievement game on n × n boards"
    url: "https://arxiv.org/abs/2610.22410"
    year: 2026
    arxiv: "2610.22410"
    doi: null
  - title: "Extremal binary matrices without constant 2-squares (Bacher and Eliahou)"
    url: "https://doi.org/10.4310/JOC.2010.v1.n1.a6"
    year: 2010
    arxiv: null
    doi: "10.4310/JOC.2010.v1.n1.a6"
see: ["2297-nim-heaps-in-the-game-of-cycles-the-parity-conjecture-fails-on-trees", "2027-classification-of-finite-euclidean-ramsey-configurations"]
---

# The square achievement game on n × n boards

## One-sentence takeaway

In the game where two players take turns claiming grid cells and the first to own the four corners of any axis-parallel square wins, the first player wins exactly when the board is at least 5 × 5, and from 6 × 6 upward a single one-paragraph rule built around a "plus" shape wins every board, with the whole proof checked in Lean 4.

## Why it's lovely

It is the kind of pencil-and-paper game you could teach a child, posed by Martin Erickson and open between 6 × 6 and 14 × 14 for over a decade: a colouring theorem settles boards of 15 and up, and no colouring argument can reach smaller ones. Reid's answer is not a giant lookup table but a human-readable strategy: build a plus (a stone with four cells at equal distance along the axes), whose arms each force a block, and whose last arm threatens two squares at once. A simulation theorem then shows one checked run on the 23 × 23 board covers every larger board. It is a lovely model of how to turn search into understanding, and of how game strategies for grid games (the bread and butter of RTS and puzzle AI) can be made provably correct.

## Key ideas

- **Rules.** Cells (r, c); a square is {(r, c), (r, c + s), (r + s, c), (r + s, c + s)}, s ≥ 1, no tilted squares. Maker–Maker convention: both race for the same goal, and a full board with no square is a draw.
- **Small boards.** n ≤ 4 is a draw (exhaustive refutation); n = 5 is a first-player win via a strategy table that is not purely forcing.
- **Plus rule.** For n ≥ 6, after the second reply every move of the rule is forcing, so the game tree branches freely at only two levels; checking a board means enumerating the opponent's first two replies and following forced chains. Checked on boards 6 to 17.
- **Simulation theorem.** The rule reads only the top-left 17 × 17 sub-board plus one computed cell, so any larger game is mirrored move for move by a game on the 23 × 23 board.
- **Formalization.** In Lean 4 on mathlib, the theorem states that the tree of the rule's own moves is winning, not just that some winning tree exists; search runs are discharged by evaluation, guarding against bugs like the one in a 2011 search program.

## Caveats

Concurrent computer searches by Adler announced the same win/loss verdicts for 6 to 14 (unrefereed), so the novelty is the explicit uniform strategy and the formal proof rather than the outcome itself. Preprint, not yet refereed. Optimal game length and the misère variant are not addressed.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.22410
- PDF: https://arxiv.org/pdf/2610.22410
- Bacher and Eliahou, Extremal binary matrices without constant 2-squares: https://doi.org/10.4310/JOC.2010.v1.n1.a6
