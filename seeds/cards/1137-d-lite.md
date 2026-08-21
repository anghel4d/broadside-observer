---
title: "D* Lite"
authors:
  - "Sven Koenig"
  - "Maxim Likhachev"
year: 2002
venue: "AAAI"
arxiv: null
doi: "10.5555/777092.777167"
source: "https://www.aaai.org/Papers/AAAI/2002/AAAI02-072.pdf"
topics:
  - "d-star-lite"
  - "incremental-search"
  - "replanning"
  - "grid-pathfinding"
seed_rank: 1137
seed_batch: "archive-2026-08-22"
reviewed: "2026-08-22"
pool: "game-ai"
relevance_score: 10
lineage: d-star-lite
cites:
  - title: "A Formal Basis for the Heuristic Determination of Minimum Cost Paths"
    url: "https://doi.org/10.1109/TSSC.1968.300136"
    year: 1968
    arxiv: null
    doi: "10.1109/TSSC.1968.300136"
  - title: "The Focussed D* Algorithm for Real-Time Replanning"
    url: "https://doi.org/10.1109/IROS.1995.525811"
    year: 1995
    arxiv: null
    doi: "10.1109/IROS.1995.525811"
  - title: "Near Optimal Hierarchical Pathfinding (HPA*)"
    url: "https://doi.org/10.1609/aiide.v1i1.18726"
    year: 2005
    arxiv: null
    doi: null
  - title: "Online Graph Pruning for Pathfinding on Grid Maps"
    url: "https://doi.org/10.1609/aaai.v25i1.7994"
    year: 2011
    arxiv: null
    doi: "10.1609/aaai.v25i1.7994"
see:
  - "205-a-formal-basis-for-the-heuristic-determination-of-minimum-co"
  - "294-near-optimal-hierarchical-pathfinding-hpa"
  - "196-online-graph-pruning-for-pathfinding-on-grid-maps"
  - "355-theta-any-angle-path-planning-on-grids"
---

# D* Lite

## One-sentence takeaway

Lifelong Planning A* aimed at the moving robot: search *from the goal*, reuse g/rhs when the map changes, and get Stentz D* behaviour in an algorithm you can actually implement.

## Why it matters here

A* (205) replans from scratch; HPA* (294) and JPS (196) shrink a *static* grid. RTS fog-of-war, destructible terrain, and Anoptic unit pathing are the other problem — edge costs change as the agent walks. Stentz D* (1995) did this on real HMMWVs and is famously hard to code. Koenig–Likhachev 2002 apply LPA* to the same setting: rhs-values, a priority queue keyed on \(\min(g,rhs)\) plus heuristic-to-start, and a short expand loop. Same paths as Focussed D*, one to two orders of magnitude cheaper than repeated A*, and the paper is eight pages of pseudocode you can type.

## Key ideas

- Search backward from the goal so the heuristic is toward the *current* start (the robot). When the robot moves or a cell is discovered blocked, only the locally inconsistent vertices re-enter the queue.
- `g` is the old estimate, `rhs` is the one-step lookahead over predecessors. A vertex is consistent iff `g = rhs`. The queue holds inconsistent vertices; expanding one restores consistency and may dirty neighbours.
- Inherits A* focusing and DynamicSWSF-FP incremental updates. Proofs (termination, optimality) come from LPA*, not from a D*-specific argument.
- Experiments: unknown-terrain navigation and mapping, against repeated A* and against D*.

## Caveats

- Grid / explicit graph. Any-angle (Theta* 355) and hierarchical (HPA* 294) are orthogonal — D* Lite can sit under them, it does not replace them.
- Priority-queue churn on large cost shocks can still hitch a frame; games often budget a cap on expansions per tick.
- The 2002 AAAI paper is the named algorithm; the ICRA companion is the same math with more robot-nav plots. Implement AAAI.

## Links

- AAAI 2002 PDF: [https://www.aaai.org/Papers/AAAI/2002/AAAI02-072.pdf](https://www.aaai.org/Papers/AAAI/2002/AAAI02-072.pdf)
- Author PDF: [https://idm-lab.org/bib/abstracts/papers/aaai02b.pdf](https://idm-lab.org/bib/abstracts/papers/aaai02b.pdf)
- DOI (ACM anthology): [10.5555/777092.777167](https://doi.org/10.5555/777092.777167)
- ICRA 2002 companion: [https://www.cs.cmu.edu/~maxim/files/dlite_icra02.pdf](https://www.cs.cmu.edu/~maxim/files/dlite_icra02.pdf)
