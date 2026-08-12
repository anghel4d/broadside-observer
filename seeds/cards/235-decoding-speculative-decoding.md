---
title: "Decoding Speculative Decoding"
authors:
  - "Minghao Yan"
  - "Saurabh Agarwal"
  - "Shivaram Venkataraman"
year: 2024
venue: "NAACL"
arxiv: "2402.01528"
doi: null
source: "https://arxiv.org/abs/2402.01528"
topics:
  - kv-serving
  - inference-systems
seed_rank: 235
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 8
---

# Decoding Speculative Decoding

## One-sentence takeaway

Speculative Decoding is a widely used technique to speed up inference for Large Language Models (LLMs) without sacrificing quality.

## Why it matters here

informs agent serving, KV reuse, and long-horizon tool trajectories (Decoding Speculative Decoding)

## Key ideas

- Speculative Decoding is a widely used technique to speed up inference for Large Language Models (LLMs) without sacrificing quality.
- When performing inference, speculative decoding uses a smaller draft model to generate speculative tokens and then uses the target LLM to verify those draft tokens.
- The speedup provided by speculative decoding heavily depends on the choice of the draft model.
- In this work, we perform a detailed study comprising over 350 experiments with LLaMA-65B and OPT-66B using speculative decoding and delineate the factors that affect the performance gain provided by speculative decoding.
- Our experiments indicate that the performance of speculative decoding depends heavily on the latency of the draft model, and the draft model's capability in language modeling does not cor

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2402.01528](https://arxiv.org/abs/2402.01528)
- URL: https://arxiv.org/abs/2402.01528
