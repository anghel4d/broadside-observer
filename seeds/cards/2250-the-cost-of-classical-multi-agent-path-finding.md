---
title: "The Cost of Classical Multi-Agent Path Finding"
authors:
  - "Alvin Combrink"
  - "Sabino Francesco Roselli"
  - "Martin Fabian"
year: 2026
venue: "arXiv"
arxiv: "2610.10100"
doi: null
source: "https://arxiv.org/abs/2610.10100"
topics:
  - "strategy-rts-agents"
  - "ecs-data-oriented-simulation"
seed_rank: 2250
seed_batch: "frontier-2026-10-08"
reviewed: "2026-10-08"
pool: "game-ai"
relevance_score: 7
lineage: pathfinding
cites:
  - title: "The Cost of Classical Multi-Agent Path Finding"
    url: "https://arxiv.org/abs/2610.10100"
    year: 2026
    arxiv: "2610.10100"
    doi: null
see:
  - "294-near-optimal-hierarchical-pathfinding-hpa"
  - "1433-crowd-pathfinding-and-steering-using-flow-field-tiles"
  - "212-jump-point-search-pathfinding-in-4-connected-grids"
---

# The Cost of Classical Multi-Agent Path Finding

## One-sentence takeaway

Classical grid MAPF (discrete time, graph-edge conflicts) gives up real solution quality compared with continuous-time MAPF: about 5% on narrow maps and 17% on open maps on average, sometimes over 20%, and doubling the grid resolution wins back less than 3%.

## Why it matters here

GRID COMMAND moves squads of units on maps, and the usual engine move is grid-based pathfinding plus conflict rules (cards 294, 212, 1433). This paper quantifies when that simplification is fine (narrow corridors, large units relative to edges, cardinal-only moves) and when it isn't (open terrain). It also isolates why: the win comes from the richer set of move actions continuous time allows, not from continuous time or agent shape by themselves, which tells an engine designer which part is worth paying for.

## Key ideas

- **Comparison.** Optimal classical MAPF versus optimal continuous-time MAPF (MAPF_R) across agent counts and sizes, graph connectedness, topology and resolution.
- **Where the gain comes from.** Continuous time and agent shape alone are worth little; they matter because they enable an expanded set of move actions.
- **Magnitude.** On average at least 5% better on narrow and constrained maps and 17% on open maps, sometimes over 20%.
- **Compute can't buy it back.** Doubling map resolution under classical MAPF recovers under 3%, and refinement cannot go on indefinitely without breaking validity.
- **When classical is fine.** Narrow corridors, tight spaces, large agents relative to edges, and cardinal-only movement.

## Caveats

Results are for optimal solvers at the agent counts the authors could solve, not the hundreds of units of an RTS; suboptimal real-time planners and steering layers may shift the trade-off. The quality metric is solution cost, not runtime.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.10100
- PDF: https://arxiv.org/pdf/2610.10100
- Code: https://github.com/Adcombrink/classical-vs-continuous-mapf
