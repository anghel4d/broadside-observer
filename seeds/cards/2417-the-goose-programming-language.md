---
title: "The Goose Programming Language"
authors:
  - "Wouter van Oortmerssen"
year: 2026
venue: "Language site and GitHub repository (Apache-2.0; releases v2026.1–v2026.3, 14–21 Oct 2026)"
arxiv: null
doi: null
source: "https://aardappel.github.io/goose/"
topics:
  - "memory-management"
  - "region-based-memory"
  - "data-oriented-design"
  - "language-design"
  - "position-independent-data"
  - "bounds-check-elimination"
seed_rank: 2417
seed_batch: "craft-2026-10-25"
reviewed: "2026-10-25"
pool: "languages"
relevance_score: 9
cites:
  - title: "The Goose Programming Language"
    url: "https://aardappel.github.io/goose/"
    year: 2026
    arxiv: null
    doi: null
  - title: "aardappel/goose (GitHub repository)"
    url: "https://github.com/aardappel/goose"
    year: 2026
    arxiv: null
    doi: null
see: ["030-region-based-memory-management", "1138-language-support-for-regions", "1011-cyclone-a-safe-dialect-of-c", "1859-perceus-garbage-free-reference-counting-with-reuse", "345-structure-of-arrays-and-data-layout-for-simd"]
---

# The Goose Programming Language

## One-sentence takeaway

Goose is a memory-safe systems language with no heap, GC, reference counting, destructors or lifetime annotations: the compiler assigns all data to a handful of bump-pointer stacks, and on the author's 16 benchmarks it runs about 1.13× faster than the best safe Rust and 1.24× faster than hand-optimized C++ (MSVC geomean), with 1.25–1.95× lower peak memory.

## Why it matters here

This is the arena/region discipline Anoptic already wants, pushed into the type system and then measured against C++ and Rust. Two parts transfer directly. Relative links (1-, 2- or 4-byte offsets) make every data structure position-independent, so the in-memory form is the file format and loading is a read plus a verify pass. Share-nothing workers exchange data through typed memcpy queues, with no atomics or locks in the language. Both match ano's columnar, message-passing direction, and the variable-mode ADT layout (about 4× less memory and 2× the speed of a Rust enum, per the author) is a good model for how ano could pack tagged columns.

## Key ideas

- **N data stacks instead of a heap.** The compiler assigns each value to one of several bump-pointer stacks, each with 2 GB reserved. Only the top item of each stack can grow, so growth never moves memory and references stay valid.
- **Nested data stored inline.** Construction happens in place, even across calls, and `return err` can unwind several frames at once.
- **Relative links.** Pointers are small offsets, so structures can be copied, memory-mapped or saved without fixups.
- **Variable-mode ADTs.** Each variant uses only the space it needs, which is where the author's memory and speed numbers against Rust enums come from.
- **Compile-time function values and whole-program compilation.** The compiler emits one C file, with TinyCC as an in-process backend. Bounds checks are removed where it can prove them safe (`checkfree fn`, `--bce-lines` reporting).
- **Workers.** Concurrency is share-nothing threads connected by typed queues that copy data.

## Caveats

- No escaping closures, no function pointers and no dynamic dispatch beyond ADT tags. Whole-program compilation only. Recursive functions cannot keep growable data across calls.
- A stale slot in a reusable pool reads a different value of the right type instead of corrupting memory. That is memory safety, not protection from stale handles.
- All benchmarks are the author's own (16 programs, MSVC and clang), not independently reproduced. The language is weeks old: the repository was created on 31 Aug 2026 (Europe/Bucharest) and the first release was v2026.1 on 14 Oct.
- The compiler was produced almost entirely with AI from the author's design (the credits list "Claude Fable" for compiler implementation, benchmarking, samples and docs), so the code's maturity is unknown. It deliberately copies the structure of the author's Lobster compiler.

## Links

- Language site: https://aardappel.github.io/goose/
- Repository: https://github.com/aardappel/goose
