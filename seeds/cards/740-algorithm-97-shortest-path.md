---
title: "Algorithm 97: Shortest Path"
authors:
  - Robert W. Floyd
year: 1962
venue: Communications of the ACM
arxiv: null
doi: 10.1145/367766.368168
source: "https://doi.org/10.1145/367766.368168"
topics:
  - shortest-paths
  - floyd-warshall
seed_rank: 740
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 10
lineage: algorithms-and-complexity
cites: []
see: []
---

# Algorithm 97: Shortest Path

## One-sentence takeaway

All-pairs shortest paths on a dense \(n\times n\) matrix are three nested loops that try each vertex as an intermediate — Floyd’s algorithm, the same skeleton as Warshall closure.

## Why it matters here

Small complete distance tables (squad-scale nav, effect-graph closure, a few dozen GRID COMMAND regions) should be this triple loop, not \(n\) Dijkstras and not a GPU kernel. Cite Warshall 1962 for the Boolean-closure twin.

## Key ideas

- In-place update \(a_{ij} \leftarrow \min(a_{ij}, a_{ik}+a_{kj})\) for \(k,i,j\) in \(1..n\).
- The same control structure computes transitive closure if \(+\)/\(\min\) become \(\lor\)/\(\land\).
- Clear \(O(n^3)\) time and \(O(n^2)\) memory; no priority queue.
- CACM 5(6), June 1962, p. 345 — an Algorithm department note, not a long paper.
- Roy (1959) and Warshall (1962) share credit for the closure form.

## Caveats

## Links

- DOI: [10.1145/367766.368168](https://doi.org/10.1145/367766.368168)
- ACM: https://dl.acm.org/doi/10.1145/367766.368168
