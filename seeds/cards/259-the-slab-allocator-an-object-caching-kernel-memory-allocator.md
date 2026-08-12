---
title: "The Slab Allocator: An Object-Caching Kernel Memory Allocator"
authors:
  - "Jeff Bonwick"
year: 1994
venue: "USENIX Summer 1994"
arxiv: null
doi: null
source: "https://www.usenix.org/legacy/publications/library/proceedings/bos94/full_papers/bonwick.ps"
topics:
  - memory-allocation
  - slab
seed_rank: 259
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "hpc"
relevance_score: 10
---

# The Slab Allocator: An Object-Caching Kernel Memory Allocator

## One-sentence takeaway

Bonwick's slab allocator caches initialized objects by size class, reducing fragmentation and constructor cost in kernel heaps.

## Why it matters here

Canonical size-class object caching; mental model for engine pools and multipools.

## Key ideas

- Bonwick's slab allocator caches initialized objects by size class, reducing fragmentation and constructor cost in kernel heaps.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.
- Primary PDF/DOI not yet pinned; verify the canonical artifact before citation.

## Links

- URL: https://www.usenix.org/legacy/publications/library/proceedings/bos94/full_papers/bonwick.ps
