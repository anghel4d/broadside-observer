---
title: "GPU-resident Execution for Timing-predictable Sensor Processing Systems"
authors:
  - "Soham Sinha"
  - "Rahul Choudhury"
  - "Shekhar Dwivedi"
  - "Gregory Lee"
  - "Gigon Bae"
  - "Anisha Goel"
  - "Elena Agostini"
  - "Patrick O'Grady"
  - "Yosi Levi"
  - "Mahdi Azizian"
year: 2026
venue: "arXiv"
arxiv: "2610.13809"
doi: null
source: "https://arxiv.org/abs/2610.13809"
topics:
  - "gpu-driven"
  - "real-time"
  - "scheduling"
seed_rank: 2274
seed_batch: "craft-2026-10-13"
reviewed: "2026-10-13"
pool: "systems"
relevance_score: 6
lineage: gpu-driven-rendering
cites:
  - title: "GPU-resident Execution for Timing-predictable Sensor Processing Systems"
    url: "https://arxiv.org/abs/2610.13809"
    year: 2026
    arxiv: "2610.13809"
    doi: null
see:
  - "015-gpu-driven-rendering-pipelines"
  - "1457-real-time-procedural-generation-with-gpu-work-graphs"
---

# GPU-resident Execution for Timing-predictable Sensor Processing Systems

## One-sentence takeaway

Keeping I/O and GPU work inside a long-lived device-resident loop, with no host wakeups per iteration, cuts camera-to-display jitter on a 1080p60 pipeline from 4.83 ms to 0.66 ms.

## Why it matters here

It is a measured case for taking the CPU off the per-frame critical path, the same direction as GPU-driven rendering and work graphs; the jitter breakdown (interrupts, host scheduler, API overhead) is a useful checklist for frame-pacing work in an engine.

## Key ideas

- **Problem.** Host-mediated loops (observe, submit, wait, commit) expose end-to-end latency to interrupts, scheduler decisions and CUDA API overhead even with GPU-memory RDMA and core isolation.
- **Model.** Sensor inputs land in GPU memory, trigger GPU-side processing and reach GPU-visible output endpoints inside a persistent device-resident loop.
- **Implementation.** Built into NVIDIA Holoscan (C++) with reference components; evaluated on discrete GPUs and SoCs under inference, host-contention, multi-loop and streaming-camera workloads.
- **Numbers.** Photon-to-display jitter 7.3x lower than a CPU-driven RDMA baseline; software-processing jitter 1.70 ms to 0.01 ms.

## Caveats

Vendor paper tied to NVIDIA Holoscan and CUDA; a persistent loop gives up GPU time-slicing and needs careful preemption and power handling, which matters more on a shared desktop GPU than on a dedicated embedded box.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.13809
- PDF: https://arxiv.org/pdf/2610.13809
