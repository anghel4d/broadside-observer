---
title: "WebAssembly Garbage Collection and Reference Types"
authors:
  - "Andreas Rossberg"
  - "WebAssembly CG"
year: 2023
venue: "WebAssembly Specification proposals"
arxiv: null
doi: null
source: "https://github.com/WebAssembly/gc"
topics:
  - wasm-gc
  - type-systems
  - type-safety
seed_rank: 1380
seed_batch: "to1000-types-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 9
lineage: type-safety
cites:
  - title: "Understanding TypeScript"
    url: "https://doi.org/10.1007/978-3-662-44202-9_11"
    year: 2014
    arxiv: null
    doi: "10.1007/978-3-662-44202-9_11"
    card: "1321-understanding-typescript"
  - title: "Typeful Programming"
    url: "https://www.microsoft.com/en-us/research/publication/typeful-programming/"
    year: 1989
    arxiv: null
    doi: null
    card: "1336-typeful-programming"
  - title: "Polymorphic Type Assignment and Type System Design"
    url: "https://doi.org/10.1016/0304-3975(93)90111-6"
    year: 1993
    arxiv: null
    doi: "10.1016/0304-3975(93)90111-6"
    card: "1343-polymorphic-type-assignment-and-type-system-design"
---

# WebAssembly Garbage Collection and Reference Types

## One-sentence takeaway

Wasm-GC adds typed references and GC heap types to WebAssembly.

## Why it matters here

Managed-language type structures on Wasm—critical for high-level language targets.

## Key ideas

- Reference and heap types.
- Struct/array types.
- GC with validation.

## Caveats

- Seed card from type-safety shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.
- Verify primary PDF/DOI before citation; some industrial docs lack stable DOIs.

## Links

- URL: https://github.com/WebAssembly/gc
