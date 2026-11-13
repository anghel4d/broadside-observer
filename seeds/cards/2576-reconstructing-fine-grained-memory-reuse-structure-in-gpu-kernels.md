---
title: "Reconstructing Fine-grained Memory Reuse Structure in GPU Kernels"
authors:
  - "Yanbo Zhao"
  - "Yueming Hao"
  - "Zecheng Li"
  - "Mao Lin"
  - "Shuyin Jiao"
  - "Keren Zhou"
  - "Xu Liu"
  - "Jiajia Li"
year: 2026
venue: "arXiv preprint (cs.DC)"
arxiv: "2611.14741"
doi: null
source: "https://arxiv.org/abs/2611.14741"
topics:
  - "gpu-profiling"
  - "memory-reuse"
  - "data-movement"
  - "binary-instrumentation"
  - "performance-engineering"
seed_rank: 2576
seed_batch: "craft-2026-11-13"
reviewed: "2026-11-13"
pool: "systems"
relevance_score: 8
lineage: gpu-driven-rendering
cites: []
see:
  - "2554-mitigating-sm-level-load-imbalance-in-3d-gaussian-splatting-on-gpus"
  - "1596-skiplists-with-foresight-skipping-cache-misses"
---

# Reconstructing Fine-grained Memory Reuse Structure in GPU Kernels

## One-sentence takeaway

Label every dynamic memory access with the smallest execution scope (thread, warp, block or grid) that contains its previous reuse, roll those labels into a per-instruction graph, and you get a stable, hardware-independent map of which loads should become registers, warp shuffles, shared memory or L2-friendly reorderings; the cuVein tool builds it from optimized binaries at under about 10x overhead and the fixes it guides remove up to about 90% of memory instructions.

## Why it matters here

Anoptic's GPU passes (meshlet culling, cascade merges, splat or text compositing) are mostly data-movement bound, and profilers say which instruction is slow but not which other instruction already touched the same bytes. "Topological Distance" answers the question a kernel author actually asks: is this reuse inside a warp (use shuffles), inside a block (stage in shared memory) or only across the grid (reorder or fuse passes)? Because it is defined over logical scopes, the same map should hold on a 4090 and an H100, which makes it a portable design review tool rather than a one-off trace.

## Key ideas

- **Topological Distance.** Per dynamic access, the smallest logical scope containing its most recent reuse.
- **PCDepGraph.** A program-counter-level graph that aggregates those labels into the kernel's reuse structure.
- **cuVein.** Reconstructs the graph from optimized binaries without sampling, generally under 10x overhead, avoiding cycle-level simulation.
- **Evidence.** HPC and AI workloads on RTX 4090 and H100: up to 90.18% fewer memory instructions and up to 2.84x kernel speedup from guided optimizations; reuse-scope distributions stay consistent across the two GPUs.

## Caveats

Read from the abstract only. NVIDIA/CUDA binaries are the stated target; Vulkan/SPIR-V shaders are not mentioned, so applying it to Anoptic means either a CUDA port of a hot pass or borrowing the idea for our own instrumentation. Headline numbers are best cases across a benchmark set.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.14741
- PDF: https://arxiv.org/pdf/2611.14741
