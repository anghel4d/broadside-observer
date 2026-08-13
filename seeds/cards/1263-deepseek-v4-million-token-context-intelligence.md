---
title: "DeepSeek-V4: Towards Highly Efficient Million-Token Context Intelligence"
authors:
  - "DeepSeek-AI"
year: 2026
venue: "arXiv:cs.CL / Hugging Face tech report"
arxiv: "2606.19348"
doi: null
source: "https://arxiv.org/abs/2606.19348"
topics:
  - "csa"
  - "hca"
  - "mhc"
  - "muon"
  - "long-context"
  - "deepseek"
seed_rank: 1263
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
  - title: "GLU Variants Improve Transformer"
    url: "https://arxiv.org/abs/2002.05202"
    year: 2020
    arxiv: "2002.05202"
    card: "1218-glu-variants-improve-transformer"
  - title: "DeepSeek-V3.2: Pushing the Frontier of Open Large Language Models"
    url: "https://arxiv.org/abs/2512.02556"
    year: 2025
    arxiv: "2512.02556"
    card: "1259-deepseek-v3-2-pushing-the-frontier-of-open-llms"
  - title: "Native Sparse Attention: Hardware-Aligned and Natively Trainable Sparse Attention"
    url: "https://arxiv.org/abs/2502.11089"
    year: 2025
    arxiv: "2502.11089"
    card: "1254-native-sparse-attention-hardware-aligned"
  - title: "mHC: Manifold-Constrained Hyper-Connections"
    url: "https://arxiv.org/abs/2512.24880"
    year: 2025
    arxiv: "2512.24880"
    card: "1260-mhc-manifold-constrained-hyper-connections"
---

# DeepSeek-V4: Towards Highly Efficient Million-Token Context Intelligence

## One-sentence takeaway

Preview MoE pair — V4-Pro 1.6T/49B act and V4-Flash 284B/13B act — with 1M context via CSA+HCA hybrid attention, mHC residuals, and Muon; Pro uses 27% decode FLOPs and 10% KV vs V3.2 at 1M.

## Why it matters here

Current end of the lab stack. Million-token default context is the agent-horizon change. HF PDF is the canonical tech report (also arXiv 2606.19348).

## Key ideas

- arXiv:2606.19348 + HF PDF https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro/blob/main/DeepSeek_V4.pdf (Apr 2026 preview).
- Hybrid attention: Compressed Sparse Attention (CSA) + Heavily Compressed Attention (HCA). At 1M tokens, V4-Pro ≈ 27% single-token infer FLOPs and 10% KV vs V3.2.
- mHC residuals (1260); Muon optimizer (Jordan et al., not a DeepSeek paper — cite, don't mint). Pretrain >32T tokens; FP4 experts + FP8 mixed; thinking / non-thinking modes.
- Checkpoints: https://huggingface.co/collections/deepseek-ai/deepseek-v4 . API models deepseek-v4-pro / deepseek-v4-flash.

## Caveats

- Preview / 'towards' report, not a final dense eval dump. Pro-Max is the max-reasoning mode.
- Muon is Keller Jordan / follow-ons, not first-party DeepSeek — don't mint a Muon card here.
- FlashMLA remains a kernel repo, not a paper.

## Links

- arXiv: [2606.19348](https://arxiv.org/abs/2606.19348)
- HF PDF: https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro/blob/main/DeepSeek_V4.pdf
- Collection: https://huggingface.co/collections/deepseek-ai/deepseek-v4
- API note: https://api-docs.deepseek.com/news/news260424
