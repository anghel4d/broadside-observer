---
title: "An Asynchronous Scheme for Rollback Recovery in Message-Passing Concurrent Programming Languages"
authors:
  - "Germán Vidal"
year: 2023
venue: "ACM SAC 2024"
arxiv: "2401.00087"
doi: "10.1145/3605098.3636051"
source: "https://arxiv.org/abs/2401.00087"
topics:
  - netcode
seed_rank: 228
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "realtime"
relevance_score: 9
cites:
  - title: "Time, clocks, and the ordering of events in a distributed system"
    url: "https://doi.org/10.1145/359545.359563"
    year: 1978
    arxiv: null
    doi: "10.1145/359545.359563"
  - title: "A survey of rollback-recovery protocols in message-passing systems"
    url: "https://doi.org/10.1145/568522.568525"
    year: 2002
    arxiv: null
    doi: "10.1145/568522.568525"
  - title: "A theory of reversibility for Erlang"
    url: "https://doi.org/10.1016/j.jlamp.2018.06.004"
    year: 2018
    arxiv: null
    doi: "10.1016/j.jlamp.2018.06.004"
see:
  - "785-time-clocks-and-the-ordering-of-events-in-a-distributed-syst"
---

# An Asynchronous Scheme for Rollback Recovery in Message-Passing Concurrent Programming Languages

## One-sentence takeaway

A checkpoint-based rollback for shared-nothing message-passing languages adds `check`, `commit`, and `rollback` as asynchronous operators so recovery can be implemented by source-to-source instrumentation with no coordinator.

## Why it matters here

GGPO-style netcode and Anoptic deterministic lockstep both need a language-level rollback story that does not stop the world; Vidal's three operators are the PL version of that protocol.

## Key ideas

- Target language: processes communicate only by send/receive; no shared memory.
- Recovery is checkpoint-based and fully decentralized — no central coordinator.
- Three new operators: check (take a checkpoint), commit (discard it), rollback (restore).
- Asynchrony is required so a source-to-source transform can implement the protocol without adding blocking runtime services.
- Non-determinism of message interleavings is why exhaustive prediction of failures is impossible and rollback is the recovery tool. ACM SAC 2024.

## Caveats

## Links

- arXiv: [2401.00087](https://arxiv.org/abs/2401.00087)
- DOI: [10.1145/3605098.3636051](https://doi.org/10.1145/3605098.3636051)
- PDF: https://arxiv.org/pdf/2401.00087
