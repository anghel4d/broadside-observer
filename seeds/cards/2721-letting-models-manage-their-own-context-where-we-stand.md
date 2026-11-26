---
title: "Letting Models Manage Their Own Context: Where We Stand"
authors:
  - "Alessio Devoto"
  - "Avinash Vem"
  - "Tara Safavi"
  - "Sanjay Kariyappa"
  - "Yu-Hsuan Tseng"
  - "Paul Furgale"
  - "Ricardo Silveira Cabral"
year: 2026
venue: "arXiv preprint (cs.AI); NVIDIA"
arxiv: "2611.34147"
doi: null
source: "https://arxiv.org/abs/2611.34147"
version_reviewed: "v1"
topics:
  - "agent-tokenization-and-caching"
  - "agent-failure-localization"
  - "agentic-llm-serving"
  - "harness-engineering"
  - "kv-serving"
seed_rank: 2721
seed_batch: "frontier-2026-11-26"
reviewed: "2026-11-26"
pool: "agents"
relevance_score: 9
see:
  - 2382-cache-engineering-for-agents
  - 004-memgpt-towards-llms-as-operating-systems
  - 083-sglang-efficient-execution-of-structured-language-model-prog
cites:
  - title: "Letting Models Manage Their Own Context: Where We Stand"
    url: "https://arxiv.org/abs/2611.34147"
    year: 2026
    arxiv: "2611.34147"
    doi: null
  - title: "Cache Engineering for Agents"
    url: "https://arxiv.org/abs/2610.28577"
    year: 2026
    arxiv: "2610.28577"
    doi: null
  - title: "SideQuest: Model-Driven KV Cache Management for Long-Horizon Agentic Reasoning"
    url: "https://arxiv.org/abs/2602.22603"
    year: 2026
    arxiv: "2602.22603"
    doi: null
  - title: "Context Language Models"
    url: "https://arxiv.org/abs/2609.37725"
    year: 2026
    arxiv: "2609.37725"
    doi: null
  - title: "SGLang: Efficient Execution of Structured Language Model Programs"
    url: "https://arxiv.org/abs/2312.07104"
    year: 2024
    arxiv: "2312.07104"
    doi: null
  - title: "MemGPT: Towards LLMs as Operating Systems"
    url: "https://arxiv.org/abs/2310.08560"
    year: 2023
    arxiv: "2310.08560"
    doi: null
---

# Letting Models Manage Their Own Context: Where We Stand

## One-sentence takeaway

NVIDIA gave four frontier models a context API in its open-source NOOA harness, so the model decides when and what to compact instead of the harness. At tight budgets this can help a lot (GPT-6.1 Sol goes from 21% to 56% on OfficeQA Pro v2 at 32K; Kimi K3 gains with up to 41% fewer input tokens), but models differ widely in how they use it. Reusing the KV cache of the unchanged suffix after an edit cuts prefill compute by 4–15% per request with no measurable accuracy change.

## Why it matters here

This is a model-vs-harness experiment on one decision, who compacts context, with the harness held fixed and the policy swapped. It also ties that decision to the serving layer. Standard prefix caching stops at the first changed token, so every model-driven edit forces recomputation of everything after it. Suffix-KV reuse is the serving change that makes edit-heavy agent sessions cheap. Both halves bear on Broadside's tokenization and caching thread: the context a model edits needs a cache that survives edits, not just appends.

## Key ideas

- **Two strategies.** Harness-driven compaction (summarize, keep the last 10 events) against model-driven compaction through NOOA's context API, with a usage indicator, a hint to consider compacting at 85%, and a pressure warning near the limit.
- **Budgets as a proxy for length.** Context budgets are swept from 8K to 512K tokens to simulate longer tasks. Over budget, a fallback drops the oldest events. Three failures count as a wrong answer.
- **Models:** GPT-6.1 Sol, Kimi K3, DeepSeek V4 Pro, Claude Opus 5.5, on OfficeQA Pro v2 (document research) and MLE-bench Lite.
- **Behaviour varies.** Some models barely call the API, some compact in large aggressive steps, some compact earlier than needed. Prompt changes move the timing. Gains are not consistent across models.
- **Suffix KV reuse.** An SGLang prototype with Qwen3.6-27B reuses KV for text that survives an edit. Prefill drops 4–15% per request against standard prefix caching on MLE-bench Lite, OfficeQA Pro and DeepSWE, most on OfficeQA Pro, where about 10K tokens (~60% of the prompt) survive each edit.
- **Co-design claim:** train models to manage their own context, and serve them on engines that support KV-cache editing.

## Caveats

I read the abstract, introduction, setup, KV-reuse section and limitations of the v1 HTML. The benchmarks are small (90 OfficeQA Pro v2 questions, 22 MLE-bench Lite competitions), so the authors warn that small differences may not be significant. Shrinking the budget is only a proxy for long tasks, and the drop-oldest fallback can affect scores itself. Only four models were tested, with unknown training. Suffix KV reuse is an approximation: reused KV was computed under a different prefix. The paper reports no measurable accuracy change on these tasks, not exactness. The headline GPT-6.1 result is one model at one budget.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.34147
- PDF: https://arxiv.org/pdf/2611.34147
- HTML: https://arxiv.org/html/2611.34147v1
