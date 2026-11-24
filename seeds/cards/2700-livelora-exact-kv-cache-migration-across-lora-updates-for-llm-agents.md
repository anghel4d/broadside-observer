---
title: "LiveLoRA: Exact KV Cache Migration Across LoRA Updates for LLM Agents"
authors:
  - "Tianyi Huang"
  - "Samuel Xu"
  - "Ivy Gu"
  - "Nathan Huang"
  - "Siqi Zhang"
year: 2026
venue: "arXiv preprint (cs.AI); NeurIPS 2026 Workshop AgenticOS"
arxiv: "2611.31105"
doi: null
source: "https://arxiv.org/abs/2611.31105"
version_reviewed: "v1"
topics:
  - "agent-tokenization-and-caching"
  - "continual-agent-skills"
  - "agentic-llm-serving"
  - "kv-serving"
seed_rank: 2700
seed_batch: "frontier-2026-11-24"
reviewed: "2026-11-24"
pool: "agents"
relevance_score: 9
see:
  - 083-sglang-efficient-execution-of-structured-language-model-prog
cites:
  - title: "LiveLoRA: Exact KV Cache Migration Across LoRA Updates for LLM Agents"
    url: "https://arxiv.org/abs/2611.31105"
    year: 2026
    arxiv: "2611.31105"
    doi: null
  - title: "LoRA: Low-Rank Adaptation of Large Language Models"
    url: "https://arxiv.org/abs/2106.09685"
    year: 2021
    arxiv: "2106.09685"
    doi: null
  - title: "SGLang: Efficient Execution of Structured Language Model Programs"
    url: "https://arxiv.org/abs/2312.07104"
    year: 2024
    arxiv: "2312.07104"
    doi: null
---

# LiveLoRA: Exact KV Cache Migration Across LoRA Updates for LLM Agents

## One-sentence takeaway

If an agent's LoRA adapter only touches the final decoder block, and its K/V down-projections stay fixed, then a new adapter version can be published to every live session by rebuilding only final-block K/V from stored low-rank coordinates and re-running the latest token. The authors prove this is equivalent to full-history re-prefill in exact arithmetic and measure a 68.98× average median speedup at 32 sessions × 8K tokens, with about 4.8% decoding overhead.

## Why it matters here

Continual skills and prefix caching are usually in tension: once the weights change, every cached prefix is stale, so an agent that learns online either mixes model versions in its KV or pays a full re-prefill of every session. LiveLoRA treats "adapter version + KV cache + next-token logits" as one versioned, atomically committed state, which is the provenance-first framing Broadside wants for persistent agents: you always know which weights produced which cache. The design is a constraint on the adapter, chosen so the serving state survives, which is model-vs-harness co-design at the runtime layer. It gives a concrete break-even rule for how often an agent may publish skill updates before migration stops paying.

## Key ideas

- **Version-coherent state.** Publication is a transition of (adapter, KV cache, next-token logits). The runtime prepares the candidate state without touching the published version and commits all three together, with failure atomicity before commit.
- **Invariant coordinates.** Frozen lower blocks keep the final-block input identical across versions. Fixed K/V adapter down-projections turn that input into compact low-rank coordinates. Base projections plus coordinates are enough to rematerialize historical final-block K/V under any new up-projection.
- **Closed-form migration.** Rebuild candidate K/V, re-evaluate only the latest token through the final block to get new logits, and reuse lower-block caches unchanged. A theorem gives continuation equivalence to full-history re-prefill in exact arithmetic under the stated assumptions.
- **Numbers (Qwen2.5-3B-Instruct).** Median paired publication speedup over full-history re-prefill averages 68.98× over five runs (32 sessions × 8K tokens). Decoding overhead is about 4.8% relative to native cached decoding. Compact retention needs 3.42× less extra session storage than retained-boundary replay at 8K, at similar publication-plus-decoding cost.
- **Policy rule.** With cost C(N) = P + N·d per update interval, the paper estimates break-even at about 600 tokens per update against full re-prefill and about 30 against retained-boundary replay (8K histories).
- **Escape hatches.** Retaining normalized inputs allows trainable down-projections. Adapting earlier blocks is possible by replaying only the mutable suffix of blocks.

## Caveats

Workshop paper (AgenticOS at NeurIPS 2026). I read the abstract, introduction, results and scope sections of the v1 HTML; numbers are the authors' and unreplicated. The equivalence is in exact arithmetic: in BF16, migration and boundary replay agree on the tested greedy tokens but differ numerically in final-block K/V and logits (as do dense re-prefill and ordinary cached execution). The adapter family is restricted (final block, fixed K/V down-projections), so expressiveness versus ordinary LoRA is not measured. The evaluation measures publication cost, not whether such adapters learn useful skills; the authors leave pairing with learned adapters and real update schedules to future work. The implementation uses contiguous sequences, standard RoPE and process-local coordination, not paged caches or distributed serving.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.31105
- PDF: https://arxiv.org/pdf/2611.31105
- HTML: https://arxiv.org/html/2611.31105v1
