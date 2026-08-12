---
title: "TRUSTMEM: Learning Trustworthy Memory Consolidation for LLM Agents with Long-Term Memory"
authors:
  - "Tianyu Yang"
  - "Sudipta Paul"
  - "Vijay Srinivasan"
  - "Vivek Kulkarni"
  - "Srinivas Chappidi"
year: 2026
venue: "arXiv:cs.AI"
arxiv: "2606.25161"
doi: null
source: "https://arxiv.org/abs/2606.25161"
topics:
  - rag
  - retrieval
  - provenance
  - agent-memory
  - agent-eval
  - harness
seed_rank: 77
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
---

# TRUSTMEM: Learning Trustworthy Memory Consolidation for LLM Agents with Long-Term Memory

## One-sentence takeaway

Large language model (LLM) agents rely on long-term memory to support extended interactions and personalized assistance beyond finite context windows.

## Why it matters here

memory hierarchy/paging maps to provenance-first agent memory and ECS state; retrieval+evidence trails matter for Broadside provenance-rich digests (TRUSTMEM: Learning Trustworthy Memory Consolidation for LLM Agents with Long-Term Memory)

## Key ideas

- Large language model (LLM) agents rely on long-term memory to support extended interactions and personalized assistance beyond finite context windows.
- Existing memory agents actively update external memory through generated write, revise, and delete operations, but these updates may omit important information, corrupt existing memory, or introduce unsupported hallucinated content.
- Once stored, such errors become persistent system-state failures that can affect future reasoning and generation.
- In this paper, we propose TrustMem, a framework designed to improve the trustworthiness of memory consolidation.
- TrustMem relies on a Memory Transition Verifier to evaluate the transition process of memory updates in terms of coverage, preservation, and faithfulness.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2606.25161](https://arxiv.org/abs/2606.25161)
- URL: https://arxiv.org/abs/2606.25161
