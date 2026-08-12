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
seed_rank: 271
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
    card: "253-online-graph-pruning-for-pathfinding-on-grid-maps"
  - title: "Improving Jump Point Search"
    url: "https://ojs.aaai.org/index.php/ICAPS/article/view/13620"
    year: 2014
    arxiv: null
    doi: null
    card: "342-improving-jump-point-search"
---

# Jump Point Search Pathfinding in 4-connected Grids

## One-sentence takeaway

This work introduces JPS4, a novel pathfinding algorithm for 4-connected grid maps.

## Why it matters here

Classical game/RTS AI technique (non-LLM) for GRID COMMAND lineage (Jump Point Search Pathfinding in 4-connected Grids).

## Key ideas

- This work introduces JPS4, a novel pathfinding algorithm for 4-connected grid maps.
- JPS4 builds upon the Jump Point Search (JPS8) algorithm, originally designed for 8-connected environments.
- To achieve efficient pathfinding on 4-connected grids, JPS4 employs a canonical ordering and a successor function that enable online graph pruning.
- This reduces the search space by minimizing unnecessary node expansions.
- The core concept of JPS4 as well as JPS8 lies in the utilization of jump points.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2501.14816](https://arxiv.org/abs/2501.14816)
- URL: https://arxiv.org/abs/2501.14816
