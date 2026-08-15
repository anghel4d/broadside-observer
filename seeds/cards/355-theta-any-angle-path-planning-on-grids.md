---
title: "Theta*: Any-Angle Path Planning on Grids"
authors:
  - "Alex Nash"
  - "Kenny Daniel"
  - "Sven Koenig"
  - "Ariel Felner"
year: 2007
venue: "AAAI"
arxiv: null
doi: null
source: "https://aaai.org/papers/01177-aaai07-187-theta-any-angle-path-planning-on-grids/"
topics:
  - pathfinding
  - any-angle
seed_rank: 355
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "game-ai"
relevance_score: 8
lineage: pathfinding
cites:
  - title: "A Formal Basis for the Heuristic Determination of Minimum Cost Paths"
    url: "https://doi.org/10.1109/TSSC.1968.300136"
    year: 1968
    arxiv: null
    doi: "10.1109/TSSC.1968.300136"
  - title: "Field D*: An Interpolation-Based Path Planner and Replanner"
    url: "https://doi.org/10.1007/11552246_23"
    year: 2005
    arxiv: null
    doi: "10.1007/11552246_23"
  - title: "Theta*: Any-Angle Path Planning on Grids"
    url: "https://doi.org/10.1613/jair.2994"
    year: 2010
    arxiv: null
    doi: "10.1613/jair.2994"
see:
  - "205-a-formal-basis-for-the-heuristic-determination-of-minimum-co"
  - "468-field-d-an-interpolation-based-path-planner"
---

# Theta*: Any-Angle Path Planning on Grids

## One-sentence takeaway

Theta* runs A* on a grid but lets a vertex’s parent be any visible ancestor, so paths are not chained to the eight grid headings.

## Why it matters here

GRID COMMAND units walking a navgrid look drunk if they only step to 8-neighbors. Theta* keeps the cheap grid search Anoptic already has and spends a line-of-sight test to cut corners — shorter, more realistic routes than A* plus a post-smoothing pass.

## Key ideas

- UpdateVertex considers Path 1 (parent = predecessor, like A*) and Path 2 (parent = parent-of-predecessor) when `lineofsight(parent(s), s′)` holds; the triangle inequality makes Path 2 no longer.
- Basic Theta* is simple but not shortest-path optimal; Angle-Propagation Theta* maintains per-vertex angle ranges so each LOS test is O(1).
- Compared with Field D* and A* + post-smoothing on Baldur’s Gate maps, Theta* paths are shorter and look more like visibility-graph geodesics.
- JAIR 2010 (doi:10.1613/jair.2994) is the expanded journal version; the 2007 AAAI paper has no DOI.

## Caveats

## Links

- AAAI page: https://aaai.org/papers/01177-aaai07-187-theta-any-angle-path-planning-on-grids/
- AAAI PDF: https://aaai.org/Papers/AAAI/2007/AAAI07-187.pdf
- JAIR 2010: https://doi.org/10.1613/jair.2994
