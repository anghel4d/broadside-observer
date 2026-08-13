---
title: "Impossibility of Distributed Consensus with One Faulty Process"
authors:
  - "Michael J. Fischer"
  - "Nancy A. Lynch"
  - "Michael S. Paterson"
year: 1985
venue: "JACM"
arxiv: null
doi: "10.1145/3149.214121"
source: "https://doi.org/10.1145/3149.214121"
topics:
  - distributed-systems
  - consensus
  - flp
  - impossibility
seed_rank: 1126
seed_batch: "perfects-systems-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 10
lineage: systems-classics
cites:
  - title: "Brewer's Conjecture and the Feasibility of Consistent, Available, Partition-Tolerant Web Services"
    url: "https://doi.org/10.1145/564585.564601"
    year: 2002
    arxiv: null
    doi: "10.1145/564585.564601"
    card: "1099-brewer-s-conjecture-and-the-feasibility-of-consistent-availa"
  - title: "Time, Clocks, and the Ordering of Events in a Distributed System"
    url: "https://doi.org/10.1145/359545.359563"
    year: 1978
    arxiv: null
    doi: "10.1145/359545.359563"
    card: "1060-time-clocks-and-the-ordering-of-events-in-a-distributed-syst"
  - title: "Paxos Made Simple"
    url: "https://lamport.azurewebsites.net/pubs/paxos-simple.pdf"
    year: 2001
    arxiv: null
    doi: null
    card: "1065-paxos-made-simple"
---

# Impossibility of Distributed Consensus with One Faulty Process

## One-sentence takeaway

FLP: in a fully asynchronous network, deterministic consensus is impossible with even one crash fault.

## Why it matters here

The impossibility that forces timeouts, randomness, or partial synchrony in any Broadside consensus/replication plan.

## Key ideas

- Asynchronous message-passing model.
- One faulty process suffices for impossibility.
- Defines the landscape Paxos/Raft must escape via synchrony assumptions.
- Companion to CAP-style tradeoff thinking.

## Caveats

- Classic; verify claims against the primary text before engineering decisions.

## Links

- DOI: [10.1145/3149.214121](https://doi.org/10.1145/3149.214121)
- URL: https://doi.org/10.1145/3149.214121
