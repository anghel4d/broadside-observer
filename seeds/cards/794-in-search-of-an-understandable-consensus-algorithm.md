---
title: In Search of an Understandable Consensus Algorithm
authors:
- Diego Ongaro
- John Ousterhout
year: 2014
venue: USENIX ATC
arxiv: null
doi: null
source: "https://www.usenix.org/conference/atc14/technical-sessions/presentation/ongaro"
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
  doi: 10.1145/568425.568433
see:
- "789-the-part-time-parliament"
- "790-paxos-made-simple"
---

# In Search of an Understandable Consensus Algorithm

## One-sentence takeaway

Raft decomposes consensus into leader election, log replication, and safety, and uses a strong leader plus log-matching so students and implementers can hold the state space in their heads.

## Why it matters here

This is the default production/teaching alternative to multi-Paxos for an Anoptic control plane or Broadside replicated index — equivalent safety, smaller conceptual surface.

## Key ideas

- Servers are follower, candidate, or leader; randomized election timeouts elect one leader per term.
- The leader is the only one that accepts client writes; it appends to its log and ships `AppendEntries` RPCs until a majority has the entry, then commits.
- Log matching: if two logs share an index and term, they are identical through that index — followers overwrite conflicts from the leader.
- A new leader is eligible only if its log is at least as up-to-date as a majority, so committed entries never disappear.
- Cluster membership changes use joint consensus (overlapping majorities) so two disjoint majorities cannot commit different values mid-change.

## Caveats

## Links

- USENIX: https://www.usenix.org/conference/atc14/technical-sessions/presentation/ongaro
- PDF: https://www.usenix.org/system/files/conference/atc14/atc14-paper-ongaro.pdf
- Author PDF: https://raft.github.io/raft.pdf
