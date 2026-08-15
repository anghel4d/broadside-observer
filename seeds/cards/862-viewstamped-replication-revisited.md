---
title: Viewstamped Replication Revisited
authors:
- Barbara Liskov
- James Cowling
year: 2012
venue: MIT CSAIL Technical Report
arxiv: null
doi: null
source: "https://dspace.mit.edu/handle/1721.1/71763"
topics:
- databases
- contemporary-db
seed_rank: 862
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
  - title: "Practical Byzantine Fault Tolerance"
    url: "https://pmg.csail.mit.edu/papers/osdi99.pdf"
    year: 1999
    arxiv: null
    doi: null
see:
  - "790-paxos-made-simple"
  - "793-practical-byzantine-fault-tolerance"
---

# Viewstamped Replication Revisited

## One-sentence takeaway

This TR restates Viewstamped Replication as a crash-fault state-machine protocol with no disk in the common path: primary-ordered ops, view changes, recovery from peers, and a reconfiguration that can change both membership and f.

## Why it matters here

GRID COMMAND's replicated command log is a state machine. VR-Revisited is the readable, implementable primary-backup protocol (2f+1 replicas, f+1 quorum) that Raft later popularized, including how to do view change and node replace without a persistent redo log.

## Key ideas

- Three cooperating subprotocols: normal-case PREPARE/PREPARE-OK/COMMIT, view-change to elect a new primary, and recovery so a crashed replica relearns at least the state it had when it died.
- Persistence is the other replicas: no disk write on the consensus path, assuming failure independence (UPS / geo-placement).
- Client table + request numbers give exactly-once; backups execute committed ops quickly so a new primary is almost warm.
- Reconfiguration is itself a special client request that opens a new epoch; the new group state-transfers from the old one before taking writes.
- Optimizations that later showed up everywhere: witnesses (only f+1 run the service), batching, lease-protected reads at the primary, and stale-ok reads at backups.

## Caveats

## Links

- DSpace handle: http://hdl.handle.net/1721.1/71763
- PDF: https://dspace.mit.edu/bitstream/handle/1721.1/71763/MIT-CSAIL-TR-2012-021.pdf
