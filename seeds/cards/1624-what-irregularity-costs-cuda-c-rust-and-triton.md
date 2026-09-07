---
title: "What Irregularity Costs: CUDA C++, Rust, and Triton on a Hash-Blocked GPU Workload"
authors: ["Petr Korolev"]
year: 2026
venue: "arXiv (cs.CV)"
arxiv: "2608.08287"
doi: null
source: "https://arxiv.org/abs/2608.08287"
topics: [vulkan-realtime-rendering, lockfree-game-parallelism]
seed_rank: 1624
seed_batch: "craft-2026-09-07"
reviewed: "2026-09-07"
pool: "systems"
relevance_score: 9
lineage: gpu-irregular-work
---

# What Irregularity Costs: CUDA C++, Rust, and Triton on a Hash-Blocked GPU Workload

## One-sentence takeaway

Same hash-blocked TSDF fusion kernel in CUDA C++, Rust/cuda-oxide, and Triton: languages are close on the regular accumulate pass and more than 10× apart on the irregular open-addressed insert — Triton’s bounded unmasked CAS is also a silent correctness hole at real hash load.

## Why it matters here

Anoptic voxel/TSDF/irregular GPU passes look like this kernel (data-dependent probe depth, contended scatter, warp-divergent CAS), not dense GEMM microbench theater. Steal the two-pass allocate/update split, the 64-bit packed key, and the “what the language cannot say” catalogue; do not pick a shading language from a matmul bakeoff.

## Key ideas

- **Workload.** 8³ voxel blocks in an open-addressed table; 64-bit key packs biased xyz so one CAS publishes the whole coordinate (split-axis publish was a full-table-scan bug under GPU thread counts). Two kernels: *Allocate* probes/inserts (irregular); *Update* hits and does five commuting atomic adds (regular). Weighted sums, not running means, so no read-modify-write lock.
- **The split.** Regular stage: all three languages within a small factor. Irregular stage: Rust stays near hand-written CUDA C++; Triton is more than an order of magnitude slower.
- **Triton’s costs are language-level.** Probe loop must run to a *compile-time* bound; `tl.atomic_cas` takes no mask, so a scratch structure appears that CUDA does not need. At hash load factors ordinary depth trajectories reach, Triton *silently discards blocks* — reconstruction loses surface patches with no error.
- **Rust’s cost hid from instruction counts.** Fewer instructions, fewer CASes, fewer registers, still slower: a GPU-scope atomic load is coherent across SMs, no NVIDIA L1 is, so the type-correct read bypasses L1 every time. A cuda-oxide scoped atomic load/store bug (unusable in real-kernel builds) was found and merged upstream.

## Caveats

CUDA/cuda-oxide/Triton, not Vulkan/SPIR-V. One kernel family, one author’s implementations, NVIDIA-specific cache-coherence story. Not a claim that Rust or Triton is “worse” on the work those toolchains are tuned for. No in-library TSDF/KinectFusion card to remint.

## Links

- arXiv abs: https://arxiv.org/abs/2608.08287
- PDF: https://arxiv.org/pdf/2608.08287
- Code / measurements: https://github.com/realitymatrix/what-irregularity-costs
