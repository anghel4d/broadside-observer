---
title: "Paxos Made Live: An Engineering Perspective"
authors:
- Tushar Chandra
- Robert Griesemer
- Joshua Redstone
year: 2007
venue: PODC
arxiv: null
doi: 10.1145/1281100.1281103
source: "https://research.google.com/archive/paxos_made_live.html"
topics:
- databases
- contemporary-db
seed_rank: 839
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: contemporary-databases
cites: []
---

# Paxos Made Live: An Engineering Perspective

## One-sentence takeaway

Chandra, Griesemer, and Redstone recount turning Multi-Paxos into Chubby’s replicated database: thousands of lines around one page of pseudocode, with master leases, disk-corruption handling, snapshots, group membership, and a MultiOp primitive filling gaps the theory papers left open.

## Why it matters here

Bigtable, GFS, and Spanner all sit on Chubby, and Chubby sits on this paper. If Anoptic or GRID COMMAND ever elect a leader or store a tiny consistent metadata table, read this before “just running Raft” — the hard parts are leases, catch-up, and operator error, not the accept phase.

## Key ideas

- Multi-Paxos with a sticky master plus batching reduces the algorithm to one disk flush per instance on the critical path; master leases let the master serve local reads without a round of Paxos.
- Disk corruption can make a replica renege on a promise; checksums, GFS markers, and a non-voting catch-up period restore the assumption.
- Snapshots are application-owned; a snapshot handle ties the truncated log to a consistent prefix, and catch-up may ship a snapshot plus remaining entries.
- MultiOp (guard / t_op / f_op) gives atomic compare-and-swap style transactions on the tiny key-value database without a general txn engine.

## Caveats

## Links

- Google Research: https://research.google.com/archive/paxos_made_live.html
- PDF: https://research.google.com/archive/paxos_made_live.pdf
- DOI: [10.1145/1281100.1281103](https://doi.org/10.1145/1281100.1281103)
