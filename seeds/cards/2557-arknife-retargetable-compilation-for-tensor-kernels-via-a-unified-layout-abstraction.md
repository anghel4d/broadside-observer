---
title: "Retargetable Compilation for Tensor Kernels via a Unified Layout Abstraction"
authors:
  - "Likai Ma"
  - "Renze Chen"
  - "Tianqi Li"
  - "Yuhao Luo"
  - "Youwei Xiao"
  - "Size Zheng"
  - "Xiuhong Li"
  - "Yun Liang"
year: 2026
venue: "arXiv preprint (cs.PL)"
arxiv: "2611.13741"
doi: null
source: "https://arxiv.org/abs/2611.13741"
topics:
  - "data-layout"
  - "array-compilers"
  - "retargetable-compilation"
  - "constraint-solving"
  - "e-graphs"
seed_rank: 2557
seed_batch: "craft-2026-11-11"
reviewed: "2026-11-11"
pool: "languages"
relevance_score: 7
lineage: programming-language-foundations
cites:
  - title: "Categorical Foundations for CuTe Layouts"
    url: "https://arxiv.org/abs/2601.05972"
    year: 2026
    arxiv: "2601.05972"
    doi: null
see:
  - "952-categorical-foundations-for-cute-layouts"
  - "1036-decoupling-data-layouts-from-bounding-volume-hierarchies"
  - "345-structure-of-arrays-and-data-layout-for-simd"
---

# Retargetable Compilation for Tensor Kernels via a Unified Layout Abstraction

## One-sentence takeaway

Arknife treats data layout as unknowns in a constraint system: each instruction operand declares only the part of the logical-axis-to-hardware-axis mapping it cares about, conflicts are fixed by target-supplied repairs, and one integer program picks layouts globally, which matches cuBLAS on A100 and beats vendor libraries by 2.17x on x86 and 3.78x on a Hexagon NPU.

## Why it matters here

ano wants columnar arrays whose physical layout (SoA, AoSoA, tiled, swizzled for SIMD or GPU) is chosen by the compiler, not baked into user code. Arknife's framing is the right shape for that: layouts are injective maps from logical axis factors into a hardware space of parallel levels and memory spaces, instructions add partial constraints, satisfiability is the legality check, and moving a backend means describing its instructions rather than rewriting the compiler. It pairs with the CuTe layout algebra card and the BVH layout-decoupling card already in the library.

## Key ideas

- **Hardware coordinate space.** A target is described by its parallel hierarchy, memory spaces and instructions; parallel indices plus local addresses form the space layouts map into.
- **Partial constraints.** Each operand constrains only the axis factors it observes; a tensor's uses conjoin into one accumulated constraint that is order-independent, monotone and local.
- **Repairs, not conversions.** When constraints conflict the target supplies a repair (a layout change) and the compiler picks the cheapest instruction whose constraint stays satisfiable.
- **Two phases.** First make every instruction boundary feasible; then use e-graph rewriting to drop redundant repairs and a single integer program to assign layouts by preference.
- **Results.** Matches cuBLAS on A100; on x86 and Hexagon beats vendor libraries by 2.17x and 3.78x and the retargetable compiler MISAAL by 5.08x and 4.53x.

## Caveats

Evaluated on tensor kernels (GEMM-like workloads), not general array programs with irregular access or ECS-style joins. Instruction descriptions per target are still hand-written, and integer-program solve time at scale is not something I checked. I read the abstract and introduction.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.13741
- PDF: https://arxiv.org/pdf/2611.13741
