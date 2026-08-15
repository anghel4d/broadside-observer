---
title: "Cpp-Taskflow: A General-purpose Parallel and Heterogeneous Task Programming System"
authors:
  - "Tsung-Wei Huang"
  - "Dian-Lun Lin"
  - "Chun-Xun Lin"
  - "Yibo Lin"
year: 2021
venue: "IEEE TPDS"
arxiv: "2004.10908"
doi: "10.1109/TPDS.2021.3104255"
source: "https://arxiv.org/abs/2004.10908"
topics:
  - task-graph
seed_rank: 317
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 8
cites:
  - title: "The Implementation of the Cilk-5 Multithreaded Language"
    url: "https://doi.org/10.1145/277650.277725"
    year: 1998
    arxiv: null
    doi: "10.1145/277650.277725"
  - title: "Intel Threading Building Blocks"
    url: "https://www.oreilly.com/library/view/intel-threading-building/9780596514808/"
    year: 2007
    arxiv: null
    doi: null
see:
  - "305-the-implementation-of-the-cilk-5-multithreaded-language"
  - "403-intel-threading-building-blocks"
---

# Cpp-Taskflow: A General-purpose Parallel and Heterogeneous Task Programming System

## One-sentence takeaway

Taskflow (the evolved Cpp-Taskflow) is a C++ task-graph runtime with in-graph control flow and CUDA-graph offload, so one graph can express CPU work, GPU work, and conditional cycles end to end.

## Why it matters here

Ano/Broadside frame graphs and agent job graphs need composable dependencies plus heterogeneous offload; this is the modern C++ library that actually ships that model, not a fork/join pool.

## Key ideas

- Programming model: `tf::Taskflow` plus `precede`/`succeed` edges, condition tasks that re-enter the graph, and composed subgraphs.
- Runtime is a work-stealing executor that also lowers GPU sub-graphs onto CUDA Graph to cut launch overhead.
- Reported result: a large ML workload up to 29% faster, 1.5× less memory, and 1.9× higher throughput than oneTBB on 40 CPUs + 4 GPUs.
- Header-only C++ library at https://github.com/taskflow/taskflow.

## Caveats

## Links

- arXiv: [2004.10908](https://arxiv.org/abs/2004.10908)
- DOI: [10.1109/TPDS.2021.3104255](https://doi.org/10.1109/TPDS.2021.3104255)
- Project: https://taskflow.github.io/
