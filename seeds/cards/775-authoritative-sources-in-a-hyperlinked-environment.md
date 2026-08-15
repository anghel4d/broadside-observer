---
title: Authoritative Sources in a Hyperlinked Environment
authors:
- Jon M. Kleinberg
year: 1999
venue: Journal of the ACM
arxiv: null
doi: 10.1145/324133.324140
source: "https://doi.org/10.1145/324133.324140"
topics:
- hits
- link-analysis
seed_rank: 775
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: algorithms-and-complexity
cites:
- title: "The PageRank Citation Ranking: Bringing Order to the Web"
  url: "https://www.cis.upenn.edu/~mkearns/teaching/NetworkedLife/pagerank.pdf"
  year: 1999
  arxiv: null
  doi: null
see:
- "774-the-pagerank-citation-ranking-bringing-order-to-the-web"
---

# Authoritative Sources in a Hyperlinked Environment

## One-sentence takeaway

HITS iterates hub and authority scores on a query-focused subgraph so a page is an authority if good hubs point to it and a hub if it points to good authorities.

## Why it matters here

This is the bipartite-endorsement foil to PageRank: the right ranking story when Broadside or GRID COMMAND wants “who curates” versus “who is cited,” not a single global eigenvector.

## Key ideas

- A query seeds a base set (search hits plus their in- and out-neighbors); HITS then runs only on that subgraph.
- Update $a\leftarrow A^\top h$ and $h\leftarrow Aa$ (or the symmetric pair of iterates) and renormalize; the principal singular vectors of the adjacency matrix are the limit.
- Mutual reinforcement separates concentrated authorities from pages that merely compile links.
- The same spectral view later feeds topic-sensitive and query-dependent ranking.

## Caveats

## Links

- DOI: [10.1145/324133.324140](https://doi.org/10.1145/324133.324140)
- URL: https://doi.org/10.1145/324133.324140
