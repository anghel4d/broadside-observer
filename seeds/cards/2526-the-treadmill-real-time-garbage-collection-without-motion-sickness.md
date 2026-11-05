---
title: "The Treadmill: Real-Time Garbage Collection Without Motion Sickness"
authors:
  - "Henry G. Baker"
year: 1992
venue: "ACM SIGPLAN Notices 27(3):66–70, March 1992"
arxiv: null
doi: "10.1145/130854.130862"
source: "https://www.plover.com/misc/hbaker-archive/NoMotionGC.html"
topics:
  - "garbage-collection"
  - "real-time"
  - "non-moving"
  - "tricolor-marking"
  - "treadmill"
seed_rank: 2526
seed_batch: "archive-2026-11-06"
reviewed: "2026-11-06"
pool: "systems"
lineage: memory-reclamation
relevance_score: 9
cites:
  - title: "The Treadmill: Real-Time Garbage Collection Without Motion Sickness"
    url: "https://www.plover.com/misc/hbaker-archive/NoMotionGC.html"
    year: 1992
    arxiv: null
    doi: "10.1145/130854.130862"
see: ["2490-a-unified-theory-of-garbage-collection", "1597-garbage-collection-in-an-uncooperative-environment", "030-region-based-memory-management", "1364-immix-a-mark-region-garbage-collector-with-space-efficiency-fa"]
---

# The Treadmill: Real-Time Garbage Collection Without Motion Sickness

## One-sentence takeaway

Baker revisits his 1978 real-time collector without copying: all cells sit on one cyclic doubly-linked "tread," four pointers (bottom/top/scan/free) delimit ecru/grey/black/white segments, and allocation or color changes are constant-time pointer moves — so objects never move and a conservative heap can still be collected in real time.

## Why it matters here

Anoptic leans on arenas and regions where addresses must stay stable (GPU uploads, wait-free bus slots, foreign pointers). The treadmill is the classic answer when you want incremental collection *without* Cheney motion: no to-space, no broken hearts, and it plays with Boehm-style uncooperative environments. It is also the conceptual sibling of region "flip" — reinterpret colors instead of relocating bytes.

## Key ideas

- Tricolor marking (white/grey/black) from Baker 1978; the mutator must never see white (read barrier). Flip reinterprets black as the new free/white.
- In-place variant: each CONS pair carries two hidden links; allocate by unsnapping from the free list and snapping into the non-free list. Color changes are list splices, all O(1).
- Four colors for the real-time case: ecru (unmarked allocated) vs white (free), plus grey and black. At flip, ecru becomes the new free list.
- Treadmill optimization (1991): one cyclic doubly-linked list with contiguous color segments ordered bottom→ecru→top→grey→scan→black→free→white→bottom. Alloc advances `free`; scanning retreats `scan`; greying an ecru cell is the only remaining unlink/relink.
- Best suited to homogeneous object sizes; heterogeneous allocation needs first-fit / buddy / bitvector free-space maps, and fragmentation ("storage erosion") remains the hard real-time risk for immobile objects.

## Caveats

- Extra two pointers per cell; for CONS pairs space matches semispace, for large objects it wins, but allocation is no longer a pure bump.
- Read barrier cost on every mutator load of a potential white reference; multi-processor variants push greying onto a marker stack to cut latency.
- Short SIGPLAN Notices note; implement from the HTML/PS on Baker's archive plus a modern GC handbook for barriers and free-space search.

## Links

- [HTML (Baker archive mirror)](https://www.plover.com/misc/hbaker-archive/NoMotionGC.html)
- [PS.GZ (Baker archive)](https://junk.8325.org/hbaker/NoMotionGC.ps.gz)
- [ACM DOI](https://doi.org/10.1145/130854.130862)
