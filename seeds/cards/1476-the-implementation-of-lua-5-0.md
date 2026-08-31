---
title: "The Implementation of Lua 5.0"
authors: ["Roberto Ierusalimschy", "Luiz Henrique de Figueiredo", "Waldemar Celes"]
year: 2005
venue: "Journal of Universal Computer Science"
arxiv: null
doi: "10.3217/jucs-011-07-1159"
source: "https://www.lua.org/doc/jucs05.pdf"
topics: [batched-interpreters-ffi, embedded-scripting-dsls]
seed_rank: 1476
seed_batch: "craft-2026-08-31"
reviewed: "2026-08-31"
pool: "languages"
relevance_score: 9
lineage: interpreter-dispatch
cites:
  - title: "The Case for Virtual Register Machines"
    url: "https://doi.org/10.1145/858570.858576"
    year: 2003
    arxiv: null
    doi: "10.1145/858570.858576"
  - title: "The Structure and Performance of Efficient Interpreters"
    url: "https://www.jilp.org/vol5/v5paper12.pdf"
    year: 2003
    arxiv: null
    doi: null
  - title: "Optimizing Direct Threaded Code by Selective Inlining"
    url: "https://doi.org/10.1145/277650.277743"
    year: 1998
    arxiv: null
    doi: "10.1145/277650.277743"
  - title: "Threaded Code"
    url: "https://doi.org/10.1145/362248.362270"
    year: 1973
    arxiv: null
    doi: "10.1145/362248.362270"
see:
  - "1437-threaded-code"
---

# The Implementation of Lua 5.0

## One-sentence takeaway

A portable register VM (35 four-byte opcodes, while–switch dispatch), hybrid array/hash tables, and lazy upvalue closures — the embeddable interpreter recipe that made Lua the game-scripting default, without direct threading.

## Why it matters here

ano needs a *batched interpreter* leftover of threaded code 1437 / superoperators 1438 / copy-and-patch 1429. C&P is the JIT; this is the VM you run before a query is hot enough to stencil. Register windows mean `a = a + 1` is one `ADD` (Lua 4.0 needed three stack ops); the hybrid table is an SoA/array part sitting next to a hash part — exactly ano’s “this column is dense 1..n, that one is a map.” Portable ANSI C (no computed-goto) matches Anoptic’s C core. Coroutines are stackful and first-class, which is the cheap cooperative cut for GRID COMMAND orders that yield mid-tick.

## Key ideas

- **Register VM, stack of registers.** 35 opcodes, 4-byte instructions, `RK(X)` packs a register-or-constant operand. Locals live in preallocated activation records. `sum` (pure VM) drops from 1.23 s (Lua 4.0 stack VM) to 0.54 s. Davis et al.’s case for virtual registers, shipped.
- **Hybrid tables.** Array part stores dense integer keys 1..n with implicit keys (half the memory of the hash part). Grow picks the largest n with ≥ 50% density and at least one live slot in the upper half. Sparse `a[1e9]=1` stays one hash entry. Hash part is Brent scatter, 100% load, no secondary collisions.
- **Upvalues, not a cactus stack.** Outer locals are read through an upvalue that points at the stack slot until the owner returns, then the value migrates into the upvalue. A pending-vars list reuses the open upvalue so closures share mutable state. Flat closures copy outer-outer vars into the enclosing closure so a coroutine never points into another coroutine’s stack.
- **Stackless interpreter, C stack of coroutines.** Lua calls/returns adjust VM stacks; `resume` recurses into the interpreter, `yield` returns from that invocation. Portable `while`/`switch` dispatch — they *cite* direct threading and refuse it for ANSI C.

## Caveats

`TObject` is a 12–16 byte tagged union; copying a value is 3–4 words, which is why fewer VM ops matter. Numbers default to `double` (games often rebuild with `float`). Dispatch is switch, not superoperators or C&P — those remain the next tiers (1438 / 1429). Table-array heuristic can churn if integer keys flicker around the 50% density line. Do not remint 1437 / 1438 / 1429.

## Links

- PDF (JUCS): https://www.lua.org/doc/jucs05.pdf
- SBLP version: https://www.lua.org/doc/sblp2005.pdf
- DOI: [10.3217/jucs-011-07-1159](https://doi.org/10.3217/jucs-011-07-1159)
- Lua 5.0 source: https://www.lua.org/source/5.0/
