---
title: "The History Heuristic and Alpha-Beta Search Enhancements in Practice"
authors:
  - "Jonathan Schaeffer"
year: 1989
venue: "IEEE Transactions on Pattern Analysis and Machine Intelligence 11(11), 1203–1212"
arxiv: null
doi: "10.1109/34.42858"
source: "https://webdocs.cs.ualberta.ca/~jonathan/publications/ai_publications/pami.pdf"
topics:
  - game-tree-search
  - move-ordering
  - alpha-beta
  - transposition-tables
seed_rank: 2376
seed_batch: "archive-2026-10-22"
reviewed: "2026-10-22"
pool: "game-ai"
relevance_score: 7
lineage: game-tree-search
see:
  - 379-an-analysis-of-alpha-beta-pruning
  - 381-programming-a-computer-for-playing-chess
  - 2233-a-new-hashing-method-with-application-for-game-playing
  - 113-portfolio-greedy-search-and-simulation-for-large-scale-comba
cites:
  - title: "The History Heuristic and Alpha-Beta Search Enhancements in Practice"
    url: "https://doi.org/10.1109/34.42858"
    year: 1989
    arxiv: null
    doi: "10.1109/34.42858"
---

# The History Heuristic and Alpha-Beta Search Enhancements in Practice

## One-sentence takeaway

Schaeffer orders moves at every interior node by a global table of how often each move (keyed only by its parameters, not the position) has been "sufficient" elsewhere in the tree — bumped by 2^depth each time it causes a cutoff or yields the best score — and then, by trying every combination of six alpha-beta enhancements in the chess program Phoenix, shows that history heuristic plus transposition tables deliver over 99% of the achievable tree-size reduction up to depth 8, with the rest adding almost nothing.

## Why it matters here

Any GRID COMMAND skirmish AI that searches (tactical alpha-beta over small engagements, or a portfolio search like card 113) lives or dies on move ordering, and the history heuristic is the cheapest ordering there is: one array, no domain knowledge, no per-position storage. The paper is also a model of the experiment we should run before adding search features — an exhaustive ablation over combinations, measured in a node count that tracks wall time, rather than assessing each trick in isolation.

## Key ideas

- **Operators recur across positions.** A move (from-square, to-square) can be applied in many positions; when nearby positions share the features that make a move good, its past success predicts future success. The heuristic exploits that without analogies or explicit knowledge.
- **What counts as success.** A move is "sufficient" at a node if it causes a cutoff, or, if no cutoff happens, yields the best minimax score. Its history score grows by 2^depth of the subtree searched, so successes near the root weigh more; weights of 1 and depth were tested and were worse.
- **Generalises the killer heuristic.** Killers remember one or two moves per ply; the history table remembers every move at every depth, so killer moves simply earn high scores.
- **Ablation design.** Base program is alpha-beta with iterative deepening; iterative deepening, transposition tables, refutation tables, minimal-window search, aspiration search, killer and history heuristics are toggled in all combinations on the Bratko–Kopec positions, measured by leaf count (NBP) and by total node count (NC), which correlates with Phoenix's running time.
- **Result.** History heuristic plus transposition tables account for more than 99% of the possible reductions through depth 8; the transposition table clearly beats the refutation table; with transposition tables, searched trees can be smaller than the minimal tree because transpositions are merged.
- **Parallel use.** Local history tables per processor, periodically merged and broadcast, noticeably improved a distributed searcher.

## Caveats

The evidence is one chess program on 24 test positions at depths up to 8 on 1980s hardware; modern engines combine history with many more signals (counter-move, continuation and capture histories, late-move reductions) and search far deeper, where the paper's ranking of enhancements may not hold. The 2^depth weighting overflows quickly at large depths and needs aging or scaling. RTS action spaces are not a fixed small move alphabet, so the key for "the same move" has to be designed (e.g. unit-type × target-type × action), and that choice decides whether the heuristic transfers at all.

## Links

- Paper (author PDF): https://webdocs.cs.ualberta.ca/~jonathan/publications/ai_publications/pami.pdf
- Paper (DOI, IEEE TPAMI): https://doi.org/10.1109/34.42858
