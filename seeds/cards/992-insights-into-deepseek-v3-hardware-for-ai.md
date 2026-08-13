---
title: "Insights into DeepSeek-V3: Scaling Challenges and Reflections on Hardware for AI Architectures"
authors:
  - "Chenggang Zhao"
  - "Chengqi Deng"
  - "Chong Ruan"
  - "Damai Dai"
  - "Huazuo Gao"
  - "Jiashi Li"
  - "Liyue Zhang"
  - "Panpan Huang"
  - "Shangyan Zhou"
  - "Shirong Ma"
  - "Wenfeng Liang"
  - "Ying He"
  - "Yuqing Wang"
  - "Yuxuan Liu"
  - "Y. X. Wei"
year: 2025
venue: "ISCA '25 Industry Track"
arxiv: "2505.09343"
doi: null
source: "https://arxiv.org/abs/2505.09343"
topics:
  - "hardware"
  - "mla"
  - "fp8"
  - "deepseek"
seed_rank: 992
seed_batch: "deepseek-lab-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
lineage: deepseek
cites:
  - title: "DeepSeek-V3 Technical Report"
    url: "https://arxiv.org/abs/2412.19437"
    year: 2025
    arxiv: "2412.19437"
  - title: "AI and Memory Wall"
    url: "https://doi.org/10.1109/MM.2024.3373763"
    year: 2024
  - title: "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness"
    url: "https://arxiv.org/abs/2205.14135"
    year: 2022
    arxiv: "2205.14135"
  - title: "DeepSeek-V2: A Strong, Economical, and Efficient Mixture-of-Experts Language Model"
    url: "https://arxiv.org/abs/2405.04434"
    year: 2024
    arxiv: "2405.04434"
  - title: "Fire-Flyer AI-HPC: A Cost-Effective Software-Hardware Co-Design for Deep Learning"
    url: "https://arxiv.org/abs/2408.14158"
    year: 2024
    arxiv: "2408.14158"
see:
  - "942-deepseek-v3-technical-report"
  - "946-ai-and-memory-wall"
  - "089-flashattention-fast-and-memory-efficient-exact-attention-wit"
  - "979-deepseek-v2-economical-efficient-moe-language-model"
  - "983-fire-flyer-ai-hpc-cost-effective-software-hardware"
---

# Insights into DeepSeek-V3: Scaling Challenges and Reflections on Hardware for AI Architectures

## One-sentence takeaway

First-party ISCA'25 industry paper: how V3 actually ran on 2,048 H800s — MLA, MoE comms, FP8, DualPipe, multi-plane NIC topology — and what hardware should look like next.

## Why it matters here

The hardware reading of 1206. Memory-wall / FA-adjacent; this is DeepSeek's own co-design note, not a third-party MLA teardown.

## Key ideas

- arXiv:2505.09343, ISCA '25 Industry Track. V3 trained on 2,048 NVIDIA H800 GPUs.
- Walks MLA (memory), MoE (compute/comm tradeoff), FP8 mixed-precision, Multi-Plane Network Topology.
- Forward-looking: low-precision units, scale-up/scale-out convergence, low-latency fabrics.
- Pairs with Fire-Flyer (1247, A100 era) as the H800-era report. DualPipe/DeepEP live in the V3 stack.

## Caveats

- Industry track reflections, not a new model. Architecture details canonical in 1206.
- H800-specific constraints (NVLink/IB split) shape several choices; don't cargo-cult onto unrelated clusters.

## Links

- arXiv: [2505.09343](https://arxiv.org/abs/2505.09343)
