---
title: "Episodic Loops: Finitary Event Structures and Operational Semantics for C11 Programs with Retries"
authors:
  - "Christian Kissig"
  - "Jay Richards"
  - "Mark Batty"
year: 2026
venue: "arXiv"
arxiv: "2609.34646"
doi: null
source: "https://arxiv.org/abs/2609.34646"
topics:
  - "lock-free"
  - "memory-models"
seed_rank: 2263
seed_batch: "craft-2026-10-11"
reviewed: "2026-10-11"
pool: "systems"
relevance_score: 8
lineage: c11-memory-model
cites:
  - title: "Episodic Loops: Finitary Event Structures and Operational Semantics for C11 Programs with Retries"
    url: "https://arxiv.org/abs/2609.34646"
    year: 2026
    arxiv: "2609.34646"
    doi: null
see:
  - "1139-foundations-of-the-c-concurrency-memory-model"
  - "1857-can-seqlocks-get-along-with-programming-language-memory-models"
  - "024-hazard-pointers-safe-memory-reclamation-for-lock-free-object"
---

# Episodic Loops: Finitary Event Structures and Operational Semantics for C11 Programs with Retries

## One-sentence takeaway

Unbounded CAS retry loops in C11 lock-free code can be verified in finitely many steps once they are recognised as 'episodic loops' bounded by synchronisation points, and the analysis exposes a real use-after-free in a previously verified RCU variant.

## Why it matters here

Anoptic's job system and ano's runtime lean on CAS-retry loops; the standard folklore that failed iterations 'leave no trace' is shown false under load-store reordering. The episodic-loop pattern is a concrete code-review checklist for every lock-free loop we write.

## Key ideas

- **Bug.** Reordering across failed iterations enables use-after-free in a verified Read-Copy-Update variant; a fix is given and verified.
- **Episodic loops.** A semantic, often syntactically recognisable, class of practical retry loops.
- **Synchronisation points.** Operations that bound both instruction reordering and state space inside such loops.
- **Finitary semantics.** SMRD event-structure semantics (with load-store reordering) gets a finite representation; safety checks run in finitely many steps, linear for the RCU example.
- **Artifacts.** Reference SMRD implementation plus Isabelle/HOL mechanisation of the bug and fix.

## Caveats

Covers loops that fit the episodic pattern only; tooling is a research reference implementation, not a drop-in checker for C++ or Rust codebases. Preprint, 2026-09-28.

## Links

- arXiv abstract: https://arxiv.org/abs/2609.34646
- PDF: https://arxiv.org/pdf/2609.34646
