---
title: "Implementing Lazy Functional Languages on Stock Hardware: the Spineless Tagless G-machine"
authors:
  - "Simon L. Peyton Jones"
year: 1992
venue: "Journal of Functional Programming 2(2)"
arxiv: null
doi: "10.1017/S0956796800000319"
source: "https://www.microsoft.com/en-us/research/wp-content/uploads/1992/04/spineless-tagless-gmachine.pdf"
topics:
  - lazy-evaluation
  - abstract-machines
  - functional-compilation
seed_rank: 1662
seed_batch: "archive-2026-09-10"
reviewed: "2026-09-10"
pool: "languages"
relevance_score: 10
lineage: spineless-tagless-g-machine
cites:
  - title: "The Essence of Compiling with Continuations"
    url: "https://doi.org/10.1145/155090.155113"
    year: 1993
    arxiv: null
    doi: "10.1145/155090.155113"
  - title: "Lambda Lifting: Transforming Programs to Recursive Equations"
    url: "https://doi.org/10.1016/0167-6423(85)90002-7"
    year: 1985
    arxiv: null
    doi: "10.1016/0167-6423(85)90002-7"
see:
  - "666-the-essence-of-compiling-with-continuations"
  - "667-compiling-with-continuations"
  - "1160-lambda-lifting-transforming-programs-to-recursive-equa"
---

# Implementing Lazy Functional Languages on Stock Hardware: the Spineless Tagless G-machine

## One-sentence takeaway

Peyton Jones’s STG machine evaluates lazy higher-order programs via push/enter with unboxed values and updateable thunks on ordinary stock CPUs — the abstract machine that GHC actually compiled to for decades.

## Why it matters here

ano’s array/columnar evaluation story and any future lazy/staged scripting path need a real operational model, not just denotational sugar. STG is the production-hardened one: closures, update frames, unboxed arithmetic, and a clear mapping onto C/register machines. Complements CPS/ANF cards 666–667 and lambda lifting 1160 without reminting them.

## Key ideas

- **Spineless.** No spine of apply nodes walked at runtime; the machine enters closures directly (push/enter) rather than building nested applications.
- **Tagless.** Heap objects are not tagged by constructors in the classical G-machine sense; info-tables / entry codes distinguish layouts.
- **Unboxed values & update frames.** Fast paths for Int# / Float# sit beside lazy thunks that overwrite themselves after evaluation — the key to competitive numeric code.
- **Stock hardware target.** Designed to map onto C and RISC registers, not a custom graph-reduction CPU.

## Caveats

- Modern GHC has moved through STG → Cmm → LLVM/NCG; this 1992 paper is the classic STG core, not today’s full pipeline. Do not remint Compiling with Continuations 667 / Essence 666.
- Strict array languages (ano, Futhark, SAC) usually want the opposite default — use STG as the *lazy* reference, not as ano’s evaluation model.
- Shortcut deforestation / foldr-build near-keepers left unseen (MSR PDF 404 this egress).

## Links

- Microsoft Research PDF: https://www.microsoft.com/en-us/research/wp-content/uploads/1992/04/spineless-tagless-gmachine.pdf
- DOI: https://doi.org/10.1017/S0956796800000319
