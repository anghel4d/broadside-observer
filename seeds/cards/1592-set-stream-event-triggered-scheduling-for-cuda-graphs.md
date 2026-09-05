---
title: "SET: Stream-Event-Triggered Scheduling for Efficient CUDA Graph Pipelines"
authors: ["Zhengxiong Li", "Tsung-Wei Huang", "Umit Ogras"]
year: 2026
venue: "Euro-Par 2026"
arxiv: "2606.05495"
doi: null
source: "https://arxiv.org/abs/2606.05495"
topics: [vulkan-realtime-rendering, lockfree-game-parallelism]
seed_rank: 1592
seed_batch: "craft-2026-09-05"
reviewed: "2026-09-05"
pool: "systems"
relevance_score: 9
lineage: work-stealing-schedulers
cites:
  - title: "Libfork: Portable Continuation Stealing With Stackless Coroutines"
    url: "https://arxiv.org/abs/2402.18480"
    year: 2025
    arxiv: "2402.18480"
    doi: "10.1109/tpds.2025.3543442"
  - title: "A Lock-Free Work-Stealing Algorithm for Bulk Operations"
    url: "https://arxiv.org/abs/2603.05766"
    year: 2026
    arxiv: "2603.05766"
    doi: null
see:
  - "1556-libfork-portable-continuation-stealing-with-stackless-coroutines"
  - "206-a-lock-free-work-stealing-algorithm-for-bulk-operations"
---

# SET: Stream-Event-Triggered Scheduling for Efficient CUDA Graph Pipelines

## One-sentence takeaway

Multi-stream, event-chained CUDA-graph pipelines with work stealing and per-stream buffers cut host-sync kernel gaps: **1.15–1.44×** vs graph baselines and **18–54%** less scheduling overhead.

## Why it matters here

Anoptic’s multi-pass GPU frame (cull → cluster → GI → opaque → UI) still pays host round-trips between graphs. Libfork 1556 / bulk steal 206 are CPU. SET is the host/device co-schedule leftover: keep several graphs in flight, fire the next job from a stream-complete event instead of a batch barrier, and stop leaving copy engines idle while the CPU polls. Vulkan analog is timeline semaphores + multiple queues — steal the *policy*, not the CUDA runtime.

## Key ideas

- **Kernel gaps are the bottleneck.** Even with CUDA graphs, Nsight shows white space from host argument updates, buffer recycle, stream pick, and memcpy enqueue. Intra-batch and inter-batch overheads are decomposed separately.
- **Event-chained workers, not batch sync.** Each job is a reusable graph executable. Completion callbacks release per-stream buffers and steal the next ready job with O(1) shared-structure overhead, keeping multiple in-flight queues instead of “launch batch, wait, repeat.”
- **Memory safety via per-stream buffers.** Concurrent in-flight jobs do not clobber each other’s outputs; buffer recycle is tied to the event, not a global host poll.
- **Numbers given.** Six compute- and memory-bound workloads on RTX 3090 and 5090; **1.15–1.44×** throughput and **18–54%** lower scheduling overhead vs host-side CUDA-graph baselines (sync, static batching, queue models). Accepted Euro-Par 2026.

## Caveats

CUDA graphs, not Vulkan command buffers / work graphs (1457–1460) / Whippletree persistent kernels (1459). Event callbacks on the host are still a CPU wake; this is not device-side dispatch. Near-keeper on Craft 2026-09-03; minted now as the pipeline-schedule leftover of 1556. Do not remint 1556 / 206 / 1457–1460 / 1459.

## Links

- arXiv abs: https://arxiv.org/abs/2606.05495
- PDF: https://arxiv.org/pdf/2606.05495
