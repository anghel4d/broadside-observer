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
seed_rank: 956
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
see:
  - "013-attention-is-all-you-need"
---

# Graph Attention Networks

## One-sentence takeaway

GAT stacks masked self-attention over graph neighbourhoods so each node weights its neighbours without spectral inversions or a fixed grid, and matches then-SOTA on Cora, Citeseer, Pubmed, and inductive PPI.

## Why it matters here

Attention as a morphism on a graph, not a sequence. Weaves and geometric deep learning both need this non-grid case; Anoptic/GRID entity graphs are the same shape.

## Key ideas

- ICLR 2018; arXiv:1710.10903. OpenReview `rJXMpikCZ`.
- A layer computes attention coefficients only on existing edges (masked softmax), then aggregates neighbour features — no Laplacian eigendecomposition, no upfront global graph operator.
- Multi-head attention stabilizes the coefficients; the same layer works transductively (citation nets) and inductively (unseen PPI test graphs).
- Addresses several spectral-GNN failure modes at once: dependence on a known Laplacian, costly matrix ops, and poor transfer to new graphs.

## Caveats

## Links

- arXiv: [1710.10903](https://arxiv.org/abs/1710.10903)
- OpenReview: https://openreview.net/forum?id=rJXMpikCZ
