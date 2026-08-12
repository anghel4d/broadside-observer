---
title: "SwiftSpec: Ultra-Low Latency LLM Decoding by Scaling Asynchronous Speculative Decoding"
authors:
  - "Ziyi Zhang"
  - "Ziheng Jiang"
  - "Chengquan Jiang"
  - "Menghan Yu"
  - "Size Zheng"
  - "Haibin Lin"
  - "Henry Hoffmann"
  - "Xin Liu"
year: 2025
venue: "arXiv:cs.DC"
arxiv: "2506.11309"
doi: null
source: "https://arxiv.org/abs/2506.11309"
topics:
  - rag
  - retrieval
  - kv-serving
  - inference-systems
seed_rank: 223
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 8
---

# SwiftSpec: Ultra-Low Latency LLM Decoding by Scaling Asynchronous Speculative Decoding

## One-sentence takeaway

Low-latency decoding for large language models (LLMs) is crucial for applications like chatbots and code assistants, yet generating long outputs remains slow in single-query settings.

## Why it matters here

informs agent serving, KV reuse, and long-horizon tool trajectories; retrieval+evidence trails matter for Broadside provenance-rich digests (SwiftSpec: Ultra-Low Latency LLM Decoding by Scaling Asynchronous Speculative Decoding)

## Key ideas

- Low-latency decoding for large language models (LLMs) is crucial for applications like chatbots and code assistants, yet generating long outputs remains slow in single-query settings.
- Prior work on speculative decoding (which combines a small draft model with a larger target model) and tensor parallelism has each accelerated decoding.
- However, conventional approaches fail to apply both simultaneously due to imbalanced compute requirements (between draft and target models), KV-cache inconsistencies, and communication overheads under small-batch tensor-parallelism.
- This paper introduces SwiftSpec, a system that targets ultra-low latency for LLM decoding.
- SwiftSpec redesigns the speculative decoding pipeline in an asynchronous and disaggregated manner, so that each component can be scaled fle

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2506.11309](https://arxiv.org/abs/2506.11309)
- URL: https://arxiv.org/abs/2506.11309
