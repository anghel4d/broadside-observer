---
title: "Context Has a Price: Adding and Removing Context for LLM Coding Agents under Prefix Caching"
authors:
  - "Zerui Yang"
  - "Miaomiao Dong"
  - "Quan Xue"
  - "Chaorui Zhang"
  - "Xuanyu Zheng"
  - "Xiyuan Wang"
  - "Haolin Ruan"
  - "Xueyan Niu"
  - "Guangcheng Song"
  - "Weixi Zhang"
  - "Wei Han"
  - "Bo Bai"
year: 2026
venue: "arXiv preprint (cs.AI)"
arxiv: "2611.22238"
doi: null
source: "https://arxiv.org/abs/2611.22238"
version_reviewed: "v1"
topics:
  - "agent-tokenization-and-caching"
  - "agentic-llm-serving"
seed_rank: 2625
seed_batch: "frontier-2026-11-18"
reviewed: "2026-11-18"
pool: "agents"
relevance_score: 8
see:
  - 2605-callo-serving-cache-miss-requests-with-speculative-decoding-on-invalidat
  - 2427-benchmarks-are-surprisingly-compaction-friendly
  - 2312-prune-the-summary-not-the-history-source-judged-compaction-for-long
  - 1077-learning-agent-execution-for-kv-cache-management-in-agentic-serving
cites:
  - title: "Context Has a Price: Adding and Removing Context for LLM Coding Agents under Prefix Caching"
    url: "https://arxiv.org/abs/2611.22238"
    year: 2026
    arxiv: "2611.22238"
    doi: null
---

# Context Has a Price: Adding and Removing Context for LLM Coding Agents under Prefix Caching

## One-sentence takeaway

Across more than 20,000 coding-agent runs, adding retrieved code or pruning old tool outputs can raise the bill by 33-116% once cached input is priced at a tenth of uncached input, so context-management methods have to be judged on cache-aware token prices and on how the agent's later behaviour changes.

## Why it matters here

We keep recommending compaction, tool-output pruning and evidence packages for the harness; this paper is the first large measurement that prices those edits under a prefix-cache discount. The same pruning that saves 19-36% at list price costs 38-116% more with a tenth-price cache, because every edit invalidates the cached prefix. That is the cost-side companion to Callo (2605), which tries to make invalidation cheaper on the serving side, and a warning for compaction results reported only in raw token counts (2427, 2312).

## Key ideas

- **Setup.** More than 20,000 runs of open models on SWE-bench Verified, SWE-bench and Loc-Bench, with uncached input, cached input and output tokens accounted separately.
- **Adding context.** Retrieved code (evidence packages) cuts read and search commands by 18-34% but raises cost by 33-42% at a one-tenth cache price, with no measurable gain in resolution.
- **Removing context.** Dropping old observations saves 19-36% without a cache discount but raises cost by 38-116% with a tenth-price cache.
- **Behavioural feedback.** Shorter prompts do not guarantee cheaper runs, because agents may respond by taking more steps.
- **Measurement hazard.** Concurrent experiments can share cached prefixes and distort cost comparisons between arms.

## Caveats

Abstract-level read of the v1 preprint (Wednesday 18 Nov 2026 arXiv listing); numbers are the authors' and unreplicated. Results are for open models on SWE-bench-family tasks under a stated price ratio; other cache-price ratios, closed-model APIs and non-coding agents may shift the break-even point.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.22238
- PDF: https://arxiv.org/pdf/2611.22238
- HTML: https://arxiv.org/html/2611.22238v1
