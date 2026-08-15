---
title: "Anna: A KVS for Any Scale"
authors:
- Chenggang Wu
- Jose M. Faleiro
- Yihan Lin
- Joseph M. Hellerstein
year: 2018
venue: ICDE
arxiv: null
doi: 10.1109/ICDE.2018.00044
source: "https://doi.org/10.1109/ICDE.2018.00044"
topics:
- databases
- contemporary-db
seed_rank: 865
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: contemporary-databases
cites:
  - title: "Coordination Avoidance in Database Systems"
    url: "https://doi.org/10.14778/2735508.2735509"
    year: 2014
    arxiv: null
    doi: "10.14778/2735508.2735509"
see:
  - "845-coordination-avoidance-in-database-systems"
---

# Anna: A KVS for Any Scale

## One-sentence takeaway

Anna is a wait-free, coordination-free key-value store that uses lattice composition and multi-master replication to run from one multicore box to a geo-distributed cloud without changing the execution model.

## Why it matters here

GRID COMMAND state starts as a process-local map and later needs to span machines. Anna is the "same lattice CRDT story at every scale" design, so you do not rewrite the store when the deployment grows.

## Key ideas

- Actors own private memory; there are no shared-memory locks or atomics on the data path — coordination is avoided, not hidden behind a lock manager.
- Values are lattices (and compositions of lattices); merges are associative, commutative, and idempotent, so multi-master replication is just join.
- Consistency is a lattice too: the user picks a point on the consistency continuum (causal, Read Committed-style, etc.) rather than a single global level.
- The same binary scales from a laptop to a geo-replicated cluster; partitioning and replication are configuration, not a new system.
- Follow-on work (Hydro / Cloudburst) reuses Anna as the coordination-free state tier for serverless.

## Caveats

## Links

- DOI: [10.1109/ICDE.2018.00044](https://doi.org/10.1109/ICDE.2018.00044)
- Author PDF: https://dsf.berkeley.edu/jmh/papers/anna_ieee18.pdf
