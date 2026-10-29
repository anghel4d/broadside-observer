---
title: "PipeLink: Contract-Guided Linking of GPU Kernel Components"
authors:
  - "Jize Guo"
  - "Xupeng Miao"
year: 2026
venue: "arXiv preprint (cs.DC)"
arxiv: "2610.37200"
doi: null
source: "https://arxiv.org/abs/2610.37200"
topics:
  - "gpu-kernels"
  - "separate-compilation"
  - "megakernels"
seed_rank: 2454
seed_batch: "craft-2026-10-29"
reviewed: "2026-10-29"
pool: "systems"
lineage: gpu-kernels
relevance_score: 8
cites:
  - title: "PipeLink: Contract-Guided Linking of GPU Kernel Components"
    url: "https://arxiv.org/abs/2610.37200"
    year: 2026
    arxiv: "2610.37200"
    doi: null
see: ["1021-a-contract-grade-verifier-for-llm-generated-gpu-kernels", "1459-whippletree-task-based-scheduling-of-dynamic-workloads-on-the-gpu", "952-categorical-foundations-for-cute-layouts"]
---

# PipeLink: Contract-Guided Linking of GPU Kernel Components

## One-sentence takeaway

PipeLink compiles GPU kernel components (loaders, matmul mainloops, epilogues, communication stages) separately, each with a contract stating which SM resources it needs and what it promises, then links them by solving one joint placement of shared memory, barriers, warps and registers, landing within 0.2% of a monolithic build.

## Why it matters here

Anoptic wants GPU-driven passes (culling, meshlet expansion, radiance-cascade merges) that can be fused into persistent or mega-kernels without hand-forking every combination. Today the components of a fused kernel hard-code where they sit in the SM, so you can't ship or swap them on their own. PipeLink treats an SM like a tiny address space with a linker and relocations, which is the same shape as ano's "selection as reference" plus a typed contract. It's the first credible "separate compilation for megakernels" result we've seen, and it pairs with the contract-grade kernel verifier we already hold.

## Key ideas

- **Components as LTO objects with contracts.** Each one declares the on-chip resources it requires and the guarantees it provides.
- **Contract checking at link time.** Mismatches are caught before codegen, not as races at runtime.
- **One joint placement.** The linker relocates every component by solving a single assignment of the SM's shared memory, barriers, warps and registers, and generates the transfers between components.
- **Vendor LTO folds it to constants**, so the linked result costs about the same as a single-unit build (within 0.2% across 51 configurations on Hopper and Blackwell).
- **New compositions become cheap.** A CuTe attention operator dropped into a ThunderKittens decode megakernel speeds decoding by 2.16x; a four-owner MoE training megakernel matches the original monolith.

## Caveats

Abstract-level read only. Evaluated on NVIDIA Hopper and Blackwell with the vendor LTO path, so Vulkan/SPIR-V portability is an open question and would need its own linker story. The workloads are ML kernels; graphics passes with divergent control flow may stress the placement solver differently.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.37200
- PDF: https://arxiv.org/pdf/2610.37200
