---
title: "DeepSeek-V4.1-Flash: Pushing the Limits of KV Cache Compression"
authors:
  - "DeepSeek-AI"
year: 2026
venue: "DeepSeek technical report (Hugging Face); 1017 checkpoint update"
arxiv: null
doi: null
source: "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash/blob/main/DeepSeek_V41_Tech_Report.pdf"
topics:
  - "agentic-llm-serving"
  - "agent-tokenization-and-caching"
  - "deepseek"
seed_rank: 2340
seed_batch: "frontier-2026-10-18"
reviewed: "2026-10-18"
pool: "agents"
relevance_score: 9
lineage: deepseek
cites:
  - title: "DeepSeek-V4.1-Flash: Pushing the Limits of KV Cache Compression"
    url: "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash/blob/main/DeepSeek_V41_Tech_Report.pdf"
    year: 2026
    arxiv: null
    doi: null
  - title: "DeepSeek-V4.1-Flash-1017 (model card and weights)"
    url: "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017"
    year: 2026
    arxiv: null
    doi: null
  - title: "You Only Cache Once: Decoder-Decoder Architectures for Language Models"
    url: "https://arxiv.org/abs/2405.05254"
    year: 2024
    arxiv: "2405.05254"
    doi: null
see:
  - 979-deepseek-v2-economical-efficient-moe-language-model
  - 997-engram-conditional-memory-via-scalable-lookup
  - 999-deepseek-v4-million-token-context-intelligence
---

# DeepSeek-V4.1-Flash: Pushing the Limits of KV Cache Compression

## One-sentence takeaway

DeepSeek's V4.1-Flash (552B-backbone multimodal MoE, 1M context) cuts the always-in-HBM KV cache to 890 bytes per token, about 1/4 of V4-Flash, and the persistent SSD/host cache to about 1/8, by halving prefill with a Causal Encoder-Decoder, sharing global KV across layers (CSA2), storing it in FP4, and approximately replaying sliding-window state instead of persisting it; the 17 Oct "1017" checkpoint of the same architecture raises Terminal-Bench 4.0 from 31.2 to 42.3 and DeepSWE v1.1 from 74.2 to 77.0 with shorter outputs.

## Why it matters here

Broadside's workloads are the input-heavy agent loops this report is built for: many tool calls, long shared prefixes, frequent cache misses. It is the clearest first-party statement that the serving bottleneck has moved from decode FLOPs to KV storage and bandwidth, and it gives concrete levers (prefill-only half network, cross-layer cache reuse, bounded replay of local state) that sit right beside our existing cards on remote KV tiers and session-delta tokenization. The open MIT weights and the `deepseek-recipe` Rust prompt-encoding libraries make it directly usable.

## Key ideas

- **Causal Encoder-Decoder (CED).** Building on YOCO, the bottom L/2 layers act as a causal encoder; upper-layer global KV is projected from the layer-L/2 hidden state with per-layer weights, so prefill only runs half the network: 8B active parameters per token in prefill vs 16B in decode, prefill cost roughly O(N·L/2).
- **CSA2 with three static layer modes.** Full (make global KV and index), Reindex (reuse an earlier layer's KV but rescore with its own indexer query), Reuse (reuse both KV and Top-K indices). Every layer keeps its own query and sliding-window KV. Pure CSA2 replaces V4's CSA/HCA hybrid; a hierarchical sparse indexer (up to 2,048 blocks of 8 positions) trims decoder indexing.
- **FP4 global KV, trained that way.** FP4 KV caching is used during training with marginal loss; together with cross-layer reuse this gives the 890 B/token figure (claimed ~437× smaller than DeepSeek-V1).
- **SWA Bounded Replay.** Exact sliding-window reconstruction would replay L × n_win tokens; replaying only the last n_win tokens is approximate but reported as negligible loss, so SWA KV is no longer persisted to SSD. That is a new storage-versus-recompute trade-off.
- **Near-flat decode cost.** With Single-Pass mHC (one Mega-mHC kernel halving activation traffic), Engram conditional memory and DSpark speculative decoding, a 256× longer context (4K to 1M) raises per-token decode FLOPs by only about a quarter. Reuse-mode layers run in 15 kernels for prefill and 11 for decode.
- **Training and post-training.** 45T multimodal tokens; sparse attention trained from scratch at 64K with no dense warmup; the base model is reported comparable to V4-Pro-Base with 1/3 the total and 1/4 the active parameters. Post-training covers large-scale agent task synthesis, RL on a separate sandbox fleet (DSec), controllable reasoning effort and on-policy distillation.

## Caveats

First-party report with no independent replication; the benchmark table for the 1017 update is vendor-run, and comparator scores (GPT-5.6 Sol, Opus 5, K3, GLM-5.3) come from mixed harnesses (Claude Code harness for Terminal-Bench, Mini-SWE-V2 for DeepSWE). The authors say CSA2 selection errors and approximate SWA reconstruction "may still cause capability degradation in untested boundary cases", especially sparse retrieval over long contexts and cache-resumption boundaries. The report covers V4.1-Flash (September); the 1017 checkpoint is a post-training update with no separate write-up. They also say benchmark parity does not mean parity with leading closed models on the hardest tasks. The release ships no Jinja chat template, only a Python reference encoder.

## Links

- Technical report (PDF): https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash/blob/main/DeepSeek_V41_Tech_Report.pdf
- DeepSeek-V4.1-Flash-1017 weights and model card: https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017
- DeepSeek-V4.1-Flash (base release): https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash
- deepseek-recipe (Rust prompt encoding toolkit): https://github.com/deepseek-ai/deepseek-recipe
