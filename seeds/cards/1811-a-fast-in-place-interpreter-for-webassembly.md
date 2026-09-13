---
title: "A Fast In-Place Interpreter for WebAssembly"
authors: ["Ben L. Titzer"]
year: 2022
venue: "OOPSLA 2022 (PACMPL)"
arxiv: "2205.01183"
doi: "10.1145/3563311"
source: "https://arxiv.org/abs/2205.01183"
topics: [interpreter, wasm, embedded-scripting]
seed_rank: 1811
seed_batch: "craft-2026-09-13"
reviewed: "2026-09-13"
pool: "languages"
relevance_score: 10
lineage: batched-interpreters
cites:
  - title: "The Implementation of Lua 5.0"
    url: "https://www.lua.org/doc/jucs05.pdf"
    year: 2005
    arxiv: null
    doi: null
  - title: "Partial Evaluation, Whole-Program Compilation"
    url: "https://arxiv.org/abs/2411.10559"
    year: 2025
    arxiv: "2411.10559"
    doi: null
  - title: "Threaded Code"
    url: "https://doi.org/10.1145/362248.362270"
    year: 1973
    arxiv: null
    doi: "10.1145/362248.362270"
see:
  - "1476-the-implementation-of-lua-5-0"
  - "1557-partial-evaluation-whole-program-compilation"
  - "1429-copy-and-patch-compilation"
  - "1437-threaded-code"
---

# A Fast In-Place Interpreter for WebAssembly

## One-sentence takeaway

Titzer’s Wizard engine interprets Wasm *in place* — no bytecode rewrite, no second IR — using a validation-time sidetable for O(1) branches and stack metadata, matching custom-format interpreter speed with lower startup RAM.

## Why it matters here

ano / GRID COMMAND scripting this week sits on Lua 5.0 impl 1476, weval/PE whole-program 1557, copy-and-patch 1429, and threaded code 1437. The leftover for an embedded *first tier* is a fast interpreter that does not spend compile time or code space on cold paths — exactly the Wasm hole Titzer fills. If ano targets Wasm (or a Wasm-shaped bytecode), start with in-place interpret + sidetable before a baseline JIT; if not, steal the sidetable/metadata idea for ano’s own bytecode.

## Key ideas

- **In-place execution.** Run the original Wasm bytes; avoid rewrite to a compact internal format that costs memory and startup.
- **Sidetable from validation.** Branch targets and stack metadata materialised once at validate time → O(1) control flow without mutating code.
- **Tier niche.** Fills the interpreter slot between “no tier” and baseline compilers; space-efficient for infrequently executed code.
- **Measured.** On-par with interpreting a custom internal format; lower footprint than rewrite-based designs / pathological classic interpreters.

## Caveats

PACMPL OOPSLA 2022, arXiv `2205.01183`, DOI `10.1145/3563311`. Wasm-specific bytecode design — porting lessons need care for ano’s own ISA. Brunthaler quickening / multi-level quickening remain cite-not-mint leftovers for dynamic-language interpreters. Do not remint Lua 1476, weval 1557, copy-and-patch 1429, or threaded code 1437.

## Links

- arXiv abs: https://arxiv.org/abs/2205.01183
- PDF: https://arxiv.org/pdf/2205.01183
- DOI: https://doi.org/10.1145/3563311
