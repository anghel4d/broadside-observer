---
title: "Dancing Links"
authors:
  - "Donald E. Knuth"
year: 2000
venue: "Millennial Perspectives in Computer Science (2000), 187–214"
arxiv: "cs/0011047"
doi: null
source: "https://arxiv.org/abs/cs/0011047"
topics:
  - exact-cover
  - backtracking
  - reversible-data-structures
  - constraint-search
seed_rank: 2357
seed_batch: "archive-2026-10-20"
reviewed: "2026-10-20"
pool: "languages"
relevance_score: 8
lineage: algorithms-and-complexity
see:
  - 803-a-machine-program-for-theorem-proving
  - 1004-treat-a-better-match-algorithm-for-ai-production-systems
  - 591-guarded-commands-nondeterminacy-and-formal-derivation-of-pro
cites:
  - title: "Dancing Links"
    url: "https://arxiv.org/abs/cs/0011047"
    year: 2000
    arxiv: "cs/0011047"
    doi: null
---

# Dancing Links

## One-sentence takeaway

Knuth observes that a node removed from a doubly linked list by L[R[x]] ← L[x], R[L[x]] ← R[x] can be put back by L[R[x]] ← x, R[L[x]] ← x because its own links still remember its neighbours, and builds on that the DLX implementation of "Algorithm X" for exact cover — a sparse 0/1 matrix of four-way-linked nodes whose cover and uncover operations undo each other exactly, with a "choose the column with fewest 1s" heuristic — then uses it to settle a run of polyomino, polyiamond and polystick puzzles.

## Why it matters here

Backtracking with exact undo is the core of several things Anoptic and GRID COMMAND will want: placement and layout solvers for procedural maps and tile sets, puzzle and scenario generators that need all solutions or a proof there are none, and constraint checks in the rule engine. DLX shows how to make undo free (no trail of old values, only the node pointer) and how a generalized form with primary and secondary columns encodes "exactly once" versus "at most once" constraints, which is enough to model many placement rules directly.

## Key ideas

- **Reversible unlink.** Operation (2) restores a removed node knowing only x; Knuth credits the idea to Hitotumatu and Noshita (1979), who used it to nearly double the speed of Dijkstra's N-queens program.
- **Exact cover as a matrix.** Rows are choices, columns are constraints; a solution is a set of rows with exactly one 1 in each column. Scott's pentomino problem becomes 72 columns (12 pieces + 60 cells) and one row per placement.
- **Algorithm X.** Pick a column c, try each row r with a 1 in c, include r, delete every column r covers and every row clashing with them, recurse, then restore in reverse order.
- **DLX representation.** Each 1 is a node with L, R, U, D links and a pointer to its column header; headers keep a size count; cover(c) unlinks c's header and the rows meeting c, uncover(c) relinks them in exactly reverse order.
- **S heuristic.** Branch on the column with the fewest remaining 1s. In Knuth's measurements it multiplies memory accesses per update (about 14 instead of 8) but cuts the search tree enough to win on large problems, so DLX keeps it at every level.
- **Generalized cover.** Secondary columns must be covered at most once (their headers are left out of the active list); this handles polysticks that may not cross at interior junctions and N-queens diagonals.
- **Results.** Among others: the 6×10 pentomino rectangle's 2339 solutions, the 156 tilings of a 6×6 rhombus by the twelve hexiamonds, a census of O'Beirne's hexiamond hexagon problem that agreed with Paulhus after his rerun, and the 5×5 tetrastick problems; Knuth reports throughput in "mega-updates per second" on 1990s hardware.

## Caveats

DLX is exhaustive search; it does not learn, propagate beyond column counts, or exploit symmetry unless the encoding does (Knuth breaks symmetry by hand, for example fixing the X pentomino). Linked structures are pointer-chasing and cache-unfriendly on modern machines, and SAT or CP solvers usually win on large structured instances. Knuth later revised and extended the method in The Art of Computer Programming, Volume 4B; this card is on the 2000 paper.

## Links

- Paper (arXiv): https://arxiv.org/abs/cs/0011047
- Paper (arXiv PDF): https://arxiv.org/pdf/cs/0011047
