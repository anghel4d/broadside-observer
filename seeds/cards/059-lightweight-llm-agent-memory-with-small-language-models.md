---
title: "Lightweight LLM Agent Memory with Small Language Models"
authors:
  - "Jiaquan Zhang"
  - "Chaoning Zhang"
  - "Shuxu Chen"
  - "Zhenzhen Huang"
  - "Pengcheng Zheng"
  - "Zhicheng Wang"
  - "Ping Guo"
  - "Fan Mo"
  - "Sung-Ho Bae"
  - "Jie Zou"
  - "Jiwei Wei"
  - "Yang Yang"
year: 2026
venue: "ACL"
arxiv: "2604.07798"
doi: null
source: "https://arxiv.org/abs/2604.07798"
topics:
  - rag
  - retrieval
  - provenance
  - agent-memory
seed_rank: 59
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
cites:
  - title: "A-MEM: Agentic Memory for LLM Agents"
    url: "https://arxiv.org/abs/2502.12110"
    year: 2025
    arxiv: "2502.12110"
    doi: null
  - title: "MemGPT: Towards LLMs as Operating Systems"
    url: "https://arxiv.org/abs/2310.08560"
    year: 2023
    arxiv: "2310.08560"
    doi: null
see:
  - "069-a-mem-agentic-memory-for-llm-agents"
  - "004-memgpt-towards-llms-as-operating-systems"
---

# Lightweight LLM Agent Memory with Small Language Models

## One-sentence takeaway

LightMem runs retrieval, writing, and long-term consolidation on small language models, with online work under a fixed budget and consolidation moved offline.

## Why it matters here

Ano cannot spend a frontier-model call on every memory write during a long GRID COMMAND or Broadside session; LightMem is STM/MTM/LTM paging driven by SLMs with 83 ms median retrieval.

## Key ideas

- Pure vector memory is cheap online but unstable because query construction and candidate filtering are weak; large-model online memory is accurate but latency compounds.
- Memory is split into STM (immediate conversational context), MTM (reusable interaction summaries), and LTM (consolidated knowledge), keyed by user id for multi-user isolation.
- Online selection is two-stage: vector coarse retrieval, then semantic-consistency re-ranking under a fixed retrieval budget.
- Offline, reusable interaction evidence is abstracted and incrementally merged into LTM.
- On LoCoMo, LightMem gains about 2.5 F1 over A-MEM across model scales, with 83 ms median retrieval and 581 ms end-to-end.

## Caveats

## Links

- arXiv: [2604.07798](https://arxiv.org/abs/2604.07798)
- PDF: https://arxiv.org/pdf/2604.07798
- ACL 2026 (main)
