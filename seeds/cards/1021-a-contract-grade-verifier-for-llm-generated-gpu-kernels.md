---
title: "A Contract-Grade Verifier for LLM-Generated GPU Kernels, and a Native Blackwell Backward for the Gated-Linear-Recurrence Family"
authors: ["Rishi Shah", "Rishav Shrestha"]
year: 2026
venue: "arXiv:cs.LG"
arxiv: "2608.12700"
doi: null
source: "https://arxiv.org/abs/2608.12700"
topics: [type-safety]
seed_rank: 1021
seed_batch: "frontier-2026-08-14"
reviewed: "2026-08-14"
pool: "engines"
relevance_score: 8
lineage: gpu-kernels
cites:
  - title: "KernelBench: Can LLMs Write Efficient GPU Kernels?"
    url: "https://arxiv.org/abs/2502.10517"
    year: 2025
    arxiv: "2502.10517"
    doi: null
  - title: "Mamba: Linear-Time Sequence Modeling with Selective State Spaces"
    url: "https://arxiv.org/abs/2312.00752"
    year: 2023
    arxiv: "2312.00752"
    doi: null
  - title: "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness"
    url: "https://arxiv.org/abs/2205.14135"
    year: 2022
    arxiv: "2205.14135"
    doi: null
  - title: "The Correctness Illusion in LLM-Generated GPU Kernels"
    url: "https://arxiv.org/abs/2606.20128"
    year: 2026
    arxiv: "2606.20128"
    doi: null
see:
  - "089-flashattention-fast-and-memory-efficient-exact-attention-wit"
  - "073-flashattention-3-fast-and-accurate-attention-with-asynchrony"
  - "1002-futhark-purely-functional-gpu-programming"
---

# A Contract-Grade Verifier for LLM-Generated GPU Kernels, and a Native Blackwell Backward for the Gated-Linear-Recurrence Family

## One-sentence takeaway

KernelBench-style allclose accepts 1,487 broken LLM GPU kernels this verifier rejects; 39.5% of an already-accepted corpus fail a tolerance-free gate (NaN swallow, nondeterminism, shape rigidity).

## Why it matters here

Anoptic is C/Vulkan and we will eventually let agents emit compute shaders / mesh kernels. The field’s “correct + faster” numbers are not a contract. Twelve adversarial gates (several exact-mask) are the checklist we’d want before a generated kernel touches a radiance cascade or ano GPU backend — Futhark (1002) is the language cousin; this is the *acceptance* cousin. Native GDN backward is supporting systems work, not the keep reason.

## Key ideas

- Twelve gates operationalizing Kernel Contracts: CMP (value/grad/shape), ORD (reduction/determinism), PRC (dtype/fp32 accumulator), EXC (NaN/Inf, subnormals), RES (device, TMEM budget).
- Audit of 2,638 Dr.Kernel kernels already marked correct: 62.1% any violation, 39.5% tolerance-free floor; modal defect EXC-01 (finite where reference is NaN/Inf). Differential vs KernelBench allclose is almost one-way (1,487 vs 14).
- Four defenses: 7/7 positive control (caught the authors’ own C5 channel bug), threshold calibration, 98.5% agreement with KernelBench’s own checker, stratified hand-audit that *discards* 7/31 as OOS.
- Native Blackwell tcgen05 GDN training backward (incl. reverse-state stage others keep in Triton); independently fp64-checked; slower than fla — reported as a structural negative.

## Caveats


## Links

- arXiv: [2608.12700](https://arxiv.org/abs/2608.12700)
- PDF: https://arxiv.org/pdf/2608.12700
