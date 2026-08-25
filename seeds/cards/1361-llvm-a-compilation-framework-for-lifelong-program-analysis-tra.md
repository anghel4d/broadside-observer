---
title: "LLVM: A Compilation Framework for Lifelong Program Analysis & Transformation"
authors:
  - "Chris Lattner"
  - "Vikram S. Adve"
year: 2004
venue: "CGO 2004"
arxiv: null
doi: "10.1109/CGO.2004.1281665"
source: "https://doi.org/10.1109/CGO.2004.1281665"
topics:
  - "compiler-infrastructure"
  - "static-single-assignment"
  - "intermediate-representation"
  - "whole-program-optimization"
seed_rank: 1361
seed_batch: "archive-2026-08-26"
reviewed: "2026-08-26"
pool: "systems"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "Efficiently Computing Static Single Assignment Form and the Control Dependence Graph"
    url: "https://doi.org/10.1145/115372.115320"
    year: 1991
    arxiv: null
    doi: "10.1145/115372.115320"
  - title: "From System F to Typed Assembly Language"
    url: "https://doi.org/10.1145/237721.237771"
    year: 1998
    arxiv: null
    doi: "10.1145/237721.237771"
  - title: "Formal Certification of a Compiler Back-end, or: Programming a Compiler with a Proof Assistant"
    url: "https://doi.org/10.1145/1273442.1250736"
    year: 2006
    arxiv: null
    doi: "10.1145/1273442.1250736"
see:
  - "1001-from-system-f-to-typed-assembly-language"
  - "707-formal-certification-of-a-compiler-back-end-or-programming-a"
  - "674-rabbit-a-compiler-for-scheme"
---

# LLVM: A Compilation Framework for Lifelong Program Analysis & Transformation

## One-sentence takeaway

Preserve one analyzable, typed SSA program representation across compile, link, run, and idle time so transformations stop losing information at phase boundaries.

## Problem

Traditional compiler phases communicate through brittle object files and target-specific forms. Whole-program facts disappear after compilation, runtime profiles cannot easily flow back, and every language/backend pair rebuilds the same optimizer.

## Design

LLVM defines a language-independent low-level SSA IR with explicit typed address arithmetic, control flow, calls, and exception support; a compact persistent bitcode carries that IR between phases. Front ends lower language semantics once, reusable passes transform the common form, and back ends lower late enough to retain optimization opportunities.

## Evidence

CGO 2004, pp. 75–88. Lattner and Adve evaluate representation size, compile-time behavior, interprocedural analysis, and case studies spanning link-time and runtime transformation. The framework’s enduring evidence is architectural: a shared IR decoupled a large ecosystem of front ends, optimizers, JITs, tools, and targets.

## Limitations

The paper’s “lifelong” runtime vision is broader than what most LLVM deployments use. The IR is not source semantics, its historical type system did not guarantee memory safety, undefined behavior can magnify mistakes, and a universal IR still leaks target and language assumptions.

## Implications for Broadside

Broadside should standardize one small, serializable IR boundary between ano rules/arrays and Anoptic CPU/GPU back ends. Keep provenance and high-level facts as metadata, run the same verifier everywhere, and make optimization passes ordinary composable modules. Do not let C strings or SPIR-V become the first shared representation.

## Bottom line

Mint the infrastructure contract, not “LLVM the product.” SSA (1360) is the value discipline; typed assembly (1001) is the safety extreme; LLVM is the durable pass boundary.

## Links

- DOI: [10.1109/CGO.2004.1281665](https://doi.org/10.1109/CGO.2004.1281665)
