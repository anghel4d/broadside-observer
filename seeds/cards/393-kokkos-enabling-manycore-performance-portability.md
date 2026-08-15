---
title: "Kokkos: Enabling manycore performance portability through polymorphic memory access patterns"
authors:
  - "H. Carter Edwards"
  - "Christian R. Trott"
  - "Daniel Sunderland"
year: 2014
venue: "Journal of Parallel and Distributed Computing"
arxiv: null
doi: "10.1016/j.jpdc.2014.07.003"
source: "https://doi.org/10.1016/j.jpdc.2014.07.003"
topics:
  - hpc
  - portability
seed_rank: 393
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 7
cites:
  - title: "StarPU: a unified platform for task scheduling on heterogeneous multicore architectures"
    url: "https://doi.org/10.1002/cpe.1631"
    year: 2011
    arxiv: null
    doi: "10.1002/cpe.1631"
  - title: "Intel Threading Building Blocks"
    url: "https://doi.org/10.5555/1352079"
    year: 2007
    arxiv: null
    doi: "10.5555/1352079"
see:
  - "397-starpu-a-unified-platform-for-task-scheduling-on-heterogeneo"
---

# Kokkos: Enabling manycore performance portability through polymorphic memory access patterns

## One-sentence takeaway

Kokkos separates how you loop (`parallel_for` / `parallel_reduce` on an execution space) from how arrays are laid out (`View` on a memory space) so the same kernel can target CUDA, OpenMP, or serial without a rewrite.

## Why it matters here

Anoptic is C + Vulkan, not C++/Kokkos, but the split is the lesson: don’t bake “AoS on the host” into every kernel. GRID COMMAND compute that might later move to a different backend should name the access pattern once (layout, space) and keep the math generic.

## Key ideas

- `View<T**>` is a multidimensional array whose layout (row/column, striding, padding) is a template policy, not a coding convention.
- Execution spaces (Serial, OpenMP, Cuda, …) and memory spaces (Host, CudaUVM, …) are independent; mapping between them is explicit.
- Work is dispatched as parallel patterns (`for`, `reduce`, `scan`) rather than raw threads, so the runtime picks a team/league mapping per device.
- Performance portability is the claim: one source, competitive with native CUDA/OpenMP on each platform in the paper’s mini-apps.

## Caveats

## Links

- DOI: https://doi.org/10.1016/j.jpdc.2014.07.003
- Kokkos site: https://kokkos.org/
