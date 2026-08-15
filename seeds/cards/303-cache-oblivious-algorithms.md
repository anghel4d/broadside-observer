---
title: "Cache-Oblivious Algorithms"
authors:
  - "Matteo Frigo"
  - "Charles E. Leiserson"
  - "Harald Prokop"
  - "Sridhar Ramachandran"
year: 1999
venue: "FOCS"
arxiv: null
doi: "10.1109/SFFCS.1999.814600"
source: "https://doi.org/10.1109/SFFCS.1999.814600"
topics:
  - cache
  - algorithms
seed_rank: 303
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
cites:
  - title: "The input/output complexity of sorting and related problems"
    url: "https://doi.org/10.1145/48529.48535"
    year: 1988
    arxiv: null
    doi: "10.1145/48529.48535"
  - title: "The cache performance and optimizations of blocked algorithms"
    url: "https://doi.org/10.1145/106972.106981"
    year: 1991
    arxiv: null
    doi: "10.1145/106972.106981"
  - title: "FFTW: an adaptive software architecture for the FFT"
    url: "https://doi.org/10.1109/icassp.1998.681704"
    year: 1998
    arxiv: null
    doi: "10.1109/icassp.1998.681704"
see: []
---

# Cache-Oblivious Algorithms

## One-sentence takeaway

An algorithm that never mentions cache size or line length can still match the asymptotic I/O bounds of a cache-aware algorithm, if it is written as a recursive divide-and-conquer that fits the ideal-cache model.

## Why it matters here

Ano engine SoA rows, navmesh tiles, and GPU staging buffers all sit in unknown cache hierarchies; cache-oblivious layouts are the design that stays fast when L1/L2/LLC sizes change under the agent.

## Key ideas

- The ideal-cache model has a fully associative cache of `M` words in lines of `B` words, with optimal replacement; the algorithm itself is not allowed to know `M` or `B`.
- Tall-cache (`M = Ω(B²)`) plus recursive blocking yields optimal matrix transpose and matrix multiply: work is done in submatrices that eventually fit in cache without an explicit blocking parameter.
- Funnelsort and the cache-oblivious FFT achieve the same I/O bounds as their cache-aware counterparts.
- Because every level of a real hierarchy looks like an ideal cache to the level above, one recursive layout is automatically multi-level.
- The paper is the FOCS 1999 source for “write the recursion, let the caches fall out.”

## Caveats

## Links

- DOI: [10.1109/SFFCS.1999.814600](https://doi.org/10.1109/SFFCS.1999.814600)
- PDF: https://cs.uwaterloo.ca/~imunro/cs840/frigo.pdf
