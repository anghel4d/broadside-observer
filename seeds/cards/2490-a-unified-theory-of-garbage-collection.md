---
title: "A Unified Theory of Garbage Collection"
authors:
  - "David F. Bacon"
  - "Perry Cheng"
  - "V. T. Rajan"
year: 2004
venue: "OOPSLA 2004"
arxiv: null
doi: "10.1145/1028976.1028982"
source: "https://doi.org/10.1145/1028976.1028982"
topics:
  - "garbage-collection"
  - "reference-counting"
  - "memory-management"
  - "fix-points"
seed_rank: 2490
seed_batch: "archive-2026-11-02"
reviewed: "2026-11-02"
pool: "systems"
lineage: memory-reclamation
relevance_score: 8
cites:
  - title: "A Unified Theory of Garbage Collection"
    url: "https://doi.org/10.1145/1028976.1028982"
    year: 2004
    arxiv: null
    doi: "10.1145/1028976.1028982"
see: ["2378-concurrent-cycle-collection-in-reference-counted-systems", "1859-perceus-garbage-free-reference-counting-with-reuse", "1364-immix-a-mark-region-garbage-collector-with-space-efficiency-fa"]
---

# A Unified Theory of Garbage Collection

## One-sentence takeaway

Tracing and reference counting are exact duals, tracing working on live objects ("matter") and computing the least fix-point of the reference-count equation while counting works on dead objects ("anti-matter") and computes the greatest, so every practical collector is a hybrid you can place and cost on one map.

## Why it matters here

Anoptic leans on arenas and regions and ano will need some story for shared, long-lived objects. This paper turns "RC or tracing?" into a design-space choice: deferred RC, generational and train collectors fall out as particular splits of which heap regions are traced and which are counted. Its uniform cost model is a good lens for deciding where region lifetimes end and where a small collector or counting is cheaper.

## Key ideas

- Garbage collection as a fix-point over reference counts ρ(v); tracing finds the least fix-point, RC the greatest, and their difference is exactly cyclic garbage.
- Each tracing operation has a matching RC anti-operation (marking versus decrementing, roots versus deferred roots).
- Deferred reference counting, generational collection, and other high-performance collectors are shown to be hybrids of the two.
- A single cost model in time and space compares the hybrids and guides choosing one for an application's mutation and lifetime profile.
- Grounded in the authors' own builds: a concurrent RC collector with cycle collection and a real-time incremental tracing collector.

## Caveats

Read the abstract, sections 1–3 (including the fix-point formulation) and the outline of the cost-model sections. It is a conceptual framework with an analytical cost model, not a new collector or a benchmark study. Region and arena management, which is what we mostly use, is outside its scope and has to be mapped onto it by hand.

## Links

- [DOI](https://doi.org/10.1145/1028976.1028982)
- [IBM Research page](https://research.ibm.com/publications/a-unified-theory-of-garbage-collection)
- [PDF mirror](https://catern.com/unified_theory_of_garbage_collection.pdf)
