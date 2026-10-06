---
title: "Concurrent Reading and Writing"
authors:
  - "Leslie Lamport"
year: 1977
venue: "Communications of the ACM 20(11)"
arxiv: null
doi: "10.1145/359863.359878"
source: "https://lamport.azurewebsites.net/pubs/rd-wr.pdf"
topics:
  - lock-free
  - readers-writers
  - version-counters
  - seqlock
  - message-buffers
seed_rank: 1837
seed_batch: "archive-2026-10-06"
reviewed: "2026-10-06"
pool: "systems"
relevance_score: 10
lineage: concurrent-data-structures
cites:
  - title: "Concurrent Control with Readers and Writers"
    url: "https://doi.org/10.1145/362759.362813"
    year: 1971
    arxiv: null
    doi: "10.1145/362759.362813"
  - title: "A New Solution of Dijkstra's Concurrent Programming Problem"
    url: "https://doi.org/10.1145/361082.361093"
    year: 1974
    arxiv: null
    doi: "10.1145/361082.361093"
  - title: "Proving the Correctness of Multiprocess Programs"
    url: "https://doi.org/10.1109/TSE.1977.229904"
    year: 1977
    arxiv: null
    doi: "10.1109/TSE.1977.229904"
---

# Concurrent Reading and Writing

## One-sentence takeaway

With one writer and no mutual exclusion at all, you can still read multi-word data consistently: write the parts in one order, read them in the opposite order, and bracket the data with two version counters so a reader simply retries if it may have seen a torn value.

## Why it matters here

This is the ancestor of the seqlock and of the single-producer ring buffer — exactly the two primitives an engine uses to hand simulation state to a render thread, or to stream events across Anoptic's lock-free buses, without ever blocking the writer. GRID COMMAND's sim→render snapshot and telemetry readers fit the paper's single-writer, many-reader assumption directly.

## Key ideas

- **Problem.** Shared data item larger than the hardware's atomic unit (example: a three-digit number changing from 99 to 100 can be read as 199). Prior solutions used mutual exclusion; this one assumes only atomic read/write of each unit.
- **Theorem 1 (read/write direction).** If a multi-digit value is always written right-to-left and read left-to-right, the digits read come from versions in non-decreasing order; Theorem 2 turns this into monotone bounds on the value read.
- **Version-counter reader/writer.** Writer increments v1, writes the data, then sets v2 := v1; reader reads v2, reads the data, reads v1, and repeats until they match — the writer never waits (readers can starve if writes are very frequent).
- **Message buffer.** A circular buffer of P slots with a sent-count and a received-count (indices mod P) lets one sender and one receiver communicate with only shared counters — the classic SPSC ring.
- **Common thread.** The paper's own summary: write data elements in one order and read them in the opposite order; that is what removes the need for mutual exclusion.

## Caveats

Assumes a single writer and sequentially consistent access to each atomic unit; on modern CPUs the same algorithms need acquire/release ordering or fences (see x86-TSO 485 and the C++ memory-model work 1139) or they break. Readers are not wait-free — they can retry indefinitely under a hot writer. Bounded counters require care (the paper discusses digit-wise and modular variants). Not a remint of Courtois–Heymans–Parnas readers/writers, Lamport's bakery paper, or Herlihy's wait-free hierarchy 036.

## Links

- Author PDF (Lamport's publications page copy): https://lamport.azurewebsites.net/pubs/rd-wr.pdf
- DOI: https://doi.org/10.1145/359863.359878
