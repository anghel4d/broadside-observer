---
title: "TLSF: A New Dynamic Memory Allocator for Real-Time Systems"
authors:
  - "Miguel Masmano"
  - "Ismael Ripoll"
  - "Alfons Crespo"
  - "Jorge Real"
year: 2004
venue: "ECRTS"
arxiv: null
doi: "10.1109/ECRTS.2004.35"
source: "https://doi.org/10.1109/ECRTS.2004.35"
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

# TLSF: A New Dynamic Memory Allocator for Real-Time Systems

## One-sentence takeaway

Two-Level Segregated Fit gives malloc/free with bounded Θ(1) time by indexing free lists with a two-level bitmap and immediately coalescing.

## Why it matters here

Anoptic sim ticks and GRID COMMAND agent spawns cannot stall on a first-fit walk of a free list. TLSF is the real-time allocator you reach for when a frame budget is hard and you still need general-purpose sizes instead of pure arenas.

## Key ideas

- First-level index is a power-of-two size class; second-level splits each class into a fixed number of ranges, addressed by a bitmap so the good-fit list is a couple of bit-scan operations.
- Immediate coalescing on free keeps fragmentation in check without a periodic sweep.
- Designed for network processors and multiprocessors where worst-case allocation latency matters more than average throughput.
- The historical project page is http://www.gii.upv.es/tlsf/; the archival paper is ECRTS 2004 (doi:10.1109/ECRTS.2004.35).

## Caveats

## Links

- DOI: https://doi.org/10.1109/ECRTS.2004.35
- Project page: http://www.gii.upv.es/tlsf/
