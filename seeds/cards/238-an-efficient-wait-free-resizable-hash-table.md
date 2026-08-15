---
title: An Efficient Wait-free Resizable Hash Table
authors:
- Panagiota Fatourou
- Nikolaos D. Kallimanis
- Thomas Ropars
year: 2018
venue: SPAA 2018
arxiv: '2204.09624'
doi: 10.1145/3210377.3210408
source: https://arxiv.org/abs/2204.09624
topics:
- lockfree
seed_rank: 238
seed_batch: systems-prefill-2026-08-13
reviewed: '2026-08-13'
pool: systems
relevance_score: 9
lineage: open-addressing
cites:
- title: 'Linearizability: A Correctness Condition for Concurrent Objects'
  url: https://doi.org/10.1145/78969.78972
  year: 1990
  arxiv: null
  doi: 10.1145/78969.78972
see:
- "203-linearizability-a-correctness-condition-for-concurrent-objec"
---

# An Efficient Wait-free Resizable Hash Table

## One-sentence takeaway

A wait-free resizable hash table keeps the natural parallelism of concurrent hashing and, when resizes are rare, outperforms existing lock-free tables while offering a stronger progress guarantee.

## Why it matters here

Anoptic entity maps grow with the match; wait-free resize means a rehash cannot pin a reader, which is the contract a lock-free open-addressing table still owes you.

## Key ideas

- Design goal: do not serialize the common-case insert/lookup path just to make resize wait-free.
- Wait-free resize is the hard part; the table is built so that operation-level hashing stays naturally parallel.
- When growth events are infrequent — the usual case — measured throughput beats lock-free competitors.
- Progress is wait-free, not merely lock-free.
- Originally SPAA 2018 (doi 10.1145/3210377.3210408); 2022 arXiv is the author preprint. Year in the card is the conference year.

## Caveats

## Links

- arXiv: [2204.09624](https://arxiv.org/abs/2204.09624)
- DOI: [10.1145/3210377.3210408](https://doi.org/10.1145/3210377.3210408)
- PDF: https://arxiv.org/pdf/2204.09624
