---
title: "Retrofitting Effect Handlers onto OCaml"
authors:
  - "KC Sivaramakrishnan"
  - "Stephen Dolan"
  - "Leo White"
  - "Tom Kelly"
  - "Sadiq Jaffer"
  - "Anil Madhavapeddy"
year: 2021
venue: "PLDI"
arxiv: "2104.00250"
doi: "10.1145/3453483.3454039"
source: "https://arxiv.org/abs/2104.00250"
topics:
  - effects
  - handlers
seed_rank: 478
seed_batch: "lineage-shallow-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 8
lineage: algebraic-effects
cites:
  - title: "Handlers of Algebraic Effects"
    url: "https://doi.org/10.1007/978-3-642-00590-9_7"
    year: 2009
    doi: "10.1007/978-3-642-00590-9_7"
  - title: "Koka: Programming with Row Polymorphic Effect Types"
    url: "https://arxiv.org/abs/1406.2061"
    year: 2014
    arxiv: "1406.2061"
see:
  - "021-handlers-of-algebraic-effects"
  - "463-koka-programming-with-row-polymorphic-effect-types"
---

# Retrofitting Effect Handlers onto OCaml

## One-sentence takeaway

Multicore OCaml adds one-shot delimited effect handlers via heap-allocated fibers so generators, async I/O, and lightweight threads compose, while existing exception-only programs stay within about 1% on the macro suite.

## Why it matters here

Shows algebraic-effect ideas graduating into a production runtime Anoptic can actually call — OCaml 5's `Effect` module is this paper's design.

## Key ideas

- Handlers capture the delimited continuation at `perform`; because the primary use is concurrency, continuations are one-shot and stacks are not copied.
- Fibers carry DWARF unwind info so gdb/lldb/perf keep working; stack-overflow checks plus a red zone grow stacks without taxing tiny leaves.
- Exceptions stay a specialized cheap path rather than being encoded as ordinary effects, preserving the existing ABI.
- Mean <1% overhead on 54 real-world workloads that do not use handlers; an HTTP server on fibers was competitive with Go and Lwt in their numbers.

## Caveats

## Links

- arXiv: [2104.00250](https://arxiv.org/abs/2104.00250)
- DOI: [10.1145/3453483.3454039](https://doi.org/10.1145/3453483.3454039)
