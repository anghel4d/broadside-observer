---
title: "An Efficient Memory Allocator for Network Processors and Multiprocessors (TLSF)"
authors:
  - "M. Masmano"
  - "I. Ripoll"
  - "A. Crespo"
  - "J. Real"
year: 2004
venue: "Real-Time Systems / ECRTS lineage"
arxiv: null
doi: null
source: "http://www.gii.upv.es/tlsf/"
topics:
  - memory-allocation
  - realtime
seed_rank: 361
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "realtime"
relevance_score: 8
lineage: memory-allocators
cites:
  - title: "Dynamic Storage Allocation: A Survey and Critical Review"
    url: "https://doi.org/10.1007/3-540-60368-9_19"
    year: 1995
    arxiv: null
    doi: "10.1007/3-540-60368-9_19"
  - title: "A Memory Allocator (dlmalloc)"
    url: "https://gee.cs.oswego.edu/dl/html/malloc.html"
    year: 2000
    arxiv: null
    doi: null
  - title: "The Slab Allocator: An Object-Caching Kernel Memory Allocator"
    url: "https://www.usenix.org/legacy/publications/library/proceedings/bos94/full_papers/bonwick.ps"
    year: 1994
    arxiv: null
    doi: null
see:
  - "306-dynamic-storage-allocation-a-survey-and-critical-review"
  - "437-a-memory-allocator-dlmalloc"
  - "202-the-slab-allocator-an-object-caching-kernel-memory-allocator"
---

# An Efficient Memory Allocator for Network Processors and Multiprocessors (TLSF)

## One-sentence takeaway

TLSF (Two-Level Segregated Fit) provides bounded-time malloc/free suitable for real-time systems.

## Why it matters here

O(1) real-time allocator — relevant when sim ticks have hard budgets.

## Key ideas

- TLSF (Two-Level Segregated Fit) provides bounded-time malloc/free suitable for real-time systems.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.
- Primary PDF/DOI not yet pinned; verify the canonical artifact before citation.

## Links

- URL: http://www.gii.upv.es/tlsf/
