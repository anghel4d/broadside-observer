---
title: "Moving AI Lab / Grid-Based Path Planning Competition"
authors:
  - "Nathan Sturtevant"
  - "Daniel Harabor"
year: 2012
venue: "MovingAI / GPPC"
arxiv: null
doi: null
source: "https://movingai.com/GPPC/"
topics:
  - pathfinding
  - benchmarks
seed_rank: 476
seed_batch: "lineage-shallow-2026-08-13"
reviewed: "2026-08-13"
pool: "game-ai"
relevance_score: 8
lineage: pathfinding
cites:
  - title: "Benchmarks for Grid-Based Pathfinding"
    url: "https://doi.org/10.1109/TCIAIG.2012.2197681"
    year: 2012
    doi: "10.1109/TCIAIG.2012.2197681"
  - title: "Online Graph Pruning for Pathfinding on Grid Maps"
    url: "https://doi.org/10.1609/aaai.v25i1.7994"
    year: 2011
    doi: "10.1609/aaai.v25i1.7994"
see:
  - "196-online-graph-pruning-for-pathfinding-on-grid-maps"
---

# Moving AI Lab / Grid-Based Path Planning Competition

## One-sentence takeaway

MovingAI and the Grid-Based Path Planning Competition give a shared corpus of game/room/maze/city maps plus standard metrics so JPS, CPD, subgoal, and other grid planners can be compared on the same instances.

## Why it matters here

Evaluation harness for GRID COMMAND pathfinding: quote a MovingAI map and a GPPC metric instead of a homemade corridor when claiming a search is fast.

## Key ideas

- Sturtevant's 2012 TCIAIG paper released Dragon Age / Baldur's Gate / Warcraft / room / maze / city grids with canonical scenarios.
- GPPC (hosted at movingai.com/GPPC) runs timed competitions for any-angle and grid algorithms, including JPS+/CPD/subgoal entries.
- Common metrics: path length, node expansions, preprocessed memory, and first-move lag.
- Living portal; cite the specific map set and year when reporting numbers, not just "MovingAI."

## Caveats

## Links

- GPPC: https://movingai.com/GPPC/
- Map sets: https://movingai.com/benchmarks/
