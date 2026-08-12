---
title: "Recoverable Lock-Free Locks"
authors:
  - "Hagit Attiya"
  - "Panagiota Fatourou"
  - "Eleftherios Kosmas"
  - "Yuanhao Wei"
year: 2025
venue: "arXiv:cs.DC"
arxiv: "2512.09710"
doi: null
source: "https://arxiv.org/abs/2512.09710"
topics:
  - lockfree
seed_rank: 278
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
---

# Recoverable Lock-Free Locks

## One-sentence takeaway

This paper presents the first transformation that introduces both lock-freedom and recoverability.

## Why it matters here

Systems/HPC craft relevant to Anoptic concurrency, allocators, and parallel jobbing (Recoverable Lock-Free Locks).

## Key ideas

- This paper presents the first transformation that introduces both lock-freedom and recoverability.
- Our transformation starts with a lock-based implementation, and provides a recoverable, lock-free substitution to lock acquire and lock release operations.
- The transformation supports nested locks for generality and ensures recoverability without jeopardising the correctness of the lock-based implementation it is applied on.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2512.09710](https://arxiv.org/abs/2512.09710)
- URL: https://arxiv.org/abs/2512.09710
