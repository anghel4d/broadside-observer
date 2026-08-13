---
title: "Moebius: Serving Mixture-of-Expert Models with Seamless Runtime Parallelism Switch"
authors:
  - "Shaoyu Wang"
  - "Yizhuo Liang"
  - "Jaeyong Song"
  - "Chong Li"
  - "Seo Jin Park"
year: 2026
venue: "arXiv:cs.DC"
arxiv: "2606.26607"
doi: null
source: "https://arxiv.org/abs/2606.26607"
topics:
  - rag
  - retrieval
  - kv-serving
  - inference-systems
  - moe
  - serving
  - skills
  - continual-agents
seed_rank: 61
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
cites:
  - title: "GRC: Unifying Reasoning-Driven Generation, Retrieval and Compression"
    url: "https://arxiv.org/abs/2605.09100"
    year: 2026
    arxiv: "2605.09100"
    doi: null
  - title: "MiniCache: KV Cache Compression in Depth Dimension for Large Language Models"
    url: "https://arxiv.org/abs/2405.14366"
    year: 2024
    arxiv: "2405.14366"
    doi: null
  - title: "Efficient Memory Management for Large Language Model Serving with PagedAttention"
    url: "https://arxiv.org/abs/2309.06180"
    year: 2023
    arxiv: "2309.06180"
    doi: null
see:
  - "057-grc-unifying-reasoning-driven-generation-retrieval-and-compr"
  - "002-efficient-memory-management-for-large-language-model-serving"
---

# Moebius: Serving Mixture-of-Expert Models with Seamless Runtime Parallelism Switch

## One-sentence takeaway

Mixture-of-Experts (MoE) architectures scale large language models (LLMs) to hundreds of billions of parameters.

## Why it matters here

informs agent serving, KV reuse, and long-horizon tool trajectories; retrieval+evidence trails matter for Broadside provenance-rich digests (Moebius: Serving Mixture-of-Expert Models with Seamless Runtime Parallelism Switch)

## Key ideas

- Mixture-of-Experts (MoE) architectures scale large language models (LLMs) to hundreds of billions of parameters.
- Serving a single MoE model requires multiple GPUs operating in parallel, typically through tensor parallelism (TP) or expert parallelism (EP).
- The optimal choice depends on the number of in-flight requests: TP is faster at low concurrency, whereas EP wins at high concurrency.
- Production workloads cross this boundary continually: online serving sees bursty arrivals that subside into quiet periods, and reinforcement-learning rollouts begin as a high-concurrency burst that decays into a long tail of stragglers.
- Pinning either layout therefore forfeits performance when the workload crosses to the other side.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2606.26607](https://arxiv.org/abs/2606.26607)
- URL: https://arxiv.org/abs/2606.26607
