---
title: A Dynamic Programming Approach to Sequencing Problems
authors:
- Michael Held
- Richard M. Karp
year: 1962
venue: Journal of the ACM
arxiv: null
doi: 10.1145/321105.321111
source: "https://doi.org/10.1145/321105.321111"
topics:
- held-karp
- tsp
- dynamic-programming
seed_rank: 806
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: maths-foundations
relevance_score: 8
lineage: algorithms-and-complexity
cites:
- title: Dynamic Programming
  url: "https://press.princeton.edu/books/paperback/9780691146683/dynamic-programming"
  year: 1957
  arxiv: null
  doi: null
see:
- "805-dynamic-programming"
---

# A Dynamic Programming Approach to Sequencing Problems

## One-sentence takeaway

Held and Karp give an exact TSP algorithm that tabulates, for every city subset S and endpoint j, the cheapest path that visits each vertex of S once and ends at j, running in O(n² 2ⁿ) rather than n!.

## Why it matters here

It is the canonical subset-DP template: state = (visited set, endpoint). GRID COMMAND patrol / tour heuristics and ano combinatorial kernels still use that state shape even when they switch to branch-and-bound or approximations for larger n.

## Key ideas

- Recurrence: C(S, j) = min_{i ∈ S \ {j}} C(S \ {j}, i) + d(i, j), with C({j}, j) = 0 or the depot edge.
- The exponential is in the subset count, not the permutation count, so n ≈ 20 is exact-solvable and n! is not.
- The same DP applies to other sequencing / scheduling problems whose state is a processed subset.
- Later Held–Karp 1-tree Lagrangian relaxations reuse the same tour dual, but that is a follow-on paper.

## Caveats

## Links

- DOI: [10.1145/321105.321111](https://doi.org/10.1145/321105.321111)
- URL: https://doi.org/10.1145/321105.321111
