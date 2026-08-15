---
title: "Intel Threading Building Blocks: Outfitting C++ for Multi-core Processor Parallelism"
authors:
  - "James Reinders"
year: 2007
venue: "O'Reilly"
arxiv: null
doi: null
source: "https://www.oreilly.com/library/view/intel-threading-building/9780596514808/"
topics:
  - work-stealing-schedulers
  - tbb
seed_rank: 403
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 7
lineage: work-stealing-schedulers
cites:
  - title: "Scheduling Multithreaded Computations by Work Stealing"
    url: "https://doi.org/10.1145/324133.324234"
    year: 1999
    arxiv: null
    doi: "10.1145/324133.324234"
  - title: "The Implementation of the Cilk-5 Multithreaded Language"
    url: "https://doi.org/10.1145/277650.277725"
    year: 1998
    arxiv: null
    doi: "10.1145/277650.277725"
  - title: "Dynamic Circular Work-Stealing Deque"
    url: "https://doi.org/10.1145/1073970.1073974"
    year: 2005
    arxiv: null
    doi: "10.1145/1073970.1073974"
  - title: "A Java Fork/Join Framework"
    url: "https://doi.org/10.1145/337449.337465"
    year: 2000
    arxiv: null
    doi: "10.1145/337449.337465"
see:
  - "200-scheduling-multithreaded-computations-by-work-stealing"
  - "305-the-implementation-of-the-cilk-5-multithreaded-language"
  - "291-dynamic-circular-work-stealing-deque"
  - "432-a-java-fork-join-framework"
---

# Intel Threading Building Blocks: Outfitting C++ for Multi-core Processor Parallelism

## One-sentence takeaway

TBB is a C++ task library: you write `parallel_for` / task graphs, and a work-stealing runtime maps those tasks onto a pool of worker threads without you naming the threads.

## Why it matters here

This is the industrial packaging of Cilk/Chase–Lev that engine job systems still copy — scalable tasking, recursive decomposition, and a scheduler you do not reimplement per subsystem. Anoptic/ano job graphs should look more like TBB tasks than like a bag of named `std::thread`s.

## Key ideas

- Tasks, not threads: the programmer expresses potential parallelism; the runtime decides how many workers run.
- Work stealing from per-worker deques keeps idle cores busy without a global job lock.
- Generic algorithms (`parallel_for`, `parallel_reduce`, pipelines) sit on the same scheduler as raw tasks.
- Concurrent containers and scalable allocators are part of the same library so the parallel loops are not immediately wrecked by `malloc` or a mutexed `std::vector`.

## Caveats

## Links

- Book: https://www.oreilly.com/library/view/intel-threading-building/9780596514808/
- oneTBB (current library): https://github.com/uxlfoundation/oneTBB
