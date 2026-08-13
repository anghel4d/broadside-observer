---
title: "Wait-free approximate agreement on graphs"
authors:
  - "Dan Alistarh"
  - "Faith Ellen"
  - "Joel Rybicki"
year: 2021
venue: "arXiv:cs.DC"
arxiv: "2103.08949"
doi: null
source: "https://arxiv.org/abs/2103.08949"
topics:
  - lockfree
seed_rank: 249
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
cites:
  - title: "Impossibility of distributed consensus with one faulty process"
    url: "https://doi.org/10.1145/3149.214121"
    year: 1985
    arxiv: null
    doi: "10.1145/3149.214121"
  - title: "Reaching Agreement in the Presence of Faults"
    url: "https://doi.org/10.1145/322186.322188"
    year: 1980
    arxiv: null
    doi: "10.1145/322186.322188"
  - title: "On rigid circuit graphs"
    url: "https://doi.org/10.1007/bf02992776"
    year: 1961
    arxiv: null
    doi: "10.1007/bf02992776"
  - title: "Reaching approximate agreement in the presence of faults"
    url: "https://doi.org/10.1145/5925.5931"
    year: 1986
    arxiv: null
    doi: "10.1145/5925.5931"
  - title: "Distributed Computing by Mobile Robots: Gathering"
    url: "https://doi.org/10.1137/100796534"
    year: 2012
    arxiv: null
    doi: "10.1137/100796534"
  - title: "Brief Announcement: Why Extension-Based Proofs Fail"
    url: "https://doi.org/10.1145/3382734.3405743"
    year: 2020
    arxiv: null
    doi: "10.1145/3382734.3405743"
  - title: "The topological structure of asynchronous computability"
    url: "https://doi.org/10.1145/331524.331529"
    year: 1999
    arxiv: null
    doi: "10.1145/331524.331529"
  - title: "Distributed Computing Through Combinatorial Topology"
    url: "https://doi.org/10.1016/c2011-0-07032-1"
    year: 2014
    arxiv: null
    doi: "10.1016/c2011-0-07032-1"
  - title: "Asynchronous Robots on Graphs: Gathering"
    url: "https://doi.org/10.1007/978-3-030-11072-7_8"
    year: 2019
    arxiv: null
    doi: "10.1007/978-3-030-11072-7_8"
  - title: "The topology of look-compute-move robot wait-free algorithms with hard termination"
    url: "https://doi.org/10.1007/s00446-018-0345-3"
    year: 2018
    arxiv: null
    doi: "10.1007/s00446-018-0345-3"
  - title: "Convergence and covering on graphs for wait-free robots"
    url: "https://doi.org/10.1186/s13173-017-0065-8"
    year: 2018
    arxiv: null
    doi: "10.1186/s13173-017-0065-8"
  - title: "Tight Bounds for Asymptotic and Approximate Consensus"
    url: "https://doi.org/10.1145/3212734.3212762"
    year: 2018
    arxiv: null
    doi: "10.1145/3212734.3212762"
---

# Wait-free approximate agreement on graphs

## One-sentence takeaway

Approximate agreement is one of the few variants of consensus that can be solved in a wait-free manner in asynchronous systems where processes communicate by reading and writing to shared memory.

## Why it matters here

Systems/HPC craft relevant to Anoptic concurrency, allocators, and parallel jobbing (Wait-free approximate agreement on graphs).

## Key ideas

- Approximate agreement is one of the few variants of consensus that can be solved in a wait-free manner in asynchronous systems where processes communicate by reading and writing to shared memory.
- In this work, we consider a natural generalisation of approximate agreement on arbitrary undirected connected graphs.
- Each process is given a vertex of the graph as input and, if non-faulty, must output a vertex such that - all the outputs are within distance 1 of one another, and - each output value lies on a shortest path between two input values.
- From prior work, it is known that there is no wait-free algorithm among $n \ge 3$ processes for this problem on any cycle of length $c \ge 4$, by reduction from 2-set agreement (Castañeda et al., 2018).
- In this work, we investigate the solvability and complexity of this task on general graphs.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2103.08949](https://arxiv.org/abs/2103.08949)
- URL: https://arxiv.org/abs/2103.08949
