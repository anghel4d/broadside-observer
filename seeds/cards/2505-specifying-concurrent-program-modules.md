---
title: "Specifying Concurrent Program Modules"
authors:
  - "Leslie Lamport"
year: 1983
venue: "ACM Transactions on Programming Languages and Systems 5(2):190–222, April 1983"
arxiv: null
doi: "10.1145/69624.357207"
source: "https://lamport.azurewebsites.net/pubs/spec.pdf"
topics:
  - "concurrency"
  - "lock-free"
  - "spsc-queue"
  - "ring-buffer"
  - "specification"
  - "temporal-logic"
seed_rank: 2505
seed_batch: "archive-2026-11-04"
reviewed: "2026-11-04"
pool: "systems"
lineage: concurrent-data-structures
relevance_score: 9
cites:
  - title: "Specifying Concurrent Program Modules"
    url: "https://lamport.azurewebsites.net/pubs/spec.pdf"
    year: 1983
    arxiv: null
    doi: "10.1145/69624.357207"
see: ["1475-fastforward-for-efficient-pipeline-parallelism"]
---

# Specifying Concurrent Program Modules

## One-sentence takeaway

Lamport specifies concurrent modules by state functions plus temporal-logic safety and liveness properties, and along the way gives the classic lock-free single-producer/single-consumer ring buffer: an array `Q[0..m-1]` with monotone `HEAD` and `TAIL` counters used mod `m`, where each side writes only its own counter.

## Why it matters here

Anoptic's wait-free buses are SPSC rings at heart, and this is where that ring buffer comes from, with a correctness argument attached. Its "producer owns TAIL, consumer owns HEAD, full when `TAIL − HEAD = m`" invariant is the one later work (FastForward, Lamport-queue variants, cache-line-padded rings) keeps tuning. The paper also shows how to state *what* a bus guarantees, separately from *how* it is built. That is the kind of contract a bus API needs.

## Key ideas

- The queue example (Section 3.4.2, Fig. 6): `PUT` waits while `TAIL − HEAD = m`, writes `Q[TAIL mod m]`, then increments `TAIL`. `GET` waits while `TAIL − HEAD = 0`, reads `Q[HEAD mod m]`, then increments `HEAD`. No locks are needed, because each counter has a single writer.
- A module is specified by its state functions (an abstract view of internal state) and by safety and liveness properties written in temporal logic. The spec does not prescribe an implementation.
- A spec is separated from an implementation, and the paper shows how to check that a concrete program satisfies an abstract specification.
- The examples build up to the alternating-bit protocol, showing the method on a real communication protocol.

## Caveats

- The ring's correctness assumes sequentially consistent reads and writes of `HEAD`/`TAIL`. On modern weakly-ordered hardware you need acquire/release ordering, and to avoid false sharing you need padding or cached copies of the other side's index (see FastForward).
- The notation is pre-TLA and heavy. The lasting value is the queue and the spec-vs-implementation discipline, not the formalism itself.

## Links

- [PDF (Lamport's site)](https://lamport.azurewebsites.net/pubs/spec.pdf)
- [ACM DOI](https://doi.org/10.1145/69624.357207)
