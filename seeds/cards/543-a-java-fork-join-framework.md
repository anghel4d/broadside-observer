---
title: "A Java Fork/Join Framework"
authors:
  - "Doug Lea"
year: 2000
venue: "Java Grande"
arxiv: null
doi: "10.1145/337449.337465"
source: "https://doi.org/10.1145/337449.337465"
topics:
  - work-stealing-schedulers
  - fork-join
  - java
seed_rank: 543
seed_batch: "lineage-work-stealing-schedulers-schedulers-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: work-stealing-schedulers
cites:
  - title: "The Implementation of the Cilk-5 Multithreaded Language"
    url: "https://doi.org/10.1145/277650.277725"
    year: 1998
    doi: "10.1145/277650.277725"
  - title: "Scheduling Multithreaded Computations by Work Stealing"
    url: "https://doi.org/10.1145/324133.324234"
    year: 1999
    doi: "10.1145/324133.324234"
  - title: "Thread Scheduling for Multiprogrammed Multiprocessors"
    url: "https://doi.org/10.1145/277651.277678"
    year: 1998
    doi: "10.1145/277651.277678"
  - title: "Intel Threading Building Blocks"
    url: "https://www.oreilly.com/library/view/intel-threading-building/9780596514808/"
    year: 2007
  - title: "Dynamic Circular Work-Stealing Deque"
    url: "https://doi.org/10.1145/1073970.1073974"
    year: 2005
    doi: "10.1145/1073970.1073974"
see:
  - "381-the-implementation-of-the-cilk-5-multithreaded-language"
  - "257-scheduling-multithreaded-computations-by-work-stealing"
  - "542-thread-scheduling-for-multiprogrammed-multiprocessors"
  - "486-intel-threading-building-blocks"
  - "367-dynamic-circular-work-stealing-deque"
---

# A Java Fork/Join Framework

## One-sentence takeaway

Cilk-style fork/join + work stealing brought into Java; later became java.util.concurrent.ForkJoinPool.

## Why it matters here

Canonical industrial proof that work-stealing-schedulers task pools scale in managed runtimes—design patterns (recursive decomposition, lightweight tasks) map directly to engine job graphs.

## Key ideas

- Recursive split/fork/join composition over a pool of worker threads with per-worker deques.
- Variant of Cilk work stealing adapted to Java's threading and memory model.
- Careful task-queue and worker lifecycle management to keep steal overhead low.
- Became the basis for JSR-166 ForkJoinPool in Java SE 7—still the JVM default parallel backbone.

## Caveats

- Seed card from lineage epistemology pass; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- DOI: [10.1145/337449.337465](https://doi.org/10.1145/337449.337465)
- URL: https://doi.org/10.1145/337449.337465
