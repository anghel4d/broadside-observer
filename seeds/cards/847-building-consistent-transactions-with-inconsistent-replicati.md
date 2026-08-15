---
title: Building Consistent Transactions with Inconsistent Replication
authors:
- Irene Zhang
- Naveen K. Sharma
- Adriana Szekeres
- Arvind Krishnamurthy
- Dan R. K. Ports
year: 2015
venue: SOSP
arxiv: null
doi: 10.1145/2815400.2815404
source: "https://doi.org/10.1145/2815400.2815404"
topics:
- databases
- contemporary-db
seed_rank: 847
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: contemporary-databases
cites: []
---

# Building Consistent Transactions with Inconsistent Replication

## One-sentence takeaway

TAPIR builds strictly serializable transactions on inconsistent replication (IR): replicas agree that an operation happened but not on a total order, and optimistic concurrency control at the transaction layer supplies the order, cutting a duplicated consensus round (about 50% lower commit latency and >2× throughput vs. conventional replicated OCC in the paper).

## Why it matters here

Spanner/Cockroach pay Paxos *and* 2PC. TAPIR’s lesson for a GRID COMMAND sharded store is: if the transaction protocol already decides the serial order, do not also totally order the replication log. IR + OCC is the cheaper split.

## Key ideas

- IR exposes an unordered set of successful operations at a majority of replicas; different replicas may execute them in different orders.
- Clients run OCC: execute speculatively, prepare/validate at the relevant replica groups, commit only if no conflicting prepare succeeded.
- Validation, not the replication layer, is what enforces strict serializability (and timestamped consistent reads).
- TAPIR-KV is the prototype store; later TOCS 2018 is the extended version of the same design.

## Caveats

## Links

- DOI: [10.1145/2815400.2815404](https://doi.org/10.1145/2815400.2815404)
- Author PDF: https://homes.cs.washington.edu/~arvind/papers/tapir.pdf
