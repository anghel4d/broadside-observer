---
title: "A Wait-free Queue with Polylogarithmic Step Complexity"
authors:
  - "Hossein Naderibeni"
  - "Eric Ruppert"
year: 2023
venue: "arXiv:cs.DC"
arxiv: "2305.07229"
doi: null
source: "https://arxiv.org/abs/2305.07229"
topics:
  - lockfree
seed_rank: 289
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "hpc"
relevance_score: 9
---

# A Wait-free Queue with Polylogarithmic Step Complexity

## One-sentence takeaway

We present a novel linearizable wait-free queue implementation using single-word CAS instructions.

## Why it matters here

Systems/HPC craft relevant to Anoptic concurrency, allocators, and parallel jobbing (A Wait-free Queue with Polylogarithmic Step Complexity).

## Key ideas

- We present a novel linearizable wait-free queue implementation using single-word CAS instructions.
- Previous lock-free queue implementations from CAS all have amortized step complexity of $Ω(p)$ per operation in worst-case executions, where $p$ is the number of processes that access the queue.
- Our new wait-free queue takes $O(\log p)$ steps per enqueue and $O(\log^2 p +\log q)$ steps per dequeue, where $q$ is the size of the queue.
- A bounded-space version of the implementation has $O(\log p \log(p+q))$ amortized step complexity per operation.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2305.07229](https://arxiv.org/abs/2305.07229)
- URL: https://arxiv.org/abs/2305.07229
