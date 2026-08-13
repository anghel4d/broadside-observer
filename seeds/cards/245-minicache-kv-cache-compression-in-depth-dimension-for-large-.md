---
title: "MiniCache: KV Cache Compression in Depth Dimension for Large Language Models"
authors:
  - "Akide Liu"
  - "Jing Liu"
  - "Zizheng Pan"
  - "Yefei He"
  - "Gholamreza Haffari"
  - "Bohan Zhuang"
year: 2024
venue: "arXiv:cs.CL"
arxiv: "2405.14366"
doi: null
source: "https://arxiv.org/abs/2405.14366"
topics:
  - rag
  - retrieval
  - kv-serving
  - inference-systems
  - moe
  - serving
seed_rank: 245
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 8
cites:
  - title: "Accelerating Mixture-of-Experts Inference by Hiding Offloading Latency with Speculative Decoding"
    url: "https://arxiv.org/abs/2508.21706"
    year: 2025
    arxiv: "2508.21706"
    doi: null
    card: "203-accelerating-mixture-of-experts-inference-by-hiding-offloadi"
  - title: "Efficient Memory Management for Large Language Model Serving with PagedAttention"
    url: "https://arxiv.org/abs/2309.06180"
    year: 2023
    arxiv: "2309.06180"
    doi: null
    card: "002-efficient-memory-management-for-large-language-model-serving"
  - title: "Moebius: Serving Mixture-of-Expert Models with Seamless Runtime Parallelism Switch"
    url: "https://arxiv.org/abs/2606.26607"
    year: 2026
    arxiv: "2606.26607"
    doi: null
    card: "070-moebius-serving-mixture-of-expert-models-with-seamless-runti"
---

# MiniCache: KV Cache Compression in Depth Dimension for Large Language Models

## One-sentence takeaway

A critical approach for efficiently deploying computationally demanding large language models (LLMs) is Key-Value (KV) caching.

## Why it matters here

informs agent serving, KV reuse, and long-horizon tool trajectories; retrieval+evidence trails matter for Broadside provenance-rich digests (MiniCache: KV Cache Compression in Depth Dimension for Large Language Models)

## Key ideas

- A critical approach for efficiently deploying computationally demanding large language models (LLMs) is Key-Value (KV) caching.
- The KV cache stores key-value states of previously generated tokens, significantly reducing the need for repetitive computations and thereby lowering latency in autoregressive generation.
- However, the size of the KV cache grows linearly with sequence length, posing challenges for applications requiring long context input and extensive sequence generation.
- In this paper, we present a simple yet effective approach, called MiniCache, to compress the KV cache across layers from a novel depth perspective, significantly reducing the memory footprint for LLM inference.
- Our approach is based on the observation that KV cache states exhibit high similarity between the adjac

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2405.14366](https://arxiv.org/abs/2405.14366)
- URL: https://arxiv.org/abs/2405.14366
