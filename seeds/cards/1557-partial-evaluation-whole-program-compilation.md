---
title: "Partial Evaluation, Whole-Program Compilation"
authors: ["Chris Fallin", "Maxwell Bernstein"]
year: 2025
venue: "Proc. ACM Program. Lang. (PLDI 2025)"
arxiv: "2411.10559"
doi: "10.1145/3729259"
source: "https://arxiv.org/abs/2411.10559"
topics: [batched-interpreters-ffi, array-programming-apl-bqn-q, embedded-scripting-dsls]
seed_rank: 1557
seed_batch: "craft-2026-09-03"
reviewed: "2026-09-03"
pool: "languages"
relevance_score: 10
lineage: batched-interpreters
cites:
  - title: "The Implementation of Lua 5.0"
    url: "https://www.lua.org/doc/jucs05.pdf"
    year: 2005
    arxiv: null
    doi: "10.3217/jucs-011-07-1159"
  - title: "Terra: a Multi-Stage Language for High-Performance Computing"
    url: "https://doi.org/10.1145/2491956.2462166"
    year: 2013
    arxiv: null
    doi: "10.1145/2491956.2462166"
  - title: "Copy-and-Patch Compilation"
    url: "https://arxiv.org/abs/2011.13127"
    year: 2021
    arxiv: "2011.13127"
    doi: "10.1145/3485513"
see:
  - "1476-the-implementation-of-lua-5-0"
  - "1477-terra-a-multi-stage-language-for-high-performance-computing"
  - "1429-copy-and-patch-compilation"
---

# Partial Evaluation, Whole-Program Compilation

## One-sentence takeaway

weval specializes an almost-unmodified interpreter (SSA basic-block IR / Wasm) against its bytecode — Futamura-style AOT “compiler at home” — 2.17× on SpiderMonkey-in-Wasm and 1.84× on PUC-Rio Lua in ~3 hours’ effort.

## Why it matters here

ano is an embedded array/columnar scripting language; GRID COMMAND wants NL→script without a heroic JIT. Last Craft already minted the interpreter leftovers Lua 1476 / Terra 1477 (and copy-and-patch 1429 is the stencil JIT). weval’s first Futamura projection path turns the interpreter you already ship into an AOT specialist without maintaining a second semantics. Prefer this over inventing a custom JIT tier for ano this week.

## Key ideas

- **Bytecode-erasing compilation via context specialization.** Treat the interpreter plus a concrete bytecode program as one specialization problem: constants in the bytecode become compile-time, so the interpreter loop unrolls as a side-effect of constant-propagation contexts rather than as a hand-written compiler.
- **IR contract.** Works on Wasm today; claimed portable to LLVM-like basic-block IR. The guest must expose specialization requests / constant-memory promises so weval knows what it may freeze.
- **Numbers given.** SpiderMonkey-in-Wasm **2.17×** when a JIT is unavailable under the Wasm sandbox; PUC-Rio Lua **1.84×** after about **three hours** of integration.
- **Tooling.** Implementation at https://github.com/bytecodealliance/weval — a Bytecode Alliance / Wasmtime-adjacent specialist, not a tracing JIT.

## Caveats

Initial tool path is Wasm-centric; a C/ano interpreter still has to present as (or lower to) that IR. Guest must expose specialization requests and constant-memory promises — not a drop-in on an opaque `eval` loop. Not a tracing JIT and not Deegen. Do not remint classic Futamura surveys (the 1971/1999 compiler-compiler title is already in `seen.json`). Last Craft listed weval as a reject; minting now because the ano interpreter path is first-class this cycle.

## Links

- arXiv abs: https://arxiv.org/abs/2411.10559
- PDF: https://arxiv.org/pdf/2411.10559
- DOI: https://doi.org/10.1145/3729259
- Author PDF: https://cfallin.org/pubs/pldi2025_weval.pdf
- Code: https://github.com/bytecodealliance/weval
