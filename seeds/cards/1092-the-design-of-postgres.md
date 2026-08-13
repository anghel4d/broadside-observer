---
title: "The Design of POSTGRES"
authors:
  - "Michael Stonebraker"
  - "Lawrence A. Rowe"
year: 1986
venue: "SIGMOD"
arxiv: null
doi: "10.1145/16856.16888"
source: "https://doi.org/10.1145/16856.16888"
topics:
  - databases
  - postgres
  - extensibility
  - stonebraker
seed_rank: 1092
seed_batch: "perfects-systems-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 10
lineage: systems-classics
cites:
  - title: "The Design and Implementation of INGRES"
    url: "https://doi.org/10.1145/320440.320442"
    year: 1976
    arxiv: null
    doi: "10.1145/320440.320442"
    card: "1091-the-design-and-implementation-of-ingres"
  - title: "System R: Relational Approach to Database Management"
    url: "https://doi.org/10.1145/320455.320457"
    year: 1976
    arxiv: null
    doi: "10.1145/320455.320457"
    card: "1089-system-r-relational-approach-to-database-management"
  - title: "C-Store: A Column-Oriented DBMS"
    url: "https://doi.org/10.1109/ICDE.2005.32"
    year: 2005
    arxiv: null
    doi: "10.1109/ICDE.2005.32"
    card: "144-c-store-a-column-oriented-dbms"
  - title: "A Relational Model of Data for Large Shared Data Banks"
    url: "https://doi.org/10.1145/362384.362685"
    year: 1970
    arxiv: null
    doi: "10.1145/362384.362685"
    card: "048-a-relational-model-of-data-for-large-shared-data-banks"
---

# The Design of POSTGRES

## One-sentence takeaway

POSTGRES redesigns the DBMS around extensible types, rules, and ADTs—the blueprint for modern PostgreSQL.

## Why it matters here

Extensible catalogs and user-defined types are the living Stonebraker lesson for engine data layers.

## Key ideas

- Support for complex objects / extensible type system.
- Rule and procedure integration with the query engine.
- Crash recovery and storage redesigned post-INGRES.
- Direct ancestor of PostgreSQL.

## Caveats

- Classic; verify claims against the primary text before engineering decisions.

## Links

- DOI: [10.1145/16856.16888](https://doi.org/10.1145/16856.16888)
- URL: https://doi.org/10.1145/16856.16888
