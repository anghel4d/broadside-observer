---
title: "System R: Relational Approach to Database Management"
authors:
  - "M. M. Astrahan"
  - "M. W. Blasgen"
  - "D. D. Chamberlin"
  - "K. P. Eswaran"
  - "J. N. Gray"
  - "P. P. Griffiths"
  - "W. F. King"
  - "R. A. Lorie"
  - "P. R. McJones"
  - "J. W. Mehl"
  - "G. R. Putzolu"
  - "I. L. Traiger"
  - "B. W. Wade"
  - "V. Watson"
year: 1976
venue: "ACM TODS"
arxiv: null
doi: "10.1145/320455.320457"
source: "https://doi.org/10.1145/320455.320457"
topics:
  - databases
  - system-r
  - sql
  - transactions
seed_rank: 1089
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
  - title: "Access Path Selection in a Relational Database Management System"
    url: "https://doi.org/10.1145/582095.582099"
    year: 1979
    arxiv: null
    doi: "10.1145/582095.582099"
    card: "1090-access-path-selection-in-a-relational-database-management-sy"
  - title: "ARIES: A Transaction Recovery Method Supporting Fine-Granularity Locking and Partial Rollbacks Using Write-Ahead Logging"
    url: "https://doi.org/10.1145/128765.128770"
    year: 1992
    arxiv: null
    doi: "10.1145/128765.128770"
    card: "1093-aries-a-transaction-recovery-method-supporting-fine-granular"
---

# System R: Relational Approach to Database Management

## One-sentence takeaway

System R proved the relational model could be a full DBMS: SQL, cost-based optimization seeds, locking, and recovery in one research system.

## Why it matters here

The industrial proof that Codd's model ships—ancestor of DB2 and of every SQL engine mental model Anoptic might host.

## Key ideas

- SEQUEL/SQL as the interactive and embedded query language.
- RSS storage/recovery and RDS relational services split.
- Multi-user locking and transaction support in a research prototype.
- Direct path to Selinger optimizer and commercial DB2.

## Caveats

- Classic; verify claims against the primary text before engineering decisions.

## Links

- DOI: [10.1145/320455.320457](https://doi.org/10.1145/320455.320457)
- URL: https://doi.org/10.1145/320455.320457
