---
title: "Register Allocation via Coloring"
authors:
  - "Gregory J. Chaitin"
  - "Marc A. Auslander"
  - "Ashok K. Chandra"
  - "John Cocke"
  - "Martin E. Hopkins"
  - "Peter W. Markstein"
year: 1981
venue: "Computer Languages 6(1)"
arxiv: null
doi: "10.1016/0096-0551(81)90048-5"
source: "https://doi.org/10.1016/0096-0551(81)90048-5"
topics:
  - "register-allocation"
  - "graph-coloring"
  - "compiler-backend"
  - "liveness"
seed_rank: 1360
seed_batch: "archive-2026-08-26"
reviewed: "2026-08-26"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "Compiling with Continuations"
    url: "https://www.cambridge.org/core/books/compiling-with-continuations/7CA9C36DCE78AD82218E745F43A4E740"
    year: 1992
    arxiv: null
    doi: null
  - title: "From System F to Typed Assembly Language"
    url: "https://doi.org/10.1145/237721.237771"
    year: 1998
    arxiv: null
    doi: "10.1145/237721.237771"
  - title: "Formal Certification of a Compiler Back-end"
    url: "https://doi.org/10.1145/1273442.1250736"
    year: 2006
    arxiv: null
    doi: "10.1145/1273442.1250736"
see:
  - "667-compiling-with-continuations"
  - "674-rabbit-a-compiler-for-scheme"
  - "1001-from-system-f-to-typed-assembly-language"
  - "707-formal-certification-of-a-compiler-back-end-or-programming-a"
---

# Register Allocation via Coloring

## One-sentence takeaway

Turn global register assignment into graph coloring: values are vertices, simultaneous liveness creates interference edges, and machine registers are colors.

## Problem

Local register heuristics miss reuse across basic blocks and spill unnecessarily. A global allocator must reason about overlapping live ranges throughout a procedure while respecting a fixed, irregular machine register set.

## Design

Build an interference graph whose nodes are computed values and whose edges mean the values are live at the same time. Simplify the graph by removing low-degree nodes, choose spill candidates when coloring is not guaranteed, then assign one of k register colors while reconstructing the graph. Insert loads/stores for spills and repeat as needed.

## Evidence

Computer Languages 6(1), 1981, pp. 47–57. The paper reports an experimental implementation in an optimizing PL/I compiler and preliminary output approaching hand-coded assembly quality. More importantly, it supplied the durable abstraction that shaped global register allocators and decades of refinements.

## Limitations

Optimal coloring is NP-complete; simplify/spill decisions are heuristic, move coalescing complicates interference, register classes and calling conventions are not plain k-coloring, and repeated spill rewriting can be expensive. Linear-scan allocation can win when compile latency matters.

## Implications for Broadside

ano and Anoptic shader backends should make liveness/interference an explicit inspected artifact rather than hide pressure inside code generation. The same graph can drive register/temporary packing and explain spills to developers. Keep allocation late, after SSA-like optimization, but preserve source/column provenance on every live range.

## Bottom line

Mint the backend abstraction. CPS (667) and RABBIT (674) reshape control; typed assembly (1001) constrains machine code; coloring is where finite physical storage becomes a graph problem.

## Links

- DOI: [10.1016/0096-0551(81)90048-5](https://doi.org/10.1016/0096-0551(81)90048-5)
