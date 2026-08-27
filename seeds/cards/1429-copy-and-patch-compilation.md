---
title: "Copy-and-Patch Compilation"
authors: ["Haoran Xu", "Fredrik Kjolstad"]
year: 2021
venue: "PACMPL (OOPSLA 2021)"
arxiv: "2011.13127"
doi: "10.1145/3485513"
source: "https://arxiv.org/abs/2011.13127"
topics: [batched-interpreters-ffi, embedded-scripting-dsls]
seed_rank: 1429
seed_batch: "craft-2026-08-27"
reviewed: "2026-08-27"
pool: "languages"
relevance_score: 10
lineage: batched-interpreters
cites:
  - title: "Liftoff: a new baseline compiler for WebAssembly in V8"
    url: "https://v8.dev/blog/liftoff"
    year: 2018
    arxiv: null
    doi: null
  - title: "LLVM: A Compilation Framework for Lifelong Program Analysis & Transformation"
    url: "https://llvm.org/pubs/2004-01-30-CGO-LLVM.pdf"
    year: 2004
    arxiv: null
    doi: null
see:
  - "1152-egg-fast-and-extensible-equality-saturation"
  - "1133-redundant-array-computation-elimination"
  - "1034-destination-calculus-linear-lambda-for-functional-memory-writes"
  - "1093-flix-flipped-indexing-for-scalable-gpu-queries-and-updates"
---

# Copy-and-Patch Compilation

## One-sentence takeaway

Stencil-copy a prebuilt binary library, patch holes (literals, stack slots, jumps), and you get a baseline compiler faster than LLVM -O0 that still beats an interpreter — the ano lowering recipe this week.

## Why it matters here

ano is an embedded ECS/array language that will JIT query pipelines and standing rules. egg 1152 rewrites; RACE 1133 does array CSE; Destination Calculus 1034 is the write calculus. None of those emit machine code. Copy-and-patch is the missing *runtime* lowering: compile a query AST in less time than it takes to build the AST, then run it on Anoptic's C/Vulkan side without dragging LLVM into the frame loop. CPython 3.13's copy-and-patch JIT is the same algorithm in production.

## Key ideas

- **Binary stencils.** Each AST node / bytecode has many precompiled variants (register vs stack, literal vs variable, supernodes). Holes are relocation records Clang already emits; no hand assembler.
- **Copy then patch.** Runtime work is memcpy of the stencil plus a few scalar writes for literals, stack offsets, and continuation addresses. Continuation-passing + GHC calling convention turns tail calls into jumps and doubles as register allocation.
- **Two compilers from one algorithm.** A C-like metaprogramming DSL (database queries) and a WebAssembly baseline assembler. Query compiler: 100–1000× faster to compile than LLVM -O0, generated code ~14% faster than -O0 and ~10× an interpreter. Wasm: 4.9–6.5× faster than V8 Liftoff, 39–63% faster generated code.
- **Supernodes are optional.** High-level compiler ~100k stencils / 17.5 MB; Wasm 1666 stencils / 35 kB. ano can start small.

## Caveats

Not an optimizing compiler — LLVM -O1 still wins on long-running kernels, at 1000× compile cost. Register allocation is expression-tree only unless you pay for mem2reg. Stencil library is x86-64-shaped in the paper; ARM needs a rebuild, not a rewrite. Do not confuse with template-JIT concatenation (no patching) or assembler-based baselines (Liftoff).

## Links

- arXiv: https://arxiv.org/abs/2011.13127
- PDF: https://arxiv.org/pdf/2011.13127
- DOI: [10.1145/3485513](https://doi.org/10.1145/3485513)
- PochiVM: https://github.com/sillycross/PochiVM
