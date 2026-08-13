---
title: "Beyond malloc efficiency to fleet efficiency: a hugepage-aware memory allocator (Temeraire)"
authors:
  - "A.H. Hunter"
  - "Chris Kennelly"
  - "Paul Turner"
  - "Darryl Gove"
  - "Tipp Moseley"
  - "Parthasarathy Ranganathan"
year: 2021
venue: "OSDI"
arxiv: null
doi: null
source: "https://www.usenix.org/conference/osdi21/presentation/hunter"
topics:
  - memory-allocation
  - tcmalloc
  - hugepages
seed_rank: 591
seed_batch: "lineage-memory-allocators-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: memory-allocators
cites:
  - title: "TCMalloc: Thread-Caching Malloc"
    url: "https://gperftools.github.io/gperftools/tcmalloc.html"
    year: 2007
    arxiv: null
    doi: null
  - title: "A Scalable Concurrent malloc(3) Implementation for FreeBSD (jemalloc)"
    url: "http://people.freebsd.org/~jasone/jemalloc/bsdcan2006/jemalloc.pdf"
    year: 2006
    arxiv: null
    doi: null
  - title: "mimalloc: Free List Sharding in Action"
    url: "https://arxiv.org/abs/1908.05006"
    year: 2019
    arxiv: "1908.05006"
    doi: null
see:
  - "587-tcmalloc-thread-caching-malloc"
  - "364-a-scalable-concurrent-malloc-3-implementation-for-freebsd-je"
  - "012-mimalloc-free-list-sharding-in-action"
---

# Beyond malloc efficiency to fleet efficiency: a hugepage-aware memory allocator (Temeraire)

## One-sentence takeaway

Temeraire reshapes TCMalloc’s backend around hugepage packing so fleet CPU/RAM efficiency beats shaving cycles inside malloc alone.

## Why it matters here

Modern size-class heap concern: placement and hugepage coverage matter as much as freelist speed — relevant to long-running Anoptic/server processes.

## Key ideas

- Hugepage-aware pageheap that fills and empties 2MiB pages deliberately.
- Trades some allocator CPU for fewer TLB misses and less fragmented RAM.
- Fleet-scale evaluation: RPS up, TLB stalls and fragmentation down.
- Continues TCMalloc’s size-class frontend with a new backend policy.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- USENIX: https://www.usenix.org/conference/osdi21/presentation/hunter
- PDF: https://www.usenix.org/system/files/osdi21-hunter.pdf
- Design notes: https://google.github.io/tcmalloc/temeraire.html
- URL: https://www.usenix.org/system/files/osdi21-hunter.pdf
