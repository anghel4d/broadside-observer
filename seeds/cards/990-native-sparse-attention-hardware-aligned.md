---
title: "Native Sparse Attention: Hardware-Aligned and Natively Trainable Sparse Attention"
authors:
  - "Jingyang Yuan"
  - "Huazuo Gao"
  - "Damai Dai"
  - "Junyu Luo"
  - "Liang Zhao"
  - "Zhengyan Zhang"
  - "Zhenda Xie"
  - "Y. X. Wei"
  - "Lean Wang"
  - "Zhiping Xiao"
  - "Yuqing Wang"
  - "Chong Ruan"
  - "Ming Zhang"
  - "Wenfeng Liang"
  - "Wangding Zeng"
year: 2025
venue: "ACL 2025 (Best Paper)"
arxiv: "2502.11089"
doi: null
source: "https://arxiv.org/abs/2502.11089"
topics:
  - "sparse-attention"
  - "long-context"
  - "kernels"
  - "deepseek"
seed_rank: 990
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
  - title: "FlashAttention-2: Faster Attention with Better Parallelism and Work Partitioning"
    url: "https://arxiv.org/abs/2307.08691"
    year: 2024
    arxiv: "2307.08691"
  - title: "FlashAttention-3: Fast and Accurate Attention with Asynchrony and Low-Precision"
    url: "https://arxiv.org/abs/2407.08691"
    year: 2024
    arxiv: "2407.08691"
  - title: "FlashAttention-4: Algorithm and kernel pipelining co-design for asymmetric hardware scaling"
    url: "https://arxiv.org/abs/2603.05451"
    year: 2026
    arxiv: "2603.05451"
  - title: "DeepSeekMoE: Towards Ultimate Expert Specialization in Mixture-of-Experts Language Models"
    url: "https://arxiv.org/abs/2401.06066"
    year: 2024
    arxiv: "2401.06066"
  - title: "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning"
    url: "https://arxiv.org/abs/2501.12948"
    year: 2025
    arxiv: "2501.12948"
see:
  - "013-attention-is-all-you-need"
  - "089-flashattention-fast-and-memory-efficient-exact-attention-wit"
  - "080-flashattention-2-faster-attention-with-better-parallelism-an"
  - "073-flashattention-3-fast-and-accurate-attention-with-asynchrony"
  - "958-flashattention-4"
  - "975-deepseekmoe-towards-ultimate-expert-specialization"
  - "988-deepseek-r1-incentivizing-reasoning-via-rl"
---

# Native Sparse Attention: Hardware-Aligned and Natively Trainable Sparse Attention

## One-sentence takeaway

Trainable hierarchical sparse attention (compress + select + sliding window) with Triton kernels aligned to GQA/MQA — matches or beats full attention at 27B, big speedups at 64K. ACL 2025 Best Paper; internship at DeepSeek-AI.

## Why it matters here

The sparse-attention ancestor of V3.2's DSA and V4's CSA/HCA. Hardware-aligned the same way FA is — cite 105/096/089/1222, don't remint kernels.

## Key ideas

- arXiv:2502.11089. Three gated branches per query: compressed block tokens, top-n selected blocks, sliding window. Implemented for GQA/MQA so a group shares sparse KV.
- Natively trained (not post-hoc inference sparsity). 27B GQA+DeepSeekMoE, 270B tokens at 8K then YaRN to 32K.
- Matches/exceeds full attention on general, LongBench, AIME-distill; up to 9× fwd / 6× bwd vs FA-2 Triton at 64K; decode memory traffic ~11.6× less at 64K.
- First author Yuan: PKU internship at DeepSeek-AI; Liang Wenfeng coauthor. Claimed applied toward million-token next-gen (see V4).

## Caveats

- 27B research backbone, not V3-671B. V3.2's DSA is the production sparse attention, not a drop-in NSA.
- Requires custom kernels; naive scatter sparse attention will not hit the reported speedups.

## Links

- arXiv: [2502.11089](https://arxiv.org/abs/2502.11089)
