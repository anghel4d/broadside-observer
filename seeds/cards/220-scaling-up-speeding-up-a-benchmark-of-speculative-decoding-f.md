---
title: "Scaling Up, Speeding Up: A Benchmark of Speculative Decoding for Efficient LLM Test-Time Scaling"
authors:
  - "Shengyin Sun"
  - "Yiming Li"
  - "Xing Li"
  - "Yingzhao Lian"
  - "Weizhe Lin"
  - "Hui-Ling Zhen"
  - "Zhiyuan Yang"
  - "Chen Chen"
  - "Xianzhi Yu"
  - "Mingxuan Yuan"
  - "Chen Ma"
year: 2025
venue: "arXiv:cs.CL"
arxiv: "2509.04474"
doi: null
source: "https://arxiv.org/abs/2509.04474"
topics:
  - kv-serving
  - inference-systems
seed_rank: 220
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 8
---

# Scaling Up, Speeding Up: A Benchmark of Speculative Decoding for Efficient LLM Test-Time Scaling

## One-sentence takeaway

Test-time scaling has emerged as a powerful paradigm for enhancing the reasoning capabilities of large language models (LLMs) by allocating additional computational resources during inference.

## Why it matters here

informs agent serving, KV reuse, and long-horizon tool trajectories (Scaling Up, Speeding Up: A Benchmark of Speculative Decoding for Efficient LLM Test-Time S)

## Key ideas

- Test-time scaling has emerged as a powerful paradigm for enhancing the reasoning capabilities of large language models (LLMs) by allocating additional computational resources during inference.
- However, this paradigm is inherently inefficient due to the generation of redundant and repetitive reasoning traces, leading to significant computational overhead.
- Speculative decoding offers a promising avenue for mitigating this inefficiency, yet its efficacy in the structured, repetition-rich context of test-time scaling remains largely unexplored.
- To bridge this gap, we introduce the first comprehensive benchmark designed to evaluate speculative decoding methods for accelerating LLM test-time scaling.
- Our benchmark provides consistent experimental protocols across representative test-time scaling

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2509.04474](https://arxiv.org/abs/2509.04474)
- URL: https://arxiv.org/abs/2509.04474
