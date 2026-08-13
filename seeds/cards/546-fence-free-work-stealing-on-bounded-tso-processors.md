---
title: "Fence-Free Work Stealing on Bounded TSO Processors"
authors:
  - "Adam Morrison"
  - "Yehuda Afek"
year: 2014
venue: "ASPLOS"
arxiv: null
doi: "10.1145/2541940.2541987"
source: "https://doi.org/10.1145/2541940.2541987"
topics:
  - work-stealing-schedulers
  - tso
  - memory-fences
seed_rank: 546
seed_batch: "lineage-work-stealing-schedulers-schedulers-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 8
lineage: work-stealing-schedulers
cites:
  - title: "Dynamic Circular Work-Stealing Deque"
    url: "https://doi.org/10.1145/1073970.1073974"
    year: 2005
    doi: "10.1145/1073970.1073974"
  - title: "The Implementation of the Cilk-5 Multithreaded Language"
    url: "https://doi.org/10.1145/277650.277725"
    year: 1998
    doi: "10.1145/277650.277725"
  - title: "Correct and Efficient Work-Stealing for Weak Memory Models"
    url: "https://doi.org/10.1145/2442516.2442524"
    year: 2013
    doi: "10.1145/2442516.2442524"
see:
  - "367-dynamic-circular-work-stealing-deque"
  - "381-the-implementation-of-the-cilk-5-multithreaded-language"
  - "545-correct-and-efficient-work-stealing-for-weak-memory-models"
---

# Fence-Free Work Stealing on Bounded TSO Processors

## One-sentence takeaway

On bounded-TSO (x86/SPARC) microarchitectures, owner take can drop its memory fence while staying correct.

## Why it matters here

PC/console job pools often target TSO; fence-free take is a real win when steal rates are low and local pop dominates—worth knowing before cargo-culting ARM barriers onto x86.

## Key ideas

- Refutes folklore that owner-side fences are always required for correctness.
- Exploits bounded store buffers (bounded TSO) so thieves can reason about reordering distance.
- FF-THE / THEP algorithms eliminate owner fences on mainstream x86.
- 7–11% average (up to 23%) speedup vs fenced Cilk and Chase–Lev queues on parallel benchmarks.

## Caveats

- Seed card from lineage epistemology pass; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- DOI: [10.1145/2541940.2541987](https://doi.org/10.1145/2541940.2541987)
- URL: https://doi.org/10.1145/2541940.2541987
