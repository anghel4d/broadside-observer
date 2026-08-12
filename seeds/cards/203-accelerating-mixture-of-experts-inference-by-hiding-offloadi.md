---
title: "Accelerating Mixture-of-Experts Inference by Hiding Offloading Latency with Speculative Decoding"
authors:
  - "Zhibin Wang"
  - "Zhonghui Zhang"
  - "Yuhang Zhou"
  - "Zibo Wang"
  - "Mo Zhou"
  - "Peng Jiang"
  - "Weilin Cai"
  - "Chengying Huan"
  - "Rong Gu"
  - "Sheng Zhong"
  - "Chen Tian"
year: 2025
venue: "arXiv:cs.DC"
arxiv: "2508.21706"
doi: null
source: "https://arxiv.org/abs/2508.21706"
topics:
  - kv-serving
  - inference-systems
  - moe
  - serving
seed_rank: 203
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 8
---

# Accelerating Mixture-of-Experts Inference by Hiding Offloading Latency with Speculative Decoding

## One-sentence takeaway

Recent advancements in Mixture of Experts (MoE) models have significantly increased their parameter scale as well as model performance.

## Why it matters here

informs agent serving, KV reuse, and long-horizon tool trajectories (Accelerating Mixture-of-Experts Inference by Hiding Offloading Latency with Speculative De)

## Key ideas

- Recent advancements in Mixture of Experts (MoE) models have significantly increased their parameter scale as well as model performance.
- Extensive offloading techniques have been proposed to address the GPU memory limitations of MoE inference.
- However, due to the I/O bottleneck and sparse computation of MoE models, existing offloading techniques still suffer from low hardware utilization.
- To fully utilize the hardware resources, we propose SpecMoEOff, which employs the speculative decoding technique to enlarge the workload of each expert.
- SpecMoEOff orchestrates the GPU and CPU by both theoretical and empirical roofline analysis.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2508.21706](https://arxiv.org/abs/2508.21706)
- URL: https://arxiv.org/abs/2508.21706
