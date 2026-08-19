---
title: "Revisiting Partial Tracing for Safe, Efficient, and Concurrent Garbage Collection in Unmanaged Languages"
authors: ["Jeonghyeon Kim", "Jongse Park", "Youngjin Kwon", "Jeehoon Kang"]
year: 2026
venue: "PACMPL / PLDI 2026"
arxiv: null
doi: "10.1145/3808310"
source: "https://doi.org/10.1145/3808310"
topics: [lockfree-game-parallelism, custom-allocators-runtime]
seed_rank: 1095
seed_batch: "craft-2026-08-19"
reviewed: "2026-08-19"
pool: "engines"
relevance_score: 9
lineage: lockfree-game-parallelism
cites:
  - title: "A Unified Theory of Garbage Collection"
    url: "https://doi.org/10.1145/1028976.1028982"
    year: 2004
    arxiv: null
    doi: "10.1145/1028976.1028982"
  - title: "Hazard Pointers: Safe Memory Reclamation for Lock-Free Objects"
    url: "https://doi.org/10.1109/TPDS.2004.8"
    year: 2004
    arxiv: null
    doi: "10.1109/TPDS.2004.8"
  - title: "Concurrent Immediate Reference Counting"
    url: "https://doi.org/10.1145/3656383"
    year: 2024
    arxiv: null
    doi: "10.1145/3656383"
see:
  - "024-hazard-pointers-safe-memory-reclamation-for-lock-free-object"
  - "293-epoch-based-reclamation-practical-lock-freedom"
  - "923-are-your-epochs-too-epic-batch-free-can-be-harmful"
  - "330-debra-distributed-epoch-based-reclamation"
---

# Revisiting Partial Tracing for Safe, Efficient, and Concurrent Garbage Collection in Unmanaged Languages

## One-sentence takeaway

Bacon's 2004 partial tracing (RC the *roots*, trace the heap) is made concurrent: phase consensus (epoch-style, no STW) plus deferred HP protection of local roots — automatic cycle-collecting GC for lock-free C/Rust maps that matches RCU/HP throughput and beats BDWGC / CIRC, with a C++ recipe via RAII + Clang thread-safety/lifetime annotations.

## Why it matters here

Anoptic's lock-free buses and ECS entity graphs are cyclic and have no static owner. Last Craft's lock-free pile + HP 24 / epochs 293 / 923 is the *manual* SMR stack; CDPT is the automatic companion you can drop on the job-system / query cache without teaching every intern to `retire()`. Prototype is Rust (`kaist-cp/cdpt`); the four language-agnostic safety rules (§6) are the Anoptic integration checklist, not a Rust tax. Different from Blade (1059) and WGSL (1061) — this is CPU reclamation, not GPU sync.

## Key ideas

- Dual of deferred RC: count only roots, trace from non-zero counts. Precise roots (no conservative scan), cycles come free from tracing.
- Concurrent PT (CPT): mutators enter short phase-critical sections (RCU-shaped) to acquire pointers; collector advances a (timestamp, color, phase) epoch without suspending anyone. Hybrid Dijkstra insertion + Yuasa deletion barriers keep the weak tricolor invariant.
- CDPT: replace local-root RC atomics with HP slots (one store, no validation). Phase barrier on first RT-phase entry shades the slot array so concurrent HP scans cannot miss roots.
- Four rules for C: T is thread-safe; no unboxing; TraceObj enumerates only Shared/AtomicShared; Local pointers die with the Guard. Moka port: −120 lines vs EBR, +0.26% throughput, ~1.5× peak memory.

## Caveats

- No finalizers, no compaction yet. Arenas that already own lifetimes do not need this.
- ~1.5× peak memory vs EBR (8-byte header + slower garbage identification). Budget it.
- C++ enforcement is API + Clang attributes, not a type system. You can still `std::move(*ptr)`.

## Links

- DOI: [10.1145/3808310](https://doi.org/10.1145/3808310)
- PDF: https://jhyeon.kim/papers/pldi26.pdf
- Code: https://github.com/kaist-cp/cdpt
