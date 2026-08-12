---
title: 'SARATHI: Efficient LLM Inference by Piggybacking Decodes with Chunked Prefills'
authors:
- Amey Agrawal
- Ashish Panwar
- Jayashree Mohan
- Nipun Kwatra
- Bhargav S. Gulavani
- Ramachandran Ramjee
year: 2023
venue: arXiv:cs.LG
arxiv: '2308.16369'
doi: null
source: https://arxiv.org/abs/2308.16369
topics:
- rag
- retrieval
- kv-serving
- inference-systems
- llm-serving
seed_rank: 98
seed_batch: prefill-2026-08-13
reviewed: '2026-08-13'
pool: agents
relevance_score: 9
cites:
- title: Efficient Memory Management for Large Language Model Serving with PagedAttention
  url: https://arxiv.org/abs/2309.06180
  year: 2023
  arxiv: '2309.06180'
  doi: null
  card: 002-efficient-memory-management-for-large-language-model-serving
- title: Taming Throughput-Latency Tradeoff in LLM Inference with Sarathi-Serve
  url: https://arxiv.org/abs/2403.02310
  year: 2024
  arxiv: '2403.02310'
  doi: null
  card: 094-taming-throughput-latency-tradeoff-in-llm-inference-with-sar
---

# SARATHI: Efficient LLM Inference by Piggybacking Decodes with Chunked Prefills

## One-sentence takeaway

Large Language Model (LLM) inference consists of two distinct phases - prefill phase which processes the input prompt and decode phase which generates output tokens autoregressively.

## Why it matters here

informs agent serving, KV reuse, and long-horizon tool trajectories; retrieval+evidence trails matter for Broadside provenance-rich digests (SARATHI: Efficient LLM Inference by Piggybacking Decodes with Chunked Prefills)

## Key ideas

- Large Language Model (LLM) inference consists of two distinct phases - prefill phase which processes the input prompt and decode phase which generates output tokens autoregressively.
- While the prefill phase effectively saturates GPU compute at small batch sizes, the decode phase results in low compute utilization as it generates one token at a time per request.
- The varying prefill and decode times also lead to imbalance across micro-batches when using pipeline parallelism, resulting in further inefficiency due to bubbles.
- We present SARATHI to address these challenges.
- SARATHI employs chunked-prefills, which splits a prefill request into equal sized chunks, and decode-maximal batching, which constructs a batch using a single prefill chunk and populates the remaining slots with decodes.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2308.16369](https://arxiv.org/abs/2308.16369)
- URL: https://arxiv.org/abs/2308.16369
