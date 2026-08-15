---
title: "Rethinking How to Remember: Beyond Atomic Facts in Lifelong LLM Agent Memory"
authors:
  - "Jingwei Sun"
  - "Jianing Zhu"
  - "Jiangchao Yao"
  - "Tongliang Liu"
  - "Bo Han"
year: 2026
venue: "arXiv:cs.CL"
arxiv: "2605.19952"
doi: null
source: "https://arxiv.org/abs/2605.19952"
topics:
  - rag
  - retrieval
  - provenance
  - agent-memory
  - skills
  - continual-agents
seed_rank: 64
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

# Rethinking How to Remember: Beyond Atomic Facts in Lifelong LLM Agent Memory

## One-sentence takeaway

TriMem keeps three coexisting memory granularities — source-anchored raw dialogue, atomic facts, and synthesized profiles — and evolves extraction prompts with TextGrad instead of weight updates.

## Why it matters here

Fact-only memory in a long-running Broadside observer throws away the provenance trail the digest stack is built on; TriMem keeps the raw source next to the extracted fact.

## Key ideas

- Static-prompt fact extraction discards fine-grained dialogue detail, cannot reason over scattered isolated facts, and cannot hold extraction granularity across dialogue styles.
- Raw segments are stored with source identifiers for fidelity; atomic facts support cheap retrieval; profiles aggregate dispersed facts for deeper reasoning.
- TextGrad iteratively rewrites extraction and profiling prompts from response-quality feedback, so the memory policy evolves without parameter updates.
- On LoCoMo and PerLTQA across multiple LLM backbones, TriMem beats strong memory baselines.
- Code: https://TMLR-TriMem.github.io.

## Caveats

## Links

- arXiv: [2605.19952](https://arxiv.org/abs/2605.19952)
- PDF: https://arxiv.org/pdf/2605.19952
- Project: https://TMLR-TriMem.github.io
