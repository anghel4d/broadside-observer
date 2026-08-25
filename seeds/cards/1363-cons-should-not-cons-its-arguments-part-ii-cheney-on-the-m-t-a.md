---
title: "CONS Should Not CONS Its Arguments, Part II: Cheney on the M.T.A."
authors:
  - "Henry G. Baker"
year: 1995
venue: "ACM SIGPLAN Notices 30(9)"
arxiv: null
doi: "10.1145/214448.214454"
source: "https://doi.org/10.1145/214448.214454"
topics:
  - "scheme-compilation"
  - "continuation-passing-style"
  - "copying-garbage-collection"
  - "tail-calls"
seed_rank: 1363
seed_batch: "archive-2026-08-26"
reviewed: "2026-08-26"
pool: "systems"
relevance_score: 9
lineage: programming-language-foundations
cites:
  - title: "Compiling with Continuations"
    url: "https://www.cambridge.org/core/books/compiling-with-continuations/7CA9C36DCE78AD82218E745F43A4E740"
    year: 1992
    arxiv: null
    doi: null
  - title: "RABBIT: A Compiler for Scheme"
    url: "https://dspace.mit.edu/handle/1721.1/6913"
    year: 1978
    arxiv: null
    doi: null
  - title: "A Nonrecursive List Compacting Algorithm"
    url: "https://doi.org/10.1145/362790.362798"
    year: 1970
    arxiv: null
    doi: "10.1145/362790.362798"
see:
  - "667-compiling-with-continuations"
  - "674-rabbit-a-compiler-for-scheme"
  - "1160-lambda-lifting-transforming-programs-to-recursive-equa"
  - "030-region-based-memory-management"
---

# CONS Should Not CONS Its Arguments, Part II: Cheney on the M.T.A.

## One-sentence takeaway

Compile Scheme to never-returning CPS C functions, then reinterpret the C stack pointer as a bump allocator and evacuate live frames with Cheney copying when it fills.

## Problem

Portable C does not guarantee proper tail calls. Scheme-to-C compilers therefore used trampolines or whole-program tricks, while captured continuations and precise collection of C frames remained awkward.

## Design

Translate calls into continuation-passing style so generated C functions never return. Each call allocates the next frame by advancing the native stack; when the stack reaches its bound, treat those frames as a semispace and copy live continuations/objects to fresh space using Cheney’s breadth-first collector. Forwarding pointers reconnect references, and execution resumes without unwinding a trampoline.

## Evidence

ACM SIGPLAN Notices 30(9), 1995, pp. 17–20 (1994 draft). Baker hand-translates the Boyer benchmark and shows how C calls, arguments, varargs, separate compilation, proper tail recursion, continuations, and precise collection can coexist under one deliberately inverted stack discipline.

## Limitations

This is a compact design note, not a broad benchmark study. It relies on assumptions about contiguous C-stack growth and writable/inspectable frames that modern ABIs, guard pages, sanitizers, and unwind metadata may violate. Copying all live frames can be costly and native interop needs care.

## Implications for Broadside

The steal is not “abuse the C stack”; it is to align control representation and allocation so one mechanism solves two boundary problems. ano’s rule continuations could live in a bump region whose exhaustion is an explicit scheduling/evacuation point. Anoptic jobs can use the same idea for bounded frame packets while preserving a conventional fallback across foreign calls.

## Bottom line

Mint the compiler/runtime co-design trick. CPS (667) exposes continuations and RABBIT (674) compiles Scheme; Cheney-on-the-MTA turns that representation into an allocation discipline.

## Links

- DOI: [10.1145/214448.214454](https://doi.org/10.1145/214448.214454)
