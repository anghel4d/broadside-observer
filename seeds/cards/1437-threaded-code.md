---
title: "Threaded Code"
authors: ["James R. Bell"]
year: 1973
venue: "Communications of the ACM"
arxiv: null
doi: "10.1145/362248.362270"
source: "https://doi.org/10.1145/362248.362270"
topics: [batched-interpreters-ffi, embedded-scripting-dsls]
seed_rank: 1437
seed_batch: "archive-2026-08-28"
reviewed: "2026-08-28"
pool: "languages"
relevance_score: 10
lineage: interpreter-dispatch
cites:
  - title: "Optimizing an ANSI C Interpreter with Superoperators"
    url: "https://doi.org/10.1145/199448.199526"
    year: 1995
    arxiv: null
    doi: "10.1145/199448.199526"
  - title: "Copy-and-Patch Compilation"
    url: "https://doi.org/10.1145/3485513"
    year: 2021
    arxiv: null
    doi: "10.1145/3485513"
see:
  - "1429-copy-and-patch-compilation"
  - "673-scheme-an-interpreter-for-extended-lambda-calculus"
---

# Threaded Code

## One-sentence takeaway

Represent a program as a sequence of *addresses of routines* (or jump targets) so the interpreter’s inner loop is “fetch next address, jump” — denser than subroutine-threaded calls and faster than a switch on opcodes.

## Why it matters here

ano’s rule/array VM needs a dispatch story before JIT. Bell’s threaded code is the durable substrate under Forth, early Smalltalk, and many bytecode engines: direct threading (addresses in the stream), indirect threading (addresses of addresses), and subroutine threading. Superoperators (1438) and copy-and-patch (1429) are later accelerations on top of this shape. Start with a threaded core; specialize hot paths later.

## Key ideas

- **Code as addresses.** Instruction stream holds pointers to primitive implementations; IP advances by pointer-sized steps.
- **Dispatch = jump.** No central switch — each primitive ends by jumping to the next address (direct threading) or through a code field (indirect).
- **Density vs call overhead.** Beats naive subroutine-per-op calling conventions for interpreters that execute millions of tiny primitives.
- **Evidence.** CACM 16(6), 1973. Foundational to Forth and a standard taxonomy chapter in interpreter design.

## Caveats

Threaded code fights modern branch predictors less gracefully than computed-goto switch threading on some CPUs; portable C often approximates with labels-as-values or a switch. Not a JIT. Security (W^X, CFG) and language-level exceptions need explicit protocols. Pair with 1438/1429 rather than treating threading as the final word.

## Links

- DOI: https://doi.org/10.1145/362248.362270
- ACM DL: https://dl.acm.org/doi/10.1145/362248.362270
