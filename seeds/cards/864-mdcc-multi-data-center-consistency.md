---
title: "MDCC: Multi-Data Center Consistency"
authors:
- Tim Kraska
- Gene Pang
- Michael J. Franklin
- Samuel Madden
year: 2012
venue: arXiv cs.DB
arxiv: "1203.6049"
doi: 10.48550/arXiv.1203.6049
source: "https://arxiv.org/abs/1203.6049"
topics:
- databases
- contemporary-db
seed_rank: 864
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
see:
  - "790-paxos-made-simple"
---

# MDCC: Multi-Data Center Consistency

## One-sentence takeaway

MDCC is a master-free optimistic commit protocol that makes a multi-object transaction strongly consistent across data centers in one WAN RTT in the common case, at cost comparable to quorum-style eventual consistency.

## Why it matters here

Broadside and GRID COMMAND will eventually span regions. MDCC is the "don't give up strong commit just because RTT is 100 ms" protocol, plus an application programming model for the residual unpredictable delay.

## Key ideas

- Generalized Paxos over per-record leaders lets commutative / non-conflicting updates commit without a global master or static partitions.
- Fast-path commit is one round-trip to a datacenter quorum; conflicts take the classic two-phase path.
- A programming model (options / compensation) lets the app hide tail WAN latency instead of pretending the network is a LAN.
- TPC-W across five geographic DCs: throughput and latency land near eventually-consistent quorum protocols, and a DC outage does not spike response time.
- Contrast with asynchronous replication (can lose acks), small-partition sync, or giving up consistency entirely.

## Caveats

## Links

- arXiv: [1203.6049](https://arxiv.org/abs/1203.6049)
- PDF: https://arxiv.org/pdf/1203.6049
