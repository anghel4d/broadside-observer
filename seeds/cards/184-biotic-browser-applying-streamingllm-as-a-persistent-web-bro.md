---
title: "Biotic Browser: Applying StreamingLLM as a Persistent Web Browsing Co-Pilot"
authors:
  - "Kevin F. Dunnell"
  - "Andrew P. Stoddard"
year: 2024
venue: "arXiv:cs.HC"
arxiv: "2411.10454"
doi: null
source: "https://arxiv.org/abs/2411.10454"
topics:
  - rag
  - retrieval
seed_rank: 184
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 8
cites:
  - title: "Efficient Memory Management for Large Language Model Serving with PagedAttention"
    url: "https://arxiv.org/abs/2309.06180"
    year: 2023
    arxiv: "2309.06180"
    doi: null
  - title: "A Survey on Long-Term Memory Security in LLM Agents: Attacks, Defenses, and Governance Across the Memory Lifecycle"
    url: "https://arxiv.org/abs/2604.16548"
    year: 2026
    arxiv: "2604.16548"
    doi: null
  - title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks"
    url: "https://arxiv.org/abs/2005.11401"
    year: 2020
    arxiv: "2005.11401"
    doi: null
see:
  - "002-efficient-memory-management-for-large-language-model-serving"
  - "008-retrieval-augmented-generation-for-knowledge-intensive-nlp-t"
---

# Biotic Browser: Applying StreamingLLM as a Persistent Web Browsing Co-Pilot

## One-sentence takeaway

Biotic Browser is a StreamingLLM web copilot that keeps a long-running browsing session in an attention-sink-style context so multi-step web tasks can continue without a hard context reset.

## Why it matters here

A Broadside observer that lives in a browser tab has this exact problem: the session is longer than the window. StreamingLLM-style persistent context is the cheap mechanism; the paper is an HCI sketch of that copilot, not a new retrieval index.

## Key ideas

- The interaction metaphor is a passenger in an autonomous vehicle: the user supervises a persistent browsing agent rather than issuing one-shot queries.
- StreamingLLM is used so the attention context can roll forward across extended, multi-step web tasks.
- Long-term context management, not a new planner, is presented as the technical contribution.
- The work is positioned for personal and professional productivity rather than as a SWE-bench-style agent.
- The abstract is short; treat the paper as a system sketch around StreamingLLM, not as a large controlled eval.

## Caveats

## Links

- arXiv: [2411.10454](https://arxiv.org/abs/2411.10454)
