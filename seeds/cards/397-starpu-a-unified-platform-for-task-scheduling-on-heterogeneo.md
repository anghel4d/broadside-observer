---
title: "StarPU: a unified platform for task scheduling on heterogeneous multicore architectures"
authors:
  - "Cédric Augonnet"
  - "Samuel Thibault"
  - "Raymond Namyst"
  - "Pierre-André Wacrenier"
year: 2011
venue: "Concurrency and Computation: Practice and Experience"
arxiv: null
doi: "10.1002/cpe.1631"
source: "https://doi.org/10.1002/cpe.1631"
topics:
  - task-graph
  - scheduling
seed_rank: 397
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 7
cites:
  - title: "Performance-effective and low-complexity task scheduling for heterogeneous computing"
    url: "https://doi.org/10.1109/71.993206"
    year: 2002
    arxiv: null
    doi: "10.1109/71.993206"
  - title: "A class of parallel tiled linear algebra algorithms for multicore architectures"
    url: "https://doi.org/10.1016/j.parco.2008.10.002"
    year: 2008
    arxiv: null
    doi: "10.1016/j.parco.2008.10.002"
---

# StarPU: a unified platform for task scheduling on heterogeneous multicore architectures

## One-sentence takeaway

StarPU schedules a DAG of codelets onto CPUs and GPUs, keeps a DSM-style handle per buffer, and uses history-based performance models (HEFT-like) to pick the device and the moment.

## Why it matters here

This is the academic ancestor of “submit a task with data dependencies, let the runtime move the buffers.” Anoptic will not link StarPU, but a GRID COMMAND job graph that fans meshlet builds onto CPU and a compute queue is the same scheduler problem.

## Key ideas

- A codelet is a task with several implementations (CPU function, CUDA kernel, OpenCL); the scheduler picks one at runtime.
- Data handles track which device has a valid copy; transfers are implicit edges in the DAG.
- Performance models (calibrated history, or user-provided) feed HEFT / eager / work-stealing policies.
- Heterogeneous = CPU+GPU on one node in this paper; later StarPU-MPI extends the same handles across ranks.

## Caveats

## Links

- DOI: https://doi.org/10.1002/cpe.1631
- Project: https://starpu.gitlabpages.inria.fr/
