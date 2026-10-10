---
title: "Graphoid Automata, Frobenius PROPs, and Semiring Evaluation"
authors:
  - "Antonios Kalampakas"
year: 2026
venue: "arXiv"
arxiv: "2610.03897"
doi: null
source: "https://arxiv.org/abs/2610.03897"
topics:
  - "category-theory"
  - "frobenius"
  - "semirings"
  - "graph-rewriting"
seed_rank: 2262
seed_batch: "curiosity-2026-10-11"
reviewed: "2026-10-11"
pool: "languages"
relevance_score: 7
cites:
  - title: "Graphoid Automata, Frobenius PROPs, and Semiring Evaluation"
    url: "https://arxiv.org/abs/2610.03897"
    year: 2026
    arxiv: "2610.03897"
    doi: null
see: ["1027-a-critical-pair-enumeration-algorithm-for-string-diagram-rewriting", "951-an-introduction-to-string-diagrams-for-computer-scientists"]
---

# Graphoid Automata, Frobenius PROPs, and Semiring Evaluation

## One-sentence takeaway

The classical graphoid equations for automata that evaluate graphs are exactly the special commutative Frobenius equations, and the paper pins down when swapping relations for semiring-weighted matrices keeps evaluation well defined.

## Why it's lovely

Graph evaluation by composing matrices over a semiring is basically einsum/tensor-network contraction, so this gives ano a clean algebraic test for which rewrites of a contraction expression preserve its value under a given semiring (e.g. the bone law holds exactly when |Q|·1 = 1).

## Key ideas

- **Graphoid = Frobenius.** Classical graphoid equations are equivalent to special commutative Frobenius equations plus symmetry laws.
- **Bone law.** Deletes isolated internal vertices; holds for the canonical structure iff |Q|·1_K = 1_K.
- **Uniform criterion.** For any finite state set and commutative semiring, decides when two structural expressions give the same matrix.
- **Relational compositions** are preserved iff the semiring is additively idempotent (|Q| ≥ 2).

## Caveats

Purely theoretical; no implementation or algorithmic results. Preprint, Oct 2026.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.03897
- PDF: https://arxiv.org/pdf/2610.03897
