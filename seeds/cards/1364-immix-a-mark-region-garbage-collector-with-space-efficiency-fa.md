---
title: "Immix: A Mark-Region Garbage Collector with Space Efficiency, Fast Collection, and Mutator Performance"
authors:
  - "Stephen M. Blackburn"
  - "Kathryn S. McKinley"
year: 2008
venue: "PLDI 2008"
arxiv: null
doi: "10.1145/1375581.1375586"
source: "https://doi.org/10.1145/1375581.1375586"
topics:
  - "garbage-collection"
  - "mark-region"
  - "memory-locality"
  - "runtime-systems"
seed_rank: 1364
seed_batch: "archive-2026-08-26"
reviewed: "2026-08-26"
pool: "systems"
relevance_score: 10
lineage: memory-allocators
cites:
  - title: "Region-Based Memory Management"
    url: "https://doi.org/10.1016/S0167-6423(97)00029-5"
    year: 1997
    arxiv: null
    doi: "10.1016/S0167-6423(97)00029-5"
  - title: "Dynamic Storage Allocation: A Survey and Critical Review"
    url: "https://doi.org/10.1007/3-540-60368-9_19"
    year: 1995
    arxiv: null
    doi: "10.1007/3-540-60368-9_19"
  - title: "Mesh: Compacting Memory Management for C/C++ Applications"
    url: "https://doi.org/10.1145/3314221.3314582"
    year: 2019
    arxiv: null
    doi: "10.1145/3314221.3314582"
see:
  - "030-region-based-memory-management"
  - "133-region-based-memory-management-in-cyclone"
  - "320-mesh-compacting-memory-management-for-c-c-applications"
---

# Immix: A Mark-Region Garbage Collector with Space Efficiency, Fast Collection, and Mutator Performance

## One-sentence takeaway

Divide the heap into coarse blocks and fine lines, reclaim contiguous holes without always moving objects, and copy only opportunistically when evacuation will pay.

## Problem

Semispace collectors waste half the heap, mark-sweep fragments it, and mark-compact moves too much. Managed runtimes want space efficiency, short collection, and good mutator locality, but canonical collectors usually surrender one of the three.

## Design

Immix allocates into fixed-size blocks subdivided into lines. Tracing marks objects and live lines; empty lines become allocation units, while mostly empty blocks may be opportunistically evacuated. The design therefore mixes marking and selective copying under one mark-region policy instead of committing the whole heap to one grain or one movement rule.

## Evidence

PLDI 2008, pp. 22–32. Across 20 benchmarks the implementation improved total performance by 7–25% on average over canonical collectors, and as a mature generational space it matched or beat a tuned generational collector. The design entered MMTk/Jikes RVM and influenced later production collectors.

## Limitations

Immix still needs tracing pauses or concurrent variants, write barriers in generational use, precise object maps, and reserve space for evacuation. Fragmentation can persist in pinned or densely live blocks; tiny embedded arenas may not justify the metadata.

## Implications for Broadside

Anoptic already thinks in arenas and pages; Immix suggests a two-grain fallback for long-lived editor/runtime objects: coarse blocks for ownership and fine occupancy lines for reuse, with compaction only when a block’s live density warrants it. Keep frame/transient arenas explicit; use mark-region for the irregular remainder rather than replacing every allocator with GC.

## Bottom line

Mint the hybrid grain. Region papers (030/133) use lexical lifetime; Immix recovers region-like locality when lifetime is dynamic.

## Links

- DOI: [10.1145/1375581.1375586](https://doi.org/10.1145/1375581.1375586)
