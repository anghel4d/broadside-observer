---
title: "Terra: a Multi-Stage Language for High-Performance Computing"
authors: ["Zachary DeVito", "James Hegarty", "Alex Aiken", "Pat Hanrahan", "Jan Vitek"]
year: 2013
venue: "PLDI"
arxiv: null
doi: "10.1145/2491956.2462166"
source: "https://doi.org/10.1145/2491956.2462166"
topics: [batched-interpreters-ffi, embedded-scripting-dsls]
seed_rank: 1477
seed_batch: "craft-2026-08-31"
reviewed: "2026-08-31"
pool: "languages"
relevance_score: 10
lineage: batched-interpreters
cites:
  - title: "The Implementation of Lua 5.0"
    url: "https://www.lua.org/doc/jucs05.pdf"
    year: 2005
    arxiv: null
    doi: "10.3217/jucs-011-07-1159"
  - title: "Copy-and-Patch Compilation"
    url: "https://arxiv.org/abs/2011.13127"
    year: 2021
    arxiv: "2011.13127"
    doi: "10.1145/3485513"
  - title: "LLVM: A Compilation Framework for Lifelong Program Analysis & Transformation"
    url: "https://llvm.org/pubs/2004-01-30-CGO-LLVM.pdf"
    year: 2004
    arxiv: null
    doi: null
see:
  - "1476-the-implementation-of-lua-5-0"
  - "1429-copy-and-patch-compilation"
---

# Terra: a Multi-Stage Language for High-Performance Computing

## One-sentence takeaway

Lua stages a C-shaped language (Terra) in the same lexical environment; Terra JIT-compiles via LLVM and runs with no Lua runtime on the hot path — multi-stage embedding without a separate compiler process.

## Why it matters here

Copy-and-patch 1429 is ano’s *stencil* JIT; Lua 5.0 (1476) is the portable VM. The leftover is *staging*: generate the query kernel from Lua-shaped host code, then run it as C. Terra is that two-language design. `terra` functions are first-class Lua values; `quote`/`escape` splice Terra ASTs; `includec` pulls C; `saveobj` emits a `.o` you can link into Anoptic. Their BLAS autotuner is < 200 lines and within 20% of ATLAS; a stencil DSL is 2.3× hand-written C. ano can host the planner in a Lua-like layer and emit Terra (or C&P stencils) for the ECS scan.

## Key ideas

- **Shared lexicon, separate execution.** Lua and Terra see the same names (hygienic, Lisp-macro style specialization). Terra is statically typed, manually managed, and can run on another thread — Lua’s GC and dynamic types never leak into the kernel.
- **Types as Lua values.** `function Image(PixelType) struct ImageImpl { data: &PixelType, ... }` is a C++ template done as a Lua function that returns a Terra type. Methods are Terra functions stored in a Lua table on the type. Layout becomes a library, not a compiler pass.
- **C is a Terra library.** `terralib.includec("stdlib.h")` fills a Lua table with Terra wrappers. FFI converts Lua strings to `rawstring` on the way in. Legacy Anoptic C stays callable without glue generators.
- **JIT or object file.** Calling a Terra function from Lua compiles it; `terralib.saveobj` writes a `.o` for the engine’s link step. Vector ops are first-class Terra types, so the staged kernel can be SIMD without a second language.

## Caveats

Terra’s backend is LLVM — the compile cost C&P exists to avoid on the frame loop. Use Terra for kernels that live across frames (query plans, standing-rule bodies), C&P for one-shot ASTs. The public implementation targets x86/ARM via LLVM, not a GPU dialect in this paper (they flag accelerators as future). Lua 5.x host, not ano syntax — steal the staging model, not the surface. Do not remint 1429 / 1476.

## Links

- DOI: [10.1145/2491956.2462166](https://doi.org/10.1145/2491956.2462166)
- Author PDF: https://cs.stanford.edu/~zdevito/pldi071-devito.pdf
- Implementation: https://github.com/zdevito/terra
