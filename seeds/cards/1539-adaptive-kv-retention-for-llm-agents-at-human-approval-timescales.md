---
title: "Adaptive KV Retention for LLM Agents at Human-Approval Timescales"
authors:
  - "Minseo Choi"
  - "Ananya Joshi"
year: 2026
venue: "arXiv:cs.OS"
arxiv: "2608.30830"
doi: null
source: "https://arxiv.org/abs/2608.30830"
topics:
  - "agentic-llm-serving"
  - "agent-tokenization-and-caching"
seed_rank: 1539
seed_batch: "frontier-2026-09-02"
reviewed: "2026-09-02"
pool: "agents"
relevance_score: 10
lineage: agent-kv-serving
cites:
  - title: "Efficient Memory Management for Large Language Model Serving with PagedAttention"
    url: "https://arxiv.org/abs/2309.06180"
    year: 2023
    arxiv: "2309.06180"
    doi: null
  - title: "Nexus: Depth-Adaptive KV-Cache Splicing and Retrieval-Decoupled Tool Routing for Agentic LLMs on Unified Memory"
    url: "https://arxiv.org/abs/2608.20397"
    year: 2026
    arxiv: "2608.20397"
    doi: null
  - title: "VPP: Virtual Pipeline Parallelism for Efficient Chunked Prefill in Long-Context LLM Inference"
    url: "https://arxiv.org/abs/2608.26523"
    year: 2026
    arxiv: "2608.26523"
    doi: null
see:
  - "002-efficient-memory-management-for-large-language-model-serving"
  - "1233-nexus-depth-adaptive-kv-cache-splicing-and-retrieval-decoupled"
  - "1081-from-llm-inference-to-agentic-workloads"
  - "1448-vpp-virtual-pipeline-parallelism-for-efficient-chunked"
---
# Adaptive KV Retention for LLM Agents at Human-Approval Timescales

## One-sentence takeaway

Agentic requests can suspend for minutes or hours on human approval: Adaptive KV Retention balances GPU capacity against recomputation under uncertain wait times.

## Why it matters here

Prior agent-serving work targets seconds-scale tool pauses. GRID COMMAND and Broadside often wait on human/operator gates. This is the first in-window paper that treats human-approval timescales as a first-class KV retention policy problem (cs.OS).

## Key ideas

- Suspension windows of minutes–hours (human approval), not just tool-call seconds.
- Retention policy under uncertain wait: keep suspended KV vs free GPU for active serving and recompute later.
- Central tension: retained KV preserves fast resume but starves active capacity; eviction forces expensive prefills.
- Framed as OS/serving policy, not another attention variant.

## Caveats

- Policy quality depends on wait-time priors; bad priors thrash between retention and recompute.
- Complements Nexus (1233) / VPP (1448) rather than replacing depth-adaptive or chunked prefill mechanics.
- Single-machine / cluster assumptions may not match Broadside's multi-session radar load.

## Links

- arXiv: [2608.30830](https://arxiv.org/abs/2608.30830)
- PDF: https://arxiv.org/pdf/2608.30830
