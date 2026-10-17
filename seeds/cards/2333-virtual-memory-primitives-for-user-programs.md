---
title: "Virtual Memory Primitives for User Programs"
authors:
  - "Andrew W. Appel"
  - "Kai Li"
year: 1991
venue: "ASPLOS-IV (4th International Conference on Architectural Support for Programming Languages and Operating Systems), 96–107"
arxiv: null
doi: "10.1145/106972.106984"
source: "https://www.cs.princeton.edu/~appel/papers/vmpup.pdf"
topics:
  - virtual-memory
  - garbage-collection
  - write-barriers
  - region-memory-capabilities
seed_rank: 2333
seed_batch: "archive-2026-10-18"
reviewed: "2026-10-18"
pool: "systems"
relevance_score: 9
lineage: page-protection-tricks
see:
  - 1364-immix-a-mark-region-garbage-collector-with-space-efficiency-fa
  - 1597-garbage-collection-in-an-uncooperative-environment
  - 030-region-based-memory-management
  - 2306-efficient-software-based-fault-isolation
cites:
  - title: "Virtual Memory Primitives for User Programs"
    url: "https://doi.org/10.1145/106972.106984"
    year: 1991
    arxiv: null
    doi: "10.1145/106972.106984"
---

# Virtual Memory Primitives for User Programs

## One-sentence takeaway

Appel and Li catalogue the user-level algorithms that replace per-access software checks with MMU page protection — concurrent and generational GC, shared virtual memory, concurrent checkpointing, persistent stores, pointer swizzling, compressed paging, guard-page heap-limit checks — distil the handful of OS primitives they all need (trap, prot1, protN, unprot, dirty, map2), and measure how badly 1990 Unix kernels implemented them.

## Why it matters here

Anoptic and ano both lean on arenas, regions and snapshotting, and this paper is the menu of what the page table can do for free: a guard page instead of a bounds compare on every bump allocation, write-protect-and-trap (or dirty-page lists) as a write barrier for incremental snapshots of simulation state, and double-mapping so a background thread can scan a page the mutator cannot touch. It also says when not to bother: if a trap costs thousands of cycles, a software check wins, so measure the OS first.

## Key ideas

- **Six primitives.** trap (user-mode fault handler), prot1 / protN (reduce access on one or a batch of pages), unprot (increase access on one page), dirty (pages written since last call) and map2 (the same physical page at two virtual addresses with different protections, in one address space); several algorithms also want a smaller page size.
- **Two usage patterns.** Most algorithms either protect many pages at once and unprotect one per fault (concurrent GC, checkpointing, generational barriers) or protect and unprotect single pages (shared virtual memory), so an OS that is fast at only one of the three operations still loses.
- **Concurrent copying GC without read barriers.** After the flip the unscanned to-space pages are made no-access; a mutator touching one traps, the collector scans that page, forwards its pointers and unprotects it, so compiled code needs no per-load check (needs trap, protN, unprot, map2).
- **Guard-page allocation.** Ending the allocation region in a guard page removes the per-allocation compare-and-branch; with a 64 KB nursery and a cell every 50 instructions, the authors estimate overhead dropping from about 4% to 0.3% if a trap costs about 1200 cycles.
- **Measured cost and lessons.** Benchmarks on SunOS, Ultrix, Mach and NX/2 found roughly tenfold differences in normalized prot+trap+unprot cost, kernels that failed to flush the TLB after mprotect, and argue for batched TLB shootdowns and handling faults within the CPU in well under a millisecond.

## Caveats

All numbers are from 1990 hardware and kernels; modern trap and mprotect costs, huge pages and userfaultfd change the break-even points, and frequent mprotect calls still serialize on the address-space lock in many kernels. Protection is page-granular, so fine-grained barriers still need card marking or software checks. Signal-handler-based fault recovery remains fiddly and non-portable.

## Links

- Paper (author PDF, Princeton CS-TR-276-90): https://www.cs.princeton.edu/~appel/papers/vmpup.pdf
- Paper (DOI): https://doi.org/10.1145/106972.106984
