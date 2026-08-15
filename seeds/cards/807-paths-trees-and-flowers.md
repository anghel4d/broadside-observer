---
title: "Paths, Trees, and Flowers"
authors:
- Jack Edmonds
year: 1965
venue: Canadian Journal of Mathematics
arxiv: null
doi: 10.4153/CJM-1965-045-4
source: "https://doi.org/10.4153/CJM-1965-045-4"
topics:
- matching
- edmonds
- blossom
seed_rank: 807
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: maths-foundations
relevance_score: 9
lineage: algorithms-and-complexity
cites:
- title: Maximal Flow Through a Network
  url: "https://doi.org/10.4153/CJM-1956-045-5"
  year: 1956
  arxiv: null
  doi: 10.4153/CJM-1956-045-5
see:
- "744-maximal-flow-through-a-network"
---

# Paths, Trees, and Flowers

## One-sentence takeaway

Edmonds’ blossom algorithm computes a maximum matching in a general (non-bipartite) graph in polynomial time by shrinking odd cycles — blossoms — so Berge augmenting paths can be found after all.

## Why it matters here

It is the manifesto that “good characterization / polynomial algorithm” is a real engineering standard, not just bipartite matching or max-flow. Assignment, pairing, and conflict-resolution layers in GRID COMMAND sit on this side of the matching wall.

## Key ideas

- Berge’s theorem still holds on general graphs, but naive search can loop around odd cycles; a blossom is an odd circuit with a stem back to the free vertex.
- Shrinking a blossom to a single supervertex restores a search graph in which an augmenting path, if it exists, is visible.
- The algorithm therefore decides maximum matching in polynomial time, giving a “good characterization” of the matching polytope’s integral vertices.
- Weighted matching and the blossom inequalities come later; this paper is the unweighted combinatorial engine.

## Caveats

## Links

- DOI: [10.4153/CJM-1965-045-4](https://doi.org/10.4153/CJM-1965-045-4)
- URL: https://doi.org/10.4153/CJM-1965-045-4
