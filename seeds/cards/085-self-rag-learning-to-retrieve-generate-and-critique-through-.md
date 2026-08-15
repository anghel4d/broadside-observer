---
title: "Self-RAG: Learning to Retrieve, Generate, and Critique through Self-Reflection"
authors:
  - "Akari Asai"
  - "Zeqiu Wu"
  - "Yizhong Wang"
  - "Avirup Sil"
  - "Hannaneh Hajishirzi"
year: 2023
venue: "arXiv:cs.CL"
arxiv: "2310.11511"
doi: null
source: "https://arxiv.org/abs/2310.11511"
topics:
  - rag
  - retrieval
  - provenance
seed_rank: 85
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
cites:
  - title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks"
    url: "https://arxiv.org/abs/2005.11401"
    year: 2020
    arxiv: "2005.11401"
    doi: null
see:
  - "008-retrieval-augmented-generation-for-knowledge-intensive-nlp-t"
---

# Self-RAG: Learning to Retrieve, Generate, and Critique through Self-Reflection

## One-sentence takeaway

Self-RAG trains one LM to emit reflection tokens that decide whether to retrieve, whether a passage is relevant, and whether its own generation is supported.

## Why it matters here

Broadside provenance digests need citations that the model itself critiques; Self-RAG is on-demand retrieval plus self-critique rather than always-on top-k RAG.

## Key ideas

- Always retrieving a fixed number of passages hurts tasks that do not need retrieval and can inject irrelevant context.
- Reflection tokens make the same LM controllable at inference: retrieve on demand, then critique passages and its own text.
- 7B and 13B Self-RAG models beat then-SOTA LLMs and retrieval-augmented Llama2-chat on open-domain QA, reasoning, and fact verification.
- Long-form generations improve in factuality and citation accuracy versus ChatGPT and RAG Llama2-chat.
- The framework applies to an arbitrary base LM rather than a custom retriever–generator pair.

## Caveats

## Links

- arXiv: [2310.11511](https://arxiv.org/abs/2310.11511)
- PDF: https://arxiv.org/pdf/2310.11511
