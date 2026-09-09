---
title: "Reconsidering \"Reconsidering Custom Memory Allocation\""
authors: ["Nicolas van Kempen", "Emery D. Berger"]
year: 2026
venue: "ISMM 2026"
arxiv: "2605.17119"
doi: "10.1145/3814942.3816132"
source: "https://arxiv.org/abs/2605.17119"
topics: [custom-allocators-runtime]
seed_rank: 1652
seed_batch: "craft-2026-09-09"
reviewed: "2026-09-09"
pool: "engines"
relevance_score: 10
lineage: memory-allocators
cites:
  - title: "Reconsidering Custom Memory Allocation"
    url: "https://doi.org/10.1145/582419.582421"
    year: 2002
    arxiv: null
    doi: "10.1145/582419.582421"
  - title: "mimalloc: Free List Sharding in Action"
    url: "https://doi.org/10.1007/978-3-030-34175-6_13"
    year: 2019
    arxiv: null
    doi: "10.1007/978-3-030-34175-6_13"
  - title: "snmalloc: A Message Passing Allocator"
    url: "https://doi.org/10.1145/3315573.3329980"
    year: 2019
    arxiv: null
    doi: "10.1145/3315573.3329980"
  - title: "Hoard: A Scalable Memory Allocator for Multithreaded Applications"
    url: "https://doi.org/10.1145/378993.379232"
    year: 2000
    arxiv: null
    doi: "10.1145/378993.379232"
see:
  - "439-reconsidering-custom-memory-allocation"
  - "011-mimalloc-free-list-sharding-in-action"
  - "322-snmalloc-a-message-passing-allocator"
  - "445-rpmalloc-lock-free-thread-caching-size-class-allocator"
  - "337-molecular-matters-memory-allocation-series"
  - "343-per-frame-arena-allocation-patterns-in-games"
  - "195-local-memory-allocators-in-large-scale-c-lakos-allocator-mod"
---

# Reconsidering "Reconsidering Custom Memory Allocation"

## One-sentence takeaway

Twenty-five years after Berger–Zorn–McKinley showed per-class custom allocators rarely beat a good general allocator, van Kempen & Berger remeasure on modern hardware/allocators and clarify *when* custom arenas still win — and when they are cargo-cult.

## Why it matters here

Anoptic lives on per-frame arenas, size-class pools, and mimalloc/rpmalloc-shaped freelists (011 / 337 / 343). The 2002 OOPSLA result (439) is the standing warning against hand-rolled per-type mallocs; this ISMM 2026 revisit is the 2026 calibration: which custom patterns still pay on current CPUs and which should be deleted in favor of a tuned general allocator plus true arenas.

## Key ideas

- **Replicate the 2002 claim on 2020s hardware.** Per-class freelist custom allocators that only wrap size-class caching usually lose or tie against mimalloc/snmalloc/jemalloc — the "custom malloc" tax is real.
- **Where custom still wins.** True region/arena lifetimes (bulk free, no individual reclaim), allocation-site specialized layouts, and NUMA/thread ownership patterns remain the honest wins — matching Molecular Matters / per-frame arena practice, not `operator new` shims.
- **Measurement discipline.** End-to-end engine frame times, not microbench malloc loops; allocator interaction with caches and huge pages matters more than raw allocation throughput.
- **Programmer guidance.** Prefer a best-of-breed general allocator + explicit arenas over a zoo of per-class pools unless profiling shows a hot size/lifetime class the general path cannot express.

## Caveats

ISMM 2026 / arXiv `2605.17119` / DOI `10.1145/3814942.3816132`. Cite 439 (do not remint). Does not replace mimalloc 011, snmalloc 322, rpmalloc 445, Lakos 195/244, or Molecular Matters 337 / per-frame arenas 343 — it tells you when *not* to invent another one.

## Links

- arXiv abs: https://arxiv.org/abs/2605.17119
- PDF: https://arxiv.org/pdf/2605.17119
- DOI: https://doi.org/10.1145/3814942.3816132
