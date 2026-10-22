---
title: "Cache Engineering for Agents"
authors:
  - "Tianyu Fu"
  - "Ruoxi Wang"
  - "Zihan Min"
  - "Zhongqi Ren"
  - "Zhihao Li"
  - "Tengxuan Liu"
  - "Shengxu Mu"
  - "Hanling Zhang"
  - "Yu Wang"
year: 2026
venue: "arXiv preprint (cs.CL)"
arxiv: "2610.28577"
doi: null
source: "https://arxiv.org/abs/2610.28577"
topics:
  - "agentic-llm-serving"
  - "agent-tokenization-and-caching"
seed_rank: 2382
seed_batch: "frontier-2026-10-22"
reviewed: "2026-10-22"
pool: "agents"
relevance_score: 9
cites:
  - title: "Cache Engineering for Agents"
    url: "https://arxiv.org/abs/2610.28577"
    year: 2026
    arxiv: "2610.28577"
    doi: null
  - title: "SGLang: Efficient Execution of Structured Language Model Programs"
    url: "https://arxiv.org/abs/2312.07104"
    year: 2024
    arxiv: "2312.07104"
    doi: null
  - title: "SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering"
    url: "https://arxiv.org/abs/2405.15793"
    year: 2024
    arxiv: "2405.15793"
    doi: null
see:
  - 083-sglang-efficient-execution-of-structured-language-model-prog
  - 001-swe-agent-agent-computer-interfaces-enable-automated-softwar
---

# Cache Engineering for Agents

## One-sentence takeaway

Instead of trimming or summarizing an agent's text history (which changes the prefix and forces a re-prefill of everything after the edit), let the agent operate on its KV cache directly with `drop` (exclude entries from future attention) and `repos` (re-rotate RoPE positions), served by an SGLang-based engine (AKV) whose extended radix tree tracks history-dependent cache states; a simple "roll off old tool responses" policy beats threshold summarization by 1.7 points on average while cutting cost 27.7%.

## Why it matters here

Broadside's agents are exactly the long tool-heavy loops where the authors measure KV reads at 82.4% of API cost. The paper reframes context management as a serving-layer contract: the harness says which cache spans to stop attending to, and the engine keeps reuse correct. That is a concrete design option for self-hosted agent serving next to card 2361's residency numbers, and it names a correctness trap (identical token sequences can carry different KV states) that any homegrown prefix cache would hit.

## Key ideas

- **Three cache operations.** `append` (normal), `drop` (selected KV leaves future attention but the logical text trajectory is unchanged), and `repos` (shift retained keys' RoPE positions so position indices do not run past the model's limit while the active cache stays small).
- **History dependence.** Because retained KV was computed while dropped tokens were still visible, "drop A then append C" and "append C then drop A" give different states for the same tokens; plain prefix matching is therefore unsound. AKV adds drop nodes to the radix tree, drop-aware eviction and segment-batch attention, behind a stateless API that looks like a normal chat endpoint.
- **Motivating measurement.** On 100 BrowseComp-Plus tasks with GPT-OSS-120B, trimming to the last 12 tool rounds cost 1.85× the full-context baseline (re-prefill), while 48K-threshold summarization saved about 7% but lost 5 points; dropping old tool-response KV improved both.
- **Results.** Across MiniMax-M2.7, GPT-OSS-120B and MiroThinker-1.7-Mini on BrowseComp-Plus, GAIA-Text, SWE-bench Verified and xbench-DeepSearch, the rolling-drop policy averages +1.7 points and −27.7% cost versus summarization at a model-specific threshold (−21.9% versus 48K "text engineering"). Serving: up to 1.2× output throughput and 1.5× faster P95 latency.
- **Policies can be searched.** A recursive self-improvement loop over cache policies (refined on 20 BCP tasks with MiniMax-M2.7) reduced cost a further 7.1% on held-out tasks versus the expert policy.

## Caveats

Cost is computed from public token prices (Groq, MiniMax, Qwen base rates), not measured billing. Gains are averages over three open-weight models; the RSI-refined policy raised MiniMax-M2.7's per-task cost (5.4 → 5.9 cents) even as GPT-OSS-120B's fell. The scheme needs control of the serving engine (it cannot be applied through a closed API), training agents under the scheme is future work, and linear-attention models are not supported yet.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.28577
- PDF: https://arxiv.org/pdf/2610.28577
- Code: https://github.com/thu-nics/AKV
