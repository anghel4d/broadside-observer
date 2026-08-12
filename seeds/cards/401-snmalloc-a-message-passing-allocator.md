---
title: "snmalloc: A Message Passing Allocator"
authors:
  - "Paul Liétar et al."
year: 2019
venue: "ISMM"
arxiv: null
doi: "10.1145/3315573.3329980"
source: "https://doi.org/10.1145/3315573.3329980"
topics:
  - memory-allocation
seed_rank: 401
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "hpc"
relevance_score: 8
---

# snmalloc: A Message Passing Allocator

## One-sentence takeaway

snmalloc uses message passing for cross-thread deallocation and a modern size-class design.

## Why it matters here

Message-passing remote frees; relevant to wait-free-ish engine heaps.

## Key ideas

- snmalloc uses message passing for cross-thread deallocation and a modern size-class design.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- DOI: [10.1145/3315573.3329980](https://doi.org/10.1145/3315573.3329980)
- URL: https://doi.org/10.1145/3315573.3329980
