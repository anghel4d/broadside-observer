---
title: The Part-Time Parliament
authors:
- Leslie Lamport
year: 1998
venue: ACM TOCS
arxiv: null
doi: 10.1145/279227.279229
source: "https://doi.org/10.1145/279227.279229"
topics:
- distributed-systems
- paxos
- consensus
seed_rank: 1064
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 10
lineage: algorithms-and-complexity
cites:
- title: Paxos Made Simple
  url: "https://lamport.azurewebsites.net/pubs/paxos-simple.pdf"
  year: 2001
  arxiv: null
  doi: null
  card: 1065-paxos-made-simple
- title: "Time, Clocks, and the Ordering of Events in a Distributed System"
  url: "https://doi.org/10.1145/359545.359563"
  year: 1978
  arxiv: null
  doi: 10.1145/359545.359563
  card: 1060-time-clocks-and-the-ordering-of-events-in-a-distributed-syst
- title: In Search of an Understandable Consensus Algorithm
  url: "https://raft.github.io/raft.pdf"
  year: 2014
  arxiv: null
  doi: null
  card: 1069-in-search-of-an-understandable-consensus-algorithm
---

# The Part-Time Parliament

## One-sentence takeaway

Paxos — fault-tolerant consensus via ballot/proposal majority quorums.

## Why it matters here

Consensus backbone for replicated state machines; cite with Paxos Made Simple.

## Key ideas

- Prepare/accept phases.
- Majority quorums intersect.
- Safety without synchrony; liveness under progress assumptions.
- Reusable acceptor/learner roles.

## Caveats

- Difficult exposition — read Paxos Made Simple too.
- Multi-Paxos/Raft dominate production engineering.

## Links

- DOI: [10.1145/279227.279229](https://doi.org/10.1145/279227.279229)
- URL: https://doi.org/10.1145/279227.279229
