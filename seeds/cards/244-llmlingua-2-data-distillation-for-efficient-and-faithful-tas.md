---
title: "LLMLingua-2: Data Distillation for Efficient and Faithful Task-Agnostic Prompt Compression"
authors:
  - "Zhuoshi Pan"
  - "Qianhui Wu"
  - "Huiqiang Jiang"
  - "Menglin Xia"
  - "Xufang Luo"
  - "Jue Zhang"
  - "Qingwei Lin"
  - "Victor Rühle"
  - "Yuqing Yang"
  - "Chin-Yew Lin"
  - "H. Vicky Zhao"
  - "Lili Qiu"
  - "Dongmei Zhang"
year: 2024
venue: "ACL"
arxiv: "2403.12968"
doi: null
source: "https://arxiv.org/abs/2403.12968"
topics:
  - rag
  - retrieval
  - provenance
  - transformer
  - foundations
seed_rank: 244
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

# LLMLingua-2: Data Distillation for Efficient and Faithful Task-Agnostic Prompt Compression

## One-sentence takeaway

This paper focuses on task-agnostic prompt compression for better generalizability and efficiency.

## Why it matters here

retrieval+evidence trails matter for Broadside provenance-rich digests; foundational substrate for every LLM agent stack (LLMLingua-2: Data Distillation for Efficient and Faithful Task-Agnostic Prompt Compression)

## Key ideas

- This paper focuses on task-agnostic prompt compression for better generalizability and efficiency.
- Considering the redundancy in natural language, existing approaches compress prompts by removing tokens or lexical units according to their information entropy obtained from a causal language model such as LLaMa-7B.
- The challenge is that information entropy may be a suboptimal compression metric: (i) it only leverages unidirectional context and may fail to capture all essential information needed for prompt compression; (ii) it is not aligned with the prompt compression objective.
- To address these issues, we propose a data distillation procedure to derive knowledge from an LLM to compress prompts without losing crucial information, and meantime, introduce an extractive text compression datase

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2403.12968](https://arxiv.org/abs/2403.12968)
- URL: https://arxiv.org/abs/2403.12968
