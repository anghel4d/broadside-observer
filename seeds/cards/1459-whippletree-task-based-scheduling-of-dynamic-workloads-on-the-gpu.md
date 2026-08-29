---
title: "Whippletree: Task-based Scheduling of Dynamic Workloads on the GPU"
authors: ["Markus Steinberger", "Michael Kenzel", "Pedro Boechat", "Bernhard Kerbl", "Mark Dokter", "Dieter Schmalstieg"]
year: 2014
venue: "ACM TOG (SIGGRAPH Asia 2014)"
arxiv: null
doi: "10.1145/2661229.2661250"
source: "https://doi.org/10.1145/2661229.2661250"
topics: [lockfree-game-parallelism, mesh-shaders-gpu-driven]
seed_rank: 1459
seed_batch: "craft-2026-08-29"
reviewed: "2026-08-29"
pool: "engines"
relevance_score: 9
lineage: gpu-driven-rendering
cites:
  - title: "Softshell: Dynamic scheduling on GPUs"
    url: "https://doi.org/10.1145/2366145.2366180"
    year: 2012
    arxiv: null
    doi: "10.1145/2366145.2366180"
  - title: "Understanding the efficiency of ray traversal on GPUs"
    url: "https://research.nvidia.com/publication/understanding-efficiency-ray-traversal-gpus"
    year: 2009
    arxiv: null
    doi: null
  - title: "Megakernels considered harmful: Wavefront path tracing on GPUs"
    url: "https://research.nvidia.com/publication/megakernels-considered-harmful-wavefront-path-tracing-gpus"
    year: 2013
    arxiv: null
    doi: null
see:
  - "015-gpu-driven-rendering-pipelines"
  - "1457-real-time-procedural-generation-with-gpu-work-graphs"
---

# Whippletree: Task-based Scheduling of Dynamic Workloads on the GPU

## One-sentence takeaway

Before work graphs, Whippletree was the megakernel that scheduled fine-grained, dynamically spawned GPU tasks across the SIMD hierarchy (warp / block / lone thread) without splitting the pipeline into kernels.

## Why it matters here

Kuth 2024 (1457) cites this as the software stack work graphs replace. If Anoptic stays on Vulkan without enqueue, this is the *engine* recipe: a persistent megakernel, per-procedure queues, and three task widths that match how Anoptic already thinks about waves and workgroups. Reyes, a shape-grammar city, and irradiance-cache volume all run as one program that spawns work from the GPU. Don't implement Whippletree *and* work graphs; pick one.

## Key ideas

- **Three task types that match the hardware.** Level-0: 2..warpSize threads, lock-step + shuffle + votes (must share a SIMD group). Level-1: warpSize..blockSize, shared memory + barriers (same SM). Level-2: one thread, global memory only; the scheduler packs them into warps.
- **Whippletree Megakernel (WMK).** Persistent worker-blocks fill the SMs, loop, and pull from *one queue per procedure* (divergence-free). New tasks enqueue from the GPU. Shared-memory queues sit in front of global ring buffers; warp-vote coalesces enqueue.
- **Dynamic worker-blocks.** A 256-thread block can run 256 level-2 tasks, or sixteen 16-wide level-0s, or four 64-wide level-1s at once, handing out PTX named barriers 1–15 so level-1 tasks don't use the whole-block CUDA barrier.
- **Scheduling policies are application knobs.** Round-robin, fixed priority (drain the back of a pipeline — queues stay at 100k vs 2M on TSK/HDP), random, or time-quota. Only WMK can decide *just before* execute.
- **Three schedulers, one program.** WMK (megakernel), TSK (time-sliced kernels; CPU launches), HDP (hybrid Dynamic Parallelism; a GPU controller launches blocks). Same C++ template program runs on all three. Reyes teapot: WMK 6.7 ms vs TSK 8.0 ms on Titan; level-2-only is ~150× slower on small inputs because early splits have no parallelism.

## Caveats

CUDA 5.5-era software scheduler — you own queues, occupancy is limited by the heaviest fused procedure, and Dynamic Parallelism (HDP) was flaky on mixed thread counts. Softshell 2012 is the closest prior (cite, do not mint); Aila–Laine persistent threads 2009 and Laine megakernels-considered-harmful 2013 are the other two poles (cite, do not mint). The irradiance-cache demo is not a remint of the GI shelf. Work graphs are the hardware/API version of this idea.

## Links

- DOI: [10.1145/2661229.2661250](https://doi.org/10.1145/2661229.2661250)
- PDF: https://schmalstieg.github.io/pdf/Schmalstieg_286.pdf
- Code: http://www.icg.tugraz.at/project/parallel
