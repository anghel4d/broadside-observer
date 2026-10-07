---
title: "Perceus: Garbage Free Reference Counting with Reuse"
authors: ["Alex Reinking", "Ningning Xie", "Leonardo de Moura", "Daan Leijen"]
year: 2021
venue: "PLDI 2021, pp. 96–111"
arxiv: null
doi: "10.1145/3453483.3454032"
source: "https://doi.org/10.1145/3453483.3454032"
topics: [reference-counting, in-place-update, memory-management, functional-but-in-place, interpreter-runtime]
seed_rank: 1859
seed_batch: "craft-2026-10-07"
reviewed: "2026-10-07"
pool: "languages"
relevance_score: 9
lineage: memory-reclamation
cites:
  - title: "Koka: Programming with Row Polymorphic Effect Types"
    url: "https://arxiv.org/abs/1406.2061"
    year: 2014
    arxiv: "1406.2061"
    doi: "10.4204/EPTCS.153.8"
  - title: "Counting Immutable Beans: Reference Counting Optimized for Purely Functional Programming"
    url: "https://arxiv.org/abs/1908.05647"
    year: 2019
    arxiv: "1908.05647"
    doi: null
see:
  - "463-koka-programming-with-row-polymorphic-effect-types"
---

# Perceus: Garbage Free Reference Counting with Reuse

## One-sentence takeaway

Perceus inserts *precise* dup/drop reference-count operations into a functional core with explicit control flow — provably sound and garbage-free (only live references are retained) — and that precision enables reuse analysis: when a matched constructor's count is one, its memory is reused in place, so purely functional code runs as in-place mutation ("functional but in-place", FBIP).

## Why it matters here

ano is a value-semantics array language that will live or die on not copying arrays. The library has the static routes to in-place writes (Futhark's uniqueness 1002, Destination Calculus 1034, Lua's runtime 1476, regions 030/1657) but not the dynamic one that Dyalog-style interpreters actually ship: reference counts with "if count==1, mutate". Perceus is the precise, formalized version of that rule, with drop/reuse specialization to strip most count traffic from hot paths. It is the memory story to pick before the ano interpreter's value representation hardens.

## Key ideas

- **Precise RC.** Ownership is tracked in a linear resource calculus (λ1); each value is dropped right after its last use rather than at scope end (unlike C++ `shared_ptr` or Swift), proved sound and garbage-free for cycle-free programs.
- **Borrowing.** Borrowed parameters avoid dup/drop pairs at call sites; the derivation threads owned vs borrowed environments.
- **Drop specialization.** Inlines the drop of a just-matched constructor, fusing many increments/decrements away on the fast path.
- **Reuse analysis + reuse specialization.** A matched cell with a unique reference is handed to the next allocation of the same size (a reuse token), and unchanged fields are not rewritten — map over a unique list or a red-black tree insert becomes in-place.
- **FBIP.** Like tail calls let you write loops as calls, guaranteed reuse lets you write in-place algorithms functionally (e.g. a stack-less Morris traversal); shared inputs degrade gracefully to copying only the shared spine.
- **Performance.** Implemented in Koka (compiles to C11, no runtime system); competitive with OCaml, Haskell, Swift and Java on allocation-heavy benchmarks, and the functional tree insert is within 10% of C++ `std::map`.

## Caveats

No cycle collector: cycles can only arise through explicit mutable references and must be broken by hand (as in Swift). Thread-shared objects need atomic counts — Koka tracks when values become shared, and ano must too if arrays cross into Anoptic job threads. Requires a functional core with explicit control flow; retrofitting to an untyped dynamic interpreter needs care. Cite Lean 4's "Counting Immutable Beans" as the predecessor; do not remint Koka 463, Destination Calculus 1034, Futhark 1002.

## Links

- DOI: https://doi.org/10.1145/3453483.3454032
- PDF (author copy): https://xnning.github.io/papers/perceus.pdf
- PDF (Microsoft Research): https://www.microsoft.com/en-us/research/wp-content/uploads/2021/06/perceus-pldi21.pdf
- Koka: https://koka-lang.github.io/
