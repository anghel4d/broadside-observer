---
title: "VPP: Virtual Pipeline Parallelism for Efficient Chunked Prefill in Long-Context LLM Inference"
authors:
  - "Yan Shi"
  - "Xiaochao Wang"
  - "Jingchun Gao"
  - "Jintao Luo"
  - "Xinyi Zhou"
  - "Feng Liu"
  - "Kui Luo"
  - "Xushi Li"
  - "Xinjie Guo"
  - "Liangjun Feng"
year: 2026
venue: "arXiv:cs.DC"
arxiv: "2608.26523"
doi: null
source: "https://arxiv.org/abs/2608.26523"
topics:
  - "agentic-llm-serving"
  - "agent-tokenization-and-caching"
seed_rank: 1448
seed_batch: "frontier-2026-08-28"
reviewed: "2026-08-28"
pool: "agents"
relevance_score: 10
lineage: agentic-llm-serving
cites:
  - title: "Sarathi: Efficient LLM Inference by Piggybacking Decodes with Chunked Prefills"
    url: "https://arxiv.org/abs/2308.16369"
    year: 2023
    arxiv: "2308.16369"
    doi: null
  - title: "DistServe: Disaggregating Prefill and Decoding for Goodput-optimized Large Language Model Serving"
    url: "https://arxiv.org/abs/2401.09670"
    year: 2024
    arxiv: "2401.09670"
    doi: null
see:
  - "082-sarathi-efficient-llm-inference-by-piggybacking-decodes-with"
  - "188-distserve-disaggregating-prefill-and-decoding-for-goodput-op"
  - "077-loongserve-efficiently-serving-long-context-large-language-m"
  - "1077-learning-agent-execution-for-kv-cache-management-in-agentic-serving"
  - "1232-benchmarking-llm-serving-systems-for-agentic-ai-workloads-with"
---

# VPP: Virtual Pipeline Parallelism for Efficient Chunked Prefill in Long-Context LLM Inference

## One-sentence takeaway

Equal-size chunked prefill pipelines bubble on long prefixes; VPP keeps chunks fixed and rebalances with a V-shaped virtual-stage layout instead of dynamic resizing.

## Problem

Chunked prefill pipeline parallelism (Sarathi 082 lineage) is how long-context agent sessions get served, but later chunks attend longer prefix KV and stall the pipeline. Dynamic chunk resizing (DCPP) trades scheduling overhead for balance and loses on long sequences — exactly Broadside's append-heavy agent traces. DistServe (188) and LoongServe (077) split or elastically scale stages; they do not fix equal-chunk bubble geometry inside a prefill pipeline.

## Design

- **Virtual Pipeline Parallelism (VPP):** keep chunk sizes fixed; introduce virtual stages whose V-shaped traversal overlaps each chunk's expensive middle stages with neighbors' lighter head/tail stages.
- Asynchronous communication and pipelined packing cut communication stalls and cross-request drain bubbles.
- Aimed at long-context inference where DCPP's resize overhead dominates.
- Implemented in a production-style inference stack (paper reports end-to-end serving numbers vs CPP/DCPP).

## Evidence

Measurements comparing CPP, DCPP, and VPP on long sequences: VPP claims lower bubble time without DCPP's resize tax. Systems paper — trust the microbench geometry more than any single MMLU delta.

## Limitations

- Virtual stages add scheduling complexity; map carefully onto vLLM/SGLang chunked-prefill paths before claiming a Broadside win.
- Does not address agent-level KV retention vs rollback (1078) or prefix-affinity routing (1143) — orthogonal layers.
- Training-time prefix sharing (psRL 2608.25683, same window) is a sibling problem, not solved here.

## Implications for Broadside

Agentic serving for Broadside's long sessions should prefer fixed-chunk V-layouts over resize-heavy DCPP once traces get long. Stack under Sarathi-style chunked prefill (082) and above DistServe-style disaggregation (188). Pair with 1077's agent-execution-aware KV management when the session is tool-heavy.

## Links

- arXiv: [2608.26523](https://arxiv.org/abs/2608.26523)
- PDF: https://arxiv.org/pdf/2608.26523
