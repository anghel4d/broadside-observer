---
title: "Typed Closure Conversion"
authors:
  - "Yasuhiko Minamide"
  - "Greg Morrisett"
  - "Robert Harper"
year: 1996
venue: "POPL"
arxiv: null
doi: "10.1145/237721.237791"
source: "https://doi.org/10.1145/237721.237791"
topics:
  - "closure-conversion"
  - "typed-compilation"
  - "existential-types"
  - "typed-programming-systems"
seed_rank: 1140
seed_batch: "archive-2026-08-22"
reviewed: "2026-08-22"
pool: "languages"
relevance_score: 10
lineage: typed-closure-conversion
cites:
  - title: "From System F to Typed Assembly Language"
    url: "https://doi.org/10.1145/268946.268954"
    year: 1998
    arxiv: null
    doi: "10.1145/268946.268954"
  - title: "The Essence of Compiling with Continuations"
    url: "https://doi.org/10.1145/173262.155113"
    year: 1993
    arxiv: null
    doi: "10.1145/173262.155113"
  - title: "Compiling with Continuations"
    url: "https://doi.org/10.1017/CBO9780511609619"
    year: 1992
    arxiv: null
    doi: "10.1017/CBO9780511609619"
  - title: "Defunctionalization at Work"
    url: "https://doi.org/10.1145/773184.773202"
    year: 2001
    arxiv: null
    doi: "10.1145/773184.773202"
see:
  - "1001-from-system-f-to-typed-assembly-language"
  - "666-the-essence-of-compiling-with-continuations"
  - "667-compiling-with-continuations"
  - "643-defunctionalization-at-work"
  - "032-implementation-of-the-typed-call-by-value-calculus-using-a-s"
---

# Typed Closure Conversion

## One-sentence takeaway

Closure-convert *and stay typed*: a function becomes an existential package `{code, env}`, so later phases (representation analysis, tag-free GC, TAL) still see a well-typed program.

## Why it matters here

CPS (666 / 667) and TAL (1001) assume the compiler can keep types through the pipeline. The missing step is the one that turns `λ` with free variables into a code pointer plus an environment record — almost always described on the untyped λ-calculus. Minamide–Morrisett–Harper 1996 is the typed account: simply-typed closures are existentials (the environment type is hidden, the code is a function of env × arg), and the polymorphic case needs translucency (Harper–Lillibridge) so the code can still see the environment's type. ano / GRID COMMAND compiling a functional DSL to C steal this, not an untyped "pack the free vars" pass that throws the types away before the C backend.

## Key ideas

- Closure = code abstracted on an extra environment parameter, plus a record of the free variables. Application opens the package, then calls.
- Simply-typed: map closures to existential types. The hidden witness is the environment's type; the code's type does not leak the layout, so two closures of the same source type can have different env records.
- Polymorphic: existential-only is not enough (the code must mention type variables that live in the env). Translucent types / singleton kinds from the module calculus make the env type visible to the code and opaque to the caller.
- Typed conversion enables tag-free GC and representation analysis *after* closure conversion, and makes the correctness proof a typed simulation.

## Caveats

- Environment *layout* (flat vs linked vs hybrid) is a separate decision; this paper is the typing, not the allocator.
- Flat closures copy; linked closures share and can leak. Typed conversion does not pick for you.
- This is the 1996 POPL simply-typed + polymorphic story. Later work (Morrisett TAL, C-like targets) instantiates it; TAL 1001 is the assembly end, not a substitute for this pass.

## Links

- DOI: [10.1145/237721.237791](https://doi.org/10.1145/237721.237791)
- Author PDF: [http://www.cs.cmu.edu/~rwh/papers/closures/popl96.pdf](http://www.cs.cmu.edu/~rwh/papers/closures/popl96.pdf)
