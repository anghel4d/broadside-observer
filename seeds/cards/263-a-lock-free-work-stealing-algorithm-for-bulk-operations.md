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
  - work-stealing
seed_rank: 263
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "hpc"
relevance_score: 9
lineage: work-stealing
cites:
  - title: "Dynamic Circular Work-Stealing Deque"
    url: "https://doi.org/10.1145/1073970.1073974"
    year: 2005
    doi: "10.1145/1073970.1073974"
    card: "367-dynamic-circular-work-stealing-deque"
  - title: "Scheduling Multithreaded Computations by Work Stealing"
    url: "https://doi.org/10.1145/324133.324234"
    year: 1999
    doi: "10.1145/324133.324234"
    card: "257-scheduling-multithreaded-computations-by-work-stealing"
  - title: "The Implementation of the Cilk-5 Multithreaded Language"
    url: "https://doi.org/10.1145/277650.277725"
    year: 1998
    doi: "10.1145/277650.277725"
    card: "381-the-implementation-of-the-cilk-5-multithreaded-language"
  - title: "A Java Fork/Join Framework"
    url: "https://doi.org/10.1145/337449.337465"
    year: 2000
    doi: "10.1145/337449.337465"
    card: "543-a-java-fork-join-framework"
  - title: "Intel Threading Building Blocks"
    url: "https://www.oreilly.com/library/view/intel-threading-building/9780596514808/"
    year: 2007
    card: "486-intel-threading-building-blocks"
  - title: "Correct and Efficient Work-Stealing for Weak Memory Models"
    url: "https://doi.org/10.1145/2442516.2442524"
    year: 2013
    doi: "10.1145/2442516.2442524"
    card: "545-correct-and-efficient-work-stealing-for-weak-memory-models"
---

# A Lock-Free Work-Stealing Algorithm for Bulk Operations

## One-sentence takeaway

Work-stealing is a widely used technique for balancing irregular parallel workloads, and most modern runtime systems adopt lock-free work-stealing deques to reduce contention and improve scalability.

## Why it matters here

Systems/HPC craft relevant to Anoptic concurrency, allocators, and parallel jobbing (A Lock-Free Work-Stealing Algorithm for Bulk Operations).

## Key ideas

- Work-stealing is a widely used technique for balancing irregular parallel workloads, and most modern runtime systems adopt lock-free work-stealing deques to reduce contention and improve scalability.
- However, existing algorithms are designed for general-purpose parallel runtimes and often incur overheads that are unnecessary in specialized settings.
- In this paper, we present a new lock-free work-stealing queue tailored for a master-worker framework used in the parallelization of a mixed-integer programming optimization solver based on decision diagrams.
- Our design supports native bulk operations, grows without bounds, and assumes at most one owner and one concurrent stealer, thereby eliminating the need for heavy synchronization.
- We provide an informal sketch that our queue is linearizable and lock-free under this restricted concurrency model.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2603.05766](https://arxiv.org/abs/2603.05766)
- URL: https://arxiv.org/abs/2603.05766
