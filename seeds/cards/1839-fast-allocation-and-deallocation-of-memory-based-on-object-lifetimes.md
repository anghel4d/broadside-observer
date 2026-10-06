---
title: "Fast Allocation and Deallocation of Memory Based on Object Lifetimes"
authors:
  - "David R. Hanson"
year: 1990
venue: "Software: Practice and Experience 20(1); Princeton CS-TR-191-88 (1988)"
arxiv: null
doi: "10.1002/spe.4380200104"
source: "https://www.cs.princeton.edu/techreports/1988/191.pdf"
topics:
  - arena-allocation
  - region-memory
  - memory-allocators
  - lifetimes
  - compilers
seed_rank: 1839
seed_batch: "archive-2026-10-06"
reviewed: "2026-10-06"
pool: "systems"
relevance_score: 10
lineage: memory-allocators
cites:
  - title: "An Efficient Algorithm for Heap Storage Allocation"
    url: "https://doi.org/10.1145/51607.51619"
    year: 1988
    arxiv: null
    doi: "10.1145/51607.51619"
  - title: "Garbage Collection of Linked Data Structures"
    url: "https://doi.org/10.1145/356850.356854"
    year: 1981
    arxiv: null
    doi: "10.1145/356850.356854"
  - title: "Garbage Collection Can Be Faster than Stack Allocation"
    url: "https://doi.org/10.1016/0020-0190(87)90175-X"
    year: 1987
    arxiv: null
    doi: "10.1016/0020-0190(87)90175-X"
---

# Fast Allocation and Deallocation of Memory Based on Object Lifetimes

## One-sentence takeaway

Group objects by lifetime instead of by size: each lifetime class bumps a pointer through a linked list of large arenas, and freeing the whole class is a pointer reset — nearly stack-allocation cost without stack-nesting restrictions.

## Why it matters here

This is the canonical arena/region allocator paper from lcc — the direct ancestor of per-frame, per-level and per-job arenas in Anoptic and of the "this column dies at the barrier" lifetime talk in ano. The library has the slab allocator (202), arena type systems (921), Gay–Aiken explicit regions (1138) and the custom-allocation debate (1652), but not the short C paper practitioners actually copy.

## Key ideas

- **Lifetime, not size.** Objects with lifetime t come from arena[t]; a few lifetime groups suffice — lcc uses two (permanent: globals/constants; transient: locals, trees and dags freed at the end of each function).
- **In-line bump allocation.** `p = arena[t]->avail; if ((arena[t]->avail += k) > arena[t]->limit) p = allocate(k, &arena[t]);` — the slow path advances to the next arena or calls morecore for a new one sized to the request plus a nominal MEMINCR×1024 bytes (10 in lcc).
- **O(1) bulk free.** `deallocate(t)` resets the list head to a zero-length sentinel first[t]; arenas stay linked and are reused by later allocations.
- **Improvements.** Return arenas to a shared free list on deallocation; extend the previous arena when morecore returns adjacent memory, eliminating end-of-arena waste.
- **Cost model (VAX instruction counts from lcc-generated code).** Stack allocation ≈5N/k instructions per byte; first fit ≈57N/k; quick fit ≥15N/k best case; arenas ≈8N/k — "almost half the cost of quick fit and less than twice the cost of stack allocation".

## Caveats

Instruction counts are 1988 VAX code from one compiler, not modern cycle measurements. Trades memory for speed: short-lived objects are often parked in a longer-lived group, and there is no per-object free or safety — dangling pointers into a reset arena are the programmer's problem (that is what Gay–Aiken 1138, Cyclone, and arena type systems 921 address). Single-threaded design; thread-local or per-job arenas are a later practice. The Princeton TR PDF is a scanned image (text read from page renders); the 1990 SP&E article is the published version.

## Links

- Princeton TR CS-TR-191-88 PDF: https://www.cs.princeton.edu/techreports/1988/191.pdf
- DOI (SP&E 1990): https://doi.org/10.1002/spe.4380200104
