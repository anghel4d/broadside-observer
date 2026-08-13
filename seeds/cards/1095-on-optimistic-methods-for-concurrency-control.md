---
title: "On Optimistic Methods for Concurrency Control"
authors:
  - "H. T. Kung"
  - "John T. Robinson"
year: 1981
venue: "ACM TODS"
arxiv: null
doi: "10.1145/319566.319567"
source: "https://doi.org/10.1145/319566.319567"
topics:
  - databases
  - optimistic-concurrency
seed_rank: 1095
seed_batch: "perfects-systems-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: systems-classics
cites:
  - title: "The Notions of Consistency and Predicate Locks in a Database System"
    url: "https://doi.org/10.1145/360363.360369"
    year: 1976
    arxiv: null
    doi: "10.1145/360363.360369"
    card: "1094-the-notions-of-consistency-and-predicate-locks-in-a-database"
  - title: "Concurrency Control in Distributed Database Systems"
    url: "https://doi.org/10.1145/356842.356846"
    year: 1981
    arxiv: null
    doi: "10.1145/356842.356846"
    card: "1097-concurrency-control-in-distributed-database-systems"
  - title: "The Transaction Concept: Virtues and Limitations"
    url: "https://www.vldb.org/conf/1981/P144.PDF"
    year: 1981
    arxiv: null
    doi: null
    card: "1096-the-transaction-concept-virtues-and-limitations"
---

# On Optimistic Methods for Concurrency Control

## One-sentence takeaway

Kung–Robinson optimistic concurrency control: read freely, validate at commit, avoid locks when conflicts are rare.

## Why it matters here

OCC/validation shows up in STM, MVCC variants, and game/sim speculative updates—foil to 2PL.

## Key ideas

- Read / validate / write phases.
- Backward and forward validation sketches.
- Lock-free optimistic path when conflict rates are low.
- Sets up later MVCC and STM lineages.

## Caveats

- Classic; verify claims against the primary text before engineering decisions.

## Links

- DOI: [10.1145/319566.319567](https://doi.org/10.1145/319566.319567)
- URL: https://doi.org/10.1145/319566.319567
