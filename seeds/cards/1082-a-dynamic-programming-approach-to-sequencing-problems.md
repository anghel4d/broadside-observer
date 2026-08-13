---
title: A Dynamic Programming Approach to Sequencing Problems
authors:
- Michael Held
- Richard M. Karp
year: 1962
venue: JACM
arxiv: null
doi: 10.1145/321105.321111
source: "https://doi.org/10.1145/321105.321111"
topics:
- held-karp
- tsp
- dynamic-programming
seed_rank: 1082
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
  card: 1081-dynamic-programming
- title: "Paths, Trees, and Flowers"
  url: "https://doi.org/10.4153/CJM-1965-045-4"
  year: 1965
  arxiv: null
  doi: 10.4153/CJM-1965-045-4
  card: 1083-paths-trees-and-flowers
---

# A Dynamic Programming Approach to Sequencing Problems

## One-sentence takeaway

Held-Karp DP for TSP — O(n^2 2^n) exact exponential algorithm.

## Why it matters here

Canonical exact TSP; template for subset DP on paths.

## Key ideas

- State over visited sets and endpoint.
- Exponential yet vastly better than n!.
- Root of many subset-DP techniques.
- Linked to later Lagrangian relaxations.

## Caveats

- Still exponential — fine for small n only.
- Large TSP needs heuristics/approx.

## Links

- DOI: [10.1145/321105.321111](https://doi.org/10.1145/321105.321111)
- URL: https://doi.org/10.1145/321105.321111
