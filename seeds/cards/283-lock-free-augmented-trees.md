---
title: "Lock-Free Augmented Trees"
authors:
  - "Panagiota Fatourou"
  - "Eric Ruppert"
year: 2024
venue: "arXiv:cs.DS"
arxiv: "2405.10506"
doi: null
source: "https://arxiv.org/abs/2405.10506"
topics:
  - lockfree
seed_rank: 283
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
---

# Lock-Free Augmented Trees

## One-sentence takeaway

Augmenting an existing sequential data structure with extra information to support greater functionality is a widely used technique.

## Why it matters here

Systems/HPC craft relevant to Anoptic concurrency, allocators, and parallel jobbing (Lock-Free Augmented Trees).

## Key ideas

- Augmenting an existing sequential data structure with extra information to support greater functionality is a widely used technique.
- For example, search trees are augmented to build sequential data structures like order-statistic trees, interval trees, tango trees, link/cut trees and many others.
- We study how to design concurrent augmented tree data structures.
- We present a new, general technique that can augment a lock-free tree to add any new fields to each tree node, provided the new fields' values can be computed from information in the node and its children.
- This enables the design of lock-free, linearizable analogues of a wide variety of classical augmented data structures.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2405.10506](https://arxiv.org/abs/2405.10506)
- URL: https://arxiv.org/abs/2405.10506
