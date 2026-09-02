---
title: "Agent Zero Memory: Provenance-Aware Long-Term Memory for LLM Agents"
authors:
  - "Ming Wu"
  - "Pengyuan Zhu"
year: 2026
venue: "arXiv:cs.CL"
arxiv: "2608.29606"
doi: null
source: "https://arxiv.org/abs/2608.29606"
topics:
  - "provenance-first-agent-memory"
  - "agentic-llm-serving"
seed_rank: 1541
seed_batch: "frontier-2026-09-02"
reviewed: "2026-09-02"
pool: "agents"
relevance_score: 10
lineage: agent-memory-provenance
cites:
  - title: "MemGPT: Towards LLMs as Operating Systems"
    url: "https://arxiv.org/abs/2310.08560"
    year: 2023
    arxiv: "2310.08560"
    doi: null
  - title: "A-MEM: Agentic Memory for LLM Agents"
    url: "https://arxiv.org/abs/2502.12110"
    year: 2025
    arxiv: "2502.12110"
    doi: null
  - title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks"
    url: "https://arxiv.org/abs/2005.11401"
    year: 2020
    arxiv: "2005.11401"
    doi: null
see:
  - "004-memgpt-towards-llms-as-operating-systems"
  - "069-a-mem-agentic-memory-for-llm-agents"
  - "008-retrieval-augmented-generation-for-knowledge-intensive-nlp-t"
  - "1233-nexus-depth-adaptive-kv-cache-splicing-and-retrieval-decoupled"
---
# Agent Zero Memory: Provenance-Aware Long-Term Memory for LLM Agents

## One-sentence takeaway

Agent Zero Memory keeps provenance-aware long-term memory as three parallel systems — not one forced fact-store, vector index, or knowledge graph — so each structure's blind spots stay covered.

## Why it matters here

Broadside's provenance-first memory rule forbids collapsing everything into one RAG index. Agent Zero Memory is the in-window system that distils conversations, files, and connected sources into three parallel memories with provenance preserved — the right default architecture for radar digests and GRID COMMAND session memory.

## Key ideas

- Most agent memories commit to one organizing structure and inherit its blind spots.
- Distils user conversations, files, and connected sources into three parallel memory systems, each carrying what the others miss.
- Provenance-aware: durable, faithful recall of what was said and stored, with source traces.
- Long-term agent memory, not just session scratch.

## Caveats

- Three parallel stores raise consistency and invalidation cost (pair with Invalidation Contracts leftover 2609.00243).
- Distillation step can still hallucinate facts if provenance is weak — keep authoritative sources above summaries.
- Map onto Broadside's seed/card/seen substrate rather than inventing a fourth store.

## Links

- arXiv: [2608.29606](https://arxiv.org/abs/2608.29606)
- PDF: https://arxiv.org/pdf/2608.29606
