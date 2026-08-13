---
title: "FlashAttention-4: Algorithm and kernel pipelining co-design for asymmetric hardware scaling"
authors:
  - "Ted Zadouri"
  - "Markus Hoehnerbach"
  - "Jay Shah"
year: 2026
venue: "arXiv:cs.LG"
arxiv: "2603.05451"
doi: null
source: "https://arxiv.org/abs/2603.05451"
topics:
  - "flashattention"
  - "kernels"
  - "pipelining"
seed_rank: 1222
seed_batch: "user-add-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 9
lineage: categorical-deep-learning
cites:
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
---

# FlashAttention-4: Algorithm and kernel pipelining co-design for asymmetric hardware scaling

## One-sentence takeaway

Fourth FlashAttention generation: algorithm and kernel pipelining co-designed for asymmetric hardware scaling, continuing the Dao/Shah IO-aware attention line.

## Why it matters here

Completes the FA spine Weaves cites (1–4). Hardware half of the napkin/weaves story.

## Key ideas

- arXiv:2603.05451, 2026.
- Co-design of algorithm + kernel pipeline, not just another tile size.
- Asymmetric hardware scaling is the new constraint (memory/compute imbalance, cf. memory wall).

## Caveats

- Kernel paper. Does not use NCDs; Weaves/Napkin are the diagrammatic reading of the same IO problem.

## Links

- arXiv: [2603.05451](https://arxiv.org/abs/2603.05451)
