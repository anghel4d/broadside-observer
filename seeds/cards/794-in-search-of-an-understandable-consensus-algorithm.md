---
title: In Search of an Understandable Consensus Algorithm
authors:
- Diego Ongaro
- John Ousterhout
year: 2014
venue: USENIX ATC
arxiv: null
doi: null
source: "https://raft.github.io/raft.pdf"
topics:
- raft
- consensus
seed_rank: 794
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 8
lineage: algorithms-and-complexity
cites:
- title: The Part-Time Parliament
  url: "https://doi.org/10.1145/279227.279229"
  year: 1998
  arxiv: null
  doi: 10.1145/279227.279229
- title: Paxos Made Simple
  url: "https://lamport.azurewebsites.net/pubs/paxos-simple.pdf"
  year: 2001
  arxiv: null
  doi: null
see:
- "789-the-part-time-parliament"
- "790-paxos-made-simple"
---

# In Search of an Understandable Consensus Algorithm

## One-sentence takeaway

Raft — consensus designed for understandability, decomposing leader election, logs, and safety.

## Why it matters here

Default teaching/production alternative to multi-decree Paxos complexity.

## Key ideas

- Strong leader.
- Log matching invariants.
- Membership changes as first-class.
- Broad industrial adoption.

## Caveats

- Not Byzantine-tolerant.
- Depends on leader stability and disk sync discipline.

## Links

- URL: https://raft.github.io/raft.pdf
