---
title: "GTaP: A GPU-Resident Fork-Join Task-Parallel System with a Pragma-Based Interface"
authors: ["Yuki Maeda", "Kenjiro Taura"]
year: 2026
venue: "arXiv (cs.DC)"
arxiv: "2604.05982"
doi: null
source: "https://arxiv.org/abs/2604.05982"
topics: [lockfree-game-parallelism, vulkan-realtime-rendering]
seed_rank: 1591
seed_batch: "craft-2026-09-05"
reviewed: "2026-09-05"
pool: "systems"
relevance_score: 9
lineage: work-stealing-schedulers
cites:
  - title: "Scheduling Multithreaded Computations by Work Stealing"
    url: "https://doi.org/10.1145/324133.324234"
    year: 1999
    arxiv: null
    doi: "10.1145/324133.324234"
  - title: "Libfork: Portable Continuation Stealing With Stackless Coroutines"
    url: "https://arxiv.org/abs/2402.18480"
    year: 2025
    arxiv: "2402.18480"
    doi: "10.1109/tpds.2025.3543442"
see:
  - "1556-libfork-portable-continuation-stealing-with-stackless-coroutines"
  - "200-scheduling-multithreaded-computations-by-work-stealing"
---

# GTaP: A GPU-Resident Fork-Join Task-Parallel System with a Pragma-Based Interface

## One-sentence takeaway

Fine-grained fork-join runs *inside* a persistent GPU kernel: OpenMP-like pragmas, a Clang extension for join suspend/resume, block vs thread task modes, GPU work stealing, and optional Divergence-Aware Queueing (DAQ).

## Why it matters here

Libfork 1556 is the CPU continuation-stealing leftover of Blumofe–Leiserson 200. Irregular Anoptic work after that — cull trees, GI gather, clustered lights, FMM-style dual walks — still wants fork-join *on the GPU* without bouncing every spawn back to the host. GTaP is that GPU-resident fork-join: keep a persistent kernel, steal on-device, and stop writing a new megakernel by hand for every irregular pass.

## Key ideas

- **Persistent kernel, not host launch-per-task.** Fork and join stay on the device. A Clang extension lowers pragma-annotated joins into suspend/resume so the GPU can park a parent and run a child.
- **Two mapping modes.** *Block mode:* one task per thread block (cooperative work inside the task). *Thread mode:* one task per GPU thread (finer grain, more of them).
- **GPU-resident work stealing.** Scheduling does not round-trip through the CUDA runtime for every spawn. DAQ optionally partitions queues by a user criterion so heterogeneous control flow does not wreck a warp.
- **Numbers given.** Up to two orders of magnitude over a prior GPU fine-grained fork-join; matches or beats OpenMP/OpenCilk on 72 CPU cores for compute-heavy microbenchmarks. Real workloads: pragma recursive FMM dual-tree up to **1.6×** vs a hand-written GPU traversal; *k*-clique counting up to **5.2×** vs a specialized kernel when search-tree skew wrecks static assignment.

## Caveats

CUDA + Clang extension, not Vulkan/SPIR-V. Persistent-kernel residency fights Anoptic’s current multi-pass cmdbuf model; the transferable piece is on-device steal + join frames, not a drop-in runtime. Warp divergence and occupancy are still your problem even with DAQ. Near-keeper on Craft 2026-09-03; minted now as the GPU leftover of 1556. Do not remint 1556 / 200 / 206 / Whippletree 1459.

## Links

- arXiv abs: https://arxiv.org/abs/2604.05982
- PDF: https://arxiv.org/pdf/2604.05982
