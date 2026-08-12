---
title: "A Scalable Concurrent malloc(3) Implementation for FreeBSD (jemalloc)"
authors:
  - "Jason Evans"
year: 2006
venue: "BSDCan"
arxiv: null
doi: null
source: "http://people.freebsd.org/~jasone/jemalloc/bsdcan2006/jemalloc.pdf"
topics:
  - memory-allocation
  - jemalloc
seed_rank: 364
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "hpc"
relevance_score: 9
---

# A Scalable Concurrent malloc(3) Implementation for FreeBSD (jemalloc)

## One-sentence takeaway

jemalloc introduces multiple arenas and careful size-class layout for scalable concurrent malloc on FreeBSD and beyond.

## Why it matters here

Arena-of-arenas design; still the mental model for many runtime heaps.

## Key ideas

- jemalloc introduces multiple arenas and careful size-class layout for scalable concurrent malloc on FreeBSD and beyond.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.
- Primary PDF/DOI not yet pinned; verify the canonical artifact before citation.

## Links

- URL: http://people.freebsd.org/~jasone/jemalloc/bsdcan2006/jemalloc.pdf
