---
title: "Scalable Concurrent Queues for GPU"
authors: ["Pratheek Prakash Shetty", "Thomas R. W. Scogland", "Wu-chun Feng"]
year: 2026
venue: "arXiv (cs.DC)"
arxiv: "2606.01693"
doi: null
source: "https://arxiv.org/abs/2606.01693"
topics: [lockfree-game-parallelism, mesh-shaders-gpu-driven]
seed_rank: 1655
seed_batch: "craft-2026-09-09"
reviewed: "2026-09-09"
pool: "systems"
relevance_score: 9
lineage: gpu-job-queues
cites:
  - title: "GTaP: A GPU-Resident Fork-Join Task-Parallel System with a Pragma-Based Interface"
    url: "https://arxiv.org/abs/2604.05982"
    year: 2026
    arxiv: "2608.09155"
    doi: null
  - title: "Simple, Fast, and Practical Non-Blocking and Blocking Concurrent Queue Algorithms"
    url: "https://doi.org/10.1145/248052.248106"
    year: 1996
    arxiv: null
    doi: "10.1145/248052.248106"
  - title: "wCQ: A Fast Wait-Free Queue with Bounded Memory Usage"
    url: "https://doi.org/10.1145/3572848.3577489"
    year: 2023
    arxiv: null
    doi: "10.1145/3572848.3577489"
see:
  - "1591-gtap-gpu-resident-fork-join-task-parallel-system"
  - "031-michael-scott-lock-free-queue"
  - "243-wcq-a-fast-wait-free-queue-with-bounded-memory-usage"
  - "334-cameron314-concurrentqueue-mpmc"
  - "1556-libfork-portable-continuation-stealing-with-stackless-coroutines"
---

# Scalable Concurrent Queues for GPU

## One-sentence takeaway

Shetty–Scogland–Feng design GPU-resident concurrent queues aimed at task distribution / load-balancing at extreme core counts, where CPU Michael–Scott / MPMC recipes thrash under SIMT contention.

## Why it matters here

GTaP 1591 gave Anoptic a GPU fork-join *runtime*; this is the leftover *queue* substrate — how producers/consumers on the device move work without a host bounce. GRID COMMAND GPU culling/job fan-out and Anoptic device-side task bags need a queue that survives warp contention, not a port of cameron314.

## Key ideas

- **GPU queues are not CPU queues.** Warp divergence, memory coalescing, and atomic hotspots dominate; classical MS-queue CAS loops collapse under thousands of concurrent producers.
- **Scalable design space.** Batching, hierarchical or segmented buffers, and device-friendly memory layout to keep enqueue/dequeue bandwidth up as SM count grows.
- **HPC framing.** Task distribution and load balancing as the motivating workload — same shape as GPU-driven engine jobs, not ANN graph construction.
- **Takeaway for Anoptic.** Steal the contention geometry (who atomics where; batch vs single-item) when wiring GTaP-style or mesh-shader task rings; do not paste a host MPMC into CUDA/Vulkan.

## Caveats

arXiv `2606.01693` (no DOI at harvest). HPC-oriented; validate against Vulkan/CUDA compute queues and your warp size. Do not remint GTaP 1591, Michael–Scott 031, wCQ 243, cameron314 334, or libfork 1556.

## Links

- arXiv abs: https://arxiv.org/abs/2606.01693
- PDF: https://arxiv.org/pdf/2606.01693
