---
title: There is more consensus in Egalitarian parliaments
authors:
- Iulian Moraru
- David G. Andersen
- Michael Kaminsky
year: 2013
venue: SOSP
arxiv: null
doi: 10.1145/2517349.2517350
source: "https://doi.org/10.1145/2517349.2517350"
topics:
- databases
- contemporary-db
seed_rank: 863
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: contemporary-databases
cites:
  - title: "Paxos Made Simple"
    url: "https://lamport.azurewebsites.net/pubs/paxos-simple.pdf"
    year: 2001
    arxiv: null
    doi: null
  - title: "Viewstamped Replication Revisited"
    url: "https://dspace.mit.edu/handle/1721.1/71763"
    year: 2012
    arxiv: null
    doi: null
see:
  - "790-paxos-made-simple"
  - "862-viewstamped-replication-revisited"
---

# There is more consensus in Egalitarian parliaments

## One-sentence takeaway

EPaxos is leaderless Paxos: any replica can commit a non-interfering command in one WAN round-trip, and interfering commands are ordered by a dependency graph rather than a single leader's sequence.

## Why it matters here

A GRID COMMAND leader is a latency and failure hotspot once agents are geo-spread. EPaxos is the "commit at the nearest replica, serialize only when commands actually conflict" alternative to VR/Raft.

## Key ideas

- Clients send to any replica; non-interfering commands (swapping them would not change state or reads) commit concurrently.
- Fast path is one round-trip to a fast quorum; slow path falls back to classic Paxos-style agreement on the attribute (seq, deps) of the command.
- Execution order is a topological sort of the per-instance dependency graph, not a totally ordered log chosen by one leader.
- Load stays balanced; a slow or dead replica does not stall unrelated commands the way a Paxos leader would.
- Availability still requires a majority; the paper's interference definition is application-supplied (e.g. same key).

## Caveats

## Links

- DOI: [10.1145/2517349.2517350](https://doi.org/10.1145/2517349.2517350)
- PDF: https://sigops.org/s/conferences/sosp/2013/papers/p358-moraru.pdf
