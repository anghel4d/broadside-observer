---
title: "Memory Consistency and Event Ordering in Scalable Shared-Memory Multiprocessors"
authors:
  - "Kourosh Gharachorloo"
  - "Daniel Lenoski"
  - "James Laudon"
  - "Phillip B. Gibbons"
  - "Anoop Gupta"
  - "John L. Hennessy"
year: 1990
venue: "ISCA"
arxiv: null
doi: "10.1145/325164.325102"
source: "https://doi.org/10.1145/325164.325102"
topics:
  - memory-model
seed_rank: 414
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 7
lineage: concurrent-data-structures
cites:
  - title: "How to Make a Multiprocessor Computer That Correctly Executes Multiprocess Programs"
    url: "https://doi.org/10.1109/TC.1979.1675439"
    year: 1979
    arxiv: null
    doi: "10.1109/TC.1979.1675439"
  - title: "Linearizability: A Correctness Condition for Concurrent Objects"
    url: "https://doi.org/10.1145/78969.78972"
    year: 1990
    arxiv: null
    doi: "10.1145/78969.78972"
  - title: "Memory Ordering in Modern Microprocessors"
    url: "https://www.linuxjournal.com/article/8211"
    year: 2005
    arxiv: null
    doi: null
see:
  - "472-how-to-make-a-multiprocessor-computer-that-correctly-execute"
  - "203-linearizability-a-correctness-condition-for-concurrent-objec"
  - "406-memory-ordering-in-modern-microprocessors"
---

# Memory Consistency and Event Ordering in Scalable Shared-Memory Multiprocessors

## One-sentence takeaway

Release consistency lets ordinary loads and stores reorder between synchronization points: an acquire must complete before later ordinary accesses, and earlier ordinary accesses must complete before a release.

## Why it matters here

This is the model C++ `memory_order_acquire` / `release` still names. Anoptic lock-free queues and job-pool handoffs are RC programs: if you label the sync ops and leave the payload stores unordered, DASH-style hardware (and every modern CPU) can buffer and pipeline them. The card’s informal title was “RC versus SC”; the archival paper is the ISCA 1990 DASH result.

## Key ideas

- Sequential consistency forbids the buffering/pipelining scalable NUMA needs; processor and weak consistency relax some, but not acquire vs release.
- Shared accesses are classified competing vs non-competing, then synchronization vs not, then acquire vs release.
- For properly labeled programs, RC is equivalent to SC — programmers may still reason SC if they annotate locks/flags correctly.
- Four WC constraints disappear: ordinary accesses after a release need not wait; an acquire need not drain prior ordinary accesses; non-sync specials do not fence ordinary traffic; specials themselves need only processor consistency.

## Caveats

## Links

- DOI: [10.1145/325164.325102](https://doi.org/10.1145/325164.325102)
- PDF: https://www.csl.cornell.edu/courses/ece5750/gharachorloo.isca90.pdf
