---
title: "Split-Ordered Lists: Lock-Free Extensible Hash Tables"
authors:
  - "Ori Shalev"
  - "Nir Shavit"
year: 2006
venue: "Journal of the ACM 53(3), 379–405 (preliminary version PODC 2003)"
arxiv: null
doi: "10.1145/1147954.1147958"
source: "https://people.csail.mit.edu/shanir/publications/Split-Ordered_Lists.pdf"
topics:
  - "lock-free"
  - "hash-tables"
  - "concurrent-data-structures"
  - "resizing"
seed_rank: 2486
seed_batch: "archive-2026-11-02"
reviewed: "2026-11-02"
pool: "systems"
lineage: concurrent-data-structures
relevance_score: 9
cites:
  - title: "Split-Ordered Lists: Lock-Free Extensible Hash Tables"
    url: "https://doi.org/10.1145/1147954.1147958"
    year: 2006
    arxiv: null
    doi: "10.1145/1147954.1147958"
see: ["238-an-efficient-wait-free-resizable-hash-table", "207-space-efficient-lock-free-linear-probing-hash-table", "420-hoffman-shalev-shavit-baskets-queue"]
---

# Split-Ordered Lists: Lock-Free Extensible Hash Tables

## One-sentence takeaway

Keep every item in one lock-free linked list sorted by the bit-reversed hash, and a resizable hash table becomes an array of shortcut pointers into that list, so doubling the table never moves an item: "move the buckets among the items, not the items among the buckets."

## Why it matters here

Anoptic's wait-free buses and ECS indices keep needing a concurrent map that can grow without a stop-the-world rehash. This is the classic answer with only load, store and CAS, and the trick (bit-reversed ordering so a bucket splits with a single CAS on a sentinel) is small enough to drop into C23. It also pairs with the open-addressing cards we already hold as the linked alternative when entries must stay at stable addresses.

## Key ideas

- Recursive split-ordering: order keys by the bit-reverse of their hash; then the items of bucket b at size 2^i are a contiguous run that splits cleanly into buckets b and b+2^i at size 2^(i+1).
- One sentinel ("dummy") node per bucket marks where its run starts; sentinels are never deleted, which keeps the reasoning simple.
- The bucket array starts at size 2 and doubles by bumping a counter; new buckets are uninitialized and are filled lazily, recursively initializing the parent bucket first.
- Insert, delete and find are expected O(1), built on a Michael-style lock-free ordered list.
- Measured on a large shared-memory multiprocessor: matches Lea's lock-based resizable table at normal load and clearly beats it under high load.

## Caveats

Read the abstract, sections 1–2 and the description of the algorithm; the correctness proofs were not checked. The table only grows; shrinking is left to later work. Memory reclamation of deleted nodes is assumed handled elsewhere (hazard pointers or similar), and pointer-chasing through a list costs cache misses that open addressing avoids.

## Links

- [PDF (author copy)](https://people.csail.mit.edu/shanir/publications/Split-Ordered_Lists.pdf)
- [DOI](https://doi.org/10.1145/1147954.1147958)
