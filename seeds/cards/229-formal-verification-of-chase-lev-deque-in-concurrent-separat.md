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

A Coq mechanization in concurrent separation logic proves linearizability of an unbounded, realistic Chase-Lev deque and extends the proof toward safe reclamation and relaxed memory.

## Why it matters here

Anoptic's work-stealing job system is a Chase-Lev deque; this is the proof that the algorithm we would actually ship — unbounded, not a toy ring — is linearizable.

## Key ideas

- Prior Chase-Lev proofs missed at least one of: small TCB, unrestricted implementation, strong spec.
- The thesis hits all three: Coq + concurrent separation logic, unbounded task capacity, linearizability.
- Owner push/pop and thief steal are the operations under proof.
- An extension covers safe memory reclamation of retired array blocks.
- A further sketch targets the weak-memory Chase-Lev used in real C++/Rust runtimes.

## Caveats

## Links

- arXiv: [2309.03642](https://arxiv.org/abs/2309.03642)
- PDF: https://arxiv.org/pdf/2309.03642
