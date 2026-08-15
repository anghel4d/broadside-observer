---
title: "Don't settle for eventual consistency"
authors:
- Wyatt Lloyd
- Michael J. Freedman
- Michael Kaminsky
- David G. Andersen
year: 2014
venue: Communications of the ACM
arxiv: null
doi: 10.1145/2596624
source: "https://doi.org/10.1145/2596624"
topics:
- databases
- contemporary-db
seed_rank: 869
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: contemporary-databases
cites:
  - title: "Don't settle for eventual: scalable causal consistency for wide-area storage with COPS"
    url: "https://doi.org/10.1145/2043556.2043593"
    year: 2011
    arxiv: null
    doi: "10.1145/2043556.2043593"
---

# Don't settle for eventual consistency

## One-sentence takeaway

Causal+ consistency is the strongest model that stays available under partition, and COPS shows you can implement it at geo-scale instead of defaulting to eventual.

## Why it matters here

GRID COMMAND replicas and Broadside caches will be partitioned. This CACM piece is the readable argument that "eventual" is leaving a consistency free lunch on the table — causal+ plus ALPS (Availability, Low latency, Partition tolerance, Scalability) is achievable.

## Key ideas

- Eventual consistency permits reorderings users actually notice (comment before the post, shopping-cart resurrection). Causal+ forbids those while remaining ALPS-compatible; linearizability is not.
- COPS tracks explicit dependencies and checks them at the destination cluster before exposing a write; COPS-GT adds read-only transactions via a two-round protocol.
- After a partition heals, causal+ converges to the same state as a linearizable system would have, minus the unavailable window.
- The 2014 CACM article is the magazine rewrite of the SOSP 2011 COPS paper, aimed at practitioners choosing a default geo-replicated model.
- Takeaway for store design: pick causal+ unless you have a specific reason to go weaker or to pay for linearizability.

## Caveats

## Links

- DOI: [10.1145/2596624](https://doi.org/10.1145/2596624)
- Author PDF: https://www.cs.princeton.edu/~mfreed/docs/causal-cacm14.pdf
- SOSP 2011 COPS: https://sns.cs.princeton.edu/assets/papers/2011-sosp-lloyd.pdf
