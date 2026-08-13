---
title: "The Notions of Consistency and Predicate Locks in a Database System"
authors:
  - "K. P. Eswaran"
  - "J. N. Gray"
  - "R. A. Lorie"
  - "I. L. Traiger"
year: 1976
venue: "Communications of the ACM"
arxiv: null
doi: "10.1145/360363.360369"
source: "https://doi.org/10.1145/360363.360369"
topics:
  - databases
  - two-phase-locking
  - concurrency
seed_rank: 1094
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
  - title: "The Transaction Concept: Virtues and Limitations"
    url: "https://www.vldb.org/conf/1981/P144.PDF"
    year: 1981
    arxiv: null
    doi: null
    card: "1096-the-transaction-concept-virtues-and-limitations"
  - title: "Concurrency Control in Distributed Database Systems"
    url: "https://doi.org/10.1145/356842.356846"
    year: 1981
    arxiv: null
    doi: "10.1145/356842.356846"
    card: "1097-concurrency-control-in-distributed-database-systems"
  - title: "ARIES: A Transaction Recovery Method Supporting Fine-Granularity Locking and Partial Rollbacks Using Write-Ahead Logging"
    url: "https://doi.org/10.1145/128765.128770"
    year: 1992
    arxiv: null
    doi: "10.1145/128765.128770"
    card: "1093-aries-a-transaction-recovery-method-supporting-fine-granular"
---

# The Notions of Consistency and Predicate Locks in a Database System

## One-sentence takeaway

Defines consistency via serializability and introduces predicate locks / two-phase locking as the practical concurrency-control contract.

## Why it matters here

2PL is still the default mental model when reasoning about transactional isolation in engines and tools.

## Key ideas

- Conflict serializability as correctness.
- Two-phase locking protocol.
- Predicate locks to close the phantom gap.
- System R concurrency-control foundation.

## Caveats

- Classic; verify claims against the primary text before engineering decisions.

## Links

- DOI: [10.1145/360363.360369](https://doi.org/10.1145/360363.360369)
- URL: https://doi.org/10.1145/360363.360369
