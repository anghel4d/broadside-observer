---
title: "Latency-Aware Orchestration for Multi-Agent LLM Workflows on Heterogeneous GPUs"
authors:
  - "Jinghao Wang"
  - "Yifeng Zhang"
  - "Xiao Zhou"
  - "Yao Lu"
  - "Yihui Zhang"
  - "Xiaoyang Sun"
  - "Tianyu Wo"
  - "Xu Wang"
  - "Chunming Hu"
  - "Renyu Yang"
year: 2026
venue: "arXiv:cs.DC"
arxiv: "2609.03335"
doi: null
source: "https://arxiv.org/abs/2609.03335"
topics:
  - "agentic-llm-serving"
seed_rank: 1580
seed_batch: "frontier-2026-09-04"
reviewed: "2026-09-04"
pool: "agents"
relevance_score: 9
lineage: agentic-serving
cites:
  - title: "Latency-Aware Orchestration for Multi-Agent LLM Workflows on Heterogeneous GPUs"
    url: "https://arxiv.org/abs/2609.03335"
    year: 2026
    arxiv: "2609.03335"
    doi: null
  - title: "From LLM Inference to Agentic Workloads: Characterization and Implications for Serving Systems"
    url: "https://arxiv.org/abs/2608.15127"
    year: 2026
    arxiv: "2608.15127"
    doi: null
  - title: "Adaptive KV Retention for LLM Agents at Human-Approval Timescales"
    url: "https://arxiv.org/abs/2608.30830"
    year: 2026
    arxiv: "2608.30830"
    doi: null
see:
  - "1081-from-llm-inference-to-agentic-workloads"
  - "1077-learning-agent-execution-for-kv-cache-management-in-agentic-serving"
  - "002-efficient-memory-management-for-large-language-model-serving"
  - "1539-adaptive-kv-retention-for-llm-agents-at-human-approval-timescales"
---
# Latency-Aware Orchestration for Multi-Agent LLM Workflows on Heterogeneous GPUs

## One-sentence takeaway

Multi-agent workflows on heterogeneous GPUs need a prediction-guided runtime that turns logical DAG futures into physical placement, fusion, and model-lifecycle decisions under live pool state — up to 36.8% makespan and 25.9% p95 cuts vs SOTA workflow schedulers.

## Why it matters here

Agentic serving standing topic: concurrent Broadside/radar/coding agents are exactly the workload where model residency, load, and dependency forecasts matter more than single-request PagedAttention. This is the systems paper for that pool.

## Key ideas

- Predictor: device-specific activation latency, peak memory, model-loading cost; propagate through workflow deps to forecast readiness and future model demand.
- Constructor: semantics-preserving fusion and model-lifecycle alternatives.
- Scheduler: jointly optimizes selection, placement, and order from live heterogeneous GPU pool state.
- Three workflow scenarios; burst arrivals; large gains on makespan and p95 completion latency.

## Caveats

- Scheduler paper — assumes you already have a multi-agent workflow graph; does not invent the agent loop.
- Heterogeneous pool results; homogeneous vLLM-only deploys may see smaller wins.
- AceSpec / AInfer-PD held as edge/MoE leftovers on the same shelf.

## Links

- arXiv: [2609.03335](https://arxiv.org/abs/2609.03335)
- PDF: https://arxiv.org/pdf/2609.03335
