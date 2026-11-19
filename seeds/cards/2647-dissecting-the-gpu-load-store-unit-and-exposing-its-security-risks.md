---
title: "Dissecting the GPU Load/Store Unit and Exposing Its Security Risks"
authors:
  - "Wenbo Han"
  - "Pierre Talbot"
year: 2026
venue: "arXiv preprint (cs.AR, cs.CR)"
arxiv: "2611.23022"
doi: null
source: "https://arxiv.org/abs/2611.23022"
version_reviewed: "v1"
topics:
  - "gpu-microarchitecture"
  - "shared-memory-bank-conflicts"
  - "microbenchmarks"
  - "side-channels"
  - "performance-modeling"
seed_rank: 2647
seed_batch: "craft-2026-11-19"
reviewed: "2026-11-19"
pool: "systems"
relevance_score: 7
see:
  - "2642-dissecting-an-unexplored-sass-control-code-field-barrier-exemption-and-pro"
cites:
  - title: "Dissecting the GPU Load/Store Unit and Exposing Its Security Risks"
    url: "https://arxiv.org/abs/2611.23022"
    year: 2026
    arxiv: "2611.23022"
    doi: null
---

# Dissecting the GPU Load/Store Unit and Exposing Its Security Risks

## One-sentence takeaway

Microbenchmarks on recent NVIDIA GPUs give a cycle-accurate latency formula for a global L1 hit or shared-memory load from the addresses it touches (the address-dependent terms are bank conflicts and the L1 tag lookup) and show that a full LSU pipeline lets one warp starve a warp of a later-launched block, slowing a colocated cuBLAS GEMM by up to 750× on A100 under MPS.

## Why it matters here

Compute passes in Anoptic (cascade merges, tile binning, SoA gathers) are often load-bound, and we pick shared-memory layouts by rule of thumb. A per-access latency formula tells us what a given address pattern costs before we profile, and the starvation result warns that async compute work sharing an SM can be stalled by another kernel's load pattern.

## Key ideas

- **Latency model.** Cycle-accurate formula for L1-hit and shared-memory loads; the address-dependent terms are bank conflicts and the L1 tag lookup.
- **Contention points.** Loads contend at the banks and at tag lookup.
- **Starvation.** With the LSU pipeline full, a warp can starve a warp from a later-launched block.
- **Security.** New channels: full AES-128 key recovery via global bank conflicts or tag lookups alone; cross-process covert channels under MPS whose rate rises each generation.
- **Interference.** One warp slows a colocated cuBLAS GEMM by up to 750× (A100) and 563× (H100) under MPS.

## Caveats

Abstract-level read of the v1 preprint (17 Nov 2026). NVIDIA only, and the exact architectures for the formula are not listed in the abstract; the slowdowns are adversarial worst cases under MPS, not typical game workloads.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.23022
- PDF: https://arxiv.org/pdf/2611.23022
