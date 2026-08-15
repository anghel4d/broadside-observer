---
title: "Spanner: Google's Globally-Distributed Database"
authors:
- James C. Corbett
- Jeffrey Dean
- Michael Epstein
- Andrew Fikes
- Christopher Frost
- J. J. Furman
- Sanjay Ghemawat
- Andrey Gubarev
- Christopher Heiser
- Peter Hochschild
- Wilson Hsieh
- Sebastian Kanthak
- Eugene Kogan
- Hongyi Li
- Alexander Lloyd
- Sergey Melnik
- David Mwaura
- David Nagle
- Sean Quinlan
- Rajesh Rao
- Lindsay Rolig
- Yasushi Saito
- Michal Szymaniak
- Christopher Taylor
- Ruth Wang
- Dale Woodford
year: 2012
venue: OSDI
arxiv: null
doi: 10.5555/2387880.2387905
source: "https://www.usenix.org/conference/osdi12/technical-sessions/presentation/corbett"
topics:
- databases
- contemporary-db
seed_rank: 812
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: contemporary-databases
cites:
- title: "Bigtable: A Distributed Storage System for Structured Data"
  url: "https://www.usenix.org/conference/osdi-06/bigtable-distributed-storage-system-structured-data"
  year: 2006
  arxiv: null
  doi: 10.5555/1298455.1298475
- title: "Paxos Made Live: An Engineering Perspective"
  url: "https://research.google.com/archive/paxos_made_live.html"
  year: 2007
  arxiv: null
  doi: 10.1145/1281100.1281103
see:
- "813-bigtable-a-distributed-storage-system-for-structured-data"
- "839-paxos-made-live-an-engineering-perspective-2006-invited-talk"
---

# Spanner: Google's Globally-Distributed Database

## One-sentence takeaway

Spanner is a synchronously replicated, multi-version database that assigns globally meaningful commit timestamps via TrueTime (GPS + atomic clocks exposing clock uncertainty) and thereby provides external consistency, lock-free snapshot reads, and atomic schema change at planetary scale.

## Why it matters here

If GRID COMMAND or Broadside ever shards authoritative world/state across regions, Spanner is the existence proof that you can have SQL-shaped transactions *and* geo-replication — at the cost of waiting out clock uncertainty instead of giving up linearizability.

## Key ideas

- Data lives in Paxos groups of tablets; directories (key-prefix buckets) are the unit of placement and movement, with application-specified replica-geography constraints.
- TrueTime returns an interval [earliest, latest] guaranteed to contain absolute time; Spanner waits out ε so commit timestamps respect real-time order (external consistency / linearizability).
- Read-write transactions use two-phase locking plus two-phase commit over Paxos; read-only and snapshot reads run lock-free at a chosen timestamp on any sufficiently caught-up replica.
- The data model moved from Bigtable-style key-value toward schematized semi-relational tables, SQL, and interleaved-table locality (F1 was the first customer).

## Caveats

## Links

- USENIX: [OSDI 2012](https://www.usenix.org/conference/osdi12/technical-sessions/presentation/corbett)
- PDF: https://www.usenix.org/system/files/conference/osdi12/osdi12-final-16.pdf
- Google Research: https://static.googleusercontent.com/media/research.google.com/en//archive/spanner-osdi2012.pdf
