---
title: 'Field D*: An Interpolation-Based Path Planner'
authors:
- Dave Ferguson
- Anthony Stentz
year: 2006
venue: JFR
arxiv: null
doi: 10.1002/rob.20147
source: https://doi.org/10.1002/rob.20147
topics:
- pathfinding
- any-angle
seed_rank: 717
seed_batch: lineage-shallow-2026-08-13
reviewed: '2026-08-13'
pool: game-ai
relevance_score: 8
lineage: pathfinding
cites:
- title: 'Theta*: Any-Angle Path Planning on Grids'
  url: https://doi.org/10.1613/jair.2994
  year: 2010
  arxiv: null
  doi: null
- title: 'Lazy Theta*: Any-Angle Path Planning and Path Length Analysis'
  url: https://doi.org/10.1609/aaai.v24i1.7566
  year: 2010
  arxiv: null
  doi: null
- title: A Formal Basis for the Heuristic Determination of Minimum Cost Paths
  url: https://doi.org/10.1109/TSS.1968.253136
  year: 1968
  arxiv: null
  doi: null
see:
- "435-theta-any-angle-path-planning-on-grids"
- "429-lazy-theta-any-angle-path-planning-and-path-length-analysis"
- "262-a-formal-basis-for-the-heuristic-determination-of-minimum-co"
---

# Field D*: An Interpolation-Based Path Planner

## One-sentence takeaway

Field D* interpolates costs for any-angle paths on grids — precursor energy to Theta*/Lazy Theta*.

## Why it matters here

Completes the any-angle side of the grid pathfinding spine beside JPS.

## Key ideas

- Interpolation inside grid cells for smoother paths.
- Dynamic replanning lineage (D*/Field D*).
- Motivates later Theta* line-of-sight successors.
- Useful when navmesh unavailable but short grid paths look jagged.

## Caveats

- Heavier than JPS for pure 8-connected optimal grid paths.
- Robotics origin — retune for games.

## Links

- DOI: [10.1002/rob.20147](https://doi.org/10.1002/rob.20147)
- URL: https://doi.org/10.1002/rob.20147
