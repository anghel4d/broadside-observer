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
seed_rank: 101
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
---

# Self-RAG: Learning to Retrieve, Generate, and Critique through Self-Reflection

## One-sentence takeaway

Despite their remarkable capabilities, large language models (LLMs) often produce responses containing factual inaccuracies due to their sole reliance on the parametric knowledge they encapsulate.

## Why it matters here

retrieval+evidence trails matter for Broadside provenance-rich digests (Self-RAG: Learning to Retrieve, Generate, and Critique through Self-Reflection)

## Key ideas

- Despite their remarkable capabilities, large language models (LLMs) often produce responses containing factual inaccuracies due to their sole reliance on the parametric knowledge they encapsulate.
- Retrieval-Augmented Generation (RAG), an ad hoc approach that augments LMs with retrieval of relevant knowledge, decreases such issues.
- However, indiscriminately retrieving and incorporating a fixed number of retrieved passages, regardless of whether retrieval is necessary, or passages are relevant, diminishes LM versatility or can lead to unhelpful response generation.
- We introduce a new framework called Self-Reflective Retrieval-Augmented Generation (Self-RAG) that enhances an LM's quality and factuality through retrieval and self-reflection.
- Our framework trains a single arbitrary LM that adap

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2310.11511](https://arxiv.org/abs/2310.11511)
- URL: https://arxiv.org/abs/2310.11511
