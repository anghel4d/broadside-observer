---
title: "A Lock-Free Work-Stealing Algorithm for Bulk Operations"
authors:
  - "Raja Sai Nandhan Yadav Kataru"
  - "Danial Davarnia"
  - "Ali Jannesari"
year: 2026
venue: "arXiv:cs.DC"
arxiv: "2603.05766"
doi: null
source: "https://arxiv.org/abs/2603.05766"
topics:
  - lockfree
  - work-stealing-schedulers
seed_rank: 206
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: work-stealing-schedulers
cites:
  - title: "Dynamic Circular Work-Stealing Deque"
    url: "https://doi.org/10.1145/1073970.1073974"
    year: 2005
    doi: "10.1145/1073970.1073974"
  - title: "Scheduling Multithreaded Computations by Work Stealing"
    url: "https://doi.org/10.1145/324133.324234"
    year: 1999
    doi: "10.1145/324133.324234"
  - title: "The Implementation of the Cilk-5 Multithreaded Language"
    url: "https://doi.org/10.1145/277650.277725"
    year: 1998
    doi: "10.1145/277650.277725"
  - title: "A Java Fork/Join Framework"
    url: "https://doi.org/10.1145/337449.337465"
    year: 2000
    doi: "10.1145/337449.337465"
  - title: "Intel Threading Building Blocks"
    url: "https://www.oreilly.com/library/view/intel-threading-building/9780596514808/"
    year: 2007
  - title: "Correct and Efficient Work-Stealing for Weak Memory Models"
    url: "https://doi.org/10.1145/2442516.2442524"
    year: 2013
    doi: "10.1145/2442516.2442524"
see:
  - "291-dynamic-circular-work-stealing-deque"
  - "200-scheduling-multithreaded-computations-by-work-stealing"
  - "305-the-implementation-of-the-cilk-5-multithreaded-language"
  - "432-a-java-fork-join-framework"
  - "403-intel-threading-building-blocks"
  - "434-correct-and-efficient-work-stealing-for-weak-memory-models"
---

# A Lock-Free Work-Stealing Algorithm for Bulk Operations

## One-sentence takeaway

A specialized lock-free work-stealing queue for a master–worker MIP/decision-diagram solver supports native bulk push/pop under a one-owner, one-stealer concurrency bound.

## Why it matters here

Anoptic jobbing often ships work in batches (ECS system waves, path batches); a Chase-Lev-class deque that stays constant-latency on bulk steal is closer to that workload than a general Cilk deque.

## Key ideas

- Existing lock-free deques target general runtimes and pay synchronization that a single-owner / single-stealer solver does not need.
- The queue grows without a fixed bound and exposes bulk operations as first-class primitives rather than loops of single pushes.
- An informal argument claims linearizability and lock-freedom under that restricted concurrency model.
- Benchmarks show push latency staying flat as batch size grows, unlike C++ Taskflow queues whose latency climbs with batch size.
- An optimized steal variant cuts steal latency by up to 3×; a large-graph pseudo-workload still scales linearly across implementations.

## Caveats

## Links

- arXiv: [2603.05766](https://arxiv.org/abs/2603.05766)
- PDF: https://arxiv.org/pdf/2603.05766
