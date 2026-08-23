---
title: "Lambda Lifting: Transforming Programs to Recursive Equations"
authors:
  - "Thomas Johnsson"
year: 1985
venue: "FPCA"
arxiv: null
doi: "10.1007/3-540-15975-4_37"
source: "https://doi.org/10.1007/3-540-15975-4_37"
topics:
  - "lambda-lifting"
  - "supercombinators"
  - "compilers"
  - "graph-reduction"
seed_rank: 1160
seed_batch: "archive-2026-08-24"
reviewed: "2026-08-24"
pool: "languages"
relevance_score: 9
lineage: lambda-lifting
cites:
  - title: "RABBIT: A Compiler for Scheme"
    url: "https://dspace.mit.edu/handle/1721.1/6915"
    year: 1978
    arxiv: null
    doi: null
  - title: "Typed Closure Conversion"
    url: "https://doi.org/10.1145/237721.237791"
    year: 1996
    arxiv: null
    doi: "10.1145/237721.237791"
  - title: "Defunctionalization at Work"
    url: "https://doi.org/10.1145/773184.773202"
    year: 2001
    arxiv: null
    doi: "10.1145/773184.773202"
  - title: "The Implementation of Functional Programming Languages"
    url: "https://www.microsoft.com/en-us/research/publication/the-implementation-of-functional-programming-languages/"
    year: 1987
    arxiv: null
    doi: null
see:
  - "674-rabbit-a-compiler-for-scheme"
  - "1140-typed-closure-conversion"
  - "643-defunctionalization-at-work"
  - "704-the-implementation-of-functional-programming-languages"
---

# Lambda Lifting: Transforming Programs to Recursive Equations

## One-sentence takeaway

Turn nested functions with free variables into a flat set of global recursive equations by *parameter lifting* then *block floating* — graph reduction (and a lot of later compilers) run on that, not on closures.

## Problem

A lexically nested function has free variables. An environment machine keeps a linked frame (RABBIT 674 does this via CPS). A graph reducer cannot; every supercombinator must be closed. Hughes's supercombinators (1982) maximize full laziness by floating each maximal free expression. Peyton Jones (704) teaches the simple lifter. Typed closure conversion (1140) *keeps* the environment as a record and *stays typed* — the opposite default. Lazy ML's G-machine wanted directly recursive supercombinators, not Hughes's `$g`-passing style.

## Design

Johnsson's two stages, given a program already using `letrec` for both values and functions: (1) *parameter lifting* — η-expand each local function with its free variables and update every call site, so no function has free variables; (2) *block floating* — hoist the now-closed locals to the top level as a set of mutually recursive equations. The G-machine compiles those equations as rewrite rules. An attribute-grammar formulation (1986 thesis revision) makes the free-variable and call-graph transitive closures explicit. Directly recursive combinators are preferred over Hughes-style extra parameters because the G-machine back-end generates better code from them.

## Evidence

FPCA 1985, LNCS 201, pp. 190–203, DOI `10.1007/3-540-15975-4_37`. This is the named pass in GHC (with many later variants: Johnsson vs Peyton-Jones simple lifter, fully-lazy lambda lifting, selective lifting 2019). Danvy's lambda-*dropping* is the inverse (cite). Orbit (Kranz 1986) is the Scheme optimizing-compiler sibling of RABBIT — reject as 674-adjacent.

## Limitations

Lifting dumps every free variable into the parameter list; the call-graph transitive closure can over-abstract and kill register allocation. Selective lifting (later GHC) is the repair. This pass is untyped; 1140 is what you want if the pipeline after the pass must stay typed. Full laziness is Hughes, not Johnsson.

## Implications for Broadside

ano's lowering of nested lambdas in the scripting/query DSL should be this pass *or* 1140, chosen on purpose: G-machine / flatten-to-C-functions → Johnsson; typed-to-C with tag-free GC → 1140. Do not silently pack free vars in a compiler "closure conversion" comment that cites neither. GRID COMMAND AI utility functions nested inside a tick are the same transform.

## Bottom line

Mint lambda lifting. Supercombinators, Orbit, STG stay off the card; 674/1140/643/704 are the see-also.

## Links

- DOI: [10.1007/3-540-15975-4_37](https://doi.org/10.1007/3-540-15975-4_37)
- Thesis revision PDF (Internet Archive scan of the 1986 text): https://ia601204.us.archive.org/10/items/nonzen-cs-papers-bucket0/SHA256E-s202812--8877d0b4507bc5c238fd7ea2bab007bfaef604200e3fddad4d349fae3bed75f5.pdf
