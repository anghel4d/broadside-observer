---
title: "Dynamo: A Transparent Dynamic Optimization System"
authors: ["Vasanth Bala", "Evelyn Duesterwald", "Sanjeev Banerjia"]
year: 2000
venue: "PLDI 2000"
arxiv: null
doi: "10.1145/349299.349303"
source: "https://doi.org/10.1145/349299.349303"
topics: [batched-interpreters-ffi, embedded-scripting-dsls]
seed_rank: 1439
seed_batch: "archive-2026-08-28"
reviewed: "2026-08-28"
pool: "languages"
relevance_score: 9
lineage: adaptive-optimization
cites:
  - title: "Optimizing Dynamically-Typed Object-Oriented Languages with Polymorphic Inline Caches"
    url: "https://doi.org/10.1145/113446.113468"
    year: 1991
    arxiv: null
    doi: "10.1145/113446.113468"
  - title: "Copy-and-Patch Compilation"
    url: "https://doi.org/10.1145/3485513"
    year: 2021
    arxiv: null
    doi: "10.1145/3485513"
  - title: "Optimizing an ANSI C Interpreter with Superoperators"
    url: "https://doi.org/10.1145/199448.199526"
    year: 1995
    arxiv: null
    doi: "10.1145/199448.199526"
see:
  - "1362-optimizing-dynamically-typed-object-oriented-languages-with-po"
  - "1429-copy-and-patch-compilation"
  - "1438-optimizing-an-ansi-c-interpreter-with-superoperators"
  - "1361-llvm-a-compilation-framework-for-lifelong-program-analysis-tra"
---

# Dynamo: A Transparent Dynamic Optimization System

## One-sentence takeaway

Intercept native execution, detect hot instruction traces across taken branches, emit a contiguous optimized fragment cache, and fall back transparently — dynamic optimization without a language JIT contract.

## Why it matters here

ano and Anoptic will mix interpreted rules, generated kernels, and foreign C/Vulkan. Dynamo’s lesson is the *trace cache as a product*: start with correct slow execution, form hot paths across control flow, optimize the linear fragment, link exits. That is the architecture under many later JITs and is complementary to PIC (1362), superoperators (1438), and copy-and-patch (1429). Use it as the mental model for “specialize what actually runs,” not as a mandate to binary-translate x86.

## Key ideas

- **Transparent interception.** No recompile of the source program; the system watches native control flow.
- **Hot trace formation.** Across taken branches, grow a linear region until a stop condition; that region becomes the optimization unit.
- **Fragment cache.** Emit optimized native code for the trace; subsequent entries jump into the cache; bail out to interpreter/original on rare exits.
- **Evidence.** PLDI 2000 (HP Labs). Showed that transparent dynamic optimization can *speed up* already-optimized binaries on real workloads — the existence proof for trace-based systems.

## Caveats

Hardware, OS, and security landscapes changed (W^X, Spectre, codesigning); full transparent binary Dynamo is rarely what you ship in 2026. The transferable artifact is the trace/fragment architecture, not the HP-UX x86/PA-RISC implementation. Not Amazon Dynamo (key-value store).

## Links

- DOI: https://doi.org/10.1145/349299.349303
- ACM DL: https://dl.acm.org/doi/10.1145/349299.349303
