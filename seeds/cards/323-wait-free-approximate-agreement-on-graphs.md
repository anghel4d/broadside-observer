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
seed_rank: 323
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
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
