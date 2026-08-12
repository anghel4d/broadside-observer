---
title: "FreSh: A Lock-Free Data Series Index"
authors:
  - "Panagiota Fatourou"
  - "Eleftherios Kosmas"
  - "Themis Palpanas"
  - "George Paterakis"
year: 2023
venue: "arXiv:cs.DB"
arxiv: "2310.11602"
doi: null
source: "https://arxiv.org/abs/2310.11602"
topics:
  - lockfree
seed_rank: 293
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "hpc"
relevance_score: 9
---

# FreSh: A Lock-Free Data Series Index

## One-sentence takeaway

We present FreSh, a lock-free data series index that exhibits good performance (while being robust).

## Why it matters here

Systems/HPC craft relevant to Anoptic concurrency, allocators, and parallel jobbing (FreSh: A Lock-Free Data Series Index).

## Key ideas

- We present FreSh, a lock-free data series index that exhibits good performance (while being robust).
- FreSh is based on Refresh, which is a generic approach we have developed for supporting lock-freedom in an efficient way on top of any localityaware data series index.
- We believe Refresh is of independent interest and can be used to get well-performed lock-free versions of other locality-aware blocking data structures.
- For developing FreSh, we first studied in depth the design decisions of current state-of-the-art data series indexes, and the principles governing their performance.
- This led to a theoretical framework, which enables the development and analysis of data series indexes in a modular way.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2310.11602](https://arxiv.org/abs/2310.11602)
- URL: https://arxiv.org/abs/2310.11602
