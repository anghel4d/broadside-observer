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
seed_rank: 83
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
  - title: "Ragged Paged Attention: A High-Performance and Flexible LLM Inference Kernel for TPU"
    url: "https://arxiv.org/abs/2604.15464"
    year: 2026
    arxiv: "2604.15464"
    doi: null
see:
  - "002-efficient-memory-management-for-large-language-model-serving"
  - "062-ragged-paged-attention-a-high-performance-and-flexible-llm-i"
---

# SGLang: Efficient Execution of Structured Language Model Programs

## One-sentence takeaway

SGLang pairs a frontend for multi-call LM programs with a runtime that reuses KV via RadixAttention and decodes structured outputs through compressed finite-state machines.

## Why it matters here

Ano agent control, RAG pipelines, and JSON tool calls are exactly the multi-generation programs SGLang was built to run without replaying shared prefixes.

## Key ideas

- Complex LM apps need multiple generation calls, control flow, and structured I/O, but existing serving stacks treat each call as an isolated prompt.
- The frontend exposes primitives for generation and parallelism; the runtime implements RadixAttention (prefix-tree KV reuse) and compressed FSMs for constrained decoding.
- Throughput rises up to 6.4× versus then-SOTA inference systems across LLM and multimodal models.
- Workloads include agent control, logical reasoning, few-shot benchmarks, JSON decoding, RAG pipelines, and multi-turn chat.
- Code: https://github.com/sgl-project/sglang.

## Caveats

## Links

- arXiv: [2312.07104](https://arxiv.org/abs/2312.07104)
- PDF: https://arxiv.org/pdf/2312.07104
- Code: https://github.com/sgl-project/sglang
