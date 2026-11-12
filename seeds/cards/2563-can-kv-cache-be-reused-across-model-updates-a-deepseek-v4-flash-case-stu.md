---
title: "Can KV Cache Be Reused Across Model Updates? A DeepSeek-V4-Flash Case Study"
authors:
  - "Zhikun Tao"
  - "Fangyong Jin"
  - "Junping Zhao"
year: 2026
venue: "arXiv preprint (cs.DC)"
arxiv: "2611.14051"
doi: null
source: "https://arxiv.org/abs/2611.14051"
version_reviewed: "v1"
topics:
  - "agent-tokenization-and-caching"
  - "agentic-llm-serving"
seed_rank: 2563
seed_batch: "frontier-2026-11-12"
reviewed: "2026-11-12"
pool: "systems"
relevance_score: 8
see:
  - 999-deepseek-v4-million-token-context-intelligence
cites:
  - title: "Can KV Cache Be Reused Across Model Updates? A DeepSeek-V4-Flash Case Study"
    url: "https://arxiv.org/abs/2611.14051"
    year: 2026
    arxiv: "2611.14051"
    doi: null
---

# Can KV Cache Be Reused Across Model Updates? A DeepSeek-V4-Flash Case Study

## One-sentence takeaway

Reusing a KV cache built by an older model version after a weight update can keep useful task information and buy 2-5x faster time-to-first-token, but it does not reproduce the updated model's behavior, so task utility and fidelity must be judged separately.

## Why it matters here

Agent sessions outlive model versions: a long cached context built yesterday meets today's point release. This is the first careful look at whether that cache is still usable, on DeepSeek-V4-Flash to Flash-0731, and the answer is a clean rule for us: reuse can be a latency win for retrieval-style work, but anything that must match native behavior (content, stopping) needs a re-prefill.

## Key ideas

- **Setup.** Direct cache reuse across four model updates, with a detailed study of DeepSeek-V4-Flash to Flash-0731.
- **Utility varies.** Retrieval accuracy ranges from near-native to large losses depending on the update.
- **Speed.** With source caches available, median TTFT speedups of 2.10-5.08x on three longer-prefix QA benchmarks.
- **Functional Cache Divergence.** Compares next-token distributions under reused vs native caches; reuse preserves behavior better in natural-text continuation, and compatibility degrades with prefix length in single-token retrieval.
- **Fidelity caveat.** Even agreement on the first generated token does not ensure agreement in answer content or stopping behavior.

## Caveats

Four updates, mostly one model family, and QA-style benchmarks; long multi-turn agent sessions with tool output are not directly measured.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.14051
- PDF: https://arxiv.org/pdf/2611.14051
