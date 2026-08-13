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

236B MoE / 21B active, 128K context: introduces Multi-head Latent Attention (compress KV into a latent) plus DeepSeekMoE — the architecture V3 inherits.

## Why it matters here

MLA is the KV-cache trick Weaves uses V3 to illustrate. Hardware-relevant: 93.3% KV reduction vs DeepSeek 67B.

## Key ideas

- arXiv:2405.04434. 236B total, 21B activated; 8.1T pretrain tokens; 128K context.
- MLA: compress KV cache into a latent vector — 93.3% KV reduction vs DeepSeek 67B; 5.76× max generation throughput.
- DeepSeekMoE reused from 1239; 42.5% training-cost save vs DeepSeek 67B.
- SFT + RL post-train. V3 (1206) is this architecture scaled (671B/37B) plus loss-free balancing and MTP.

## Caveats

- Still auxiliary-loss MoE balancing; V3's loss-free trick is later (1248/1206).
- MLA is not sparse attention; NSA/DSA/CSA come in 2025–26.

## Links

- arXiv: [2405.04434](https://arxiv.org/abs/2405.04434)
- GitHub: https://github.com/deepseek-ai/DeepSeek-V2
