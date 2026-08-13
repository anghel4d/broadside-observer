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
seed_rank: 223
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
cites:
  - title: "The Art of Multiprocessor Programming"
    url: "https://doi.org/10.1016/c2011-0-06993-4"
    year: 2020
    arxiv: null
    doi: "10.1016/c2011-0-06993-4"
  - title: "{SNAP Datasets}: {Stanford} Large Network Dataset Collection"
    url: "https://openalex.org/W2755088640"
    year: 2014
    arxiv: null
    doi: null
  - title: "Cores that don't count"
    url: "https://doi.org/10.1145/3458336.3465297"
    year: 2021
    arxiv: null
    doi: "10.1145/3458336.3465297"
  - title: "The PageRank Citation Ranking : Bringing Order to the Web"
    url: "http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.31.1768"
    year: 1999
    arxiv: null
    doi: null
  - title: "The SuiteSparse Matrix Collection Website Interface"
    url: "https://doi.org/10.21105/joss.01244"
    year: 2019
    arxiv: null
    doi: "10.21105/joss.01244"
  - title: "Fast incremental and personalized PageRank"
    url: "https://doi.org/10.14778/1929861.1929864"
    year: 2010
    arxiv: null
    doi: "10.14778/1929861.1929864"
  - title: "Parallel Vertex Color Update on Large Dynamic Networks"
    url: "https://doi.org/10.1109/hipc56025.2022.00027"
    year: 2022
    arxiv: null
    doi: "10.1109/hipc56025.2022.00027"
  - title: "Efficient parallel algorithms for dynamic closeness‐ and betweenness centrality"
    url: "https://doi.org/10.1002/cpe.6650"
    year: 2021
    arxiv: null
    doi: "10.1002/cpe.6650"
  - title: "Dynamic Batch Parallel Algorithms for Updating PageRank"
    url: "https://doi.org/10.1109/ipdpsw55747.2022.00186"
    year: 2022
    arxiv: null
    doi: "10.1109/ipdpsw55747.2022.00186"
  - title: "FPPR: fast pessimistic (dynamic) PageRank to update PageRank in evolving directed graphs on network changes"
    url: "https://doi.org/10.1007/s13278-022-00968-8"
    year: 2022
    arxiv: null
    doi: "10.1007/s13278-022-00968-8"
  - title: "MELOPPR: Software/Hardware Co-design for Memory-efficient Low-latency Personalized PageRank"
    url: "https://doi.org/10.1109/dac18074.2021.9586129"
    year: 2021
    arxiv: null
    doi: "10.1109/dac18074.2021.9586129"
  - title: "An Improved/Optimized Practical Non-Blocking PageRank Algorithm for Massive Graphs*"
    url: "https://doi.org/10.1007/s10766-022-00725-6"
    year: 2022
    arxiv: null
    doi: "10.1007/s10766-022-00725-6"
see:
  - "124-the-art-of-multiprocessor-programming"
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
