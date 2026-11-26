---
title: "DFly2: Turbocharging Long-Context Speculative Decoding by Sharing the Target's Sparsity"
authors:
  - "Hong Liu"
  - "Rui Cen"
  - "Junhan Shi"
  - "Lin Niu"
  - "Runzhi Fan"
  - "Zhaojing Zhou"
  - "Haodi Lei"
  - "Jiebin Zhang"
  - "Saiyong Yang"
  - "Junqiang Zheng"
  - "Zhenghai Xue"
  - "Guanghua Yu"
  - "Jianchen Zhu"
year: 2026
venue: "arXiv preprint (cs.CL)"
arxiv: "2611.34776"
doi: null
source: "https://arxiv.org/abs/2611.34776"
version_reviewed: "v1"
topics:
  - "agentic-llm-serving"
  - "agent-tokenization-and-caching"
  - "kv-serving"
  - "speculative-decoding"
  - "sparse-attention"
seed_rank: 2725
seed_batch: "frontier-2026-11-26"
reviewed: "2026-11-26"
pool: "agents"
relevance_score: 8
see:
  - 2246-spin-shadow-predictive-indexer-for-sparse-attention
  - 990-native-sparse-attention-hardware-aligned
  - 995-deepseek-v3-2-pushing-the-frontier-of-open-llms
  - 999-deepseek-v4-million-token-context-intelligence
  - 002-efficient-memory-management-for-large-language-model-serving
cites:
  - title: "DFly2: Turbocharging Long-Context Speculative Decoding by Sharing the Target's Sparsity"
    url: "https://arxiv.org/abs/2611.34776"
    year: 2026
    arxiv: "2611.34776"
    doi: null
  - title: "DFlash: Block Diffusion for Flash Speculative Decoding"
    url: "https://arxiv.org/abs/2602.06036"
    year: 2026
    arxiv: "2602.06036"
    doi: null
  - title: "DSpark: Confidence-Scheduled Speculative Decoding with Semi-Autoregressive Generation"
    url: "https://arxiv.org/abs/2607.05147"
    year: 2026
    arxiv: "2607.05147"
    doi: null
  - title: "DeepSeek-V4: Towards Highly Efficient Million-Token Context Intelligence"
    url: "https://arxiv.org/abs/2606.19348"
    year: 2026
    arxiv: "2606.19348"
    doi: null
  - title: "Native Sparse Attention: Hardware-Aligned and Natively Trainable Sparse Attention"
    url: "https://arxiv.org/abs/2502.11089"
    year: 2025
    arxiv: "2502.11089"
    doi: null
  - title: "Spin: Shadow Predictive Indexer for Sparse Attention"
    url: "https://arxiv.org/abs/2610.09025"
    year: 2026
    arxiv: "2610.09025"
    doi: null
  - title: "Efficient Memory Management for Large Language Model Serving with PagedAttention"
    url: "https://arxiv.org/abs/2309.06180"
    year: 2023
    arxiv: "2309.06180"
    doi: null
---

# DFly2: Turbocharging Long-Context Speculative Decoding by Sharing the Target's Sparsity

## One-sentence takeaway

On natively sparse targets (DeepSeek-V4.1-Flash, GLM-5.3-Flash, Hy4 flash), a block-parallel drafter can keep no cache of its own. Each draft layer reads the KV its paired target layer already cached, at the positions that layer's indexer already selected. DFly2 accepts more tokens per step than DFlash and DSpark, with margins of 10.0–31.5% on long-context and agentic workloads, and 62% and 81% higher throughput on two 64K sets at matched per-user speed.

## Why it matters here

A drafter's own context cache has a cost beyond memory, and the paper spells it out for agent sessions: it costs prefill time, shrinks the prefix pool, and reduces prefix-cache hits, since vLLM recomputes the last 128 tokens after each hit to restore sliding windows. Under KV and index sharing, every target prefix-cache hit is also a drafter hit. That is the right invariant for append-heavy agent sessions on sparse models: one cache and one selection, made once and reused by both.

## Key ideas

- **Two choices, already made by the target.** A drafter must pick which cache and which positions to read. A sparse target already keeps a cache and runs an indexer per query, so both choices are free to borrow.
- **Selection persists.** A selection made one step early still covers close to nine tenths of what each later token selects on DS-V4.1-Flash, which is why sharing it works.
- **KV sharing + index sharing.** Each draft layer reads its paired target layer's pages at that layer's selected positions: a fixed number, anywhere in the context. There is no scoring pass and no drafter KV group registered in vLLM.
- **Results.** On general workloads the margin over the stronger baseline is 3.9–10.5%, widening to 10.0–31.5% on long-context and agentic benchmarks. Throughput is 62% and 81% higher on two 64K sets at high concurrency.
- **Training recipe:** three epochs, global batch 256, sequence length 32K, Muon, block γ = 5, same recipe as the baselines.

## Caveats

I read the abstract and the cache-cost, setup and results passages of the v1 HTML. The method needs a natively sparse target with a per-layer indexer, so it does not apply to dense-attention models. Accepted lengths are means of the last three runs on a single tp8 engine, and speedups are measured on each target's own deployment. All authors are listed under Tencent Inc. (Hy4 is one of the three targets), and there is no independent replication. I found no explicit limitations section.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.34776
- PDF: https://arxiv.org/pdf/2611.34776
- HTML: https://arxiv.org/html/2611.34776v1
