---
title: "Optimizing an ANSI C Interpreter with Superoperators"
authors: ["Todd A. Proebsting"]
year: 1995
venue: "POPL 1995"
arxiv: null
doi: "10.1145/199448.199526"
source: "https://doi.org/10.1145/199448.199526"
topics: [batched-interpreters-ffi, embedded-scripting-dsls]
seed_rank: 1438
seed_batch: "archive-2026-08-28"
reviewed: "2026-08-28"
pool: "languages"
relevance_score: 10
lineage: interpreter-dispatch
cites:
  - title: "Threaded Code"
    url: "https://doi.org/10.1145/362248.362270"
    year: 1973
    arxiv: null
    doi: "10.1145/362248.362270"
  - title: "Copy-and-Patch Compilation"
    url: "https://doi.org/10.1145/3485513"
    year: 2021
    arxiv: null
    doi: "10.1145/3485513"
  - title: "Optimizing Dynamically-Typed Object-Oriented Languages with Polymorphic Inline Caches"
    url: "https://doi.org/10.1145/113446.113468"
    year: 1991
    arxiv: null
    doi: "10.1145/113446.113468"
see:
  - "1437-threaded-code"
  - "1429-copy-and-patch-compilation"
  - "1362-optimizing-dynamically-typed-object-oriented-languages-with-po"
---

# Optimizing an ANSI C Interpreter with Superoperators

## One-sentence takeaway

Automatically fuse common opcode sequences into single “superoperator” instructions so an interpreter pays one dispatch for several logical operations — a compile-time specialization of the bytecode alphabet.

## Why it matters here

ano’s verb sequences and ECS query pipelines will have hot idioms (load-mask-fold, compare-branch, column gather). Proebsting shows you can *synthesize* those idioms into the ISA from traces of the base interpreter, without writing a full JIT. Threaded code (1437) is the substrate; PIC (1362) profiles shapes; copy-and-patch (1429) is the modern machine-code cousin. Superoperators are the cheap middle: keep a bytecode VM, shrink its dispatch tax.

## Key ideas

- **Base ISA + synthesized macros.** Start from a fine-grained opcode set; mine frequent n-grams; emit combined opcodes with fused semantics.
- **Interpreter specialization.** Generate C cases (or threaded bodies) for each superoperator so the fusion is real work collapsed, not just a rename.
- **Profile- or static-guided.** Choose candidates from dynamic traces or static patterns; trade code-size growth for fewer dispatches.
- **Evidence.** POPL 1995. Measured large speedups on an ANSI C interpreter by collapsing common sequences — a standard citation wherever bytecode VMs discuss “superinstructions.”

## Caveats

Code-size and I-cache pressure; explosion of combinations if greedy; less helpful once a real JIT/copy-and-patch path exists for the hottest loops. Not a substitute for type feedback (1362) or machine-code templates (1429). Keep the base ISA for debugging and cold paths.

## Links

- DOI: https://doi.org/10.1145/199448.199526
- ACM DL: https://dl.acm.org/doi/10.1145/199448.199526
