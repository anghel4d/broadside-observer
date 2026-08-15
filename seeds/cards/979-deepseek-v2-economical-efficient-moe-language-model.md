---
title: "DeepSeek-V2: A Strong, Economical, and Efficient Mixture-of-Experts Language Model"
authors:
  - "DeepSeek-AI"
year: 2024
venue: "arXiv:cs.CL"
arxiv: "2405.04434"
doi: null
source: "https://arxiv.org/abs/2405.04434"
topics:
  - "mla"
  - "moe"
  - "kv-cache"
  - "deepseek"
seed_rank: 979
seed_batch: "deepseek-lab-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 10
lineage: deepseek
cites:
  - title: "Attention Is All You Need"
    url: "https://arxiv.org/abs/1706.03762"
    year: 2017
    arxiv: "1706.03762"
  - title: "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness"
    url: "https://arxiv.org/abs/2205.14135"
    year: 2022
    arxiv: "2205.14135"
  - title: "GLU Variants Improve Transformer"
    url: "https://arxiv.org/abs/2002.05202"
    year: 2020
    arxiv: "2002.05202"
  - title: "DeepSeekMoE: Towards Ultimate Expert Specialization in Mixture-of-Experts Language Models"
    url: "https://arxiv.org/abs/2401.06066"
    year: 2024
    arxiv: "2401.06066"
  - title: "DeepSeek-V3 Technical Report"
    url: "https://arxiv.org/abs/2412.19437"
    year: 2025
    arxiv: "2412.19437"
see:
  - "013-attention-is-all-you-need"
  - "089-flashattention-fast-and-memory-efficient-exact-attention-wit"
  - "954-glu-variants-improve-transformer"
  - "975-deepseekmoe-towards-ultimate-expert-specialization"
  - "942-deepseek-v3-technical-report"
---

# DeepSeek-V2: A Strong, Economical, and Efficient Mixture-of-Experts Language Model

## One-sentence takeaway

V2 is a 236B-total / 21B-active MoE with 128K context that introduces Multi-head Latent Attention — KV compressed into a latent — on top of DeepSeekMoE, cutting KV 93.3% vs DeepSeek 67B and raising max generation throughput 5.76×.

## Why it matters here

MLA is the KV-cache trick Weaves uses V3 to illustrate. Hardware-relevant for any Broadside/GRID long-context agent: you do not want a full KV cache at 128K, and V3 inherits this architecture rather than inventing a new attention.

## Key ideas

- arXiv:2405.04434. 8.1T pretrain tokens; SFT + RL post-train. Even at 21B active, claimed top-tier among then-open models.
- MLA: compress the KV cache into a latent vector so decode memory traffic collapses; 93.3% KV reduction vs the dense 67B ancestor.
- DeepSeekMoE reused: fine-grained routed experts plus shared experts. 42.5% training-cost save vs DeepSeek 67B.
- Still auxiliary-loss MoE balancing; V3 adds loss-free bias and multi-token prediction on a 671B/37B scale-up of this same MLA+MoE skeleton.
- MLA is not sparse attention; NSA/DSA/CSA come in 2025–26.

## Caveats

## Links

- arXiv: [2405.04434](https://arxiv.org/abs/2405.04434)
- GitHub: https://github.com/deepseek-ai/DeepSeek-V2
