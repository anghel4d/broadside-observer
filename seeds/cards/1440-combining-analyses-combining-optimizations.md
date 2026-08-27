---
title: "Combining Analyses, Combining Optimizations"
authors: ["Cliff Click", "Keith D. Cooper"]
year: 1995
venue: "ACM TOPLAS"
arxiv: null
doi: "10.1145/201059.201061"
source: "https://doi.org/10.1145/201059.201061"
topics: [typed-programming-systems, batched-interpreters-ffi]
seed_rank: 1440
seed_batch: "archive-2026-08-28"
reviewed: "2026-08-28"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "Global Code Motion / Global Value Numbering"
    url: "https://doi.org/10.1145/223428.207154"
    year: 1995
    arxiv: null
    doi: "10.1145/223428.207154"
  - title: "Constant Propagation with Conditional Branches"
    url: "https://doi.org/10.1145/103135.103136"
    year: 1991
    arxiv: null
    doi: "10.1145/103135.103136"
  - title: "LLVM: A Compilation Framework for Lifelong Program Analysis & Transformation"
    url: "https://doi.org/10.1109/CGO.2004.1281665"
    year: 2004
    arxiv: null
    doi: "10.1109/CGO.2004.1281665"
see:
  - "1361-llvm-a-compilation-framework-for-lifelong-program-analysis-tra"
  - "1360-register-allocation-via-coloring"
---

# Combining Analyses, Combining Optimizations

## One-sentence takeaway

Run optimistic, interleaved analyses over a shared intermediate graph so each pass sees the sharpened facts of the others — the intellectual root of sea-of-nodes style combined optimization.

## Why it matters here

ano’s IR should not be a pipeline of deaf phases that each undo the last. Click–Cooper formalize *combination*: value numbering, constant propagation, dead code, and related facts improve each other when iterated on one graph. LLVM (1361) and HotSpot’s C2 sea-of-nodes inherit this stance. For Broadside: design ano’s optimizer as cooperating lattice analyses on one SSA/sea graph, not as a fixed pass list that hopes order is lucky.

## Key ideas

- **Optimistic iteration.** Assume the best case; withdraw facts only when contradicted — the Wegman–Zadeck SCCP spirit (constant propagation with conditional branches) generalized.
- **Shared IR as blackboard.** Analyses read/write the same nodes and edges; combining is simultaneous improvement, not file-to-file handoff.
- **Optimization as analysis product.** Transformations fire when lattices justify them; dead code and folding are consequences of facts, not separate religions.
- **Evidence.** TOPLAS 17(2), 1995. Companion to Click’s PLDI Global Code Motion/GVN work; foundational citation for combined / sea-of-nodes optimizers.

## Caveats

Engineering a sea-of-nodes IR is harder than a simple instruction list; compile-time and complexity costs are real; not every language wants optimistic interleaving. Cite SCCP and GCM/GVN as siblings — this paper is the *combination* thesis, not the full Click thesis text. Register allocation (1360) still sits downstream.

## Links

- DOI: https://doi.org/10.1145/201059.201061
- ACM DL: https://dl.acm.org/doi/10.1145/201059.201061
