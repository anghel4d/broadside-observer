---
title: Paxos Made Simple
authors:
- Leslie Lamport
year: 2001
venue: ACM SIGACT News
arxiv: null
doi: 10.1145/568425.568433
source: "https://lamport.azurewebsites.net/pubs/paxos-simple.pdf"
topics:
- distributed-systems
- paxos
seed_rank: 790
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: algorithms-and-complexity
cites:
- title: The Part-Time Parliament
  url: "https://doi.org/10.1145/279227.279229"
  year: 1998
  arxiv: null
  doi: 10.1145/279227.279229
see:
- "789-the-part-time-parliament"
---

# Paxos Made Simple

## One-sentence takeaway

Lamport restates single-decree Paxos in plain English: proposers, acceptors, and learners; prepare then accept; a majority intersection is the whole safety argument.

## Why it matters here

This is the note every Anoptic/GRID COMMAND engineer should read before touching a replicated log — the parliament paper’s algorithm without the legislative fiction.

## Key ideas

- Safety: only a proposed value is chosen, only one value is chosen, and a learner only learns a value that was actually chosen.
- Invariant P2c: a proposer issuing ballot $n$ with value $v$ has heard from a majority that either nobody accepted $<n$, or $v$ is the highest-numbered accepted value they report.
- Acceptors remember the highest promised ballot and the highest accepted proposal in stable storage.
- Progress requires electing a distinguished proposer; FLP says that election needs timeouts or randomness, but failed elections never violate safety.
- Multi-instance Paxos for a state machine is the same algorithm run once per command slot, with a leader filling holes with no-ops.

## Caveats

## Links

- Author PDF: https://lamport.azurewebsites.net/pubs/paxos-simple.pdf
- DOI: [10.1145/568425.568433](https://doi.org/10.1145/568425.568433)
