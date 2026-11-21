---
title: "Tenon: A Unified Programming Framework for Retargetable PIM Compilation"
authors:
  - "Niansong Zhang"
  - "Shiran Guo"
  - "Zhiru Zhang"
year: 2026
venue: "HPCA 2027 (arXiv preprint, cs.PL)"
arxiv: "2611.25636"
doi: null
source: "https://arxiv.org/abs/2611.25636"
version_reviewed: "v1"
topics:
  - "data-layout"
  - "linear-layouts"
  - "f2-layout-algebra"
  - "processing-in-memory"
  - "retargetable-compilation"
  - "array-languages"
seed_rank: 2671
seed_batch: "craft-2026-11-21"
reviewed: "2026-11-21"
pool: "languages"
relevance_score: 8
see:
  - "2618-decoupling-data-layouts-from-algebraic-data-types"
  - "217-pim-malloc-a-fast-and-scalable-dynamic-memory-allocator-for-"
cites:
  - title: "Tenon: A Unified Programming Framework for Retargetable PIM Compilation"
    url: "https://arxiv.org/abs/2611.25636"
    year: 2026
    arxiv: "2611.25636"
    doi: null
  - title: "Linear Layouts: Robust Code Generation of Efficient Tensor Computation Using F2"
    url: "https://arxiv.org/abs/2505.23819"
    year: 2025
    arxiv: "2505.23819"
    doi: null
---

# Tenon: A Unified Programming Framework for Retargetable PIM Compilation

## One-sentence takeaway

Tenon models every processing-in-memory target as nested grids of compute and storage units joined by legal transfer paths, then reuses the F2 linear-layout algebra from GPU compilers to map logical work and data onto those grids and build the layout with the least data movement.

## Why it matters here

ano needs one way to say where columns live (SoA, tiles, per-thread chunks) and to compile the same query to different targets. Tenon's split between workload, target description and cost model, plus a layout algebra that works for more than one hardware family, is a good template for ano's layout layer. It pairs with Isomer (2618), which puts layouts in the type system; Tenon picks the layout automatically from a target spec.

## Key ideas

- **Targets as grids.** A PIM device is described as nested grids of compute and storage units with the data-transfer paths that are legal between them.
- **Three separate specs.** Workload, compilation target and cost are written separately, so a workload is written once and compiled for many devices.
- **F2 layout algebra, generalized.** The linear-layout algebra over F2 used by GPU compilers is extended to map logical work and data onto compute and storage grids.
- **Automatic layout.** Given a workload and a target spec, Tenon builds the data layout with the least data movement.
- **Results.** On five commercial PIM backends and the AttAcc HBM-PIM design, it matches or beats vendor, expert and compiler baselines (geomean up to 1.20x, single cases up to 3.65x); GPT-13B decoding on AttAcc is 1.2–1.3% faster than the DCC compiler.

## Caveats

Abstract-level read of v1 (19 Nov 2026), accepted at HPCA 2027 according to the arXiv comment. The targets are PIM devices, not GPUs or CPUs, so for us the value is the layout abstraction, not the speedups. End-to-end gains over the best previous PIM compiler are small (about 1%). The abstract gives no code link.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.25636
- PDF: https://arxiv.org/pdf/2611.25636
- Linear Layouts (F2 layout algebra it builds on): https://arxiv.org/abs/2505.23819
