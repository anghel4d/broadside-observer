---
title: "Breaking the $2^n$ barrier for directed hamiltonicity"
authors:
  - "Tomohiro Koana"
  - "Soh Kumabe"
year: 2026
venue: "arXiv:cs.DS"
arxiv: "2609.39062"
doi: null
source: "https://arxiv.org/abs/2609.39062"
topics:
  - "curiosity"
  - "algorithms"
  - "exact-exponential-algorithms"
  - "hamiltonian-cycles"
seed_rank: 1847
seed_batch: "curiosity-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 10
lineage: exact-exponential-algorithms
cites:
  - title: "Breaking the $2^n$ barrier for directed hamiltonicity"
    url: "https://arxiv.org/abs/2609.39062"
    year: 2026
    arxiv: "2609.39062"
    doi: null
see:
  - "806-a-dynamic-programming-approach-to-sequencing-problems"
  - "805-dynamic-programming"
  - "1846-proof-of-lehmers-permutation-conjecture-neighbor-swap"
---

# Breaking the 2^n barrier for directed hamiltonicity

## One-sentence takeaway

A randomized O*(1.9133^n) algorithm for Directed Hamiltonian Cycle: the first improvement in the exponential base for general digraphs since Bellman and Held–Karp's 2^n dynamic programs of 1962.

## Why it's lovely

Why you might love this: the Held–Karp DP (card 806) is the textbook "this is as good as it gets" algorithm, and for directed graphs it stood for 64 years. The break uses algebra instead of tables: count Hamiltonian paths modulo two at each total weight via a Laplacian determinant, then randomly delete and duplicate arcs so that, with decent probability, an odd number of s–t Hamiltonian paths survives a per-vertex choice of arc group. Parity tricks beating DP is the kind of sideways move that wins CTFs and Jane Street puzzles.

## Key ideas

- Main result: O*((375/196)^n) = O*(1.9133^n) randomized time for Directed Hamiltonian Cycle.
- Subroutine: (2 - 2^(-d))^n poly(n, W) time to count Hamiltonian paths mod 2 at each total weight when at most d distinct weights enter each vertex.
- Combines the Björklund–Kaski–Koutis Laplacian determinant method with a random linearization (Arvind–Guruswami).
- To use the isolation lemma with small d: randomly delete/duplicate arcs, partition incoming copies at each vertex into d groups (d at least 2).
- If an s–t Hamiltonian path exists, a group choice yielding an odd number of such paths exists with probability at least (1 - 1/(1 + (2^d - 1)^2))^(n-1).

## Caveats

Randomized (one-sided error) and theoretical: the base improvement is modest and polynomial factors are hidden in O*. Undirected graphs already had faster algorithms (Björklund 2010); this is specifically about general directed graphs. Fresh preprint, not yet peer reviewed.

## Links

- arXiv abs: https://arxiv.org/abs/2609.39062
- PDF: https://arxiv.org/pdf/2609.39062
