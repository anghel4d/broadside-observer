---
title: "Lock-Free Computation of PageRank in Dynamic Graphs"
authors:
  - "Subhajit Sahu"
year: 2024
venue: "IEEE IPDPSW 2024"
arxiv: "2407.19562"
doi: "10.1109/IPDPSW63119.2024.00148"
source: "https://arxiv.org/abs/2407.19562"
topics:
  - lockfree
seed_rank: 223
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
cites:
  - title: "The PageRank Citation Ranking: Bringing Order to the Web"
    url: "http://ilpubs.stanford.edu:8090/422/"
    year: 1999
    arxiv: null
    doi: null
  - title: "Fast incremental and personalized PageRank"
    url: "https://doi.org/10.14778/1929861.1929864"
    year: 2010
    arxiv: null
    doi: "10.14778/1929861.1929864"
  - title: "Dynamic Batch Parallel Algorithms for Updating PageRank"
    url: "https://doi.org/10.1109/IPDPSW55747.2022.00186"
    year: 2022
    arxiv: null
    doi: "10.1109/IPDPSW55747.2022.00186"
see: []
---

# Lock-Free Computation of PageRank in Dynamic Graphs

## One-sentence takeaway

Dynamic Frontier plus a lock-free, fault-tolerant PageRank (DF_LF) updates scores after edge edits without iteration barriers and stays live through random thread delays and crashes.

## Why it matters here

Anoptic influence / visibility graphs and Broadside citation-style rankings change every tick; a barrier-free iterative solver is how those scores keep moving when a worker stalls.

## Key ideas

- Barrier-based dynamic PageRank waits on the slowest vertex partition, which dominates runtime on skewed graphs.
- Dynamic Frontier first marks only the vertices whose ranks are likely to move after an insert/delete, so most of the graph is skipped.
- DF_LF then runs two lock-free phases with inter-thread helping, so a delayed or crashed worker does not freeze the iteration.
- Average speedup is 4.6× versus a lock-free naive-dynamic baseline (ND_LF).
- Published at IEEE IPDPSW 2024.

## Caveats

## Links

- arXiv: [2407.19562](https://arxiv.org/abs/2407.19562)
- DOI: [10.1109/IPDPSW63119.2024.00148](https://doi.org/10.1109/IPDPSW63119.2024.00148)
- PDF: https://arxiv.org/pdf/2407.19562
