---
title: "Ragged Paged Attention: A High-Performance and Flexible LLM Inference Kernel for TPU"
authors:
  - "Jevin Jiang"
  - "Ying Chen"
  - "Blake A. Hechtman"
  - "Fenghui Zhang"
  - "Yarong Mu"
year: 2026
venue: "arXiv:cs.PF"
arxiv: "2604.15464"
doi: null
source: "https://arxiv.org/abs/2604.15464"
topics:
  - rag
  - retrieval
  - kv-serving
  - inference-systems
  - llm-serving
seed_rank: 62
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
  - title: "SARATHI: Efficient LLM Inference by Piggybacking Decodes with Chunked Prefills"
    url: "https://arxiv.org/abs/2308.16369"
    year: 2023
    arxiv: "2308.16369"
    doi: null
  - title: "SGLang: Efficient Execution of Structured Language Model Programs"
    url: "https://arxiv.org/abs/2312.07104"
    year: 2023
    arxiv: "2312.07104"
    doi: null
see:
  - "002-efficient-memory-management-for-large-language-model-serving"
  - "082-sarathi-efficient-llm-inference-by-piggybacking-decodes-with"
  - "083-sglang-efficient-execution-of-structured-language-model-prog"
---

# Ragged Paged Attention: A High-Performance and Flexible LLM Inference Kernel for TPU

## One-sentence takeaway

Ragged Paged Attention is a Pallas/Mosaic TPU kernel that tiles ragged memory, fuses KV updates with attention, and compiles specialized decode, prefill, and mixed kernels.

## Why it matters here

If ano or Broadside serving ever leaves GPU-centric stacks, RPA is the production TPU attention backend already wired into vLLM and SGLang.

## Key ideas

- GPU-centric kernels and serving systems do not map cleanly onto TPU under the dynamic, ragged execution of modern serving.
- Fine-grained tiling enables efficient dynamic slicing over ragged paged KV; a custom software pipeline fuses cache writes with attention.
- Distribution-aware compilation emits specialized kernels for decode, prefill, and mixed batches rather than one generic path.
- On Llama 3 8B / TPU7x, RPA reaches 86% memory-bandwidth utilization in decode and 73% model-FLOP utilization in prefill.
- It is the primary TPU backend in vLLM and SGLang.

## Caveats

## Links

- arXiv: [2604.15464](https://arxiv.org/abs/2604.15464)
- PDF: https://arxiv.org/pdf/2604.15464
