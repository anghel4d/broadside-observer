---
title: "Design of a General Purpose Memory Allocator for the 4.3BSD UNIX Kernel"
authors:
  - "Marshall Kirk McKusick"
  - "Michael J. Karels"
year: 1988
venue: "USENIX Summer 1988"
arxiv: null
doi: null
source: "https://docs-archive.freebsd.org/44doc/papers/kernmalloc.pdf"
topics:
  - memory-allocation
  - size-class
  - kernel
seed_rank: 436
seed_batch: "lineage-memory-allocators-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: memory-allocators
cites:
  - title: "Dynamic Storage Allocation: A Survey and Critical Review"
    url: "https://doi.org/10.1007/3-540-60368-9_19"
    year: 1995
    arxiv: null
    doi: "10.1007/3-540-60368-9_19"
  - title: "The Slab Allocator: An Object-Caching Kernel Memory Allocator"
    url: "https://www.usenix.org/legacy/publications/library/proceedings/bos94/full_papers/bonwick.ps"
    year: 1994
    arxiv: null
    doi: null
see:
  - "306-dynamic-storage-allocation-a-survey-and-critical-review"
  - "202-the-slab-allocator-an-object-caching-kernel-memory-allocator"
---

# Design of a General Purpose Memory Allocator for the 4.3BSD UNIX Kernel

## One-sentence takeaway

BSD kernel malloc hybridizes power-of-two freelists for small objects with first-fit pages for large ones — an early industrial size-class kernel heap.

## Why it matters here

Pre-Bonwick size-class kernel practice; shows why segregated free lists became the default mental model for OS and engine pools.

## Key ideas

- Power-of-two freelists for the common small-allocation path (~95% of kernel requests).
- Page-associated size metadata instead of per-object headers for small blocks.
- First-fit over a kernel address arena for large (multi-page) requests.
- Unifies many specialized kernel pools behind one malloc/free-shaped interface.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- PDF: https://docs-archive.freebsd.org/44doc/papers/kernmalloc.pdf
- URL: https://docs-archive.freebsd.org/44doc/papers/kernmalloc.pdf
