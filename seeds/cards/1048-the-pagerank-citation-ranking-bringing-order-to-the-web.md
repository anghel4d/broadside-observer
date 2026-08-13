---
title: "The PageRank Citation Ranking: Bringing Order to the Web"
authors:
- Lawrence Page
- Sergey Brin
- Rajeev Motwani
- Terry Winograd
year: 1999
venue: Stanford InfoLab Technical Report
arxiv: null
doi: null
source: "https://www.cis.upenn.edu/~mkearns/teaching/NetworkedLife/pagerank.pdf"
topics:
- pagerank
- graphs
- ranking
seed_rank: 1048
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
  card: 1049-authoritative-sources-in-a-hyperlinked-environment
---

# The PageRank Citation Ranking: Bringing Order to the Web

## One-sentence takeaway

PageRank — eigenvector centrality with damping as a web-scale ranking signal.

## Why it matters here

Graph ranking template for authority and link analysis (distinct from card 284 lock-free dynamic variant).

## Key ideas

- Random surfer with damping factor.
- Power iteration on the link matrix.
- Query-independent authority score.
- Scalable sparse matvec viewpoint.

## Caveats

- Tech report; commercial ranking is far richer.
- Sensitive to link spam without defenses.

## Links

- URL: https://www.cis.upenn.edu/~mkearns/teaching/NetworkedLife/pagerank.pdf
