---
title: "Benchmarking LLM Serving Systems for Agentic AI Workloads with XPerf"
authors:
  - "Michael Wang"
  - "Yikang Yue"
  - "Shaobo Li"
  - "Yirui Eric Zhou"
  - "Chen Wang"
  - "Jian Huang"
year: 2026
venue: "arXiv:cs.DC"
arxiv: "2608.20370"
doi: null
source: "https://arxiv.org/abs/2608.20370"
topics:
  - "agentic-llm-serving"
  - "agent-tokenization-and-caching"
seed_rank: 1232
seed_batch: "frontier-2026-08-24"
reviewed: "2026-08-24"
pool: "agents"
relevance_score: 10
lineage: agent-kv-cache
cites:
  - title: "Efficient Memory Management for Large Language Model Serving with PagedAttention"
    url: "https://arxiv.org/abs/2309.06180"
    year: 2023
    arxiv: "2309.06180"
    doi: null
  - title: "From LLM Inference to Agentic Workloads: Characterization and Implications for Serving Systems"
    url: "https://arxiv.org/abs/2608.15127"
    year: 2026
    arxiv: "2608.15127"
    doi: null
  - title: "Learning Agent Execution for KV-Cache Management in Agentic Serving"
    url: "https://arxiv.org/abs/2608.14624"
    year: 2026
    arxiv: "2608.14624"
    doi: null
  - title: "CacheRoute: Planned Prefix-Affinity Routing for Large-Scale LLM Serving"
    url: "https://arxiv.org/abs/2608.19677"
    year: 2026
    arxiv: "2608.19677"
    doi: null
  - title: "ReCache: Efficient KV Cache Reuse and Compression for Tool-Augmented LLM Agents"
    url: "https://arxiv.org/abs/2608.19662"
    year: 2026
    arxiv: "2608.19662"
    doi: null
see:
  - "002-efficient-memory-management-for-large-language-model-serving"
  - "1081-from-llm-inference-to-agentic-workloads"
  - "1077-learning-agent-execution-for-kv-cache-management-in-agentic-serving"
  - "1143-cacheroute-planned-prefix-affinity-routing-for-large-scale-ll"
  - "1142-recache-efficient-kv-cache-reuse-and-compression-for-tool-aug"
  - "1080-granikv-asymmetric-granularity-kv-cache-paging"
---

# Benchmarking LLM Serving Systems for Agentic AI Workloads with XPerf

## One-sentence takeaway

Agentic serving cannot be load-tested with independent prompts: XPerf traces the execution DAG of real agents, then replays recorded token IDs so prefix-cache behaviour is comparable across engines.

## Problem

A user request to an agent expands into a graph of dependent LLM and tool calls whose shape is a function of nondeterministic decode. The same SWE-agent request under a fixed seed still differs by ~70% in LLM-call count across runs, so queuing delay and p95 move by tens of percent. Chat serving benches (LLMPerf, MLPerf, InferenceX) issue independent calls. Agent eval harnesses score task success, not TTFT / KV occupancy / prefix hit. AA-AgentPerf is a closed ranking over proprietary coding traces. GRID COMMAND and the DeepSeek-style harness need an open, reproducible load against vLLM-class engines.

## Design

- Application-agnostic tracing by interposing OpenAI/Anthropic client libraries and LangChain/LangGraph tool/Runnable surfaces; one-line wraps for custom tools. Spans go to OpenTelemetry; LLM calls record input and output token IDs.
- Time-span trees recover parent orchestrators so parallel ReAct branches do not grow false edges. Leaves are LLM/tool nodes; DAG edges are direct finish-before-start dependencies after transitive reduction.
- Replay submits the recorded input token IDs (prefix-cache fidelity) and either ignores EOS until the recorded output length or, with a small vLLM hook, forces the recorded token sequence (needed for MoE routing / native sparse attention). Tool nodes sleep the traced duration. Arrival can be the original times, Poisson, offline batch, or fixed concurrency.
- Profiler polls engine `/metrics` (running/queued calls, KV used, prefix hit, token throughput) and CUPTI (tensor core, SM, HBM) at ~1 s / 20 ms.

## Evidence

Eight shipped apps (Open Deep Research, DeerFlow, mini-SWE-agent, LATS, LLMCompiler, Tau-Bench, CUGA, MagenticOne) on gpt-oss-120b / Qwen3.6-35B-A3B, vLLM 0.19, 2×H100 NVL. Isolated and concurrent replay keep end-to-end latency MAPE under 3%; two-hour concurrent replay matches running/waiting call counts (MAE 1.4 / 1.6). Prefix-cache thrashing is visible: mini-SWE-agent hit 91%→<4% as load rises; DeerFlow stays <1% because a timestamp leads the system prompt. Cache-aware routing at 4 engines reaches 3.61× single-engine decode throughput vs 2.26× round-robin. Request-level FCFS vs call-level FCFS cannot be judged from live runs — the same seed produced traces whose mean latency differed by 720–910 s.

## Limitations

Host-side tool execution is out of scope (tools are duration sleeps). Output-token enforcement needs a vLLM patch. Testbed is two dual-H100 boxes, not a production multi-tenant fleet. Open-source drop is promised, not linked.

## Implications for Broadside

Standing topic: agentic LLM serving. 1081 characterised the load; CacheScout (1077) / GraniKV (1080) decide what to keep; CacheRoute (1143) decides where the request lands; ReCache (1142) makes schema KV a set. XPerf is the missing *measurement contract*: replay GRID COMMAND / harness sessions as DAGs with frozen token IDs, then score prefix hit, KV thrashing, and routing policy without the agent’s control flow moving the goalposts. First action: trace one GRID COMMAND loop and a DeepSeek-harness skill session; if a timestamp or per-turn UUID sits in the system prefix, that is already a serving bug.

## Links

- arXiv: [2608.20370](https://arxiv.org/abs/2608.20370)
