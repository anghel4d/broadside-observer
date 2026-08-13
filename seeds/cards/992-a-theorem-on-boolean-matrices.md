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
seed_rank: 992
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: maths-foundations
relevance_score: 9
lineage: algorithms-and-complexity
cites:
- title: "Algorithm 97: Shortest Path"
  url: "https://doi.org/10.1145/367766.368168"
  year: 1962
  arxiv: null
  doi: 10.1145/367766.368168
see:
- "991-algorithm-97-shortest-path"
---

# A Theorem on Boolean Matrices

## One-sentence takeaway

Warshall’s algorithm for transitive closure of Boolean relations.

## Why it matters here

Companion to Floyd; closure appears in dependency and effect graphs.

## Key ideas

- Boolean semiring triple loop.
- Transitive closure via intermediate nodes.
- Simple robust O(n³).
- Taught jointly with Floyd.

## Caveats

- Same limits as Floyd on large sparse graphs.
- Bitset optimizations are engineering.

## Links

- DOI: [10.1145/321105.321107](https://doi.org/10.1145/321105.321107)
- URL: https://doi.org/10.1145/321105.321107
