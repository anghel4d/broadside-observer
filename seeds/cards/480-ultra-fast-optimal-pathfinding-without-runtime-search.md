---
title: "Ultra-Fast Optimal Pathfinding without Runtime Search"
authors:
  - "Adi Botea"
year: 2011
venue: "AIIDE"
arxiv: null
doi: "10.1609/aiide.v7i1.12443"
source: "https://doi.org/10.1609/aiide.v7i1.12443"
topics:
  - pathfinding
  - cpd
seed_rank: 480
seed_batch: "lineage-shallow-2026-08-13"
reviewed: "2026-08-13"
pool: "game-ai"
relevance_score: 9
lineage: pathfinding
cites:
  - title: "A Formal Basis for the Heuristic Determination of Minimum Cost Paths"
    url: "https://doi.org/10.1109/TSSC.1968.300136"
    year: 1968
    doi: "10.1109/TSSC.1968.300136"
see:
  - "205-a-formal-basis-for-the-heuristic-determination-of-minimum-co"
---

# Ultra-Fast Optimal Pathfinding without Runtime Search

## One-sentence takeaway

Botea's compressed path databases precompute the first optimal move from every cell toward every other cell, then run-length / rectangle-encode those move tables so runtime pathfinding is a lookup, not an A* expansion.

## Why it matters here

Static GRID COMMAND maps can trade preprocess memory for first-move lag that does not grow with path length — the right extreme opposite of online JPS.

## Key ideas

- All-pairs first-move tables answer "which neighbor is on some optimal path to t?" in constant time after compression.
- Rectangle and run-length encodings exploit the large constant-move regions of game grids so the table fits in RAM.
- Optimal paths are reconstructed by walking first moves; no open list, no heuristic.
- Complements JPS when the map is mostly static; dynamic terrain forces a rebuild or a hybrid with online search.

## Caveats

## Links

- DOI: [10.1609/aiide.v7i1.12443](https://doi.org/10.1609/aiide.v7i1.12443)
