---
title: "Jump Point Search Pathfinding in 4-connected Grids"
authors:
  - "Johannes Baum"
year: 2025
venue: "arXiv:cs.RO"
arxiv: "2501.14816"
doi: null
source: "https://arxiv.org/abs/2501.14816"
topics:
  - pathfinding
seed_rank: 212
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "game-ai"
relevance_score: 9
lineage: pathfinding
cites:
  - title: "Online Graph Pruning for Pathfinding on Grid Maps"
    url: "https://doi.org/10.1609/aaai.v25i1.7994"
    year: 2011
    arxiv: null
    doi: "10.1609/aaai.v25i1.7994"
  - title: "Improving Jump Point Search"
    url: "https://ojs.aaai.org/index.php/ICAPS/article/view/13620"
    year: 2014
    arxiv: null
    doi: null
see:
  - "196-online-graph-pruning-for-pathfinding-on-grid-maps"
  - "266-improving-jump-point-search"
---

# Jump Point Search Pathfinding in 4-connected Grids

## One-sentence takeaway

JPS4 ports Harabor-style jump points onto 4-connected grids with a canonical ordering and successor function that prune the search online.

## Why it matters here

GRID COMMAND tiles are often 4-connected (cardinal moves only); JPS8's diagonal jumps do not apply, so this is the pruning analog for that topology.

## Key ideas

- JPS8 assumes 8-connected movement; JPS4 rebuilds the jump rules for cardinal-only grids.
- A canonical ordering plus a successor function skip symmetric paths so most empty cells are never expanded.
- Jump points sit at obstacle corners and reinitialize the canonical ordering so the search cannot miss a necessary detour.
- Benchmarks beat A* on high-obstacle-density maps; A* stays faster on open maps.
- The paper argues optimality of the 4-connected jump rules and positions JPS4 as a game-pathfinding alternative to A*.

## Caveats

## Links

- arXiv: [2501.14816](https://arxiv.org/abs/2501.14816)
- PDF: https://arxiv.org/pdf/2501.14816
