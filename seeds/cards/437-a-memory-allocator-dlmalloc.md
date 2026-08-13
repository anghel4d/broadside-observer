---
title: "A Memory Allocator (dlmalloc)"
authors:
  - "Doug Lea"
year: 2000
venue: "Personal / public-domain notes (unix/mail lineage)"
arxiv: null
doi: null
source: "https://gee.cs.oswego.edu/dl/html/malloc.html"
topics:
  - memory-allocation
  - size-class
  - segregated-fit
seed_rank: 437
seed_batch: "lineage-memory-allocators-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 10
lineage: memory-allocators
cites:
  - title: "Dynamic Storage Allocation: A Survey and Critical Review"
    url: "https://doi.org/10.1007/3-540-60368-9_19"
    year: 1995
    arxiv: null
    doi: "10.1007/3-540-60368-9_19"
  - title: "Reconsidering Custom Memory Allocation"
    url: "https://doi.org/10.1145/582419.582421"
    year: 2002
    arxiv: null
    doi: "10.1145/582419.582421"
  - title: "Hoard: A Scalable Memory Allocator for Multithreaded Applications"
    url: "https://doi.org/10.1145/378993.379232"
    year: 2000
    arxiv: null
    doi: "10.1145/378993.379232"
see:
  - "306-dynamic-storage-allocation-a-survey-and-critical-review"
  - "439-reconsidering-custom-memory-allocation"
  - "301-hoard-a-scalable-memory-allocator-for-multithreaded-applicat"
---

# A Memory Allocator (dlmalloc)

## One-sentence takeaway

dlmalloc is the classic best-fit / segregated-bin userspace allocator that became the baseline for glibc ptmalloc and most industrial size-class heaps.

## Why it matters here

Still the reference uniprocessor size-class design; jemalloc/tcmalloc/mimalloc are judged against Lea-shaped fragmentation and binning instincts.

## Key ideas

- Size-segregated bins (smallbins + treebins) with best-fit preference.
- Boundary tags and coalescing to control external fragmentation.
- mmap path for large requests to avoid trapping small survivors.
- Public-domain single-file engineering artifact widely forked (ptmalloc, etc.).

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- HTML: https://gee.cs.oswego.edu/dl/html/malloc.html
- URL: https://gee.cs.oswego.edu/dl/html/malloc.html
