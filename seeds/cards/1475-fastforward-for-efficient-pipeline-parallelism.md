---
title: "FastForward for Efficient Pipeline Parallelism: a Cache-Optimized Concurrent Lock-Free Queue"
authors: ["John Giacomoni", "Tipp Moseley", "Manish Vachharajani"]
year: 2008
venue: "PPoPP"
arxiv: null
doi: "10.1145/1345206.1345215"
source: "https://doi.org/10.1145/1345206.1345215"
topics: [lockfree-game-parallelism]
seed_rank: 1475
seed_batch: "craft-2026-08-31"
reviewed: "2026-08-31"
pool: "engines"
relevance_score: 9
lineage: concurrent-data-structures
cites:
  - title: "Simple, Fast, and Practical Non-Blocking and Blocking Concurrent Queue Algorithms"
    url: "https://doi.org/10.1145/248052.248106"
    year: 1996
    arxiv: null
    doi: "10.1145/248052.248106"
  - title: "Specifying Concurrent Program Modules"
    url: "https://doi.org/10.1145/69610.357207"
    year: 1983
    arxiv: null
    doi: "10.1145/69610.357207"
  - title: "Linearizability: A Correctness Condition for Concurrent Objects"
    url: "https://doi.org/10.1145/78969.78972"
    year: 1990
    arxiv: null
    doi: "10.1145/78969.78972"
see:
  - "031-michael-scott-lock-free-queue"
  - "203-linearizability-a-correctness-condition-for-concurrent-objec"
---

# FastForward for Efficient Pipeline Parallelism: a Cache-Optimized Concurrent Lock-Free Queue

## One-sentence takeaway

An SPSC lock-free ring that couples control into the slot itself (NULL means empty) so head/tail stay thread-local — no CAS, no shared indices — plus temporal slipping so producer and consumer never share a cache line.

## Why it matters here

Anoptic buses are leftover of the MPMC pile (Michael–Scott 31, LCRQ 423, Disruptor 347). The common path on a frame is *pipeline*: sim thread → render thread, or job worker → GPU submit, one producer and one consumer. FastForward is the SPSC recipe that pile skipped: 28.5 ns enqueue/dequeue on a 2.66 GHz Opteron 2218 (PPoPP numbers; the 2007 TR measured 36–40 ns on a 2.0 GHz 270), 5× Lamport’s shared-index queue, no atomic RMW. Steal the coupling + slip, not the NIC demo. Fine-grain stages (≤ 200 ns of work) become affordable; a 16.6 ms frame can carry tens of thousands of bus hops without a CAS storm.

## Key ideas

- **Control lives in the slot.** Enqueue fails if `buffer[head] != NULL`; else write the pointer and bump a *private* head. Dequeue fails if the slot is NULL; else take the pointer, write NULL, bump a *private* tail. Head and tail never leave their core’s cache in Modified. Lamport’s 1983 SPSC still shares those indices and thrashes M↔S every hop.
- **Weak-memory by construction.** The data write *is* the release; the NULL-check *is* the acquire. No fence on TSO; the paper proves the same code on strong-to-very-weak models. Linearization points are the successful slot writes.
- **Temporal slipping.** Keep at least one cache line of filled slots between producer and consumer (GOOD ≈ 6 lines, DANGER ≈ 2 in the TR). Compulsory transfers drop to one per line (8 pointer hops on 64 B / 64-bit). Throughput stays 2× sequential; latency rises only by the slip.
- **Fine-grain pipeline.** Three stages (NIC in / app / NIC out) forwarded gigabit Ethernet at 1.428 Mfps — the NIC’s limit — because lock queues ate ≥ 200 ns (≥ 60% of the 672 ns frame budget) and FastForward ate 36–40 ns.

## Caveats

SPSC only; Anoptic’s many-to-one buses still want LCRQ/MS or a Disruptor. NULL must be a reserved empty token (pointer queues are the happy case; tagged payloads need a spare bit or a side bitmap). Slip thresholds want a one-time tune per µarch — B-Queue later complained GOOD/DANGER are machine-specific. PPoPP 2008 is the peer paper; CU-CS-1028-07 is the TR with the 36 ns figure. Do not remint 31 / 347 / 423.

## Links

- DOI: [10.1145/1345206.1345215](https://doi.org/10.1145/1345206.1345215)
- Tech report PDF (CU-CS-1028-07): https://spl.cde.state.co.us/artemis/ucbserials/ucb51110internet/2007/ucb511101028internet.pdf
