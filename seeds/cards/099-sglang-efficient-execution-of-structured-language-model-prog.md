---
title: "SGLang: Efficient Execution of Structured Language Model Programs"
authors:
  - "Lianmin Zheng"
  - "Liangsheng Yin"
  - "Zhiqiang Xie"
  - "Chuyue Sun"
  - "Jeff Huang"
  - "Cody Hao Yu"
  - "Shiyi Cao"
  - "Christos Kozyrakis"
  - "Ion Stoica"
  - "Joseph E. Gonzalez"
  - "Clark Barrett"
  - "Ying Sheng"
year: 2023
venue: "arXiv:cs.AI"
arxiv: "2312.07104"
doi: null
source: "https://arxiv.org/abs/2312.07104"
topics:
  - rag
  - retrieval
  - kv-serving
  - inference-systems
  - llm-serving
seed_rank: 99
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
cites:
  - title: "Efficient Memory Management for Large Language Model Serving with PagedAttention"
    url: "https://arxiv.org/abs/2309.06180"
    year: 2023
    arxiv: "2309.06180"
    doi: null
    card: "002-efficient-memory-management-for-large-language-model-serving"
  - title: "CacheWeaver: Cache-Aware Evidence Ordering for Efficient Grounded RAG Inference"
    url: "https://arxiv.org/abs/2606.19667"
    year: 2026
    arxiv: "2606.19667"
    doi: null
  - title: "Ragged Paged Attention: A High-Performance and Flexible LLM Inference Kernel for TPU"
    url: "https://arxiv.org/abs/2604.15464"
    year: 2026
    arxiv: "2604.15464"
    doi: null
    card: "071-ragged-paged-attention-a-high-performance-and-flexible-llm-i"
---

# SGLang: Efficient Execution of Structured Language Model Programs

## One-sentence takeaway

Large language models (LLMs) are increasingly used for complex tasks that require multiple generation calls, advanced prompting techniques, control flow, and structured inputs/outputs.

## Why it matters here

informs agent serving, KV reuse, and long-horizon tool trajectories; retrieval+evidence trails matter for Broadside provenance-rich digests (SGLang: Efficient Execution of Structured Language Model Programs)

## Key ideas

- Large language models (LLMs) are increasingly used for complex tasks that require multiple generation calls, advanced prompting techniques, control flow, and structured inputs/outputs.
- However, efficient systems are lacking for programming and executing these applications.
- We introduce SGLang, a system for efficient execution of complex language model programs.
- SGLang consists of a frontend language and a runtime.
- The frontend simplifies programming with primitives for generation and parallelism control.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2312.07104](https://arxiv.org/abs/2312.07104)
- URL: https://arxiv.org/abs/2312.07104
