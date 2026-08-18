---
title: "GraniKV: Asymmetric Granularity KV-Cache Paging for Multi-Agent Systems with Long Shared Prefix"
authors:
  - "Jinhyun Jeon"
  - "Sungjoo Yoo"
year: 2026
venue: "arXiv:cs.LG"
arxiv: "2608.15584"
doi: null
source: "https://arxiv.org/abs/2608.15584"
topics:
  - "kv-cache"
  - "prefix-caching"
  - "paged-attention"
  - "multi-agent-serving"
seed_rank: 1080
seed_batch: "frontier-2026-08-18"
reviewed: "2026-08-18"
pool: "agents"
relevance_score: 9
lineage: prefix-paging
cites:
  - title: "Efficient Memory Management for Large Language Model Serving with PagedAttention"
    url: "https://arxiv.org/abs/2309.06180"
    year: 2023
    arxiv: "2309.06180"
    doi: null
  - title: "SGLang: Efficient Execution of Structured Language Model Programs"
    url: "https://arxiv.org/abs/2312.07104"
    year: 2024
    arxiv: "2312.07104"
    doi: null
  - title: "Hydragen: High-Throughput LLM Inference with Shared Prefixes"
    url: "https://arxiv.org/abs/2402.05099"
    year: 2024
    arxiv: "2402.05099"
    doi: null
  - title: "FlashInfer: Efficient and Customizable Attention Engine for LLM Inference Serving"
    url: "https://arxiv.org/abs/2501.01005"
    year: 2025
    arxiv: "2501.01005"
    doi: null
see:
  - "002-efficient-memory-management-for-large-language-model-serving"
  - "062-ragged-paged-attention-a-high-performance-and-flexible-llm-i"
  - "083-sglang-efficient-execution-of-structured-language-model-prog"
  - "176-kvflow-efficient-prefix-caching-for-accelerating-llm-based-m"
  - "1014-vtoken-token-level-virtualization-for-reclaimable-kv-caches"
---

# GraniKV: Asymmetric Granularity KV-Cache Paging for Multi-Agent Systems with Long Shared Prefix

## One-sentence takeaway

Shared prefixes want contiguity; per-request suffixes want token-level pages — uniform PagedAttention granularity is the wrong allocator for multi-agent serving.

## Why it matters here

CacheScout (1077) decides *which* agent anchor to keep; GraniKV decides *how that prefix is laid out* so cascade/HydraGen-style kernels can actually fire inside a production paged engine. Anoptic's own GPU path already splits hot contiguous working sets from sparse per-entity state (meshlets vs unique instance data). Same split, KV edition: HOT bump-pointer slab for the shared system prompt / retrieved doc, COLD page-size-1 pool for the suffix. Under heterogeneous multi-prefix load (the actual multi-agent case: one prompt per role) cascade collapses to parity and the storage layer *is* the win (1.95×).

## Key ideas

- Uniform paging (vLLM/SGLang 16-token pages) cannot feed a fat batched GEMM against the prefix: scattered pages force gather. HydraGen assumed a contiguous *K_p* that no production engine stored.
- HOT pool: contiguous bump allocator, one slab per radix-tree prefix node. COLD pool: token-level free list. Same RadixAttention index, mixed batches in one kernel.
- Dual backends + per-step dispatch on *M_eff = B × n_q/kv*. Dense (fat GEMM) when Tensor Cores saturate (*M_sat* = 1024 on A100); cascade otherwise. No boot-time kernel bet.
- ShareGPT Poisson, *L_p*=16K: 2.16× / 1.98× / 1.57× vs SGLang default on Llama-3.1-8B / Qwen-2.5-14B / 32B. Kernel microbench: contiguous vs paged-equivalent prefix read is 15.6× at fixed tile. Short-prefix parity (≥0.97×) via dispatch.

## Caveats

- A100-only *M_sat*; H100/B200 need a re-fit. No MoE, no 70B.
- High-tenancy (*k*=64 distinct prefixes) thrashes every paged engine equally. Static HOT fraction *f_p*=0.2.
- Small-*L_p* / high-*B* corners can regress up to 30%; operators who know they are there leave the flag off.

## Links

- arXiv: [2608.15584](https://arxiv.org/abs/2608.15584)
