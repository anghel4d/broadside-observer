---
title: The Byzantine Generals Problem
authors:
- Leslie Lamport
- Robert Shostak
- Marshall Pease
year: 1982
venue: ACM Transactions on Programming Languages and Systems
arxiv: null
doi: 10.1145/357172.357176
source: "https://doi.org/10.1145/357172.357176"
topics:
- distributed-systems
- byzantine
seed_rank: 791
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 10
lineage: algorithms-and-complexity
cites:
- title: Reaching Agreement in the Presence of Faults
  url: "https://doi.org/10.1145/322186.322188"
  year: 1980
  arxiv: null
  doi: 10.1145/322186.322188
see:
- "792-reaching-agreement-in-the-presence-of-faults"
---

# The Byzantine Generals Problem

## One-sentence takeaway

With oral (unsigned) messages, $3f+1$ lieutenants are necessary and sufficient to reach interactive consistency despite $f$ Byzantine traitors; signed messages drop the bound to $f+2$ (or $f+1$ with more rounds).

## Why it matters here

This is the adversarial-fault model for any GRID COMMAND matchmaker, replay verifier, or Broadside replica that must survive lying peers, not just crashes.

## Key ideas

- Interactive consistency: all loyal lieutenants agree on the same vector of commander values, and if the commander is loyal that value is his actual order.
- Oral model: the recursive OM($f$) algorithm forwards values through all paths of length $f+1$; majority at each level filters $f$ liars when $n>3f$.
- A three-general scenario shows $3f$ is impossible without signatures: a loyal lieutenant cannot tell a lying commander from a lying peer.
- Signed-message SM($f$) authenticates the commander’s order so forgeries are evident; the bound relaxes because traitors cannot invent a signed conflicting order.

## Caveats

## Links

- DOI: [10.1145/357172.357176](https://doi.org/10.1145/357172.357176)
- URL: https://doi.org/10.1145/357172.357176
