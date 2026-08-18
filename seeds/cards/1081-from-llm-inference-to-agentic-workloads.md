---
title: "From LLM Inference to Agentic Workloads: Characterization and Implications for Serving Systems"
authors:
  - "Chaokun Chang"
  - "Yukun Zhou"
  - "Kaihua Fu"
  - "Dakai An"
  - "Tianyu Feng"
  - "Hanfeng Lu"
  - "Sheng Yao"
  - "Pu Guo"
  - "Yinghao Yu"
  - "Yizhou Shan"
  - "Bo Li"
  - "Binhang Yuan"
  - "Wei Wang"
year: 2026
venue: "arXiv:cs.OS"
arxiv: "2608.15127"
doi: null
source: "https://arxiv.org/abs/2608.15127"
topics:
  - "agentic-serving"
  - "workload-characterization"
  - "state-offload"
  - "tool-caching"
seed_rank: 1081
seed_batch: "frontier-2026-08-18"
reviewed: "2026-08-18"
pool: "agents"
relevance_score: 9
lineage: agentic-serving
cites:
  - title: "Efficient Memory Management for Large Language Model Serving with PagedAttention"
    url: "https://arxiv.org/abs/2309.06180"
    year: 2023
    arxiv: "2309.06180"
    doi: null
  - title: "SGLang: Efficient Execution of Structured Language Model Programs"
    url: "https://arxiv.org/abs/2312.07104"
    year: 2024
    arxiv: "2312.07104"
    doi: null
  - title: "SWE-bench: Can Language Models Resolve Real-World GitHub Issues?"
    url: "https://arxiv.org/abs/2310.06770"
    year: 2024
    arxiv: "2310.06770"
    doi: null
  - title: "Autellix: An Efficient Serving Engine for LLM Agents as General Programs"
    url: "https://arxiv.org/abs/2502.13965"
    year: 2025
    arxiv: "2502.13965"
    doi: null
see:
  - "002-efficient-memory-management-for-large-language-model-serving"
  - "083-sglang-efficient-execution-of-structured-language-model-prog"
  - "1017-total-recall-at-what-cost-benchmarking-the-serving-cost-of-agentic-memory"
  - "001-swe-agent-agent-computer-interfaces-enable-automated-softwar"
  - "1077-learning-agent-execution-for-kv-cache-management-in-agentic-serving"
---

# From LLM Inference to Agentic Workloads: Characterization and Implications for Serving Systems

## One-sentence takeaway

Agentic serving is not "LLM inference plus tools": non-LLM stages dominate half the suite, sessions wait minutes–hours while holding state, and the control-plane tax plus cross-request tool redundancy are first-class costs.

## Why it matters here

This is the measurement paper the serving topic has been missing. Capability benches (SWE-bench, WebArena) score tasks; this instruments 10 apps + 178k production sessions as a *systems* object *Y = Φ(W, S)*. Broadside's own agent loop (tool calls, sandboxes, long idle between human ticks) looks like their production coding-agent trace: median session executes 20% of its lifetime, 59% of sessions eat a KV TTL expiry, compaction averages 156 s. CacheScout/GraniKV optimize the GPU KV; AgentSysBench says that may be the minority of wall time. Four cheap, characterization-guided knobs (task-disaggregated serving, communication-aware placement, idle-state offload, tool-result cache) move latency 29–40%, placement 4.5×, memory 4.6×, and search calls −35% — without a new engine.

## Key ideas

- Six properties: (1) non-LLM dominance (5/10 apps; sandbox peak 28 GB), (2) heterogeneous affinity (task latencies up to 32× on the same component), (3) shifting bottlenecks across *R,T,M,O,H,C,A*, (4) idle-but-live, (5) control-plane tax (schemas, raw observations, auxiliary LLM calls, cache-reprefill at 31.5% of $ on evicted sessions), (6) cross-request redundancy (27% of distinct search queries = 67% of calls).
- Distinguish performance state (KV, recomputable), persistent correctness state (per-session vector DB, filesystem), and transient working-set (compiler pages). Checkpoint at quiescent boundaries, not at sandbox peaks.
- Prefix-cache hit rates 99% (append-only Claude Code) down to 1% (DeepResearch rewriting context each turn). Same serving stack, opposite cache value.
- Suite: RAG, HuggingGPT, DeepResearch, Mini-SWE, Codex, WebAgent, GUIAgent, Claude Code, Openclaw, Pi-AutoR. Will be released.

## Caveats

- Not "yet another agent accuracy bench" — but still a bench: the four design explorations are proofs of concept, not a production scheduler.
- Default stack mixes self-hosted SGLang and vendor APIs; some bottlenecks are placement artifacts, which is the point, but numbers are not portable.
- Production traces are three unnamed apps; idle-interval offload is demonstrated on Mini-SWE tool-wait, not the human-paced pauses.

## Links

- arXiv: [2608.15127](https://arxiv.org/abs/2608.15127)
