---
title: "Wait-Free Updates and Range Search using Uruv"
authors:
  - "Gaurav Bhardwaj"
  - "Abhay Jain"
  - "Bapi Chatterjee"
  - "Sathya Peri"
year: 2023
venue: "arXiv:cs.DC"
arxiv: "2307.14744"
doi: null
source: "https://arxiv.org/abs/2307.14744"
topics:
  - lockfree
seed_rank: 302
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
---

# Wait-Free Updates and Range Search using Uruv

## One-sentence takeaway

CRUD operations, along with range queries make a highly useful abstract data type (ADT), employed by many dynamic analytics tasks.

## Why it matters here

Systems/HPC craft relevant to Anoptic concurrency, allocators, and parallel jobbing (Wait-Free Updates and Range Search using Uruv).

## Key ideas

- CRUD operations, along with range queries make a highly useful abstract data type (ADT), employed by many dynamic analytics tasks.
- Despite its wide applications, to our knowledge, no fully wait-free data structure is known to support this ADT.
- In this paper, we introduce Uruv, a proactive linearizable and practical wait-free concurrent data structure that implements the ADT mentioned above.
- Structurally, Uruv installs a balanced search index on the nodes of a linked list.
- Uruv is the first wait-free and proactive solution for concurrent B+tree.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2307.14744](https://arxiv.org/abs/2307.14744)
- URL: https://arxiv.org/abs/2307.14744
