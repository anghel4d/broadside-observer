---
title: "Parallel Monte-Carlo Tree Search"
authors:
  - "Guillaume M. J-B. Chaslot"
  - "Mark H. M. Winands"
  - "H. Jaap van den Herik"
year: 2008
venue: "Computers and Games"
arxiv: null
doi: "10.1007/978-3-540-87608-3_6"
source: "https://doi.org/10.1007/978-3-540-87608-3_6"
topics:
  - mcts
  - parallel
seed_rank: 354
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "game-ai"
relevance_score: 8
cites:
  - title: "Efficient Selectivity and Backup Operators in Monte-Carlo Tree Search"
    url: "https://doi.org/10.1007/978-3-540-75538-8_7"
    year: 2007
    arxiv: null
    doi: "10.1007/978-3-540-75538-8_7"
  - title: "Bandit Based Monte-Carlo Planning"
    url: "https://doi.org/10.1007/11871842_29"
    year: 2006
    arxiv: null
    doi: "10.1007/11871842_29"
  - title: "On the Parallelization of UCT"
    url: "https://hal.science/hal-00189437"
    year: 2007
    arxiv: null
    doi: null
see:
  - "289-efficient-selectivity-and-backup-operators-in-monte-carlo-tr"
---

# Parallel Monte-Carlo Tree Search

## One-sentence takeaway

Chaslot et al. compare leaf, root, and tree parallelization of MCTS and show that root parallelization wins on 13×13 Go unless virtual loss plus local mutexes make shared-tree search scale.

## Why it matters here

Broadside / GRID COMMAND planners that grow a search tree per tick need a parallelism story that is not “take a global lock around UCT.” Leaf vs root vs tree is the menu: independent trees merge at the root, or one shared tree with virtual-loss repulsion so worker threads do not clone the same line.

## Key ideas

- Leaf parallelization: one thread walks the tree, then N independent playouts fire from the same leaf — simple, but wait-for-slowest and no information sharing.
- Root parallelization: N independent MCTS trees, scores summed at the root; almost linear GPS speedup and, in Mango, the best strength-speedup at short time controls.
- Tree parallelization: one shared tree; a global mutex caps speedup, local per-node mutexes plus Coulom’s virtual loss keep threads from stampeding the same child.
- Strength-speedup (time to match a single-thread Elo) is the right metric; raw games/second can lie.

## Caveats

## Links

- DOI: https://doi.org/10.1007/978-3-540-87608-3_6
- Author PDF: https://dke.maastrichtuniversity.nl/m.winands/documents/multithreadedMCTS2.pdf
