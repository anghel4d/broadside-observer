---
title: "DeepSeek-V3.2: Pushing the Frontier of Open Large Language Models"
authors:
  - "DeepSeek-AI"
year: 2025
venue: "arXiv:cs.CL"
arxiv: "2512.02556"
doi: null
source: "https://arxiv.org/abs/2512.02556"
topics:
  - "dsa"
  - "sparse-attention"
  - "agents"
  - "rl"
  - "deepseek"
seed_rank: 1259
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
    card: "014-attention-is-all-you-need"
  - title: "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness"
    url: "https://arxiv.org/abs/2205.14135"
    year: 2022
    arxiv: "2205.14135"
    card: "105-flashattention-fast-and-memory-efficient-exact-attention-wit"
  - title: "FlashAttention-2: Faster Attention with Better Parallelism and Work Partitioning"
    url: "https://arxiv.org/abs/2307.08691"
    year: 2024
    arxiv: "2307.08691"
    card: "096-flashattention-2-faster-attention-with-better-parallelism-an"
  - title: "FlashAttention-3: Fast and Accurate Attention with Asynchrony and Low-Precision"
    url: "https://arxiv.org/abs/2407.08691"
    year: 2024
    arxiv: "2407.08691"
    card: "089-flashattention-3-fast-and-accurate-attention-with-asynchrony"
  - title: "FlashAttention-4: Algorithm and kernel pipelining co-design for asymmetric hardware scaling"
    url: "https://arxiv.org/abs/2603.05451"
    year: 2026
    arxiv: "2603.05451"
    card: "1222-flashattention-4"
  - title: "DeepSeek-V3 Technical Report"
    url: "https://arxiv.org/abs/2412.19437"
    year: 2025
    arxiv: "2412.19437"
    card: "1206-deepseek-v3-technical-report"
  - title: "Native Sparse Attention: Hardware-Aligned and Natively Trainable Sparse Attention"
    url: "https://arxiv.org/abs/2502.11089"
    year: 2025
    arxiv: "2502.11089"
    card: "1254-native-sparse-attention-hardware-aligned"
  - title: "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning"
    url: "https://arxiv.org/abs/2501.12948"
    year: 2025
    arxiv: "2501.12948"
    card: "1252-deepseek-r1-incentivizing-reasoning-via-rl"
---

# DeepSeek-V3.2: Pushing the Frontier of Open Large Language Models

## One-sentence takeaway

V3 + DeepSeek Sparse Attention (DSA) + scaled RL + a synthetic agentic-tool pipeline; Speciale claimed gold IMO/IOI 2025 and GPT-5/Gemini-3.0-Pro-class reasoning.

## Why it matters here

The production sparse-attention successor of NSA (1254) on the V3 (1206) backbone. Agentic post-training is the GRID COMMAND-relevant half.

## Key ideas

- arXiv:2512.02556. DSA: sparse attention that cuts long-context compute while keeping quality (production cousin of NSA).
- Scaled RL protocol; V3.2 ≈ GPT-5; V3.2-Speciale claimed above GPT-5, on par with Gemini-3.0-Pro, gold IMO 2025 and IOI 2025.
- Large-scale agentic task synthesis for tool-use: reasoning inside interactive environments, not just chat CoT.
- FlashMLA kernels (GitHub, not a paper) implement dense MLA + DSA sparse paths — cite the repo, don't mint a card.

## Caveats

- Speciale is a high-compute variant, not the default API model.
- DSA is not NSA: related sparse-attention program, different production mechanism.

## Links

- arXiv: [2512.02556](https://arxiv.org/abs/2512.02556)
- GitHub: https://github.com/deepseek-ai/DeepSeek-V3.2-Exp
- FlashMLA kernels (not a paper): https://github.com/deepseek-ai/FlashMLA
