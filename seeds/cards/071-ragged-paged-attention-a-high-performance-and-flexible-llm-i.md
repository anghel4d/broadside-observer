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
seed_rank: 71
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
cites:
  - title: "CacheWeaver: Cache-Aware Evidence Ordering for Efficient Grounded RAG Inference"
    url: "https://arxiv.org/abs/2606.19667"
    year: 2026
    arxiv: "2606.19667"
    doi: null
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
see:
  - "002-efficient-memory-management-for-large-language-model-serving"
  - "098-sarathi-efficient-llm-inference-by-piggybacking-decodes-with"
---

# Ragged Paged Attention: A High-Performance and Flexible LLM Inference Kernel for TPU

## One-sentence takeaway

Large Language Model (LLM) deployment is increasingly shifting to cost-efficient accelerators like Google's Tensor Processing Units (TPUs), prioritizing both performance and total cost of ownership (TCO).

## Why it matters here

informs agent serving, KV reuse, and long-horizon tool trajectories; retrieval+evidence trails matter for Broadside provenance-rich digests (Ragged Paged Attention: A High-Performance and Flexible LLM Inference Kernel for TPU)

## Key ideas

- Large Language Model (LLM) deployment is increasingly shifting to cost-efficient accelerators like Google's Tensor Processing Units (TPUs), prioritizing both performance and total cost of ownership (TCO).
- However, existing LLM inference kernels and serving systems remain largely GPU-centric, and there is no well-established approach for efficiently mapping LLM workloads onto TPU architectures--particularly under the dynamic and ragged execution patterns common in modern serving.
- In this paper, we present Ragged Paged Attention (RPA), a high-performance and flexible attention kernel for TPUs, implemented using Pallas and Mosaic.
- RPA addresses these challenges through three key techniques: (1) fine-grained tiling to enable efficient dynamic slicing over ragged memory, (2) a custom software p

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2604.15464](https://arxiv.org/abs/2604.15464)
- URL: https://arxiv.org/abs/2604.15464
