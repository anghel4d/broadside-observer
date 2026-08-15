---
title: Differential Dataflow
authors:
- Frank McSherry
- Derek G. Murray
- Rebecca Isaacs
- Michael Isard
year: 2013
venue: CIDR
arxiv: null
doi: null
source: "https://www.cidrdb.org/cidr2013/Papers/CIDR13_Paper111.pdf"
topics:
- databases
- contemporary-db
seed_rank: 823
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: contemporary-databases
cites:
- title: "Resilient Distributed Datasets: A Fault-Tolerant Abstraction for In-Memory Cluster Computing"
  url: "https://www.usenix.org/conference/nsdi12/technical-sessions/presentation/zaharia"
  year: 2012
  arxiv: null
  doi: null
see:
- "827-resilient-distributed-datasets-a-fault-tolerant-abstraction"
---

# Differential Dataflow

## One-sentence takeaway

Differential computation versions collections by a *partial* order (input epoch × loop iteration, or a priority) and retains every difference, so nested iterative queries can reuse work both across iterations and across input updates — Naiad maintains Twitter-scale strongly connected components at sub-second sliding-window latency.

## Why it matters here

GRID COMMAND AI, influence maps, and “recompute this ECS query as the world ticks” are incremental iterative dataflows. This paper is why Timely/Differential Dataflow (and Materialize) can keep a nested loop live instead of rerunning Spark each frame.

## Key ideas

- Ordinary incremental view maintenance totally orders versions and folds each δ into “current”; that cannot simultaneously represent “next iteration” and “next input epoch.”
- A difference δA_t is defined against the sum of all strictly prior differences in the partial order, so (epoch i, iter j) can reuse both (i−1, j) and (i, j−1).
- Operators consume and produce difference traces; many δ’s are empty, which is the source of the orders-of-magnitude win on a one-second window slide.
- Lexicographic orders encode prioritized iteration (propagate small labels first in connected components); product orders encode incremental + iterative together.

## Caveats

## Links

- PDF: https://www.cidrdb.org/cidr2013/Papers/CIDR13_Paper111.pdf
- Microsoft Research: https://www.microsoft.com/en-us/research/publication/differential-dataflow/
