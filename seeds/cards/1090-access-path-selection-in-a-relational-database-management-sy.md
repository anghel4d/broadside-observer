---
title: "Access Path Selection in a Relational Database Management System"
authors:
  - "P. Griffiths Selinger"
  - "M. M. Astrahan"
  - "D. D. Chamberlin"
  - "R. A. Lorie"
  - "T. G. Price"
year: 1979
venue: "SIGMOD"
arxiv: null
doi: "10.1145/582095.582099"
source: "https://doi.org/10.1145/582095.582099"
topics:
  - databases
  - query-optimization
  - system-r
seed_rank: 1090
seed_batch: "perfects-systems-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 10
lineage: systems-classics
cites:
  - title: "System R: Relational Approach to Database Management"
    url: "https://doi.org/10.1145/320455.320457"
    year: 1976
    arxiv: null
    doi: "10.1145/320455.320457"
    card: "1089-system-r-relational-approach-to-database-management"
  - title: "A Relational Model of Data for Large Shared Data Banks"
    url: "https://doi.org/10.1145/362384.362685"
    year: 1970
    arxiv: null
    doi: "10.1145/362384.362685"
    card: "048-a-relational-model-of-data-for-large-shared-data-banks"
---

# Access Path Selection in a Relational Database Management System

## One-sentence takeaway

Selinger et al. invent modern cost-based join enumeration: statistics, selectivity, and dynamic programming over access paths.

## Why it matters here

Still the conceptual OS of SQL optimizers—useful whenever Broadside discusses planners, ECS queries, or cost models.

## Key ideas

- Dynamic programming plan enumeration for joins.
- Catalog statistics and selectivity estimation.
- Interesting orders / sort avoidance.
- System R optimizer as the template for DB2/Postgres planners.

## Caveats

- Classic; verify claims against the primary text before engineering decisions.

## Links

- DOI: [10.1145/582095.582099](https://doi.org/10.1145/582095.582099)
- URL: https://doi.org/10.1145/582095.582099
