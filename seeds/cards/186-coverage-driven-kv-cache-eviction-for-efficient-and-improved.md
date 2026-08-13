---
title: "Coverage-Driven KV Cache Eviction for Efficient and Improved Inference of LLM"
authors:
  - "Shuvendu Roy"
  - "Mengyao Zhai"
  - "Hossein Hajimirsadeghi"
  - "Golnoosh Samei"
year: 2026
venue: "arXiv:cs.CL"
arxiv: "2606.29563"
doi: null
source: "https://arxiv.org/abs/2606.29563"
topics:
  - rag
  - retrieval
  - kv-serving
  - inference-systems
  - transformer
  - foundations
seed_rank: 186
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 8
cites:
  - title: "CriticalKV: Optimizing KV Cache Eviction from an Output Perturbation Perspective"
    url: "https://arxiv.org/abs/2502.03805"
    year: 2025
    arxiv: "2502.03805"
    doi: null
    card: "083-criticalkv-optimizing-kv-cache-eviction-from-an-output-pertu"
  - title: "Efficient Memory Management for Large Language Model Serving with PagedAttention"
    url: "https://arxiv.org/abs/2309.06180"
    year: 2023
    arxiv: "2309.06180"
    doi: null
    card: "002-efficient-memory-management-for-large-language-model-serving"
  - title: "FlashAttention-3: Fast and Accurate Attention with Asynchrony and Low-precision"
    url: "https://arxiv.org/abs/2407.08608"
    year: 2024
    arxiv: "2407.08608"
    doi: null
    card: "089-flashattention-3-fast-and-accurate-attention-with-asynchrony"
---

# Coverage-Driven KV Cache Eviction for Efficient and Improved Inference of LLM

## One-sentence takeaway

Large language models (LLMs) excel at complex tasks like question answering and summarization, thanks to their ability to handle long-context inputs.

## Why it matters here

informs agent serving, KV reuse, and long-horizon tool trajectories; retrieval+evidence trails matter for Broadside provenance-rich digests (Coverage-Driven KV Cache Eviction for Efficient and Improved Inference of LLM)

## Key ideas

- Large language models (LLMs) excel at complex tasks like question answering and summarization, thanks to their ability to handle long-context inputs.
- However, deploying LLMs is costly, not only due to the high computational demands of quadratic complexity of self-attention and auto-regressive generation, but also because of the significant memory overhead required for storing the key-value (KV) cache during inference.
- To reduce the memory cost, existing KV-cache eviction strategies leverage the sparsity in attention to selectively store a subset of tokens.
- While reducing the memory footprint, such approaches show a considerable drop in performance, especially in tasks that require long-context reasoning.
- We identify that the drop in performance is linked to a reduction in the coverage of u

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2606.29563](https://arxiv.org/abs/2606.29563)
- URL: https://arxiv.org/abs/2606.29563
