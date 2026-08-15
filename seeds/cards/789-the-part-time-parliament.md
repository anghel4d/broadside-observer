---
title: The Part-Time Parliament
authors:
- Leslie Lamport
year: 1998
venue: ACM Transactions on Computer Systems
arxiv: null
doi: 10.1145/279227.279229
source: "https://doi.org/10.1145/279227.279229"
topics:
- distributed-systems
- paxos
- consensus
seed_rank: 789
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
  doi: 10.1145/568425.568433
- title: "Time, Clocks, and the Ordering of Events in a Distributed System"
  url: "https://doi.org/10.1145/359545.359563"
  year: 1978
  arxiv: null
  doi: 10.1145/359545.359563
see:
- "790-paxos-made-simple"
- "785-time-clocks-and-the-ordering-of-events-in-a-distributed-syst"
---

# The Part-Time Parliament

## One-sentence takeaway

Paxos reaches agreement on a single decree by numbered prepare/accept ballots whose majority quorums necessarily intersect, so at most one value is chosen even if proposers and acceptors come and go.

## Why it matters here

This is the consensus backbone for any replicated Anoptic/GRID COMMAND control plane or Broadside metadata log — cite with *Paxos Made Simple* when implementing, not just when citing.

## Key ideas

- A proposal is a ballot number plus a value; an acceptor promises not to accept older ballots and reports the highest-numbered value it has already accepted.
- Phase 2 proposes either that reported value or, if none, the proposer’s own value; a majority of accepts chooses it.
- Any two majorities share an acceptor, so two different values cannot both be chosen.
- Safety holds in an asynchronous crash model; liveness needs a distinguished proposer (progress assumptions, not synchrony in the safety proof).
- Multi-decree Paxos is a sequence of single-decree instances used to totally order state-machine commands.

## Caveats

## Links

- DOI: [10.1145/279227.279229](https://doi.org/10.1145/279227.279229)
- URL: https://doi.org/10.1145/279227.279229
