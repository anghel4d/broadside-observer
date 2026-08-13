---
title: "MCPrioQ: A lock-free algorithm for online sparse markov-chains"
authors:
  - "Jesper Derehag"
  - "Åke Johansson"
year: 2023
venue: "arXiv:cs.LG"
arxiv: "2304.14801"
doi: null
source: "https://arxiv.org/abs/2304.14801"
topics:
  - lockfree
seed_rank: 295
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
cites:
  - title: "Hazard Pointers: Safe Memory Reclamation for Lock-Free Objects"
    url: "https://doi.org/10.1109/tpds.2004.8"
    year: 2004
    arxiv: null
    doi: "10.1109/tpds.2004.8"
  - title: "Michael & Scott Lock-Free Queue"
    url: "https://doi.org/10.1145/248052.248106"
    year: 1996
    arxiv: null
    doi: "10.1145/248052.248106"
  - title: "Wait-Free Synchronization"
    url: "https://doi.org/10.1145/114005.102808"
    year: 1991
    arxiv: null
    doi: "10.1145/114005.102808"
see:
  - "025-hazard-pointers-safe-memory-reclamation-for-lock-free-object"
  - "032-michael-scott-lock-free-queue"
  - "037-wait-free-synchronization"
---

# MCPrioQ: A lock-free algorithm for online sparse markov-chains

## One-sentence takeaway

In high performance systems it is sometimes hard to build very large graphs that are efficient both with respect to memory and compute.

## Why it matters here

Systems/HPC craft relevant to Anoptic concurrency, allocators, and parallel jobbing (MCPrioQ: A lock-free algorithm for online sparse markov-chains).

## Key ideas

- In high performance systems it is sometimes hard to build very large graphs that are efficient both with respect to memory and compute.
- This paper proposes a data structure called Markov-chain-priority-queue (MCPrioQ), which is a lock-free sparse markov-chain that enables online and continuous learning with time-complexity of $O(1)$ for updates and $O(CDF^{-1}(t))$ inference.
- MCPrioQ is especially suitable for recommender-systems for lookups of $n$-items in descending probability order.
- The concurrent updates are achieved using open-addressing and atomic instructions and the lookups are achieved through a novel priority-queue which allows for approximately correct results even during concurrent updates.
- The approximatly correct and lock-free property is maintained by a read-copy-update scheme, but where the semantics have been slightly updated to allow for swap of elements rather than the traditional pop-insert scheme.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2304.14801](https://arxiv.org/abs/2304.14801)
- URL: https://arxiv.org/abs/2304.14801
