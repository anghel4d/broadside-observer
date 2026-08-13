---
title: "DeepSeek-V4-Pro-0813 GA"
authors:
  - "DeepSeek-AI"
year: 2026
venue: "DeepSeek API changelog"
arxiv: null
doi: null
source: "https://api-docs.deepseek.com/updates"
topics:
  - "api-release"
  - "agents"
  - "deepseek"
  - "v4-pro"
seed_rank: 1264
seed_batch: "deepseek-lab-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
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
  - title: "DeepSeek-V3 Technical Report"
    url: "https://arxiv.org/abs/2412.19437"
    year: 2025
    arxiv: "2412.19437"
    card: "1206-deepseek-v3-technical-report"
  - title: "DeepSeek-V4: Towards Highly Efficient Million-Token Context Intelligence"
    url: "https://arxiv.org/abs/2606.19348"
    year: 2026
    arxiv: "2606.19348"
    card: "1263-deepseek-v4-million-token-context-intelligence"
---

# DeepSeek-V4-Pro-0813 GA

## One-sentence takeaway

2026-08-13 GA of the hosted V4-Pro checkpoint (`deepseek-v4-pro` → DeepSeek-V4-Pro-0813): stronger agent scores, native Responses API, and low/high/max thinking effort — no new arXiv; architecture remains the V4 paper.

## Why it matters here

Product end of the first-party stack. The April preview report (`1263`, arXiv:2606.19348) is still the architecture; this changelog is the GA API/model drop agents actually call.

## Key ideas

- Changelog dated 2026-08-13: https://api-docs.deepseek.com/updates — APP, Web, and API; call `deepseek-v4-pro` unchanged.
- Agent-focused GA numbers (provider-reported): HLE 42.7 / 60.0 (w/ tools); Terminal Bench 2.1 87.9; NL2Repo 61.5; Cybergym 83.3; DeepSWE 62.7; Toolathlon-Verified 74.1; Agents' Last Exam 25.7; AutomationBench (Public) 31.8; DSBench-FullStack 71.1; DSBench-Hard 67.2.
- Native OpenAI Responses API (Codex-adapted). Thinking effort for V4-Pro and V4-Flash: low / high / max.
- Peak/off-peak API pricing announced, effective 16:00 UTC on 2026-08-16. Context remains 1M (same CSA+HCA / mHC / Muon stack as `1263`).

## Caveats

- Changelog card, not a paper. No new arXiv on 2026-08-13; cite `1263` / 2606.19348 for architecture.
- Benchmarks are first-party; HF still hosts the April preview weights at mint time. Treat 0813 as a hosted post-train, not a new open checkpoint.

## Links

- Changelog: https://api-docs.deepseek.com/updates
- Pricing: https://api-docs.deepseek.com/quick_start/pricing/
- V4 paper: [2606.19348](https://arxiv.org/abs/2606.19348)
