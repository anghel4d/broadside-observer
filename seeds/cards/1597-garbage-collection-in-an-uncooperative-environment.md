---
title: "Garbage Collection in an Uncooperative Environment"
authors:
  - "Hans-Juergen Boehm"
  - "Mark Weiser"
year: 1988
venue: "Software: Practice and Experience 18(9)"
arxiv: null
doi: "10.1002/spe.4380180902"
source: "https://people.cs.umass.edu/~emery/classes/cmpsci691st/readings/PL/GC-Uncooperative.pdf"
topics:
  - garbage-collection
  - conservative-gc
  - allocators
seed_rank: 1597
seed_batch: "archive-2026-09-06"
reviewed: "2026-09-06"
pool: "languages"
relevance_score: 10
lineage: memory-allocators
cites:
  - title: "A Real-Time Garbage Collector Based on the Lifetimes of Objects"
    url: "https://doi.org/10.1145/358141.358147"
    year: 1983
    arxiv: null
    doi: "10.1145/358141.358147"
see:
  - "011-mimalloc-free-list-sharding-in-action"
  - "361-an-efficient-memory-allocator-for-network-processors-and-mul"
  - "030-region-based-memory-management"
---

# Garbage Collection in an Uncooperative Environment

## One-sentence takeaway

Conservative mark–sweep GC treats every register/stack/static word as a potential pointer, needs no tags or compiler cooperation, and thus can reclaim heap for ordinary C/Pascal object code — at the cost of occasional false pointers and stop-the-world pauses.

## Why it matters here

Anoptic and ano sit on C/Vulkan heaps where a full moving collector is off the table, but a Boehm-style conservative collector (or the debugging mode of one) is still the escape hatch when you want GC without rewriting the ABI. Regions (030) and real-time allocators (361 / mimalloc 011) are the production path; this 1988 SPE paper is the durable boundary that made “GC for uncooperative C” a real option and the ancestor of libgc / BDW.

## Key ideas

- **No tags, no move.** Mark–sweep over allocator-managed blocks; accessible objects never relocate. Given a machine word, the allocator answers “is this a live object I own?” — if yes, treat it as a pointer.
- **Roots = ambient machine state.** Registers, stacks, and static data are scanned as potential roots. Compilers need not preserve GC invariants; student compilers and large unmodified C programs were the motivating clients (Russell, class projects, two large C apps).
- **Pay only when you collect.** Bookkeeping is minimized so Pascal-like code that rarely allocates still runs near untagged speed; collection cost appears only when the collector runs.
- **False pointers.** Integers that look like heap addresses pin garbage (and can pin whole subgraphs). Authors argue this is usually negligible in practice; not for hard real-time.
- **OS / library compatibility.** Untagged native integers and floats talk to the kernel and libc without marshaling — the point of refusing tags.

## Caveats

- Stop-the-world mark–sweep: unsuitable where TLSF-class bounded latency (361) is required. Do not remint 361, mimalloc 011, or region cards 030/133.
- Conservative identification can fail to reclaim; concealing pointers (XOR lists, packing) breaks the collector by design.
- Preprint PDF used here is the author draft of the SPE 18(9) paper; DOI points at the Wiley version.

## Links

- Open PDF (course mirror of author preprint): https://people.cs.umass.edu/~emery/classes/cmpsci691st/readings/PL/GC-Uncooperative.pdf
- Author page: https://hboehm.info/spe_gc_paper/
- DOI: https://doi.org/10.1002/spe.4380180902
