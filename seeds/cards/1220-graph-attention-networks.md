---
title: "Graph Attention Networks"
authors:
  - "Petar Veličković"
  - "Guillem Cucurull"
  - "Arantxa Casanova"
  - "Adriana Romero"
  - "Pietro Liò"
  - "Yoshua Bengio"
year: 2018
venue: "ICLR"
arxiv: "1710.10903"
doi: null
source: "https://arxiv.org/abs/1710.10903"
topics:
  - "gat"
  - "graphs"
  - "attention"
seed_rank: 1220
seed_batch: "user-add-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 8
lineage: categorical-deep-learning
cites:
  - title: "Attention Is All You Need"
    url: "https://arxiv.org/abs/1706.03762"
    year: 2017
    arxiv: "1706.03762"
    card: "014-attention-is-all-you-need"
---

# Graph Attention Networks

## One-sentence takeaway

Masked self-attention on graph neighbourhoods (GAT) — attention without assuming a grid, and a key exhibit for Geometric Deep Learning.

## Why it matters here

Attention as a morphism on a graph, not a sequence. Weaves/GDL both need this non-grid case.

## Key ideas

- ICLR 2018; arXiv:1710.10903. OpenReview `rJXMpikCZ`.
- Nodes attend over neighbours; no costly inversions; inductive and transductive.
- Cora/Citeseer/Pubmed and PPI benchmarks.

## Caveats

- Architecture paper. Categorical content is indirect (via GDL / Weaves citations).

## Links

- arXiv: [1710.10903](https://arxiv.org/abs/1710.10903)
- OpenReview: https://openreview.net/forum?id=rJXMpikCZ
