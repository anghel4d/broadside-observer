---
title: "An Asynchronous Scheme for Rollback Recovery in Message-Passing Concurrent Programming Languages"
authors:
  - "Germán Vidal"
year: 2023
venue: "arXiv:cs.PL"
arxiv: "2401.00087"
doi: "10.1145/3605098.3636051"
source: "https://arxiv.org/abs/2401.00087"
topics:
  - netcode
seed_rank: 290
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "realtime"
relevance_score: 9
---

# An Asynchronous Scheme for Rollback Recovery in Message-Passing Concurrent Programming Languages

## One-sentence takeaway

Rollback recovery strategies are well-known in concurrent and distributed systems.

## Why it matters here

Realtime/sim/netcode discipline for deterministic or low-latency games (An Asynchronous Scheme for Rollback Recovery in Message-Passing Concurrent Progr).

## Key ideas

- Rollback recovery strategies are well-known in concurrent and distributed systems.
- In this context, recovering from unexpected failures is even more relevant given the non-deterministic nature of execution, which means that it is practically impossible to foresee all possible process interactions.
- In this work, we consider a message-passing concurrent programming language where processes interact through message sending and receiving, but shared memory is not allowed.
- In this context, we design a checkpoint-based rollback recovery strategy that does not need a central coordination.
- For this purpose, we extend the language with three new operators: check, commit, and rollback.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2401.00087](https://arxiv.org/abs/2401.00087)
- DOI: [10.1145/3605098.3636051](https://doi.org/10.1145/3605098.3636051)
- URL: https://arxiv.org/abs/2401.00087
