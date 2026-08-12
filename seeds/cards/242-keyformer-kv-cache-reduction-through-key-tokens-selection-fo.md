---
title: "Keyformer: KV Cache Reduction through Key Tokens Selection for Efficient Generative Inference"
authors:
  - "Muhammad Adnan"
  - "Akhil Arunkumar"
  - "Gaurav Jain"
  - "Prashant J. Nair"
  - "Ilya Soloveychik"
  - "Purushotham Kamath"
year: 2024
venue: "arXiv:cs.LG"
arxiv: "2403.09054"
doi: null
source: "https://arxiv.org/abs/2403.09054"
topics:
  - rag
  - retrieval
  - kv-serving
  - inference-systems
  - transformer
  - foundations
seed_rank: 242
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 8
---

# Keyformer: KV Cache Reduction through Key Tokens Selection for Efficient Generative Inference

## One-sentence takeaway

Transformers have emerged as the underpinning architecture for Large Language Models (LLMs).

## Why it matters here

informs agent serving, KV reuse, and long-horizon tool trajectories; retrieval+evidence trails matter for Broadside provenance-rich digests (Keyformer: KV Cache Reduction through Key Tokens Selection for Efficient Generative Infere)

## Key ideas

- Transformers have emerged as the underpinning architecture for Large Language Models (LLMs).
- In generative language models, the inference process involves two primary phases: prompt processing and token generation.
- Token generation, which constitutes the majority of the computational workload, primarily entails vector-matrix multiplications and interactions with the Key-Value (KV) Cache.
- This phase is constrained by memory bandwidth due to the overhead of transferring weights and KV cache values from the memory system to the computing units.
- This memory bottleneck becomes particularly pronounced in applications that require long-context and extensive text generation, both of which are increasingly crucial for LLMs.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2403.09054](https://arxiv.org/abs/2403.09054)
- URL: https://arxiv.org/abs/2403.09054
