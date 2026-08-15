---
title: A Theorem on Boolean Matrices
authors:
  - Stephen Warshall
year: 1962
venue: JACM
arxiv: null
doi: 10.1145/321105.321107
source: "https://doi.org/10.1145/321105.321107"
topics:
  - transitive-closure
  - warshall
seed_rank: 741
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: maths-foundations
relevance_score: 9
lineage: algorithms-and-complexity
cites: []
see: []
---

# A Theorem on Boolean Matrices

## One-sentence takeaway

The transitive closure of a Boolean relation is computed by the same triple loop as Floyd shortest paths, with \(\lor\)/\(\land\) in place of \(\min\)/\(+\).

## Why it matters here

Dependency, effect, and reachability graphs inside the engine and Broadside notes are Boolean closures. Warshall is the \(O(n^3)\) baseline; bitset packing is engineering on top of this theorem.

## Key ideas

- If \(R\) is an \(n\times n\) Boolean matrix, iterating \(R_{ij} \leftarrow R_{ij} \lor (R_{ik} \land R_{kj})\) over all \(k\) yields the reflexive-transitive closure.
- The proof is that after the \(k\)-th stage, paths whose internal vertices lie in \(\{1,\ldots,k\}\) are accounted for.
- Floyd’s Algorithm 97 is the tropical (min-plus) twin published the same year.
- JACM 9(1), January 1962, pp. 11–12 — a two-page note.
- Sparse graphs later prefer DFS/BFS or combinatorial Boolean matrix multiplication; this is the dense algorithm.

## Caveats

## Links

- DOI: [10.1145/321105.321107](https://doi.org/10.1145/321105.321107)
- ACM: https://dl.acm.org/doi/10.1145/321105.321107
