---
title: On a Routing Problem
authors:
  - Richard Bellman
year: 1958
venue: Quarterly of Applied Mathematics
arxiv: null
doi: 10.1090/qam/102435
source: "https://doi.org/10.1090/qam/102435"
topics:
  - shortest-paths
  - bellman-ford
seed_rank: 739
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 10
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

# On a Routing Problem

## One-sentence takeaway

Shortest paths in a network are the dynamic-programming recurrence \(d_{k+1}(j) = \min_i(d_k(i) + c_{ij})\), which remains correct when some \(c_{ij}\) are negative.

## Why it matters here

Game and nav graphs in Anoptic routinely have signed costs (risk, opportunity, rewind). Bellman 1958 is the DP core of Bellman–Ford: relax every edge \(|V|-1\) times, then one more pass to detect a negative cycle.

## Key ideas

- The routing problem is posed as a functional equation, not as a graph-library API.
- Iteration of the min-plus recurrence yields shortest walks of increasing hop count.
- Negative lengths are allowed; a negative cycle is visible as a still-improving iterate after \(n-1\) rounds.
- The 1957 *Dynamic Programming* monograph is the method; this QAM paper is the routing specialization.
- Quart. Appl. Math. 16, 1958, pp. 87–90. Dijkstra 1959 is the non-negative counterpart.

## Caveats

## Links

- DOI: [10.1090/qam/102435](https://doi.org/10.1090/qam/102435)
- AMS: https://www.ams.org/journals/qam/1958-16-01/S0033-569X-1958-102435-X/
