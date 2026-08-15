---
title: "How to Make a Multiprocessor Computer That Correctly Executes Multiprocess Programs"
authors:
  - "Leslie Lamport"
year: 1979
venue: "IEEE Transactions on Computers"
arxiv: null
doi: "10.1109/TC.1979.1675439"
source: "https://doi.org/10.1109/TC.1979.1675439"
topics:
  - consistency
  - concurrency
seed_rank: 472
seed_batch: "lineage-shallow-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: concurrent-data-structures
cites:
  - title: "Time, Clocks, and the Ordering of Events in a Distributed System"
    url: "https://doi.org/10.1145/359545.359563"
    year: 1978
    doi: "10.1145/359545.359563"
---

# How to Make a Multiprocessor Computer That Correctly Executes Multiprocess Programs

## One-sentence takeaway

Lamport defines sequential consistency: the result of any execution is as if all processors' operations occurred in some sequential order that respects each processor's program order.

## Why it matters here

This is the multiprocessor correctness baseline that linearizability later refines per object; Anoptic atomics still start from "what would SC have done?" before weakening to TSO.

## Key ideas

- A multiprocessor is sequentially consistent if the global interleaving agrees with every processor's own program order — the model programmers wish hardware provided.
- Correctness here is about the observable memory history, not about a particular interconnect or cache protocol.
- Sufficient hardware conditions (roughly: each processor issues memory requests in program order, and the memory system totally orders writes) make SC implementable.
- Later release/weak models exist precisely because full SC is expensive on real store-buffered machines.

## Caveats

## Links

- DOI: [10.1109/TC.1979.1675439](https://doi.org/10.1109/TC.1979.1675439)
