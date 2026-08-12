---
title: "Lock-Free Computation of PageRank in Dynamic Graphs"
authors:
  - "Subhajit Sahu"
year: 2024
venue: "arXiv:cs.DC"
arxiv: "2407.19562"
doi: "10.1109/IPDPSW63119.2024.00148"
source: "https://arxiv.org/abs/2407.19562"
topics:
  - lockfree
seed_rank: 284
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "hpc"
relevance_score: 9
---

# Lock-Free Computation of PageRank in Dynamic Graphs

## One-sentence takeaway

PageRank is a metric that assigns importance to the vertices of a graph based on its neighbors and their scores.

## Why it matters here

Systems/HPC craft relevant to Anoptic concurrency, allocators, and parallel jobbing (Lock-Free Computation of PageRank in Dynamic Graphs).

## Key ideas

- PageRank is a metric that assigns importance to the vertices of a graph based on its neighbors and their scores.
- Recently, there has been increasing interest in computing PageRank on dynamic graphs, where the graph structure evolves due to edge insertions and deletions.
- However, traditional barrier-based approaches for updating PageRanks encounter significant wait times on certain graph structures, leading to high overall runtimes.
- Additionally, the growing trend of multicore architectures with increased core counts has raised concerns about random thread delays and failures.
- In this study, we propose a lock-free algorithm for updating PageRank scores on dynamic graphs.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2407.19562](https://arxiv.org/abs/2407.19562)
- DOI: [10.1109/IPDPSW63119.2024.00148](https://doi.org/10.1109/IPDPSW63119.2024.00148)
- URL: https://arxiv.org/abs/2407.19562
