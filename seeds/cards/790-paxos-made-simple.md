---
title: Paxos Made Simple
authors:
- Leslie Lamport
year: 2001
venue: ACM SIGACT News
arxiv: null
doi: null
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
- title: In Search of an Understandable Consensus Algorithm
  url: "https://raft.github.io/raft.pdf"
  year: 2014
  arxiv: null
  doi: null
see:
- "789-the-part-time-parliament"
- "794-in-search-of-an-understandable-consensus-algorithm"
---

# Paxos Made Simple

## One-sentence takeaway

Clear exposition of single-decree Paxos everyone actually learns from.

## Why it matters here

Pedagogical companion to The Part-Time Parliament.

## Key ideas

- Numbered proposals; acceptors remember highest.
- Choose already-accepted values when possible.
- Majority intersection implies agreement.
- Minimal core algorithm presentation.

## Caveats

- Not a full multi-decree systems manual.
- Raft may be easier for implementers.

## Links

- URL: https://lamport.azurewebsites.net/pubs/paxos-simple.pdf
