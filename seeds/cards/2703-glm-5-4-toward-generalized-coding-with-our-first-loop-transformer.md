---
title: "GLM-5.4: Toward Generalized Coding with Our First Loop Transformer"
authors:
  - "Z.ai"
year: 2026
venue: "Z.ai research blog, 23 Nov 2026"
arxiv: null
doi: null
source: "https://z.ai/blog/glm-5.4"
version_reviewed: "web 2026-11-23"
topics:
  - "agentic-llm-serving"
  - "agent-tokenization-and-caching"
  - "kv-serving"
  - "looped-transformers"
seed_rank: 2703
seed_batch: "frontier-2026-11-24"
reviewed: "2026-11-24"
pool: "agents"
relevance_score: 8
cites:
  - title: "GLM-5.4: Toward Generalized Coding with Our First Loop Transformer"
    url: "https://z.ai/blog/glm-5.4"
    year: 2026
    arxiv: null
    doi: null
  - title: "Universal Transformers"
    url: "https://arxiv.org/abs/1807.03819"
    year: 2018
    arxiv: "1807.03819"
    doi: null
---

# GLM-5.4: Toward Generalized Coding with Our First Loop Transformer

## One-sentence takeaway

Z.ai turned 28 layers of its pre-trained GLM-5 base into a weight-shared loop run twice (750B scale) through continued training rather than training a looped model from scratch, and kept serving cost in check with per-token gated updates, a hybrid KV cache in which the second pass reuses the first pass's sparse KV plus its own sliding window, and reuse of the first pass's sparse-attention indices.

## Why it matters here

This is the first flagship-scale looped model whose post spells out the KV design, and it lands three days after Inkling 2 Mini (2680), whose per-loop KV halved vLLM capacity. GLM-5.4's answer is that an extra loop should cost one sliding window of KV, not a full context, with zero extra indexing. For agent serving and prefix caching, looped depth changes what a "cached prefix" is (first-pass sparse KV + second-pass window), so cache layouts, tiering and migration schemes need to be loop-aware. The claimed 10–14% shorter outputs on GPQA-Diamond/MMLU-Pro ("reasoning moves from tokens into depth") is also a model-vs-harness data point: some test-time compute moves inside the model, away from tokens the harness can see.

## Key ideas

- **Retrofit, not scratch.** Looped models trained from scratch still lag unshared ones at equal pre-training compute, so Z.ai adapted an existing base by continued training. Validated progressively at 1B, 4B, 30B and 750B.
- **Gated progressive updates.** Independent per-token gates per iteration write candidate updates into the residual stream; overwriting hidden states directly blew up activation norms. After training, pass 1 writes conservatively and pass 2 opens the gates, and harder tokens get bigger pass-1 writes.
- **Hybrid KV cache.** Pass 2 reuses the sparse KV selected in pass 1 and keeps its own new KV only in a local sliding window; the two streams can overlap at the same positions. An extra loop costs one window of KV, which the post says keeps the 1M-context deployment cost increase over GLM-5.3 under control.
- **Sparse index reuse.** Pass 2 reuses pass 1's indexer output (zero extra indexing), reported as nearly identical to recomputing.
- **Iso-parameter ablation (30B).** About 10% more training compute; largest gains in math, science and long context; output length down 10–14% on most benchmarks.
- **Serving.** Up to 200 tok/s off-peak, 70–80 tok/s at peak, with fused kernels to cut loop-amplified memory traffic. Weights are planned for open release after safety hardening.

## Caveats

Vendor blog post with no paper, no released weights and (in the text I read) no benchmark tables; the "comparable to 2T–3T parameter models" claim and the ablation numbers are Z.ai's own. The post admits a "marathon thinking" failure mode (overly long reasoning loops). KV-sharing details (window size, which layers, how overlaps are resolved) are not specified. Adaptive per-token loop counts are future work.

## Links

- Blog post: https://z.ai/blog/glm-5.4
- Universal Transformers (cited lineage): https://arxiv.org/abs/1807.03819
