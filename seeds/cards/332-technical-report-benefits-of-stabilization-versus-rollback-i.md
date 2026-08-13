---
title: "Technical Report: Benefits of Stabilization versus Rollback in Self-Stabilizing Graph-Based Applications on Eventually Consistent Key-Value Stores"
authors:
  - "Duong Nguyen"
  - "Sandeep S. Kulkarni"
year: 2020
venue: "arXiv:cs.DC"
arxiv: "2007.14218"
doi: null
source: "https://arxiv.org/abs/2007.14218"
topics:
  - netcode
seed_rank: 332
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
cites:
  - title: "How to Make a Multiprocessor Computer That Correctly Executes Multiprocess Programs"
    url: "https://doi.org/10.1109/tc.1979.1675439"
    year: 1979
    arxiv: null
    doi: "10.1109/tc.1979.1675439"
    card: "722-how-to-make-a-multiprocessor-computer-that-correctly-execute"
  - title: "Distributed GraphLab"
    url: "https://doi.org/10.14778/2212351.2212354"
    year: 2012
    arxiv: null
    doi: "10.14778/2212351.2212354"
    card: null
  - title: "Cassandra"
    url: "https://doi.org/10.1145/1773912.1773922"
    year: 2010
    arxiv: null
    doi: "10.1145/1773912.1773922"
    card: null
  - title: "Dynamo"
    url: "https://doi.org/10.1145/1294261.1294281"
    year: 2007
    arxiv: null
    doi: "10.1145/1294261.1294281"
    card: null
  - title: "Eventually consistent"
    url: "https://doi.org/10.1145/1435417.1435432"
    year: 2008
    arxiv: null
    doi: "10.1145/1435417.1435432"
    card: null
  - title: "Brewer's conjecture and the feasibility of consistent, available, partition-tolerant web services"
    url: "https://doi.org/10.1145/564585.564601"
    year: 2002
    arxiv: null
    doi: "10.1145/564585.564601"
    card: null
  - title: "Distributed Algorithms"
    url: "https://doi.org/10.1007/bfb0022433"
    year: 1992
    arxiv: null
    doi: "10.1007/bfb0022433"
    card: null
  - title: "Self-stabilizing systems in spite of distributed control"
    url: "https://doi.org/10.1145/361179.361202"
    year: 1974
    arxiv: null
    doi: "10.1145/361179.361202"
    card: null
  - title: "Complex Networks"
    url: "https://doi.org/10.1017/9781316216002"
    year: 2017
    arxiv: null
    doi: "10.1017/9781316216002"
    card: null
  - title: "Trinity"
    url: "https://doi.org/10.1145/2463676.2467799"
    year: 2013
    arxiv: null
    doi: "10.1145/2463676.2467799"
    card: null
  - title: "Towards robust distributed systems (abstract)"
    url: "https://doi.org/10.1145/343477.343502"
    year: 2000
    arxiv: null
    doi: "10.1145/343477.343502"
    card: null
  - title: "Thinking Like a Vertex"
    url: "https://doi.org/10.1145/2818185"
    year: 2015
    arxiv: null
    doi: "10.1145/2818185"
    card: null
---

# Technical Report: Benefits of Stabilization versus Rollback in Self-Stabilizing Graph-Based Applications on Eventually Consistent Key-Value Stores

## One-sentence takeaway

In this paper, we evaluate and compare the performance of two approaches, namely self-stabilization and rollback, to handling consistency violating faults (\cvf) that occur when a self-stabilizing distributed graph-based program is executed on an eventually consistent key-value store.

## Why it matters here

Systems/HPC craft relevant to Anoptic concurrency, allocators, and parallel jobbing (Technical Report: Benefits of Stabilization versus Rollback in Self-Stabilizing ).

## Key ideas

- In this paper, we evaluate and compare the performance of two approaches, namely self-stabilization and rollback, to handling consistency violating faults (\cvf) that occur when a self-stabilizing distributed graph-based program is executed on an eventually consistent key-value store.
- Consistency violating faults are caused by reading wrong values due to weaker level of consistency provided by the key-value store.
- One way to deal with these faults is to utilize rollback whereas another way is to rely on the property of self-stabilization that is expected to provide recovery from arbitrary states.
- We evaluate both these approaches in different case studies --planar graph coloring, arbitrary graph coloring, and maximal matching-- as well as for different problem dimensions such as input data characteristics, workload partition, and network latency.
- We also consider the effect of executing non-stabilizing algorithm with rollback with a similar stabilizing algorithm that does not utilize rollback.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2007.14218](https://arxiv.org/abs/2007.14218)
- URL: https://arxiv.org/abs/2007.14218
