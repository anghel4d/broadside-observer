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
  - title: "Multiparty asynchronous session types"
    url: "https://doi.org/10.1145/1328438.1328472"
    year: 2008
    arxiv: null
    doi: "10.1145/1328438.1328472"
  - title: "Rollback Recovery in Session-Based Programming"
    url: "https://doi.org/10.1007/978-3-031-35361-1_11"
    year: 2023
    arxiv: null
    doi: "10.1007/978-3-031-35361-1_11"
  - title: "A theory of reversibility for Erlang"
    url: "https://doi.org/10.1016/j.jlamp.2018.06.004"
    year: 2018
    arxiv: null
    doi: "10.1016/j.jlamp.2018.06.004"
  - title: "Causal-Consistent Replay Reversible Semantics for Message Passing Concurrent Programs"
    url: "https://doi.org/10.3233/fi-2021-2005"
    year: 2021
    arxiv: null
    doi: "10.3233/fi-2021-2005"
  - title: "Reversible Choreographies via Monitoring in Erlang"
    url: "https://doi.org/10.1007/978-3-319-93767-0_6"
    year: 2018
    arxiv: null
    doi: "10.1007/978-3-319-93767-0_6"
  - title: "Playing with Bisimulation in Erlang"
    url: "https://doi.org/10.1007/978-3-030-21485-2_6"
    year: 2019
    arxiv: null
    doi: "10.1007/978-3-030-21485-2_6"
  - title: "Transactional actors: communication in transactions"
    url: "https://doi.org/10.1145/3141865.3141866"
    year: 2017
    arxiv: null
    doi: "10.1145/3141865.3141866"
  - title: "A General Approach to Derive Uncontrolled Reversible Semantics"
    url: "https://drops.dagstuhl.de/entities/document/10.4230/LIPIcs.CONCUR.2020.33"
    year: 2020
    arxiv: null
    doi: "10.4230/lipics.concur.2020.33"
  - title: "Transactors"
    url: "https://doi.org/10.1145/1040305.1040322"
    year: 2005
    arxiv: null
    doi: "10.1145/1040305.1040322"
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
