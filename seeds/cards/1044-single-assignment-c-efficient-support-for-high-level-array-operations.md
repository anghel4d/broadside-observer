---
title: "Single Assignment C: Efficient Support for High-Level Array Operations in a Functional Setting"
authors: ["Sven-Bodo Scholz"]
year: 2003
venue: "JFP"
arxiv: null
doi: "10.1017/S0956796802004458"
source: "https://doi.org/10.1017/S0956796802004458"
topics: [array-languages, with-loop, shape-inference, sac]
seed_rank: 1044
seed_batch: "archive-2026-08-16"
reviewed: "2026-08-16"
pool: "languages"
relevance_score: 10
lineage: sac-array
cites:
  - title: "NESL: A Nested Data-Parallel Language (Version 3.1)"
    url: "https://www.cs.cmu.edu/~scandal/nesl.html"
    year: 1995
    arxiv: null
    doi: null
  - title: "Futhark: Purely Functional GPU-Programming with Nested Parallelism and In-Place Array Updates"
    url: "https://doi.org/10.1145/3062341.3062354"
    year: 2017
    arxiv: "1711.03871"
    doi: "10.1145/3062341.3062354"
  - title: "The Semantics of Rank Polymorphism"
    url: "https://arxiv.org/abs/1801.04512"
    year: 2019
    arxiv: "1801.04512"
    doi: null
see:
  - "1002-futhark-purely-functional-gpu-programming"
  - "141-nesl-a-nested-data-parallel-language-version-3-1"
  - "926-the-semantics-of-rank-polymorphism"
  - "045-notation-as-a-tool-of-thought"
---

# Single Assignment C: Efficient Support for High-Level Array Operations in a Functional Setting

## One-sentence takeaway

C-looking, side-effect-free arrays with a shape-invariant `with`-loop compile — via shape inference and with-loop folding — to Fortran-competitive code without building intermediate arrays.

## Why it matters here

ano is an array/columnar language with BQN twins and standing rules. The shelf had NESL (141), Futhark (1002), and rank-polymorphism semantics (926), but not SAC, the compiled APL-in-C that Futhark's fusion story actually comes from. With-loop folding is loop fusion + array contraction *without* alignment or liveness, because single assignment makes both trivial.

## Key ideas

- n-dimensional arrays as the only aggregate; type hierarchy carries shape information from scalars up to rank-polymorphic arrays.
- `with`-loop: a shape-invariant array comprehension (the SAC analogue of APL rank / BQN cells).
- Shape inference in the type system is a prerequisite for eliminating intermediates; with-loop folding fuses producer/consumer loops.
- Syntax is curly-brace C so numerical codes look familiar; semantics are purely functional (Sisal lineage, plus rank).
- JFP 13(6) is the archival paper; IFL 1994 is the language announcement. GPU/multithreaded SAC (Grelck & Scholz 2006) is a cite, not a remint.

## Caveats

- SAC targets CPU clusters and later GPUs; it is not a Vulkan shader language. Futhark is the closer GPU cousin.
- The paper's Fortran bake-off is 2003-era; the *idea* (rank-polymorphic fusion from single assignment) is what transfers to ano.
- Do not remint later SAC GPU papers this cycle.

## Links

- DOI: [10.1017/S0956796802004458](https://doi.org/10.1017/S0956796802004458)
- JFP: https://www.cambridge.org/core/journals/journal-of-functional-programming/article/single-assignment-c-efficient-support-for-highlevel-array-operations-in-a-functional-setting/D0DDF8167C20487D81F84A2310838594
- SAC site: https://www.sac-home.org/
