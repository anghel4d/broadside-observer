---
title: "The Design and Implementation of INGRES"
authors:
  - "Michael Stonebraker"
  - "Eugene Wong"
  - "Peter Kreps"
  - "Gerald Held"
year: 1976
venue: "ACM TODS"
arxiv: null
doi: "10.1145/320440.320442"
source: "https://doi.org/10.1145/320440.320442"
topics:
  - databases
  - ingres
  - stonebraker
seed_rank: 1091
seed_batch: "perfects-systems-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 10
lineage: systems-classics
cites:
  - title: "A Relational Model of Data for Large Shared Data Banks"
    url: "https://doi.org/10.1145/362384.362685"
    year: 1970
    arxiv: null
    doi: "10.1145/362384.362685"
    card: "048-a-relational-model-of-data-for-large-shared-data-banks"
  - title: "System R: Relational Approach to Database Management"
    url: "https://doi.org/10.1145/320455.320457"
    year: 1976
    arxiv: null
    doi: "10.1145/320455.320457"
    card: "1089-system-r-relational-approach-to-database-management"
  - title: "The Design of POSTGRES"
    url: "https://doi.org/10.1145/16856.16888"
    year: 1986
    arxiv: null
    doi: "10.1145/16856.16888"
    card: "1092-the-design-of-postgres"
  - title: "C-Store: A Column-Oriented DBMS"
    url: "https://doi.org/10.1109/ICDE.2005.32"
    year: 2005
    arxiv: null
    doi: "10.1109/ICDE.2005.32"
    card: "144-c-store-a-column-oriented-dbms"
---

# The Design and Implementation of INGRES

## One-sentence takeaway

INGRES showed a university-built relational system with QUEL, decomposition, and practical storage—Stonebraker's first major DBMS.

## Why it matters here

Sibling to System R; the Berkeley line that becomes Postgres and informs C-Store (144).

## Key ideas

- QUEL query language and query decomposition.
- Ambitious university implementation competing with System R.
- Interactive + embedded database access.
- Foundation for later Postgres extensibility agenda.

## Caveats

- Classic; verify claims against the primary text before engineering decisions.

## Links

- DOI: [10.1145/320440.320442](https://doi.org/10.1145/320440.320442)
- URL: https://doi.org/10.1145/320440.320442
