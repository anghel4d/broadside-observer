---
title: "Linear Scan Register Allocation"
authors:
  - "Massimiliano Poletto"
  - "Vivek Sarkar"
year: 1999
venue: "ACM Trans. Program. Lang. Syst."
arxiv: null
doi: "10.1145/330249.330250"
source: "https://doi.org/10.1145/330249.330250"
topics:
  - "register-allocation"
  - "jit"
  - "batched-interpreters-ffi"
  - "embedded-scripting-dsls"
seed_rank: 1103
seed_batch: "archive-2026-08-20"
reviewed: "2026-08-20"
pool: "languages"
relevance_score: 10
lineage: linear-scan-ra
cites:
  - title: "Register Allocation & Spilling via Graph Coloring"
    url: "https://doi.org/10.1145/800230.806984"
    year: 1982
    arxiv: null
    doi: "10.1145/800230.806984"
  - title: "Iterated Register Coalescing"
    url: "https://doi.org/10.1145/229542.229546"
    year: 1996
    arxiv: null
    doi: "10.1145/229542.229546"
  - title: "Rabbit: A Compiler for Scheme"
    url: "https://dspace.mit.edu/handle/1721.1/6913"
    year: 1978
    arxiv: null
    doi: null
  - title: "Finally Tagless, Partially Evaluated"
    url: "https://doi.org/10.1017/S0956796809007205"
    year: 2009
    arxiv: null
    doi: "10.1017/S0956796809007205"
see:
  - "674-rabbit-a-compiler-for-scheme"
  - "1003-finally-tagless-partially-evaluated"
  - "640-principal-type-schemes-for-functional-programs"
  - "1075-stream-fusion-from-lists-to-streams-to-nothing-at-all"
---

# Linear Scan Register Allocation

## One-sentence takeaway

Sort live ranges by start point, scan once, greedily assign the next free register or spill the one that dies last — graph coloring's compile-time tax without most of the runtime hit.

## Why it matters here

ano is an embedded scripting VM sitting on a Vulkan frame. Chaitin/George–Appel iterated coalescing builds a quadratic interference graph; that is the wrong cost model for a per-frame or per-specialization compile. Poletto–Sarkar 1999 (tcc / Machine SUIF) is the allocator LLVM, HotSpot C1, and every bytecode JIT still start from: one linear pass over live intervals, code within ~12% of aggressive coloring, several times faster to compile. Tagless interpreters (1003) and stream fusion (1075) produce the IR; linear scan is how that IR becomes registers before the ECS job runs.

## Key ideas

- Live range ≈ half-open interval *[start, end)* on a linearized instruction stream (not a full CFG colouring).
- Maintain the active set ordered by end point. At each new interval: expire ended actives, if a register is free assign it, else spill the active interval that extends furthest (or the new one, if shorter).
- No interference graph, no coalescing in the base algorithm. Second-chance binpacking (Traub et al. 1998) is the "spend more compile time" sibling.
- Measured against tcc's fast coloring (compile time) and SUIF iterated coalescing (code quality).

## Caveats

- Interval approximation is inexact across holes in the live range; splitting / hole-aware linear scan (Wimmer, Traub) is what production JITs run.
- SSA-based linear scan (Hack / Möesenböck) is the post-2005 formulation; this paper is the pre-SSA statement.
- Worst spills can still be several times slower than coloring on pathological live-range sets — the 12% figure is benchmarks, not a bound.

## Links

- DOI: [10.1145/330249.330250](https://doi.org/10.1145/330249.330250)
- Author PDF: [https://web.cs.ucla.edu/~palsberg/course/cs132/linearscan.pdf](https://web.cs.ucla.edu/~palsberg/course/cs132/linearscan.pdf)
- TOPLAS 21(5):895–913, September 1999
