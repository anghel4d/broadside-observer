---
title: Timestamps in Message-Passing Systems That Preserve the Partial Ordering
authors:
- Colin J. Fidge
year: 1988
venue: Proceedings of the 11th Australian Computer Science Conference
arxiv: null
doi: null
source: "https://en.wikipedia.org/wiki/Vector_clock"
topics:
- vector-clocks
- distributed-systems
seed_rank: 786
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 8
lineage: algorithms-and-complexity
cites:
- title: "Time, Clocks, and the Ordering of Events in a Distributed System"
  url: "https://doi.org/10.1145/359545.359563"
  year: 1978
  arxiv: null
  doi: 10.1145/359545.359563
- title: Virtual Time and Global States of Distributed Systems
  url: "https://homes.cs.washington.edu/~arvind/cs425/doc/mattern89virtual.pdf"
  year: 1989
  arxiv: null
  doi: null
see:
- "785-time-clocks-and-the-ordering-of-events-in-a-distributed-syst"
- "787-virtual-time-and-global-states-of-distributed-systems"
---

# Timestamps in Message-Passing Systems That Preserve the Partial Ordering

## One-sentence takeaway

Fidge vector clocks — track causal concurrency beyond Lamport scalars.

## Why it matters here

Needed when Lamport clocks alone cannot detect concurrency for replication.

## Key ideas

- Per-process timestamp vectors.
- Componentwise max on receive.
- Detects concurrency vs causality.
- Pairs with Mattern's independent formulation.

## Caveats

- O(n) metadata per message.
- Cite Mattern 1989 alongside for the concept.

## Links

- URL: https://en.wikipedia.org/wiki/Vector_clock
