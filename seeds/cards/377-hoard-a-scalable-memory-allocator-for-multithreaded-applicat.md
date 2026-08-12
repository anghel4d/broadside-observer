---
title: "Hoard: A Scalable Memory Allocator for Multithreaded Applications"
authors:
  - "Emery D. Berger"
  - "Kathryn S. McKinley"
  - "Robert D. Blumofe"
  - "Paul R. Wilson"
year: 2000
venue: "ASPLOS"
arxiv: null
doi: "10.1145/378993.379232"
source: "https://doi.org/10.1145/378993.379232"
topics:
  - memory-allocation
  - multipool
seed_rank: 377
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "hpc"
relevance_score: 9
---

# Hoard: A Scalable Memory Allocator for Multithreaded Applications

## One-sentence takeaway

Hoard provides scalable concurrent allocation with per-processor heaps while bounding allocator-induced fragmentation.

## Why it matters here

Avoids heap blowup under threads; cautionary + design notes for Anoptic's mimalloc world.

## Key ideas

- Hoard provides scalable concurrent allocation with per-processor heaps while bounding allocator-induced fragmentation.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- DOI: [10.1145/378993.379232](https://doi.org/10.1145/378993.379232)
- URL: https://doi.org/10.1145/378993.379232
