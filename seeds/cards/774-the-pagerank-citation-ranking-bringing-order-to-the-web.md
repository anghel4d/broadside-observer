---
title: "The PageRank Citation Ranking: Bringing Order to the Web"
authors:
- Lawrence Page
- Sergey Brin
- Rajeev Motwani
- Terry Winograd
year: 1999
venue: Stanford InfoLab Technical Report 1999-66
arxiv: null
doi: null
source: "https://www.cis.upenn.edu/~mkearns/teaching/NetworkedLife/pagerank.pdf"
topics:
- pagerank
- graphs
- ranking
seed_rank: 774
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 10
lineage: algorithms-and-complexity
cites:
- title: Authoritative Sources in a Hyperlinked Environment
  url: "https://doi.org/10.1145/324133.324140"
  year: 1999
  arxiv: null
  doi: 10.1145/324133.324140
see:
- "775-authoritative-sources-in-a-hyperlinked-environment"
---

# The PageRank Citation Ranking: Bringing Order to the Web

## One-sentence takeaway

PageRank scores a page as the stationary mass of a random surfer who follows a random out-link with probability $d$ and jumps uniformly with probability $1-d$, computed by power iteration on the damped link matrix.

## Why it matters here

This is the graph-ranking template for Broadside citation radar and for any Anoptic/GRID COMMAND “who endorses whom” graph — query-independent authority as an eigenvector.

## Key ideas

- $R(u)=c\sum_{v\to u}R(v)/N_v$ plus a damping / source-of-rank term that kills rank sinks.
- The random-surfer story justifies the damping factor (classically $0.85$) and turns dangling nodes into a well-posed Markov chain.
- Computation is a sparse matrix–vector multiply iterated to convergence; the paper already discusses scaling to the 1998 web.
- The score is query-independent, so it can be baked into an index and combined later with IR features.

## Caveats

## Links

- PDF: https://www.cis.upenn.edu/~mkearns/teaching/NetworkedLife/pagerank.pdf
- Stanford InfoLab record (1999-66 / SIDL-WP-1999-0120): https://ilpubs.stanford.edu/422/
