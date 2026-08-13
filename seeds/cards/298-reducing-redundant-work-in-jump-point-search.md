---

title: "Reducing Redundant Work in Jump Point Search"
authors:
  - "Shizhe Zhao"
  - "Daniel Harabor"
  - "Peter J. Stuckey"
year: 2023
venue: "arXiv:cs.RO"
arxiv: "2306.15928"
doi: null
source: "https://arxiv.org/abs/2306.15928"
topics:
  - pathfinding
seed_rank: 298
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
  - "253-online-graph-pruning-for-pathfinding-on-grid-maps"
  - "342-improving-jump-point-search"
---

# Reducing Redundant Work in Jump Point Search

## One-sentence takeaway

JPS (Jump Point Search) is a state-of-the-art optimal algorithm for online grid-based pathfinding.

## Why it matters here

Classical game/RTS AI technique (non-LLM) for GRID COMMAND lineage (Reducing Redundant Work in Jump Point Search).

## Key ideas

- JPS (Jump Point Search) is a state-of-the-art optimal algorithm for online grid-based pathfinding.
- Widely used in games and other navigation scenarios, JPS nevertheless can exhibit pathological behaviours which are not well studied: (i) it may repeatedly scan the same area of the map to find successors; (ii) it may generate and expand suboptimal search nodes.
- In this work, we examine the source of these pathological behaviours, show how they can occur in practice, and propose a purely online approach, called Constrained JPS (CJPS), to tackle them efficiently.
- Experimental results show that CJPS has low overheads and is often faster than JPS in dynamically changing grid environments: by up to 7x in large game maps and up to 14x in pathological scenarios.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2306.15928](https://arxiv.org/abs/2306.15928)
- URL: https://arxiv.org/abs/2306.15928
