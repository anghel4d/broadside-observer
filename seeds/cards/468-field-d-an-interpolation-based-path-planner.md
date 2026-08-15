---
title: "Field D*: An Interpolation-Based Path Planner"
authors:
  - "Dave Ferguson"
  - "Anthony Stentz"
year: 2006
venue: "Journal of Field Robotics"
arxiv: null
doi: "10.1002/rob.20109"
source: "https://doi.org/10.1002/rob.20109"
topics:
  - pathfinding
  - any-angle
seed_rank: 468
seed_batch: "lineage-shallow-2026-08-13"
reviewed: "2026-08-13"
pool: "game-ai"
relevance_score: 8
lineage: pathfinding
cites:
  - title: "A Formal Basis for the Heuristic Determination of Minimum Cost Paths"
    url: "https://doi.org/10.1109/TSSC.1968.300136"
    year: 1968
    doi: "10.1109/TSSC.1968.300136"
  - title: "The Focussed D* Algorithm for Real-Time Replanning"
    url: "https://doi.org/10.1109/IROS.1995.525801"
    year: 1995
    doi: "10.1109/IROS.1995.525801"
see:
  - "205-a-formal-basis-for-the-heuristic-determination-of-minimum-co"
---

# Field D*: An Interpolation-Based Path Planner

## One-sentence takeaway

Field D* sits nodes on cell corners and linearly interpolates path cost along each neighboring edge so a planner can leave a cell at an arbitrary heading instead of the usual eight grid bearings.

## Why it matters here

Any-angle counterpart to JPS on GRID COMMAND maps: when navmesh is missing and 8-connected A* looks jagged, interpolate during search rather than post-smoothing.

## Key ideas

- Classical grid graphs force headings of \(k\pi/4\) and can be ~8% long even in open space; interpolation treats \(g\) as a continuous field sampled at corners.
- Closed-form minimization along each of the eight neighboring edges (D* Lite keys plus the interpolated `computeCost`) yields paths optimal under the linear-interpolation assumption.
- Incremental repair inherits D*/D* Lite: when cell costs change, only inconsistent nodes are re-expanded.
- Multi-resolution Field D* extends the same idea to nonuniform grids to cut memory on large sparse outdoor maps; fielded on Pioneer indoor robots and outdoor XUVs, including Mars rover-related work.

## Caveats

## Links

- DOI: [10.1002/rob.20109](https://doi.org/10.1002/rob.20109)
- CMU PDF: https://publications.ri.cmu.edu/storage/publications/pub_files/pub4/ferguson_david_2006_3/ferguson_david_2006_3.pdf
