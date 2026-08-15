---
title: "On the Evolution of the MCTS Upper Confidence Bounds for Trees by Means of Evolutionary Algorithms in the Game of Carcassonne"
authors:
  - "Edgar Galván"
  - "Gavin Simpson"
year: 2021
venue: "arXiv:cs.NE"
arxiv: "2112.09697"
doi: null
source: "https://arxiv.org/abs/2112.09697"
topics:
  - mcts
seed_rank: 247
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "game-ai"
relevance_score: 9
cites:
  - title: "Parallel Monte-Carlo Tree Search"
    url: "https://doi.org/10.1007/978-3-540-87608-3_6"
    year: 2008
    arxiv: null
    doi: "10.1007/978-3-540-87608-3_6"
  - title: "Efficient Selectivity and Backup Operators in Monte-Carlo Tree Search"
    url: "https://doi.org/10.1007/978-3-540-75538-8_7"
    year: 2006
    arxiv: null
    doi: "10.1007/978-3-540-75538-8_7"
see:
  - "354-parallel-monte-carlo-tree-search"
  - "289-efficient-selectivity-and-backup-operators-in-monte-carlo-tr"
---

# On the Evolution of the MCTS Upper Confidence Bounds for Trees by Means of Evolutionary Algorithms in the Game of Carcassonne

## One-sentence takeaway

An evolution strategy (ES-MCTS) replaces the hand-tuned UCT formula with an evolved expression and beats five UCT variants, three star-minimax algorithms, and a random controller at Carcassonne.

## Why it matters here

GRID COMMAND planners that already run MCTS can treat the selection formula as a searchable object; this paper is evidence that UCT is not sacred and can be evolved per game.

## Key ideas

- MCTS quality is dominated by how the tree is grown; UCT is the usual exploration/exploitation knob and needs per-game tuning.
- Evolutionary algorithms search the space of mathematical expressions that could stand in for UCT.
- ES-MCTS is the full integration; a weaker "ES partially integrated in MCTS" variant is also reported.
- Test domain is Carcassonne, not Go — a stochastic, multi-score Eurogame where UCT defaults are less battle-tested.
- ES-MCTS outperforms all ten baseline controllers, including robust UCT settings.

## Caveats

## Links

- arXiv: [2112.09697](https://arxiv.org/abs/2112.09697)
- PDF: https://arxiv.org/pdf/2112.09697
