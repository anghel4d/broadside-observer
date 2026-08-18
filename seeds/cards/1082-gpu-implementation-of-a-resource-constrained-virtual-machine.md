---
title: "GPU implementation of a resource-constrained virtual machine"
authors:
  - "Simone Li"
  - "Vladislav Brusokas"
  - "Andrei Ghita"
  - "Shuxuan Li"
  - "Wim Vanderbauwhede"
year: 2026
venue: "LOCO"
arxiv: "2608.16387"
doi: null
source: "https://arxiv.org/abs/2608.16387"
topics:
  - "bytecode-vm"
  - "gpu-compute"
  - "embedded-scripting"
  - "batched-interpreters"
seed_rank: 1082
seed_batch: "frontier-2026-08-18"
reviewed: "2026-08-18"
pool: "languages"
relevance_score: 8
lineage: batched-interpreters
cites:
  - title: "OpenMP: an industry standard API for shared-memory programming"
    url: "https://doi.org/10.1109/99.660313"
    year: 1998
    arxiv: null
    doi: "10.1109/99.660313"
  - title: "Frugal computing: on the need for low-carbon and sustainable computing and the path towards zero-carbon computing"
    url: "https://arxiv.org/abs/2303.06642"
    year: 2023
    arxiv: "2303.06642"
    doi: null
  - title: "Definitional Interpreters for Higher-Order Programming Languages"
    url: "https://doi.org/10.1145/800194.805852"
    year: 1972
    arxiv: null
    doi: "10.1145/800194.805852"
see:
  - "630-definitional-interpreters-for-higher-order-programming-langu"
  - "642-definitional-interpreters-revisited"
  - "139-monad-transformers-and-modular-interpreters"
  - "1030-warnock-gpu-geometry-amplification-for-vector-graphics"
---

# GPU implementation of a resource-constrained virtual machine

## One-sentence takeaway

A 64 KB Forth-ish VM (Uxn) on Vulkan is 50–100× slower single-threaded than CPU; an OpenMP-style `parallel-do` over dependency-free loops recovers 19× stencil and 7× Bunnymark, on 2019 laptop GPUs, without raising power.

## Why it matters here

Standing topic: batched interpreters / FFI into a C ECS. ano wants a small, hard-capped scripting VM that can ride the GPU the engine already owns. Uxn is the opposite of "yet another LLVM offload": 64K RAM, two 256-byte stacks, 16 devices, event vectors. Sequential GPU interpreters are a trap (control flow + i8 arithmetic + VM-state copies on every I/O). The actual recipe is: keep the interpreter, expose data-parallel loop bounds as a device, workers share RAM and keep private stacks. That is closer to ano's "scripts as bulk effects over SoA" than a CUDA kernel rewrite. Warnock (1030) already amplified geometry on GPU; this is the *language* half — run the sandbox on the same device.

## Key ideas

- Whole VM in GLSL compute + Vulkan graphics. Host still owns the event loop (keyboard/mouse/clock); Screen device stays on GPU. Vulkan does not keep GPU state across submissions, so every CPU↔GPU handoff copies the 64K + stacks.
- Parallel device: three Uxntal wrappers (`parallel-bounds`, `parallel-do`, `end-parallel-do`) around ports for control + loop bounds. No-ops on VMs without the device. Main thread runs sequential code; workers idle, then evaluate their slice, then the highest-ID worker donates PC back.
- 2019 laptops (Intel iGPU, MX250, Radeon 5500M). Stencil: ~19× seq→par, par still 3–5× behind CPU reference but CPU util → 0%. Bunnymark: parallel tracks CPU FPS to 2048 bunnies (~7–8× over sequential GPU). Power comparable to CPU Uxn (powertop / powermetrics).
- Motivation is frugal/permacomputing: software bloat retires hardware; a hard-capped VM plus using the GPU you already paid the embodied carbon for extends device life.

## Caveats

- Only dependency-free loops; no nested parallel, no GPU atomics story, shared RAM races are the programmer's problem.
- I/O-heavy interactive Uxn already matches CPU without parallelism; the paper's sequential GPU path is for *light* apps.
- 8-bit VM on SIMT is still a mismatch — they win by occupying compute units that were idle, not by beating a tuned CPU stencil.

## Links

- arXiv: [2608.16387](https://arxiv.org/abs/2608.16387)
- LOCO 2026 (Lancaster, 10–11 Sep)
