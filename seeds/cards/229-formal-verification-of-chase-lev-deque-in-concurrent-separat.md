---
title: "Formal Verification of Chase-Lev Deque in Concurrent Separation Logic"
authors:
  - "Jaemin Choi"
year: 2023
venue: "arXiv:cs.LO"
arxiv: "2309.03642"
doi: null
source: "https://arxiv.org/abs/2309.03642"
topics:
  - memory-allocation
  - work-stealing-schedulers
seed_rank: 229
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: work-stealing-schedulers
cites:
  - title: "Dynamic Circular Work-Stealing Deque"
    url: "https://doi.org/10.1145/1073970.1073974"
    year: 2005
    doi: "10.1145/1073970.1073974"
  - title: "Correct and Efficient Work-Stealing for Weak Memory Models"
    url: "https://doi.org/10.1145/2442516.2442524"
    year: 2013
    doi: "10.1145/2442516.2442524"
see:
  - "291-dynamic-circular-work-stealing-deque"
  - "434-correct-and-efficient-work-stealing-for-weak-memory-models"
---

# Formal Verification of Chase-Lev Deque in Concurrent Separation Logic

## One-sentence takeaway

Chase-Lev deque is a concurrent data structure designed for efficient load balancing in multiprocessor scheduling.

## Why it matters here

Systems/HPC craft relevant to Anoptic concurrency, allocators, and parallel jobbing (Formal Verification of Chase-Lev Deque in Concurrent Separation Logic).

## Key ideas

- Chase-Lev deque is a concurrent data structure designed for efficient load balancing in multiprocessor scheduling.
- It employs a work-stealing-schedulers strategy, where each thread possesses its own work-stealing-schedulers deque to store tasks, and idle threads steal tasks from other threads.
- However, given the inherent risk of bugs in software, particularly in a multiprocessor environment, it is crucial to formally establish the correctness of programs and data structures.
- To our knowledge, no formal verification work for the Chase-Lev deque has met three key criteria: (1) utilizing a minimal trusted computing base, (2) using a realistic and unrestricted implementation, and (3) proving a strong specification.
- In this thesis, we address this gap by presenting the formal verification of the Chase-Lev deque using a concurrent separation logic.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2309.03642](https://arxiv.org/abs/2309.03642)
- URL: https://arxiv.org/abs/2309.03642
